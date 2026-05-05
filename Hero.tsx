import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

const highlights = ["Nettoyage par drone", "Étanchéité & hydrofuge", "Restauration de façade"];

const heroBackgroundSrc = "/images/hero-accueil.png";

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-titre"
      className="relative isolate flex min-h-[min(88vh,52rem)] items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBackgroundSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-[1.02] object-cover object-[center_32%]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0f1218]/90 via-[#0f1218]/60 to-[#0f1218]/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0f1218]/55 via-transparent to-transparent to-45%"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Reveal className="max-w-[44rem]">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#ffb347] drop-shadow-sm">
            Plus de 20 ans d’expérience
          </p>
          <h1
            id="hero-titre"
            className="mt-3 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-white drop-shadow-lg sm:text-5xl"
          >
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/92 drop-shadow-md">
            Micro-entreprise familiale : nous protégeons et embellissons votre habitat avec des techniques
            modernes — dont le nettoyage par drone — et un savoir-faire transmis de père en fils.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2" role="list">
            {highlights.map((label) => (
              <li
                key={label}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-md backdrop-blur-md"
              >
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#devis"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-cta-gradient px-8 py-3.5 text-center text-base font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:brightness-105"
            >
              Demandez votre devis gratuit
            </Link>
            <Link
              href="/#services"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-cta-gradient px-8 py-3.5 text-center text-base font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:brightness-105"
            >
              Découvrir nos services
            </Link>
          </div>
          <p className="mt-8 max-w-md text-[0.6875rem] leading-snug text-white/55">
            Photo d’illustration — nettoyage de toiture par drone. Vos chantiers peuvent remplacer ce visuel sur
            demande.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
