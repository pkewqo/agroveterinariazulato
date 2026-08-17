import { hexToRgb } from './colorMath';

interface RecolorOptions {
  symbolColor: string; // HEX
  textColor: string;   // HEX
  mode: 'color-light' | 'color-dark' | 'mono-black' | 'mono-white';
  symbolOnly?: boolean;
}

const imageCache = new Map<string, HTMLImageElement>();
const canvasCache = new Map<string, string>();

function loadImage(src: string): Promise<HTMLImageElement> {
  if (imageCache.has(src)) {
    return Promise.resolve(imageCache.get(src)!);
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };
    img.onerror = reject;
    img.src = src;
  });
}

export async function recolorLogo(src: string, options: RecolorOptions): Promise<string> {
  const cacheKey = `${src}_${options.symbolColor}_${options.textColor}_${options.mode}_${options.symbolOnly}`;
  if (canvasCache.has(cacheKey)) {
    return canvasCache.get(cacheKey)!;
  }

  try {
    const img = await loadImage(src);
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return src;

    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    const symRgb = hexToRgb(options.symbolColor);
    const textRgb = options.mode === 'color-dark' 
      ? { r: 255, g: 255, b: 255 } 
      : hexToRgb(options.textColor);

    let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
    let hasOpaque = false;

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a < 5) continue; // transparent pixel

      const pxIndex = i / 4;
      const x = pxIndex % canvas.width;
      const y = Math.floor(pxIndex / canvas.width);

      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (options.mode === 'mono-black') {
        data[i] = 0;
        data[i + 1] = 0;
        data[i + 2] = 0;
      } else if (options.mode === 'mono-white') {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      } else {
        // Green symbol detection (distinct green channel)
        const isGreenSymbol = (g > r + 8 && g > b + 8) || (g > 60 && r < 85 && b < 75);

        if (isGreenSymbol) {
          data[i] = symRgb.r;
          data[i + 1] = symRgb.g;
          data[i + 2] = symRgb.b;
        } else {
          if (options.symbolOnly) {
            data[i + 3] = 0; // hide text
            continue;
          } else {
            data[i] = textRgb.r;
            data[i + 1] = textRgb.g;
            data[i + 2] = textRgb.b;
          }
        }
      }

      if (data[i + 3] > 10) {
        hasOpaque = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }

    ctx.putImageData(imgData, 0, 0);

    // If symbolOnly or autocropping bounds found, crop to fit tightly and center
    if (options.symbolOnly && hasOpaque && maxX > minX && maxY > minY) {
      const cropWidth = maxX - minX + 1;
      const cropHeight = maxY - minY + 1;
      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;
      const cropCtx = croppedCanvas.getContext('2d');
      if (cropCtx) {
        cropCtx.drawImage(canvas, minX, minY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
        const resultDataUrl = croppedCanvas.toDataURL('image/png');
        canvasCache.set(cacheKey, resultDataUrl);
        return resultDataUrl;
      }
    }

    const resultDataUrl = canvas.toDataURL('image/png');
    canvasCache.set(cacheKey, resultDataUrl);
    return resultDataUrl;
  } catch (err) {
    console.error('Error recoloring logo:', err);
    return src;
  }
}
