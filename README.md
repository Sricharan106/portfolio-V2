# Portfolio V2

[🔗 Live Preview](https://your-portfolio-url.com)

Welcome to my personal portfolio repository! This project showcases my work, skills, and experience through a modern, responsive, and dynamic web application built with**React**, **TypeScript**, and **Vite**.

## 🚀 Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS / Tailwind CSS
- **Code Formatting**: Prettier

## 🌟 Features

- **Custom Cursor**: Unique crosshair/target cursor for an interactive feel.
- **Animated Hero**: Typewriter-style text and floating elements for a dynamic landing.
- **Theme Toggle**: Seamless dark and light mode switching.
- **Responsive Design**: Mobile-aware layout optimized for all screen sizes.
- **Dedicated Pages**: Separate pages for Projects and Blog.
- **Modular Components**: Clean, reusable component architecture for easy maintenance.

## 🗂️ Project Structure

```
src/
├── app/
│   └── data.ts               # Centralised content/data (experience, projects, skills, etc.)
├── assets/                   # Static assets (SVGs, images)
├── components/
│   ├── navbar/
│   │   ├── animated-text.tsx     # Typewriter / animated heading
│   │   ├── AnimatedText.css
│   │   ├── moving-element.tsx    # Floating / parallax element
│   │   └── theme-toggler.tsx     # Dark ↔ Light mode switch
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── nav-bar.tsx
│   │   ├── experience.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── blog.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── button.tsx
│       ├── customCursor.tsx      # Custom pointer cursor
│       ├── target-cursor.tsx     # Crosshair cursor variant
│       ├── grid-pattern.tsx      # Decorative background grid
│       └── use-mobile.tsx        # Responsive breakpoint hook
├── lib/
│   └── utils.ts              # Shared utility functions
├── pages/
│   ├── index.tsx             # Home / landing page
│   ├── projects.tsx          # All projects page
│   └── blog.tsx              # All blog posts page
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

---

## 📦 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9+ (or pnpm / yarn)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/portfolio-V2.git
   cd portfolio-V2/frontend/my-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## ✏️ Customisation

All site content (bio, experience, skills, projects, blog posts) lives in a single file:

```
src/app/data.ts
```

Edit this file to update the portfolio with your own information — no need to touch the component logic.

---

## 📄 License

This project is licensed under the terms of the [LICENSE](./LICENSE) file.
