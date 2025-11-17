import type { InventoryCategory } from "./types";

export const inventoryCategories: InventoryCategory[] = [
  {
    slug: "nnn",
    name: "NNN Properties",
    route: "/inventory/nnn",
    note: "Single tenant net lease properties",
  },
  {
    slug: "retail",
    name: "Retail Properties",
    route: "/inventory/retail",
    note: "Retail replacement properties",
  },
  {
    slug: "industrial",
    name: "Industrial Properties",
    route: "/inventory/industrial",
    note: "Industrial replacement properties",
  },
  {
    slug: "office",
    name: "Office Properties",
    route: "/inventory/office",
    note: "Office replacement properties",
  },
];

