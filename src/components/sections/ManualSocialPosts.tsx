import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';
import { POPULAR_GOOGLE_FONTS } from '../../utils/fontLoader';
import { Type, Sparkles, MapPin, Phone } from 'lucide-react';

export const ManualSocialPosts: React.FC = () => {
  const { brand, updateFont } = useBrand();

  return (
    <section id="social-posts" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with Font Selector */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
              Seção 06
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
              Aplicações para Redes Sociais (Posts 1350 × 1350)
            </h2>
            <p className="text-xs text-stone-500 font-mono">
              Especialidade: Animais de Grande Porte (Bovinos/Equinos) & Linha Pet Completa
            </p>
          </div>

          {/* Secondary Font Selector */}
          <div className="flex items-center gap-2 bg-stone-100 p-2 border border-stone-300 no-print">
            <Type size={14} className="text-stone-600" />
            <span className="text-xs font-mono font-bold text-stone-800">Mudar Fonte Secundária:</span>
            <select
              aria-label="Selecionar Fonte Secundária dos Posts"
              value={brand.typography.body.family}
              onChange={(e) => updateFont('body', e.target.value)}
              className="bg-white border border-stone-300 text-stone-900 text-xs px-2.5 py-1 font-sans cursor-pointer outline-none"
            >
              {POPULAR_GOOGLE_FONTS.map(f => (
                <option key={f.family} value={f.family}>
                  {f.family}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 3 Square Posts Grid (1350x1350 format / 1:1 Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* POST 1: Animais de Grande Porte (Bovinos & Equinos) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px] font-mono text-stone-500">
              <span className="font-bold uppercase text-stone-800">Post 01 • Grande Porte</span>
              <span>1350 × 1350 px</span>
            </div>

            <div 
              className="w-full aspect-square p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-colors relative overflow-hidden"
              style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
            >
              {/* Header Badge */}
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span 
                  className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 bg-black/40 text-white"
                  style={{ color: brand.colors.dourado.hex }}
                >
                  PECUÁRIA & EQUINOS
                </span>
                <span className="text-[10px] font-mono text-emerald-200/80">
                  DRACENA - SP
                </span>
              </div>

              {/* Central Copy */}
              <div className="space-y-4 my-auto py-4">
                <h3 
                  className="text-2xl sm:text-3xl font-normal leading-[1.08] text-white uppercase tracking-wide"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  NUTRIÇÃO DE ALTA PERFORMANCE <br />
                  <span style={{ color: brand.colors.dourado.hex }}>PARA O SEU REBANHO</span>
                </h3>

                <p 
                  className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xs"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  Suplementos minerais, núcleos, rações de alto ganho de peso e vacinas com suporte técnico de quem tem <strong>30 anos de história no campo</strong>.
                </p>

                <div 
                  className="pt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                  style={{ 
                    color: brand.colors.dourado.hex,
                    fontFamily: `"${brand.typography.body.family}", sans-serif` 
                  }}
                >
                  <Sparkles size={13} />
                  <span>Resultados comprovados na balança</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <BrandLogo variant="normal" colorMode="color" size="sm" />
                <div className="text-right text-[10px] font-mono text-emerald-100">
                  <p className="font-bold">{brand.socialHandles.phone}</p>
                  <p>{brand.socialHandles.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* POST 2: Linha Pet & Animais de Companhia (Cães & Gatos) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px] font-mono text-stone-500">
              <span className="font-bold uppercase text-stone-800">Post 02 • Linha Pet</span>
              <span>1350 × 1350 px</span>
            </div>

            <div 
              className="w-full aspect-square p-8 sm:p-10 flex flex-col justify-between shadow-xs bg-stone-50 border border-stone-200 relative overflow-hidden"
            >
              {/* Header Badge */}
              <div className="flex justify-between items-center border-b border-stone-200 pb-4">
                <span 
                  className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1"
                  style={{ 
                    backgroundColor: `${brand.colors.verdeMedio.hex}20`,
                    color: brand.colors.verdeEscuro.hex 
                  }}
                >
                  CÃES & GATOS
                </span>
                <span className="text-[10px] font-mono text-stone-500">
                  SAÚDE & BEM-ESTAR
                </span>
              </div>

              {/* Central Copy */}
              <div className="space-y-4 my-auto py-4">
                <h3 
                  className="text-2xl sm:text-3xl font-normal leading-[1.08] text-stone-900 uppercase tracking-wide"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  O MELHOR CUIDADO & <br />
                  <span style={{ color: brand.colors.verdeMedio.hex }}>NUTRIÇÃO PARA SEU PET</span>
                </h3>

                <p 
                  className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xs"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  Rações Super Premium, vermífugos, petiscos e medicamentos veterinários das melhores marcas para a alegria e longevidade do seu melhor amigo.
                </p>

                <div 
                  className="pt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-stone-800"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  <span>★ Atendimento especializado em Dracena</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-stone-200 flex justify-between items-end">
                <BrandLogo variant="normal" colorMode="color" size="sm" />
                <div className="text-right text-[10px] font-mono text-stone-600">
                  <p className="font-bold text-stone-900">{brand.socialHandles.phone}</p>
                  <p>Fernando Zulato • Proprietário</p>
                </div>
              </div>
            </div>
          </div>

          {/* POST 3: Institucional & Tradição (Dracena - SP) */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[11px] font-mono text-stone-500">
              <span className="font-bold uppercase text-stone-800">Post 03 • Institucional</span>
              <span>1350 × 1350 px</span>
            </div>

            <div 
              className="w-full aspect-square p-8 sm:p-10 flex flex-col justify-between shadow-xs transition-colors relative overflow-hidden"
              style={{ backgroundColor: brand.colors.pretoComplementar.hex }}
            >
              {/* Header Badge */}
              <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                <span 
                  className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1"
                  style={{ 
                    backgroundColor: brand.colors.verdeEscuro.hex,
                    color: brand.colors.dourado.hex 
                  }}
                >
                  ★ 30 ANOS DE HISTÓRIA
                </span>
                <span className="text-[10px] font-mono text-stone-400">
                  DESDE 1996
                </span>
              </div>

              {/* Central Copy */}
              <div className="space-y-4 my-auto py-4">
                <h3 
                  className="text-2xl sm:text-3xl font-normal leading-[1.08] text-white uppercase tracking-wide"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  PARCERIA NO CAMPO & <br />
                  <span style={{ color: brand.colors.dourado.hex }}>CARINHO NA CIDADE</span>
                </h3>

                <p 
                  className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xs"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  De grandes fazendas ao animalzinho da família: conte com a tradição, seriedade e variedade da <strong>Agroveterinária Zulato</strong>.
                </p>

                <div 
                  className="pt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-emerald-400"
                  style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
                >
                  <MapPin size={13} />
                  <span>Av. Presidente Roosevelt, 452 • Dracena</span>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-stone-800 flex justify-between items-end">
                <BrandLogo variant="normal" colorMode="mono-white" size="sm" />
                <div className="text-right text-[10px] font-mono text-stone-400">
                  <p className="font-bold text-white flex items-center justify-end gap-1">
                    <Phone size={11} className="text-emerald-400" />
                    <span>{brand.socialHandles.phone}</span>
                  </p>
                  <p>Fernando Zulato</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
