My Portfolio

A personal developer portfolio built with Next.js and TypeScript, showcasing my projects, skills, and experience.
Optimized for performance, responsive across all devices, and designed for easy customization.
✨ Features

    Next.js App Router with TypeScript

    Responsive UI using modern CSS or Tailwind

    SEO-ready with meta tags & Open Graph support

    Easy-to-update project and skills data

    Deployable to Vercel, Netlify, or any Node host

🧱 Tech Stack

    Frontend: Next.js, React, TypeScript

    Styling: CSS Modules or Tailwind CSS

    Deployment: Vercel (recommended)

🚀 Getting Started

# 1. Clone the repo
git clone https://github.com/pahuldeepp/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# open http://localhost:3000

# 4. Build for production
npm run build
npm start

🗂 Project Structure

my-portfolio/
├─ public/                 # Static assets (images, favicon, resume.pdf)
├─ src/
│  ├─ app/                 # App Router pages & layouts
│  │  ├─ page.tsx          # Home page
│  │  └─ layout.tsx        # Root layout
│  ├─ components/          # Reusable UI components (Navbar, Footer, etc.)
│  ├─ data/                # JSON/TS files for projects & skills
│  ├─ lib/                 # Utilities & helpers
│  └─ styles/              # Global and module CSS
├─ eslint.config.mjs
├─ next.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
└─ package.json

🖼 Customization
1. Update Personal Info

Edit files in src/data/ to change:

    Name & role

    Skills list

    Contact information

2. Add Projects

    Add project details in src/data/projects.ts

    Place images in public/projects/

3. Change Theme/Colors

    Modify CSS variables in globals.css

    Or adjust Tailwind theme settings in tailwind.config.js
