# LOCATIONS Content Generation — BATCH 03  Items 15 to 23

## Your Mission
Generate SEO optimized content for locations near San Diego, CA that help users find replacement properties nationwide.

**Critical**
- No boilerplate
- Include San Diego, CA once in each body
- Rank and rent compliant language only
- Emphasize nationwide property identification support
- Use the assigned layout key

## Research Requirements
1) Search "[Location] CA population 2024 2025"
2) Search "[Location] CA major employers industries"
3) Search "[Location] CA neighborhoods business districts"
4) Confirm map location and radius

## Locations In This Batch
1) imperial-beach — Imperial Beach, CA  Layout: paths-focused
2) el-cajon — El Cajon, CA  Layout: minimal-location
3) la-mesa — La Mesa, CA  Layout: detailed-location
4) santee — Santee, CA  Layout: sidebar-location
5) lakeside — Lakeside, CA  Layout: map-first
6) rancho-bernardo — Rancho Bernardo, CA  Layout: content-first
7) mission-valley — Mission Valley, CA  Layout: paths-focused
8) kearny-mesa — Kearny Mesa, CA  Layout: minimal-location
9) sorrento-valley — Sorrento Valley, CA  Layout: detailed-location
10) remote — Remote  Layout: sidebar-location

## Content Requirements  for EACH Location
### 1. Main Description  180 to 260 words
- Local exchange drivers, asset types, any transfer or documentary tax notes
- One reference to San Diego, CA
- Mention national identification support
- Follow the assigned layout sections

### 2. Popular Paths  rank 1 to 6
- Order services or property types with 2 to 3 sentence rationale each

### 3. FAQs  4 items
- Include the location and state abbreviation in each answer

### 4. Example Capability
{ "disclaimer":"Example of the type of engagement we can handle", "location":"[Location, CA]", "situation":"...", "ourApproach":"...", "expectedOutcome":"..." }

## Output Format  TypeScript  write to /data/batches/locations/batch-03.ts
export const locationsBatch03 = {
  "[slug]": {
    layoutKey:"[layout-key]",
    mainDescription:"<p>...</p>",
    popularPaths:[{rank:1,type:"service or propertyType",slug:"...",name:"...",whyPopular:"..."}],
    faqs:[{question:"...",answer:"..."}],
    exampleCapability:{ ... }
  }
}

