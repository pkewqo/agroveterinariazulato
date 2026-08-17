const fs = require('fs');
const { PNG } = require('pngjs');
const potrace = require('potrace');

const src = PNG.sync.read(fs.readFileSync('public/assets/new-logo-horizontal.png'));
const w = src.width;
const h = src.height;

// 1. Green PNG (AV)
const greenPng = new PNG({ width: w, height: h });
// 2. Gold PNG (Z, Touro, Zulato, Agroveterinaria)
const goldPng = new PNG({ width: w, height: h });

for (let i = 0; i < src.data.length; i += 4) {
  const a = src.data[i + 3];
  const r = src.data[i];
  const g = src.data[i + 1];
  const b = src.data[i + 2];

  if (a < 30) {
    for (let c = 0; c < 3; c++) {
      greenPng.data[i + c] = 255;
      goldPng.data[i + c] = 255;
    }
    greenPng.data[i + 3] = 255;
    goldPng.data[i + 3] = 255;
    continue;
  }

  const isGreen = (g > r + 6 && g > b + 6) || (g > 60 && r < 120 && b < 80);

  if (isGreen) {
    greenPng.data[i] = 0;
    greenPng.data[i + 1] = 0;
    greenPng.data[i + 2] = 0;
    greenPng.data[i + 3] = 255;

    goldPng.data[i] = 255;
    goldPng.data[i + 1] = 255;
    goldPng.data[i + 2] = 255;
    goldPng.data[i + 3] = 255;
  } else {
    greenPng.data[i] = 255;
    greenPng.data[i + 1] = 255;
    greenPng.data[i + 2] = 255;
    greenPng.data[i + 3] = 255;

    goldPng.data[i] = 0;
    goldPng.data[i + 1] = 0;
    goldPng.data[i + 2] = 0;
    goldPng.data[i + 3] = 255;
  }
}

const greenBuf = PNG.sync.write(greenPng);
const goldBuf = PNG.sync.write(goldPng);

const params = {
  optCurve: true,
  turdSize: 2,
  alphaMax: 1.0,
  optTolerance: 0.2,
};

potrace.trace(greenBuf, params, (err, greenSvg) => {
  if (err) throw err;
  potrace.trace(goldBuf, params, (err2, goldSvg) => {
    if (err2) throw err2;

    const extractPath = (svg) => {
      const match = svg.match(/d="([^"]+)"/);
      return match ? match[1] : '';
    };

    const greenPath = extractPath(greenSvg);
    const goldPath = extractPath(goldSvg);

    console.log('Green Path length:', greenPath.length);
    console.log('Gold Path length:', goldPath.length);

    const tsContent = `export const LOGO_SVG_PATHS = {
  viewBox: '0 0 ${w} ${h}',
  width: ${w},
  height: ${h},
  greenAvPath: ${JSON.stringify(greenPath)},
  goldZulatoPath: ${JSON.stringify(goldPath)},
};
`;

    fs.writeFileSync('src/data/logoSvgPaths.ts', tsContent);
    console.log('Successfully saved src/data/logoSvgPaths.ts!');
  });
});
