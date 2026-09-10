import { Link } from 'react-router-dom';
import { AURYN_LOGO } from '../data/constants';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  linkable?: boolean;
}

export default function Logo({ size = 'md', showText = true, linkable = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const logo = (
    <div className="flex items-center gap-2 group">
      <img 
        src={AURYN_LOGO} 
        alt="AURYN Logo" 
        className={`${sizeClasses[size]} rounded-lg object-cover`}
      />
      {showText && (
        <span className={`font-display font-bold ${textSizes[size]} tracking-tight`}>
          AURYN
        </span>
      )}
    </div>
  );

  if (linkable) {
    return <Link to="/">{logo}</Link>;
  }

  return logo;
}
