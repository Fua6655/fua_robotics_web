"use client";

import { useState } from "react";
import Link from "next/link";
import en from "@/messages/en.json";
import hr from "@/messages/hr.json";

export default function BlogIndex() {
  const [lang, setLang] = useState<"en" | "hr">("en");
  const t = lang === "hr" ? hr : en;
  const hmi = hr;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex flex-wrap items-center justify-between gap-4 px-8 py-8">
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            FUA Robotics
          </a>
          <a
            href="/blog"
            className="text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            {t.navBlog}
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

      <section className="px-8 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          {t.sectionBlogTitle}
        </h1>
        <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
          {t.sectionBlogIntro}
        </p>
      </section>

      <section className="px-8 pb-24">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-gray-200 p-8 bg-white shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              {t.sectionBlogTitle}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {t.blogPostAgriTitle}
            </h2>
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
              <h2 className="text-2xl font-semibold text-gray-900">
                {hmi.blogPostHmiTitle}
              </h2>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                {t.blogPostCroOnly}
              </span>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {hmi.blogPostHmiExcerpt}
            </p>
            <Link
              href="/blog/hmi"
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
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {t.blogPostAiTitle}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t.blogPostAiExcerpt}
            </p>
            <Link
              href="/blog/ai-agent-incident"
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
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {t.blogPostChinaTitle}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t.blogPostChinaExcerpt}
            </p>
            <Link
              href="/blog/kina-2025"
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
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {t.blogPostIsoTitle}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t.blogPostIsoExcerpt}
            </p>
            <Link
              href="/blog/iso-iec-hri"
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
            <h2 className="mt-4 text-2xl font-semibold text-gray-900">
              {t.blogPostGlobalTitle}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t.blogPostGlobalExcerpt}
            </p>
            <Link
              href="/blog/global-hri-safety"
              className="inline-flex mt-6 items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-700"
            >
              {t.blogRead}
              <span aria-hidden>→</span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
