import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { BrandLogo } from '../BrandLogo';

export const ManualStationery: React.FC = () => {
  const { brand } = useBrand();

  return (
    <section id="stationery" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest block">
            Seção 05
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Papelaria Corporativa & Aplicações Gráficas
          </h2>
          <p className="text-xs text-stone-500 font-mono">
            Cartão de Visita • Papel Timbrado A4 • Fernando Zulato (Proprietário)
          </p>
        </div>

        {/* 1. Business Card (Frente e Verso) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">5.1</span>
              <span>Cartão de Visita Corporativo (90 × 50 mm)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Especificação gráfica: Papel Couché 350g/m², laminação fosca bilateral e verniz reserva UV localizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Front Card */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-stone-400 uppercase font-semibold block">
                Frente (Informações de Contato)
              </span>
              <div 
                className="p-8 flex flex-col justify-between aspect-[9/5] min-h-[220px] bg-stone-50"
              >
                <div className="flex justify-between items-start">
                  <BrandLogo variant="normal" colorMode="color" size="sm" />
                  <span 
                    className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5"
                    style={{ 
                      backgroundColor: `${brand.colors.dourado.hex}30`,
                      color: brand.colors.verdeEscuro.hex 
                    }}
                  >
                    30 anos de história!
                  </span>
                </div>

                <div className="space-y-1">
                  <p 
                    className="text-lg font-bold text-stone-900 leading-tight uppercase tracking-wide"
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    Fernando Zulato
                  </p>
                  <p 
                    className="text-xs font-semibold"
                    style={{ color: brand.colors.verdeMedio.hex }}
                  >
                    Proprietário
                  </p>
                  <p className="text-[11px] font-mono text-stone-500">
                    Grandes Animais & Linha Pet • Dracena - SP
                  </p>
                </div>

                <div className="pt-2 flex justify-between items-center text-[10px] font-mono text-stone-600 border-t border-stone-200">
                  <span>{brand.socialHandles.location}</span>
                  <span className="font-bold">{brand.socialHandles.phone}</span>
                </div>
              </div>
            </div>

            {/* Back Card */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-stone-400 uppercase font-semibold block">
                Verso (Assinatura Institucional)
              </span>
              <div 
                className="p-8 flex flex-col justify-between aspect-[9/5] min-h-[220px] transition-colors"
                style={{ backgroundColor: brand.colors.verdeEscuro.hex }}
              >
                <div className="flex justify-between items-center">
                  <span 
                    className="text-[9px] font-mono tracking-widest font-bold uppercase"
                    style={{ color: brand.colors.dourado.hex }}
                  >
                    ★ 30 anos de história!
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-emerald-200/70 uppercase">
                    Dracena - SP
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <BrandLogo variant="normal" colorMode="color" />
                </div>

                <div className="text-center text-[9px] font-mono text-emerald-200/70">
                  {brand.socialHandles.location} • Tel: {brand.socialHandles.phone}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Official Timbrated Letterhead A4 */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <span className="font-mono text-stone-400">5.2</span>
              <span>Papel Timbrado Institucional A4 (210 × 297 mm)</span>
            </h3>
            <p className="text-xs text-stone-500">
              Especificação gráfica: Papel Offset 90g/m² ou Papel Vergê 120g/m². Impressão em 4 cores (CMYK).
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-stone-50 p-10 sm:p-14 space-y-12">
            
            {/* Letterhead Header */}
            <div 
              className="flex justify-between items-start pb-6 border-b-2" 
              style={{ borderColor: brand.colors.verdeEscuro.hex }}
            >
              <div>
                <BrandLogo variant="normal" colorMode="color" size="sm" />
                <p 
                  className="text-[10px] font-mono font-bold mt-1 uppercase"
                  style={{ color: brand.colors.verdeMedio.hex }}
                >
                  Grandes Animais & Linha Pet • 30 anos de tradição
                </p>
              </div>
              <div className="text-right text-[10px] font-mono text-stone-600 space-y-0.5">
                <p className="font-bold text-stone-900 text-xs">{brand.brandName}</p>
                <p>{brand.socialHandles.location}</p>
                <p 
                  className="font-bold"
                  style={{ color: brand.colors.verdeEscuro.hex }}
                >
                  WhatsApp / Tel: {brand.socialHandles.phone}
                </p>
              </div>
            </div>

            {/* Letterhead Dummy Body */}
            <div 
              className="space-y-4 text-xs text-stone-700 leading-relaxed min-h-[140px]"
              style={{ fontFamily: `"${brand.typography.body.family}", sans-serif` }}
            >
              <div className="flex justify-between text-[11px] font-semibold text-stone-900 pb-2 border-b border-stone-200">
                <span>DESTINATÁRIO: Clientes, Produtores e Tutores de Pets</span>
                <span>DATA: 17 de Agosto de 2026</span>
              </div>
              
              <h5 
                className="text-lg font-bold text-stone-900 pt-2 uppercase tracking-wide"
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                Declaração de Conformidade Técnica & Fornecimento
              </h5>

              <p>
                Atestamos que os suprimentos minerais, rações balanceadas de alta digestibilidade, medicamentos e acessórios fornecidos pela <strong>{brand.brandName}</strong> atendem aos mais rigorosos padrões de qualidade e segurança tanto para <strong>animais de grande porte (bovinos e equinos)</strong> quanto para <strong>animais de companhia (cães e gatos)</strong>.
              </p>

              <div className="p-4 bg-white space-y-1 font-mono text-[11px]">
                <p className="font-bold text-stone-900">LINHAS DE ESPECIALIDADE ATENDIDAS:</p>
                <p>1. Suplementação, vacinas e nutrição intensiva para bovinos de corte/leite e equinos.</p>
                <p>2. Linha Pet completa: rações super premium, farmácia veterinária e banho & tosa.</p>
              </div>
            </div>

            {/* Letterhead Footer */}
            <div className="pt-6 flex justify-between items-end text-[10px] text-stone-500 font-mono border-t border-stone-200">
              <div>
                <p className="font-bold text-stone-900">Fernando Zulato</p>
                <p>Proprietário</p>
              </div>
              <div className="text-right">
                <p>{brand.socialHandles.location} • {brand.socialHandles.phone}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
