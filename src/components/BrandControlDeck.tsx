import React, { useState, useRef } from 'react';
import { useBrand } from '../context/BrandContext';
import { POPULAR_GOOGLE_FONTS } from '../utils/fontLoader';
import { 
  X, 
  Palette, 
  Type, 
  ImageIcon, 
  FileText, 
  MessageSquare, 
  Upload, 
  RotateCcw, 
  Sparkles
} from 'lucide-react';

export const BrandControlDeck: React.FC = () => {
  const {
    brand,
    isDrawerOpen,
    setIsDrawerOpen,
    updateBrandField,
    updateColor,
    updateFont,
    updateCustomLogo,
    updateToneSlider,
    presets,
    loadPreset,
    resetToDefault,
  } = useBrand();

  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'logos' | 'copy' | 'tone'>('colors');
  const fileInputHorizRef = useRef<HTMLInputElement>(null);
  const fileInputVertRef = useRef<HTMLInputElement>(null);

  if (!isDrawerOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'horizontal' | 'vertical') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          updateCustomLogo(type, reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs = [
    { id: 'colors', label: 'Cores', icon: Palette },
    { id: 'typography', label: 'Fontes', icon: Type },
    { id: 'logos', label: 'Logotipos', icon: ImageIcon },
    { id: 'copy', label: 'Identidade', icon: FileText },
    { id: 'tone', label: 'Tom de Voz', icon: MessageSquare },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden no-print">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-stone-900 border-l border-stone-800 shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/60">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Sparkles size={18} />
              </div>
              <div>
                <h2 className="text-base font-bold text-stone-100">Painel de Personalização</h2>
                <p className="text-xs text-stone-400">Altere cores, fontes, logos e textos em tempo real</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetToDefault}
                title="Restaurar padrão Agroveterinária Zulato"
                className="p-2 rounded-lg bg-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-700 text-xs flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw size={14} />
                <span className="hidden sm:inline">Padrão</span>
              </button>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Preset quick pills */}
          <div className="px-5 py-2.5 bg-stone-950/40 border-b border-stone-800/80 flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider shrink-0">Presets:</span>
            {presets.map(p => (
              <button
                key={p.id}
                onClick={() => loadPreset(p.id)}
                className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700/60 shrink-0 transition-all"
              >
                {p.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Tabs Navigation */}
          <div className="flex border-b border-stone-800 bg-stone-950/20 px-4 gap-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 py-3 px-3 border-b-2 text-xs font-medium transition-all ${
                    isActive
                      ? 'border-emerald-500 text-emerald-400 bg-stone-800/40'
                      : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-800/20'
                  }`}
                >
                  <Icon size={14} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Drawer Body / Active Tab Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {/* TAB: CORES */}
            {activeTab === 'colors' && (
              <div className="space-y-5">
                <div className="bg-stone-950/50 p-3.5 rounded-xl border border-stone-800">
                  <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Paleta de Cores em Tempo Real</h4>
                  <p className="text-xs text-stone-400">
                    Clique na cor ou digite o código HEX para atualizar instantaneamente todo o manual, componentes e mockups.
                  </p>
                </div>

                <div className="space-y-4">
                  {(Object.keys(brand.colors) as Array<keyof typeof brand.colors>).map(key => {
                    const color = brand.colors[key];
                    return (
                      <div key={key} className="p-3.5 rounded-xl bg-stone-950/40 border border-stone-800/80 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="relative">
                            <input
                              type="color"
                              value={color.hex}
                              onChange={(e) => updateColor(key, e.target.value)}
                              className="w-10 h-10 rounded-lg cursor-pointer border-2 border-stone-700 bg-transparent p-0 overflow-hidden"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-stone-200 truncate">{color.name}</p>
                            <p className="text-[11px] text-stone-400">{color.role}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={color.hex}
                            onChange={(e) => updateColor(key, e.target.value)}
                            className="w-24 px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono text-stone-100 uppercase focus:outline-none focus:ring-1 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB: TIPOGRAFIA */}
            {activeTab === 'typography' && (
              <div className="space-y-5">
                <div className="bg-stone-950/50 p-3.5 rounded-xl border border-stone-800">
                  <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Tipografia & Google Fonts</h4>
                  <p className="text-xs text-stone-400">
                    Selecione famílias tipográficas conectadas em tempo real com o Google Fonts.
                  </p>
                </div>

                {/* Headline Font */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-stone-300 flex items-center justify-between">
                    <span>Fonte de Títulos (Headlines)</span>
                    <span className="text-[11px] font-mono text-emerald-400">{brand.typography.headline.family}</span>
                  </label>
                  <select
                    value={brand.typography.headline.family}
                    onChange={(e) => updateFont('headline', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    {POPULAR_GOOGLE_FONTS.map(font => (
                      <option key={font.family} value={font.family}>
                        {font.family} ({font.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Body Font */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-stone-300 flex items-center justify-between">
                    <span>Fonte de Texto (Body / Leitura)</span>
                    <span className="text-[11px] font-mono text-emerald-400">{brand.typography.body.family}</span>
                  </label>
                  <select
                    value={brand.typography.body.family}
                    onChange={(e) => updateFont('body', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    {POPULAR_GOOGLE_FONTS.map(font => (
                      <option key={font.family} value={font.family}>
                        {font.family} ({font.category})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mono Font */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-stone-300 flex items-center justify-between">
                    <span>Fonte Monospaçada / Código</span>
                    <span className="text-[11px] font-mono text-emerald-400">{brand.typography.mono.family}</span>
                  </label>
                  <select
                    value={brand.typography.mono.family}
                    onChange={(e) => updateFont('mono', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    {POPULAR_GOOGLE_FONTS.filter(f => f.category === 'monospace').map(font => (
                      <option key={font.family} value={font.family}>
                        {font.family}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sample Text for Testing */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-stone-300">
                    Frase de Amostra para Teste de Tipografia
                  </label>
                  <textarea
                    rows={2}
                    value={brand.typography.customSampleText}
                    onChange={(e) => {
                      updateBrandField('typography', {
                        ...brand.typography,
                        customSampleText: e.target.value,
                      });
                    }}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* TAB: LOGOTIPOS */}
            {activeTab === 'logos' && (
              <div className="space-y-5">
                <div className="bg-stone-950/50 p-3.5 rounded-xl border border-stone-800">
                  <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Versões do Logotipo</h4>
                  <p className="text-xs text-stone-400">
                    Troque entre as versões Horizontal e Normal/Vertical ou envie novos arquivos de imagem (PNG/SVG).
                  </p>
                </div>

                {/* Horizontal Logo */}
                <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-200">1. Versão Horizontal</span>
                    <button
                      onClick={() => fileInputHorizRef.current?.click()}
                      className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      <Upload size={13} />
                      <span>Fazer Upload</span>
                    </button>
                    <input
                      ref={fileInputHorizRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'horizontal')}
                    />
                  </div>

                  <div className="h-20 bg-stone-950 rounded-lg border border-stone-800 flex items-center justify-center p-3">
                    <img 
                      src={brand.logos.horizontalUrl} 
                      alt="Logo Horizontal" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Vertical / Stacked Logo */}
                <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-stone-200">2. Versão Normal / Vertical</span>
                    <button
                      onClick={() => fileInputVertRef.current?.click()}
                      className="flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      <Upload size={13} />
                      <span>Fazer Upload</span>
                    </button>
                    <input
                      ref={fileInputVertRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, 'vertical')}
                    />
                  </div>

                  <div className="h-28 bg-stone-950 rounded-lg border border-stone-800 flex items-center justify-center p-3">
                    <img 
                      src={brand.logos.verticalUrl} 
                      alt="Logo Vertical" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Clear Space Slider */}
                <div className="p-4 rounded-xl bg-stone-950/40 border border-stone-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-stone-300">Proporção da Área de Respiro (X)</span>
                    <span className="font-mono text-emerald-400">{brand.logos.clearSpaceRatio}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.1"
                    value={brand.logos.clearSpaceRatio}
                    onChange={(e) => updateBrandField('logos', {
                      ...brand.logos,
                      clearSpaceRatio: parseFloat(e.target.value),
                    })}
                    className="w-full accent-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* TAB: IDENTIDADE / COPY */}
            {activeTab === 'copy' && (
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-300">Nome da Marca</label>
                  <input
                    type="text"
                    value={brand.brandName}
                    onChange={(e) => updateBrandField('brandName', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-300">Slogan / Tagline</label>
                  <input
                    type="text"
                    value={brand.tagline}
                    onChange={(e) => updateBrandField('tagline', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-300">Segmento / Categoria</label>
                    <input
                      type="text"
                      value={brand.category}
                      onChange={(e) => updateBrandField('category', e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-stone-300">Ano de Fundação</label>
                    <input
                      type="text"
                      value={brand.established}
                      onChange={(e) => updateBrandField('established', e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-300">Manifesto & Missão</label>
                  <textarea
                    rows={3}
                    value={brand.mission}
                    onChange={(e) => updateBrandField('mission', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-stone-300">Arquétipo da Marca</label>
                  <input
                    type="text"
                    value={brand.archetype}
                    onChange={(e) => updateBrandField('archetype', e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-stone-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* TAB: TOM DE VOZ */}
            {activeTab === 'tone' && (
              <div className="space-y-5">
                <div className="bg-stone-950/50 p-3.5 rounded-xl border border-stone-800">
                  <h4 className="text-xs font-bold text-stone-300 uppercase tracking-wider mb-1">Sliders de Tom de Voz</h4>
                  <p className="text-xs text-stone-400">
                    Ajuste os eixos de personalidade para definir o posicionamento e a linguagem da marca.
                  </p>
                </div>

                <div className="space-y-4">
                  {brand.toneOfVoice.sliders.map(slider => (
                    <div key={slider.id} className="p-3.5 rounded-xl bg-stone-950/40 border border-stone-800 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-stone-300">
                        <span>{slider.labelLeft}</span>
                        <span className="text-emerald-400 font-mono">{slider.value}%</span>
                        <span>{slider.labelRight}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={slider.value}
                        onChange={(e) => updateToneSlider(slider.id, parseInt(e.target.value))}
                        className="w-full accent-emerald-500"
                      />
                      <p className="text-[11px] text-stone-400">{slider.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-stone-800 bg-stone-950/80 flex items-center justify-between">
            <span className="text-xs text-stone-400">
              Salvamento automático em tempo real
            </span>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-all"
            >
              Concluir Edição
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
