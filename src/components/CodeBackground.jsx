import { useEffect, useRef } from 'react';

export default function CodeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Configuration
        const columns = Math.floor(canvas.width / 20);
        const drops = new Array(columns).fill(1);
        const chars = "01<>{}[]/|*-_=+!@#$"; // Tech-looking characters

        // Check theme for color
        const isDark = document.documentElement.classList.contains('dark');
        const color = isDark ? '#3b82f6' : '#2563eb'; // Primary blue

        const draw = () => {
            // Semi-transparent fade to create trail effect
            // Dark mode trail vs Light mode trail opacity
            ctx.fillStyle = isDark ? 'rgba(10, 10, 10, 0.05)' : 'rgba(255, 255, 255, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = color;
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = chars[Math.floor(Math.random() * chars.length)];

                // x = column index * font size, y = drop value * font size
                const x = i * 20;
                const y = drops[i] * 20;

                // Draw the character
                // Opacity variation for "glitch" feel
                ctx.globalAlpha = Math.random() > 0.5 ? 1 : 0.5;
                ctx.fillText(text, x, y);
                ctx.globalAlpha = 1;

                // Reset drop to top randomly after it crosses screen
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Increment y coordinate
                drops[i]++;
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []); // Re-run if we wanted to handle dynamic theme switching inside the canvas, 
    // but for now simple mount is enough. To make it reactive to theme changes 
    // we'd need a theme listener context or observer.
    // Since the user asked for "cool and professional", let's make it robust.

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none"
        />
    );
}
