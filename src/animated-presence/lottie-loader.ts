import type { LottiePlayer } from './lottie-types';

const CDN_URL = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';

let loadPromise: Promise<LottiePlayer> | null = null;

export function loadLottie(): Promise<LottiePlayer> {
  if (window.lottie) {
    return Promise.resolve(window.lottie);
  }

  if (loadPromise) {
    return loadPromise;
  }

  loadPromise = new Promise<LottiePlayer>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = CDN_URL;
    script.onload = () => {
      if (window.lottie) {
        resolve(window.lottie);
      } else {
        loadPromise = null;
        reject(new Error('lottie-web loaded but window.lottie not found'));
      }
    };
    script.onerror = () => {
      loadPromise = null;
      reject(new Error('Failed to load lottie-web from CDN'));
    };
    document.head.appendChild(script);
  });

  return loadPromise;
}

export function resetLottieLoader(): void {
  loadPromise = null;
}
