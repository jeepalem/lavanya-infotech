# Lavanya Infotech Limited - Official Website

![Lavanya Infotech Limited](images/LavanyaInfotechLogo.png)

**Professional Test Automation & RPA Consulting Services**

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fwww.lavanyainfotechltd.com)](https://www.lavanyainfotechltd.com)
[![License](https://img.shields.io/badge/license-Proprietary-red.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

Lavanya Infotech Limited is a professional consulting firm specializing in Test Automation and Robotic Process Automation (RPA). This repository contains the official company website, showcasing our services, case studies, and expertise in automation technologies.

**Live Website:** [www.lavanyainfotechltd.com](https://www.lavanyainfotechltd.com)

### Services Offered

- **Test Automation:** Comprehensive automated testing solutions (Playwright, Selenium, API Testing)
- **RPA Implementation:** Intelligent automation (Automation Anywhere, Blue Prism)
- **Process Optimization:** Strategic consulting and automation feasibility studies

---

## ✨ Features

### Professional Design
- ✅ Modern, responsive design optimized for all devices
- ✅ Mobile-first approach with hamburger navigation
- ✅ Smooth scrolling and elegant animations
- ✅ Professional color scheme with gradient accents

### Technical Excellence
- ✅ Semantic HTML5 markup
- ✅ CSS Custom Properties (CSS Variables) for easy theming
- ✅ Vanilla JavaScript (no framework dependencies)
- ✅ Progressive Web App (PWA) ready with manifest.json
- ✅ Optimized performance and load times

### SEO & Discoverability
- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ Schema.org structured data (JSON-LD)
- ✅ XML sitemap and robots.txt
- ✅ Semantic HTML for better search engine understanding
- ✅ Geographic meta tags for local SEO

### Accessibility (WCAG 2.1)
- ✅ ARIA labels and roles
- ✅ Skip navigation link
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Semantic HTML structure

### User Experience
- ✅ Contact form with real-time validation
- ✅ Professional thank-you page
- ✅ Custom 404 error page
- ✅ Privacy policy page
- ✅ Loading states and error handling

---

## 📁 Project Structure

```
lavanya-infotech/
├── assets/
│   └── icons/              # Favicon files and app icons
│       └── README-FAVICONS.md
├── css/
│   └── styles.css          # Main stylesheet with CSS variables
├── images/
│   └── LavanyaInfotechLogo.png
├── js/
│   └── main.js             # Main JavaScript file
├── index.html              # Homepage
├── thank-you.html          # Form submission success page
├── privacy-policy.html     # Privacy policy
├── 404.html                # Custom 404 error page
├── robots.txt              # Search engine directives
├── sitemap.xml             # XML sitemap for SEO
├── manifest.json           # PWA manifest
├── CNAME                   # Custom domain for GitHub Pages
├── package.json            # Project metadata and scripts
├── .gitignore              # Git ignore rules
├── .editorconfig           # Code formatting rules
├── LICENSE                 # Copyright and license
├── README.md               # This file
└── DEPLOYMENT.md           # Deployment instructions
```

---

## 🛠 Technologies Used

### Frontend
- **HTML5:** Semantic markup, accessibility features
- **CSS3:** Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+):** Modern vanilla JavaScript

### Tools & Services
- **Formspree:** Contact form backend
- **GitHub Pages:** Website hosting
- **Git:** Version control

### Development Tools (Optional)
- **http-server:** Local development server
- **Prettier:** Code formatting
- **ESLint:** JavaScript linting
- **Stylelint:** CSS linting

---

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, or Edge)
- Text editor (VS Code, Sublime Text, etc.) - for development
- Git (for version control)
- Node.js (optional - for local development server)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/lavanya-infotech.git
   cd lavanya-infotech
   ```

2. **Generate Favicons:**
   - Read instructions in `assets/icons/README-FAVICONS.md`
   - Use [favicon.io](https://favicon.io) or similar tool
   - Place generated files in `assets/icons/`
   - Move `favicon.ico` to root directory

3. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (see Development section)

---

## 💻 Development

### Local Development Server

**Option 1: Using npx (No installation required)**
```bash
npx http-server -p 8080 -o
```

**Option 2: Using npm scripts**
```bash
npm start
```

The website will open automatically at `http://localhost:8080`

### Available npm Scripts

```bash
# Start local development server
npm start

# Validate all files
npm run validate:all

# Format all files
npm run format:all

# Fix linting issues
npm run lint:fix

# Test for broken links
npm run test:links
```

### Making Changes

1. **HTML Changes:** Edit `index.html`, `thank-you.html`, `privacy-policy.html`, or `404.html`
2. **CSS Changes:** Edit `css/styles.css`
3. **JavaScript Changes:** Edit `js/main.js`
4. **Test locally** before committing
5. **Commit changes** with descriptive messages

---

## 🌐 Deployment

### GitHub Pages (Current Hosting)

The website is automatically deployed to GitHub Pages from the `main` branch.

**Deployment Steps:**
1. Commit and push changes to `main` branch
2. GitHub Pages automatically rebuilds and deploys
3. Changes live within 1-2 minutes

**Custom Domain Setup:**
- Domain: `www.lavanyainfotechltd.com`
- DNS configured via CNAME file
- HTTPS enabled automatically

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 🎯 SEO & Performance

### SEO Optimizations

- ✅ **Meta Tags:** Complete Open Graph and Twitter Card tags
- ✅ **Structured Data:** Schema.org JSON-LD for rich snippets
- ✅ **Sitemap:** XML sitemap submitted to search engines
- ✅ **Robots.txt:** Proper crawling directives
- ✅ **Semantic HTML:** Proper heading hierarchy
- ✅ **Mobile-Friendly:** Responsive design, mobile-first approach

### Performance Metrics (Target)

- **Lighthouse Score:** 90+ (all categories)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s

---

## ♿ Accessibility

### WCAG 2.1 Compliance

This website aims for **Level AA** compliance with WCAG 2.1 guidelines.

**Accessibility Features:**
- ✅ Skip navigation link
- ✅ ARIA labels and landmarks
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Semantic HTML
- ✅ Form labels and validation

---

## 🌍 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Android 8+ |

---

## 📄 License

Copyright © 2025 Lavanya Infotech Limited. All Rights Reserved.

This website and its contents are proprietary and confidential. Unauthorized copying, modification, distribution, or use is strictly prohibited.

See [LICENSE](LICENSE) file for full details.

---

## 📞 Contact

**Lavanya Infotech Limited**

- **Website:** [www.lavanyainfotechltd.com](https://www.lavanyainfotechltd.com)
- **Email:** [info@lavanyainfotechltd.com](mailto:info@lavanyainfotechltd.com)
- **Address:** 5 Bright Ridge, Tunbridge Wells, TN4 0JN, United Kingdom
- **Director:** Subramanyam Reddy Jeepalem

**Registered in England & Wales**

---

## 🔄 Version History

### Version 2.0.0 (2025-01-11)
- ✅ Complete professional redesign
- ✅ Separated CSS and JavaScript into external files
- ✅ Added comprehensive SEO optimization
- ✅ Implemented accessibility features
- ✅ Added PWA support
- ✅ Mobile navigation with hamburger menu
- ✅ Form validation and improved UX
- ✅ Custom 404 and thank-you pages
- ✅ Privacy policy page

### Version 1.0.0 (Previous)
- Initial website launch
- Basic single-page design

---

**Built with ❤️ by Lavanya Infotech Limited**

*Automate. Optimize. Excel.*
