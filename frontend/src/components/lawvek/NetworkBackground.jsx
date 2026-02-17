import { useEffect, useRef, useCallback, memo } from 'react';

export const NetworkBackground = memo(() => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null, radius: 220 });
    const shieldRef = useRef({ x: 0, y: 0, radiusX: 600, radiusY: 420, strength: 1.5 });
    const dimensionsRef = useRef({ width: 0, height: 0 });
    const lastFrameTimeRef = useRef(0);
    const gridRef = useRef({});

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        const shield = shieldRef.current;
        const mouse = mouseRef.current;
        
        // Grid cell size for spatial partitioning (performance optimization)
        const CELL_SIZE = 160;
        const MAX_DIST = 150;
        const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
        
        // Pre-calculate shield squared values
        const shieldRadiusXSq = shield.radiusX * shield.radiusX;
        const shieldRadiusYSq = shield.radiusY * shield.radiusY;

        const setCanvasSize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2); // Cap DPR for performance
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.scale(dpr, dpr);
            
            dimensionsRef.current = { width, height };
            shield.x = width / 2;
            shield.y = height / 2;
        };

        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Particle class with optimized methods
        class Particle {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseSize = Math.random() * 3.2 + 1.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.density = Math.random() * 30 + 1;
                
                // Royal color distribution
                const colorRoll = Math.random();
                if (colorRoll < 0.15) {
                    this.colorType = 0; // gold
                    this.fillStyle = 'rgba(218, 165, 32, 0.9)';
                    this.shadowColor = 'rgba(255, 215, 0, 0.7)';
                    this.shadowBlur = 15;
                } else if (colorRoll < 0.25) {
                    this.colorType = 1; // royal
                    this.fillStyle = 'rgba(65, 105, 180, 0.75)';
                    this.shadowColor = 'rgba(65, 105, 180, 0.5)';
                    this.shadowBlur = 12;
                } else if (colorRoll < 0.30) {
                    this.colorType = 2; // anchor
                    this.fillStyle = 'rgba(25, 40, 65, 0.7)';
                    this.shadowColor = 'rgba(25, 40, 65, 0.4)';
                    this.shadowBlur = 10;
                } else {
                    this.colorType = 3; // standard
                    const depthOpacity = 0.45 + Math.random() * 0.35;
                    this.fillStyle = `rgba(35, 45, 65, ${depthOpacity})`;
                    this.shadowColor = 'rgba(35, 45, 65, 0.2)';
                    this.shadowBlur = 5;
                }
                
                this.pulseOffset = Math.random() * Math.PI * 2;
                this.depth = Math.random();
                this.depthFactor = 0.6 + this.depth * 0.4;
                this.sparklePhase = Math.random() * Math.PI * 2;
                this.anchorSizeMultiplier = this.colorType === 2 ? 2 : 1;
            }
        }

        const initParticles = () => {
            const { width, height } = dimensionsRef.current;
            const area = width * height;
            const count = Math.min(Math.floor(area / 7500), 250); // Slightly reduced for performance
            
            particlesRef.current = [];
            for (let i = 0; i < count; i++) {
                particlesRef.current.push(new Particle(width, height));
            }
        };

        // Build spatial grid for O(n) neighbor lookup instead of O(n²)
        const buildGrid = (particles) => {
            const grid = {};
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const cellX = Math.floor(p.x / CELL_SIZE);
                const cellY = Math.floor(p.y / CELL_SIZE);
                const key = `${cellX},${cellY}`;
                if (!grid[key]) grid[key] = [];
                grid[key].push(i);
            }
            return grid;
        };

        const animate = (time) => {
            animationRef.current = requestAnimationFrame(animate);
            
            // Frame rate limiting - target ~45fps for smooth but performant animation
            const elapsed = time - lastFrameTimeRef.current;
            if (elapsed < 22) return; // ~45fps
            lastFrameTimeRef.current = time;
            
            const { width, height } = dimensionsRef.current;
            const particles = particlesRef.current;
            
            // Clear with background color (faster than clearRect + separate bg)
            ctx.fillStyle = '#FFFEF8';
            ctx.fillRect(0, 0, width, height);
            
            // Update and draw particles
            const pulse = Math.sin(time * 0.0012) * 0.15 + 1;
            const sparkleTime = Math.sin(time * 0.003);
            
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                // Update position
                p.x += p.speedX * p.depthFactor;
                p.y += p.speedY * p.depthFactor;

                // Wrap around
                if (p.x > width + 10) p.x = -10;
                else if (p.x < -10) p.x = width + 10;
                if (p.y > height + 10) p.y = -10;
                else if (p.y < -10) p.y = height + 10;

                // Shield bounce
                const dx = p.x - shield.x;
                const dy = p.y - shield.y;
                const normalizedDistSq = (dx * dx) / shieldRadiusXSq + (dy * dy) / shieldRadiusYSq;
                
                if (normalizedDistSq < 1) {
                    const normalizedDist = Math.sqrt(normalizedDistSq);
                    const angle = Math.atan2(dy, dx);
                    const pushFactor = (1 - normalizedDist) * 3;
                    const pushX = Math.cos(angle) * shield.strength;
                    const pushY = Math.sin(angle) * shield.strength;
                    
                    p.x += pushX * pushFactor;
                    p.y += pushY * pushFactor;
                    
                    p.speedX += pushX * 0.02;
                    p.speedY += pushY * 0.02;
                    
                    const speedSq = p.speedX * p.speedX + p.speedY * p.speedY;
                    if (speedSq > 0.25) {
                        const speed = Math.sqrt(speedSq);
                        p.speedX = (p.speedX / speed) * 0.5;
                        p.speedY = (p.speedY / speed) * 0.5;
                    }
                }

                // Mouse interaction
                if (mouse.x !== null) {
                    const mdx = mouse.x - p.x;
                    const mdy = mouse.y - p.y;
                    const distSq = mdx * mdx + mdy * mdy;

                    if (distSq < mouse.radius * mouse.radius && distSq > 0) {
                        const dist = Math.sqrt(distSq);
                        const force = (mouse.radius - dist) / mouse.radius;
                        const easedForce = force * force * p.density * 0.35;
                        p.x -= (mdx / dist) * easedForce;
                        p.y -= (mdy / dist) * easedForce;
                    }
                }

                // Draw particle
                const particlePulse = Math.sin(time * 0.0012 + p.pulseOffset) * 0.15 + 1;
                let currentSize = p.baseSize * particlePulse * p.anchorSizeMultiplier;
                
                if (p.colorType === 0 && sparkleTime > 0.7) {
                    currentSize *= 1.3;
                }
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
                ctx.fillStyle = p.fillStyle;
                ctx.shadowColor = p.shadowColor;
                ctx.shadowBlur = p.shadowBlur;
                ctx.fill();
            }
            
            // Reset shadow for lines
            ctx.shadowBlur = 0;
            
            // Build spatial grid for efficient neighbor lookup
            const grid = buildGrid(particles);
            
            // Connect particles using spatial partitioning
            const drawnConnections = new Set();
            
            for (let i = 0; i < particles.length; i++) {
                const pA = particles[i];
                const cellX = Math.floor(pA.x / CELL_SIZE);
                const cellY = Math.floor(pA.y / CELL_SIZE);
                
                // Check neighboring cells (including current)
                for (let nx = cellX - 1; nx <= cellX + 1; nx++) {
                    for (let ny = cellY - 1; ny <= cellY + 1; ny++) {
                        const key = `${nx},${ny}`;
                        const cell = grid[key];
                        if (!cell) continue;
                        
                        for (let j = 0; j < cell.length; j++) {
                            const bIdx = cell[j];
                            if (bIdx <= i) continue; // Avoid duplicate checks
                            
                            const connectionKey = i < bIdx ? `${i}-${bIdx}` : `${bIdx}-${i}`;
                            if (drawnConnections.has(connectionKey)) continue;
                            
                            const pB = particles[bIdx];
                            const dx = pA.x - pB.x;
                            const dy = pA.y - pB.y;
                            const distSq = dx * dx + dy * dy;

                            if (distSq < MAX_DIST_SQ) {
                                const midX = (pA.x + pB.x) * 0.5;
                                const midY = (pA.y + pB.y) * 0.5;
                                const midDx = midX - shield.x;
                                const midDy = midY - shield.y;
                                const midNormalizedDistSq = (midDx * midDx) / shieldRadiusXSq + (midDy * midDy) / shieldRadiusYSq;
                                
                                if (midNormalizedDistSq < 0.7225) continue; // 0.85^2
                                
                                const midNormalizedDist = Math.sqrt(midNormalizedDistSq);
                                const shieldFade = Math.min(1, (midNormalizedDist - 0.85) / 0.3);
                                const dist = Math.sqrt(distSq);
                                const distRatio = dist / MAX_DIST;
                                const opacity = (1 - distRatio * distRatio) * 0.32 * shieldFade;

                                let lineOpacity = opacity;
                                if (mouse.x !== null) {
                                    const mouseDistSq = (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2;
                                    if (mouseDistSq < mouse.radius * mouse.radius) {
                                        const mouseRatio = Math.sqrt(mouseDistSq) / mouse.radius;
                                        lineOpacity = opacity + (1 - mouseRatio * mouseRatio) * 0.4 * shieldFade;
                                    }
                                }

                                let lineWidth = 0.9;
                                const colorA = pA.colorType;
                                const colorB = pB.colorType;
                                
                                if (colorA === 0 && colorB === 0) {
                                    ctx.strokeStyle = `rgba(218, 165, 32, ${lineOpacity * 2})`;
                                    lineWidth = 1.4;
                                } else if (colorA === 0 || colorB === 0) {
                                    ctx.strokeStyle = `rgba(200, 160, 50, ${lineOpacity * 1.5})`;
                                    lineWidth = 1.1;
                                } else if (colorA === 1 && colorB === 1) {
                                    ctx.strokeStyle = `rgba(65, 105, 180, ${lineOpacity * 1.8})`;
                                    lineWidth = 1.3;
                                } else if (colorA === 1 || colorB === 1) {
                                    ctx.strokeStyle = `rgba(80, 110, 160, ${lineOpacity * 1.3})`;
                                    lineWidth = 1;
                                } else if (colorA === 2 || colorB === 2) {
                                    ctx.strokeStyle = `rgba(35, 50, 75, ${lineOpacity * 1.4})`;
                                    lineWidth = 1.5;
                                } else {
                                    ctx.strokeStyle = `rgba(45, 55, 75, ${lineOpacity})`;
                                }

                                ctx.lineWidth = lineWidth;
                                ctx.beginPath();
                                ctx.moveTo(pA.x, pA.y);
                                ctx.lineTo(pB.x, pB.y);
                                ctx.stroke();
                                
                                drawnConnections.add(connectionKey);
                            }
                        }
                    }
                }
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseout', handleMouseLeave);

        setCanvasSize();
        initParticles();
        animate(0);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <>
            {/* Flowing gradient background - Royal & Premium */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            >
                {/* Base gradient - warm ivory */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, #FFFEF8 0%, #FDF9F3 50%, #F8F6F0 100%)',
                    }}
                />
                {/* Primary flowing gradient - royal blue & gold hints */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                rgba(255, 254, 250, 0.9) 0%,
                                rgba(230, 240, 255, 0.7) 15%,
                                rgba(255, 248, 235, 0.8) 30%,
                                rgba(240, 248, 255, 0.6) 45%,
                                rgba(255, 245, 225, 0.7) 60%,
                                rgba(235, 245, 255, 0.8) 75%,
                                rgba(255, 250, 240, 0.9) 90%,
                                rgba(255, 254, 250, 0.9) 100%
                            )`,
                        backgroundSize: '400% 400%',
                        animation: 'gradientFlow 18s ease-in-out infinite',
                    }}
                />
                {/* Secondary wave - gold shimmer */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `
                            linear-gradient(
                                225deg,
                                transparent 0%,
                                rgba(212, 175, 55, 0.12) 20%,
                                transparent 35%,
                                rgba(180, 150, 80, 0.08) 50%,
                                transparent 65%,
                                rgba(212, 175, 55, 0.1) 80%,
                                transparent 100%
                            )`,
                        backgroundSize: '300% 300%',
                        animation: 'gradientFlow 12s ease-in-out infinite reverse',
                    }}
                />
                {/* Tertiary wave - royal blue accent */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: `
                            linear-gradient(
                                45deg,
                                transparent 0%,
                                rgba(65, 105, 175, 0.06) 25%,
                                transparent 40%,
                                rgba(70, 130, 180, 0.08) 55%,
                                transparent 70%,
                                rgba(65, 105, 175, 0.05) 85%,
                                transparent 100%
                            )`,
                        backgroundSize: '350% 350%',
                        animation: 'gradientFlow 22s ease-in-out infinite',
                    }}
                />
            </div>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 0 }}
            />
            <style>{`
                @keyframes gradientFlow {
                    0% {
                        background-position: 0% 0%;
                    }
                    25% {
                        background-position: 100% 50%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    75% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
            `}</style>
        </>
    );
});
