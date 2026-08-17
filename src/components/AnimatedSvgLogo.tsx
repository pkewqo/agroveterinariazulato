import React, { useEffect, useRef, useState } from 'react';
import { createTimeline, createDrawable } from 'animejs';
import { BrandLogo } from './BrandLogo';

interface AnimatedSvgLogoProps {
  className?: string;
}

export const AnimatedSvgLogo: React.FC<AnimatedSvgLogoProps> = ({
  className = '',
}) => {
  const [strokeOpacity, setStrokeOpacity] = useState(1);
  const [logoOpacity, setLogoOpacity] = useState(0);

  const pathsRef = useRef<SVGGElement>(null);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    if (!pathsRef.current) return;

    // Get all path and text elements
    const pathElements = pathsRef.current.querySelectorAll('path, text');
    if (!pathElements.length) return;

    // Wrap elements with Anime.js v4 createDrawable
    const drawables = createDrawable(Array.from(pathElements) as any);

    // Anime.js Timeline with infinite loop
    const tl = createTimeline({
      loop: true,
      autoplay: true,
      onLoop: () => {
        setStrokeOpacity(1);
        setLogoOpacity(0);
      }
    });

    // 1. Draw ultra-fine 1.5px white lines from 0 to 1
    tl.add(drawables, {
      draw: ['0 0', '0 1'],
      duration: 1500,
      ease: 'inOutCubic',
    }, 0);

    // 2. Fade in official solid logo & fade out the white contour
    const fadeState = { logo: 0, stroke: 1 };
    tl.add(fadeState, {
      logo: [0, 1],
      stroke: [1, 0],
      duration: 400,
      ease: 'outQuad',
      onUpdate: () => {
        setLogoOpacity(fadeState.logo);
        setStrokeOpacity(fadeState.stroke);
      }
    }, 1400);

    // 3. Hold solid logo for ~2 seconds (1800ms -> 3800ms)
    // 4. Fade out solid logo to smoothly restart the infinite loop
    tl.add(fadeState, {
      logo: [1, 0],
      duration: 400,
      ease: 'inQuad',
      onUpdate: () => {
        setLogoOpacity(fadeState.logo);
      }
    }, 3800);

    timelineRef.current = tl;

    return () => {
      if (timelineRef.current && typeof timelineRef.current.pause === 'function') {
        timelineRef.current.pause();
      }
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      
      {/* Main Container - Scaled up for prominent display */}
      <div 
        className="relative z-10 w-full max-w-3xl sm:max-w-4xl px-2 sm:px-6 flex items-center justify-center select-none aspect-[4.8/1] min-h-[140px] sm:min-h-[190px]"
      >
        
        {/* LAYER 1: Hairline 1.5px White Geometric Contours (non-scaling-stroke) */}
        <svg
          viewBox="0 0 540 120"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none transition-opacity duration-150"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: strokeOpacity }}
        >
          <g 
            ref={pathsRef}
            fill="none" 
            stroke="#FFFFFF" 
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {/* AV MONOGRAM (Clean Impact glyph paths) */}
            {/* Letter A */}
            <path 
              d="M 18,96 L 35,20 L 52,20 L 69,96 L 53,96 L 49,74 L 38,74 L 34,96 Z M 40.5,58 L 46.5,58 L 43.5,33 Z" 
              vectorEffect="non-scaling-stroke"
            />
            {/* Letter V */}
            <path 
              d="M 68,20 L 83,96 L 98,20 L 85,20 L 75.5,72 L 66,20 Z" 
              vectorEffect="non-scaling-stroke"
            />

            {/* BULL SILHOUETTE (Fine anatomical curves & horns) */}
            <path
              d="M 112,42 C 106,26 116,14 130,10 C 122,18 120,26 125,32 C 132,28 146,26 158,32 C 164,25 162,15 154,10 C 170,14 178,26 174,42 C 182,52 184,65 176,76 C 167,72 158,75 150,82 C 144,77 137,79 130,85 C 120,80 114,62 112,42 Z"
              vectorEffect="non-scaling-stroke"
            />

            {/* MONOGRAM Z (Clean slab letter) */}
            <path
              d="M 116,20 L 165,20 L 165,36 L 136,78 L 166,78 L 166,96 L 116,96 L 116,80 L 145,36 L 116,36 Z"
              vectorEffect="non-scaling-stroke"
            />

            {/* UPPER "AGROVETERINÁRIA" (Sharp & 100% legible text header) */}
            <text
              x="235"
              y="32"
              fontFamily='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              fontSize="17"
              fontWeight="800"
              letterSpacing="4.5px"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            >
              AGROVETERINÁRIA
            </text>

            {/* ZULATO (Full crisp Impact font geometric outlines) */}
            {/* Z */}
            <path
              d="M 230,20 L 274,20 L 274,35 L 248,80 L 275,80 L 275,96 L 230,96 L 230,80 L 257,35 L 230,35 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* U */}
            <path
              d="M 284,20 L 298,20 L 298,75 C 298,82 302,85 307,85 C 312,85 316,82 316,75 L 316,20 L 330,20 L 330,75 C 330,90 320,96 307,96 C 294,96 284,90 284,75 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* L */}
            <path
              d="M 339,20 L 353,20 L 353,81 L 377,81 L 377,96 L 339,96 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* A */}
            <path
              d="M 385,96 L 398,20 L 413,20 L 426,96 L 413,96 L 410,75 L 401,75 L 398,96 Z M 402.5,59 L 408.5,59 L 405.5,36 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* T */}
            <path
              d="M 432,20 L 468,20 L 468,35 L 457,35 L 457,96 L 443,96 L 443,35 L 432,35 Z"
              vectorEffect="non-scaling-stroke"
            />
            {/* O */}
            <path
              d="M 474,58 C 474,32 483,20 497,20 C 511,20 520,32 520,58 C 520,83 511,96 497,96 C 483,96 474,83 474,58 Z M 488,58 C 488,75 492,82 497,82 C 502,82 506,75 506,58 C 506,40 502,33 497,33 C 492,33 488,40 488,58 Z"
              vectorEffect="non-scaling-stroke"
            />

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
