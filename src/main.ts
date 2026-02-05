// MiniMe Card - Entry Point
import { MiniMeCard } from './minime-card';
import { MiniMeCardEditor } from './minime-card-editor';

const CARD_VERSION = '0.2.0';

console.info(
  `%c MINIME-CARD %c v${CARD_VERSION} `,
  'color: white; background: #555; font-weight: bold;',
  'color: white; background: #007acc;'
);

// Register custom elements
customElements.define('minime-card', MiniMeCard);
customElements.define('minime-card-editor', MiniMeCardEditor);

// Register with Home Assistant card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'minime-card',
  name: 'MiniMe Card',
  description: 'Animated pixel art avatar showing your room presence',
});
