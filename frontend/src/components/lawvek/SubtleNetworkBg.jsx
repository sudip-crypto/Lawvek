import { useEffect, useRef } from 'react';

export const SubtleNetworkBg = ({ className = '' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const setCanvasSize = () => {
            const rect = canvas.parentElement.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };

        class Particle {
            constructor(width, height) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseSize = Math.random() * 2 + 0.8;
                this.speedX = (Math.random() - 0.5) * 0.1;
                this.speedY = (Math.random() - 0.5) * 0.1;
                
                // Subtle color distribution
                const colorRoll = Math.random();
                if (colorRoll < 0.08) {
                    this.colorType = 'gold';
                } else if (colorRoll < 0.15) {
                    this.colorType = 'royal';
                } else {
                    this.colorType = 'standard';
                }
                
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            draw(time, width, height) {
                const pulse = Math.sin(time * 0.0008 + this.pulseOffset) * 0.1 + 1;
                const currentSize = this.baseSize * pulse;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);

                if (this.colorType === 'gold') {
                    ctx.fillStyle = 'rgba(218, 165, 32, 0.35)';
                } else if (this.colorType === 'royal') {
                    ctx.fillStyle = 'rgba(65, 105, 180, 0.3)';
                } else {
                    ctx.fillStyle = 'rgba(80, 90, 110, 0.2)';
                }

                ctx.fill();
            }

            update(time, width, height) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around edges
                if (this.x > width + 10) this.x = -10;
                if (this.x < -10) this.x = width + 10;
                if (this.y > height + 10) this.y = -10;
                if (this.y < -10) this.y = height + 10;

                this.draw(time, width, height);
            }
        }

        const initParticles = () => {
            particles = [];
            const rect = canvas.parentElement.getBoundingClientRect();
            const area = rect.width * rect.height;
            // Fewer particles for subtle effect
            const count = Math.min(Math.floor(area / 20000), 60);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(rect.width, rect.height));
            }
        };

        const connectParticles = (time) => {
            const maxDist = 120;
            const rect = canvas.parentElement.getBoundingClientRect();

            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const distRatio = dist / maxDist;
                        // Very subtle opacity
                        const opacity = (1 - distRatio * distRatio) * 0.12;

                        const pA = particles[a];
                        const pB = particles[b];
                        
                        if (pA.colorType === 'gold' || pB.colorType === 'gold') {
                            ctx.strokeStyle = `rgba(200, 160, 50, ${opacity * 1.2})`;
                        } else if (pA.colorType === 'royal' || pB.colorType === 'royal') {
                            ctx.strokeStyle = `rgba(80, 110, 160, ${opacity})`;
                        } else {
                            ctx.strokeStyle = `rgba(80, 90, 110, ${opacity})`;
                        }

                        ctx.lineWidth = 0.5;
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
            const rect = canvas.parentElement.getBoundingClientRect();
            ctx.clearRect(0, 0, rect.width, rect.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update(time, rect.width, rect.height);
            }

            connectParticles(time);
        };

        // Use ResizeObserver for better handling
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(canvas.parentElement);

        setCanvasSize();
        initParticles();
        animate(0);

        return () => {
            resizeObserver.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ zIndex: 0 }}
        />
    );
};
