<<<<<<< HEAD
# True Venture Digital 🚀

### Calgary's Local Web Performance Studio.
**High-Performance Architecture Over Generic Templates.**

---

[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel&style=for-the-badge)](https://trueventuredigital.com)
[![Next.js](https://img.shields.io/badge/Framework-Next.js_15-black?logo=next.js&style=for-the-badge)](https://nextjs.org/)
[![Tailwind](https://img.shields.io/badge/Styling-Tailwind_CSS-blue?logo=tailwind-css&style=for-the-badge)](https://tailwindcss.com/)
[![framer-motion](https://img.shields.io/badge/Animation-Framer_Motion-white?logo=framer&style=for-the-badge)](https://www.framer.com/motion/)

## 💎 The Mission

**True Venture Digital** was founded to close the gap between high-end digital agency work and the local Calgary business scene. We specialize in building fast-loading, conversion-driven websites for trades, restaurants, and local services who are tired of losing revenue to competitors with better SEO.

Our signature **$1,000 Starter Package** provides everything a local business needs to show up, get found, and get calls—without the bloat of traditional agency pricing.

---

## 🛠️ The Tech Stack

This project is built with a focus on speed, scalability, and premium user experience.

- **Frontend Core**: [Next.js](https://nextjs.org/) (App Router Architecture)
- **State & Logic**: [React](https://react.dev/) + Server Actions
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid, consistent industrial aesthetics
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for advanced 3D parallax, spotlight effects, and smooth transitions
- **Payments**: Integrated [Stripe](https://stripe.com/) Checkout for secure, one-click package landing
- **Communication**: [Resend](https://resend.com/) for automated transactional emails and lead notifications
- **Icons**: [Lucide React](https://lucide.dev/) for a clean, consistent interface

---

## 🔥 Key Technical Highlights

### 1. High-Performance Architecture
Built using Next.js 15+ to leverage modern React features, Server Components for minimal client-side JavaScript, and optimized asset loading via `next/image` and `next/font`.

### 2. Premium Interactive UI
Utilizes custom Framer Motion hooks and components to create "Industrial Design" aesthetics, including:
- **3D Tilt Cards**: Interactive problem cards that respond to mouse movement.
- **Dynamic Spotlights**: SVG-based radial gradients that track cursor position over grid surfaces.
- **Smooth Staggered Reveals**: Viewport-aware animations that guide the user's focus during the scroll experience.

### 3. Conversion-Focused Flow
A streamlined path from landing to checkout.
- **Automated Lead Generation**: Simple "Free Audit" triggers to capture high-intent traffic.
- **Stripe Integration**: Robust payment gateway implementation with webhook support for order processing.
- **SEO Ready**: Semantic HTML5 structure, optimized meta tags, and local SEO-specific landmarks.

---

## 📂 Project Structure

```text
├── app/               # Next.js App Router (Pages, API, Actions)
│   ├── checkout/      # Stripe Checkout flow
│   ├── free-audit/    # Lead generation forms
│   └── api/           # Backend endpoints (Webhooks, Resend)
├── components/        # Reusable Atomic UI Components (Buttons, Sections, Cards)
├── design/           # Design system tokens and styles
├── lib/               # Utility functions, Stripe & Resend clients
├── public/            # Optimized static assets (Calgary landmark photography)
└── STRIPE_SETUP.md    # Technical documentation for payment integration
```

---

## 🚀 Getting Started

To run True Venture Digital locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/patricko5/true-venture-digital.git
   cd true-venture-digital
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file with your credentials:
   ```env
   STRIPE_SECRET_KEY=...
   STRIPE_WEBHOOK_SECRET=...
   RESEND_API_KEY=...
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application in action.

---

## 📈 Performance Tracking

The site is optimized for **Core Web Vitals** and utilizes `@vercel/analytics` and `@vercel/speed-insights` for real-time monitoring in production.

---

## 📄 License

This project is licensed under the [MIT License](file:///Users/zash/Developer/true-venture-digital/LICENSE).
=======
![True Venture Digital Banner](public/assets/banner.png)

# True Venture Digital

[![React](https://img.shields.io/badge/React-18.2-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deployment: Vercel](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://vercel.com/)

> **High-Performance Marketing Agency Architecture.** Engineered for precision, built for impact.

True Venture Digital is a sophisticated digital agency landing page that demonstrates modern web engineering and bespoke design patterns. Moving away from standard "template" layouts, this project implements a proprietary design system focused on **Tonal Depth**, **Intentional Asymmetry**, and **Editorial Typography**.

---

## 💎 Key Features

*   **Custom Design System**: Abandoning 1px borders in favor of tonal surface shifts and background-color hierarchies.
*   **High-End Glassmorphism**: Floating interactive elements using backdrop filters and 80% opacity surface layering.
*   **Kinetic Micro-Interactions**: Subtle, purposeful animations and state transitions powered by CSS variables and React effects.
*   **Performance First**: Built on Vite for lightning-fast HMR and optimized production bundles.
*   **Fully Responsive**: A seamless experience transitioning from data-dense desktop reports to fluid mobile interactions.

## 🛠️ Tech Stack

- **Core**: React 18 (Hooks, Functional Components)
- **Build Tool**: Vite 5
- **Styling**: Vanilla CSS3 (Custom Design Tokens, Variable-driven)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk (Headlines) & Manrope (Body)

## 📐 Design Philosophy: "The North Star"

This project follows the **True Venture Digital Design Specification**:

### The "No-Line" Rule
To maintain a premium, editorial feel, we strictly avoid standard borders. Boundaries are communicated through background color shifts (`surface` to `surface-container-low`).

### Typographic Authority
We pair the technical precision of **Space Grotesk** for identity with the approachable modernism of **Manrope** for utility. Headlines use tight tracking and geometric apertures to signal a tech-forward identity.

### Tonal Elevation
Depth is achieved through stacking. A `surface-container-lowest` card placed on a `surface-container-high` background provides natural focal points without artificial decoration.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher)
- npm or yarn

### Installation
1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/true-venture-digital.git
    cd true-venture-digital
    ```
2.  **Install dependencies**
    ```bash
    npm install
    ```
3.  **Launch the development server**
    ```bash
    npm run dev
    ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
>>>>>>> 6e3aca018c2a80856e236ce7333c2766e926f84b

---

<p align="center">
<<<<<<< HEAD
  <b>Architecture Over Templates.</b><br>
  Built with ❤️ by True Venture Digital.
=======
  Crafted with precision by <b>True Venture Digital Engineering</b>.
>>>>>>> 6e3aca018c2a80856e236ce7333c2766e926f84b
</p>
