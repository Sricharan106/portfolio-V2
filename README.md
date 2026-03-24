# Portfolio V2

[🔗 Live Preview](https://portfolio-v2-fsx3.onrender.com)

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
└── portfolio-V2
    └── public
        ├── favicon-32x32.png
    └── src
        ├── app
        │   ├── data.ts                # Centralised content/data (experience, projects, skills, etc.)
        │   ├── favicon.ico
        ├── assets                     # Static assets (SVGs, images)
        │   ├── react.svg
        ├── components
        │   ├── navbar
        │   │   ├── animated-text.tsx  # Typewriter / animated heading
        │   │   ├── AnimatedText.css
        │   │   ├── moving-element.tsx # Floating Button element
        │   │   ├── theme-toggler.tsx  # Dark <-> Light mode switch
        │   ├── sections
        │   │   ├── blog.tsx
        │   │   ├── contact.tsx
        │   │   ├── dsa.tsx
        │   │   ├── experience.tsx
        │   │   ├── footer.tsx
        │   │   ├── hero.tsx
        │   │   ├── nav-bar.tsx
        │   │   ├── projects.tsx
        │   │   ├── skills.tsx
        │   ├── ui
        │   │   └── button.tsx
        │   │   └── customCursor.tsx    # Custom pointer cursor
        │   │   └── grid-pattern.tsx    # Crosshair cursor variant
        │   │   └── target-cursor.tsx   # Decorative background grid
        │   │   └── use-mobile.tsx      # Responsive breakpoint hook
        ├── lib
        │   ├── utils.ts                # Shared utility functions
        ├── pages
        │   ├── blog.tsx                # All projects page
        │   ├── index.tsx               # Home / landing page
        │   ├── projects.tsx            # All projects page
        ├── App.css
        ├── App.tsx
        ├── index.css
        ├── main.tsx
    └── .gitignore
    └── .prettierignore
    └── Directory-Tree
    └── eslint.config.js
    └── index.html
    └── LICENSE
    └── package-lock.json
    └── package.json
    └── README.md
    └── tsconfig.app.json
    └── tsconfig.json
    └── tsconfig.node.json
    └── vite.config.ts
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
