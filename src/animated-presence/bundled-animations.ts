/**
 * Bundled Lottie animation data — embedded directly in the JS bundle
 * so no separate file copying is required for Home Assistant deployment.
 */
import studying from '../../animations/studying.json';
import cooking from '../../animations/cooking.json';
import sleeping from '../../animations/sleeping.json';
import idle from '../../animations/idle.json';
import walking from '../../animations/walking.json';

export const bundledAnimations: Record<string, unknown> = {
  studying,
  cooking,
  sleeping,
  idle,
  walking,
};
