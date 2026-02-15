"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import en from "@/messages/en.json";
import hr from "@/messages/hr.json";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "hr">("en");
  const t = lang === "hr" ? hr : en;

  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 500], [0, 8]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <motion.div
      style={{ opacity }}
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden"
    >

      {/* Background Blur Layer */}
      <motion.div
        style={{ filter: blur }}
        className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white"
      />

      {/* Language Switch */}
      <div className="flex justify-end gap-4 p-8">
        <button
          onClick={() => setLang("hr")}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            lang === "hr" ? "bg-black text-white" : "hover:bg-gray-100"
          }`}
        >
          🇭🇷 Hrvatski
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            lang === "en" ? "bg-black text-white" : "hover:bg-gray-100"
          }`}
        >
          🇬🇧 English
        </button>
      </div>

      {/* Hero */}
      <section className="px-8 py-48 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.2 }}
          className="text-7xl md:text-8xl font-medium tracking-tight"
        >
          FUA Robotics
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 text-2xl text-gray-500 max-w-2xl mx-auto"
        >
          {t.tagline}
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero}
        </motion.p>
      </section>

      {/* Architecture */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-44 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium tracking-tight">
            {t.sectionArchitectureTitle}
          </h2>
          <p className="mt-14 text-lg text-gray-600 leading-relaxed">
            {t.sectionTechText}
          </p>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed">
            {t.sectionArchitectureExtra}
          </p>
        </div>
      </motion.section>

      {/* Autonomy */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-44 bg-gray-50 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium tracking-tight">
            {t.sectionAutonomyTitle}
          </h2>
          <p className="mt-14 text-lg text-gray-600 leading-relaxed">
            {t.sectionAutonomyText}
          </p>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed">
            {t.sectionAutonomyExtra}
          </p>
        </div>
      </motion.section>

      {/* Safety */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-44 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium tracking-tight">
            {t.sectionSafetyTitleAlt}
          </h2>
          <p className="mt-14 text-lg text-gray-600 leading-relaxed">
            {t.sectionSafetyText}
          </p>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed">
            {t.sectionSafetyExtra}
          </p>
        </div>
      </motion.section>

      {/* Validation */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-44 bg-gray-50 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-medium tracking-tight">
            {t.sectionValidationTitleAlt}
          </h2>
          <p className="mt-14 text-lg text-gray-600 leading-relaxed">
            {t.sectionValidationText}
          </p>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed">
            {t.sectionValidationExtra}
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-8 py-28 text-center border-t">
        <p className="text-lg font-medium">FUA Robotics</p>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Field Urban Automation. All rights reserved.
        </p>
      </footer>

    </motion.div>
  );
}
