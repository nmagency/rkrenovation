export const site = {
  name: "RK Rénovation",
  tagline:
    "RK Rénovation : expertise familiale depuis plus de 20 ans au service de votre habitat.",
  description:
    "Entreprise familiale : nettoyage par drone, toiture, façade, étanchéité et isolation. Devis gratuit, sans engagement. Départements 45, 77, 91 et 89. Autre déplacement possible sur demande.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rk-renovation.fr",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "renardkovou@icloud.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+33641353774",
  departments: ["45", "77", "91", "89"] as const,
  /** Affiché à côté / après la liste des départements. */
  otherTravelNote: "Autre déplacement possible sur demande",
  city: "Boynes",
  postalCode: "45300",
  siren: "944713650",
  legalStatus: "Micro-entreprise",
} as const;

/** Ex. « Boynes-45300 » pour affichage ville + code postal. */
export function getLocationLabel() {
  return `${site.city}-${site.postalCode}` as const;
}

export function getPhoneDisplay(e164: string): string {
  const digits = e164.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("33")) {
    const rest = digits.slice(2);
    return `0${rest.slice(0, 2)} ${rest.slice(2, 4)} ${rest.slice(4, 6)} ${rest.slice(6, 8)} ${rest.slice(8)}`;
  }
  if (digits.length === 10 && digits.startsWith("0")) {
    return `${digits.slice(0, 2)} ${digits.slice(2, 4)} ${digits.slice(4, 6)} ${digits.slice(6, 8)} ${digits.slice(8)}`;
  }
  return e164;
}
