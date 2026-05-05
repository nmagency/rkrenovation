import { Reveal } from "@/components/Reveal";
import { getLocationLabel, site } from "@/lib/site";

export function About() {
  return (
    <section id="a-propos" aria-labelledby="apropos-titre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="apropos-titre" className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Plus de 20 ans d’excellence en rénovation
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-muted">
            <strong className="font-semibold text-ink">{site.name}</strong> est une entreprise familiale
            ancrée dans la transmission du métier : un savoir-faire de père en fils, la rigueur du geste et le
            respect des clients. Nous intervenons sur la couverture, la façade et l’enveloppe du bâtiment avec
            des solutions durables et des finitions soignées.
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink-line/20 bg-surface-subtle/80 p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-ink">Notre mission</h3>
              <p className="mt-3 text-ink-muted">
                Offrir des travaux fiables, des conseils transparents et des techniques à la pointe — comme le
                nettoyage par drone — pour sécuriser votre patrimoine et améliorer le confort de votre logement.
                Votre satisfaction et la qualité des matériaux sont au cœur de chaque chantier.
              </p>
            </div>
            <div className="rounded-2xl border border-brand/20 bg-brand-muted/40 p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-ink">Zone d’intervention</h3>
              <p className="mt-3 text-ink-muted">
                Nous desservons les départements{" "}
                <strong className="font-semibold text-ink">
                  {site.departments.slice(0, -1).join(", ")} et {site.departments[site.departments.length - 1]}
                </strong>{" "}
                (Loiret, Seine-et-Marne, Essonne, Yonne). {site.otherTravelNote}. Basés à{" "}
                <strong className="font-semibold text-ink">{getLocationLabel()}</strong>, nous planifions des visites et
                diagnostics sur rendez-vous.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
