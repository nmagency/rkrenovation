export type ServiceSlug = "nettoyage-drone" | "toiture" | "facade" | "hydrofuge";

export const serviceDetails: Record<
  ServiceSlug,
  { title: string; description: string; bullets: string[]; closing: string }
> = {
  "nettoyage-drone": {
    title: "Nettoyage par drone",
    description:
      "Nous utilisons des solutions de nettoyage assistées par drone pour atteindre les zones sensibles sans charges inutiles sur la couverture. L’approche est progressive, contrôlée et adaptée au type de support (tuiles, ardoises, bac acier, polycarbonate de vérandas, etc.).",
    bullets: [
      "Réduction des passages sur le toit et des risques pour la charpente",
      "Précision du travail sur corniches, lucarnes et zones difficiles d’accès",
      "Respect du voisinage et des matériaux grâce à des réglages fins",
      "Idéal avant hydrofugation ou traitements de protection",
    ],
    closing:
      "Une visite permet d’évaluer l’état du support, les contraintes locales et le meilleur protocole. Demandez un devis gratuit pour planifier l’intervention.",
  },
  toiture: {
    title: "Toiture, zinguerie & étanchéité",
    description:
      "De la petite réparation à la mise en conformité, nous assurons la continuité étanche de votre toiture : faîtières, rives, solins, relevés et évacuations des eaux pluviales.",
    bullets: [
      "Réparation et remplacement de faîtières et rives",
      "Étanchéité et traitement des points singuliers (cheminées, panneaux, etc.)",
      "Recherche de fuites et proposition de solutions durables",
      "Gouttières : pose, réparation, traitement et entretien",
      "Traitements anti-mousse et produits de protection adaptés",
    ],
    closing:
      "Chaque toiture est unique : diagnostic sur place, photos à l’appui et devis détaillé sans engagement.",
  },
  facade: {
    title: "Façade, ravalement & ITE",
    description:
      "Nous redonnons tenue et performance à vos façades : nettoyage, reprises de fissures, finitions peinture ou enduit, et isolation par l’extérieur lorsque le projet s’y prête.",
    bullets: [
      "Nettoyage et préparation des supports",
      "Reprise de fissures et reconstitution des parties manquantes",
      "Ravalement peinture ou enduit selon l’existant",
      "Isolation façade extérieure (ITE) pour le confort et la performance énergétique",
    ],
    closing:
      "Nous vous guidons sur les finitions et les garanties applicables. Contactez-nous pour une estimation personnalisée.",
  },
  hydrofuge: {
    title: "Hydrofuge, traitements & vérandas",
    description:
      "Les traitements hydrofuges et les résines adaptées prolongent la durée de vie des matériaux et facilitent l’entretien. Nous intervenons également sur les vérandas et surfaces extérieures horizontales.",
    bullets: [
      "Hydrofugation des murs, murets et façades poreuses",
      "Étanchéité et finitions pour vérandas et joints",
      "Nettoyage et scellement de surfaces (terrasse, dallage selon support)",
      "Conseils d’entretien après intervention",
    ],
    closing:
      "Les produits et les techniques sont choisis selon l’âge du bâtiment et l’exposition. Demandez votre devis gratuit.",
  },
};

export const serviceSlugs = Object.keys(serviceDetails) as ServiceSlug[];

export function isServiceSlug(s: string): s is ServiceSlug {
  return s in serviceDetails;
}
