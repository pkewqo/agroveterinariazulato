import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { recolorNewLogo } from '../utils/logoColorFilter';
import { SvgLogo } from './SvgLogo';

export interface BrandLogoProps {
  variant?: 'horizontal' | 'vertical' | 'normal' | 'symbol';
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
  variant = 'horizontal',
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

  const normalizedVariant = variant === 'normal' ? 'vertical' : variant;

  const srcToUse = normalizedVariant === 'horizontal'
    ? brand.logos.horizontalUrl
    : brand.logos.verticalUrl;

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
      symbolOnly: normalizedVariant === 'symbol',
    }).then(resultDataUrl => {
      if (isMounted) {
        setRenderedSrc(resultDataUrl);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [srcToUse, effectiveDourado, effectiveVerdeMedio, effectiveMonoBlack, colorMode, normalizedVariant]);

  // Size styling
  const sizeClasses = customHeight
    ? ''
    : size === 'sm'
      ? normalizedVariant === 'horizontal' ? 'max-h-7 max-w-[150px]' : 'max-h-8 max-w-[120px]'
      : size === 'md'
        ? normalizedVariant === 'horizontal' ? 'max-h-12 max-w-[240px]' : normalizedVariant === 'symbol' ? 'max-h-20 max-w-[120px]' : 'max-h-24 max-w-[170px]'
        : size === 'lg'
          ? normalizedVariant === 'horizontal' ? 'max-h-20 max-w-[360px]' : normalizedVariant === 'symbol' ? 'max-h-28 max-w-[160px]' : 'max-h-36 max-w-[240px]'
          : normalizedVariant === 'horizontal' ? 'max-h-28 max-w-[480px]' : normalizedVariant === 'symbol' ? 'max-h-36 max-w-[200px]' : 'max-h-48 max-w-[320px]';

  if (normalizedVariant === 'horizontal') {
    return (
      <div 
        className={`inline-flex items-center justify-center select-none ${className}`}
        style={customHeight ? { height: `${customHeight}px` } : undefined}
      >
        <SvgLogo 
          colorMode={colorMode}
          douradoColor={effectiveDourado}
          verdeMedioColor={effectiveVerdeMedio}
          monoBlackHex={effectiveMonoBlack}
          className={`w-auto h-auto max-w-full object-contain transition-opacity duration-150 ${sizeClasses}`}
        />
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={customHeight ? { height: `${customHeight}px` } : undefined}
    >
      <img
        src={renderedSrc || srcToUse}
        alt={alt}
        className={`w-auto h-auto max-w-full object-contain transition-opacity duration-150 ${sizeClasses}`}
        style={customHeight ? { maxHeight: `${customHeight}px` } : undefined}
      />
    </div>
  );
};
