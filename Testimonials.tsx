import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "Toiture — traitement hydrofuge",
    location: "Loiret (45)",
    caption: "Protection et finition nette après nettoyage doux.",
  },
  {
    title: "Façade — reprise de fissures",
    location: "Seine-et-Marne (77)",
    caption: "Diagnostics précis et remise en peinture homogène.",
  },
  {
    title: "Vérandas — étanchéité",
    location: "Essonne (91)",
    caption: "Reprise des joints et traitement adapté aux panneaux.",
  },
] as const;

const reviews = [
  {
    quote:
      "Devis clair, équipe ponctuelle et chantier propre. La toiture n’a jamais été aussi saine après leur passage.",
    author: "Marie L.",
    zone: "45",
  },
  {
    quote:
      "Excellente communication du début à la fin. Le nettoyage par drone nous a évité des échafaudages coûteux.",
    author: "Thomas R.",
    zone: "77",
  },
] as const;

export function Testimonials() {
  return (
    <section id="realisations" aria-labelledby="realisations-titre" className="bg-surface-subtle py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="realisations-titre" className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Réalisations & avis clients
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Exemples de typologies d’intervention (visuels avant/après disponibles sur demande lors de votre
            rendez-vous).
          </p>
          <div
            className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3"
            role="img"
            aria-label="Note moyenne des clients : 4,3 sur 5 étoiles"
          >
            <span className="font-display text-2xl font-bold tracking-tight text-ink">4,3</span>
            <span className="flex items-center gap-px text-xl leading-none text-brand" aria-hidden>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="relative inline-block h-[1.15em] w-[1em] shrink-0 text-[1.25rem] leading-none">
                <span className="absolute inset-0 text-ink-line">★</span>
                <span className="absolute left-0 top-0 overflow-hidden text-brand" style={{ width: "30%" }}>
                  ★
                </span>
              </span>
            </span>
            <span className="text-sm text-ink-muted">sur 5</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-ink-line/15 bg-white p-8 shadow-card">
              <h3 className="font-display text-lg font-semibold text-ink">Projets récents</h3>
              <ul className="mt-4 space-y-4" role="list">
                {projects.map((p) => (
                  <li key={p.title} className="rounded-xl bg-surface-subtle/80 px-4 py-3">
                    <p className="font-medium text-ink">{p.title}</p>
                    <p className="text-sm text-ink-muted">{p.location}</p>
                    <p className="mt-1 text-sm text-ink-muted">{p.caption}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-brand/20 bg-brand-muted/30 p-8 shadow-card">
              <h3 className="font-display text-lg font-semibold text-ink">Ils nous font confiance</h3>
              <ul className="mt-4 space-y-6" role="list">
                {reviews.map((r) => (
                  <li key={r.author}>
                    <blockquote className="text-ink-muted">
                      <p className="text-base leading-relaxed">« {r.quote} »</p>
                      <footer className="mt-3 text-sm font-semibold text-ink">
                        {r.author}
                        <span className="font-normal text-ink-muted"> — département {r.zone}</span>
                      </footer>
                    </blockquote>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
