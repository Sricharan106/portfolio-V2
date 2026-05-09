export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE?: string;
}

export interface IBlogData {
  DATE: string;
  TIME: string;
  LINK: string;
  DESCRIPTION: string;
  IMAGE?: string;
}

export const GITHUB_USERNAME = "Sricharan106";

export const DATA = {
  HEADER: {
    NAME: "Parsi Sricharan",
    AGE: "17",
    PRONOUN: "he/him",
    HEADLINE:
      "Full Stack Developer focused on building scalable systems and solving complex problems using Data Structures & Algorithms.",
    RESUME: "https://drive.google.com/file/d/18yMgdsVQsoaZLen5SS_jsGPxOqCPLrt3/view",
    EMAIL: "mailto:parsisricharan106@gmail.com",
    GITHUB: "https://github.com/Sricharan106",
    LINKEDIN: "https://www.linkedin.com/in/sricharan106/",
    LEETCODE: "https://leetcode.com/u/Sricharan106/",
    INTRO:
      "Hey! I'm a full-stack developer who loves building efficient, scalable, and intuitive applications. Alongside development, I actively practice Data Structures & Algorithms to strengthen problem-solving skills and write optimized, production-level code.",
    EXPERTISE:
      "My expertise lies in express.js, TypeScript, Node.js, and I enjoy working across the stack to bring ideas to life.",
  },

  EXPERIENCE: {
    // Example
    // Suraasa: {
    //   WEBSITE: "https://www.suraasa.com/",
    //   POSITION: "SDE - 1 Backend",
    //   LOCATION: "Hybrid",
    //   DURATION: "Oct, 2025 - Present",
    //   DESCRIPTION: [
    //     "Developed and maintained backend services and APIs to support product features and integrations.",
    //     "Worked on reliability, security, and performance improvements across services, including caching and monitoring.",
    //     "Collaborated with frontend, platform, and DevOps teams to design APIs, event-driven workflows, and developer-facing documentation.",
    //   ],
    //   TECH_STACK: [
    //     "TypeScript",
    //     "Node.js",
    //     "Python",
    //     "Django",
    //     "AdonisJS",
    //     "PostgreSQL",
    //     "MongoDB",
    //     "Redis",
    //     "Git & GitHub",
    //   ],
    // },
  },
  PROJECTS: {
    // Example
    // "VIPS-TC": {
    //   LIVE_PREVIEW: "https://vips.edu",
    //   DESCRIPTION: [
    //     "Contributed to the development and maintenance of the main VIPS-TC website.",
    //     "Implemented various front-end features using modern React and Material UI libraries.",
    //     "Ensured responsive design and cross-browser compatibility for a seamless user experience.",
    //     "Collaborated with the team to enhance website performance and accessibility.",
    //   ],
    //   TECH_STACK: [
    //     "React.js",
    //     "Material UI",
    //     "Axios",
    //     "Firebase",
    //     "Styled Components",
    //     "Razorpay",
    //     "XLSX",
    //   ],
    // },
    "Zoom-MERN-Clone": {
      LIVE_PREVIEW: "https://zoom-mern-clone-1.onrender.com",
      DESCRIPTION: [
        "Developed a full-stack video conferencing application using the MERN stack (MongoDB, Express, React, Node.js).",
        "Engineered real-time peer-to-peer communication by implementing WebRTC protocols for high-quality audio and video streaming.",
        "Built a custom Socket.io signaling server to manage SDP offer/answer exchanges and ICE candidate forwarding.",
        "Designed a responsive meeting interface with Material UI, featuring dynamic participant video tiles and media controls.",
        // "Integrated MongoDB for persistent user management and meeting history, ensuring secure data handling via Express controllers.",
      ],
      TECH_STACK: [
        "React.js",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB",
        "Browser APIs",
        "Material UI",
        "Axios",
      ],
    },
    "Discord-bot- Monkey Bot": {
      LIVE_PREVIEW: "https://github.com/Sricharan106/Discord-bot",
      DESCRIPTION: [
        "Engineered a multi-purpose Discord bot using Python and the Discord.py library, integrating AI assistance and server management.",
        "Integrated Google Gemini AI via API to provide real-time, intelligent conversational responses and search capabilities for server members.",
        "Developed a complex financial simulation system featuring banking (deposits/withdrawals), career progression, and investment vehicles like SIPs and FDs.",
        "Implemented persistent data storage using JSON to track user balances, stock portfolios, and server-specific moderation logs.",
        // "Built automated moderation tools, including offensive language filtering and administrative commands (kick/ban) for server security.",
        // "Designed a simulated stock market engine with daily price refreshes, allowing users to trade virtual shares and manage portfolios.",
      ],
      TECH_STACK: ["Python", "Discord.py"],
    },
    "Airbnb-MERN-Clone": {
      LIVE_PREVIEW: "https://airbnb-mern-clone-e0zx.onrender.com/",
      DESCRIPTION: [
        "Architected a comprehensive booking ecosystem using the MERN stack, featuring a dynamic host dashboard for property management and a seamless guest reservation system.",
        "Integrated secure JWT-based authentication and Cloudinary API for high-performance image hosting, ensuring scalable data handling and a polished user profile experience.",
        "Developed a fully responsive frontend with React and Tailwind CSS, implementing complex filtering logic and Mapbox integration to mimic core industry-standard features.",
      ],
      TECH_STACK: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JWT",
        "Cloudinary",
        "Render",
        "Tailwind CSS",
      ],
    },
  },
  BLOGS: {
    // Example
    // "ORMs & ODMs: Choosing the Right Tool for Your Database Needs": {
    //   DATE: "March 24, 2025",
    //   TIME: "4",
    //   LINK: "https://www.linkedin.com/pulse/orms-odms-choosing-right-tool-your-database-needs-utkarsh-singhal-dnshc/",
    //   DESCRIPTION:
    //     "Object-Relational Mappers (ORMs) and Object-Document Mappers (ODMs) play a crucial role in modern application development by abstracting database interactions and simplifying data management. Whether you're working with relational databases like PostgreSQL and MySQL or NoSQL databases like MongoDB, selecting the right ORM or ODM can significantly impact performance, scalability, and maintainability.",
    // },
  },

  OTHER_PROJECTS: {
    "Zoom-MERN-Clone": {
      LIVE_PREVIEW: "https://zoom-mern-clone-1.onrender.com",
      DESCRIPTION: [
        "Developed a full-stack video conferencing application using the MERN stack (MongoDB, Express, React, Node.js).",
        "Engineered real-time peer-to-peer communication by implementing WebRTC protocols for high-quality audio and video streaming.",
        "Built a custom Socket.io signaling server to manage SDP offer/answer exchanges and ICE candidate forwarding.",
        "Designed a responsive meeting interface with Material UI, featuring dynamic participant video tiles and media controls.",
        // "Integrated MongoDB for persistent user management and meeting history, ensuring secure data handling via Express controllers.",
      ],
      TECH_STACK: [
        "React.js",
        "Vite",
        "Node.js",
        "Express",
        "MongoDB",
        "Browser APIs",
        "Material UI",
        "Axios",
      ],
    },
    "Discord-bot- Monkey Bot": {
      LIVE_PREVIEW: "https://github.com/Sricharan106/Discord-bot",
      DESCRIPTION: [
        "Engineered a multi-purpose Discord bot using Python and the Discord.py library, integrating AI assistance and server management.",
        "Integrated Google Gemini AI via API to provide real-time, intelligent conversational responses and search capabilities for server members.",
        "Developed a complex financial simulation system featuring banking (deposits/withdrawals), career progression, and investment vehicles like SIPs and FDs.",
        "Implemented persistent data storage using JSON to track user balances, stock portfolios, and server-specific moderation logs.",
        // "Built automated moderation tools, including offensive language filtering and administrative commands (kick/ban) for server security.",
        // "Designed a simulated stock market engine with daily price refreshes, allowing users to trade virtual shares and manage portfolios.",
      ],
      TECH_STACK: ["Python", "Discord.py"],
    },
    "Airbnb-MERN-Clone": {
      LIVE_PREVIEW: "https://airbnb-mern-clone-e0zx.onrender.com/",
      DESCRIPTION: [
        "Architected a comprehensive booking ecosystem using the MERN stack, featuring a dynamic host dashboard for property management and a seamless guest reservation system.",
        "Integrated secure JWT-based authentication and Cloudinary API for high-performance image hosting, ensuring scalable data handling and a polished user profile experience.",
        "Developed a fully responsive frontend with React and Tailwind CSS, implementing complex filtering logic and Mapbox integration to mimic core industry-standard features.",
      ],
      TECH_STACK: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JWT",
        "Cloudinary",
        "Render",
        "Tailwind CSS",
      ],
    },
    "Monkey Bytes": {
      LIVE_PREVIEW: "https://monkey-bytes.onrender.com",
      DESCRIPTION: [
        "Developed a subscription-based newsletter engine using Flask and PostgreSQL, featuring dynamic category-specific news delivery (Tech, Anime, Sports) and a persistent user archive.",
        "Implemented a robust passwordless authentication system using Flask-Mail to handle SMTP-based OTP verification, significantly enhancing user onboarding security.",
        "Designed a personalized user dashboard with real-time preference management and a custom-themed UI that supports persistent light/dark mode toggling via JavaScript and CSS.",
      ],
      TECH_STACK: [
        "Python",
        "Flask",
        "Django",
        "PostgreSQL",
        "Flask-Mail",
        "Bootstrap",
      ],
    },
    "flappy-duck": {
      LIVE_PREVIEW: "https://sricharan106.github.io/flappy-duck/",
      DESCRIPTION: [
        "Developed a high-performance 2D arcade game using the HTML5 Canvas API and vanilla JavaScript, implementing a dedicated game loop for smooth",
        "Engineered a precise collision detection system and gravity-based physics engine to manage character movement, obstacle generation, and real-time score tracking.",
        "Designed a responsive game environment using CSS and JavaScript events, ensuring cross-device playability with optimized touch and keyboard input handling.",
      ],
      TECH_STACK: ["js", "CanvaJS", "HTML", "CSS"],
    },
    "Spotify Clone": {
      LIVE_PREVIEW: "https://sricharan106.github.io/Spofity-clone/",
      DESCRIPTION: [
        "Architected a high-fidelity responsive UI clone of the Spotify web player using semantic HTML5 and advanced CSS techniques, including Flexbox and Grid for complex layouts.",
        "Implemented core media playback functionality with vanilla JavaScript, enabling real-time play/pause controls, seek tracking, dynamic volume management, and synchronized lyric scrolling.",
      ],
      TECH_STACK: ["js", "HTML", "CSS"],
    },
  },

  SKILLS: {
    Languages: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Python",
      "C++",
      "C",
    ],
    Frameworks: ["React", "Next.js", "Flask", "Django", "Express.js"],
    // TemplateingEngine: ["EJS"],
    Libraries: ["Tailwind CSS", "Material UI", "Bootstrap"],
    "Database & Backend": ["PostgreSQL", "MySQL", "MongoDB", "JWT", "Auth.js"],
    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Vercel",
      "Render",
    ],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Podman",
      "Docker",
      "Visual Studio Code",
      "Prettier",
      "Arch Linux",
    ],
    Certifications: [
      "CS50x - Harvard",
      "CS50P - Harvard",
      "Sigma 8.0 - MERN (Apna Collage)",
    ],
  },
  DSA: {
    PLATFORM: "https://leetcode.com/u/Sricharan106/",
    TOPICS: [
      "Arrays",
      "Linked Lists",
      "Stacks",
      // "Queues",
      // "Trees",
      // "Graphs",
      // "Dynamic Programming",
      "Recursion & Backtracking",
      // "Greedy Algorithms",
    ],
  },
};
