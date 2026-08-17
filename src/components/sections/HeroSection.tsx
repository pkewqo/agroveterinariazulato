import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { ShieldCheck, Compass, ArrowRight, Sliders } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { brand, setIsDrawerOpen } = useBrand();

  return (
    <section id="overview" className="relative pt-12 pb-16 border-b border-stone-800/80 overflow-hidden">
      
      {/* Background dynamic ambient glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: brand.colors.primary.hex }}
      />
      <div 
        className="absolute top-1/3 left-10 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none transition-all duration-700"
        style={{ backgroundColor: brand.colors.accent.hex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Brand Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-stone-800/60">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-mono tracking-widest text-stone-400">
              Manual Oficial de Identidade Visual
            </span>
            <span className="text-stone-700">•</span>
            <span className="text-xs font-mono text-emerald-400">v2.4 (2026 Edition)</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-400">
            <span>Fundada em: <strong className="text-stone-200">{brand.established}</strong></span>
            <span className="text-stone-700">•</span>
            <span>Segmento: <strong className="text-stone-200">{brand.category}</strong></span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Brand Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-xs font-medium text-stone-300">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: brand.colors.primary.hex }} />
              <span>Diretrizes de Marca & Design System</span>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
            >
              {brand.brandName}
            </h1>

            <p 
              className="text-lg sm:text-xl text-stone-300 font-medium leading-relaxed"
              style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
            >
              {brand.tagline}
            </p>

            <div className="p-5 rounded-2xl bg-stone-900/60 border border-stone-800/80 backdrop-blur-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-400">
                <Compass size={14} className="text-emerald-400" />
                <span>Manifesto & Missão da Marca</span>
              </div>
              <p 
                className="text-sm text-stone-300 leading-relaxed italic"
                style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
              >
                "{brand.mission}"
              </p>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 no-print">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Sliders size={16} />
                <span>Customizar Cores & Fontes</span>
              </button>

              <a
                href="#logos"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-200 font-semibold text-sm transition-all"
              >
                <span>Explorar Diretrizes</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Brand Logos */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Showcase Card */}
            <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl relative overflow-hidden group">
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${brand.colors.primary.hex} 0%, transparent 70%)`
                }}
              />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
                  <span>ID VISUAL PRINCIPAL</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck size={14} /> Marca Registrada
                  </span>
                </div>

                {/* Main Logo Container */}
                <div className="h-32 rounded-2xl bg-stone-950/90 border border-stone-800/80 flex items-center justify-center p-6 transition-transform group-hover:scale-[1.01]">
                  <img 
                    src={brand.logos.horizontalUrl || brand.logos.verticalUrl} 
                    alt={brand.brandName} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Sub-variant small cards */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800 flex flex-col items-center justify-center gap-2">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Versão Normal</span>
                    <img 
                      src={brand.logos.verticalUrl} 
                      alt="Logo Normal" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800 flex flex-col items-center justify-center gap-2">
                    <span className="text-[10px] font-mono text-stone-400 uppercase">Tom de Voz</span>
                    <span className="text-xs font-bold text-center text-stone-200 line-clamp-2">
                      {brand.archetype}
                    </span>
                    <span className="text-[10px] text-emerald-400">Autêntico & Técnico</span>
                  </div>
                </div>

                {/* Dynamic Brand Color Bar */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono text-stone-400 uppercase mb-2 flex justify-between">
                    <span>Paleta Principal</span>
                    <span>Tokens de Design</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden flex shadow-inner">
                    <div className="w-2/5 h-full" style={{ backgroundColor: brand.colors.primary.hex }} title="Primária" />
                    <div className="w-1/4 h-full" style={{ backgroundColor: brand.colors.secondary.hex }} title="Secundária" />
                    <div className="w-1/5 h-full" style={{ backgroundColor: brand.colors.accent.hex }} title="Acento" />
                    <div className="w-1/5 h-full" style={{ backgroundColor: brand.colors.neutralLight.hex }} title="Neutro Claro" />
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 text-center">
                <span className="block text-xl font-bold text-white font-mono">100%</span>
                <span className="text-[11px] text-stone-400">Vetor / Escalável</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 text-center">
                <span className="block text-xl font-bold text-emerald-400 font-mono">WCAG</span>
                <span className="text-[11px] text-stone-400">Acessível AA/AAA</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800 text-center">
                <span className="block text-xl font-bold text-white font-mono">Web & Print</span>
                <span className="text-[11px] text-stone-400">Tokens Prontos</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
