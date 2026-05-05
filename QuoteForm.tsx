"use client";

import { useMemo, useState } from "react";
import { site, getPhoneDisplay } from "@/lib/site";

const serviceOptions = [
  { value: "", label: "Sélectionnez un service" },
  { value: "nettoyage-drone", label: "Nettoyage par drone" },
  { value: "toiture", label: "Toiture & zinguerie" },
  { value: "facade", label: "Façade & ravalement" },
  { value: "hydrofuge", label: "Hydrofuge & traitements" },
  { value: "autre", label: "Autre / plusieurs lots" },
] as const;

export function QuoteForm() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const phoneLabel = useMemo(() => getPhoneDisplay(site.phone), []);

  if (!endpoint) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50/90 p-6 text-ink">
        <p className="font-semibold">Formulaire en ligne à finaliser</p>
        <p className="mt-2 text-sm text-ink-muted">
          Pour activer l’envoi sécurisé, créez un formulaire sur{" "}
          <a className="font-medium text-brand-dark underline" href="https://formspree.io" target="_blank" rel="noreferrer">
            Formspree
          </a>{" "}
          puis définissez la variable d’environnement{" "}
          <code className="rounded bg-white px-1 py-0.5 text-xs">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code> avec l’URL
          fournie (voir <code className="rounded bg-white px-1 py-0.5 text-xs">.env.example</code>).
        </p>
        <p className="mt-4 text-sm">
          En attendant, vous pouvez nous écrire à{" "}
          <a className="font-semibold text-brand-dark underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          ou appeler le{" "}
          <a className="font-semibold text-brand-dark underline" href={`tel:${site.phone.replace(/\s/g, "")}`}>
            {phoneLabel}
          </a>
          .
        </p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = new FormData(form);
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Erreur réseau");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 sm:grid-cols-2"
      noValidate
      aria-describedby="devis-aide"
    >
      <div className="sm:col-span-2">
        <p id="devis-aide" className="text-sm text-ink-muted">
          Tous les champs marqués d’un astérisque sont obligatoires. Réponse sous 48 h ouvrées en moyenne.
        </p>
      </div>
      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="text-sm font-medium text-ink">
          Nom <span className="text-brand-dark">*</span>
        </span>
        <input
          name="nom"
          type="text"
          autoComplete="name"
          required
          className="focus-ring rounded-xl border border-ink-line/40 bg-white px-4 py-3 text-ink shadow-sm"
        />
      </label>
      <label className="flex flex-col gap-2 sm:col-span-1">
        <span className="text-sm font-medium text-ink">
          Téléphone <span className="text-brand-dark">*</span>
        </span>
        <input
          name="telephone"
          type="tel"
          autoComplete="tel"
          required
          className="focus-ring rounded-xl border border-ink-line/40 bg-white px-4 py-3 text-ink shadow-sm"
        />
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-sm font-medium text-ink">
          E-mail <span className="text-brand-dark">*</span>
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          className="focus-ring rounded-xl border border-ink-line/40 bg-white px-4 py-3 text-ink shadow-sm"
        />
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-sm font-medium text-ink">
          Service souhaité <span className="text-brand-dark">*</span>
        </span>
        <select
          name="service"
          required
          defaultValue=""
          className="focus-ring rounded-xl border border-ink-line/40 bg-white px-4 py-3 text-ink shadow-sm"
        >
          {serviceOptions.map((o) => (
            <option key={o.value || "empty"} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 sm:col-span-2">
        <span className="text-sm font-medium text-ink">
          Message <span className="text-brand-dark">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre besoin, la commune, l’urgence éventuelle…"
          className="focus-ring resize-y rounded-xl border border-ink-line/40 bg-white px-4 py-3 text-ink shadow-sm"
        />
      </label>
      <label className="flex items-start gap-3 sm:col-span-2">
        <input type="checkbox" name="consentement_rgpd" required className="mt-1 h-4 w-4 rounded border-ink-line text-brand focus:ring-brand" />
        <span className="text-sm text-ink-muted">
          J’accepte que mes informations soient utilisées pour me recontacter au sujet de ma demande, conformément
          à la{" "}
          <a href="/politique-de-confidentialite" className="font-medium text-brand-dark underline">
            politique de confidentialité
          </a>
          . <span className="text-brand-dark">*</span>
        </span>
      </label>
      <input type="hidden" name="_subject" value="Demande de devis — RK Rénovation" />
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="focus-ring w-full rounded-full bg-cta-gradient px-8 py-3.5 text-base font-semibold text-white shadow-glow transition enabled:hover:scale-[1.01] enabled:hover:brightness-105 disabled:cursor-wait disabled:opacity-80 sm:w-auto"
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande de devis"}
        </button>
        <p className="mt-3 text-sm text-ink-muted" role="status" aria-live="polite">
          {status === "ok" && "Merci ! Votre message a bien été envoyé. Nous vous recontactons très bientôt."}
          {status === "err" && "Impossible d’envoyer pour le moment. Réessayez ou contactez-nous par téléphone."}
        </p>
      </div>
    </form>
  );
}
