import { Reveal } from "@/components/Reveal";
import { getPhoneDisplay, site } from "@/lib/site";

export function Contact() {
  const phoneLabel = getPhoneDisplay(site.phone);
  const mapQuery = encodeURIComponent("Loiret, Centre-Val de Loire, France");

  return (
    <section id="contact" aria-labelledby="contact-titre" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="contact-titre" className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Coordonnées
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <dl className="space-y-6 rounded-2xl border border-ink-line/15 bg-surface-subtle/70 p-8 shadow-soft">
              <div>
                <dt className="text-sm font-semibold text-ink-muted">Téléphone</dt>
                <dd className="mt-1">
                  <a
                    className="focus-ring text-lg font-semibold text-brand-dark underline-offset-2 hover:underline"
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                  >
                    {phoneLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink-muted">E-mail</dt>
                <dd className="mt-1">
                  <a
                    className="focus-ring text-lg font-semibold text-brand-dark underline-offset-2 hover:underline"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink-muted">Zone desservie</dt>
                <dd className="mt-1 text-ink">
                  Départements {site.departments.join(", ")} — Loiret, Seine-et-Marne, Essonne, Yonne —{" "}
                  {site.otherTravelNote}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-ink-line/15 shadow-card">
              <iframe
                title="Carte — zone d’intervention RK Rénovation (Loiret et région)"
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              />
              <p className="border-t border-ink-line/15 bg-surface-subtle px-4 py-3 text-xs text-ink-muted">
                La carte est indicative du cœur d’activité ; contactez-nous pour confirmer les déplacements sur
                votre commune.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
