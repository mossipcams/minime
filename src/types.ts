// Type definitions for MiniMe Card

export interface MiniMeConfig {
  type: string;
  entity: string;
  name?: string;
}

export interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
  entity_id: string;
  last_changed: string;
  last_updated: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  themes: {
    darkMode: boolean;
  };
}
