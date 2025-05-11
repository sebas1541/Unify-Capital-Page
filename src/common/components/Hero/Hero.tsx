import React, { useState, useEffect } from 'react';
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { cn } from '../../../utils/cn';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundImage = 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1600',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c243c]/80 to-[#1c243c]/70 z-10" />
        <img
          src={backgroundImage}
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <Container className="relative z-10 pt-24 pb-16">
        <div 
          className={cn(
            "max-w-4xl mx-auto text-center text-white transition-opacity duration-1000",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
            {title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            {subtitle}
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#489094] hover:bg-[#3a7a7e] text-white px-8 sm:px-10"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </div>
      </Container>
    </div>
  );
};