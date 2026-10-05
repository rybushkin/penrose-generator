# Pattern Studio 0.3

The current homepage is [Pattern Studio](https://penrose.rybushk.in/).
An 18-second silent intro leads into the pattern editor.
The previous generator remains at [Original](https://penrose.rybushk.in/original.html).

Serve the repository root with `python3 -m http.server 8892 --bind 127.0.0.1`.
No build is needed for the included static website.
Player rebuild instructions are in `studio/README.md`; sources and locked dependencies are in `studio/intro/`.

GitHub Pages publishes `main` from `/`; keep `CNAME` unchanged.
Rollback: revert the release commit and verify that the previous homepage is restored.

---

## Original generator documentation

# 🎨 Penrose Tiling Generator

> **Interactive web application for generating and exploring Penrose tilings with ASCII terminal aesthetics**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)](https://rybushkin.github.io/penrose-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vue.js](https://img.shields.io/badge/Vue.js-2.x-4FC08D.svg)](https://vuejs.org/)
[![p5.js](https://img.shields.io/badge/p5.js-Creative%20Coding-ED225D.svg)](https://p5js.org/)

## 🌟 Features

- **Interactive Generation**: Create beautiful Penrose tilings in real-time
- **ASCII Terminal Style**: Retro-futuristic interface with green-on-black aesthetics
- **Customizable Parameters**: Adjust symmetry, pattern, rotation, zoom, and more
- **Color Schemes**: Dynamic color palettes with hue control
- **Export Functionality**: Save your creations as PNG images
- **Responsive Design**: Works on desktop and mobile devices
- **Educational Content**: Learn about quasiperiodic patterns and mathematics

## 🚀 Live Demo

**[Try it now!](https://rybushkin.github.io/penrose-generator)**

## 🎮 How to Use

### Basic Controls
- **Symmetry**: Change the number of rotational axes (3-19)
- **Pattern**: Adjust the phase offset of line families
- **Rotate**: Spin the pattern around its center
- **Radius**: Control the size of the generated area
- **Zoom**: Scale the visual representation
- **Pan**: Move the viewport horizontally
- **Disorder**: Add random variations to line placement

### Color Controls
- **Color Hue**: Set the base color of the pattern
- **Color Tiles**: Toggle between filled and outlined tiles
- **Show Stroke**: Enable/disable tile borders

### Interaction
- **Click tiles**: Select and highlight specific tiles
- **Click lines**: Select and highlight corresponding grid lines
- **Drag**: Select multiple tiles or lines
- **Share**: Copy the current pattern URL to clipboard
- **Save PNG**: Export the current pattern as an image

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Graphics**: p5.js for canvas rendering
- **Framework**: Vue.js 2 for reactive UI
- **Styling**: Custom CSS with CSS variables
- **Math**: Custom algorithms for Penrose tiling generation
- **Libraries**: 
  - [p5.js](https://p5js.org/) - Creative coding
  - [Vue.js](https://vuejs.org/) - Reactive framework
  - [HSLuv](https://www.hsluv.org/) - Perceptually uniform colors
  - [SeedRandom](https://github.com/davidbau/seedrandom) - Deterministic randomness

## 🧮 Mathematical Background

This project implements the **multigrid method** for generating quasiperiodic tilings, discovered by mathematician [Nicolaas Govert de Bruijn](https://en.wikipedia.org/wiki/Nicolaas_Govert_de_Bruijn).

### How It Works

1. **Grid Generation**: Create multiple sets of parallel lines at different angles
2. **Intersection Points**: Find where lines from different sets intersect
3. **Dual Construction**: Generate tiles by connecting intersection points
4. **Pattern Formation**: The resulting tiles form a quasiperiodic tiling

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rybushkin/penrose-generator.git
   cd penrose-generator
   ```

2. **Serve locally**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   Navigate to `http://localhost:8000`

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Original Inspiration**: Based on [Pattern Collider by Aatish Bhatia](https://github.com/aatishb/patterncollider)
- **Mathematical Foundation**: [Nicolaas Govert de Bruijn's multigrid method](https://en.wikipedia.org/wiki/Nicolaas_Govert_de_Bruijn)
- **Educational Content**: [Minute Physics video on Penrose tilings](https://youtu.be/-eqdj63nEr4)

---

**Made with ❤️ and mathematics**

*Explore the infinite beauty of quasiperiodic patterns*
