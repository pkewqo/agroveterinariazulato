import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { recolorNewLogo } from '../utils/logoColorFilter';

export interface BrandLogoProps {
  variant?: 'normal' | 'symbol';
  colorMode?: 'color' | 'mono-black' | 'mono-white';
  douradoColor?: string;
  verdeMedioColor?: string;
  monoBlackHex?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customHeight?: number;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'normal',
  colorMode = 'color',
  douradoColor,
  verdeMedioColor,
  monoBlackHex,
  className = '',
  size = 'md',
  customHeight,
  alt = 'Logo Zulato',
}) => {
  const { brand } = useBrand();
  const [renderedSrc, setRenderedSrc] = useState<string>('');

  const srcToUse = brand.logos.transparentUrl;

  const effectiveDourado = douradoColor || brand.colors.dourado.hex;
  const effectiveVerdeMedio = verdeMedioColor || brand.colors.verdeMedio.hex;
  const effectiveMonoBlack = monoBlackHex || brand.colors.pretoComplementar.hex;

  useEffect(() => {
    let isMounted = true;

    recolorNewLogo(srcToUse, {
      douradoColor: effectiveDourado,
      verdeMedioColor: effectiveVerdeMedio,
      monoBlackHex: effectiveMonoBlack,
      mode: colorMode,
      symbolOnly: variant === 'symbol',
    }).then(resultDataUrl => {
      if (isMounted) {
        setRenderedSrc(resultDataUrl);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [srcToUse, effectiveDourado, effectiveVerdeMedio, effectiveMonoBlack, colorMode, variant]);

  // Size styling
  const sizeClasses = customHeight
    ? ''
    : size === 'sm'
      ? 'max-h-8 max-w-[120px]'
      : size === 'md'
        ? variant === 'symbol' ? 'max-h-20 max-w-[120px]' : 'max-h-24 max-w-[170px]'
        : size === 'lg'
          ? variant === 'symbol' ? 'max-h-28 max-w-[160px]' : 'max-h-36 max-w-[240px]'
          : variant === 'symbol' ? 'max-h-36 max-w-[200px]' : 'max-h-48 max-w-[320px]';

  return (
    <div 
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={customHeight ? { height: `${customHeight}px` } : undefined}
    >
      <img
        src={renderedSrc || srcToUse}
        alt={alt}
        className={`w-auto h-auto object-contain transition-opacity duration-150 ${sizeClasses}`}
        style={customHeight ? { maxHeight: `${customHeight}px` } : undefined}
      />
    </div>
  );
};
