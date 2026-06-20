// ===== PORTFOLIO DATA — Edit this file to update all content =====

// ===== Types =====
export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend";
  github: string;
  demo: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  type: "education" | "experience" | "milestone";
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}

// ===== Personal Info =====
export const personalInfo = {
  name: "MotiRam Khillare",
  title: "Full Stack Developer",
  email: "motiramkhillare.dev@gmial.com",
  phone: "+91 8551917223",
  location: "India",
  linkedin: "https://linkedin.com/in/motiramkhillare",
  github: "https://github.com/motiramkhillare",
  resumeUrl: "C:\\Users\\motir\\Downloads\\Motiram_Khillare_Resume.docx",
  bio: `I'm a passionate Full Stack Developer with a love for building elegant, performant web applications. I specialize in crafting seamless user experiences from frontend to backend, transforming complex problems into simple, beautiful solutions.

With a strong foundation in modern web technologies and a keen eye for detail, I strive to write clean, maintainable code that makes a real impact. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.`,
  typingTexts: [
    "Full Stack Developer",
    "Backend Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ],
  stats: [
    { label: "Projects", value: 10 },
    { label: "Technologies", value: 15 },
    { label: "Cups of Coffee", value: 999 },
  ],
};

// ===== Skills =====
export const skillCategories = {
  frontend: {
    label: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML", level: 95, icon: "📄" },
      { name: "CSS", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 88, icon: "⚡" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "▲" },
      { name: "Tailwind CSS", level: 88, icon: "💨" },
    ] as Skill[],
  },
  backend: {
    label: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 82, icon: "🚀" },
      { name: "Python", level: 75, icon: "🐍" },
    ] as Skill[],
  },
  database: {
    label: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "PostgreSQL", level: 72, icon: "🐘" },
    ] as Skill[],
  },
};

// ===== Projects =====
export const projects: Project[] = [
  {
    id: 1,
    title: "Blog Website",
    description:
      "A modern blogging platform with rich text editor, user authentication, and dynamic content management. Built for performance and SEO.",
    image: "/images/project-blog.png",
    tags: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    category: "fullstack",
    github: "https://github.com/motiramkhillare/blog-website",
    demo: "#",
  },
  {
    id: 2,
    title: "Rental Room",
    description:
      "A room rental platform connecting property owners with tenants. Features search filters, booking system, and user dashboards.",
    image: "/images/project-rental.png",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    category: "fullstack",
    github: "https://github.com/motiramkhillare/rental-room",
    demo: "#",
  },
  {
    id: 3,
    title: "Royal Enfield Clone",
    description:
      "A pixel-perfect clone of the Royal Enfield website showcasing modern CSS techniques, smooth animations, and responsive design.",
    image: "/images/project-enfield.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    github: "https://github.com/motiramkhillare/royal-enfield-clone",
    demo: "#",
  },
];

// ===== Features / Capabilities =====
export const features: Feature[] = [
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that adapt seamlessly across all devices and screen sizes.",
  },
  {
    icon: "🔗",
    title: "REST APIs",
    description:
      "Well-structured, documented RESTful APIs with proper error handling and authentication.",
  },
  {
    icon: "🗄️",
    title: "Database Design",
    description:
      "Efficient database schemas with proper indexing, relationships, and query optimization.",
  },
  {
    icon: "🔒",
    title: "Authentication",
    description:
      "Secure authentication systems with JWT, OAuth, session management, and role-based access.",
  },
  {
    icon: "⚡",
    title: "Performance",
    description:
      "Optimized applications with lazy loading, code splitting, and caching strategies.",
  },
  {
    icon: "🔄",
    title: "Full Stack",
    description:
      "End-to-end development from UI design to server architecture and deployment.",
  },
];

// ===== Timeline (About section) =====
export const learningTimeline: TimelineEntry[] = [
  {
    year: "2024",
    title: "Full Stack Mastery",
    description:
      "Advanced into full-stack development with Next.js, building production-ready applications.",
    type: "milestone",
  },
  {
    year: "2023",
    title: "Backend Development",
    description:
      "Learned Node.js, Express, and database technologies. Built REST APIs and server-side applications.",
    type: "milestone",
  },
  {
    year: "2022",
    title: "Frontend Foundations",
    description:
      "Started the journey with HTML, CSS, and JavaScript. Built first interactive web projects.",
    type: "milestone",
  },
];

// ===== Experience =====
export const experiences: TimelineEntry[] = [
  {
    year: "2024 - Present",
    title: "Full Stack Developer",
    description:
      "Building scalable web applications using modern technologies. Working on frontend, backend, and database systems.",
    type: "experience",
  },
  {
    year: "2023 - 2024",
    title: "Frontend Developer",
    description:
      "Developed responsive user interfaces and interactive web applications using React and modern CSS frameworks.",
    type: "experience",
  },
];

// ===== Education =====
export const education: TimelineEntry[] = [
  {
    year: "2020 - 2024",
    title: "Bachelor's Degree in Computer Science",
    description:
      "Studied core computer science fundamentals, data structures, algorithms, and software engineering principles.",
    type: "education",
  },
  {
    year: "2018 - 2020",
    title: "Higher Secondary Education",
    description:
      "Completed higher secondary education with a focus on Science and Mathematics.",
    type: "education",
  },
];

// ===== Contact Info =====
export const contactInfo: ContactInfo[] = [
  {
    icon: "📧",
    label: "Email",
    value: "motiramkhillare.dev@gmail.com",
    href: "mailto:motiramkhillare.dev@gmail.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "motiramkhillare",
    href: "https://linkedin.com/in/motiramkhillare",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "motiramkhillare",
    href: "https://github.com/motiramkhillare",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 8551917223",
    href: "tel:+918551917223",
  },
  {
    icon: "📍",
    label: "Pune",
    value: "India",
    href: "#",
  },
];

// ===== Navigation Links =====
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ===== Terminal Commands (Hero) =====
export const terminalCommands = [
  {
    prompt: "~/portfolio",
    command: "npm run dev",
    output: "▲ Next.js 15.3.0\n  ✓ Ready in 1.2s\n  ○ http://localhost:3000",
  },
  {
    prompt: "~/portfolio",
    command: "git status",
    output: "On branch main\nYour branch is up to date\nnothing to commit, working tree clean",
  },
  {
    prompt: "~/portfolio",
    command: "echo $SKILLS",
    output: "React | Next.js | Node.js | TypeScript | MongoDB | PostgreSQL",
  },
];
