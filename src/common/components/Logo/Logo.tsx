import React from 'react';
import { cn } from '../../../utils/cn';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className }) => {
  const handleClick = () => {
    window.location.href = '/';
  };
  
  return (
    <div 
      className={cn('flex items-center cursor-pointer', className)}
      onClick={handleClick}
    >
      <img 
        src={variant === 'light' ? '/images/logos/logo-white2.svg' : '/images/logos/logo-color.svg'} 
        alt="Unify Capital"
        className="w-48 h-auto" // 192px width, auto height
      />
    </div>
  );
};