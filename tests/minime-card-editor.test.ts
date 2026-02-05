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
});
