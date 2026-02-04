# MiniMe Card

A custom Home Assistant card that displays a pixel art avatar representing your location in your home, detected via Bermuda BLE tracking.

## Features

- 🎨 Pixel art room backgrounds (office, kitchen, living room, bedroom)
- 🚶 Animated avatar character showing your presence
- 🔄 Automatic room switching based on Bermuda BLE detection
- 📱 Responsive design (works on mobile and desktop)
- ⚙️ Visual configuration editor

## Installation

### HACS (Recommended)

1. Add this repository to HACS as a custom repository
2. Search for "MiniMe Card" in HACS
3. Install the card
4. Restart Home Assistant

### Manual Installation

1. Download `minime-card.js` from the latest release
2. Copy it to `config/www/` directory
3. Add the resource in Home Assistant:
   - Go to Settings → Dashboards → Resources
   - Add resource: `/local/minime-card.js`
   - Type: JavaScript Module

## Configuration

Add the card to your dashboard and configure:

- **Entity:** Your Bermuda BLE device_tracker entity
- **Card Name:** (optional) Custom name for the card
- **Rooms to Track:** Select which areas to display

### Example YAML

```yaml
type: custom:minime-card
entity: device_tracker.bermuda_phone
name: My Location
areas:
  - office
  - kitchen
  - living_room
  - bedroom
```

## Requirements

- Home Assistant 2025.1.0 or newer
- [Bermuda BLE integration](https://github.com/agittins/bermuda) installed and configured

## Development

Built with:
- TypeScript
- Lit (Web Components)
- Rollup (bundling)
- Vitest (testing)

## License

MIT

## Credits

Built with the GSD (Get Stuff Done) workflow.
