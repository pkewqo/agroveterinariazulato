import React, { useEffect, useRef, useState } from 'react';
import * as animejs from 'animejs';
const anime = (animejs as any).default || animejs;
import { EXACT_HORIZONTAL_LOGO_PATH } from '../data/exactLogoPath';
import { useBrand } from '../context/BrandContext';

export interface AnimatedSvgLogoProps {
  className?: string;
}

export const AnimatedSvgLogo: React.FC<AnimatedSvgLogoProps> = ({
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { brand } = useBrand();

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset paths
    const paths = containerRef.current.querySelectorAll('path');
    paths.forEach(path => {
      path.style.opacity = '1';
      path.setAttribute('stroke-dasharray', anime.setDashoffset(path) as unknown as string);
      path.setAttribute('stroke-dashoffset', anime.setDashoffset(path) as unknown as string);
      path.setAttribute('fill', 'transparent');
    });

    // 1. Draw outlines
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 3500, // Doubled duration
      delay: function(_el: HTMLElement, i: number) { return i * 60; }, // Doubled delay
      direction: 'alternate',
      loop: false
    });

    // 2. Fill Gold paths
    const goldPaths = containerRef.current.querySelectorAll('.logo-path-gold');
    anime({
      targets: goldPaths,
      fill: brand.colors.dourado.hex,
      easing: 'easeOutSine',
      duration: 2000, // Doubled duration
      delay: 3500, // Delay until drawing is done
      complete: () => setIsAnimationComplete(true)
    });

    // 3. Fill Green paths
    const greenPaths = containerRef.current.querySelectorAll('.logo-path-green');
    anime({
      targets: greenPaths,
      fill: brand.colors.verdeMedio.hex,
      easing: 'easeOutSine',
      duration: 2000, // Doubled duration
      delay: 3500 // Delay until drawing is done
    });

  }, [brand.colors.dourado.hex, brand.colors.verdeMedio.hex]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full max-w-2xl mx-auto transition-all duration-1000 ${isAnimationComplete ? 'drop-shadow-2xl' : ''} ${className}`}
    >
      <svg 
        viewBox={EXACT_HORIZONTAL_LOGO_PATH.viewBox} 
        className="w-full h-auto drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke={brand.colors.dourado.hex} strokeWidth="1.5">
          {EXACT_HORIZONTAL_LOGO_PATH.goldPaths.map((d: string, index: number) => (
            <path key={`gold-${index}`} className="logo-path-gold" d={d} />
          ))}
        </g>
        <g stroke={brand.colors.verdeMedio.hex} strokeWidth="1.5">
          {EXACT_HORIZONTAL_LOGO_PATH.greenPaths.map((d: string, index: number) => (
            <path key={`green-${index}`} className="logo-path-green" d={d} />
          ))}
        </g>

        {/* Glow effect when complete */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {isAnimationComplete && (
          <>
            <g filter="url(#glow)" opacity="0.3">
              {EXACT_HORIZONTAL_LOGO_PATH.goldPaths.map((d: string, index: number) => (
                <path key={`glow-gold-${index}`} fill={brand.colors.dourado.hex} d={d} />
              ))}
            </g>
            <g filter="url(#glow)" opacity="0.3">
              {EXACT_HORIZONTAL_LOGO_PATH.greenPaths.map((d: string, index: number) => (
                <path key={`glow-green-${index}`} fill={brand.colors.verdeMedio.hex} d={d} />
              ))}
            </g>
          </>
        )}
      </svg>
    </div>
  );
};
