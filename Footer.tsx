import Link from "next/link";
import { getLocationLabel, site } from "@/lib/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-ink-line/25 bg-surface-subtle">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-ink">{site.name}</p>
            <p className="mt-2 max-w-md text-sm text-ink-muted">
              Couverture, façade, étanchéité et nettoyage professionnel par drone. Intervention dans les
              départements {site.departments.join(", ")} — {site.otherTravelNote}.
            </p>
            <dl className="mt-4 space-y-1 text-sm text-ink-muted">
              <div>
                <dt className="inline font-medium text-ink">SIREN : </dt>
                <dd className="inline">{site.siren}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink">Statut : </dt>
                <dd className="inline">{site.legalStatus}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-ink">Siège : </dt>
                <dd className="inline">{getLocationLabel()}</dd>
              </div>
            </dl>
          </div>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Liens de pied de page">
            <Link href="/mentions-legales" className="focus-ring w-fit rounded text-ink-muted hover:text-brand-dark">
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="focus-ring w-fit rounded text-ink-muted hover:text-brand-dark"
            >
              Politique de confidentialité
            </Link>
            <Link href="/plan-du-site" className="focus-ring w-fit rounded text-ink-muted hover:text-brand-dark">
              Plan du site
            </Link>
            <Link href="/#devis" className="focus-ring w-fit rounded font-medium text-brand-dark">
              Demander un devis gratuit
            </Link>
          </nav>
        </div>
        <p className="mt-10 border-t border-ink-line/20 pt-6 text-center text-xs text-ink-muted">
          © {year} {site.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
