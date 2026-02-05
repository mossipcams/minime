// Type definitions for MiniMe Card

export interface MiniMeConfig {
  type: string;
  entity: string;
  name?: string;
  transition_duration?: number;
}

export interface HassEntity {
  state: string;
  attributes: Record<string, unknown>;
  entity_id: string;
  last_changed: string;
  last_updated: string;
}

export interface HassArea {
  area_id: string;
  name: string;
  picture?: string | null;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  themes: {
    darkMode: boolean;
  };
  areas: Record<string, HassArea>;
}
