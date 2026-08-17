import React from 'react';
import { EXACT_LOGO_PATH } from '../data/exactLogoPath';
import { useBrand } from '../context/BrandContext';

export interface SvgLogoProps {
  colorMode?: 'color' | 'mono-black' | 'mono-white';
  className?: string;
  douradoColor?: string;
  verdeMedioColor?: string;
  monoBlackHex?: string;
}

export const SvgLogo: React.FC<SvgLogoProps> = ({ 
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

  return (
    <svg 
      className={className}
      viewBox={EXACT_LOGO_PATH.viewBox}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g>
        {EXACT_LOGO_PATH.goldPaths.map((d, i) => (
          <path key={`gold-${i}`} d={d} fill={getFillColor(true)} />
        ))}
      </g>
      <g>
        {EXACT_LOGO_PATH.greenPaths.map((d, i) => (
          <path key={`green-${i}`} d={d} fill={getFillColor(false)} />
        ))}
      </g>
    </svg>
  );
};
