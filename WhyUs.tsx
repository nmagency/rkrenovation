import { Reveal } from "@/components/Reveal";

const values = [
  {
    title: "Savoir-faire familial",
    text: "Une équipe soudée et des gestes transmis : exigence artisanale et proximité avec nos clients.",
  },
  {
    title: "Matériaux & finitions",
    text: "Sélection de produits adaptés au support, mise en œuvre conforme et résultats durables.",
  },
  {
    title: "Innovation (drone)",
    text: "Interventions en hauteur plus sûres et ciblées, avec moins d’agression pour vos couvertures.",
  },
  {
    title: "Devis gratuit",
    text: "Estimation claire, sans surprise : nous détaillons les postes et les options avant tout engagement.",
  },
] as const;

export function WhyUs() {
  return (
    <section id="pourquoi-nous" aria-labelledby="valeurs-titre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="valeurs-titre" className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Pourquoi nous confier vos travaux ?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Une approche centrée sur la qualité, la sécurité et la clarté — du premier contact à la réception
            des travaux.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {values.map((v) => (
            <Reveal key={v.title}>
              <li className="h-full rounded-2xl border border-ink-line/15 bg-surface-subtle/60 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
                <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
