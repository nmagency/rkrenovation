import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "FR",
  },
  areaServed: site.departments.map((d) => ({
    "@type": "AdministrativeArea",
    name: `Département ${d}`,
  })),
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [] as string[],
  identifier: {
    "@type": "PropertyValue",
    name: "SIREN",
    value: site.siren,
  },
  foundingDate: "2004",
  slogan: site.tagline,
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
