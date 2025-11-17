import type { MetadataRoute } from "next";
import {
  servicesData,
  locationsData,
  propertyTypesData,
} from "@/data";
import { blogPosts } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "",
    "/services",
    "/service-areas",
    "/property-types",
    "/about",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
    "/search",
  ];

  const today = new Date();

  const staticEntries = baseRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: today,
  }));

  const serviceEntries = servicesData.map((service) => ({
    url: `${SITE_URL}${service.route}`,
    lastModified: today,
  }));

  const locationEntries = locationsData.map((location) => ({
    url: `${SITE_URL}${location.route}`,
    lastModified: today,
  }));

  const propertyTypeEntries = propertyTypesData.map((type) => ({
    url: `${SITE_URL}${type.route}`,
    lastModified: today,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...locationEntries,
    ...propertyTypeEntries,
    ...blogEntries,
  ];
}

