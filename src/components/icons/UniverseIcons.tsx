interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export function LearnIcon({ size = 24, className = '', color = '#00F0FF' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-learn" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow-learn)">
        <path d="M2 6L12 2L22 6L12 10L2 6Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 8.5V14C6 14 8 16 12 16C16 16 18 14 18 14V8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6V13C22 13 20 15 16 15.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

export function CareerIcon({ size = 24, className = '', color = '#00FF88' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-career" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow-career)">
        <circle cx="6" cy="8" r="3" stroke={color} strokeWidth="1.5"/>
        <circle cx="18" cy="8" r="3" stroke={color} strokeWidth="1.5"/>
        <circle cx="12" cy="18" r="3" stroke={color} strokeWidth="1.5"/>
        <path d="M8.5 9.5L10.5 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M15.5 9.5L13.5 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <path d="M9 8H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      </g>
    </svg>
  );
}

export function HealthIcon({ size = 24, className = '', color = '#FF2E63' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-health" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow-health)">
        <path d="M12 21C12 21 3 14 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14 12 21 12 21Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 11H10L11 9L13 14L14 11H16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

export function MindIcon({ size = 24, className = '', color = '#8A2BE2' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-mind" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow-mind)">
        <path d="M12 2C8 2 5 5 5 9C5 11 6 13 7 14V20H17V14C18 13 19 11 19 9C19 5 16 2 12 2Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22H15" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 17H14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 2V6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 9H7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 9H20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="9" r="1" fill={color}/>
        <circle cx="14" cy="9" r="1" fill={color}/>
      </g>
    </svg>
  );
}

export function EarthIcon({ size = 24, className = '', color = '#50C878' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-earth" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow-earth)">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/>
        <path d="M2 12H22" stroke={color} strokeWidth="1.5"/>
        <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22" stroke={color} strokeWidth="1.5"/>
        <path d="M12 2C9.5 4.5 8 8 8 12C8 16 9.5 19.5 12 22" stroke={color} strokeWidth="1.5"/>
        <path d="M4 7C7 8 10 8.5 12 8.5C14 8.5 17 8 20 7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 17C7 16 10 15.5 12 15.5C14 15.5 17 16 20 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

export function LifeIcon({ size = 24, className = '', color = '#FFD700' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-life" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#glow-life)">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5"/>
        <path d="M6.5 5V8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 6.5H8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17.5" cy="6.5" r="1.5" stroke={color} strokeWidth="1.5"/>
        <path d="M5 17L8 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 16L19 19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M19 16L16 19" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

export function AurynCoreIcon({ size = 48, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-core" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <radialGradient id="core-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.3"/>
        </radialGradient>
      </defs>
      <g filter="url(#glow-core)">
        <polygon points="24,4 30,18 44,20 34,30 36,44 24,38 12,44 14,30 4,20 18,18" stroke="#FFD700" strokeWidth="1.5" fill="url(#core-gradient)" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="6" stroke="#FFD700" strokeWidth="1.5" fill="none"/>
      </g>
    </svg>
  );
}
