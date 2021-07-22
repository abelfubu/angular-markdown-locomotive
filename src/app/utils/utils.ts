// const imagesLoaded = require('imagesloaded');

// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number): number =>
  ((x - a) * (d - c)) / (b - a) + c;

// Linear interpolation
const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

const calcWinsize = (window: Window): { width: number; height: number } => {
  return { width: window.innerWidth, height: window.innerHeight };
};

// Gets the mouse position
const getMousePos = (e: MouseEvent): { x: number; y: number } => {
  let posx = 0;
  let posy = 0;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else {
    posx = e.clientX + document.body.scrollLeft;
    posy = e.clientY + document.body.scrollTop;
  }

  return { x: posx, y: posy };
};

const randomFloat = (min: number, max: number): number =>
  parseFloat(Math.min(min + Math.random() * (max - min), max).toFixed(2));

// // Preload images
// const preloadImages = (selector) => {
//     return new Promise((resolve, _) => {
//         imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
//     });
// };

export { map, lerp, calcWinsize, getMousePos, randomFloat };
