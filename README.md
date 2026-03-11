# 💍 Thiệp Cưới Online – Wedding Card

A beautiful, fully responsive online wedding invitation built with **React + Vite**.

## ✨ Features

- 🌸 Animated floating flower petals
- ⏳ Real-time countdown timer to the wedding day
- 📖 Our Story timeline
- 📍 Wedding details with map links
- 🖼️ Photo gallery with lightbox
- 💌 RSVP confirmation form
- 📱 Fully responsive (mobile-first)
- 🚀 Ready for free hosting (Netlify / Vercel / GitHub Pages)

---

## 🖼️ Adding Your Photos

Place your wedding photos in the `public/images/` folder:

| Filename | Usage | Recommended size |
|---|---|---|
| `hero-bg.jpg` | Hero background | 1920 × 1080 px |
| `gallery-1.jpg` ~ `gallery-6.jpg` | Gallery grid | 800 × 600 px |
| `heart.svg` | Browser favicon | Already included |

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Deploying for Free

### Netlify (Recommended – drag & drop)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → drag the `dist/` folder

### Vercel (One command)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Push code to GitHub
2. In repo Settings → Pages → Source: **GitHub Actions**
3. Use the workflow for Vite:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## 💌 RSVP with Formspree (Optional)

To receive RSVP emails, sign up at [formspree.io](https://formspree.io) and replace `YOUR_FORM_ID` in `src/components/RSVP.jsx`.

---

## 🎨 Customisation

Edit the following files to personalise:

| What | File |
|---|---|
| Couple names, wedding date | `src/components/Hero.jsx`, `src/components/Countdown.jsx` |
| Our story timeline | `src/components/Story.jsx` |
| Venue details & map links | `src/components/WeddingDetails.jsx` |
| Colour scheme | `src/index.css` – `:root` variables |
| RSVP form | `src/components/RSVP.jsx` |

---

Made with ❤️ for the special day
