"use client";

import { useState } from "react";
import en from "@/messages/en.json";
import hr from "@/messages/hr.json";

export default function Post() {
  const [lang, setLang] = useState<"en" | "hr">("en");
  const t = lang === "hr" ? hr : en;

  const sections = [
    {
      title: t.sectionAboutTitle,
      paragraphs: [t.sectionAboutText]
    },
    {
      title: t.sectionTechTitle,
      paragraphs: [t.sectionTechText]
    },
    {
      title: t.sectionArchitectureTitle,
      paragraphs: [t.sectionArchitectureExtra]
    },
    {
      title: t.sectionAutonomyTitle,
      paragraphs: [t.sectionAutonomyText, t.sectionAutonomyExtra]
    },
    {
      title: t.sectionSafetyTitle,
      paragraphs: [t.sectionSafetyText, t.sectionSafetyExtra]
    },
    {
      title: t.sectionValidationTitle,
      paragraphs: [t.sectionValidationText, t.sectionValidationExtra]
    },
    {
      title: t.sectionReuseTitle,
      paragraphs: [t.sectionReuseText]
    }
  ];

  return (
    <main className="bg-white text-neutral-800 min-h-screen">
      <header className="flex flex-wrap items-center justify-between gap-4 px-8 py-8">
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-medium text-neutral-800 hover:text-neutral-600"
          >
            FUA Robotics
          </a>
          <a
            href="/blog"
            className="text-sm font-medium text-neutral-700 hover:text-neutral-500"
          >
            Blog
          </a>
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

      <section className="relative border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">
            {t.sectionBlogTitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            {t.blogPostAgriTitle}
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            {t.blogAgriHero}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-20 space-y-12 leading-relaxed text-[17px]">
        {sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={`${section.title}-${index}`}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>

      <section className="border-t border-neutral-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-neutral-600">
            {t.blogPostAgriExcerpt}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/blog/hmi"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              <span aria-hidden>←</span>
              Prethodna tema
            </a>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-400"
              aria-disabled="true"
            >
              Sljedeća tema
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
