import { useEffect, useRef } from 'react';

export const NetworkBackground = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        
        // Shield around center for readability
        const shield = { x: 0, y: 0, radiusX: 600, radiusY: 420 };

        const setCanvasSize = () => {
            const dpr = Math.min(window.devicePixelRatio, 2); // Limit DPR for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            ctx.scale(dpr, dpr);
            shield.x = window.innerWidth / 2;
            shield.y = window.innerHeight / 2;
        };

        const initParticles = () => {
            particlesRef.current = [];
            // Reduced particle count for performance
            const count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 12000), 150);
            
            for (let i = 0; i < count; i++) {
                const colorRoll = Math.random();
                particlesRef.current.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 2.5 + 1.2,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    color: colorRoll < 0.12 ? 'gold' : colorRoll < 0.2 ? 'royal' : 'standard',
                    density: Math.random() * 20 + 5,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const w = window.innerWidth;
            const h = window.innerHeight;

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                
                // Move
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap
                if (p.x > w + 10) p.x = -10;
                if (p.x < -10) p.x = w + 10;
                if (p.y > h + 10) p.y = -10;
                if (p.y < -10) p.y = h + 10;

                // Shield bounce
                const dx = p.x - shield.x;
                const dy = p.y - shield.y;
                const normDist = Math.sqrt((dx * dx) / (shield.radiusX * shield.radiusX) + (dy * dy) / (shield.radiusY * shield.radiusY));
                
                if (normDist < 1) {
                    const angle = Math.atan2(dy, dx);
                    const push = (1 - normDist) * 2;
                    p.x += Math.cos(angle) * push;
                    p.y += Math.sin(angle) * push;
                }

                // Mouse interaction (gentle)
                if (mouse.x !== null) {
                    const mdx = mouse.x - p.x;
                    const mdy = mouse.y - p.y;
                    const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mDist < 150) {
                        const force = (150 - mDist) / 150 * 0.3;
                        p.x -= (mdx / mDist) * force * p.density * 0.1;
                        p.y -= (mdy / mDist) * force * p.density * 0.1;
                    }
                }

                // Draw particle (no shadows for performance)
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                
                if (p.color === 'gold') {
                    ctx.fillStyle = 'rgba(218, 165, 32, 0.8)';
                } else if (p.color === 'royal') {
                    ctx.fillStyle = 'rgba(65, 105, 180, 0.65)';
                } else {
                    ctx.fillStyle = 'rgba(50, 60, 80, 0.5)';
                }
                ctx.fill();
            }

            // Draw connections
            const maxDist = 130;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        // Check shield
                        const midX = (particles[i].x + particles[j].x) / 2;
                        const midY = (particles[i].y + particles[j].y) / 2;
                        const midDx = midX - shield.x;
                        const midDy = midY - shield.y;
                        const midNorm = Math.sqrt((midDx * midDx) / (shield.radiusX * shield.radiusX) + (midDy * midDy) / (shield.radiusY * shield.radiusY));
                        
                        if (midNorm < 0.85) continue;
                        
                        const fade = Math.min(1, (midNorm - 0.85) / 0.3);
                        const opacity = (1 - dist / maxDist) * 0.25 * fade;

                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        
                        if (particles[i].color === 'gold' || particles[j].color === 'gold') {
                            ctx.strokeStyle = `rgba(200, 160, 50, ${opacity * 1.3})`;
                        } else if (particles[i].color === 'royal' || particles[j].color === 'royal') {
                            ctx.strokeStyle = `rgba(80, 110, 160, ${opacity})`;
                        } else {
                            ctx.strokeStyle = `rgba(60, 70, 90, ${opacity})`;
                        }
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: null, y: null };
        };

        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };

        // Throttled resize
        let resizeTimeout;
        const throttledResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 200);
        };

        window.addEventListener('resize', throttledResize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseout', handleMouseLeave);

        setCanvasSize();
        initParticles();
        animate();

        return () => {
            window.removeEventListener('resize', throttledResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <>
            {/* Light gradient background */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: -1 }}
            >
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse at center, #FFFEFA 0%, #FDF9F3 50%, #F8F6F0 100%)',
                    }}
                />
                {/* Subtle color accents */}
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: 'linear-gradient(135deg, rgba(230, 240, 255, 0.5) 0%, transparent 40%, transparent 60%, rgba(255, 245, 225, 0.5) 100%)',
                    }}
                />
            </div>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 pointer-events-none"
                style={{ zIndex: 0 }}
            />
        </>
    );
};
