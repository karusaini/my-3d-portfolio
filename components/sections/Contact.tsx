"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10 text-black dark:text-white"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl space-y-6"
      >
        <input
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-white/5 text-black dark:text-white placeholder-gray-500 dark:placeholder-white/40 transition-transform focus:scale-[1.02] outline-none"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-white/5 text-black dark:text-white placeholder-gray-500 dark:placeholder-white/40 transition-transform focus:scale-[1.02] outline-none"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-white/5 text-black dark:text-white placeholder-gray-500 dark:placeholder-white/40 transition-transform focus:scale-[1.02] outline-none"
          placeholder="Message"
          rows={5}
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
