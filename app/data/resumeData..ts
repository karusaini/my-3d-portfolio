// /data/resumeData.ts

const resumeData = {
  about: {
    name: "Aman Sharma",
    title: "Full-Stack Developer & 3D UI Enthusiast",
    description: `Creative developer with a passion for building immersive web experiences using cutting-edge 3D technology, interactive UI, and modern frameworks like Next.js and React Three Fiber.`,
    location: "New Delhi, India",
    avatar: "/avatar.png",
  },

  skills: {
    frontend: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
    ],
    backend: ["Node.js", "Express", "MongoDB", "Firebase", "Prisma"],
    tools: ["Figma", "VS Code", "Git", "Postman", "Vercel"],
    soft: ["Teamwork", "Problem Solving", "Communication", "Creativity"],
  },

  experience: [
    {
      company: "TechNova Pvt. Ltd.",
      role: "Frontend Engineer",
      duration: "June 2022 – May 2024",
      description:
        "Built dynamic dashboards, implemented 3D components using Three.js, and optimized frontend performance across devices.",
    },
    {
      company: "WebVerse Studio",
      role: "UI Developer Intern",
      duration: "Jan 2022 – May 2022",
      description:
        "Collaborated with designers to convert Figma prototypes into responsive websites using Tailwind and Next.js.",
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science",
      institute: "ABC Institute of Technology",
      duration: "2018 – 2022",
      grade: "8.6 CGPA",
    },
  ],

  projects: [
    {
      name: "3D Portfolio",
      techStack: ["Next.js", "Three.js", "Tailwind", "shadcn/ui"],
      description:
        "An interactive 3D resume experience built with React Three Fiber and animated UI. Includes orbit control, depth shadows, and modals.",
      link: "https://your3dportfolio.vercel.app",
      github: "https://github.com/yourname/3d-portfolio",
    },
    {
      name: "E-Commerce Dashboard",
      techStack: ["React", "Redux", "Chart.js", "Firebase"],
      description:
        "Admin dashboard with charts, analytics, and real-time order tracking.",
      link: "https://ecom-admin.vercel.app",
      github: "https://github.com/yourname/ecom-dashboard",
    },
  ],

  achievements: [
    "🏆 Winner – UI/UX Hackathon 2023 by DevFolio",
    "💡 Top 10 – CodeCraft 2.0 (out of 5,000 participants)",
    "📜 Certified – AWS Cloud Practitioner",
    "🚀 Completed 100+ DSA problems on LeetCode",
  ],

  testimonials: [
    {
      name: "Ravi Mehta",
      position: "Team Lead at TechNova",
      feedback:
        "Aman brings creativity and technical depth. His 3D UI implementation amazed our clients!",
    },
    {
      name: "Neha Bansal",
      position: "Mentor, WebVerse Studio",
      feedback:
        "Very quick learner with a strong eye for design and user experience. Always delivers on time.",
    },
  ],

  contact: {
    email: "aman.sharma.dev@gmail.com",
    phone: "+91-9876543210",
    location: "New Delhi, India",
    linkedin: "https://linkedin.com/in/aman-sharma-dev",
    github: "https://github.com/amansharma-dev",
    portfolio: "https://your3dportfolio.vercel.app",
  },
};

export default resumeData;
