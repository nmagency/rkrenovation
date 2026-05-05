import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const services = [
  {
    slug: "nettoyage-drone",
    title: "Nettoyage par drone",
    excerpt:
      "Nettoyage avancé, sûr et efficace des toitures, façades et vérandas grâce à des drones professionnels.",
    benefits: "Sans risque d’accès difficile, précis, respectueux des supports et des riverains.",
    image: "/images/prestations/nettoyage-drone.png",
    imageAlt:
      "Drone professionnel au-dessus d’une toiture en tuiles, pulvérisation d’un traitement nettoyant — nettoyage par drone",
  },
  {
    slug: "toiture",
    title: "Toiture & zinguerie",
    excerpt:
      "Réparation et remplacement de faîtières et rives, étanchéité, recherche de fuites, gouttières et traitements.",
    benefits:
      "Faîtière, rive, étanchéité, détection d’infiltrations, pose et traitement de gouttières, anti-mousse et protections.",
    image: "/images/prestations/toiture-zinguerie.png",
    imageAlt:
      "Maison individuelle : toiture en tuiles, lucarne, gouttières et façade avec volets — toiture et zinguerie",
  },
  {
    slug: "facade",
    title: "Façade & ravalement",
    excerpt:
      "Nettoyage, reprise de fissures, ravalement peinture ou enduit, isolation par l’extérieur (ITE).",
    benefits:
      "Remise en état esthétique et technique, traitements adaptés aux façades anciennes ou récentes.",
    image: "/images/prestations/facade-ravalement.png",
    imageAlt:
      "Maison à deux étages : enduit gris clair, encadrements blancs, toiture en tuiles et gouttières — ravalement de façade",
  },
  {
    slug: "hydrofuge",
    title: "Hydrofuge & traitements",
    excerpt:
      "Hydrofugation des murs et façades, étanchéité des vérandas, nettoyage et protection des sols extérieurs.",
    benefits:
      "Protection durable contre l’humidité et les salissures, finitions propres et conseils d’entretien.",
    image: "/images/prestations/hydrofuge-traitements.png",
    imageAlt:
      "Avant et après : même toiture en tuiles — mousses et salissures puis traitement hydrofuge et finition",
  },
] as const;

export function Services() {
  return (
    <section id="services" aria-labelledby="services-titre" className="bg-surface-subtle py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="services-titre" className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Nos prestations détaillées
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Des blocs clairs pour chaque métier, avec la possibilité d’approfondir sur une page dédiée. Chaque
            intervention peut faire l’objet d’un{" "}
            <strong className="font-semibold text-ink">devis gratuit et sans engagement</strong>.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <article className="group glass-panel flex h-full flex-col overflow-hidden p-0 transition hover:shadow-glow">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-subtle">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8 sm:pt-6">
                  <h3 className="font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink-muted">{s.excerpt}</p>
                  <p className="mt-3 text-sm text-ink-muted">
                    <span className="font-semibold text-ink">Atouts : </span>
                    {s.benefits}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ink-line/15 pt-6">
                    <Link
                      href={`/services/${s.slug}`}
                      className="focus-ring text-sm font-semibold text-brand-dark underline-offset-4 hover:underline"
                    >
                      En savoir plus
                    </Link>
                    <Link
                      href="/#devis"
                      className="focus-ring ml-auto inline-flex rounded-full bg-cta-gradient px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:scale-[1.02]"
                    >
                      Demandez un devis
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
