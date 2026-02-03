import { describe, it, expect, beforeAll } from 'vitest';
import { MiniMeCardEditor } from '../src/minime-card-editor';
import type { MiniMeConfig } from '../src/types';

// Mock HomeAssistant for testing
function mockHass(): any {
  return {
    states: {},
    themes: { darkMode: false },
    areas: {},
  };
}

describe('MiniMeCardEditor', () => {
  beforeAll(() => {
    if (!customElements.get('minime-card-editor')) {
      customElements.define('minime-card-editor', MiniMeCardEditor);
    }
  });

  it('stores config when setConfig called', async () => {
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    const config: MiniMeConfig = {
      type: 'minime-card',
      entity: 'device_tracker.test',
      name: 'Test Card',
    };

    editor.setConfig(config);

    // Access private property for testing
    expect((editor as any)._config).toEqual(config);
  });

  it('accepts config with areas', async () => {
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    const config: MiniMeConfig = {
      type: 'minime-card',
      entity: 'device_tracker.test',
      name: 'Test Card',
      areas: ['office', 'kitchen', 'living_room'],
    };

    editor.setConfig(config);

    expect((editor as any)._config.areas).toEqual(['office', 'kitchen', 'living_room']);
  });

  it('dispatches config-changed event on entity change', async () => {
    const editor = document.createElement('minime-card-editor') as MiniMeCardEditor;
    const config: MiniMeConfig = {
      type: 'minime-card',
      entity: 'device_tracker.test',
      name: 'Test Card',
    };

    editor.setConfig(config);
    editor.hass = mockHass();
    document.body.appendChild(editor);

    // Listen for config-changed event
    let eventFired = false;
    let newConfig: MiniMeConfig | undefined;

    editor.addEventListener('config-changed', ((event: CustomEvent) => {
      eventFired = true;
      newConfig = event.detail.config;
    }) as EventListener);

    // Simulate value change
    const mockEvent = {
      target: {
        configValue: 'entity',
        value: 'device_tracker.new_device',
      },
    } as any;

    (editor as any)._valueChanged(mockEvent);

    expect(eventFired).toBe(true);
    expect(newConfig?.entity).toBe('device_tracker.new_device');

    document.body.removeChild(editor);
  });
});
