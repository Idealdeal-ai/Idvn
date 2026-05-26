export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole?: string;
  authorTitle?: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  categorySlug?: string;
  tags: string[];
  readTime: number;
  coverImage?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  relatedSlugs?: string[];
  faqs?: { question: string; answer: string }[];
}

export const blogCategories = [
  { slug: 'market-insights', name: 'Market Insights' },
  { slug: 'export-guides', name: 'Export Guides' },
  { slug: 'product-spotlight', name: 'Product Spotlight' },
  { slug: 'trade-tips', name: 'Trade Tips' },
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'vietnam-cashew-nuts-export-guide',
    title: "Vietnam Cashew Nuts Export Guide 2026: Grades, Prices & How to Buy",
    excerpt: "Vietnam processes 65% of the world's cashews. This comprehensive guide covers all cashew grades (W180–W450), current pricing, quality standards, documentation requirements, and how to source direct from Vietnamese exporters.",
    content: `## Vietnam: The World's Cashew Capital

Vietnam has dominated global cashew kernel processing for over two decades. While countries like Ivory Coast, Nigeria, and Tanzania grow the majority of raw cashew nuts (RCN), it is Vietnam that transforms them into the cleaned, graded, and packaged kernels that fill store shelves from Riyadh to Rotterdam.

In 2024, Vietnam exported approximately 600,000 tonnes of cashew kernels valued at over $3 billion USD — representing roughly 65% of global supply. This extraordinary market position has been built on decades of investment in mechanized shelling technology, skilled labor, and rigorous quality management systems centered in Binh Phuoc province.

## Understanding Cashew Grades

The cashew industry uses a standardized grading system based on kernel size and color. Understanding these grades is essential for importers.

### Whole White Grades (W Grades)
The "W" in W320 stands for "Whole White" — indicating unbroken, white/ivory colored kernels. The number refers to the count per pound:

- **W180**: Jumbo (180 kernels per pound) — most expensive, limited supply
- **W210**: Extra Large (210 kernels per pound)
- **W240**: Large (240 kernels per pound) — premium retail
- **W320**: Medium (320 kernels per pound) — most traded globally
- **W450**: Small (450 kernels per pound) — economy/processing grade

### Scorched/Blemished Grades
These are whole kernels that have minor color variations from the roasting or steaming process:
- **SW** (Scorched Wholes) — slightly off-color
- **SSW** (Scorched Second Wholes) — more pronounced color variation

### Split and Broken Grades
Pieces of whole kernels used in food manufacturing, baking, and confectionery:
- **S** (Splits), **B** (Butts), **P** (Pieces), **LP** (Large Pieces), **SP** (Small Pieces)

## Current Cashew Market Prices (2026)

Cashew prices fluctuate with crop cycles, currency movements, and global demand. As of mid-2026, indicative FOB Ho Chi Minh City prices:

- W180: $7.50–9.00/kg
- W240: $6.20–7.20/kg
- W320: $4.80–5.60/kg
- W450: $3.80–4.50/kg
- Splits: $3.50–4.20/kg

*Note: Prices vary by quality specifications, lot size, packaging, and market conditions. Contact us for current firm pricing.*

## Quality Standards and Certifications

For export to major markets, Vietnamese cashew processors must maintain:

**Food Safety Certifications:**
- ISO 22000 (Food Safety Management System)
- HACCP (Hazard Analysis Critical Control Points)
- BRC Global Standard for Food Safety (Grade A preferred by UK/EU buyers)
- FSSC 22000 (Food Safety System Certification)

**Market-Specific Certifications:**
- Halal certification (for GCC, Southeast Asian markets)
- Kosher certification (for Jewish market segments)
- USDA Organic (for organic-certified lots)
- EU Organic (for European organic buyers)

**Quality Testing:**
Every export lot should be tested for:
- Aflatoxins (B1, B2, G1, G2) — B1 maximum 8 ppb for EU
- Heavy metals (Lead, Cadmium, Mercury)
- Pesticide residues (multi-residue panel)
- Microbiological parameters (Total Plate Count, Salmonella, E. coli)

## How to Import Cashew Nuts from Vietnam

### Step 1: Define Your Specification
Determine which grade (W320 is typically the starting point), quality standard, packaging requirements, and certifications you need for your target market.

### Step 2: Request Samples
Any reputable Vietnamese exporter will provide 500g samples free of charge (buyer typically covers courier costs). Cup the sample, check color, aroma, and taste.

### Step 3: Negotiate Contract Terms
Key contract terms to establish:
- Grade specification (with defect tolerances)
- Price (FOB or CIF)
- Packaging specification
- Payment terms (L/C or T/T)
- Certification requirements
- Testing protocol and lab selection

### Step 4: Quality Control
Consider third party pre-shipment inspection through SGS, Intertek, or Bureau Veritas to verify grade and specifications before payment.

### Step 5: Documentation
Ensure you receive: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Phytosanitary Certificate, HACCP Certificate, Halal Certificate (if required), and laboratory test reports.

## Common Mistakes Cashew Importers Make

1. **Ignoring moisture**: Cashews above 5% moisture are at risk of mold during shipping. Always specify maximum moisture.
2. **Skipping pre-shipment inspection**: For first orders, invest in third party inspection.
3. **Not specifying aflatoxin limits**: EU limits (B1 ≤ 8 ppb) are stricter than US limits. State your market's limits clearly.
4. **Confusing net weight and gross weight**: Cashews are priced on net kernel weight, not gross (including packaging).

## Why Source from Ideal Deal Vietnam

As a Hanoi-based B2B export facilitator with direct supplier relationships in Binh Phuoc and Dong Nai, we offer:
- Access to multiple certified processing facilities to compare prices and quality
- Full documentation management including Halal, BRC, and organic certificates
- Pre-shipment inspection coordination
- Flexible packaging including OEM private label
- Transparent pricing with no hidden fees`,
    author: 'Nguyen Minh Duc',
    authorRole: 'Head of Agricultural Exports',
    publishedAt: '2026-04-15',
    updatedAt: '2026-04-30',
    category: 'Export Guides',
    categorySlug: 'export-guides',
    tags: ['cashew nuts', 'Vietnam export', 'W320', 'food import guide', 'B2B sourcing'],
    readTime: 12,
    coverImage: '/images/blog/cashew-export-guide.jpg',
    seoTitle: 'Vietnam Cashew Nuts Export Guide 2026 | Grades, Prices & Sourcing Tips',
    seoDescription: 'Complete guide to importing cashew nuts from Vietnam. All grades (W180–W450) explained, 2026 price benchmarks, quality standards, documentation requirements.',
    keywords: ['cashew nuts Vietnam import guide', 'W320 cashew price 2026', 'Vietnam cashew grades', 'how to buy cashew from Vietnam'],
    relatedSlugs: ['vietnam-black-pepper-export', 'halal-food-export-vietnam'],
  },
  {
    slug: 'vietnam-black-pepper-export',
    title: "Vietnamese Black Pepper: World #1 Origin — Complete Buyer's Guide",
    excerpt: "Vietnam produces 35% of the world's black pepper. This guide covers pepper grades (ASTA, FAQ, 500GL/550GL), the difference between Phu Quoc and mainland pepper, pricing, and how to pass EU/US microbiological standards.",
    content: `## Vietnam: The Undisputed King of Black Pepper

For over two decades, Vietnam has been the world's largest exporter of black pepper, accounting for approximately 35% of global supply. The Central Highlands provinces of Dak Lak, Gia Lai, and Binh Phuoc, along with the famous Phu Quoc island, produce pepper of exceptional quality that commands respect in markets from Hamburg to Houston.

## Types of Vietnamese Pepper

### Black Pepper
The most common form — whole berries that have been sun-dried after harvesting at approximately 70% ripeness. Vietnamese black pepper is known for its:
- Strong, sharp pungency
- Complex earthy and woody notes
- High piperine content (typically 5–7%)
- Excellent essential oil content

### White Pepper
Fully ripe berries soaked in water for 7–10 days to remove the outer skin, then dried. Phu Quoc white pepper is among the finest globally, with a unique mild heat and complex flavor profile preferred for white sauces and light-colored dishes.

### Green Pepper (Dried)
Underripe berries freeze-dried to preserve the green color and fresh, bright pepper character. A niche product for gourmet applications.

## Understanding Pepper Grading

### GL (Gramme/Litre) — Bulk Density
The primary quality indicator for whole black pepper:
- **500 GL**: Standard commercial grade (ASTA FAQ)
- **550 GL**: Premium commercial grade
- **570 GL**: Extra premium, for grinding and extraction
- **600 GL+**: Rare, high-oil content lots

Higher GL indicates denser, more full berries with more essential oil content and less light/empty berries.

### ASTA vs FAQ
- **ASTA**: American Spice Trade Association — cleaner, more uniform specification
- **FAQ**: Fair Average Quality — standard commercial grade with broader tolerances

### Specifications to Request
When requesting quotations, always specify:
- GL (gramme/litre bulk density)
- Moisture (typically ≤ 13%)
- Piperine content (specify % minimum)
- Extraneous matter (specify % maximum)
- Light berries (specify % maximum)
- Whether steam sterilization is required

## Phu Quoc vs Mainland Pepper

**Phu Quoc Pepper**: Grown on Phu Quoc island in Kien Giang province, this is Vietnam's most prestigious pepper origin. Island growing conditions — maritime climate, basalt-rich soil — produce pepper with an exceptionally high essential oil content and a distinctive complex aroma with citrus and floral notes. Protected Geographic Indication (PGI) status is under development. Priced at a significant premium.

**Dak Lak / Gia Lai (Mainland)**: The majority of Vietnamese pepper production. More intense pungency, earthier aroma, and competitive pricing. The standard for commercial supply to food manufacturers.

## EU Microbiological Requirements — Critical for European Buyers

The EU has strict limits for pepper imports, particularly for Salmonella:
- Salmonella: Absent in 25g (mandatory)
- Total Aerobic Count (TPC): ≤ 10,000,000 CFU/g (typical specification)

**Steam sterilization** is the standard solution. A properly sterilized lot typically achieves:
- Salmonella: Absent
- TPC: ≤ 100,000 CFU/g

We work with facilities that use continuous steam sterilization (not ethylene oxide, which is banned in the EU) to ensure compliance.

## 2026 Black Pepper Market Prices

FOB Ho Chi Minh City indicative pricing:
- FAQ 500 GL: $3,200–3,800/MT
- ASTA 550 GL: $3,600–4,200/MT
- ASTA 570 GL: $4,000–4,800/MT
- Phu Quoc premium: +20–35% over equivalent mainland grade

## Shipping and Logistics

Pepper ships well as a dry cargo in 20ft or 40ft containers. Key logistics notes:
- 25 kg PP bags or 50 kg jute bags
- Container capacity: 18–20 MT per 20ft
- Phytosanitary certificate required for most markets
- Country of Origin certificate from Vietnam Chamber of Commerce
- Fumigation certificate (if required by destination)

Transit times: 18–22 days to Europe; 18–22 days to Middle East; 28–35 days to US East Coast.`,
    author: 'Tran Thi Lan',
    authorRole: 'Spice & Agricultural Products Specialist',
    publishedAt: '2026-03-20',
    updatedAt: '2026-04-20',
    category: 'Product Spotlight',
    categorySlug: 'product-spotlight',
    tags: ['black pepper', 'Vietnam pepper', 'spice export', 'Phu Quoc pepper', 'ASTA pepper'],
    readTime: 10,
    coverImage: '/images/blog/black-pepper-guide.jpg',
    seoTitle: "Vietnamese Black Pepper Export Guide 2026 | ASTA 500GL 550GL | World #1 Origin",
    seoDescription: "Complete guide to buying black pepper from Vietnam grades, pricing, EU microbiological compliance, Phu Quoc vs mainland origins. 2026 FOB price benchmarks.",
    keywords: ['vietnamese black pepper export', 'black pepper 500GL Vietnam', 'buy pepper from Vietnam', 'Phu Quoc pepper supplier'],
    relatedSlugs: ['vietnam-cashew-nuts-export-guide', 'halal-food-export-vietnam'],
  },
  {
    slug: 'halal-food-export-vietnam',
    title: "Halal Food Export from Vietnam: Complete Guide for GCC Importers",
    excerpt: "Vietnam is increasingly a preferred Halal food source for the GCC, with certified processing facilities across cashew, seafood, coffee, and rice categories. This guide covers which Vietnamese products are Halal certified and how to verify compliance.",
    content: `## Vietnam's Growing Role in Global Halal Food Trade

The global Halal food market exceeds $2 trillion annually and continues to grow driven by the expanding Muslim population across Southeast Asia, the Middle East, and Africa. Vietnam, with its sophisticated food processing infrastructure and competitive pricing, has positioned itself as an important Halal food supplier — particularly for the 420 million-strong GCC, MENA, and broader Muslim markets.

## Key Vietnamese Products with Halal Certification

### Cashew Nuts
Nearly all major cashew processing facilities in Vietnam's Binh Phuoc province hold Halal certification. This is essential for export to Saudi Arabia, UAE, Qatar, Kuwait, and other GCC states. Processing involves no alcohol, no animal-derived substances, and facilities are audited annually by recognized Halal certification bodies.

**Recommended Halal certifying bodies for GCC acceptance:**
- MUI (Majelis Ulama Indonesia) — widely accepted across GCC
- JAKIM (Malaysia) — accepted in most GCC markets
- IFANCA (USA) — accepted for many import purposes
- Halal Certification Europe (HCE) — accepted in some GCC markets

### Frozen Seafood (Shrimp, Pangasius, Squid)
All seafood processing facilities in our network hold Halal certification. Key points:
- Fish and shellfish are inherently Halal (Haram restrictions primarily affect processing)
- Facilities must use no pork-derived substances in processing
- Equipment must be free from cross-contamination with non-Halal products
- Annual audits by recognized Halal certification bodies

### Coffee
Green (unroasted) coffee beans are naturally Halal as they contain no animal products or alcohol. Halal certification for coffee is typically applied at the roasting stage (where flavoring might be added), though some GCC buyers request Halal certification for green bean export as well.

### Rice and Agricultural Products
Rice, black pepper, and other agricultural commodities are naturally Halal by nature. However, processing facilities that use equipment shared with non-Halal ingredients may require certified processing verification.

## GCC-Specific Halal Requirements

Each GCC country has specific requirements for Halal certification:

**Saudi Arabia:**
- SASO (Saudi Standards, Metrology and Quality Organization) maintains a list of approved Halal certifying bodies
- Food establishments must hold a Saudi-approved Halal certificate
- Particularly strict for meat, poultry, and processed food categories

**UAE:**
- ESMA (Emirates Authority for Standardization and Metrology) regulates Halal standards
- UAE accepts Halal certificates from bodies accredited under the Emirates Conformity Assessment Scheme (ECAS)
- Halal certificate must be product-specific, not just facility-level

**Qatar:**
- Ministry of Public Health (MOPH) oversees Halal food imports
- Qatar follows Gulf Standards Organization (GSO) Halal standard
- Typically accepts MUI, JAKIM, and major Islamic certifying bodies

## Documentation Required for Halal Exports

When exporting Halal food from Vietnam to GCC markets, the standard document set includes:

1. **Halal Certificate** — issued by an approved certifying body, specifying product name, lot numbers, and expiry date
2. **Halal Slaughter Certificate** (for meat only — not typically applicable for plant-based or seafood exports)
3. **Certificate of Origin** — from Vietnam Chamber of Commerce
4. **Commercial Invoice and Packing List**
5. **Phytosanitary Certificate** (for agricultural products)
6. **Health Certificate** (for seafood and processed food)
7. **Pre-shipment Inspection Report** (from SGS, Intertek, or Bureau Veritas)

## Practical Tips for GCC Buyers

1. **Verify certification body acceptance**: Before ordering, confirm that the specific Halal certifying body used by the Vietnamese processor is accepted by your country's import authority.
2. **Check certificate expiry**: Halal certificates typically expire annually. Request a current certificate with each shipment.
3. **Request lot-specific Halal certificates**: Some GCC authorities require lot-specific certificates rather than generic facility certificates.
4. **Consider Arabic labeling requirements**: GCC regulations require Arabic labeling on all retail food products. We can arrange Arabic printing on packaging.`,
    author: 'Ahmad Rashid',
    authorRole: 'GCC Markets Specialist',
    publishedAt: '2026-02-10',
    updatedAt: '2026-04-15',
    category: 'Export Guides',
    categorySlug: 'export-guides',
    tags: ['Halal food', 'Vietnam Halal export', 'GCC food import', 'Saudi Arabia food', 'UAE food supplier'],
    readTime: 9,
    coverImage: '/images/blog/halal-export-guide.jpg',
    seoTitle: 'Halal Food Export from Vietnam to GCC 2026 | Saudi Arabia UAE Qatar Guide',
    seoDescription: 'Complete guide to Halal food export from Vietnam to Saudi Arabia, UAE, Qatar, Kuwait. Which products are Halal certified, approved certifying bodies, and documentation requirements.',
    keywords: ['halal food export Vietnam', 'Vietnam halal supplier GCC', 'Vietnamese food Saudi Arabia', 'halal cashew nuts Vietnam', 'halal seafood Vietnam'],
    relatedSlugs: ['vietnam-cashew-nuts-export-guide', 'vietnam-black-pepper-export'],
  },
  {
    slug: 'incoterms-guide-vietnam-exporters',
    title: "Incoterms 2020 Guide for Vietnam Exporters: FOB, CFR, CIF, DDP Explained",
    excerpt: "Understanding Incoterms is essential for international trade. This guide explains FOB, CFR, CIF, DDP, and other terms in the context of exporting from Vietnam, with practical examples for GCC and European buyers.",
    content: `## What Are Incoterms and Why Do They Matter?

Incoterms (International Commercial Terms) are a set of 11 standardized trade terms published by the International Chamber of Commerce (ICC) that define the responsibilities of buyers and sellers in international trade. They determine who is responsible for the cost of shipping, insurance, and risk during transport.

For buyers sourcing from Vietnam, understanding Incoterms determines your total landed cost and the risks you assume.

## The Most Common Incoterms for Vietnam Exports

### FOB — Free On Board
**"FOB Ho Chi Minh City"** or **"FOB Da Nang"**

The seller delivers goods to the named port and loads them onto the vessel nominated by the buyer. Risk and cost transfer from seller to buyer when the goods are on board the ship.

**Buyer's responsibilities under FOB:**
- Freight (ocean shipping cost)
- Marine insurance (optional but recommended)
- Destination port charges, customs duties, and inland delivery

**Why FOB?** FOB is the most common starting point for buyers who want to control their own freight and insurance costs. It allows you to nominate your preferred freight forwarder and negotiate your own shipping rates.

**Example:** "W320 Cashew Nuts, $5.20/kg, FOB Ho Chi Minh City, Min 10 MT"

### CFR — Cost and Freight
**"CFR Jeddah"** or **"CFR Hamburg"**

The seller is responsible for the cost of freight to the destination port. Risk transfers to the buyer when goods are loaded on the vessel in Vietnam the same point as FOB.

**Buyer's responsibilities under CFR:**
- Marine insurance (highly recommended — seller's responsibility ends when goods board the ship)
- Destination port charges
- Customs duties and inland delivery

**Note:** A common misunderstanding is that under CFR, the buyer is protected until delivery. This is incorrect — risk transfers at origin. CFR only means the seller pays for the freight; insurance is still the buyer's responsibility.

### CIF — Cost, Insurance and Freight
**"CIF Dubai"** or **"CIF Alexandria"**

Like CFR, but the seller also arranges and pays for marine insurance. The policy is typically written for the minimum coverage (110% of invoice value, Institute Cargo Clauses C).

**Important:** Even under CIF, risk transfers to the buyer when goods are loaded in Vietnam. The insurance is the buyer's contractual right to claim against, but the seller purchased it.

**Buyer's responsibilities under CIF:**
- Destination port charges
- Customs duties and inland delivery
- Any additional insurance coverage above minimum CIF terms

### DAP — Delivered At Place
**"DAP Dubai Warehouse"** or **"DAP Riyadh"**

Seller is responsible for everything until goods are delivered to the named place (without unloading). Buyer handles unloading and customs at destination.

### DDP — Delivered Duty Paid
**"DDP Riyadh"**

The seller handles everything — origin charges, freight, insurance, destination customs, duties, and delivery to named place. Maximum responsibility on the seller.

**Important:** Vietnamese exporters offering DDP pricing are typically working with a local logistics partner in the destination country. Verify who the importer of record is and how customs duties are being handled.

## Which Incoterm Should You Choose?

**New to importing from Vietnam?** Start with CIF to your destination port. This gives you a single, all-inclusive price to compare across different suppliers. Once you've established shipping routes and freight relationships, switch to FOB.

**Experienced importer with own freight contract?** Use FOB — you'll save money by leveraging your own freight rates, especially on large volume.

**Buying for the first time in small quantities?** Consider DAP if the seller offers it — simplifies your logistics but expect a higher per-unit price.

## Payment Terms That Work with Incoterms

The most common payment structures in Vietnam-GCC trade:

1. **L/C at Sight (Letter of Credit)**: Bank-guaranteed payment upon presentation of compliant shipping documents. Preferred for first transactions and large orders.
2. **T/T 30/70**: 30% deposit when contract signed, 70% balance when documents issued. Common for established buyer-seller relationships.
3. **T/T 50/50**: Equal split. Popular compromise.
4. **CAD (Cash Against Documents)**: Payment released by buyer when documents presented through banks. Moderate risk for both parties.`,
    author: 'Le Van Thanh',
    authorRole: 'International Trade Manager',
    publishedAt: '2026-01-25',
    updatedAt: '2026-03-10',
    category: 'Trade Tips',
    categorySlug: 'trade-tips',
    tags: ['Incoterms', 'FOB', 'CIF', 'CFR', 'Vietnam export', 'trade terms'],
    readTime: 8,
    coverImage: '/images/blog/incoterms-guide.jpg',
    seoTitle: 'Incoterms 2020 Guide for Vietnam Exports | FOB CFR CIF DDP Explained',
    seoDescription: 'Practical guide to Incoterms for Vietnam export buyers. FOB, CFR, CIF, DDP explained with Vietnam-specific examples. Which Incoterm suits GCC and European buyers?',
    keywords: ['incoterms vietnam export', 'FOB vietnam price', 'CIF from vietnam', 'how to import from vietnam', 'vietnam trade terms'],
    relatedSlugs: ['vietnam-cashew-nuts-export-guide', 'halal-food-export-vietnam'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(p => p.categorySlug === categorySlug);
}

export function getRelatedBlogPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map(slug => blogPosts.find(p => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}
