import React, { useEffect, useRef, useState } from 'react';
import { createTimeline } from 'animejs';
import { BrandLogo } from './BrandLogo';

interface AnimatedSvgLogoProps {
  className?: string;
}

export const AnimatedSvgLogo: React.FC<AnimatedSvgLogoProps> = ({
  className = '',
}) => {
  const [strokeProgress, setStrokeProgress] = useState(0);
  const [strokeOpacity, setStrokeOpacity] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    // Reset state
    setStrokeProgress(0);
    setStrokeOpacity(1);
    setLogoOpacity(0);

    const animState = {
      stroke: 0,
      strokeOpacity: 1,
      logoOpacity: 0,
    };

    // Anime.js Infinite Loop Timeline
    const tl = createTimeline({
      loop: true,
      autoplay: true,
      onLoop: () => {
        animState.stroke = 0;
        animState.strokeOpacity = 1;
        animState.logoOpacity = 0;
        setStrokeProgress(0);
        setStrokeOpacity(1);
        setLogoOpacity(0);
      }
    });

    // 1. Draw Thin White Contours (0ms -> 1500ms)
    tl.add(animState, {
      stroke: [0, 100],
      duration: 1500,
      ease: 'inOutCubic',
      onUpdate: () => {
        setStrokeProgress(animState.stroke);
      },
    }, 0);

    // 2. Cross-fade: Solid Logo appears, white contour completely disappears (1350ms -> 1850ms)
    tl.add(animState, {
      logoOpacity: [0, 1],
      strokeOpacity: [1, 0],
      duration: 500,
      ease: 'outQuad',
      onUpdate: () => {
        setLogoOpacity(animState.logoOpacity);
        setStrokeOpacity(animState.strokeOpacity);
      },
    }, 1350);

    // 3. Hold solid logo for ~2 seconds (1850ms -> 3850ms)
    // 4. Fade out solid logo to smoothly restart the infinite loop (3850ms -> 4300ms)
    tl.add(animState, {
      logoOpacity: [1, 0],
      duration: 450,
      ease: 'inQuad',
      onUpdate: () => {
        setLogoOpacity(animState.logoOpacity);
      },
    }, 3850);

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current && typeof timelineRef.current.pause === 'function') {
        timelineRef.current.pause();
      }
    };
  }, []);

  const dashoffset = 100 - strokeProgress;

  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      
      {/* Main Container - Scaled up for prominent display */}
      <div 
        ref={containerRef}
        className="relative z-10 w-full max-w-3xl sm:max-w-4xl px-2 sm:px-6 flex items-center justify-center select-none aspect-[4.8/1] min-h-[140px] sm:min-h-[190px]"
      >
        
        {/* LAYER 1: Fine Thin White Vector Stroke Outlines (Anime.js animated) */}
        <svg
          viewBox="0 0 540 120"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none transition-opacity duration-150"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: strokeOpacity }}
        >
          <g>
            
            {/* 1. WHITE "AV" MONOGRAM (Thin crisp contour) */}
            <text
              x="20"
              y="98"
              fontFamily='Impact, "Arial Black", sans-serif'
              fontSize="102"
              fontWeight="900"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              AV
            </text>

            {/* 2. BULL SILHOUETTE BEZIER CONTOUR (Thin sharp horns) */}
            <path
              d="M 112,45 C 108,28 116,16 132,12 C 124,19 122,28 126,34 C 132,30 148,28 160,35 C 168,26 166,16 156,12 C 172,16 180,28 176,45 C 185,55 186,68 178,80 C 168,75 160,78 152,85 C 145,80 138,82 132,88 C 122,82 115,65 112,45 Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            />

            {/* 3. WHITE "Z" SLAB (Thin sharp contour) */}
            <text
              x="132"
              y="98"
              fontFamily='Impact, "Arial Black", sans-serif'
              fontSize="102"
              fontWeight="900"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              Z
            </text>

            {/* 4. UPPER "AGROVETERINÁRIA" (Thin, clean & perfectly legible text) */}
            <text
              x="235"
              y="32"
              fontFamily='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              fontSize="18"
              fontWeight="800"
              letterSpacing="4.5px"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              AGROVETERINÁRIA
            </text>

            {/* 5. MAIN "ZULATO" (Impact bold typography thin contour) */}
            <text
              x="230"
              y="100"
              fontFamily='Impact, "Arial Black", sans-serif'
              fontSize="86"
              fontWeight="900"
              letterSpacing="2px"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.85"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              ZULATO
            </text>

          </g>
        </svg>

        {/* LAYER 2: 100% Authentic, Pixel-Perfect Solid Official Logo (Large display) */}
        <div 
          className="w-full flex items-center justify-center will-change-transform transition-opacity duration-200"
          style={{ opacity: logoOpacity }}
        >
          <BrandLogo 
            variant="horizontal" 
            colorMode="color" 
            size="xl" 
            className="w-full max-w-2xl sm:max-w-3xl h-auto"
          />
        </div>

      </div>

    </div>
  );
};
