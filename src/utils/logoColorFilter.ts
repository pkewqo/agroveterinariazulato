import { hexToRgb } from './colorMath';

interface RecolorOptions {
  douradoColor: string;          // HEX for Z, Bull and Text
  verdeMedioColor: string;       // HEX for AV monogram
  mode: 'color' | 'mono-black' | 'mono-white';
  monoBlackHex?: string;         // optional custom black (defaults to #2B2B2B or #000000)
  symbolOnly?: boolean;
}

const imageCache = new Map<string, HTMLImageElement>();
const canvasCache = new Map<string, string>();

function loadImage(src: string): Promise<HTMLImageElement> {
  if (imageCache.has(src)) {
    const cached = imageCache.get(src)!;
    if (cached.complete && cached.naturalWidth > 0) {
      return Promise.resolve(cached);
    }
  }
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (src.startsWith('http://') || src.startsWith('https://')) {
      img.crossOrigin = 'anonymous';
    }
    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };
    img.onerror = (err) => {
      console.warn('Could not load image for canvas recolor:', src, err);
      reject(err);
    };
    img.src = src;
  });
}

export async function recolorNewLogo(src: string, options: RecolorOptions): Promise<string> {
  const cacheKey = `${src}_${options.douradoColor}_${options.verdeMedioColor}_${options.mode}_${options.monoBlackHex}_${options.symbolOnly}`;
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

    const goldRgb = hexToRgb(options.douradoColor);
    const greenRgb = hexToRgb(options.verdeMedioColor);
    const blackRgb = options.monoBlackHex ? hexToRgb(options.monoBlackHex) : { r: 43, g: 43, b: 43 };

    let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
    let hasOpaque = false;

    // The text in the stacked vertical logo starts around the bottom 40% of the canvas
    const textStartY = Math.floor(canvas.height * 0.58);

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a < 8) continue; // transparent pixel

      const pxIndex = i / 4;
      const x = pxIndex % canvas.width;
      const y = Math.floor(pxIndex / canvas.width);

      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (options.symbolOnly && y >= textStartY) {
        data[i + 3] = 0; // hide text in symbol only view
        continue;
      }

      if (options.mode === 'mono-black') {
        data[i] = blackRgb.r;
        data[i + 1] = blackRgb.g;
        data[i + 2] = blackRgb.b;
      } else if (options.mode === 'mono-white') {
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      } else {
        // Color Mode:
        // Detect if pixel belongs to the Green "AV" monogram
        // In the new logo, AV has prominent green channel (g > r + 5 && g > b + 5) or is clearly green
        const isGreenAV = (g > r + 6 && g > b + 6) || (g > 60 && r < 120 && b < 80);

        if (isGreenAV) {
          data[i] = greenRgb.r;
          data[i + 1] = greenRgb.g;
          data[i + 2] = greenRgb.b;
        } else {
          // Gold / Ocre part ("Z", Bull head silhouette, "AGROVETERINÁRIA ZULATO" text)
          data[i] = goldRgb.r;
          data[i + 1] = goldRgb.g;
          data[i + 2] = goldRgb.b;
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

    // If symbolOnly, crop tightly to symbol bounds
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
    console.warn('Fallback to original src for logo:', err);
    return src;
  }
}
