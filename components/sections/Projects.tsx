"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import ThreeBackground from "@/components/ThreeBackground";

type Project = {
  title: string;
  description: string;
  liveUrl: string;
  codeUrl: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Item Listing App",
    description:
      "Users can add items with images and details, view them in a list, and send enquiries via a modal with image carousel and EmailJS form",
    liveUrl: "https://my-intern-project-psi.vercel.app",
    codeUrl: "https://github.com/karusaini/my-intern-project",
    image: "/projects/shopping.png",
  },
  {
    title: "Crypto-tracker",
    description:
      "A real-time cryptocurrency tracking app built with Next.js, TailwindCSS, and ShadCN UI, displaying live price updates and market data in a clean, responsive interface.",
    liveUrl: "https://crypto-tracker-liart-eight.vercel.app/",
    codeUrl: "https://github.com/karusaini/crypto-tracker",
    image: "/projects/doge.svg",
  },
  {
    title: "Skincare Products Website",
    description:
      "Clean, responsive UI built with Next.js, TailwindCSS, and ShadCN UI, based on a custom Figma design.",
    liveUrl: "https://skincare-landing-website-4xoi.vercel.app",
    codeUrl: "https://github.com/karusaini/skincare-landing-website",
    image: "/projects/skincare.png",
  },
  {
    title: "Car Finder Website",
    description:
      "Car Finder is a modern, responsive car browsing web app built using Next.js, TypeScript, TailwindCSS, and ShadCN UI. It allows users to explore and filter cars based on various parameters like brand, year, fuel type, and more, with a beautiful and functional interface.",

    liveUrl: "https://car-finder-ten.vercel.app/",
    codeUrl: "https://github.com/karusaini/car-finder",
    image: "/projects/car.webp",
  },
  {
    title: "Github Analyzer",
    description:
      "GitHub Analyzer is a tool that shows GitHub user stats, top repositories, and language usage with a clean UI using Next.js, TailwindCSS, and ShadCN UI.",
    liveUrl: "https://github-analyzer-woad.vercel.app/",
    codeUrl: "https://github.com/karusaini/github-analyzer",
    image: "/projects/github.jpg",
  },
  {
    title: "Pollarbear App",
    description:
      "PollarBear lets you easily create and share polls to get real-time feedback—simple, fast, and effective for surveys, opinions, or team decisions.",
    liveUrl: "https://pollarbear-main.vercel.app/",
    codeUrl: "https://github.com/karusaini/pollarbear",
    image: "/projects/pollarbear.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <ThreeBackground />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-black mb-2">Projects</h2>
        <p className="text-gray-600 text-base md:text-lg">
          Visual work samples showcasing my experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={2000}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md p-4 flex flex-col h-full transition"
            >
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex  justify-center gap-3 mt-auto ">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-800 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-black text-black hover:bg-black hover:text-white transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
