import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { AnimatedSvgLogo } from '../AnimatedSvgLogo';
import { MapPin, Phone, Award } from 'lucide-react';

export const ManualHero: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section 
      className="relative py-16 sm:py-24 text-white transition-colors border-b border-stone-800 overflow-hidden"
      style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
    >
      {/* Subtle Technical Grid Background */}
      <div className="absolute inset-0 bg-manual-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header Meta Line */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-400 tracking-wider uppercase border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2">
            <span 
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: brand.colors.dourado.hex }}
            />
            <span>NORMAS DE IDENTIDADE VISUAL & GESTÃO DA MARCA</span>
          </div>
          <div>DRACENA - SP • FERNANDO ZULATO (PROPRIETÁRIO)</div>
        </div>

        {/* Master Showcase: Horizontal Animated SVG Drawing (Anime.js infinite loop) */}
        <div className="py-6 sm:py-10 flex flex-col items-center justify-center space-y-4">
          
          <div className="text-center">
            <span 
              className="text-xs uppercase font-mono tracking-widest font-bold"
              style={{ color: brand.colors.dourado.hex }}
            >
              ★ Assinatura Institucional Primária (Horizontal)
            </span>
          </div>

          {/* Anime.js Infinite Loop SVG Drawing Stage */}
          <div className="w-full py-4 flex items-center justify-center">
            <AnimatedSvgLogo className="w-full" />
          </div>

        </div>

        {/* Bottom Hero Information Grid */}
        <div className="pt-8 border-t border-stone-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-7 space-y-4">
            <div className="space-y-1">
              <span 
                className="text-xs font-mono font-bold uppercase tracking-widest block"
                style={{ color: brand.colors.verdeMedio.hex }}
              >
                ★ 30 Anos de História & Tradição no Campo
              </span>
              <h1 
                className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                Manual de Identidade Visual
              </h1>
              <p className="text-lg font-bold text-stone-300">
                {brand.brandName}
              </p>
            </div>

            <p 
              className="text-sm text-stone-400 leading-relaxed max-w-xl"
              style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
            >
              Com mais de <strong>30 anos de história</strong> em Dracena e região, a <strong>{brand.brandName}</strong> consolida suas diretrizes normativas, proporções matemáticas, critérios cromáticos e tipográficos para aplicação consistente no segmento de <strong>suprimentos para grandes animais</strong> e <strong>linha pet</strong>.
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 text-xs font-mono">
            
            <div className="p-4 bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-stone-500 uppercase flex items-center gap-1">
                <Award size={12} className="text-emerald-400" />
                <span>Tradição</span>
              </span>
              <p className="font-bold text-stone-200">30 anos de história!</p>
              <p className="text-[10px] text-stone-400">Desde 1996 em Dracena</p>
            </div>

            <div className="p-4 bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-stone-500 uppercase flex items-center gap-1">
                <MapPin size={12} className="text-emerald-400" />
                <span>Localização</span>
              </span>
              <p className="font-bold text-stone-200">Dracena - SP</p>
              <p className="text-[10px] text-stone-400">Av. Presidente Roosevelt, 452</p>
            </div>

            <div className="p-4 bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-stone-500 uppercase">Especialidade</span>
              <p className="font-bold text-stone-200">Grande Porte & Pets</p>
              <p className="text-[10px] text-stone-400">Nutrição, Medicamentos & Rações</p>
            </div>

            <div className="p-4 bg-stone-900/80 border border-stone-800 space-y-1">
              <span className="text-stone-500 uppercase flex items-center gap-1">
                <Phone size={12} className="text-emerald-400" />
                <span>Atendimento</span>
              </span>
              <p className="font-bold text-stone-200">{brand.socialHandles.phone}</p>
              <p className="text-[10px] text-stone-400">Fernando Zulato (Proprietário)</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
