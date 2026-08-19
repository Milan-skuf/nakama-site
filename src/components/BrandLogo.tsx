import React, { useState } from 'react';
import logoSrc from '../assets/images/217.png';

interface BrandLogoProps {
  size?: 'navbar' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'auto',
  className = '',
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);

  // Height mappings for the tightly-cropped official image logo
  const heightConfig = {
    navbar: 'h-4 sm:h-4.5 max-w-[100px] w-auto',
    xs: 'h-4 sm:h-5 max-w-[110px] w-auto',
    sm: 'h-6 sm:h-7 max-w-[130px] w-auto',
    md: 'h-8 sm:h-9 max-w-[160px] w-auto',
    lg: 'h-12 sm:h-14 max-w-[220px] w-auto',
    xl: 'h-28 sm:h-36 md:h-48 lg:h-56 max-w-[85vw] w-auto',
    hero: 'h-32 sm:h-44 md:h-56 lg:h-72 xl:h-88 2xl:h-[380px] max-w-[85vw] w-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]',
  };

  const currentHeight = heightConfig[size];

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-center text-center select-none relative group ${onClick ? 'cursor-pointer' : ''} ${className}`}
      aria-label="Логотип NAKAMA band"
    >
      {!imgError ? (
        <img
          src={logoSrc}
          alt="NAKAMA band"
          onError={() => setImgError(true)}
          className={`${currentHeight} object-contain mx-auto transition-all duration-300 group-hover:scale-105 filter brightness-[1.85] contrast-[1.2]`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <span 
            className="font-display font-bold uppercase text-[#F1D8C1] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.25em] pl-[0.25em] leading-none transition-colors group-hover:text-white"
          >
            NAKAMA
          </span>
          <span 
            className="font-script font-semibold italic text-[#BA371E] text-3xl sm:text-5xl md:text-6xl lg:text-7xl -mt-2 sm:-mt-5 leading-none"
            style={{ fontFamily: "'Caveat', cursive", transform: 'rotate(-2deg)' }}
          >
            band
          </span>
        </div>
      )}
    </div>
  );
};
