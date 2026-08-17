import type { BrandState, BrandPreset } from '../types/brand';

export const ZULATO_BRAND: BrandState = {
  brandName: 'Agroveterinária Zulato',
  tagline: '30 anos de história a serviço do homem do campo e da pecuária de alta performance.',
  established: '1996 (30 anos de história)',
  category: 'Agropecuária & Medicina Veterinária',
  mission: 'Impulsionar a produtividade, a nutrição e o bem-estar animal com assessoria técnica de excelência, insumos de alta qualidade e o compromisso de quem tem 30 anos de tradição ao lado do produtor rural.',
  vision: 'Ser a principal referência em confiança, tecnologia veterinária e parceria pecuária na região de Dracena e em todo o estado de São Paulo.',
  archetype: 'O Protetor & O Especialista',
  archetypeDescription: 'Uma marca sólida, tradicional e altamente técnica, que transmite a segurança de mais de 3 décadas de história no campo.',
  
  logos: {
    transparentUrl: '/assets/new-logo-transparent.png',
    activeVariant: 'normal',
    clearSpaceRatio: 1.0,
    minDigitalSizePx: 32,
    minPrintSizeMm: 18,
  },

  colors: {
    dourado: {
      id: 'dourado',
      name: 'Dourado Trigo',
      role: 'Tipografia & Touro / Letra Z',
      hex: '#D5B876',
      description: 'Cor principal da tipografia "Agroveterinária Zulato", da letra Z e da silhueta do touro.',
    },
    verdeMedio: {
      id: 'verdeMedio',
      name: 'Verde Folha',
      role: 'Monograma AV (Símbolo)',
      hex: '#50723B',
      description: 'Cor do monograma AV, representando a vitalidade da lavoura e a sanidade das pastagens.',
    },
    verdeEscuro: {
      id: 'verdeEscuro',
      name: 'Verde Floresta',
      role: 'Fundo Institucional Principal',
      hex: '#283D2B',
      description: 'Tom escuro institucional para fundos nobres, embalagens técnicas e contraste principal.',
    },
    pretoComplementar: {
      id: 'pretoComplementar',
      name: 'Preto Carvão',
      role: 'Fundo Secundário & Cor Complementar',
      hex: '#2B2B2B',
      description: 'Cor complementar de apoio para fundos secundários, materiais monocromáticos e detalhes técnicos.',
    },
  },

  typography: {
    headline: {
      family: 'Montserrat',
      weights: [700, 800, 900],
      category: 'sans-serif',
      usage: 'Títulos de impacto, embalagens de suplementos, fachadas e catálogos.',
    },
    body: {
      family: 'Plus Jakarta Sans',
      weights: [400, 500, 600, 700],
      category: 'sans-serif',
      usage: 'Artigos técnicos, bulas, contratos de consultoria, receituários e comunicação.',
    },
    mono: {
      family: 'JetBrains Mono',
      weights: [400, 600],
      category: 'monospace',
      usage: 'Códigos de lote, dosagens veterinárias, dados analíticos e tabelas nutricionais.',
    },
    customSampleText: 'Agroveterinária Zulato: 30 anos de história e parceria com o produtor rural em Dracena - SP.',
  },

  toneOfVoice: {
    sliders: [
      {
        id: 'tone-1',
        labelLeft: 'Tradição (30 anos)',
        labelRight: 'Inovação Tecnológica',
        value: 65,
        description: 'Equilíbrio que valoriza a experiência comprovada no campo com respaldo científico agronômico.',
      },
      {
        id: 'tone-2',
        labelLeft: 'Formal / Técnico',
        labelRight: 'Próximo / Acolhedor',
        value: 80,
        description: 'Linguagem clara, de produtor para produtor, com a proximidade de quem está presente no dia a dia.',
      },
      {
        id: 'tone-3',
        labelLeft: 'Sóbrio & Seguro',
        labelRight: 'Dinâmico & Enérgico',
        value: 40,
        description: 'Foco na segurança veterinária, consistência de resultados e integridade.',
      },
      {
        id: 'tone-4',
        labelLeft: 'Acessível',
        labelRight: 'Alta Performance',
        value: 75,
        description: 'Posicionamento de alto valor agregado com retorno comprovado para a fazenda.',
      },
    ],
    rules: [
      {
        doText: 'Demonstrar respeito à lida no campo, valorizando o tempo e o trabalho do produtor rural.',
        dontText: 'Usar termos pejorativos ou subestimar o conhecimento prático de quem vive no campo.',
      },
      {
        doText: 'Destacar os 30 anos de solidez e credibilidade construídos em Dracena e região.',
        dontText: 'Prometer resultados sem fundamentação veterinária e zootécnica adequada.',
      },
    ],
    keywords: ['30 Anos de História', 'Dracena SP', 'Saúde Animal', 'Nutrição Bovina', 'Confiança', 'Tradição'],
  },

  socialHandles: {
    instagram: '@agrozulato',
    website: 'www.agrozulato.com.br',
    phone: '18 99653-5452',
    location: 'Av. Presidente Roosevelt, 452 • Dracena - SP',
  },
};

export const BRAND_PRESETS: BrandPreset[] = [
  {
    id: 'zulato',
    name: 'Agroveterinária Zulato (Oficial)',
    description: '30 anos de história em Dracena - SP • Nova Identidade Visual.',
    state: ZULATO_BRAND,
  },
];
