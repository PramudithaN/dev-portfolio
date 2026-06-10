# Pramuditha Nadun — Personal Portfolio

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> Personal portfolio website of **Pramuditha Nadun** — AI Researcher & Associate Software Engineer based in Sri Lanka.

---

## 📸 Preview

**Hero**
![Hero](public/Images/Pramuditha.webp)

---

## 📖 About This Project

This is my personal portfolio website built with **Astro.js** and **React**, showcasing my work as an Associate Software Engineer at LOLC Technologies. The site includes:

- A **cinematic hero section** with a split dark/red visual design
- A **developer page** with experience timeline, live GitHub project cards, and testimonials
- A **designer page** featuring a gallery of creative work, logo designs, and VFX showreel
- A **gallery** of photography and digital art
- A **contact** page

The project is fully SSR-enabled via `@astrojs/node`, deployed on **Vercel**, and supports dark/light mode with smooth animations powered by Framer Motion.

---

## ✨ Features

- 🚀 **Blazing fast** — Built with Astro.js for optimal loading speeds
- 🎨 **Modern UI** — Dark/red cinematic design with Tailwind CSS
- 🌙 **Dark mode** — Seamless light/dark theme switching
- 📱 **Fully responsive** — Works great on all screen sizes
- 🔍 **SEO optimized** — Structured data and meta tags
- 💼 **GitHub project cards** — Live data from the GitHub API
- 🖼️ **Designer portfolio** — Logo designs, VFX, and gallery
- 📋 **Experience timeline** — Work history with tech stack badges
- 💬 **Testimonials** — Collapsible testimonial section
- 📄 **Resume download** — Direct PDF download

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro.js v5](https://astro.build/) |
| UI Components | [React 19](https://reactjs.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Iconify](https://iconify.design/) |
| Deployment | [Vercel](https://vercel.com/) |
| Database | [Neon (PostgreSQL)](https://neon.tech/) |

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) **v20 or higher**
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)
- [Git](https://git-scm.com/)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PramudithaN/dev-portfolio.git
cd dev-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=your_neon_postgresql_connection_string
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run prettier` | Format all `.ts`, `.tsx`, `.css`, `.astro` files |

---

## 📁 Project Structure

```
dev-portfolio/
├── public/
│   ├── Documents/          # Resume PDF
│   ├── Images/             # Personal photos and artwork
│   ├── fonts/              # Custom fonts
│   └── static/             # Static images for projects
├── src/
│   ├── components/         # Astro & React UI components
│   │   ├── react/          # Interactive React components
│   │   └── ui/             # Base UI primitives (shadcn)
│   ├── content/
│   │   ├── blog/           # Blog posts (MD/MDX)
│   │   └── projects/       # Project entries (MD)
│   ├── layouts/            # Page layout wrappers
│   ├── lib/                # Utility functions and DB helpers
│   ├── pages/              # File-based routes
│   │   ├── api/            # API endpoints
│   │   ├── blog/           # Blog routes
│   │   ├── gallery/        # Gallery route
│   │   ├── projects/       # Projects route
│   │   └── contact/        # Contact route
│   ├── styles/             # Global CSS and typography
│   ├── consts.ts           # Site metadata, nav, social links, skills
│   └── types.ts            # TypeScript type definitions
├── astro.config.ts         # Astro configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## 🌙 Dark Mode

The site detects the user's system preference on first load and allows manual toggling via the theme button in the navbar. The preference is persisted in `localStorage`.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Connect with Me

- **GitHub**: [github.com/PramudithaN](https://github.com/PramudithaN)
- **LinkedIn**: [linkedin.com/in/pramuditha-nadun-612b1b204](http://www.linkedin.com/in/pramuditha-nadun-612b1b204)
- **Email**: pramudithanadun@gmail.com
