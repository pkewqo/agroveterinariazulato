import React, { useEffect, useRef, useState } from 'react';
import { createTimeline, createDrawable } from 'animejs';
import { EXACT_HORIZONTAL_LOGO_PATH } from '../data/exactLogoPath';
import { useBrand } from '../context/BrandContext';

interface AnimatedSvgLogoProps {
  className?: string;
}

export const AnimatedSvgLogo: React.FC<AnimatedSvgLogoProps> = ({
  className = '',
}) => {
  const { brand } = useBrand();
  const [strokeOpacity, setStrokeOpacity] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(0);

  const pathsGroupRef = useRef<SVGGElement>(null);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    if (!pathsGroupRef.current) return;

    // Select all exact contour path elements for drawing
    const pathElements = pathsGroupRef.current.querySelectorAll('path');
    if (!pathElements.length) return;

    // Create drawable wrappers using Anime.js v4 createDrawable
    const drawables = createDrawable(Array.from(pathElements) as any);

    // Anime.js timeline with infinite automatic loop
    const tl = createTimeline({
      loop: true,
      autoplay: true,
      onLoop: () => {
        setStrokeOpacity(1);
        setLogoOpacity(0);
      }
    });

    // 1. Draw exact 1:1 white contour paths
    tl.add(drawables, {
      draw: ['0 0', '0 1'],
      duration: 1800,
      ease: 'inOutCubic',
    }, 0);

    // 2. Fade in official solid logo & fade out the white stroke contour
    const fadeState = { logo: 0, stroke: 1 };
    tl.add(fadeState, {
      logo: [0, 1],
      stroke: [1, 0],
      duration: 500,
      ease: 'outQuad',
      onUpdate: () => {
        setLogoOpacity(fadeState.logo);
        setStrokeOpacity(fadeState.stroke);
      }
    }, 1600);

    // 3. Hold solid logo for a longer time on screen (~4.5 seconds)
    // 4. Fade out solid logo to restart loop smoothly
    tl.add(fadeState, {
      logo: [1, 0],
      duration: 400,
      ease: 'inQuad',
      onUpdate: () => {
        setLogoOpacity(fadeState.logo);
      }
    }, 6600); // 1600 + 500 + 4500 hold time

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current && typeof timelineRef.current.pause === 'function') {
        timelineRef.current.pause();
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      
      {/* Main Responsive Stage */}
      <div 
        className="relative z-10 w-full max-w-4xl sm:max-w-5xl px-2 sm:px-6 flex items-center justify-center select-none aspect-[1037/225] min-h-[160px] sm:min-h-[220px]"
      >
        
        {/* LAYER 1: Exact 1:1 Pixel-Accurate White Contours (Anime.js animated) */}
        <svg
          viewBox={EXACT_HORIZONTAL_LOGO_PATH.viewBox}
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none transition-opacity duration-150"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: strokeOpacity }}
        >
          <g 
            ref={pathsGroupRef}
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {EXACT_HORIZONTAL_LOGO_PATH.goldPaths.map((d, index) => (
              <path key={`gold-${index}`} d={d} vectorEffect="non-scaling-stroke" />
            ))}
            {EXACT_HORIZONTAL_LOGO_PATH.greenPaths.map((d, index) => (
              <path key={`green-${index}`} d={d} vectorEffect="non-scaling-stroke" />
            ))}
          </g>
        </svg>

        {/* LAYER 2: 100% Authentic SVG Official Logo using true colors (Fades in seamlessly) */}
        <svg
          viewBox={EXACT_HORIZONTAL_LOGO_PATH.viewBox}
          className="absolute inset-0 w-full h-full overflow-visible will-change-transform transition-opacity duration-200"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: logoOpacity }}
        >
          <g fill={brand.colors.dourado.hex}>
            {EXACT_HORIZONTAL_LOGO_PATH.goldPaths.map((d, index) => (
              <path key={`solid-gold-${index}`} d={d} />
            ))}
          </g>
          <g fill={brand.colors.verdeMedio.hex}>
            {EXACT_HORIZONTAL_LOGO_PATH.greenPaths.map((d, index) => (
              <path key={`solid-green-${index}`} d={d} />
            ))}
          </g>
        </svg>

      </div>

    </div>
  );
};
