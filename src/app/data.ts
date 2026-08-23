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
    RESUME:
      "https://drive.google.com/file/d/18yMgdsVQsoaZLen5SS_jsGPxOqCPLrt3/view",
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
    UptoSkillsTeamLead: {
      WEBSITE: "https://uptoskills.com/",
      COMPANY: "UptoSkills",
      LOCATION: "Remote",
      DURATION: "June, 2026 - Aug, 2026",
      POSITION: "Team Captain / Lead Intern",
      DESCRIPTION: [
        "Led a team of interns by coordinating tasks, providing technical guidance, and ensuring timely project delivery.",
        "Contributed actively as a full-stack developer using React.js, Node.js, Express.js, and PostgreSQL.",
      ],
      TECH_STACK: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "PostgreSQL",
        "JWT",
        "Git",
        "GitHub",
      ],
    },
    UptoSkillsDeveloper: {
      WEBSITE: "https://uptoskills.com/",
      COMPANY: "UptoSkills",
      LOCATION: "Remote",
      DURATION: "May, 2026 - June, 2026",
      POSITION: "Full Stack Developer Intern",
      DESCRIPTION: [
        "Developed responsive full-stack web applications using React.js, Node.js, and RESTful APIs.",
        "Collaborated with the team to design database schemas, implement features, and improve overall performance.",
      ],
      TECH_STACK: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "PostgreSQL",
        "JWT",
        "Git",
        "GitHub",
      ],
    },
    OpenSource: {
      WEBSITE:
        "https://github.com/search?q=is%3Apr+author%3ASricharan106&type=pullrequests",
      COMPANY: "GirlScript Summer of Code",
      LOCATION: "Remote",
      DURATION: "May, 2026 - Present",
      POSITION: "Open Source Contributor",
      DESCRIPTION: [
        "Contributed to multiple React and Node.js projects by implementing multi-tenant OAuth2, AI integrations, and new features.",
        "Resolved real-world production issues, improving accessibility, testing coverage, and overall application performance.",
      ],
      TECH_STACK: [
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "Python",
        "OAuth2",
        "REST APIs",
        "MongoDB",
        "Git",
        "GitHub",
        "AI Integrations",
      ],
    },
  },
  PROJECTS: {
    "Zoom-MERN-Clone": {
      LIVE_PREVIEW: "https://zoom-mern-clone-1.onrender.com",
      DESCRIPTION: [
        "Engineered a real-time video conferencing app using the MERN stack and WebRTC protocols.",
        "Built a custom Socket.io signaling server and a responsive Material UI interface with dynamic media controls.",
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
      IMAGE: "/zoom.png",
      GITHUB: "http://",
    },
    "Discord-bot- Monkey Bot": {
      LIVE_PREVIEW: "https://github.com/Sricharan106/Discord-bot",
      DESCRIPTION: [
        "Engineered a Python-based Discord bot featuring Google Gemini AI integrations for intelligent real-time conversational responses.",
        "Developed a complex financial simulation system with banking, career progression, and persistent JSON data storage.",
      ],
      TECH_STACK: ["Python", "Discord.py"],
      IMAGE: "/discord.jpg",
    },
    "Airbnb-MERN-Clone": {
      LIVE_PREVIEW: "https://airbnb-mern-clone-e0zx.onrender.com/",
      DESCRIPTION: [
        "Architected a comprehensive booking platform using MERN with JWT authentication and Cloudinary image hosting.",
        "Developed a fully responsive frontend with Tailwind CSS and Mapbox integration to simulate core industry-standard features.",
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
      IMAGE: "/airbnb.png",
    },
  },
  BLOGS: {},
  OTHER_PROJECTS: {
    "Zoom-MERN-Clone": {
      LIVE_PREVIEW: "https://zoom-mern-clone-1.onrender.com",
      DESCRIPTION: [
        "Engineered a real-time video conferencing app using the MERN stack and WebRTC protocols.",
        "Built a custom Socket.io signaling server and a responsive Material UI interface with dynamic media controls.",
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
      IMAGE: "/zoom.png",
    },
    "Discord-bot- Monkey Bot": {
      LIVE_PREVIEW: "https://github.com/Sricharan106/Discord-bot",
      DESCRIPTION: [
        "Engineered a Python-based Discord bot featuring Google Gemini AI integrations for intelligent real-time conversational responses.",
        "Developed a complex financial simulation system with banking, career progression, and persistent JSON data storage.",
      ],
      TECH_STACK: ["Python", "Discord.py"],
      IMAGE: "/discord.jpg",
    },
    "Airbnb-MERN-Clone": {
      LIVE_PREVIEW: "https://airbnb-mern-clone-e0zx.onrender.com/",
      DESCRIPTION: [
        "Architected a comprehensive booking platform using MERN with JWT authentication and Cloudinary image hosting.",
        "Developed a fully responsive frontend with Tailwind CSS and Mapbox integration to simulate core industry-standard features.",
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
      IMAGE: "/airbnb.png",
    },
    "Monkey Bytes": {
      LIVE_PREVIEW: "https://monkey-bytes.onrender.com",
      DESCRIPTION: [
        "Developed a dynamic subscription-based newsletter engine using Flask, PostgreSQL, and passwordless OTP authentication.",
        "Designed a personalized dashboard with real-time preference management and persistent light/dark mode toggling.",
      ],
      TECH_STACK: [
        "Python",
        "Flask",
        "Django",
        "PostgreSQL",
        "Flask-Mail",
        "Bootstrap",
      ],
      IMAGE: "/monkey.jpg",
    },
    "flappy-duck": {
      LIVE_PREVIEW: "https://sricharan106.github.io/flappy-duck/",
      DESCRIPTION: [
        "Built a high-performance 2D arcade game using HTML5 Canvas and vanilla JavaScript with a dedicated game loop.",
        "Implemented precise collision detection and a gravity-based physics engine for character movement and scoring.",
      ],
      TECH_STACK: ["js", "CanvaJS", "HTML", "CSS"],
      IMAGE: "/bird.png",
    },
    "Spotify Clone": {
      LIVE_PREVIEW: "https://sricharan106.github.io/Spofity-clone/",
      DESCRIPTION: [
        "Architected a high-fidelity responsive clone of the Spotify web player using HTML5, Flexbox, and CSS Grid.",
        "Implemented core media playback functionality with vanilla JavaScript, including seeking, volume control, and play/pause.",
      ],
      TECH_STACK: ["js", "HTML", "CSS"],
      IMAGE: "/spotify.jpg",
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
    TOPICS: ["Arrays", "Linked Lists", "Stacks", "Recursion & Backtracking"],
  },
};
