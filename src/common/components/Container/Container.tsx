import React from 'react';
import { cn } from '../../../utils/cn';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
        className
      )}
    >
      {children}
    </Component>
  );
};