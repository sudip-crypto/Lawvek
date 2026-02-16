import { useEffect, useRef } from 'react';

export const NetworkBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 180 };

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
                this.size = Math.random() * 2 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.density = Math.random() * 30 + 1;
                // Gold accent for ~8% of particles
                this.isGold = Math.random() < 0.08;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                if (this.isGold) {
                    ctx.fillStyle = 'rgba(212, 175, 55, 0.5)';
                    // Subtle glow for gold particles
                    ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
                    ctx.shadowBlur = 8;
                } else {
                    ctx.fillStyle = 'rgba(30, 30, 30, 0.2)';
                    ctx.shadowColor = 'rgba(0, 0, 0, 0.05)';
                    ctx.shadowBlur = 3;
                }

                ctx.fill();
                ctx.shadowBlur = 0;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges smoothly
                if (this.x > window.innerWidth + 10) this.x = -10;
                if (this.x < -10) this.x = window.innerWidth + 10;
                if (this.y > window.innerHeight + 10) this.y = -10;
                if (this.y < -10) this.y = window.innerHeight + 10;

                // Mouse interaction - gentle push away
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const forceX = (dx / dist) * force * this.density * 0.35;
                        const forceY = (dy / dist) * force * this.density * 0.35;
                        this.x -= forceX;
                        this.y -= forceY;
                    }
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            const area = window.innerWidth * window.innerHeight;
            const count = Math.min(Math.floor(area / 10000), 200);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            const maxDist = 140;

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const opacity = (1 - dist / maxDist) * 0.12;

                        // Brighter line if near mouse
                        let lineOpacity = opacity;
                        if (mouse.x != null) {
                            const midX = (particles[a].x + particles[b].x) / 2;
                            const midY = (particles[a].y + particles[b].y) / 2;
                            const mouseDist = Math.sqrt(
                                (mouse.x - midX) ** 2 + (mouse.y - midY) ** 2
                            );
                            if (mouseDist < mouse.radius) {
                                const boost = (1 - mouseDist / mouse.radius) * 0.25;
                                lineOpacity = opacity + boost;
                            }
                        }

                        // Gold line if both particles are gold
                        if (particles[a].isGold && particles[b].isGold) {
                            ctx.strokeStyle = `rgba(212, 175, 55, ${lineOpacity * 2.5})`;
                        } else if (particles[a].isGold || particles[b].isGold) {
                            // Subtle gold tint if one particle is gold
                            ctx.strokeStyle = `rgba(180, 160, 80, ${lineOpacity * 1.2})`;
                        } else {
                            ctx.strokeStyle = `rgba(30, 30, 30, ${lineOpacity})`;
                        }

                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }

            connectParticles();
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
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 0,
                background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F5F5 100%)',
            }}
        />
    );
};
