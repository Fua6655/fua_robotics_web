"use client";

import { useState } from "react";

const content = {
  en: {
    date: "February 16, 2026",
    label: "Global Policy & Architecture",
    title: "NIST vs ISO vs EU AI Act — Technical Implications for ROS2 HRI Systems",
    lead:
      "A system-level comparison of global AI governance models and how they map directly onto ROS2-based robotic architectures.",
    sections: [
      {
        title: "Why This Matters for ROS2",
        paragraphs: [
          "ROS2 is not just middleware. It is a distributed computational fabric coordinating perception, planning, control, and safety layers.",
          "When AI components are integrated into ROS2 nodes, governance frameworks (NIST, ISO, EU AI Act) translate directly into architectural constraints.",
          "Compliance is no longer legal documentation alone — it becomes system design."
        ]
      },
      {
        title: "NIST AI Risk Management Framework (USA)",
        paragraphs: [
          "NIST AI RMF is voluntary and structured around four core functions:",
          "• Govern",
          "• Map",
          "• Measure",
          "• Manage",
          "ROS2 Implications:",
          "• Govern: Organizational control over model lifecycle → versioned model nodes, documented dependencies, controlled deployment pipelines.",
          "• Map: Identify system risks and affected stakeholders → hazard mapping between nodes (perception → planner → controller).",
          "• Measure: Quantify performance and failure modes → logging, rosbag2 data capture, performance metrics, latency profiling of safety-critical nodes.",
          "• Manage: Continuous monitoring → health-check supervisors, watchdog nodes, runtime anomaly detection.",
          "NIST is architecture-flexible. It does not mandate a specific design — but requires structured oversight."
        ]
      },
      {
        title: "ISO/IEC Framework (Global Industrial Model)",
        paragraphs: [
          "ISO/IEC 42001 formalizes AI management systems. ISO/IEC 42005 formalizes AI impact assessment.",
          "ROS2 Implications:",
          "Unlike NIST, ISO frameworks push toward certifiable compliance.",
          "• Documented safety cases per subsystem",
          "• Traceability of model outputs",
          "• Formal hazard logs",
          "• Defined escalation procedures",
          "For ROS2 this often results in:",
          "• Hard real-time safety node acting as deterministic gatekeeper",
          "• AI planner isolated from actuator-level control",
          "• Dual-channel verification for high-risk commands",
          "ISO assumes structured industrial validation cycles."
        ]
      },
      {
        title: "EU AI Act (Europe)",
        paragraphs: [
          "The EU AI Act classifies systems by risk.",
          "High-risk robotic systems must demonstrate:",
          "• risk management system",
          "• data governance controls",
          "• technical documentation",
          "• human oversight capability",
          "• robustness and cybersecurity safeguards",
          "ROS2 Implications:",
          "EU compliance directly affects architecture:",
          "• AI nodes must be interruptible",
          "• Manual override must be deterministic",
          "• Fallback behaviors must be pre-defined",
          "• Security hardening of DDS communication layer",
          "Unlike NIST (voluntary), the EU AI Act is legally binding."
        ]
      },
      {
        title: "Architectural Comparison in ROS2 Context",
        paragraphs: [
          "NIST: encourages structured monitoring but leaves architecture open.",
          "ISO: pushes toward certifiable, documented, safety-case-based structure.",
          "EU AI Act: enforces legal compliance and human override.",
          "In ROS2 terms:",
          "• NIST = governance layer",
          "• ISO = structured safety documentation layer",
          "• EU AI Act = legal constraint layer",
          "All three converge on one principle: AI must not directly control actuators without deterministic supervision."
        ]
      },
      {
        title: "Recommended ROS2 Safety Architecture",
        paragraphs: [
          "For globally deployable robotic systems:",
          "1. AI perception node (non-deterministic)",
          "2. Behavior planning node (semi-deterministic)",
          "3. Deterministic safety supervisor (hard real-time)",
          "4. Actuator control node (restricted command set)",
          "No AI-generated command should bypass the safety supervisor."
        ]
      },
      {
        title: "Conclusion",
        paragraphs: [
          "Regulatory convergence is clear.",
          "Regardless of geography, safe HRI design requires:",
          "• deterministic safety core",
          "• AI traceability",
          "• human override",
          "• continuous monitoring",
          "In modern robotics, compliance is architecture."
        ]
      }
    ]
  },
  hr: {
    date: "16. veljače 2026.",
    label: "Globalna politika & arhitektura",
    title:
      "NIST vs ISO vs EU AI Act — tehničke implikacije za ROS2 HRI sustave",
    lead:
      "Usporedba na razini sustava globalnih modela AI governancea i kako se direktno mapiraju na ROS2 robotske arhitekture.",
    sections: [
      {
        title: "Zašto je ovo važno za ROS2",
        paragraphs: [
          "ROS2 nije samo middleware. To je distribuirana računalna infrastruktura koja koordinira percepciju, planiranje, kontrolu i sigurnosne slojeve.",
          "Kada se AI komponente integriraju u ROS2 nodeove, governance okviri (NIST, ISO, EU AI Act) izravno se prevode u arhitekturna ograničenja.",
          "Usklađenost više nije samo pravna dokumentacija — postaje dizajn sustava."
        ]
      },
      {
        title: "NIST AI Risk Management Framework (SAD)",
        paragraphs: [
          "NIST AI RMF je dobrovoljan i strukturiran oko četiri ključne funkcije:",
          "• Govern",
          "• Map",
          "• Measure",
          "• Manage",
          "ROS2 implikacije:",
          "• Govern: organizacijska kontrola nad životnim ciklusom modela → verzionirani model nodeovi, dokumentirane ovisnosti, kontrolirani deployment pipelineovi.",
          "• Map: identifikacija sistemskih rizika i dionika → mapiranje hazarda između nodeova (percepcija → planer → kontroler).",
          "• Measure: kvantifikacija performansi i failure modova → logiranje, rosbag2 snimanje podataka, metrike performansi, latency profiling safety‑kritičnih nodeova.",
          "• Manage: kontinuirani nadzor → health‑check supervisori, watchdog nodeovi, runtime detekcija anomalija.",
          "NIST je fleksibilan po pitanju arhitekture. Ne propisuje specifičan dizajn — ali zahtijeva strukturirani nadzor."
        ]
      },
      {
        title: "ISO/IEC okvir (globalni industrijski model)",
        paragraphs: [
          "ISO/IEC 42001 formalizira AI management sustave. ISO/IEC 42005 formalizira procjenu utjecaja AI sustava.",
          "ROS2 implikacije:",
          "Za razliku od NIST-a, ISO okviri guraju prema certificiranoj usklađenosti.",
          "• dokumentirani safety caseovi po podsustavu",
          "• sljedivost izlaza modela",
          "• formalni hazard logovi",
          "• definirane eskalacijske procedure",
          "Za ROS2 to često rezultira:",
          "• hard real‑time safety node kao deterministički gatekeeper",
          "• AI planer izoliran od aktuatorskog upravljanja",
          "• dual‑channel verifikacija za visokorizične komande",
          "ISO pretpostavlja strukturirane industrijske validacijske cikluse."
        ]
      },
      {
        title: "EU AI Act (Europa)",
        paragraphs: [
          "EU AI Act klasificira sustave prema riziku.",
          "Visokorizični robotski sustavi moraju dokazati:",
          "• sustav upravljanja rizicima",
          "• kontrole data governancea",
          "• tehničku dokumentaciju",
          "• mogućnost ljudskog nadzora",
          "• robusnost i kibernetičku sigurnost",
          "ROS2 implikacije:",
          "Usklađenost s EU izravno utječe na arhitekturu:",
          "• AI nodeovi moraju biti prekidivi",
          "• ručni override mora biti determinističan",
          "• fallback ponašanja moraju biti predefinirana",
          "• sigurnosno očvršćivanje DDS komunikacijskog sloja",
          "Za razliku od NIST-a (dobrovoljan), EU AI Act je pravno obvezujući."
        ]
      },
      {
        title: "Arhitekturna usporedba u ROS2 kontekstu",
        paragraphs: [
          "NIST: potiče strukturirani monitoring, ali ostavlja arhitekturu otvorenom.",
          "ISO: gura prema certificiranoj, dokumentiranoj strukturi temeljenoj na safety caseovima.",
          "EU AI Act: nameće pravnu usklađenost i ljudski override.",
          "U ROS2 terminima:",
          "• NIST = governance sloj",
          "• ISO = sloj strukturirane sigurnosne dokumentacije",
          "• EU AI Act = sloj pravnih ograničenja",
          "Sva tri se konvergiraju na jedno načelo: AI ne smije izravno kontrolirati aktuatore bez determinističkog nadzora."
        ]
      },
      {
        title: "Preporučena ROS2 sigurnosna arhitektura",
        paragraphs: [
          "Za globalno deployabilne robotske sustave:",
          "1. AI node za percepciju (nedeterministički)",
          "2. Node za planiranje ponašanja (polu‑deterministički)",
          "3. Deterministički safety supervisor (hard real‑time)",
          "4. Aktuatorski kontrolni node (ograničen skup komandi)",
          "Nijedna AI‑generirana komanda ne smije zaobići safety supervisora."
        ]
      },
      {
        title: "Zaključak",
        paragraphs: [
          "Regulatorna konvergencija je jasna.",
          "Bez obzira na geografiju, siguran HRI dizajn zahtijeva:",
          "• deterministički sigurnosni core",
          "• sljedivost AI‑a",
          "• ljudski override",
          "• kontinuirani nadzor",
          "U modernoj robotici, usklađenost je arhitektura."
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

      <article className="max-w-3xl mx-auto px-6 py-12 space-y-10 leading-relaxed text-[17px]">
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
