import React, { useEffect, useRef, useState } from 'react';
import { animate, createTimeline, set, remove } from 'animejs';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Code, 
  Copy, 
  Check,
  Zap,
  Layers,
  MousePointer
} from 'lucide-react';

type MotionMode = 'cinematic' | 'draw' | 'breathing' | 'magnetic';

export const ManualMotionLogo: React.FC = () => {
  const { brand } = useBrand();
  
  // Motion States
  const [activeMode, setActiveMode] = useState<MotionMode>('cinematic');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1);
  const [stageBg, setStageBg] = useState<'white' | 'green' | 'black'>('white');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [showCode, setShowCode] = useState<boolean>(false);

  // Refs
  const stageRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const avRef = useRef<HTMLDivElement>(null);
  const zBullRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const currentTimelineRef = useRef<any>(null);

  // 1. Run Anime.js Animation based on Mode
  const runAnimation = () => {
    if (!logoContainerRef.current) return;

    // Remove existing animations
    remove([
      logoContainerRef.current,
      avRef.current,
      zBullRef.current,
      textRef.current,
      glowRef.current,
    ]);

    const durationBase = 1200 / speed;

    if (activeMode === 'cinematic') {
      // Set initial states
      set(logoContainerRef.current, { scale: 0.85, opacity: 0, translateY: 30 });
      if (avRef.current) set(avRef.current, { translateX: -50, rotate: -15, opacity: 0 });
      if (zBullRef.current) set(zBullRef.current, { scale: 0.3, opacity: 0, rotate: 10 });
      if (textRef.current) set(textRef.current, { translateY: 25, opacity: 0, letterSpacing: '6px' });
      if (glowRef.current) set(glowRef.current, { scale: 0, opacity: 0 });

      const tl = createTimeline({
        autoplay: true,
        onComplete: () => {
          if (!isPlaying) setIsPlaying(false);
        }
      });

      if (glowRef.current) {
        tl.add(glowRef.current, {
          scale: [0, 1.5],
          opacity: [0, 0.4, 0],
          duration: durationBase * 0.8,
          ease: 'outQuad',
        }, 0);
      }

      tl.add(logoContainerRef.current, {
        scale: [0.85, 1],
        translateY: [30, 0],
        opacity: [0, 1],
        duration: durationBase * 0.7,
        ease: 'outExpo',
      }, 50);

      if (avRef.current) {
        tl.add(avRef.current, {
          translateX: [-50, 0],
          rotate: [-15, 0],
          opacity: [0, 1],
          duration: durationBase * 0.9,
          ease: 'outElastic(1, .6)',
        }, 150);
      }

      if (zBullRef.current) {
        tl.add(zBullRef.current, {
          scale: [0.3, 1],
          rotate: [10, 0],
          opacity: [0, 1],
          duration: durationBase * 0.9,
          ease: 'outElastic(1, .6)',
        }, 250);
      }

      if (textRef.current) {
        tl.add(textRef.current, {
          translateY: [25, 0],
          opacity: [0, 1],
          letterSpacing: ['6px', '0px'],
          duration: durationBase * 0.8,
          ease: 'outCubic',
        }, 350);
      }

      currentTimelineRef.current = tl;
    } else if (activeMode === 'draw') {
      // Layer Pulse Wave
      set(logoContainerRef.current, { opacity: 1, scale: 1, translateY: 0 });
      if (avRef.current) set(avRef.current, { opacity: 1, translateX: 0, translateY: 0, rotate: 0, scale: 1 });
      if (zBullRef.current) set(zBullRef.current, { opacity: 1, scale: 1, rotate: 0, translateY: 0 });
      if (textRef.current) set(textRef.current, { opacity: 1, translateY: 0, letterSpacing: '0px' });

      const tl = createTimeline({
        loop: true,
        alternate: true,
      });

      if (avRef.current) {
        tl.add(avRef.current, {
          scale: [0.92, 1.08],
          translateY: [-6, 6],
          duration: durationBase * 1.2,
          ease: 'inOutSine',
        }, 0);
      }

      if (zBullRef.current) {
        tl.add(zBullRef.current, {
          scale: [1.05, 0.95],
          translateY: [6, -6],
          duration: durationBase * 1.2,
          ease: 'inOutSine',
        }, 0);
      }

      if (glowRef.current) {
        tl.add(glowRef.current, {
          scale: [0.8, 1.4],
          opacity: [0.1, 0.5, 0.1],
          duration: durationBase * 1.2,
          ease: 'inOutSine',
        }, 0);
      }

      currentTimelineRef.current = tl;
    } else if (activeMode === 'breathing') {
      // Organic Floating & Breathing
      const tl = createTimeline({
        loop: true,
        alternate: true,
      });

      tl.add(logoContainerRef.current, {
        translateY: [-10, 10],
        rotateZ: [-1.5, 1.5],
        duration: durationBase * 2,
        ease: 'inOutQuad',
      }, 0);

      if (glowRef.current) {
        tl.add(glowRef.current, {
          scale: [0.9, 1.3],
          opacity: [0.15, 0.45],
          duration: durationBase * 2,
          ease: 'inOutQuad',
        }, 0);
      }

      currentTimelineRef.current = tl;
    }
  };

  useEffect(() => {
    runAnimation();
    return () => {
      if (currentTimelineRef.current && typeof currentTimelineRef.current.pause === 'function') {
        currentTimelineRef.current.pause();
      }
    };
  }, [activeMode, speed]);

  // Handle Play/Pause
  const togglePlayPause = () => {
    if (!currentTimelineRef.current) {
      runAnimation();
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      if (typeof currentTimelineRef.current.pause === 'function') {
        currentTimelineRef.current.pause();
      }
      setIsPlaying(false);
    } else {
      if (typeof currentTimelineRef.current.play === 'function') {
        currentTimelineRef.current.play();
      }
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    setIsPlaying(true);
    runAnimation();
  };

  // Mouse Reactive 3D Physics (Magnetic Mode)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeMode !== 'magnetic' || !stageRef.current || !logoContainerRef.current) return;

    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    animate(logoContainerRef.current, {
      translateX: x * 0.12,
      translateY: y * 0.12,
      rotateX: -y * 0.04,
      rotateY: x * 0.04,
      duration: 350,
      ease: 'outQuad',
    });

    if (glowRef.current) {
      animate(glowRef.current, {
        translateX: x * 0.25,
        translateY: y * 0.25,
        duration: 350,
        ease: 'outQuad',
      });
    }
  };

  const handleMouseLeave = () => {
    if (activeMode !== 'magnetic' || !logoContainerRef.current) return;

    animate(logoContainerRef.current, {
      translateX: 0,
      translateY: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 800,
      ease: 'outElastic(1, .5)',
    });

    if (glowRef.current) {
      animate(glowRef.current, {
        translateX: 0,
        translateY: 0,
        duration: 800,
        ease: 'outElastic(1, .5)',
      });
    }
  };

  // Generated Anime.js v4 Code Snippet
  const animeJsCodeSnippet = `// Anime.js v4 Motion Reveal para Agroveterinária Zulato
import { createTimeline, animate } from 'animejs';

export function animateZulatoLogo(containerSelector = '#zulato-logo') {
  const tl = createTimeline({
    duration: ${1200 / speed}
  });

  tl.add(containerSelector, {
    scale: [0.85, 1],
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 800,
    ease: 'outExpo',
  }, 50)
  .add(containerSelector + ' .logo-av', {
    translateX: [-50, 0],
    rotate: [-15, 0],
    opacity: [0, 1],
    duration: 900,
    ease: 'outElastic(1, .6)',
  }, 150)
  .add(containerSelector + ' .logo-touro', {
    scale: [0.3, 1],
    opacity: [0, 1],
    duration: 900,
    ease: 'outElastic(1, .6)',
  }, 250)
  .add(containerSelector + ' .logo-text', {
    translateY: [20, 0],
    opacity: [0, 1],
    letterSpacing: ['6px', '0px'],
    duration: 800,
    ease: 'outCubic',
  }, 350);

  return tl;
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(animeJsCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const currentBgHex = stageBg === 'green' 
    ? brand.colors.verdeEscuro.hex 
    : stageBg === 'black' 
      ? brand.colors.pretoComplementar.hex 
      : '#FFFFFF';

  const logoColorMode = stageBg === 'white' ? 'color' : 'color';

  return (
    <section id="motion" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-300 pb-4">
          <div className="space-y-1">
            <span 
              className="text-xs font-mono font-bold uppercase tracking-widest block"
              style={{ color: brand.colors.verdeMedio.hex }}
            >
              Seção 07 • Motion Design & Interatividade
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight flex items-center gap-3">
              <span>Identidade em Movimento (Anime.js)</span>
              <span className="text-xs px-2.5 py-1 bg-stone-900 text-white font-mono uppercase font-bold">
                Anime.js Engine
              </span>
            </h2>
            <p className="text-xs text-stone-500 font-mono">
              Comportamento cinético oficial do logotipo • Splash screens, vídeos institucionais e micro-interações
            </p>
          </div>

          <div className="flex items-center gap-2 no-print">
            <button
              onClick={() => setShowCode(!showCode)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-800 text-xs font-mono transition-colors cursor-pointer border border-stone-300"
            >
              <Code size={13} />
              <span>{showCode ? 'Ocultar Código' : 'Ver Código Anime.js'}</span>
            </button>
          </div>
        </div>

        {/* Motion Modes Tab Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-3 border border-stone-200 no-print">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold text-stone-500 mr-2 uppercase">Modo de Animação:</span>
            
            <button
              onClick={() => { setActiveMode('cinematic'); setIsPlaying(true); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'cinematic'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Zap size={13} />
              <span>1. Entrada Cinematográfica (Reveal)</span>
            </button>

            <button
              onClick={() => { setActiveMode('draw'); setIsPlaying(true); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'draw'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Layers size={13} />
              <span>2. Pulso de Camadas (Wave)</span>
            </button>

            <button
              onClick={() => { setActiveMode('breathing'); setIsPlaying(true); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'breathing'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Sparkles size={13} />
              <span>3. Flutuação Orgânica (Floating)</span>
            </button>

            <button
              onClick={() => { setActiveMode('magnetic'); setIsPlaying(false); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'magnetic'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <MousePointer size={13} />
              <span>4. Interativo Magnético (Cursor 3D)</span>
            </button>
          </div>

          {/* Background switcher for stage */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-stone-500">Fundo:</span>
            <button
              onClick={() => setStageBg('white')}
              className={`w-6 h-6 border cursor-pointer ${stageBg === 'white' ? 'border-stone-900 ring-2 ring-stone-900' : 'border-stone-300'}`}
              style={{ backgroundColor: '#FFFFFF' }}
              title="Fundo Branco"
            />
            <button
              onClick={() => setStageBg('green')}
              className={`w-6 h-6 border cursor-pointer ${stageBg === 'green' ? 'border-stone-900 ring-2 ring-stone-900' : 'border-stone-300'}`}
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
              title="Fundo Verde Floresta"
            />
            <button
              onClick={() => setStageBg('black')}
              className={`w-6 h-6 border cursor-pointer ${stageBg === 'black' ? 'border-stone-900 ring-2 ring-stone-900' : 'border-stone-300'}`}
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
              title="Fundo Preto Carvão"
            />
          </div>

        </div>

        {/* Main Animation Stage */}
        <div 
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative min-h-[420px] sm:min-h-[480px] p-8 sm:p-16 flex flex-col items-center justify-center border border-stone-200 shadow-sm overflow-hidden select-none cursor-crosshair transition-colors duration-300"
          style={{ backgroundColor: currentBgHex }}
        >
          {/* Subtle Technical Stage Grid */}
          <div className="absolute inset-0 bg-manual-grid opacity-30 pointer-events-none" />

          {/* Golden Glow Backdrop Element */}
          <div 
            ref={glowRef}
            className="absolute w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-0"
            style={{ 
              backgroundColor: brand.colors.dourado.hex,
              filter: 'blur(70px)'
            }}
          />

          {/* Animated Logo Hierarchy Container */}
          <div 
            ref={logoContainerRef}
            className="relative z-10 flex flex-col items-center justify-center will-change-transform"
            style={{ perspective: 1000 }}
          >
            
            {/* Top Symbol Part with split elements */}
            <div className="flex items-center justify-center gap-3">
              
              {/* AV Monogram Part */}
              <div ref={avRef} className="will-change-transform">
                <div 
                  className="font-black text-5xl sm:text-7xl tracking-tighter"
                  style={{ 
                    fontFamily: 'Impact, "Arial Black", sans-serif',
                    color: brand.colors.verdeMedio.hex 
                  }}
                >
                  AV
                </div>
              </div>

              {/* Bull + Z Silhouette Representation */}
              <div ref={zBullRef} className="will-change-transform">
                <BrandLogo variant="symbol" colorMode={logoColorMode} size="md" />
              </div>

            </div>

            {/* Typography Zulato Wordmark Part */}
            <div ref={textRef} className="mt-3 text-center will-change-transform">
              <span 
                className="text-xs sm:text-sm font-mono tracking-widest uppercase block font-bold"
                style={{ color: brand.colors.dourado.hex }}
              >
                AGROVETERINÁRIA
              </span>
              <h3 
                className="text-4xl sm:text-6xl font-black uppercase tracking-wider leading-none"
                style={{ 
                  fontFamily: 'Impact, "Arial Black", sans-serif',
                  color: brand.colors.dourado.hex 
                }}
              >
                ZULATO
              </h3>
            </div>

          </div>

          {/* Interactive Magnetic Mode Hint */}
          {activeMode === 'magnetic' && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-stone-900/80 backdrop-blur-xs text-white px-3 py-1 text-[11px] font-mono flex items-center gap-1.5 pointer-events-none">
              <MousePointer size={12} className="text-emerald-400 animate-pulse" />
              <span>Mova o cursor pelo palco para testar a física magnética 3D</span>
            </div>
          )}

          {/* Top-Right Badge */}
          <div className="absolute top-4 right-4 text-[10px] font-mono text-stone-400 uppercase tracking-widest">
            30 ANOS • MOTION SPEC 2026
          </div>
        </div>

        {/* Live Controls Console */}
        <div className="p-6 bg-white border border-stone-200 space-y-6 no-print">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
            
            {/* Playback Controls */}
            <div className="flex items-center gap-2">
              {activeMode !== 'magnetic' && (
                <button
                  onClick={togglePlayPause}
                  className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? 'Pausar' : 'Reproduzir'}</span>
                </button>
              )}

              <button
                onClick={handleReplay}
                className="flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs transition-colors cursor-pointer border border-stone-300"
                title="Reiniciar Animação"
              >
                <RotateCcw size={14} />
                <span>Reiniciar</span>
              </button>
            </div>

            {/* Speed Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-stone-500 font-semibold">Velocidade:</span>
              {[0.5, 1, 1.5, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold transition-all cursor-pointer ${
                    speed === s
                      ? 'bg-stone-900 text-white'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

          </div>

          {/* Technical Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-600">
            <div>
              <span className="font-mono text-stone-400 block uppercase">Duração Nominal</span>
              <span className="font-bold text-stone-900">{(1200 / speed).toFixed(0)} ms ({(1.2 / speed).toFixed(2)}s)</span>
            </div>
            <div>
              <span className="font-mono text-stone-400 block uppercase">Stagger de Elementos</span>
              <span className="font-bold text-stone-900">100ms entre Monograma AV e Tipografia Zulato</span>
            </div>
            <div>
              <span className="font-mono text-stone-400 block uppercase">Framework Vetorial</span>
              <span className="font-bold text-emerald-800">Anime.js v4 Engine</span>
            </div>
          </div>

        </div>

        {/* Code Snippet Modal / Drawer (when toggled) */}
        {showCode && (
          <div className="p-6 bg-stone-950 text-stone-100 space-y-4 font-mono text-xs border border-stone-800">
            <div className="flex justify-between items-center border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Code size={16} className="text-emerald-400" />
                <span className="font-bold text-stone-200">Snippet de Implementação Anime.js v4</span>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                {copiedCode ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedCode ? 'Código Copiado!' : 'Copiar Snippet'}</span>
              </button>
            </div>

            <pre className="p-4 bg-black/60 text-emerald-400 overflow-x-auto leading-relaxed max-h-72">
              {animeJsCodeSnippet}
            </pre>
          </div>
        )}

      </div>
    </section>
  );
};
