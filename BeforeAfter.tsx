import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function BeforeAfter() {
  return (
    <section id="avant-apres" aria-labelledby="avant-apres-titre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2
            id="avant-apres-titre"
            className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          >
            Avant / après
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Exemple concret de <strong className="font-semibold text-ink">nettoyage de toiture</strong> sur une
            maison individuelle : salissures, mousses et traitement au jet pour retrouver l’aspect d’origine des
            tuiles.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <figure className="relative overflow-hidden rounded-2xl border border-ink-line/20 bg-white shadow-card">
              <span className="absolute left-3 top-3 z-10 rounded-full bg-ink/90 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-white shadow-md">
                Avant
              </span>
              <Image
                src="/images/avant-apres/avant.png"
                alt="Professionnel en tenue orange sur échelle, nettoyage de la toiture au jet haute pression, maison à enduit clair et tuiles brunes"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </figure>
          </Reveal>
          <Reveal>
            <figure className="relative overflow-hidden rounded-2xl border border-ink-line/20 bg-white shadow-card">
              <span className="absolute left-3 top-3 z-10 rounded-full bg-cta-gradient px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider text-white shadow-md">
                Après
              </span>
              <Image
                src="/images/avant-apres/apres.png"
                alt="Après intervention : toiture en tuiles propres et uniformes, façades claires et volets, sous ciel nuageux"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
