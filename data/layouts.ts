import type { PageLayoutVariant, LayoutAssignments } from "./types";
import { servicesData } from "./services";
import { locationsData } from "./locations";

export const serviceVariants: PageLayoutVariant[] = [
  {
    key: "classic",
    label: "Classic",
    description: "Traditional layout with hero, description, FAQs, and CTA",
    sections: ["hero", "description", "faqs", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "gradient",
    },
  },
  {
    key: "sidebar",
    label: "Sidebar",
    description: "Content with sidebar navigation and sticky CTA",
    sections: ["hero", "description", "sidebar", "faqs", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "image",
    },
  },
  {
    key: "minimal",
    label: "Minimal",
    description: "Clean minimal layout focusing on content",
    sections: ["hero", "description", "faqs"],
    features: {
      toc: false,
      stickyCta: false,
      sidebar: false,
      heroStyle: "abstract",
    },
  },
  {
    key: "detailed",
    label: "Detailed",
    description: "Comprehensive layout with multiple sections",
    sections: ["hero", "description", "inclusions", "situations", "faqs", "compliance", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: false,
      heroStyle: "gradient",
    },
  },
  {
    key: "focused",
    label: "Focused",
    description: "Focused layout with example capability",
    sections: ["hero", "description", "example", "faqs", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
    },
  },
  {
    key: "comprehensive",
    label: "Comprehensive",
    description: "Full featured layout with all sections",
    sections: ["hero", "description", "inclusions", "situations", "example", "faqs", "compliance", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "gradient",
    },
  },
];

export const locationVariants: PageLayoutVariant[] = [
  {
    key: "map-first",
    label: "Map First",
    description: "Map prominent layout with location details",
    sections: ["hero", "map", "description", "paths", "faqs", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "map",
    },
  },
  {
    key: "content-first",
    label: "Content First",
    description: "Content focused layout with embedded map",
    sections: ["hero", "description", "map", "paths", "faqs", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
    },
  },
  {
    key: "paths-focused",
    label: "Paths Focused",
    description: "Emphasizes popular exchange paths",
    sections: ["hero", "paths", "description", "faqs", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "gradient",
    },
  },
  {
    key: "minimal-location",
    label: "Minimal Location",
    description: "Simple location page layout",
    sections: ["hero", "description", "faqs"],
    features: {
      toc: false,
      stickyCta: false,
      sidebar: false,
      heroStyle: "abstract",
    },
  },
  {
    key: "detailed-location",
    label: "Detailed Location",
    description: "Comprehensive location information",
    sections: ["hero", "description", "map", "paths", "example", "faqs", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
    },
  },
  {
    key: "sidebar-location",
    label: "Sidebar Location",
    description: "Location page with sidebar navigation",
    sections: ["hero", "description", "sidebar", "paths", "map", "faqs", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "map",
    },
  },
];

function assignLayoutsRoundRobin<T extends { slug: string }>(
  items: T[],
  variants: PageLayoutVariant[]
): Record<string, string> {
  const assignments: Record<string, string> = {};
  const variantKeys = variants.map((v) => v.key);
  let variantIndex = 0;

  items.forEach((item, index) => {
    if (index > 0 && index % variants.length === 0) {
      variantIndex = (variantIndex + 1) % variants.length;
    }
    assignments[item.slug] = variantKeys[variantIndex];
    variantIndex = (variantIndex + 1) % variants.length;
  });

  return assignments;
}

export const assignments: LayoutAssignments = {
  services: assignLayoutsRoundRobin(servicesData, serviceVariants),
  locations: assignLayoutsRoundRobin(locationsData, locationVariants),
};

