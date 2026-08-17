import React, { useState, useRef } from 'react';
import { useBrand } from '../context/BrandContext';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Upload, 
  Printer, 
  FileCode, 
  FileJson, 
  Code2
} from 'lucide-react';

export const ExportModal: React.FC = () => {
  const { brand, isExportModalOpen, setIsExportModalOpen, importBrandJson } = useBrand();
  const [activeTab, setActiveTab] = useState<'css' | 'tailwind' | 'json' | 'pdf'>('css');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isExportModalOpen) return null;

  // 1. CSS Variables Code
  const cssVariablesCode = `:root {
  /* ${brand.brandName} - Design Tokens */
  --brand-primary: ${brand.colors.primary.hex};
  --brand-secondary: ${brand.colors.secondary.hex};
  --brand-accent: ${brand.colors.accent.hex};
  --brand-neutral-dark: ${brand.colors.neutralDark.hex};
  --brand-neutral-light: ${brand.colors.neutralLight.hex};
  --brand-surface: ${brand.colors.surface.hex};

  /* Typography */
  --font-headline: '${brand.typography.headline.family}', sans-serif;
  --font-body: '${brand.typography.body.family}', sans-serif;
  --font-mono: '${brand.typography.mono.family}', monospace;
}`;

  // 2. Tailwind Config Code
  const tailwindConfigCode = `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '${brand.colors.primary.hex}',
          secondary: '${brand.colors.secondary.hex}',
          accent: '${brand.colors.accent.hex}',
          dark: '${brand.colors.neutralDark.hex}',
          light: '${brand.colors.neutralLight.hex}',
        }
      },
      fontFamily: {
        headline: ['${brand.typography.headline.family}', 'sans-serif'],
        body: ['${brand.typography.body.family}', 'sans-serif'],
        mono: ['${brand.typography.mono.family}', 'monospace'],
      }
    }
  }
};`;

  // 3. Brand JSON String
  const jsonBrandString = JSON.stringify(brand, null, 2);

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonBrandString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${brand.brandName.toLowerCase().replace(/\s+/g, '-')}-brand-tokens.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          const ok = importBrandJson(reader.result);
          if (ok) {
            setImportStatus('success');
            setTimeout(() => {
              setImportStatus('idle');
              setIsExportModalOpen(false);
            }, 1200);
          } else {
            setImportStatus('error');
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto no-print flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs"
        onClick={() => setIsExportModalOpen(false)}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-stone-900 text-stone-100 z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 flex items-center justify-between bg-stone-950">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-stone-800 text-emerald-400">
              <Download size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-stone-100">Exportação de Tokens Gráficos</h3>
              <p className="text-xs text-stone-400">Variáveis CSS, Tailwind, JSON e impressão de manual</p>
            </div>
          </div>

          <button
            onClick={() => setIsExportModalOpen(false)}
            className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-stone-950/50 px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('css')}
            className={`flex items-center gap-1.5 py-3 px-4 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'css'
                ? 'text-emerald-400 bg-stone-800'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <FileCode size={14} />
            <span>CSS Variables</span>
          </button>

          <button
            onClick={() => setActiveTab('tailwind')}
            className={`flex items-center gap-1.5 py-3 px-4 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'tailwind'
                ? 'text-emerald-400 bg-stone-800'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Code2 size={14} />
            <span>Tailwind Config</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-1.5 py-3 px-4 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'json'
                ? 'text-emerald-400 bg-stone-800'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <FileJson size={14} />
            <span>JSON & Backup</span>
          </button>

          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex items-center gap-1.5 py-3 px-4 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'pdf'
                ? 'text-emerald-400 bg-stone-800'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Printer size={14} />
            <span>Imprimir / PDF</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          
          {/* TAB: CSS */}
          {activeTab === 'css' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400">Tokens prontos para o arquivo global <code>index.css</code></span>
                <button
                  onClick={() => handleCopyCode(cssVariablesCode)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copiado!' : 'Copiar CSS'}</span>
                </button>
              </div>

              <pre className="p-4 bg-stone-950 font-mono text-xs text-emerald-400 overflow-x-auto">
                {cssVariablesCode}
              </pre>
            </div>
          )}

          {/* TAB: TAILWIND */}
          {activeTab === 'tailwind' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-stone-400">Extensão para o <code>tailwind.config.js</code></span>
                <button
                  onClick={() => handleCopyCode(tailwindConfigCode)}
                  className="flex items-center gap-1 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copiado!' : 'Copiar Tailwind'}</span>
                </button>
              </div>

              <pre className="p-4 bg-stone-950 font-mono text-xs text-emerald-400 overflow-x-auto">
                {tailwindConfigCode}
              </pre>
            </div>
          )}

          {/* TAB: JSON */}
          {activeTab === 'json' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-400">
                Baixe a configuração completa da marca em arquivo JSON para salvar em seu computador ou importar em outro dispositivo.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleDownloadJson}
                  className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs transition-all cursor-pointer"
                >
                  <Download size={15} />
                  <span>Baixar Arquivo .json</span>
                </button>

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-xs transition-all cursor-pointer"
                >
                  <Upload size={15} />
                  <span>Importar .json</span>
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json,application/json"
                  className="hidden"
                  onChange={handleImportFile}
                />
              </div>

              {importStatus === 'success' && (
                <div className="p-3 bg-emerald-950 text-emerald-400 text-xs flex items-center gap-2">
                  <Check size={14} />
                  <span>Brand Guide importado e aplicado com sucesso!</span>
                </div>
              )}

              {importStatus === 'error' && (
                <div className="p-3 bg-rose-950 text-rose-400 text-xs">
                  O arquivo JSON fornecido não contém uma estrutura de marca válida.
                </div>
              )}

              <pre className="p-4 bg-stone-950 font-mono text-[11px] text-stone-400 max-h-48 overflow-y-auto">
                {jsonBrandString}
              </pre>
            </div>
          )}

          {/* TAB: PDF / PRINT */}
          {activeTab === 'pdf' && (
            <div className="space-y-4">
              <div className="p-4 bg-stone-950 space-y-3">
                <h4 className="text-sm font-bold text-stone-200 flex items-center gap-2">
                  <Printer size={16} className="text-emerald-400" />
                  <span>Gerar Manual em PDF de Alta Resolução</span>
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  O layout editorial está calibrado para exportar todas as páginas
                  em papel A4 com fundo limpo, gráficos nítidos e sem bordas desnecessárias.
                </p>
              </div>

              <button
                onClick={() => {
                  setIsExportModalOpen(false);
                  setTimeout(() => window.print(), 300);
                }}
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Printer size={16} />
                <span>Abrir Impressão / Salvar PDF Agora</span>
              </button>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-950 flex justify-end">
          <button
            onClick={() => setIsExportModalOpen(false)}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
