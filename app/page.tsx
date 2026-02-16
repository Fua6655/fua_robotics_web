"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import en from "@/messages/en.json";
import hr from "@/messages/hr.json";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "hr">("hr");
  const t = lang === "hr" ? hr : en;

  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 500], [0, 8]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <motion.div
      style={{ opacity }}
      className="min-h-screen bg-white text-gray-900 overflow-x-hidden"
    >
      <motion.div
        style={{ filter: blur }}
        className="fixed inset-0 -z-10 bg-gradient-to-b from-white via-gray-50 to-white"
      />

      <header className="flex flex-wrap items-center justify-between gap-4 px-8 py-8">
        <div className="flex items-center gap-6">
          <span className="text-sm tracking-widest uppercase text-gray-500">
            FUA Robotics
          </span>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            {t.navBlog}
          </Link>
        </div>
        <div className="flex gap-4">
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
      </header>

      <section className="px-8 py-24 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-7xl font-medium tracking-tight"
        >
          {t.homeTitle}
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-10 text-xl text-gray-500 max-w-3xl mx-auto"
        >
          {t.homeLead}
        </motion.p>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-24"
      >
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {t.homeAboutTitle}
          </h2>
          <p>{t.homeAboutBody}</p>
          <p>{t.homeAboutBody2}</p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-24 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {t.homePlatformsTitle}
          </h2>
          <p>{t.homePlatformsBody}</p>
          <p>{t.homePlatformsBody2}</p>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-24"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {t.sectionBlogTitle}
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl">
            {t.homeBlogIntro}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 text-left">
            <article className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {t.sectionBlogTitle}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {t.blogPostAgriTitle}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.blogPostAgriExcerpt}
              </p>
              <Link
                href="/blog/mobilna-robotika"
                className="inline-flex mt-6 items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                {t.blogRead}
                <span aria-hidden>→</span>
              </Link>
            </article>

            <article className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {t.sectionBlogTitle}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {hr.blogPostHmiTitle}
                </h3>
                <span className="text-xs uppercase tracking-widest text-gray-400">
                  {t.blogPostCroOnly}
                </span>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {hr.blogPostHmiExcerpt}
              </p>
              <Link
                href="/blog/hmi"
                className="inline-flex mt-6 items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                {t.blogRead}
                <span aria-hidden>→</span>
              </Link>
            </article>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 1 }}
        className="px-8 py-24 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            {t.homeContactTitle}
          </h2>
          <p className="mt-6 text-lg text-gray-600">{t.homeContactBody}</p>
          <p className="mt-4 text-lg font-medium text-gray-900">
            {t.homeContactEmail}
          </p>
        </div>
      </motion.section>

      <footer className="px-8 py-20 text-center border-t">
        <p className="text-lg font-medium">FUA Robotics</p>
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Field Urban Automation. All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
}
