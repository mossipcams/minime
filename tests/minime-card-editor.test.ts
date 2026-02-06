import { describe, it, expect, beforeEach } from 'vitest';
import { MiniMeCardEditor } from '../src/minime-card-editor';

describe('MiniMeCardEditor', () => {
  it('can be constructed', () => {
    if (!customElements.get('minime-card-editor')) {
      customElements.define('minime-card-editor', MiniMeCardEditor);
    }
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    expect(editor).toBeInstanceOf(MiniMeCardEditor);
  });

  it('stores config via setConfig', () => {
    if (!customElements.get('minime-card-editor')) {
      customElements.define('minime-card-editor', MiniMeCardEditor);
    }
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    const config = { type: 'custom:minime-card', entity: 'sensor.room', name: 'Test' };
    editor.setConfig(config);
    expect((editor as any)._config).toEqual(config);
  });

  it('dispatches config-changed event', () => {
    if (!customElements.get('minime-card-editor')) {
      customElements.define('minime-card-editor', MiniMeCardEditor);
    }
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    const config = { type: 'custom:minime-card', entity: 'sensor.room' };
    editor.setConfig(config);

    let receivedConfig: any = null;
    editor.addEventListener('config-changed', ((ev: CustomEvent) => {
      receivedConfig = ev.detail.config;
    }) as EventListener);

    (editor as any)._dispatchConfigChanged({ ...config, name: 'New Name' });
    expect(receivedConfig).toBeDefined();
    expect(receivedConfig.name).toBe('New Name');
  });

  it('renders dog entity picker when rendered', async () => {
    if (!customElements.get('minime-card-editor')) {
      customElements.define('minime-card-editor', MiniMeCardEditor);
    }
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    editor.setConfig({ type: 'custom:minime-card', entity: 'sensor.room' });
    editor.hass = { states: {}, themes: { darkMode: false }, areas: {} } as any;
    document.body.appendChild(editor);
    await (editor as any).updateComplete;
    const shadow = editor.shadowRoot!;
    const pickers = shadow.querySelectorAll('ha-entity-picker');
    expect(pickers.length).toBe(2);
    document.body.removeChild(editor);
  });
});
