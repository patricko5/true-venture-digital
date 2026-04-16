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

---

<p align="center">
  <b>Architecture Over Templates.</b><br>
  Built with ❤️ by True Venture Digital.
</p>
