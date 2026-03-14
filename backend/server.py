from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import requests
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=2000)
db = client[os.environ.get('DB_NAME', 'lawveksync')]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class Booking(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company_size: str
    scheduled_at: str  # ISO timestamp
    time_slot: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class BookingCreate(BaseModel):
    name: str
    email: str
    company_size: str
    scheduled_at: str = "Pending"
    time_slot: str = "Pending"
    type: str = "booking" # 'lead' or 'booking'

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/bookings", response_model=Booking)
async def create_booking(input: BookingCreate):
    capture_type = getattr(input, 'type', 'booking')
    logger.info(f"RECEIVED {capture_type.upper()} REQUEST: {input.email}")
    
    booking_dict = input.model_dump()
    booking_obj = Booking(**booking_dict)
    
    doc = booking_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    # 1. Try to save to MongoDB (Optional)
    try:
        _ = await db.bookings.insert_one(doc)
        logger.info("Saved to MongoDB successfully")
    except Exception as e:
        logger.warning(f"Database save failed (continuing): {str(e)}")
    
    # 2. Trigger Zapier Webhook ONLY for bookings (not initial leads)
    # This prevents users from getting "Confirmation" emails with "Pending" dates
    if capture_type == 'booking':
        zapier_url = os.environ.get('ZAPIER_WEBHOOK_URL')
        if zapier_url:
            logger.info(f"Triggering Zapier Hook: {zapier_url}")
            try:
                zapier_payload = doc.copy()
                zapier_payload.pop('_id', None) 
                response = requests.post(zapier_url, json=zapier_payload, timeout=10)
                logger.info(f"Zapier response: {response.status_code} - {response.text}")
            except Exception as e:
                logger.error(f"Zapier request failed: {str(e)}")
    
    # 3. Trigger Google Sheets Sync
    sheets_url = os.environ.get('GOOGLE_SHEET_WEBAPP_URL')
    if sheets_url:
        logger.info(f"Syncing to Google Sheets: {sheets_url}")
        try:
            sheets_payload = {
                "name": doc['name'],
                "email": doc['email'],
                "company_size": doc['company_size'],
                "sheet_url": "https://docs.google.com/spreadsheets/d/162ByO1FlETrq-71sO8Swu0wqPxm32gbM3syzx1jwKo4/edit"
            }
            response = requests.post(sheets_url, json=sheets_payload, timeout=10)
            logger.info(f"Google Sheets sync response: {response.status_code}")
        except Exception as e:
            logger.error(f"Google Sheets sync failed: {str(e)}")
            
    return booking_obj

@api_router.post("/leads", response_model=Booking)
async def create_lead(input: BookingCreate):
    input.type = "lead"
    return await create_booking(input)

@api_router.get("/bookings", response_model=List[Booking])
async def get_bookings():
    bookings = await db.bookings.find({}, {"_id": 0}).to_list(1000)
    for b in bookings:
        if isinstance(b['timestamp'], str):
            b['timestamp'] = datetime.fromisoformat(b['timestamp'])
    return bookings

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()