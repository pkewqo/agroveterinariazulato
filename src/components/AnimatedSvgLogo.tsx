import React, { useEffect, useRef, useState } from 'react';
import { createDrawable, createTimeline } from 'animejs';
import { LOGO_SVG_PATHS } from '../data/logoSvgPaths';
import { useBrand } from '../context/BrandContext';
import { RotateCcw } from 'lucide-react';

interface AnimatedSvgLogoProps {
  className?: string;
  showReplayButton?: boolean;
}

export const AnimatedSvgLogo: React.FC<AnimatedSvgLogoProps> = ({
  className = '',
  showReplayButton = true,
}) => {
  const { brand } = useBrand();
  const [isDrawing, setIsDrawing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const avPathRef = useRef<SVGPathElement>(null);
  const goldPathRef = useRef<SVGPathElement>(null);
  const fillGroupRef = useRef<SVGGElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (!avPathRef.current || !goldPathRef.current || !fillGroupRef.current) return;

    setIsDrawing(true);

    // 1. Wrap paths with Anime.js v4 createDrawable
    const avDrawable = createDrawable(avPathRef.current);
    const goldDrawable = createDrawable(goldPathRef.current);

    // Initial state: hidden fill, paths ready for stroke drawing
    fillGroupRef.current.style.opacity = '0';
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
      glowRef.current.style.transform = 'scale(0.5)';
    }

    const tl = createTimeline({
      autoplay: true,
      onComplete: () => {
        setIsDrawing(false);
      },
    });

    // Step 1: Draw the AV Monogram outline (Green)
    tl.add(avDrawable, {
      draw: ['0 0', '0 1'],
      duration: 1600,
      ease: 'inOutCubic',
    }, 0);

    // Step 2: Draw the Gold Zulato, Bull & Wordmark outline (Dourado)
    tl.add(goldDrawable, {
      draw: ['0 0', '0 1'],
      duration: 2200,
      ease: 'inOutCubic',
    }, 200);

    // Step 3: Reveal Solid Vibrant Fills + Subtle Luminous Glow
    tl.add(fillGroupRef.current, {
      opacity: [0, 1],
      duration: 900,
      ease: 'outQuad',
    }, 1800);

    if (glowRef.current) {
      tl.add(glowRef.current, {
        opacity: [0, 0.4, 0.15],
        scale: [0.6, 1.3, 1.0],
        duration: 1200,
        ease: 'outExpo',
      }, 1600);
    }
  };

  useEffect(() => {
    // Start drawing when mounted or when colors change
    startAnimation();
  }, [brand.colors.dourado.hex, brand.colors.verdeMedio.hex]);

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      
      {/* Luminous Glow Backdrop */}
      <div
        ref={glowRef}
        className="absolute w-80 h-32 rounded-full pointer-events-none blur-3xl opacity-0 transition-opacity"
        style={{
          backgroundColor: brand.colors.dourado.hex,
          filter: 'blur(50px)',
        }}
      />

      {/* Main SVG Vector Container */}
      <div 
        ref={containerRef}
        className="relative z-10 w-full max-w-2xl px-4 flex items-center justify-center select-none"
      >
        <svg
          viewBox={LOGO_SVG_PATHS.viewBox}
          className="w-full h-auto max-h-48 drop-shadow-2xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft shadow filter */}
            <filter id="svg-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor={brand.colors.dourado.hex} floodOpacity="0.25" />
            </filter>
          </defs>

          {/* LAYER 1: Animated Stroke Outlines (Drawn by Anime.js createDrawable) */}
          <g filter="url(#svg-glow)">
            {/* Green AV Monogram Outline */}
            <path
              ref={avPathRef}
              d={LOGO_SVG_PATHS.greenAvPath}
              fill="none"
              stroke={brand.colors.verdeMedio.hex}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Gold Zulato, Bull & Wordmark Outline */}
            <path
              ref={goldPathRef}
              d={LOGO_SVG_PATHS.goldZulatoPath}
              fill="none"
              stroke={brand.colors.dourado.hex}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* LAYER 2: Solid Vector Fills (Fades in seamlessly as drawing completes) */}
          <g ref={fillGroupRef} className="transition-opacity duration-300">
            {/* Green Fill */}
            <path
              d={LOGO_SVG_PATHS.greenAvPath}
              fill={brand.colors.verdeMedio.hex}
            />

            {/* Gold Fill */}
            <path
              d={LOGO_SVG_PATHS.goldZulatoPath}
              fill={brand.colors.dourado.hex}
            />
          </g>
        </svg>
      </div>

      {/* Interactive Replay / Status Trigger */}
      {showReplayButton && (
        <div className="mt-8 z-20 flex items-center gap-3 no-print">
          <button
            onClick={startAnimation}
            disabled={isDrawing}
            className="flex items-center gap-2 px-4 py-2 bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 text-xs font-mono transition-all cursor-pointer shadow-lg disabled:opacity-50"
            title="Desenhar logotipo novamente com Anime.js"
          >
            <RotateCcw size={13} className={isDrawing ? 'animate-spin' : ''} />
            <span>{isDrawing ? 'Desenhando contornos...' : 'Redesenhar Logotipo (Anime.js)'}</span>
          </button>
        </div>
      )}

    </div>
  );
};
