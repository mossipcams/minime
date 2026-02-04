import { describe, it, expect, beforeEach } from 'vitest';
import { AnimatedPresenceCardEditor } from '../src/animated-presence-card-editor';

describe('AnimatedPresenceCardEditor', () => {
  it('can be constructed', () => {
    if (!customElements.get('animated-presence-card-editor')) {
      customElements.define('animated-presence-card-editor', AnimatedPresenceCardEditor);
    }
    const editor = document.createElement('animated-presence-card-editor') as AnimatedPresenceCardEditor;
    expect(editor).toBeInstanceOf(AnimatedPresenceCardEditor);
  });

  it('stores config via setConfig', () => {
    if (!customElements.get('animated-presence-card-editor')) {
      customElements.define('animated-presence-card-editor', AnimatedPresenceCardEditor);
    }
    const editor = document.createElement('animated-presence-card-editor') as AnimatedPresenceCardEditor;
    const config = { type: 'custom:animated-presence-card', entity: 'sensor.room', name: 'Test' };
    editor.setConfig(config);
    expect((editor as any)._config).toEqual(config);
  });

  it('dispatches config-changed event', () => {
    if (!customElements.get('animated-presence-card-editor')) {
      customElements.define('animated-presence-card-editor', AnimatedPresenceCardEditor);
    }
    const editor = document.createElement('animated-presence-card-editor') as AnimatedPresenceCardEditor;
    const config = { type: 'custom:animated-presence-card', entity: 'sensor.room' };
    editor.setConfig(config);

    let receivedConfig: any = null;
    editor.addEventListener('config-changed', ((ev: CustomEvent) => {
      receivedConfig = ev.detail.config;
    }) as EventListener);

    (editor as any)._dispatchConfigChanged({ ...config, name: 'New Name' });
    expect(receivedConfig).toBeDefined();
    expect(receivedConfig.name).toBe('New Name');
  });
});
