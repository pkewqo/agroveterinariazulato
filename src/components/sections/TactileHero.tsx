import React, { useEffect } from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';
import { loadGoogleFont } from '../../utils/fontLoader';
import { ShieldCheck, MapPin, Phone, History, Sparkles } from 'lucide-react';

export const TactileHero: React.FC = () => {
  const { brand } = useBrand();

  useEffect(() => {
    loadGoogleFont('Playfair Display');
    loadGoogleFont('Cinzel');
  }, []);

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      
      {/* Background Subtle Watermark Monogram Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center select-none overflow-hidden">
        <span className="font-serif text-[40vw] font-black text-white tracking-tighter leading-none">
          AVZ
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Editorial Ribbon */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-400 tracking-widest uppercase pb-6 border-b border-stone-800/80 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 inline-block" />
            <span className="text-stone-300 font-bold">Manual de Identidade Visual • Mostruário Físico</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-stone-400">
            <span>DRACENA - SP</span>
            <span>•</span>
            <span className="text-emerald-400 font-bold">30 ANOS DE HISTÓRIA</span>
          </div>
        </div>

        {/* Hero Body: Fluid Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Classic Editorial Title & Copy */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900/80 text-emerald-400 text-xs font-mono tracking-wider uppercase border border-stone-800">
                <Sparkles size={12} />
                <span>Edição Oficial de Marca</span>
              </div>

              <h1 
                className="text-4xl sm:text-6xl font-normal text-stone-100 tracking-tight leading-[1.08]"
                style={{ fontFamily: '"Playfair Display", "Cinzel", Georgia, serif' }}
              >
                Agroveterinária <br />
                <span className="font-bold italic text-emerald-400">Zulato</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed pt-2 max-w-xl">
                Diretrizes de identidade, materialidade e rigor construtivo forjadas em mais de três décadas
                de liderança e assessoria zootécnica de alta performance no campo.
              </p>
            </div>

            {/* Badges / Technical Metadata */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 text-xs font-mono">
              <div className="p-4 bg-stone-900/60 border border-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <History size={14} />
                  <span className="font-bold">TRADIÇÃO</span>
                </div>
                <p className="text-stone-200 font-semibold">30 anos de história!</p>
              </div>

              <div className="p-4 bg-stone-900/60 border border-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <MapPin size={14} />
                  <span className="font-bold">UNIDADE</span>
                </div>
                <p className="text-stone-200 font-semibold">Dracena - SP</p>
              </div>

              <div className="p-4 bg-stone-900/60 border border-stone-800 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck size={14} />
                  <span className="font-bold">SEGMENTO</span>
                </div>
                <p className="text-stone-200 font-semibold">Medicina Veterinária</p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-stone-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-emerald-400" />
                <span>{brand.socialHandles.phone}</span>
              </span>
              <span>•</span>
              <span>{brand.socialHandles.location}</span>
            </div>
          </div>

          {/* Right: Master Physical Mockup on Debossed Leather Block */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* The Textured Dark Green Leather Slab */}
            <div className="relative w-full max-w-lg p-10 sm:p-14 leather-green-block transition-transform duration-300 hover:scale-[1.01]">
              
              {/* Subtle top edge brass pin / rivet detail */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[9px] font-mono tracking-widest text-emerald-200/60 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 inline-block shadow-xs" />
                <span>MOSTRUÁRIO GRAVADO EM COURO INSTITUCIONAL</span>
              </div>

              {/* Debossed / Hot-Stamped Logo in the Leather */}
              <div className="py-12 flex flex-col items-center justify-center deboss-leather">
                <BrandLogo variant="horizontal" colorMode="mono-white" size="lg" />
              </div>

              {/* Bottom metadata printed on leather corner */}
              <div className="mt-4 pt-4 border-t border-emerald-900/60 flex items-center justify-between text-[10px] font-mono text-emerald-300/80">
                <span>MATRIZ: COURO #1A3C1E</span>
                <span>ESTAMPAGEM: BAIXO-RELEVO</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
