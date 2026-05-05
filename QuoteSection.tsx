import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";

export function QuoteSection() {
  return (
    <section id="devis" aria-labelledby="devis-titre" className="bg-hero-gradient py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass-panel mx-auto max-w-3xl p-8 sm:p-10">
            <h2 id="devis-titre" className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Besoin d’un devis gratuit ? Contactez-nous !
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              <strong className="font-semibold text-ink">Devis gratuit et sans engagement</strong> — décrivez votre
              projet, nous préparons une proposition claire et adaptée à votre budget.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
