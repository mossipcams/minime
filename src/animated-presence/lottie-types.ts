export interface LottieAnimationItem {
  play(): void;
  stop(): void;
  destroy(): void;
  setSpeed(speed: number): void;
  goToAndPlay(frame: number, isFrame?: boolean): void;
  goToAndStop(frame: number, isFrame?: boolean): void;
}

export interface LottiePlayer {
  loadAnimation(params: {
    container: HTMLElement;
    renderer: 'svg' | 'canvas' | 'html';
    loop: boolean;
    autoplay: boolean;
    path?: string;
    animationData?: unknown;
  }): LottieAnimationItem;
}

declare global {
  interface Window {
    lottie?: LottiePlayer;
  }
}
