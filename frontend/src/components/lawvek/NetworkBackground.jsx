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

        const setCanvasSize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
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
                // Larger, more varied particle sizes for depth
                this.baseSize = Math.random() * 3 + 1.2;
                this.size = this.baseSize;
                // Slower, smoother movement
                this.speedX = (Math.random() - 0.5) * 0.25;
                this.speedY = (Math.random() - 0.5) * 0.25;
                this.density = Math.random() * 30 + 1;
                // Gold accent for ~10% of particles
                this.isGold = Math.random() < 0.10;
                // Large anchor nodes for ~4% of particles
                this.isAnchor = Math.random() < 0.04;
                // Pulsing phase offset
                this.pulseOffset = Math.random() * Math.PI * 2;
                // Depth layer (0-1) for parallax effect
                this.depth = Math.random();
                // Target position for smooth interpolation
                this.targetX = this.x;
                this.targetY = this.y;
            }

            draw(time) {
                // Smoother pulsing effect
                const pulse = Math.sin(time * 0.0015 + this.pulseOffset) * 0.2 + 1;
                const currentSize = this.isAnchor ? this.baseSize * 1.8 * pulse : this.baseSize * pulse;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);

                if (this.isGold) {
                    // Prominent gold particles
                    ctx.fillStyle = 'rgba(212, 175, 55, 0.75)';
                    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
                    ctx.shadowBlur = 12;
                } else if (this.isAnchor) {
                    // Large anchor nodes - dark and prominent
                    ctx.fillStyle = 'rgba(40, 50, 70, 0.6)';
                    ctx.shadowColor = 'rgba(40, 50, 70, 0.3)';
                    ctx.shadowBlur = 10;
                } else {
                    // Regular particles - visible but elegant
                    const depthOpacity = 0.35 + this.depth * 0.3;
                    ctx.fillStyle = `rgba(60, 70, 90, ${depthOpacity})`;
                    ctx.shadowColor = 'rgba(60, 70, 90, 0.15)';
                    ctx.shadowBlur = 4;
                }

                ctx.fill();
                ctx.shadowBlur = 0;
            }

            update(time) {
                // Smooth parallax movement based on depth
                const depthFactor = 0.6 + this.depth * 0.4;
                this.x += this.speedX * depthFactor;
                this.y += this.speedY * depthFactor;

                // Wrap around edges smoothly
                if (this.x > window.innerWidth + 10) this.x = -10;
                if (this.x < -10) this.x = window.innerWidth + 10;
                if (this.y > window.innerHeight + 10) this.y = -10;
                if (this.y < -10) this.y = window.innerHeight + 10;

                // Mouse interaction - smoother, gentler push
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        // Eased force for smoother interaction
                        const easedForce = force * force; // Quadratic easing
                        const forceX = (dx / dist) * easedForce * this.density * 0.3;
                        const forceY = (dy / dist) * easedForce * this.density * 0.3;
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
            // More particles for denser network
            const count = Math.min(Math.floor(area / 7000), 280);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = (time) => {
            const maxDist = 180;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        // Much stronger base opacity
                        const opacity = (1 - dist / maxDist) * 0.35;

                        // Brighter line if near mouse
                        let lineOpacity = opacity;
                        if (mouse.x != null) {
                            const midX = (particles[a].x + particles[b].x) / 2;
                            const midY = (particles[a].y + particles[b].y) / 2;
                            const mouseDist = Math.sqrt(
                                (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
                            );
                            if (mouseDist < mouse.radius) {
                                const boost = (1 - mouseDist / mouse.radius) * 0.45;
                                lineOpacity = opacity + boost;
                            }
                        }

                        // Thicker lines for anchor nodes
                        let lineWidth = 1;
                        if (particles[a].isAnchor || particles[b].isAnchor) {
                            lineWidth = 1.8;
                            lineOpacity *= 1.3;
                        }

                        // Gold line if both particles are gold
                        if (particles[a].isGold && particles[b].isGold) {
                            ctx.strokeStyle = `rgba(212, 175, 55, ${lineOpacity * 2})`;
                            lineWidth = 1.5;
                        } else if (particles[a].isGold || particles[b].isGold) {
                            // Subtle gold tint if one particle is gold
                            ctx.strokeStyle = `rgba(180, 155, 70, ${lineOpacity * 1.4})`;
                        } else {
                            ctx.strokeStyle = `rgba(50, 60, 80, ${lineOpacity})`;
                        }

                        ctx.lineWidth = lineWidth;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
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
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Flowing gradient background */}
            <div 
                className="fixed inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            >
                <div 
                    className="absolute inset-0 animate-gradient-flow"
                    style={{
                        background: `
                            linear-gradient(
                                135deg,
                                #F8FAFC 0%,
                                #EEF4F8 15%,
                                #F5F0E8 30%,
                                #FAFAFA 45%,
                                #E8F0F5 60%,
                                #FDF8F3 75%,
                                #F0F5F8 90%,
                                #F8FAFC 100%
                            )`,
                        backgroundSize: '400% 400%',
                        animation: 'gradientFlow 20s ease-in-out infinite',
                    }}
                />
                {/* Secondary wave layer */}
                <div 
                    className="absolute inset-0 opacity-50"
                    style={{
                        background: `
                            linear-gradient(
                                225deg,
                                transparent 0%,
                                rgba(212, 175, 55, 0.05) 20%,
                                transparent 40%,
                                rgba(180, 200, 220, 0.08) 60%,
                                transparent 80%,
                                rgba(212, 175, 55, 0.04) 100%
                            )`,
                        backgroundSize: '300% 300%',
                        animation: 'gradientFlow 15s ease-in-out infinite reverse',
                    }}
                />
            </div>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 pointer-events-none"
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
