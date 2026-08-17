import React from 'react';
import { useBrand } from '../../context/BrandContext';
import { MessageSquare, CheckCircle2, XCircle, Sparkles, Sliders, Shield, Tag } from 'lucide-react';

export const VoiceToneSection: React.FC = () => {
  const { brand, setIsDrawerOpen, updateToneSlider } = useBrand();

  return (
    <section id="voice" className="py-16 border-b border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-900 border border-stone-800 text-xs font-mono text-emerald-400">
              <span>04. VOZ, TOM & PERSONA DA MARCA</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
            >
              Linguagem e Expressão Verbal
            </h2>
            <p className="text-stone-400 max-w-3xl text-sm sm:text-base leading-relaxed">
              Como a <strong>{brand.brandName}</strong> conversa com o produtor rural, pecuarista e veterinários parceiros:
              com autoridade técnica, simplicidade prática e parceria incondicional no campo.
            </p>
          </div>

          <button
            onClick={() => setIsDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 text-xs font-medium text-stone-200 transition-colors shrink-0 no-print"
          >
            <Sliders size={14} className="text-emerald-400" />
            <span>Ajustar Sliders</span>
          </button>
        </div>

        {/* 1. Brand Archetype & Keywords Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold">
              <Shield size={16} />
              <span>Arquétipo Predominante</span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl font-extrabold text-white"
              style={{ fontFamily: `"${brand.typography.headline.family}", sans-serif` }}
            >
              {brand.archetype}
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              {brand.archetypeDescription}
            </p>
          </div>

          <div className="lg:col-span-4 p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-stone-400 uppercase font-semibold flex items-center gap-1.5 mb-3">
                <Tag size={14} className="text-emerald-400" />
                <span>Palavras-Chave Essenciais</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {brand.toneOfVoice.keywords.map((kw, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-xl text-xs font-medium bg-stone-950 border border-stone-800 text-stone-200"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-stone-500 font-mono">
              Vocabulário guia para campanhas e redes sociais.
            </p>
          </div>

        </div>

        {/* 2. Interactive Tone of Voice Sliders */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
              <MessageSquare size={18} className="text-emerald-400" />
              <span>Eixos de Personalidade e Tom</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Deslize os controles para calibrar o tom ideal de comunicação em canais digitais e impressos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.toneOfVoice.sliders.map(slider => (
              <div key={slider.id} className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
                
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-stone-300">{slider.labelLeft}</span>
                  <span className="px-2 py-0.5 rounded font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40">
                    {slider.value}%
                  </span>
                  <span className="text-stone-300">{slider.labelRight}</span>
                </div>

                <div className="relative py-1">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={slider.value}
                    onChange={(e) => updateToneSlider(slider.id, parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-600 font-mono pt-1">
                    <span>0%</span>
                    <span>50% (Equilíbrio)</span>
                    <span>100%</span>
                  </div>
                </div>

                <p className="text-xs text-stone-400 leading-relaxed">
                  {slider.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Copywriting Rules: Do's & Don'ts Table */}
        <div className="p-8 rounded-3xl bg-stone-900 border border-stone-800 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
              <Sparkles size={18} className="text-emerald-400" />
              <span>Diretrizes de Redação: Como Nos Comunicamos</span>
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Exemplos práticos de redação para anúncios, mensagens de WhatsApp, atendimento balcão e redes sociais.
            </p>
          </div>

          <div className="space-y-4">
            {brand.toneOfVoice.rules.map((rule, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* DO CARD */}
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <CheckCircle2 size={16} />
                    <span>O QUE FAZER (RECOMENDADO)</span>
                  </div>
                  <p className="text-xs text-stone-200 leading-relaxed">
                    "{rule.doText}"
                  </p>
                </div>

                {/* DON'T CARD */}
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
                    <XCircle size={16} />
                    <span>O QUE EVITAR (PROIBIDO)</span>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    "{rule.dontText}"
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
