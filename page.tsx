import type { Metadata } from "next";
import Link from "next/link";
import { getLocationLabel, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité et traitement des données personnelles pour ${site.name}.`,
};

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-ink">Politique de confidentialité</h1>
      <p className="mt-4 text-ink-muted">
        La présente politique décrit la manière dont {site.name} traite les données personnelles collectées via
        le site internet, dans le respect du Règlement général sur la protection des données (RGPD).
      </p>

      <section className="mt-10 space-y-4 text-ink-muted">
        <h2 className="font-display text-xl font-semibold text-ink">Responsable du traitement</h2>
        <p>
          {site.name} — {getLocationLabel()} — {site.email}
        </p>
      </section>

      <section className="mt-10 space-y-4 text-ink-muted">
        <h2 className="font-display text-xl font-semibold text-ink">Données collectées</h2>
        <p>
          Lorsque vous utilisez le formulaire de contact, nous pouvons collecter : nom, coordonnées (e-mail,
          téléphone), type de demande et message. Ces informations sont nécessaires pour répondre à votre
          sollicitation.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-ink-muted">
        <h2 className="font-display text-xl font-semibold text-ink">Finalités et base légale</h2>
        <p>
          Les données sont utilisées pour vous recontacter, établir un devis et assurer le suivi de votre demande.
          La base légale est l’exécution de mesures précontractuelles à votre demande et, le cas échéant, la
          relation contractuelle.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-ink-muted">
        <h2 className="font-display text-xl font-semibold text-ink">Durée de conservation</h2>
        <p>
          Les messages sont conservés le temps nécessaire au traitement de votre demande et aux obligations légales
          applicables, puis supprimés ou archivés selon les règles comptables et fiscales.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-ink-muted">
        <h2 className="font-display text-xl font-semibold text-ink">Destinataires</h2>
        <p>
          Les données peuvent être transmises à nos sous-traitants techniques strictement nécessaires (par exemple
          hébergeur ou service de formulaire sécurisé), dans le cadre de leurs missions et conformément au RGPD.
        </p>
      </section>

      <section className="mt-10 space-y-4 text-ink-muted">
        <h2 className="font-display text-xl font-semibold text-ink">Vos droits</h2>
        <p>
          Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de
          portabilité lorsque applicable. Vous pouvez introduire une réclamation auprès de la CNIL (
          <a className="text-brand-dark underline" href="https://www.cnil.fr" target="_blank" rel="noreferrer">
            cnil.fr
          </a>
          ). Pour exercer vos droits : {site.email}.
        </p>
      </section>

      <p className="mt-12">
        <Link href="/" className="font-semibold text-brand-dark underline">
          Retour à l’accueil
        </Link>
      </p>
    </article>
  );
}
