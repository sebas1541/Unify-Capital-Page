import React from 'react';
import { cn } from '../../../utils/cn';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  message?: string;
  fullScreen?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  message,
  fullScreen = false
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 border-2',
    md: 'w-12 h-12 border-3',
    lg: 'w-16 h-16 border-4'
  };

  const Wrapper = fullScreen ? 'div' : 'div';
  const wrapperClasses = fullScreen ? 'fixed inset-0 bg-white z-50' : '';

  return (
    <Wrapper className={cn(wrapperClasses, className)}>
      <div className="flex flex-col items-center justify-center h-full">
        <div 
          className={cn(
            'border-[#489094] border-t-transparent rounded-full animate-spin',
            sizeClasses[size]
          )}
        />
        {message && (
          <p className="mt-4 text-gray-600 text-lg">{message}</p>
        )}
      </div>
    </Wrapper>
  );
};