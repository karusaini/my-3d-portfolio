"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10 max-w-5xl mx-auto">
      <Tilt
        glareEnable={false}
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        scale={1.01}
        transitionSpeed={2000}
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-black mb-6 tracking-tight">
            About Me
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            I’m a full-stack developer with a passion for 3D design, frontend
            engineering, and creating immersive web experiences. I specialize in
            modern tools like React, Three.js, and TailwindCSS to develop
            performant, visually engaging applications.
          </p>
        </motion.div>
      </Tilt>
    </section>
  );
}
