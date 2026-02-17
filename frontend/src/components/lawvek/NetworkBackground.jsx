import { useEffect, useRef } from 'react';

export const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 220 };
        
        // Invisible shield around center for readability
        const shield = {
            x: 0,
            y: 0,
            radiusX: 600,
            radiusY: 420,
            strength: 1.5
        };

        const setCanvasSize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            shield.x = window.innerWidth / 2;
            shield.y = window.innerHeight / 2;
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

        class Particle {
            constructor() {
                this.x = Math.random() * window.innerWidth;
                this.y = Math.random() * window.innerHeight;
                this.baseSize = Math.random() * 3.2 + 1.5;
                this.size = this.baseSize;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.density = Math.random() * 30 + 1;
                
                // Royal color distribution
                const colorRoll = Math.random();
                if (colorRoll < 0.15) {
                    this.colorType = 'gold';
                } else if (colorRoll < 0.25) {
                    this.colorType = 'royal';
                } else if (colorRoll < 0.30) {
                    this.colorType = 'anchor';
                } else {
                    this.colorType = 'standard';
                }
                
                this.pulseOffset = Math.random() * Math.PI * 2;
                this.depth = Math.random();
                this.sparklePhase = Math.random() * Math.PI * 2;
            }

            draw(time) {
                const pulse = Math.sin(time * 0.0012 + this.pulseOffset) * 0.15 + 1;
                let currentSize = this.baseSize * pulse;
                
                if (this.colorType === 'gold') {
                    const sparkle = Math.sin(time * 0.003 + this.sparklePhase);
                    if (sparkle > 0.7) {
                        currentSize *= 1.3;
                    }
                }
                
                if (this.colorType === 'anchor') {
                    currentSize = this.baseSize * 2 * pulse;
                }
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);

                if (this.colorType === 'gold') {
                    ctx.fillStyle = 'rgba(218, 165, 32, 0.9)';
                    ctx.shadowColor = 'rgba(255, 215, 0, 0.7)';
                    ctx.shadowBlur = 15;
                } else if (this.colorType === 'royal') {
                    ctx.fillStyle = 'rgba(65, 105, 180, 0.75)';
                    ctx.shadowColor = 'rgba(65, 105, 180, 0.5)';
                    ctx.shadowBlur = 12;
                } else if (this.colorType === 'anchor') {
                    ctx.fillStyle = 'rgba(25, 40, 65, 0.7)';
                    ctx.shadowColor = 'rgba(25, 40, 65, 0.4)';
                    ctx.shadowBlur = 10;
                } else {
                    const depthOpacity = 0.45 + this.depth * 0.35;
                    ctx.fillStyle = `rgba(35, 45, 65, ${depthOpacity})`;
                    ctx.shadowColor = 'rgba(35, 45, 65, 0.2)';
                    ctx.shadowBlur = 5;
                }

                ctx.fill();
                ctx.shadowBlur = 0;
            }

            update(time) {
                const depthFactor = 0.6 + this.depth * 0.4;
                this.x += this.speedX * depthFactor;
                this.y += this.speedY * depthFactor;

                if (this.x > window.innerWidth + 10) this.x = -10;
                if (this.x < -10) this.x = window.innerWidth + 10;
                if (this.y > window.innerHeight + 10) this.y = -10;
                if (this.y < -10) this.y = window.innerHeight + 10;

                // Shield bounce
                const dx = this.x - shield.x;
                const dy = this.y - shield.y;
                const normalizedDist = Math.sqrt(
                    (dx * dx) / (shield.radiusX * shield.radiusX) + 
                    (dy * dy) / (shield.radiusY * shield.radiusY)
                );
                
                if (normalizedDist < 1) {
                    const angle = Math.atan2(dy, dx);
                    const pushX = Math.cos(angle) * shield.strength;
                    const pushY = Math.sin(angle) * shield.strength;
                    
                    this.x += pushX * (1 - normalizedDist) * 3;
                    this.y += pushY * (1 - normalizedDist) * 3;
                    
                    this.speedX += pushX * 0.02;
                    this.speedY += pushY * 0.02;
                    
                    const maxSpeed = 0.5;
                    const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
                    if (currentSpeed > maxSpeed) {
                        this.speedX = (this.speedX / currentSpeed) * maxSpeed;
                        this.speedY = (this.speedY / currentSpeed) * maxSpeed;
                    }
                }

                // Mouse interaction
                if (mouse.x != null) {
                    const mdx = mouse.x - this.x;
                    const mdy = mouse.y - this.y;
                    const dist = Math.sqrt(mdx * mdx + mdy * mdy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const easedForce = force * force;
                        const forceX = (mdx / dist) * easedForce * this.density * 0.35;
                        const forceY = (mdy / dist) * easedForce * this.density * 0.35;
                        this.x -= forceX;
                        this.y -= forceY;
                    }
                }

                this.draw(time);
            }
        }

        const initParticles = () => {
            particles = [];
            const area = window.innerWidth * window.innerHeight;
            const count = Math.min(Math.floor(area / 7000), 280);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = (time) => {
            const maxDist = 150;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const midX = (particles[a].x + particles[b].x) / 2;
                        const midY = (particles[a].y + particles[b].y) / 2;
                        const midDx = midX - shield.x;
                        const midDy = midY - shield.y;
                        const midNormalizedDist = Math.sqrt(
                            (midDx * midDx) / (shield.radiusX * shield.radiusX) + 
                            (midDy * midDy) / (shield.radiusY * shield.radiusY)
                        );
                        
                        if (midNormalizedDist < 0.85) continue;
                        
                        const shieldFade = Math.min(1, (midNormalizedDist - 0.85) / 0.3);
                        const distRatio = dist / maxDist;
                        const opacity = (1 - distRatio * distRatio) * 0.32 * shieldFade;

                        let lineOpacity = opacity;
                        if (mouse.x != null) {
                            const mouseDist = Math.sqrt(
                                (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
                            );
                            if (mouseDist < mouse.radius) {
                                const mouseRatio = mouseDist / mouse.radius;
                                const boost = (1 - mouseRatio * mouseRatio) * 0.4;
                                lineOpacity = opacity + boost * shieldFade;
                            }
                        }

                        let lineWidth = 0.9;
                        const pA = particles[a];
                        const pB = particles[b];
                        
                        if (pA.colorType === 'gold' && pB.colorType === 'gold') {
                            ctx.strokeStyle = `rgba(218, 165, 32, ${lineOpacity * 2})`;
                            lineWidth = 1.4;
                        } else if (pA.colorType === 'gold' || pB.colorType === 'gold') {
                            ctx.strokeStyle = `rgba(200, 160, 50, ${lineOpacity * 1.5})`;
                            lineWidth = 1.1;
                        } else if (pA.colorType === 'royal' && pB.colorType === 'royal') {
                            ctx.strokeStyle = `rgba(65, 105, 180, ${lineOpacity * 1.8})`;
                            lineWidth = 1.3;
                        } else if (pA.colorType === 'royal' || pB.colorType === 'royal') {
                            ctx.strokeStyle = `rgba(80, 110, 160, ${lineOpacity * 1.3})`;
                            lineWidth = 1;
                        } else if (pA.colorType === 'anchor' || pB.colorType === 'anchor') {
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
                    }
                }
            }
        };

        const animate = (time) => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(time);
            }

            connectParticles(time);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        setCanvasSize();
        initParticles();
        animate(0);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
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
};
