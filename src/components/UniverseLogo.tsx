import type { Universe } from '../types';
import { LearnIcon, CareerIcon, HealthIcon, MindIcon, EarthIcon, LifeIcon } from './icons/UniverseIcons';

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

  const iconSizes = {
    sm: 20,
    md: 24,
    lg: 32
  };

  const getIcon = () => {
    switch (universe.id) {
      case 'learn': return <LearnIcon size={iconSizes[size]} />;
      case 'career': return <CareerIcon size={iconSizes[size]} />;
      case 'health': return <HealthIcon size={iconSizes[size]} />;
      case 'mind': return <MindIcon size={iconSizes[size]} />;
      case 'earth': return <EarthIcon size={iconSizes[size]} />;
      case 'life': return <LifeIcon size={iconSizes[size]} />;
      default: return null;
    }
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-xl flex items-center justify-center ${showGlow ? universe.glowClass : ''}`}
      style={{ 
        background: `${universe.color}10`, 
        border: `1px solid ${universe.color}30` 
      }}
    >
      {getIcon()}
    </div>
  );
}
