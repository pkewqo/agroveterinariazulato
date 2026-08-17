import React from 'react';
import { EXACT_HORIZONTAL_LOGO_PATH, EXACT_VERTICAL_LOGO_PATH } from '../data/exactLogoPath';
import { useBrand } from '../context/BrandContext';

export interface SvgLogoProps {
  variant?: 'horizontal' | 'vertical' | 'symbol';
  colorMode?: 'color' | 'mono-black' | 'mono-white';
  className?: string;
  douradoColor?: string;
  verdeMedioColor?: string;
  monoBlackHex?: string;
}

export const SvgLogo: React.FC<SvgLogoProps> = ({ 
  variant = 'horizontal',
  colorMode = 'color',
  className = '',
  douradoColor,
  verdeMedioColor,
  monoBlackHex,
}) => {
  const { brand } = useBrand();

  const effectiveDourado = douradoColor || brand.colors.dourado.hex;
  const effectiveVerdeMedio = verdeMedioColor || brand.colors.verdeMedio.hex;
  const effectiveMonoBlack = monoBlackHex || brand.colors.pretoComplementar.hex;

  const getFillColor = (isGold: boolean) => {
    if (colorMode === 'mono-white') return '#FFFFFF';
    if (colorMode === 'mono-black') return effectiveMonoBlack;
    return isGold ? effectiveDourado : effectiveVerdeMedio;
  };

  const pathData = variant === 'vertical' ? EXACT_VERTICAL_LOGO_PATH : EXACT_HORIZONTAL_LOGO_PATH;

  return (
    <svg 
      className={className}
      viewBox={pathData.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        {pathData.goldPaths.map((d, i) => (
          <path key={`gold-${i}`} d={d} fill={getFillColor(true)} />
        ))}
      </g>
      <g>
        {pathData.greenPaths.map((d, i) => (
          <path key={`green-${i}`} d={d} fill={getFillColor(false)} />
        ))}
      </g>
    </svg>
  );
};
