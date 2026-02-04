// MiniMe Card - Entry Point
import { MiniMeCard } from './minime-card';
import { MiniMeCardEditor } from './minime-card-editor';
import { AnimatedPresenceCard } from './animated-presence-card';
import { AnimatedPresenceCardEditor } from './animated-presence-card-editor';

const CARD_VERSION = '0.2.0';

console.info(
  `%c MINIME-CARD %c v${CARD_VERSION} `,
  'color: white; background: #555; font-weight: bold;',
  'color: white; background: #007acc;'
);

// Register custom elements
customElements.define('minime-card', MiniMeCard);
customElements.define('minime-card-editor', MiniMeCardEditor);
customElements.define('animated-presence-card', AnimatedPresenceCard);
customElements.define('animated-presence-card-editor', AnimatedPresenceCardEditor);

// Register with Home Assistant card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'minime-card',
  name: 'MiniMe Card',
  description: 'Animated avatar showing your room presence',
});
(window as any).customCards.push({
  type: 'animated-presence-card',
  name: 'Animated Presence Card',
  description: 'Lottie-animated presence card with lofi room backgrounds',
});
