import React, { useEffect, useRef, useState } from 'react';
import { createTimeline } from 'animejs';
import { useBrand } from '../context/BrandContext';
import { RotateCcw } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

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
  const [fillOpacity, setFillOpacity] = useState(0);
  const [strokeProgress, setStrokeProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const strokeGroupRef = useRef<SVGGElement>(null);
  const solidLogoRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    setIsDrawing(true);
    setFillOpacity(0);
    setStrokeProgress(0);

    // Timeline using Anime.js
    const tl = createTimeline({
      autoplay: true,
      onComplete: () => {
        setIsDrawing(false);
      }
    });

    // Step 1: Draw geometric strokes from 0% to 100%
    const progressObj = { val: 0 };
    tl.add(progressObj, {
      val: [0, 100],
      duration: 1800,
      ease: 'inOutCubic',
      onUpdate: () => {
        setStrokeProgress(progressObj.val);
      }
    }, 0);

    // Step 2: Fade in the authentic solid logo & subtle backlight glow
    const opacityObj = { val: 0 };
    tl.add(opacityObj, {
      val: [0, 1],
      duration: 800,
      ease: 'outQuad',
      onUpdate: () => {
        setFillOpacity(opacityObj.val);
      }
    }, 1200);

    if (glowRef.current) {
      tl.add(glowRef.current, {
        opacity: [0, 0.4, 0.15],
        scale: [0.7, 1.2, 1.0],
        duration: 1200,
        ease: 'outExpo',
      }, 1100);
    }
  };

  useEffect(() => {
    startAnimation();
  }, [brand.colors.dourado.hex, brand.colors.verdeMedio.hex]);

  // Stroke Dash calculations for crisp vector elements
  const dashoffset = 100 - strokeProgress;

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      
      {/* Background Luminous Radial Glow */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-32 rounded-full pointer-events-none blur-3xl opacity-0 transition-opacity"
        style={{
          backgroundColor: brand.colors.dourado.hex,
          filter: 'blur(60px)',
        }}
      />

      {/* Main Container */}
      <div 
        ref={containerRef}
        className="relative z-10 w-full max-w-2xl px-4 flex items-center justify-center select-none aspect-[4.8/1] min-h-[120px]"
      >
        
        {/* LAYER 1: Geometric Precision Vector Stroke Drawing (Anime.js animated) */}
        <svg
          viewBox="0 0 540 120"
          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 1 - fillOpacity * 0.85 }}
        >
          <g ref={strokeGroupRef} className="will-change-transform">
            
            {/* 1. GREEN "AV" MONOGRAM (Geometric Crisp Font Outline) */}
            <text
              x="20"
              y="98"
              fontFamily='Impact, "Arial Black", sans-serif'
              fontSize="102"
              fontWeight="900"
              fill="none"
              stroke={brand.colors.verdeMedio.hex}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              AV
            </text>

            {/* 2. BULL SILHOUETTE BEZIER CONTOUR (Sharp horns & muzzle) */}
            <path
              d="M 112,45 C 108,28 116,16 132,12 C 124,19 122,28 126,34 C 132,30 148,28 160,35 C 168,26 166,16 156,12 C 172,16 180,28 176,45 C 185,55 186,68 178,80 C 168,75 160,78 152,85 C 145,80 138,82 132,88 C 122,82 115,65 112,45 Z"
              fill="none"
              stroke={brand.colors.dourado.hex}
              strokeWidth="2.0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            />

            {/* 3. GOLD "Z" SLAB (Sharp Outline) */}
            <text
              x="132"
              y="98"
              fontFamily='Impact, "Arial Black", sans-serif'
              fontSize="102"
              fontWeight="900"
              fill="none"
              stroke={brand.colors.dourado.hex}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              Z
            </text>

            {/* 4. UPPER "AGROVETERINÁRIA" (100% Crisp & Perfectly Legible Grotesque Text) */}
            <text
              x="235"
              y="32"
              fontFamily='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              fontSize="18"
              fontWeight="800"
              letterSpacing="4.5px"
              fill="none"
              stroke={brand.colors.dourado.hex}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              AGROVETERINÁRIA
            </text>

            {/* 5. MAIN "ZULATO" (Impact Condensed Bold Typography Outline) */}
            <text
              x="230"
              y="100"
              fontFamily='Impact, "Arial Black", sans-serif'
              fontSize="86"
              fontWeight="900"
              letterSpacing="2px"
              fill="none"
              stroke={brand.colors.dourado.hex}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="100"
              strokeDashoffset={`${dashoffset}%`}
            >
              ZULATO
            </text>

          </g>
        </svg>

        {/* LAYER 2: 100% Authentic, Pixel-Perfect Official Logo (Fades in smoothly) */}
        <div 
          ref={solidLogoRef}
          className="w-full flex items-center justify-center will-change-transform transition-opacity duration-300"
          style={{ opacity: fillOpacity }}
        >
          <BrandLogo 
            variant="horizontal" 
            colorMode="color" 
            size="xl" 
            className="w-full max-w-xl h-auto"
          />
        </div>

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
