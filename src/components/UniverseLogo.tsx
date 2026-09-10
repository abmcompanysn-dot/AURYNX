import type { Universe } from '../types';

interface UniverseLogoProps {
  universe: Universe;
  size?: 'sm' | 'md' | 'lg';
  showGlow?: boolean;
}

export default function UniverseLogo({ universe, size = 'md', showGlow = true }: UniverseLogoProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl flex items-center justify-center overflow-hidden ${showGlow ? universe.glowClass : ''}`}
      style={{ 
        background: `${universe.color}15`, 
        border: `1px solid ${universe.color}30` 
      }}
    >
      <img 
        src={universe.logo} 
        alt={universe.name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
