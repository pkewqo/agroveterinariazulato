import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';

export const ManualHero: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Meta Line */}
        <div className="flex flex-wrap items-center justify-between text-xs font-mono text-stone-500 tracking-wider uppercase">
          <div>NORMAS DE IDENTIDADE VISUAL & GESTÃO DA MARCA</div>
          <div>DRACENA - SP • FERNANDO ZULATO (PROPRIETÁRIO)</div>
        </div>

        {/* Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span 
                className="text-xs uppercase font-mono tracking-widest font-bold block"
                style={{ color: brand.colors.verdeMedio.hex }}
              >
                ★ 30 Anos de História • Guia Oficial de Aplicação
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-stone-900 tracking-tight leading-[1.05]">
                Manual de Identidade Visual
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-stone-700 pt-1">
                {brand.brandName}
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
              Com mais de <strong>30 anos de história</strong> em Dracena e região, a <strong>{brand.brandName}</strong> consolida
              suas novas diretrizes normativas, proporções matemáticas, critérios cromáticos e tipográficos
              para aplicação consistente em todos os pontos de contato.
            </p>

            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-stone-600">
              <div>
                <span className="font-mono text-stone-400 block uppercase">Especialidade</span>
                <span className="font-bold text-stone-900">Grande Porte & Linha Pet</span>
              </div>
              <div>
                <span className="font-mono text-stone-400 block uppercase">Localização</span>
                <span className="font-bold text-stone-900">Dracena - SP</span>
              </div>
              <div>
                <span className="font-mono text-stone-400 block uppercase">Atendimento</span>
                <span className="font-bold text-stone-900">{brand.socialHandles.phone}</span>
              </div>
            </div>
          </div>

          {/* Right: Master Brand Mark Display (Horizontal) */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-12 bg-stone-50 flex flex-col items-center justify-center min-h-[280px]">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-6">
                Marca Institucional Oficial (Horizontal)
              </span>
              <BrandLogo variant="horizontal" colorMode="color" size="lg" />
              <div className="w-full mt-8 pt-4 flex justify-between text-[11px] font-mono text-stone-500 border-t border-stone-200">
                <span style={{ color: brand.colors.verdeMedio.hex }} className="font-bold">
                  ● AV: {brand.colors.verdeMedio.hex}
                </span>
                <span style={{ color: brand.colors.dourado.hex }} className="font-bold">
                  ● Zulato: {brand.colors.dourado.hex}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
