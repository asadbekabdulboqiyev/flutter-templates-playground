# CodeBase

> 200+ multi-language code templates with live preview, copy-paste ready code, and step-by-step instructions.

[![Flutter](https://img.shields.io/badge/Flutter-3.x-02569B?style=flat-square&logo=flutter)](https://flutter.dev)
[![Arduino](https://img.shields.io/badge/Arduino-1.x-00979D?style=flat-square&logo=arduino)](https://www.arduino.cc)
[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=flat-square&logo=python)](https://www.python.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=flat-square&logo=vuedotjs)](https://vuejs.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## Features

- **200+ Templates** — Flutter, Arduino, Python, JavaScript, React, Vue.js, Node.js, HTML/CSS
- **Multi-Language Support** — Code templates for 6+ programming languages
- **Live Preview** — Run HTML/CSS/JS/React/Vue code directly in browser
- **User Authentication** — Save favorites and sync across devices
- **Copy-Paste Ready** — One click to copy any template code
- **Step-by-Step Instructions** — Beginner-friendly guides for every template
- **Dark/Light Mode** — Toggle between themes
- **Keyboard Shortcuts** — Navigate faster with `Ctrl+K`, `Ctrl+C`, `Ctrl+S`
- **Export All** — Download all templates as JSON
- **Code Highlighting** — Syntax highlighted code for all languages

---

## Live Demo

**[Flutter Templates Playground](https://asadbekabdulboqiyev.github.io/flutter-templates-playground/)**

---

## Languages

| Language | Count | Description |
|----------|-------|-------------|
| Flutter | 180+ | Mobile app development with Dart |
| Arduino | 3+ | IoT and hardware programming |
| Python | 2+ | Scripts, APIs, data science |
| JavaScript | 1+ | Vanilla JS, DOM manipulation |
| React | 1+ | Component-based UI |
| Vue.js | 1+ | Progressive framework |
| HTML/CSS | — | Web templates (coming soon) |
| Node.js | — | Backend development (coming soon) |

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
Visit the [live demo](https://asadbekabdulboqiyev.github.io/codebase/) and copy any template.

### Option 2: Clone & Run
```bash
# Clone the repository
git clone https://github.com/asadbekabdulboqiyev/codebase.git
cd codebase

# Start local server (required for fetch() to work)
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Option 3: Use a Template
```bash
# For Flutter:
flutter create my_app && cd my_app
# Copy template code to lib/

# For Arduino:
# Open Arduino IDE, create new sketch, paste code

# For Python:
python template.py

# For JavaScript/React/Vue:
# Open index.html in browser or use live preview
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
codebase/
├── index.html          # Main HTML (semantic, accessible)
├── styles.css          # All CSS styles
├── app.js              # All JavaScript logic
├── templates.json      # 200+ template data
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
  "i": "🚀",
  "diff": "medium",
  "c": "flutter",
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

2. Supported languages:
   - `flutter` — Dart files (.dart)
   - `arduino` — Arduino sketches (.ino)
   - `python` — Python scripts (.py)
   - `javascript` — JavaScript files (.js)
   - `react` — React components (.jsx)
   - `vue` — Vue components (.vue)
   - `html-css` — HTML/CSS files (.html)

3. Take a simulator screenshot and save as `code_info/my-template.png`

4. Push to GitHub — the site auto-deploys!

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
  Made with ❤️ using Flutter, Arduino, Python, JavaScript & more
</p>
