const fs = require('fs');
const { PNG } = require('pngjs');

const src = PNG.sync.read(fs.readFileSync('public/assets/new-logo-horizontal.png'));
const scale = 2;
const w = src.width * scale;
const h = src.height * scale;

// 1. Create binary alpha mask
const alphaGrid = new Uint8Array(w * h);
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const srcX = Math.min(src.width - 1, Math.floor(x / scale));
    const srcY = Math.min(src.height - 1, Math.floor(y / scale));
    const a = src.data[(srcY * src.width + srcX) * 4 + 3];
    alphaGrid[y * w + x] = a > 50 ? 1 : 0;
  }
}

// 2. Marching Squares algorithm to extract exact polygon isolines
// Cell values: 0..15
const lines = []; // segments: {x1, y1, x2, y2}

for (let y = 0; y < h - 1; y++) {
  for (let x = 0; x < w - 1; x++) {
    const tl = alphaGrid[y * w + x];
    const tr = alphaGrid[y * w + x + 1];
    const br = alphaGrid[(y + 1) * w + x + 1];
    const bl = alphaGrid[(y + 1) * w + x];
    const cell = (tl << 3) | (tr << 2) | (br << 1) | bl;

    const top = { x: x + 0.5, y: y };
    const right = { x: x + 1, y: y + 0.5 };
    const bottom = { x: x + 0.5, y: y + 1 };
    const left = { x: x, y: y + 0.5 };

    switch (cell) {
      case 1: case 14: lines.push([left, bottom]); break;
      case 2: case 13: lines.push([bottom, right]); break;
      case 3: case 12: lines.push([left, right]); break;
      case 4: case 11: lines.push([top, right]); break;
      case 5: lines.push([left, top]); lines.push([bottom, right]); break;
      case 6: case 9: lines.push([top, bottom]); break;
      case 7: case 8: lines.push([left, top]); break;
      case 10: lines.push([top, right]); lines.push([left, bottom]); break;
    }
  }
}

// Chain segments into continuous closed polylines
const adj = new Map();
const ptKey = (p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`;

lines.forEach(([p1, p2]) => {
  const k1 = ptKey(p1);
  const k2 = ptKey(p2);
  if (!adj.has(k1)) adj.set(k1, []);
  if (!adj.has(k2)) adj.set(k2, []);
  adj.get(k1).push(p2);
  adj.get(k2).push(p1);
});

const visited = new Set();
const segKey = (p1, p2) => {
  const k1 = ptKey(p1), k2 = ptKey(p2);
  return k1 < k2 ? `${k1}-${k2}` : `${k2}-${k1}`;
};

const loops = [];
for (const [p1, p2] of lines) {
  const sk = segKey(p1, p2);
  if (visited.has(sk)) continue;

  const loop = [p1];
  let curr = p2;
  visited.add(sk);

  let iterations = 0;
  while (iterations < 2000) {
    iterations++;
    loop.push(curr);
    if (ptKey(curr) === ptKey(loop[0])) break;

    const neighbors = adj.get(ptKey(curr)) || [];
    let next = null;
    for (const n of neighbors) {
      const nsk = segKey(curr, n);
      if (!visited.has(nsk)) {
        next = n;
        visited.add(nsk);
        break;
      }
    }
    if (!next) break;
    curr = next;
  }

  if (loop.length >= 4) {
    loops.push(loop);
  }
}

console.log(`Marching Squares produced ${loops.length} exact contours!`);

// Convert to SVG paths
const pathsData = loops.map(loop => {
  return loop.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(p.x / scale).toFixed(1)} ${(p.y / scale).toFixed(1)}`).join(' ') + ' Z';
});

const combinedPath = pathsData.join(' ');

const tsOut = `export const EXACT_LOGO_PATH = {
  viewBox: '0 0 ${src.width} ${src.height}',
  width: ${src.width},
  height: ${src.height},
  combinedPath: ${JSON.stringify(combinedPath)},
  paths: ${JSON.stringify(pathsData)},
};
`;

fs.writeFileSync('src/data/exactLogoPath.ts', tsOut);
console.log('Saved src/data/exactLogoPath.ts with EXACT contours from logo image!');
