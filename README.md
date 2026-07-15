# Flutter Templates Playground

> 180+ premium Flutter templates with copy-paste ready code and step-by-step instructions.

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=flat-square&logo=flutter)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.x-0175C2?style=flat-square&logo=dart)](https://dart.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## Features

- **180+ Templates** — Auth, Navigation, State Management, API, Animations, UI Widgets, and more
- **Copy-Paste Ready** — One click to copy any template code
- **Step-by-Step Instructions** — Beginner-friendly guides for every template
- **Dark/Light Mode** — Toggle between themes
- **Keyboard Shortcuts** — Navigate faster with `Ctrl+K`, `Ctrl+C`, `Ctrl+S`
- **Export All** — Download all templates as JSON
- **Code Highlighting** — Syntax highlighted Flutter code

---

## Live Demo

**[Flutter Templates Playground](https://asadbekabdulboqiyev.github.io/flutter-templates-playground/)**

---

## Categories

| Category | Count | Description |
|----------|-------|-------------|
| Starter | 6 | Basic project setup and boilerplate |
| Pages | 27 | Home, Profile, Settings, and more |
| Auth | 6 | Login, Register, Google Auth, OTP |
| Navigation | 6 | Bottom Nav, Drawer, Tab Bar, Router |
| State Management | 8 | Provider, BLoC, Riverpod, GetX |
| API & Backend | 11 | Dio, REST, GraphQL, WebSocket, Firebase |
| Animations | 33 | Implicit, Explicit, Custom Painter |
| UI Widgets | 73 | Cards, Forms, Lists, Tables |
| Advanced | 10 | Clean Architecture, Platform Channels |

---

## Famous App Clones

| App | Preview | Files |
|-----|---------|-------|
| Instagram Clone | Feed, Stories, Profile, Search, Reels | 5 files |
| WhatsApp Clone | Chats, Calls, Status | 3 files |
| Spotify Clone | Home, Search, Library, Player | 5 files |
| Telegram Clone | Chats, Messages | 2 files |
| Netflix Clone | Home, Search, Profile | 4 files |
| TikTok Clone | Feed, Discover, Profile | 4 files |
| Google-Style Login | Login, Register, Auth Service | 3 files |

---

## Quick Start

### Option 1: Use Online
Visit the [live demo](https://asadbekabdulboqiyev.github.io/flutter-templates-playground/) and copy any template.

### Option 2: Clone & Run
```bash
# Clone the repository
git clone https://github.com/asadbekabdulboqiyev/flutter-templates-playground.git
cd flutter-templates-playground

# Start local server (required for fetch() to work)
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Option 3: Use a Template
```bash
# Create a new Flutter project
flutter create my_app
cd my_app

# Copy a template (e.g., Instagram Clone)
# Then run:
flutter run
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Search templates |
| `Ctrl+C` | Copy code |
| `Ctrl+S` | Download file |
| `Ctrl+D` | Toggle theme |
| `Ctrl+E` | Export all templates |
| `→` / `←` | Navigate between files |
| `?` | Show shortcuts |
| `Esc` | Close modal |

---

## Project Structure

```
flutter-templates-playground/
├── index.html          # Main HTML (semantic, accessible)
├── styles.css          # All CSS styles
├── app.js              # All JavaScript logic
├── templates.json      # 180+ template data
├── code_info/          # Preview screenshots
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions
└── README.md
```

---

## How to Add Your Own Template

1. Add template data to `templates.json`:
```json
{
  "id": "my-template",
  "n": "My Template",
  "i": "my-icon",
  "diff": "medium",
  "c": "ui",
  "t": ["widget", "custom"],
  "d": "Description of the template",
  "icon": "palette",
  "instructions": "Step-by-step guide...",
  "preview": "code_info/my-template.png",
  "f": [
    {
      "n": "main.dart",
      "p": "lib/main.dart",
      "c": "import 'package:flutter/material.dart';\n..."
    }
  ]
}
```

2. Take a simulator screenshot and save as `code_info/my-template.png`

3. Push to GitHub — the site auto-deploys!

---

## Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-template`)
3. Add your template to `templates.json`
4. Take a simulator screenshot
5. Commit your changes (`git commit -m 'Add amazing template'`)
6. Push to the branch (`git push origin feature/amazing-template`)
7. Open a Pull Request

---

## Author

**Asadbek Abdulboqiyev**
- Telegram: [@tmeAsadbek](https://t.me/tmeAsadbek)
- GitHub: [@asadbekabdulboqiyev](https://github.com/asadbekabdulboqiyev)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ using Flutter & Dart
</p>
