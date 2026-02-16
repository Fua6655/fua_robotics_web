"use client";

import { useState } from "react";

const content = {
  en: {
    date: "February 16, 2026",
    label: "Standards & Engineering",
    title: "ISO & IEC Standards for Human–Robot Interaction",
    lead:
      "A technical breakdown of the standards shaping safe human–robot interaction and what recent updates mean for modern robotic systems.",
    sections: [
      {
        title: "Introduction",
        paragraphs: [
          "Human–Robot Interaction (HRI) has evolved from isolated industrial environments to collaborative, public, and mobile robotic systems. This transition required a parallel evolution of safety standards.",
          "Today, safe robotic deployment depends not only on mechanical safeguards but on structured system architecture, AI governance, and deterministic control hierarchies."
        ]
      },
      {
        title: "ISO 10218 — Industrial Robot Safety",
        paragraphs: [
          "ISO 10218-1 and ISO 10218-2 define safety requirements for industrial robots and robot systems. The standard addresses:",
          "• mechanical safety and guarding",
          "• safety-rated control systems",
          "• risk assessment methodology",
          "• system integration requirements",
          "Recent revisions modernize how robot systems interface with distributed software architectures, reflecting the reality of modular robotic cells and networked systems."
        ]
      },
      {
        title: "ISO/TS 15066 — Collaborative Robots",
        paragraphs: [
          "ISO/TS 15066 extends ISO 10218 to collaborative applications where humans and robots share workspace.",
          "It defines four collaborative modes:",
          "• Safety-rated monitored stop",
          "• Hand guiding",
          "• Speed and separation monitoring",
          "• Power and force limiting",
          "The specification includes biomechanical force and pressure limits, transforming safety from purely spatial separation into measurable human-impact thresholds.",
          "This shifts HRI from “avoid contact” to “safe contact under controlled constraints.”"
        ]
      },
      {
        title: "ISO 13482 — Service Robots",
        paragraphs: [
          "ISO 13482 applies to service robots operating outside industrial settings — including public, medical, and assistive environments.",
          "The standard addresses mobile platforms, personal care robots, and human-proximate systems, emphasizing:",
          "• environmental unpredictability",
          "• human behavioral variability",
          "• risk mitigation in open spaces"
        ]
      },
      {
        title: "ISO/IEC 42005 — AI Impact Assessment",
        paragraphs: [
          "ISO/IEC 42005 introduces structured AI system impact assessment.",
          "It requires:",
          "• stakeholder identification",
          "• risk categorization",
          "• foreseeable misuse analysis",
          "• mitigation documentation",
          "In HRI systems, this extends safety beyond mechanics to include decision-making, perception reliability, and communication outputs."
        ]
      },
      {
        title: "ISO/IEC 42001 — AI Management Systems",
        paragraphs: [
          "ISO/IEC 42001 defines requirements for AI management systems. It formalizes:",
          "• lifecycle governance",
          "• documentation and traceability",
          "• incident reporting",
          "• continuous monitoring",
          "For robotic systems integrating AI components, this effectively mandates explainability and operational oversight structures."
        ]
      },
      {
        title: "What Has Changed",
        paragraphs: [
          "The evolution of standards reflects a fundamental shift:",
          "• From physical safety to system-level safety",
          "• From static risk assessment to dynamic monitoring",
          "• From hardware protection to AI governance integration",
          "Modern HRI requires deterministic safety kernels supervising AI-driven subsystems, ensuring no autonomous decision bypasses physical safety constraints."
        ]
      },
      {
        title: "Conclusion",
        paragraphs: [
          "The convergence of robotics safety standards and AI governance standards marks the beginning of a new engineering paradigm.",
          "Safe HRI is no longer defined by distance alone — it is defined by architecture, traceability, supervision, and structured control hierarchy."
        ]
      }
    ]
  },
  hr: {
    date: "16. veljače 2026.",
    label: "Standardi & inženjering",
    title: "ISO i IEC standardi za interakciju čovjek–robot",
    lead:
      "Tehnički pregled standarda koji oblikuju sigurnu interakciju čovjek–robot i što nedavna ažuriranja znače za moderne robotske sustave.",
    sections: [
      {
        title: "Uvod",
        paragraphs: [
          "Interakcija čovjek–robot (HRI) evoluirala je iz izoliranih industrijskih okruženja u kolaborativne, javne i mobilne robotske sustave. Ova tranzicija zahtijevala je paralelnu evoluciju sigurnosnih standarda.",
          "Danas sigurno uvođenje robota ovisi ne samo o mehaničkim zaštitama nego i o strukturiranoj arhitekturi sustava, AI governanceu i determinističkim hijerarhijama kontrole."
        ]
      },
      {
        title: "ISO 10218 — sigurnost industrijskih robota",
        paragraphs: [
          "ISO 10218-1 i ISO 10218-2 definiraju sigurnosne zahtjeve za industrijske robote i robotske sustave. Standard obuhvaća:",
          "• mehaničku sigurnost i zaštitu",
          "• sigurnosno‑ocijenjene kontrolne sustave",
          "• metodologiju procjene rizika",
          "• zahtjeve za integraciju sustava",
          "Nedavne revizije moderniziraju način na koji se robotski sustavi povezuju s distribuiranim softverskim arhitekturama, odražavajući realnost modularnih robotskih ćelija i umreženih sustava."
        ]
      },
      {
        title: "ISO/TS 15066 — kolaborativni roboti",
        paragraphs: [
          "ISO/TS 15066 proširuje ISO 10218 na kolaborativne primjene gdje ljudi i roboti dijele radni prostor.",
          "Definira četiri kolaborativna režima:",
          "• safety‑rated monitored stop",
          "• hand guiding",
          "• speed and separation monitoring",
          "• power and force limiting",
          "Specifikacija uključuje biomehaničke granice sile i pritiska, čime se sigurnost iz čiste prostorne separacije pretvara u mjerljive pragove utjecaja na čovjeka.",
          "Ovo pomiče HRI iz “izbjegni kontakt” u “siguran kontakt pod kontroliranim ograničenjima”."
        ]
      },
      {
        title: "ISO 13482 — servisni roboti",
        paragraphs: [
          "ISO 13482 odnosi se na servisne robote izvan industrijskih okruženja — uključujući javne, medicinske i asistivne primjene.",
          "Standard obuhvaća mobilne platforme, robote za osobnu njegu i sustave koji rade u blizini ljudi, uz naglasak na:",
          "• nepredvidivost okoline",
          "• varijabilnost ljudskog ponašanja",
          "• mitigaciju rizika u otvorenim prostorima"
        ]
      },
      {
        title: "ISO/IEC 42005 — procjena utjecaja AI sustava",
        paragraphs: [
          "ISO/IEC 42005 uvodi strukturiranu procjenu utjecaja AI sustava.",
          "Zahtijeva:",
          "• identifikaciju dionika",
          "• kategorizaciju rizika",
          "• analizu predvidive zlouporabe",
          "• dokumentiranje mitigacija",
          "U HRI sustavima ovo proširuje sigurnost izvan mehanike na donošenje odluka, pouzdanost percepcije i komunikacijske izlaze."
        ]
      },
      {
        title: "ISO/IEC 42001 — AI management sustavi",
        paragraphs: [
          "ISO/IEC 42001 definira zahtjeve za AI management sustave. Formalizira:",
          "• upravljanje životnim ciklusom",
          "• dokumentaciju i sljedivost",
          "• prijavu incidenata",
          "• kontinuirani monitoring",
          "Za robotske sustave koji integriraju AI komponente, to učinkovito nameće objašnjivost i operativne nadzorne strukture."
        ]
      },
      {
        title: "Što se promijenilo",
        paragraphs: [
          "Evolucija standarda odražava temeljni pomak:",
          "• od fizičke sigurnosti prema sigurnosti na razini sustava",
          "• od statičke procjene rizika prema dinamičkom nadzoru",
          "• od hardverske zaštite prema integraciji AI governancea",
          "Moderni HRI zahtijeva determinističke safety kernel slojeve koji nadziru AI‑vođene podsustave, osiguravajući da nijedna autonomna odluka ne može zaobići fizička sigurnosna ograničenja."
        ]
      },
      {
        title: "Zaključak",
        paragraphs: [
          "Konvergencija sigurnosnih standarda robotike i AI governance standarda označava početak nove inženjerske paradigme.",
          "Siguran HRI više nije definiran samo udaljenošću — već arhitekturom, sljedivošću, nadzorom i strukturiranom hijerarhijom kontrole."
        ]
      }
    ]
  }
};

function Paragraph({ text }: { text: string }) {
  if (text.startsWith("• ")) {
    return <li>{text.slice(2)}</li>;
  }
  if (/^\d+\.\s/.test(text)) {
    return <li>{text.replace(/^\d+\.\s/, "")}</li>;
  }
  return <p>{text}</p>;
}

export default function Post() {
  const [lang, setLang] = useState<"en" | "hr">("en");
  const t = content[lang];

  return (
    <main className="bg-white text-neutral-900 min-h-screen">
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

      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-sm uppercase tracking-wide text-neutral-500 mb-2">
            {t.label}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-4">
            {t.date}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            {t.title}
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            {t.lead}
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="max-w-3xl mx-auto px-6 py-12 space-y-8 leading-relaxed text-[17px]">
        {t.sections.map((section) => {
          const bullets = section.paragraphs.filter((p) => p.startsWith("• "));
          const ordered = section.paragraphs.filter((p) => /^\d+\.\s/.test(p));
          const normal = section.paragraphs.filter(
            (p) => !p.startsWith("• ") && !/^\d+\.\s/.test(p)
          );

          return (
            <section key={`${section.title}-${section.paragraphs[0]}`} className="space-y-4">
              <h2 className="text-2xl font-semibold">{section.title}</h2>

              {normal.map((text) => (
                <Paragraph key={text} text={text} />
              ))}

              {bullets.length ? (
                <ul className="list-disc pl-6 space-y-2">
                  {bullets.map((text) => (
                    <Paragraph key={text} text={text} />
                  ))}
                </ul>
              ) : null}

              {ordered.length ? (
                <ol className="list-decimal pl-6 space-y-2">
                  {ordered.map((text) => (
                    <Paragraph key={text} text={text} />
                  ))}
                </ol>
              ) : null}
            </section>
          );
        })}
      </article>

    </main>
  );
}
