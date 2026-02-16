import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HMI — Početak humanoidne faze u Hrvatskoj | FUA Robotics",
  description:
    "Analiza početka humanoidne robotike u Hrvatskoj, razvoj HRI sustava, ROS1 → ROS2 tranzicija i sigurnosni okvir moderne HMI robotike.",
  openGraph: {
    title: "HMI — Početak humanoidne faze u Hrvatskoj",
    description:
      "Dolazak humanoidnih robota u Hrvatsku označava novu fazu HMI i HRI sustava. Tehnička analiza razvoja i sigurnosnih temelja.",
    url: "https://fua-robotics.vercel.app/blog/hmi",
    siteName: "FUA Robotics",
    type: "article"
  }
};

export default function Page() {
  return (
    <main className="bg-white text-neutral-800">
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
      </header>

      {/* HERO SECTION */}
      <section className="relative border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm tracking-widest uppercase text-neutral-500 mb-4">
            HMI Series
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
            HMI — Početak humanoidne faze u Hrvatskoj
          </h1>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Dolazak prvog humanoidnog robota u Hrvatsku označava prijelaz iz eksperimentalne faze
            u fazu stvarne implementacije. Humanoidna robotika postaje infrastruktura interakcije
            između čovjeka i stroja.
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-10 leading-relaxed text-[17px]">
        <section>
          <p>Ovaj trenutak zahtijeva povratak temeljima.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold mt-10">Rani humanoidni sustavi u Hrvatskoj</h2>

          <p>
            Među prvim humanoidnim robotima prisutnima u Hrvatskoj bili su NAO robot i Pepper robot.
          </p>

          <p>
            Obje platforme razvijene su unutar tvrtke Aldebaran Robotics, prije nego što je tvrtku preuzeo SoftBank Robotics.
          </p>

          <p>
            NAO je predstavljao istraživačku i edukacijsku platformu za razvoj naprednih HRI eksperimenata.
            Pepper je pak otvorio novu dimenziju — socijalnu interakciju u javnom prostoru.
          </p>

          <p>
            U sklopu rada laboratorija LARICS realizirana je i kazališna predstava u kojoj je Pepper sudjelovao kao aktivni izvođač.
            U tom projektu ostvarena je:
          </p>

          <ul className="list-disc pl-6 space-y-1">
            <li>komunikacija robot–robot</li>
            <li>komunikacija robot–čovjek</li>
            <li>interakcija dva robota i jednog čovjeka u sinkroniziranom sustavu</li>
          </ul>

          <p>
            Cjelokupna interakcija bila je snimljena i analizirana, čime je demonstrirana višeslojna struktura HRI sustava u stvarnom scenariju.
          </p>

          <p>
            To je bio trenutak kada humanoidni robot u Hrvatskoj prelazi iz demonstracijskog objekta u interaktivnog aktera.
          </p>

          <p>
            Predstava je bila inspirirana djelom “R.U.R.” koje je napisao Karel Čapek, gdje je pojam “robot” prvi put uveden.
            U tom kontekstu često se spominju i tri osnovna zakona robotike kao temeljni okvir sigurnosti.
          </p>

          <div className="mt-6 relative w-full overflow-hidden rounded-2xl border border-neutral-200">
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/QCsrS-MGEd8?start=111"
              title="Pepper robot i predstava R.U.R."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">HRI penjanje i rani koncepti stabilnosti</h2>

          <p>
            Unutar akademskog konteksta razvijani su rani modeli HRI penjanje humanoidnog robota NAO.
            U tom razdoblju to je predstavljalo istraživačku avangardu.
          </p>

          <p>Robot je morao:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>analizirati točke oslonca</li>
            <li>prilagoditi projekciju centra mase</li>
            <li>održavati stabilnost u nestrukturiranom prostoru</li>
          </ul>

          <p>
            Algoritmi stabilnosti bili su ograničeni tadašnjim procesorskim i komunikacijskim mogućnostima.
            Fokus je bio na determinističkom upravljanju i jasno definiranim kontrolnim strukturama.
          </p>

          <p>
            Među demonstracijama izdvajalo se i penjanje po stepenicama, gdje je robot morao održavati stabilnost i pravilno rasporediti opterećenje.
          </p>

          <p>
            NAO robot je pokazivao i primjenu u rehabilitaciji, gdje je demonstrirao vježbe i pomagao korisnicima u pravilnom izvođenju pokreta.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200">
              <div className="pt-[56.25%]" />
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/pic6jQJI268?start=1"
                title="NAO robot vještine i pokreti"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200">
              <div className="pt-[56.25%]" />
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/NUIjbGzJFTU?start=2"
                title="NAO robot penjanje po stepenicama"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200">
              <div className="pt-[56.25%]" />
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/fk1JfElw_Yc?start=634"
                title="NAO robot u rehabilitaciji"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-200">
              <div className="pt-[56.25%]" />
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/QhCLcjTx_rc"
                title="NAO robot vježbe"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">ROS1: Struktura upravljanja</h2>

          <p>U fazi ranih implementacija koristio se ROS1 sustav.</p>

          <p>Definirali su se:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>osnovni bridge mehanizmi između nodova</li>
            <li>distribuirana komunikacija</li>
            <li>strukture upravljanja robotima</li>
            <li>temeljni obrasci gibanja</li>
          </ul>

          <p>
            Arhitektura je omogućila modularnost, ali je imala ograničenja u pogledu real-time pouzdanosti.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">ROS2: Stabilizirana arhitektura</h2>

          <p>Danas je prelaskom na ROS2 riješen niz tehničkih problema:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>stabilnija komunikacija među nodovima</li>
            <li>bolja podrška za multi-core procesorske sustave</li>
            <li>pouzdanija distribucija sustava</li>
            <li>lakša implementacija upravljanja s više robota</li>
          </ul>

          <p>Upravljanje skupinom robota više nije tehnički izazov kao nekada.</p>

          <p>
            Otvoreno pitanje postaje sigurnost sustava u kojem više robota i ljudi djeluju u istom prostoru.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Dinamička stabilnost današnjih humanoida</h2>

          <p>Današnji humanoidni roboti s lakoćom savladavaju:</p>

          <ul className="list-disc pl-6 space-y-1">
            <li>balansiranje projekcije centra mase</li>
            <li>dinamičko hodanje</li>
            <li>plesne pokrete</li>
            <li>koordinirane višezglobne pokrete</li>
          </ul>

          <p>
            Sustavi se i dalje mogu unaprijediti kroz napredne metode automatskog upravljanja
            te višeslojnu hijerarhiju kontrolera.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">AI i sigurnosni okvir</h2>

          <p>
            Razvoj umjetne inteligencije ubrzao je evoluciju robotike.
            No paralelno s razvojem inteligencije mora se razvijati i sigurnost interakcije.
          </p>

          <p>Tri načela moderne HMI/HRI robotike:</p>

          <ol className="list-decimal pl-6 space-y-1">
            <li>AI se koristi za programiranje i analizu sustava</li>
            <li>AI se koristi za optimizaciju i simulaciju</li>
            <li>Odluke u realnom vremenu moraju ostati unutar determinističkih kontrolnih struktura</li>
          </ol>

          <p>AI ne smije biti konačni donositelj odluke u sigurnosno kritičnom trenutku.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Povijesni kontekst</h2>

          <p>Pojam “robot” prvi je uveo Karel Čapek.</p>

          <p>
            Robot zamjenjuje čovjeka u opasnim, teškim i repetitivnim poslovima.
            Današnja humanoidna robotika mora toj ideji dodati sigurnosni okvir interakcije.
          </p>

          <p>
            Robot više ne djeluje iza zaštitne ograde.
            On dijeli prostor s čovjekom.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Današnji roboti u Hrvatskoj</h2>

          <p>
            Nedavno je stigao i robot Tonka. Ovdje će biti uključen kratak pregled proizvođača, tehničkih karakteristika i načina programiranja.
          </p>

          <div className="mt-6 relative w-full overflow-hidden rounded-2xl border border-neutral-200">
            <div className="pt-[56.25%]" />
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/4xWQpWEMEUY"
              title="Robot Tonka među ljudima"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      </article>

      {/* FOOTER CTA */}
      <section className="border-t border-neutral-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-neutral-600">
            Ova objava postavlja temelj serijala o HMI robotici.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-400"
              aria-disabled="true"
            >
              <span aria-hidden>←</span>
              Prethodna tema
            </span>
            <a
              href="/blog/mobilna-robotika"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Sljedeća tema
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
