import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hr" }];
}

export default function Page({ params }: { params: { lang: string } }) {
  const lang = params.lang === "hr" ? "hr" : "en";

  const content = {
    en: {
      tagline: "Field Urban Automation",
      hero: "Building autonomous systems for agriculture, cities, and public infrastructure. Scalable robotics platforms engineered for real-world, human-shared environments.",
      divisions: "Our Divisions",
      fieldTitle: "Field Division",
      fieldDesc: "Autonomous agricultural machinery for planting, spraying, monitoring, and precision farming.",
      urbanTitle: "Urban Division",
      urbanDesc: "Autonomous vehicles and municipal robots for smart cities and public infrastructure.",
      market: "Market Opportunity",
      marketDesc: "Precision agriculture and smart city automation represent multi-billion dollar global markets driven by labor shortages and sustainability demands."
    },
    hr: {
      tagline: "Field Urban Automation",
      hero: "Razvijamo autonomne sustave za poljoprivredu, gradove i javnu infrastrukturu. Skalabilne robotske platforme dizajnirane za rad u stvarnim okruženjima uz prisutnost ljudi.",
      divisions: "Naše Divizije",
      fieldTitle: "Poljoprivredna Divizija",
      fieldDesc: "Autonomni strojevi za sadnju, prskanje, nadzor i preciznu poljoprivredu.",
      urbanTitle: "Urbana Divizija",
      urbanDesc: "Autonomna vozila i komunalni roboti za pametne gradove i javne površine.",
      market: "Tržišna Prilika",
      marketDesc: "Precizna poljoprivreda i automatizacija pametnih gradova predstavljaju višemilijardna globalna tržišta potaknuta nedostatkom radne snage i zahtjevima održivosti."
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Language Switch */}
      <div className="flex justify-end gap-4 p-6">
        <Link
          href="/hr"
          className={`px-4 py-2 rounded-full border ${
            lang === "hr" ? "bg-black text-white" : ""
          }`}
        >
          🇭🇷 Hrvatski
        </Link>
        <Link
          href="/en"
          className={`px-4 py-2 rounded-full border ${
            lang === "en" ? "bg-black text-white" : ""
          }`}
        >
          🇬🇧 English
        </Link>
      </div>

      {/* Hero */}
      <section className="px-8 py-24 text-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          FUA Robotics
        </h1>
        <p className="mt-4 text-xl text-gray-600">{t.tagline}</p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500">
          {t.hero}
        </p>
      </section>

      {/* Divisions */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center">{t.divisions}</h2>

        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <div className="p-8 border rounded-2xl">
            <h3 className="text-2xl font-semibold">{t.fieldTitle}</h3>
            <p className="mt-4 text-gray-600">{t.fieldDesc}</p>
          </div>

          <div className="p-8 border rounded-2xl">
            <h3 className="text-2xl font-semibold">{t.urbanTitle}</h3>
            <p className="mt-4 text-gray-600">{t.urbanDesc}</p>
          </div>
        </div>
      </section>

      {/* Market */}
      <section className="px-8 py-24 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold">{t.market}</h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          {t.marketDesc}
        </p>
      </section>

      {/* Footer */}
      <footer className="px-8 py-10 bg-black text-white text-center">
        <p className="text-lg font-semibold">FUA Robotics</p>
        <p className="text-sm text-gray-400 mt-2">
          © {new Date().getFullYear()} Field Urban Automation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
