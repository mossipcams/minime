// MiniMe Card - Entry Point
import { MiniMeCard } from './minime-card';
import { MiniMeCardEditor } from './minime-card-editor';

const CARD_VERSION = '0.1.0';

console.info(
  `%c MINIME-CARD %c v${CARD_VERSION} `,
  'color: white; background: #555; font-weight: bold;',
  'color: white; background: #007acc;'
);

// Register custom element
customElements.define('minime-card', MiniMeCard);
customElements.define('minime-card-editor', MiniMeCardEditor);

// Register with Home Assistant card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'minime-card',
  name: 'MiniMe Card',
  description: 'Animated avatar showing your room presence',
});
