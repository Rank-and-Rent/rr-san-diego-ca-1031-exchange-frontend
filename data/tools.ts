import type { SVGProps } from "react";
import type { ComponentType } from "react";
import {
  CalculatorIcon,
  CurrencyDollarIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

export interface ExchangeTool {
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  keywords: string[];
}

export const exchangeTools: ExchangeTool[] = [
  {
    name: "Boot Calculator",
    slug: "boot-calculator",
    description:
      "Estimate cash boot, mortgage boot, and illustrative tax owed when the exchange does not fully defer gain.",
    shortDescription: "Break down cash and mortgage boot with illustrative tax.",
    href: "/tools/boot-calculator",
    icon: CalculatorIcon,
    keywords: [
      "boot calculator",
      "1031 boot tax",
      "mortgage boot",
      "cash boot",
    ],
  },
  {
    name: "Exchange Cost Estimator",
    slug: "exchange-cost-estimator",
    description:
      "Project qualified intermediary, escrow, title insurance, and Harris County recording costs for your exchange.",
    shortDescription: "Estimate QI, escrow, title, and recording expenses.",
    href: "/tools/exchange-cost-estimator",
    icon: CurrencyDollarIcon,
    keywords: [
      "exchange costs",
      "qualified intermediary fees",
      "escrow costs",
      "title insurance",
    ],
  },
  {
    name: "Identification Rules Checker",
    slug: "identification-rules-checker",
    description:
      "Quickly evaluate whether your property list satisfies the three-property, 200 percent, or 95 percent rules.",
    shortDescription: "Verify compliance with 3-property, 200%, and 95% rules.",
    href: "/tools/identification-rules-checker",
    icon: ScaleIcon,
    keywords: [
      "identification rules",
      "200 percent rule",
      "three property rule",
      "ninety five percent rule",
    ],
  },
];


