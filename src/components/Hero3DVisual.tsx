import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { universes } from '../data';
import { LearnIcon, CareerIcon, HealthIcon, MindIcon, EarthIcon, LifeIcon } from './icons/UniverseIcons';

export default function Hero3DVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      const universe = universes[Math.floor(Math.random() * universes.length)];
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: universe.color
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach(other => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `${particle.color}${Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* 3D Globe Container */}
      <motion.div
        className="relative w-[400px] h-[400px]"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Outer Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border border-cyan-400/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-purple-400/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-16 rounded-full border border-amber-400/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          {universes.map((u, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const radius = 150;
            const x = 200 + radius * Math.cos(angle);
            const y = 200 + radius * Math.sin(angle);
            
            return (
              <motion.line
                key={u.id}
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke={u.color}
                strokeWidth="1"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
              />
            );
          })}
        </svg>

        {/* Center Core - AURYN */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.4) 0%, rgba(255,215,0,0.1) 50%, transparent 100%)',
            boxShadow: '0 0 80px rgba(255,215,0,0.3), 0 0 120px rgba(255,215,0,0.2), inset 0 0 40px rgba(255,215,0,0.2)'
          }}
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 80px rgba(255,215,0,0.3), 0 0 120px rgba(255,215,0,0.2)',
              '0 0 100px rgba(255,215,0,0.4), 0 0 150px rgba(255,215,0,0.3)',
              '0 0 80px rgba(255,215,0,0.3), 0 0 120px rgba(255,215,0,0.2)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/30 to-amber-600/20 border-2 border-amber-400/50 flex items-center justify-center backdrop-blur-sm">
            <span className="font-display font-bold text-amber-400 text-2xl">A</span>
          </div>
        </motion.div>

        {/* Universe Orbs */}
        {universes.map((universe, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const radius = 150;
          const x = 50 + (radius / 2) * Math.cos(angle);
          const y = 50 + (radius / 2) * Math.sin(angle);

          return (
            <motion.div
              key={universe.id}
              className="absolute w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${universe.color}30 0%, ${universe.color}10 50%, transparent 100%)`,
                border: `2px solid ${universe.color}60`,
                boxShadow: `0 0 30px ${universe.color}40, inset 0 0 20px ${universe.color}20`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
              whileHover={{ 
                scale: 1.2,
                boxShadow: `0 0 50px ${universe.color}60, inset 0 0 30px ${universe.color}30`
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: `radial-gradient(circle, ${universe.color}40 0%, transparent 70%)`
                  }}
                />
                
                {/* Icon container */}
                <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  style={{ background: `${universe.color}20` }}
                >
                  {getUniverseIconComponent(universe.id)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

function getUniverseIconComponent(id: string) {
  switch (id) {
    case 'learn': return <LearnIcon size={24} />;
    case 'career': return <CareerIcon size={24} />;
    case 'health': return <HealthIcon size={24} />;
    case 'mind': return <MindIcon size={24} />;
    case 'earth': return <EarthIcon size={24} />;
    case 'life': return <LifeIcon size={24} />;
    default: return null;
  }
}
