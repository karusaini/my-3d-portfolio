"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiThreedotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiTypescript,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { RiCouponFill } from "react-icons/ri"; // ShadCN UI icon placeholder

const techStack = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DBFB",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    link: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#38B2AC",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    color: "#000000",
    link: "https://threejs.org/",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#3C873A",
    link: "https://nodejs.org/",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3FCF8E",
    link: "https://supabase.com/",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "ShadCN UI",
    icon: RiCouponFill,
    color: "#6366f1",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#000000",
    link: "https://github.com/",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#000000",
    link: "https://vercel.com/",
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center text-black dark:text-white">
        Tech Stack
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {techStack.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full"
              >
                <a
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="p-6 rounded-2xl shadow-xl backdrop-blur-xl bg-white/30 dark:bg-white/10 border border-white/20 transition-transform hover:scale-[1.03]">
                    <div className="flex items-center gap-4">
                      <Icon size={40} color={tech.color} />
                      <span className="text-xl font-semibold text-black dark:text-white">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </a>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
