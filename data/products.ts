export interface ProductSpec {
  label: string;
  value: string;
  notes?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  specs: ProductSpec[];
  certifications: string[];
  exportMarkets: string[];
  moq: string;
  containerCapacity: string;
  packagingOptions: string[];
  faqs: ProductFAQ[];
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  hsCode: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  icon: string;
  certifications: string[];
  exportMarkets: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  products: Product[];
}

const coffeeProducts: Product[] = [
  {
    slug: 'robusta-coffee-beans',
    name: 'Vietnamese Robusta Coffee Beans',
    category: 'Coffee',
    categorySlug: 'coffee',
    tagline: 'Bold, Full-Bodied Robusta from the Central Highlands',
    description: "Premium Grade 1 Robusta coffee beans from Dak Lak — Vietnam's premier coffee-growing region. Consistently high caffeine content, earthy body, and low acidity ideal for espresso blends and instant coffee manufacturing.",
    longDescription: `Vietnam is the world's largest producer of Robusta coffee, and Dak Lak province represents the pinnacle of Vietnamese coffee quality. Our Grade 1 Robusta beans are carefully cultivated at elevations between 500–900 metres above sea level, where volcanic red basalt soils and ideal rainfall create optimal growing conditions.

Robusta coffee beans contain approximately 2.7% caffeine — nearly double that of Arabica — making them the preferred choice for espresso blends where a rich crema and powerful kick are required. The beans' natural resistance to disease and pests means fewer chemical interventions, resulting in a cleaner cup profile.

Our processing facility uses both dry (natural) and wet (washed) processing methods. Dry-processed Robusta develops complex fruity notes and a heavier body, while washed Robusta is cleaner and brighter, making it ideal for blending with Arabica. Moisture content is carefully controlled to 12.5% maximum to ensure shelf stability during long shipping routes to the Middle East, Africa, and Europe.

We supply to roasters, coffee manufacturers, and private label brands globally. Custom moisture levels, screen sizes, and processing methods are available upon request. All lots are traceable to the farm cooperative level.`,
    heroImage: '/images/products/robusta-coffee-beans.jpg',
    specs: [
      { label: 'Grade', value: 'Grade 1 / Screen 18+' },
      { label: 'Moisture', value: '≤ 12.5%' },
      { label: 'Defects', value: '≤ 10 per 300g sample' },
      { label: 'Processing', value: 'Natural / Wet / Honey' },
      { label: 'Crop Year', value: 'Oct–Jan harvest' },
      { label: 'Origin', value: 'Dak Lak, Gia Lai, Kon Tum' },
      { label: 'Altitude', value: '500–900 MASL' },
      { label: 'Caffeine', value: '~2.7%' },
      { label: 'Shelf Life', value: '24 months (green beans)' },
      { label: 'HS Code', value: '0901.11.10' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'Rainforest Alliance', 'UTZ', '4C Association', 'Organic (on request)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'Italy', 'South Korea', 'Japan', 'Egypt', 'Algeria'],
    moq: '1 x 20ft container (≈ 18 MT)',
    containerCapacity: '18–19 MT per 20ft / 25 MT per 40ft',
    packagingOptions: ['60 kg jute bags', 'GrainPro liner bags', 'Vacuum sealed bags', 'Custom OEM packaging'],
    faqs: [
      { question: 'What SCAA cupping score can I expect for your Robusta?', answer: 'Our Grade 1 Robusta typically scores 78–82 on the SCAA scale, suitable for commercial espresso blends. Micro-lot selections can achieve higher scores.' },
      { question: 'Do you offer custom screen sizes?', answer: 'Yes. We offer Screen 14, 16, 18, and 19 based on buyer requirements. Uniformity is maintained at ≥ 90%.' },
      { question: 'What is the lead time from order to shipment?', answer: 'For in-stock lots: 7–14 days. For custom processing or larger volumes: 3–6 weeks depending on processing method.' },
      { question: 'Do you provide pre-shipment samples?', answer: 'Yes, 500g samples are available free of charge. Courier costs are borne by the buyer for the first sample.' },
      { question: 'Can you provide organic certified Robusta?', answer: 'Yes, we work with USDA Organic and EU Organic certified farms. Organic lots have different pricing and require advance booking during harvest season.' },
    ],
    relatedSlugs: ['arabica-coffee-beans', 'black-pepper-bulk'],
    seoTitle: 'Vietnamese Robusta Coffee Beans Export | Grade 1 | Ideal Deal Vietnam',
    seoDescription: 'Buy premium Vietnamese Robusta coffee beans for export. Grade 1, Screen 18+, HACCP certified. MOQ 1 container. Supplier to Saudi Arabia, UAE, Germany, Italy.',
    keywords: ['robusta coffee beans Vietnam', 'Vietnamese coffee export', 'buy robusta coffee bulk', 'coffee beans supplier Vietnam', 'Dak Lak robusta coffee'],
    hsCode: '0901.11.10',
  },
  {
    slug: 'arabica-coffee-beans',
    name: 'Vietnamese Arabica Coffee Beans',
    category: 'Coffee',
    categorySlug: 'coffee',
    tagline: "Specialty-Grade Arabica from Da Lat's Cool Highlands",
    description: 'Single-origin Arabica coffee from the Lam Dong highlands, grown at 1,400–1,600 MASL. Bright acidity, floral aroma, and caramel sweetness make this a standout for specialty roasters and premium blends.',
    longDescription: `Vietnam's Arabica production is centered in the cool, misty highlands of Lam Dong province, particularly around the city of Da Lat at elevations of 1,400–1,600 metres above sea level. The unique micro-climate — with temperatures ranging 15–25°C year-round — allows Arabica cherries to develop slowly, concentrating sugars and creating a complex cup profile that has surprised specialty coffee buyers worldwide.

Our Arabica offerings span washed, natural, and honey processing methods, each revealing different facets of the origin's character. Washed Arabica from our partner farms shows clean brightness, bergamot and citrus notes, and a honey-like finish. Natural-processed Arabica develops deeper fruit complexity with strawberry and dark chocolate undertones.

As a specialty-focused supplier, we work directly with small-holder farming cooperatives to implement Best Agricultural Practices (BAP) and maintain traceability at the farm-group level. Cupping scores range from 82–87+ for our specialty micro-lots, with commercial grades available at 78–82.

For private label roasters, we offer custom roasting profiles in collaboration with our Da Lat roasting partners, as well as green bean export for in-country roasting.`,
    heroImage: '/images/products/arabica-coffee-beans.jpg',
    specs: [
      { label: 'Grade', value: 'Specialty / Commercial / Premium' },
      { label: 'Moisture', value: '≤ 11.5%' },
      { label: 'Cupping Score', value: '82–87 (specialty lots)' },
      { label: 'Processing', value: 'Washed / Natural / Honey' },
      { label: 'Origin', value: 'Lam Dong (Da Lat), Quang Tri' },
      { label: 'Altitude', value: '1,400–1,600 MASL' },
      { label: 'Variety', value: 'Catimor, Bourbon, Typica' },
      { label: 'Shelf Life', value: '18 months (green beans)' },
      { label: 'HS Code', value: '0901.11.20' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'Rainforest Alliance', 'Fair Trade (select lots)', 'Organic (on request)'],
    exportMarkets: ['USA', 'Germany', 'Japan', 'South Korea', 'Australia', 'UAE', 'UK', 'Canada'],
    moq: '1 x 20ft container (≈ 16 MT) or 1 pallet (500 kg) for specialty',
    containerCapacity: '16 MT per 20ft / 22 MT per 40ft',
    packagingOptions: ['60 kg jute bags with GrainPro liner', 'Vacuum sealed 30 kg bags', 'Custom retail packaging'],
    faqs: [
      { question: 'How does Vietnamese Arabica compare to Ethiopian or Colombian origins?', answer: "Vietnamese Arabica offers a unique profile — bright acidity with herbal and floral notes that differ from Ethiopian Arabica's berry-forward profile. It typically offers competitive pricing advantage while maintaining quality." },
      { question: 'Are cupping reports available for each lot?', answer: 'Yes, we provide full cupping reports from Q-Graders for specialty lots. Commercial grade lots come with standard quality certificates.' },
      { question: 'Can you source micro-lots under 1 tonne?', answer: 'Yes, for specialty buyers we can arrange micro-lot orders from 250 kg. These are priced at a premium and require advance booking during harvest.' },
      { question: 'What certifications support EU market entry?', answer: "We hold EU Organic certification for select farming cooperatives and can provide all documentation required under the EU Deforestation Regulation (EUDR) including geolocation coordinates and supply chain mapping." },
    ],
    relatedSlugs: ['robusta-coffee-beans', 'black-pepper-bulk'],
    seoTitle: 'Vietnamese Arabica Coffee Beans Export | Specialty Grade | Da Lat Origin',
    seoDescription: 'Export-quality Arabica coffee from Da Lat highlands, Vietnam. Specialty grade 82–87 cupping score. Washed, natural, honey process. MOQ 1 pallet. Supplier to Germany, USA, Japan.',
    keywords: ['arabica coffee beans Vietnam', 'Da Lat coffee export', 'Vietnamese arabica specialty', 'buy arabica coffee bulk', 'Vietnam coffee supplier'],
    hsCode: '0901.11.20',
  },
];

const cashewProducts: Product[] = [
  {
    slug: 'cashew-nuts-w320',
    name: 'Cashew Nuts W320',
    category: 'Cashew Nuts',
    categorySlug: 'cashew-nuts',
    tagline: "World-Standard W320 — Vietnam's Most Exported Cashew Grade",
    description: "W320 whole white cashews — 320 kernels per pound — are the global benchmark for cashew quality. Vietnam is the world's #1 cashew exporter, and our W320 grade meets the strictest international import standards for the GCC, EU, and North American markets.",
    longDescription: `Vietnam produces approximately 90% of the world's processed cashew kernels, and the W320 grade — 320 whole white kernels per pound — is the international standard against which all cashews are measured. Ideal Deal Vietnam sources directly from processing facilities in Binh Phuoc, Dong Nai, and Ba Ria–Vung Tau provinces, where modern shelling, grading, and packing technology produces kernels that consistently meet or exceed USDA and EU import standards.

W320 cashews have a natural, creamy-ivory color, uniform size, and a characteristically sweet, buttery flavor profile with low tannin content. They are whole kernels with no splits or broken pieces, making them ideal for retail snack packs, confectionery, chocolate dipping, and foodservice applications across the Middle East, Europe, and Asia.

Our processing plants operate under ISO 22000, HACCP, BRC, and FSSC 22000 certifications. All lots are tested for aflatoxins (B1, B2, G1, G2), heavy metals, pesticide residues, and moisture before release. We offer both conventional and organic-certified grades.

Packaging options include vacuum-sealed tins, nitrogen-flushed aluminum pouches, and bulk PP bags. Custom private label packaging is available for retail and wholesale brands.`,
    heroImage: '/images/products/cashew-nuts-w320.jpg',
    specs: [
      { label: 'Grade', value: 'W320 (320 kernels/lb)' },
      { label: 'Moisture', value: '≤ 5%' },
      { label: 'Total Defects', value: '≤ 15 pieces per 500g' },
      { label: 'Broken Kernels', value: '≤ 2%' },
      { label: 'Foreign Matter', value: 'Nil' },
      { label: 'Aflatoxin B1', value: '≤ 8 ppb (EU standard)' },
      { label: 'Origin', value: 'Binh Phuoc, Dong Nai, Ba Ria' },
      { label: 'Color', value: 'White / Ivory (LW)' },
      { label: 'Shelf Life', value: '12 months vacuum / 24 months tin' },
      { label: 'HS Code', value: '0801.32.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'BRC Grade A', 'FSSC 22000', 'Halal', 'Kosher', 'Organic (select lots)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Germany', 'Netherlands', 'USA', 'India', 'China'],
    moq: '1 x 20ft container (≈ 10 MT)',
    containerCapacity: '10–12 MT per 20ft / 22–24 MT per 40ft',
    packagingOptions: ['25 kg vacuum PP bag', '11.34 kg vacuum tin', '5 kg vacuum bag', 'Custom retail OEM', 'Nitrogen-flushed pouch'],
    faqs: [
      { question: 'What is the difference between W320 and W240?', answer: 'W320 means 320 kernels per pound — medium-sized nuts. W240 means 240 kernels per pound — larger nuts. W320 is the most widely traded grade globally due to its price-quality balance.' },
      { question: 'Do you supply Halal-certified cashews for the GCC market?', answer: 'Yes, all our cashew processing facilities hold current Halal certification from accredited Islamic certification bodies, with certificates available for review.' },
      { question: 'Can you arrange full container loads (FCL) directly to Saudi Arabia or UAE?', answer: 'Yes, we regularly ship FCL to Jeddah, Riyadh, Dubai, Abu Dhabi, and Dammam. We handle all export documentation including phytosanitary certificates, COO, and health certificates.' },
      { question: 'What is the aflatoxin testing protocol?', answer: 'Every lot is tested at accredited SGS, Intertek, or Bureau Veritas laboratories in Vietnam before shipment. Test reports are provided with each shipment.' },
      { question: 'Do you offer private label packaging?', answer: 'Yes, we offer custom label design, pouch printing, and branded tin manufacturing for MOQs of 500 kg and above.' },
    ],
    relatedSlugs: ['cashew-nuts-w240', 'cashew-nuts-w180'],
    seoTitle: 'Cashew Nuts W320 Vietnam Export | Wholesale B2B Supplier | Halal Certified',
    seoDescription: 'Premium W320 cashew nuts from Vietnam. ISO 22000, HACCP, Halal certified. Export to Saudi Arabia, UAE, EU. MOQ 1 container. Best price from direct manufacturer.',
    keywords: ['cashew nuts w320 Vietnam', 'buy w320 cashews wholesale', 'Vietnam cashew exporter', 'cashew nuts supplier Saudi Arabia', 'w320 cashew price'],
    hsCode: '0801.32.00',
  },
  {
    slug: 'cashew-nuts-w240',
    name: 'Cashew Nuts W240',
    category: 'Cashew Nuts',
    categorySlug: 'cashew-nuts',
    tagline: 'Large, Premium W240 Cashews — The Choice for Luxury Retail',
    description: 'W240 extra-large whole cashews — 240 kernels per pound. Premium grade favored for high-end retail, gourmet gifting, and hotel foodservice across the Middle East and Europe where kernel size signals quality.',
    longDescription: `W240 cashews represent the premium tier of the global cashew market. With just 240 kernels per pound, each nut is visibly larger than standard W320, commanding a price premium in upscale retail, hotel dining, and luxury gifting markets. Vietnam's Binh Phuoc province produces the majority of large-grade cashews due to its ideal soil composition and the cultivation of high-yielding hybrid varieties.

Our W240 cashews are sourced exclusively from audited processing facilities that dedicate separate production lines to large-grade nuts to prevent cross-contamination with smaller grades. Optical sorting machines ensure size uniformity, while color graders separate ivory-white (IW) and lightly whiter (LW) lots.

In the Middle East market — particularly Saudi Arabia, UAE, and Kuwait — larger cashew kernels are associated with higher quality and command significant retail price premiums. Our W240 grade is a preferred choice for luxury food retailers, private label brands, and hotel chains throughout the GCC region.

We offer W240 in vacuum-sealed retail packs of 250g, 500g, and 1 kg for branded retail programs, as well as bulk 25 kg bags for food manufacturers and blending facilities.`,
    heroImage: '/images/products/cashew-nuts-w240.jpg',
    specs: [
      { label: 'Grade', value: 'W240 (240 kernels/lb)' },
      { label: 'Moisture', value: '≤ 5%' },
      { label: 'Total Defects', value: '≤ 12 pieces per 500g' },
      { label: 'Broken Kernels', value: '≤ 1.5%' },
      { label: 'Color', value: 'Ivory White (IW) / White (W)' },
      { label: 'Aflatoxin B1', value: '≤ 8 ppb' },
      { label: 'Origin', value: 'Binh Phuoc, Vietnam' },
      { label: 'Shelf Life', value: '12 months (vacuum) / 24 months (tin)' },
      { label: 'HS Code', value: '0801.32.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'BRC Grade A', 'Halal', 'Kosher', 'FDA Registration'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Kuwait', 'Germany', 'France', 'UK', 'USA', 'Australia'],
    moq: '5 MT',
    containerCapacity: '10–12 MT per 20ft / 22–24 MT per 40ft',
    packagingOptions: ['25 kg vacuum PP bag', '11.34 kg vacuum tin', '250g / 500g / 1 kg retail pack', 'Custom OEM retail'],
    faqs: [
      { question: 'Why is W240 more expensive than W320?', answer: 'W240 nuts are larger (fewer per pound) and rarer. It requires more raw cashew fruit to produce the same weight of W240 kernels compared to W320, driving up the cost.' },
      { question: 'Is W240 suitable for chocolate-covered cashew products?', answer: "Absolutely — the larger size of W240 makes it ideal for chocolate enrobing as it provides a more satisfying size-to-chocolate ratio and better visual appeal in premium gift boxes." },
      { question: 'Can you supply mixed grades (W240 + W320) in one container?', answer: 'Yes, split containers are available for buyers wishing to compare or blend grades. Minimum per grade within a container is 5 MT.' },
    ],
    relatedSlugs: ['cashew-nuts-w320', 'cashew-nuts-w180'],
    seoTitle: 'W240 Cashew Nuts Export Vietnam | Large Grade Premium Cashews B2B',
    seoDescription: 'Premium W240 large cashew nuts from Vietnam. Halal, ISO 22000, BRC A certified. Export to Saudi Arabia, UAE, Europe. MOQ 5 MT. Competitive wholesale price.',
    keywords: ['w240 cashew nuts Vietnam', 'large cashew nuts export', 'premium cashew supplier', 'w240 cashews wholesale price', 'cashew nuts UAE supplier'],
    hsCode: '0801.32.00',
  },
  {
    slug: 'cashew-nuts-w180',
    name: 'Cashew Nuts W180',
    category: 'Cashew Nuts',
    categorySlug: 'cashew-nuts',
    tagline: 'Jumbo W180 Cashews — Finest Large Whole Kernels for Premium Markets',
    description: 'W180 jumbo cashew kernels — 180 kernels per pound. The pinnacle of whole cashew grades, reserved for ultra-premium retail, gourmet gifting, and high-end foodservice. Exceptional size, uniform ivory color.',
    longDescription: `W180 cashew kernels are the crown jewel of the cashew industry. At just 180 kernels per pound, these are the largest commercially available whole cashew grade and command the highest market price. Their exceptional size, uniform ivory-white color, and distinct sweet flavor make them the preferred choice for premium gift box brands, luxury hotel minibar programs, and high-end confectionery.

Producing W180 grade cashews requires careful selection of raw cashew nuts with the ideal size profile, followed by precision shelling and optical sorting to achieve grade compliance. The yield of W180 from raw nuts is lower than smaller grades, making it a limited-availability product that should be contracted in advance of harvest seasons.

Our W180 cashews are available from facilities with BRC Grade A, ISO 22000, HACCP, and full Halal certification. Each lot is subjected to third-party laboratory analysis for aflatoxins, pesticide residues, heavy metals, and microbiological safety before shipment.`,
    heroImage: '/images/products/cashew-nuts-w180.jpg',
    specs: [
      { label: 'Grade', value: 'W180 (180 kernels/lb)' },
      { label: 'Moisture', value: '≤ 5%' },
      { label: 'Broken Kernels', value: '≤ 1%' },
      { label: 'Color', value: 'Ivory White (IW)' },
      { label: 'Aflatoxin Total', value: '≤ 10 ppb' },
      { label: 'Origin', value: 'Binh Phuoc, Vietnam' },
      { label: 'Shelf Life', value: '24 months (nitrogen tin)' },
      { label: 'HS Code', value: '0801.32.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'BRC Grade A', 'Halal', 'Kosher'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Qatar', 'Germany', 'USA', 'Japan', 'UK'],
    moq: '3 MT',
    containerCapacity: '10 MT per 20ft',
    packagingOptions: ['11.34 kg nitrogen tin', '5 kg vacuum tin', '250g premium retail', 'Custom OEM gifting pack'],
    faqs: [
      { question: 'How far in advance should I book W180 to guarantee supply?', answer: 'W180 is limited supply. We recommend booking 8–12 weeks before your required shipment date, especially for Q3/Q4 peak demand in the gifting season.' },
      { question: 'Can W180 be supplied in branded gift tins?', answer: 'Yes, we offer custom tin printing and design services. MOQ for custom branded tins is 500 units.' },
    ],
    relatedSlugs: ['cashew-nuts-w240', 'cashew-nuts-w320'],
    seoTitle: 'W180 Jumbo Cashew Nuts Export Vietnam | Premium Grade | Direct Supplier',
    seoDescription: 'W180 jumbo cashew nuts from Vietnam. Largest whole kernel grade. Halal, BRC A, ISO 22000 certified. Export to Saudi Arabia, UAE, Germany. MOQ 3 MT.',
    keywords: ['w180 cashew nuts Vietnam', 'jumbo cashew export', 'premium cashew nuts supplier', 'w180 cashews wholesale'],
    hsCode: '0801.32.00',
  },
];

const riceProducts: Product[] = [
  {
    slug: 'jasmine-rice',
    name: 'Vietnamese Jasmine Rice (ST25)',
    category: 'Rice',
    categorySlug: 'rice',
    tagline: "World's Best Rice — ST25 Jasmine from the Mekong Delta",
    description: `Vietnam's award-winning ST25 Jasmine rice — voted "World's Best Rice" at the World Rice Conference. Long grain, naturally fragrant, soft and slightly sticky texture. Premium export grade for retail and foodservice buyers.`,
    longDescription: `ST25, developed by Vietnamese scientist Ho Quang Cua and named "World's Best Rice" at the 2019 World Rice Conference in the Philippines, has transformed Vietnam's rice export reputation. This premium jasmine variety is cultivated in the Mekong Delta's rich alluvial soils, particularly in Soc Trang province, where the unique combination of freshwater, tidal salinity, and mineral-rich sediment creates ideal growing conditions.

ST25 Jasmine rice is distinguished by its natural floral fragrance — released during cooking — its long, slender grain shape, and its soft, slightly sticky texture when cooked. Unlike Thai Jasmine (Hom Mali), Vietnamese ST25 has a subtly different aromatic profile with undertones of pandan leaf, which has proven particularly popular in Middle Eastern and Asian markets.

Our export-grade ST25 is milled to 5% broken specification (5% broken rice content), ensuring consistently long, whole grains. Higher specification grades (2% and 0% broken) are available for premium retail brands. We also offer the option of aged ST25 (6–12 months), which further reduces moisture and produces a firmer grain texture preferred in some markets.

All rice is processed in modern mills certified to ISO 22000 and HACCP. Fumigation with approved phytosanitary treatments is included in the export price, along with phytosanitary certificates from Vietnam's Plant Protection Department.`,
    heroImage: '/images/products/jasmine-rice.jpg',
    specs: [
      { label: 'Variety', value: 'ST25 Jasmine' },
      { label: 'Broken', value: '5% / 2% / 0% (select grade)' },
      { label: 'Moisture', value: '≤ 14%' },
      { label: 'Milling', value: 'Well milled, silky polish' },
      { label: 'Chalky Grains', value: '≤ 2%' },
      { label: 'Foreign Matters', value: 'Nil' },
      { label: 'Grain Length', value: '6.2–6.8 mm avg' },
      { label: 'Aroma', value: 'Natural jasmine / pandan' },
      { label: 'Origin', value: 'Mekong Delta, Soc Trang' },
      { label: 'Shelf Life', value: '18 months sealed' },
      { label: 'HS Code', value: '1006.30.20' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Vietnam Export Quality Standard', 'Phytosanitary Certificate', 'Halal (on request)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Philippines', 'Malaysia', 'China', 'Ghana', 'Ivory Coast', 'Senegal'],
    moq: '1 x 20ft container (≈ 22 MT)',
    containerCapacity: '22–25 MT per 20ft / 26–27 MT per 40ft',
    packagingOptions: ['50 kg PP bag', '25 kg PP bag', '10 kg PP bag', '5 kg vacuum bag', '1 kg retail bag', 'Custom OEM printing'],
    faqs: [
      { question: 'What makes ST25 different from Thai Jasmine rice?', answer: "ST25 has a similar floral aroma to Thai Hom Mali but with a distinct pandan note. It tends to be slightly softer when cooked and is generally priced more competitively. Many buyers blend ST25 with domestic varieties for cost optimization." },
      { question: 'Can you supply custom-printed PP bags for retail?', answer: 'Yes, we offer full-color print PP bag manufacturing from 1 kg to 50 kg sizes. MOQ for custom printing is 5,000 bags.' },
      { question: 'Do you handle phytosanitary inspection and fumigation?', answer: 'Yes, fumigation and phytosanitary certificate issuance are included in all export quotations. We work with Vietnam\'s Plant Protection Department (PPD) for all certificates.' },
    ],
    relatedSlugs: ['cashew-nuts-w320', 'frozen-white-shrimp'],
    seoTitle: 'Vietnamese ST25 Jasmine Rice Export | World\'s Best Rice | B2B Supplier',
    seoDescription: "Export ST25 Jasmine rice from Vietnam's Mekong Delta. World's Best Rice 2019. Fragrant, long grain, 5% broken. MOQ 1 container. Supplier to Saudi Arabia, UAE, Africa.",
    keywords: ['ST25 jasmine rice Vietnam', 'Vietnamese jasmine rice export', 'buy jasmine rice wholesale', 'Vietnam rice supplier', 'fragrant rice export'],
    hsCode: '1006.30.20',
  },
];

const seafoodProducts: Product[] = [
  {
    slug: 'frozen-white-shrimp',
    name: 'Frozen Vannamei (White) Shrimp',
    category: 'Frozen Seafood',
    categorySlug: 'frozen-seafood',
    tagline: 'Premium IQF Vannamei Shrimp — Vietnam\'s Top Export Seafood',
    description: 'Individual Quick Frozen (IQF) Vannamei white shrimp from VASEP-certified aquaculture farms in the Mekong Delta. Available HOSO, HLSO, PD, PTO, and PDTO. The gold standard for international seafood buyers.',
    longDescription: `Vietnam is consistently among the top 3 global exporters of frozen shrimp, with vannamei (Litopenaeus vannamei) representing the largest volume. The Mekong Delta — with its complex network of brackish water canals, rivers, and tidal zones — provides ideal conditions for intensive shrimp aquaculture.

Our vannamei shrimp supply chain spans from certified farms practicing Responsible Aquaculture Protocol (RAP) through to EU-registered, HACCP-certified cold chain processing plants. All shrimp are harvested to order, immediately transferred to processing facilities in refrigerated trucks, and processed within 4 hours of harvest to preserve peak freshness and texture.

We offer a comprehensive range of specifications:
- HOSO (Head On, Shell On) — most economical, ideal for markets preferring whole presentation
- HLSO (Headless, Shell On) — popular in Europe and North America
- PD (Peeled, Deveined) — ready for cooking, popular in food service
- PTO (Peeled, Tail On) — presentation grade for restaurants and retail shrimp rings
- PDTO (Peeled, Deveined, Tail On) — premium presentation with maximum convenience

Count sizes range from 8/12 to 100/200 (pieces per pound), with the most popular export sizes being 21/25, 26/30, 31/40, and 41/50.

All processing facilities hold current EU registration, FDA registration (for USA), and HACCP certification. Third-party testing covers antibiotics (nitrofurans, chloramphenicol, oxytetracycline), heavy metals, and microbiological parameters before each shipment.`,
    heroImage: '/images/products/frozen-white-shrimp.jpg',
    specs: [
      { label: 'Species', value: 'Litopenaeus vannamei (White Shrimp)' },
      { label: 'Form', value: 'HOSO / HLSO / PD / PTO / PDTO' },
      { label: 'Count Size', value: '8/12 to 100/200 pcs/lb' },
      { label: 'Glazing', value: '10–15% (IQF method)' },
      { label: 'Core Temperature', value: '≤ -18°C' },
      { label: 'Net Weight', value: '1 kg / 1.8 kg / 2 kg block' },
      { label: 'Antibiotics', value: 'Negative (SGS/Eurofins certified)' },
      { label: 'Origin', value: 'Ca Mau, Soc Trang, Ben Tre (Mekong Delta)' },
      { label: 'Shelf Life', value: '24 months at -18°C' },
      { label: 'HS Code', value: '0306.17.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'EU Registered', 'FDA Registered', 'ASC', 'BAP (Best Aquaculture Practices)', 'HALAL', 'BRC'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Japan', 'South Korea', 'EU (Netherlands, Germany, Spain)', 'USA', 'Australia'],
    moq: '1 x 20ft reefer container (≈ 10 MT)',
    containerCapacity: '10–12 MT per 20ft reefer / 22–24 MT per 40ft reefer',
    packagingOptions: ['1 kg IQF bag x 10 per carton', '1.8 kg block x 6 per carton', '2 kg block x 6 per carton', 'Custom OEM retail packs'],
    faqs: [
      { question: 'How do you ensure shrimp is antibiotic-free?', answer: 'Farms undergo regular pond water testing during the grow-out cycle. All harvest lots are sampled and tested at accredited labs (Eurofins, SGS) for a panel of 15+ antibiotic residues before processing begins.' },
      { question: 'What is IQF and why is it preferred?', answer: "IQF (Individual Quick Freezing) freezes each shrimp individually at -35°C in a tunnel freezer, preserving cell structure and preventing clumping. This produces superior texture and appearance compared to block-frozen shrimp." },
      { question: 'Can you arrange reefer container shipping to the Middle East?', answer: 'Yes, we regularly ship reefer containers to Jeddah, Dubai, Kuwait, Qatar, and other GCC ports. Transit times are approximately 18–22 days from Ho Chi Minh City.' },
      { question: 'Do you offer seafood with Halal certification for Middle East markets?', answer: "Yes, all processing plants in our network hold current Halal certification. Halal certificates are issued per shipment and are included in the document set." },
    ],
    relatedSlugs: ['jasmine-rice', 'cashew-nuts-w320'],
    seoTitle: 'Frozen Vannamei Shrimp Vietnam Export | IQF Shrimp Supplier | HACCP EU Certified',
    seoDescription: 'Buy frozen IQF vannamei shrimp from Vietnam. EU registered, HACCP, ASC, Halal certified. HOSO, HLSO, PD, PTO forms. MOQ 1 reefer container. Export to Saudi Arabia, UAE, EU.',
    keywords: ['frozen vannamei shrimp Vietnam', 'IQF shrimp export', 'Vietnam shrimp supplier', 'frozen shrimp wholesale', 'halal shrimp Vietnam'],
    hsCode: '0306.17.00',
  },
];

const spiceProducts: Product[] = [
  {
    slug: 'black-pepper-bulk',
    name: 'Vietnamese Black Pepper (500 GL+)',
    category: 'Spices',
    categorySlug: 'spices',
    tagline: 'The "King of Spices" — Phu Quoc & Gia Lai Origin Black Pepper',
    description: 'Premium Vietnamese black pepper with 500+ gramme/litre bulk density. Pungent, spicy, and aromatic. Vietnam is the world\'s #1 pepper exporter. ASTA quality, suitable for retail, grinding, and industrial processing.',
    longDescription: `Vietnam has held the position of world's largest black pepper exporter for over two decades, accounting for approximately 35% of global production. The primary growing regions — Phu Quoc island (Kien Giang province), Gia Lai, Dak Lak, and Binh Phuoc — each impart slightly different aromatic characteristics to the pepper, with Phu Quoc pepper renowned for its intense pungency and complex aromatic profile.

Black pepper (Piper nigrum) berries are harvested when roughly 70% ripe (green-yellow stage), then sun-dried for 3–4 days to produce the characteristic dark, wrinkled black peppercorn. The drying process concentrates piperine — the active compound responsible for black pepper's heat — while developing the complex aromatic compounds that distinguish premium Vietnamese pepper.

We supply black pepper to three primary market segments:
1. Retail/Food Service: 500 GL+ whole peppercorns in consumer and professional packaging
2. Grinding Facilities: 550 GL+ and 570 GL+ for pepper mills and spice manufacturing
3. Essential Oil / Oleoresin Production: High-piperine lots for extraction industry

Export specifications include ASTA, ESA, and custom buyer specifications. Steam sterilization is available for markets requiring SPC (Standard Plate Count) compliance, particularly EU and USA.`,
    heroImage: '/images/products/black-pepper.jpg',
    specs: [
      { label: 'Grade', value: 'FAQ / ASTA 500 GL / 550 GL / 570 GL' },
      { label: 'Bulk Density', value: '500 – 600 g/L' },
      { label: 'Moisture', value: '≤ 13%' },
      { label: 'Piperine', value: '≥ 4.5%' },
      { label: 'Extraneous Matter', value: '≤ 1%' },
      { label: 'Light Berries', value: '≤ 10%' },
      { label: 'Salmonella', value: 'Absent (steam sterilized on request)' },
      { label: 'Origin', value: 'Phu Quoc, Gia Lai, Dak Lak' },
      { label: 'Shelf Life', value: '24 months sealed' },
      { label: 'HS Code', value: '0904.11.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'ASTA Quality', 'Organic (select lots)', 'Halal'],
    exportMarkets: ['India', 'Germany', 'USA', 'UAE', 'Netherlands', 'Saudi Arabia', 'Egypt', 'Japan'],
    moq: '5 MT',
    containerCapacity: '18–20 MT per 20ft',
    packagingOptions: ['25 kg PP bag', '50 kg jute bag', '1 kg vacuum retail', 'Custom OEM packaging'],
    faqs: [
      { question: 'What does GL (gramme/litre) mean in pepper grading?', answer: "GL stands for gramme per litre and measures the bulk density (volumetric weight) of peppercorns. Higher GL indicates denser, fuller berries with higher essential oil content. 500 GL is the international commercial standard." },
      { question: 'Do you offer white pepper from Vietnam?', answer: 'Yes, we supply white pepper (soaked and hulled) in 500 GL and 550 GL grades from Phu Quoc, which is renowned for the finest white pepper globally.' },
      { question: 'Is steam sterilization available?', answer: 'Yes, steam sterilization to achieve low SPC counts is available. This is recommended for EU and USA markets with strict microbiological requirements.' },
    ],
    relatedSlugs: ['robusta-coffee-beans', 'cashew-nuts-w320'],
    seoTitle: 'Vietnamese Black Pepper Export | 500 GL+ ASTA Quality | Wholesale Supplier',
    seoDescription: "Buy Vietnamese black pepper 500 GL+ ASTA quality. World #1 pepper origin. HACCP, ISO 22000. Export to Germany, USA, Saudi Arabia, UAE. MOQ 5 MT.",
    keywords: ['black pepper Vietnam export', 'Vietnamese pepper supplier', 'buy black pepper bulk', 'Phu Quoc pepper wholesale', 'pepper exporter Vietnam'],
    hsCode: '0904.11.00',
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: 'coffee',
    name: 'Coffee',
    tagline: "Vietnam's Finest Coffee for Global Roasters",
    description: 'Vietnam is the world\'s #2 coffee producer. We export premium Robusta and specialty Arabica beans direct from Dak Lak and Da Lat highlands to roasters, blenders, and private label brands worldwide.',
    longDescription: 'Discover Vietnam\'s extraordinary coffee heritage through Ideal Deal Vietnam\'s curated selection of export-grade coffees. From the bold, full-bodied Robusta of the Central Highlands to the delicate, floral Arabica of the Da Lat plateau, we connect international coffee businesses directly with Vietnamese farm cooperatives and processing mills.',
    heroImage: '/images/categories/coffee-hero.jpg',
    icon: '☕',
    certifications: ['HACCP', 'ISO 22000', 'Rainforest Alliance', 'UTZ', '4C Association', 'Organic'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'Italy', 'South Korea', 'Japan', 'USA'],
    seoTitle: 'Vietnamese Coffee Export | Robusta & Arabica Beans | Wholesale B2B Supplier',
    seoDescription: 'Export-quality Vietnamese coffee beans — Robusta and Arabica. Direct from Dak Lak and Da Lat farms. HACCP certified. MOQ 1 container. Supplier to GCC, EU, Asia.',
    keywords: ['Vietnamese coffee export', 'coffee beans supplier Vietnam', 'robusta coffee wholesale', 'arabica vietnam', 'coffee import from vietnam'],
    products: coffeeProducts,
  },
  {
    slug: 'cashew-nuts',
    name: 'Cashew Nuts',
    tagline: "Vietnam — The World's Largest Cashew Processor",
    description: 'Vietnam processes ~65% of the world\'s cashew supply. We export W180, W240, W320, and specialty grades to retailers, food manufacturers, and importers in the GCC, EU, and Asia with full Halal and BRC certification.',
    longDescription: "Vietnam's dominance in cashew processing is unmatched globally. With state-of-the-art shelling, grading, and packing facilities in Binh Phuoc and Dong Nai, Ideal Deal Vietnam delivers consistent quality cashew kernels across all commercial grades — from the most-traded W320 to the prestigious jumbo W180.",
    heroImage: '/images/categories/cashew-hero.jpg',
    icon: '🥜',
    certifications: ['ISO 22000', 'HACCP', 'BRC Grade A', 'Halal', 'Kosher', 'FSSC 22000'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Germany', 'Netherlands', 'USA', 'India'],
    seoTitle: 'Cashew Nuts Vietnam Export | W180 W240 W320 | Halal Certified Supplier',
    seoDescription: 'Buy cashew nuts from Vietnam — W180, W240, W320 grades. ISO 22000, HACCP, Halal certified. Export to Saudi Arabia, UAE, EU. Direct manufacturer price.',
    keywords: ['cashew nuts Vietnam', 'cashew exporter Vietnam', 'buy cashews wholesale', 'halal cashew nuts', 'cashew nuts supplier GCC'],
    products: cashewProducts,
  },
  {
    slug: 'rice',
    name: 'Rice',
    tagline: "Mekong Delta Rice — Feeding the World with Quality",
    description: 'Vietnam is a top 3 global rice exporter. We supply Jasmine ST25, fragrant long-grain, and broken rice varieties from the Mekong Delta to Africa, the Middle East, and Asia with full phytosanitary documentation.',
    longDescription: "The Mekong Delta produces some of the world's finest rice in its rich, mineral-laden alluvial soils fed by the Mekong River. Ideal Deal Vietnam exports a comprehensive range of rice varieties — from premium ST25 Jasmine to 5% and 25% broken rice for food aid programs — all processed in modern mills with ISO 22000 certification.",
    heroImage: '/images/categories/rice-hero.jpg',
    icon: '🌾',
    certifications: ['ISO 22000', 'HACCP', 'Vietnam Export Standard', 'Phytosanitary Certificate', 'Halal'],
    exportMarkets: ['Saudi Arabia', 'Philippines', 'Malaysia', 'China', 'Ghana', 'Ivory Coast', 'Senegal', 'Cameroon'],
    seoTitle: 'Vietnamese Rice Export | ST25 Jasmine Rice | Mekong Delta Supplier',
    seoDescription: "Vietnam rice export — ST25 Jasmine, fragrant long grain, broken rice. ISO 22000, HACCP. MOQ 1 container. Supplier to Saudi Arabia, Africa, Asia.",
    keywords: ['Vietnamese rice export', 'jasmine rice Vietnam', 'ST25 rice supplier', 'rice exporter Vietnam', 'buy rice wholesale Vietnam'],
    products: riceProducts,
  },
  {
    slug: 'frozen-seafood',
    name: 'Frozen Seafood',
    tagline: "Vietnam's World-Class Seafood — Cold Chain Excellence",
    description: "Vietnam is a top 5 global seafood exporter. We supply IQF vannamei shrimp, pangasius fillet, and squid from EU-registered, ASC-certified processing plants in the Mekong Delta.",
    longDescription: "Vietnam's seafood industry is a cornerstone of its export economy, with VASEP-certified processing plants operating to the strictest international food safety standards. Ideal Deal Vietnam connects international seafood buyers with EU-registered, FDA-listed processing facilities for a consistent cold chain supply of shrimp, pangasius, squid, and value-added products.",
    heroImage: '/images/categories/seafood-hero.jpg',
    icon: '🦐',
    certifications: ['HACCP', 'ISO 22000', 'EU Registration', 'FDA Registration', 'ASC', 'BAP', 'Halal', 'BRC'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Japan', 'South Korea', 'Germany', 'Netherlands', 'USA'],
    seoTitle: 'Frozen Seafood Vietnam Export | Shrimp Pangasius Supplier | EU HACCP Certified',
    seoDescription: 'Frozen seafood from Vietnam — IQF shrimp, pangasius fillet. EU registered, HACCP, ASC, Halal certified. MOQ 1 reefer container. Supplier to GCC, EU, Asia.',
    keywords: ['frozen seafood Vietnam', 'shrimp exporter Vietnam', 'pangasius fillet Vietnam', 'seafood supplier Vietnam', 'IQF shrimp wholesale'],
    products: seafoodProducts,
  },
  {
    slug: 'spices',
    name: 'Spices',
    tagline: "Vietnamese Spices — The World's Most Prized Origins",
    description: "Vietnam is the world's #1 black pepper exporter and a major supplier of cinnamon, star anise, and chili. We export ASTA-quality spices to food manufacturers, retail brands, and spice processors globally.",
    longDescription: "Vietnam's spice exports are anchored by black pepper from Phu Quoc and the Central Highlands, cinnamon from Yen Bai province (home of the world's finest Cassia cinnamon), star anise from Lang Son, and chili from Gia Lai. Ideal Deal Vietnam supplies all major spice categories to food manufacturers, private label brands, and wholesale importers.",
    heroImage: '/images/categories/spices-hero.jpg',
    icon: '🌶️',
    certifications: ['ISO 22000', 'HACCP', 'ASTA Quality', 'Organic (select)', 'Halal'],
    exportMarkets: ['India', 'Germany', 'USA', 'UAE', 'Netherlands', 'Egypt', 'Saudi Arabia'],
    seoTitle: 'Vietnamese Spices Export | Black Pepper Cinnamon Star Anise Supplier',
    seoDescription: 'Export Vietnamese spices — black pepper, cinnamon, star anise, chili. ASTA quality, HACCP. MOQ 5 MT. Supplier to EU, USA, GCC, India.',
    keywords: ['Vietnamese spices export', 'black pepper supplier Vietnam', 'cinnamon exporter Vietnam', 'star anise Vietnam', 'spice wholesale Vietnam'],
    products: spiceProducts,
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(cat => cat.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find(p => p.slug === productSlug);
}

export function getAllProducts(): Product[] {
  return productCategories.flatMap(cat => cat.products);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map(slug => getAllProducts().find(p => p.slug === slug))
    .filter((p): p is Product => p !== undefined);
}
