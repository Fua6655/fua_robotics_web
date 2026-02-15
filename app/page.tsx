"use client";

import { useState } from "react";
import en from "@/messages/en.json";
import hr from "@/messages/hr.json";

export default function Home() {
  const [lang, setLang] = useState<"en" | "hr">("en");

  const t = lang === "hr" ? hr : en;

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Language Switch */}
      <div className="flex justify-end gap-4 p-6">
        <button
          onClick={() => setLang("hr")}
          className={`px-4 py-2 rounded-full border ${
            lang === "hr" ? "bg-black text-white" : ""
          }`}
        >
          🇭🇷 Hrvatski
        </button>
        <button
          onClick={() => setLang("en")}
          className={`px-4 py-2 rounded-full border ${
            lang === "en" ? "bg-black text-white" : ""
          }`}
        >
          🇬🇧 English
        </button>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center border-b">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          FUA Robotics
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          {t.tagline}
        </p>
        <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          {t.hero}
        </p>
      </section>

      {/* Project Overview */}
      <section className="px-8 py-20 max-w-5xl mx-auto border-b">
        <h2 className="text-3xl font-semibold">
          {t.sectionAboutTitle}
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {t.sectionAboutText}
        </p>
      </section>

      {/* Autonomy Levels */}
      <section className="px-8 py-20 max-w-5xl mx-auto border-b">
        <h2 className="text-3xl font-semibold">
          {t.sectionAutonomyTitle}
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {t.sectionAutonomyText}
        </p>
      </section>

      {/* Technology */}
      <section className="px-8 py-20 max-w-5xl mx-auto border-b">
        <h2 className="text-3xl font-semibold">
          {t.sectionTechTitle}
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {t.sectionTechText}
        </p>
      </section>

      {/* Safety */}
      <section className="px-8 py-20 max-w-5xl mx-auto border-b">
        <h2 className="text-3xl font-semibold">
          {t.sectionSafetyTitle}
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {t.sectionSafetyText}
        </p>
      </section>

      {/* Validation */}
      <section className="px-8 py-20 max-w-5xl mx-auto border-b">
        <h2 className="text-3xl font-semibold">
          {t.sectionValidationTitle}
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {t.sectionValidationText}
        </p>
      </section>

      {/* Reusability */}
      <section className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">
          {t.sectionReuseTitle}
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          {t.sectionReuseText}
        </p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 bg-gray-900 text-white text-center mt-20">
        <p className="text-lg font-semibold">FUA Robotics</p>
        <p className="text-sm text-gray-400 mt-3">
          © {new Date().getFullYear()} Field Urban Automation. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
