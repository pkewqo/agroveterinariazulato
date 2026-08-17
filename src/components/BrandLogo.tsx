import React, { useState, useEffect } from 'react';
import { useBrand } from '../context/BrandContext';
import { recolorLogo } from '../utils/logoColorFilter';

export interface BrandLogoProps {
  variant?: 'horizontal' | 'vertical' | 'symbol';
  colorMode?: 'color-light' | 'color-dark' | 'mono-black' | 'mono-white' | 'custom';
  symbolColor?: string;
  textColor?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customHeight?: number;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  colorMode = 'color-light',
  symbolColor,
  textColor,
  className = '',
  size = 'md',
  customHeight,
  alt = 'Logo Zulato',
}) => {
  const { brand } = useBrand();
  const [renderedSrc, setRenderedSrc] = useState<string>('');

  const srcToUse = variant === 'vertical' || variant === 'symbol'
    ? brand.logos.verticalUrl
    : brand.logos.horizontalUrl;

  const effectiveSymbolColor = symbolColor || brand.colors.primary.hex;
  const effectiveTextColor = textColor || brand.colors.secondary.hex;

  useEffect(() => {
    let isMounted = true;

    const modeToUse = colorMode === 'custom' ? 'color-light' : colorMode;
    const isSymbolOnly = variant === 'symbol';

    recolorLogo(srcToUse, {
      symbolColor: effectiveSymbolColor,
      textColor: effectiveTextColor,
      mode: modeToUse,
      symbolOnly: isSymbolOnly,
    }).then(resultDataUrl => {
      if (isMounted) {
        setRenderedSrc(resultDataUrl);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [srcToUse, effectiveSymbolColor, effectiveTextColor, colorMode, variant]);

  // Size styling
  const sizeClasses = customHeight
    ? ''
    : size === 'sm'
      ? 'max-h-7 max-w-[140px]'
      : size === 'md'
        ? variant === 'vertical' ? 'max-h-24 max-w-[160px]' : 'max-h-12 max-w-[240px]'
        : size === 'lg'
          ? variant === 'vertical' ? 'max-h-36 max-w-[220px]' : 'max-h-20 max-w-[340px]'
          : variant === 'vertical' ? 'max-h-48 max-w-[280px]' : 'max-h-28 max-w-[480px]';

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
