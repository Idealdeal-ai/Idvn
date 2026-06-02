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
  relatedCategorySlugs?: string[];
  oemDescription?: string;
}

const coffeeProducts: Product[] = [
  {
    slug: 'robusta-coffee-beans',
    name: 'Vietnamese Robusta Coffee Beans',
    category: 'Coffee',
    categorySlug: 'coffee',
    tagline: 'Bold, Full Bodied Robusta from the Central Highlands',
    description: "Premium Grade 1 Robusta coffee beans from Dak Lak Vietnam's premier coffee growing region. Consistently high caffeine content, earthy body, and low acidity ideal for espresso blends and instant coffee manufacturing.",
    longDescription: `Vietnam is the world's largest producer of Robusta coffee, and Dak Lak province represents the pinnacle of Vietnamese coffee quality. Our Grade 1 Robusta beans are carefully cultivated at elevations between 500–900 metres above sea level, where volcanic red basalt soils and ideal rainfall create optimal growing conditions.

Robusta coffee beans contain approximately 2.7% caffeine nearly double that of Arabica making them the preferred choice for espresso blends where a rich crema and powerful kick are required. The beans' natural resistance to disease and pests means fewer chemical interventions, resulting in a cleaner cup profile.

Our processing facility uses both dry (natural) and wet (washed) processing methods. Dry processed Robusta develops complex fruity notes and a heavier body, while washed Robusta is cleaner and brighter, making it ideal for blending with Arabica. Moisture content is carefully controlled to 12.5% maximum to ensure shelf stability during long shipping routes to the Middle East, Africa, and Europe.

We supply to roasters, coffee manufacturers, and private label brands globally. Custom moisture levels, screen sizes, and processing methods are available upon request. All lots are traceable to the farm cooperative level.`,
    heroImage: '/coffee/vietnames rubesta.jpg',
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
    relatedSlugs: ['arabica coffee beans', 'black pepper bulk'],
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
    tagline: "Specialty Grade Arabica from Da Lat's Cool Highlands",
    description: 'Single origin Arabica coffee from the Lam Dong highlands, grown at 1,400–1,600 MASL. Bright acidity, floral aroma, and caramel sweetness make this a standout for specialty roasters and premium blends.',
    longDescription: `Vietnam's Arabica production is centered in the cool, misty highlands of Lam Dong province, particularly around the city of Da Lat at elevations of 1,400–1,600 metres above sea level. The unique micro-climate with temperatures ranging 15–25°C year-round — allows Arabica cherries to develop slowly, concentrating sugars and creating a complex cup profile that has surprised specialty coffee buyers worldwide.

Our Arabica offerings span washed, natural, and honey processing methods, each revealing different facets of the origin's character. Washed Arabica from our partner farms shows clean brightness, bergamot and citrus notes, and a honey-like finish. Natural-processed Arabica develops deeper fruit complexity with strawberry and dark chocolate undertones.

As a specialty focused supplier, we work directly with small-holder farming cooperatives to implement Best Agricultural Practices (BAP) and maintain traceability at the farm-group level. Cupping scores range from 82–87+ for our specialty micro-lots, with commercial grades available at 78–82.

For private label roasters, we offer custom roasting profiles in collaboration with our Da Lat roasting partners, as well as green bean export for in-country roasting.`,
    heroImage: '/coffee/arabica green coffee beans.jpg',
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
  {
    slug: 'green-coffee-beans-export',
    name: 'Green Coffee Beans (Unroasted) Mixed Robusta/Arabica',
    category: 'Coffee',
    categorySlug: 'coffee',
    tagline: 'Bulk Green Coffee Beans for Roasters — Robusta & Arabica Direct from Origin',
    description: 'Unroasted green coffee beans from Vietnam for specialty roasters and coffee manufacturers. Available as 100% Robusta, 100% Arabica, or custom Robusta/Arabica blends. Direct origin supply with full traceability, moisture-controlled storage, and consolidated container shipments.',
    longDescription: `Green (unroasted) coffee beans represent the primary commodity form in which Vietnam's coffee is traded globally. By purchasing green beans, roasters gain full control over the roasting process — developing their own signature roast profiles and maximising freshness for their customers.

Vietnam's green coffee export pipeline runs from farming cooperatives through licensed export companies, with the main trading hubs in Ho Chi Minh City, Buon Ma Thuot (Dak Lak), and Da Lat. We source directly from registered cooperatives with transparent pricing linked to ICE Futures markets, plus a quality premium for above-average screen size and cup score.

**Available Lots:**
- **Grade 1 Robusta** (Screen 18+): Dak Lak / Gia Lai origin. Moisture ≤12.5%. Natural, wet, or honey processed.
- **Specialty Arabica** (82+ score): Da Lat origin, Catimor / Bourbon / Typica. Washed or natural process.
- **Commercial Arabica** (78–82 score): For blending or commercial roast programs.
- **Custom Robusta/Arabica Blends**: Pre-blended to buyer specification for consistent blend roasting.

All green bean shipments include ICO export certificate, phytosanitary certificate, quality analysis report, and moisture certificate. GrainPro liner bags available for specialty and long-transit shipments.`,
    heroImage: '/coffee/mixed coffee beans.jpg',
    specs: [
      { label: 'Type', value: 'Robusta / Arabica / Custom Blend' },
      { label: 'Moisture (Robusta)', value: '≤ 12.5%' },
      { label: 'Moisture (Arabica)', value: '≤ 11.5%' },
      { label: 'Processing', value: 'Natural / Washed / Honey' },
      { label: 'Screen Size', value: '14–19 (as specified)' },
      { label: 'Shelf Life', value: '12–18 months (GrainPro lined)' },
      { label: 'ICO Certificate', value: 'Included' },
      { label: 'HS Code', value: '0901.11.10' },
    ],
    certifications: ['HACCP', 'Rainforest Alliance', '4C Association', 'ICO Registered Exporter', 'Organic (select lots)'],
    exportMarkets: ['Germany', 'USA', 'Japan', 'South Korea', 'Australia', 'Italy', 'UAE', 'Netherlands'],
    moq: '500 kg (specialty lots) / 5 MT (commercial)',
    containerCapacity: '18 MT per 20ft / 26 MT per 40ft',
    packagingOptions: ['60 kg jute bags', '60 kg jute with GrainPro liner', 'Vacuum 30 kg bags', 'Custom per buyer spec'],
    faqs: [
      { question: 'What documentation comes with green coffee export shipments?', answer: 'Standard documents: Bill of Lading, ICO Export Certificate, Commercial Invoice, Packing List, Phytosanitary Certificate, Quality Analysis Certificate, Moisture Certificate. Additional docs (Organic, Halal, Fair Trade) available for certified lots.' },
      { question: 'Can you blend Robusta and Arabica before shipping?', answer: 'Yes, we can pre-blend Robusta and Arabica in any ratio and pack in standard jute bags. This is useful for roasters who want a fixed blend ratio without blending facility investment.' },
    ],
    relatedSlugs: ['robusta-coffee-beans', 'arabica-coffee-beans'],
    seoTitle: 'Green Coffee Beans Export Vietnam | Unroasted Robusta Arabica | B2B Supplier',
    seoDescription: 'Buy green unroasted coffee beans from Vietnam. Robusta Grade 1, Specialty Arabica 82+, custom blends. ICO registered exporter. MOQ 500kg. Export to Germany, USA, Japan.',
    keywords: ['green coffee beans Vietnam', 'unroasted coffee beans export', 'buy green coffee bulk', 'Vietnam coffee beans for roasters', 'robusta arabica green coffee'],
    hsCode: '0901.11.10',
  },
  {
    slug: 'vietnamese-drip-filter-coffee',
    name: 'Vietnamese Drip Filter Coffee (Ground & Whole Bean)',
    category: 'Coffee',
    categorySlug: 'coffee',
    tagline: 'Authentic Vietnamese-Style Ground Coffee Ready for Private Label',
    description: 'Roasted and ground Vietnamese coffee for the traditional phin drip filter brewing method. Classic Robusta-dominant blends with optional butter/chicory addition. Ready for private label retail: we supply roasted ground coffee in custom bags, tins, or drip packs. Minimum 500 kg.',
    longDescription: `Vietnamese coffee culture is centered around the slow-drip phin filter a small stainless steel or aluminum filter placed over a cup, through which hot water percolates slowly to produce a strong, concentrated coffee. The cultural and culinary significance of this brewing method has created strong demand for authentic Vietnamese-roasted coffee in diaspora communities and Asian food markets worldwide.

Traditional Vietnamese coffee blends are typically Robusta-dominant (often 80–100% Robusta) and may include small additions of butter (during roasting) or chicory for additional body and complexity. The result is a bold, intensely flavoured coffee that holds up beautifully when served hot over ice with sweetened condensed milk — the classic Vietnamese cà phê sữa đá.

**Product Formats Available:**
- **Ground Coffee**: Medium-coarse grind for phin filter brewing; fine grind for espresso/Moka pot
- **Whole Bean**: For buyers with their own grinding equipment
- **Drip Packs (Hang Ear Filter)**: Pre-portioned single serve drip bags extremely popular for gifting and e-commerce
- **Instant Soluble Coffee**: 3-in-1 sachets (coffee, sugar, creamer) for retail and food service

All products are roasted in Vietnam at ISO 22000 certified facilities. Private label packaging available from 500 kg with custom printing. Perfect for Asian grocery distributors, specialty coffee shops, and online food retailers.`,
    heroImage: '/coffee/Drip Filter Coffee.jpg',
    specs: [
      { label: 'Coffee Type', value: 'Robusta dominant (80–100%)' },
      { label: 'Roast Level', value: 'Medium-dark to Dark' },
      { label: 'Grind Options', value: 'Coarse (phin) / Medium / Fine / Whole bean' },
      { label: 'Moisture (finished)', value: '≤ 5%' },
      { label: 'Packaging', value: 'Valve bag / Tin / Drip pack sachet' },
      { label: 'Shelf Life', value: '18 months (nitrogen valve bag)' },
      { label: 'HS Code', value: '0901.21.10' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal (on request)', 'Organic (select blends)'],
    exportMarkets: ['USA (Vietnamese diaspora)', 'Australia', 'Germany', 'Japan', 'South Korea', 'UAE', 'UK', 'Canada'],
    moq: '500 kg (bulk) / 2,000 units (private label retail)',
    containerCapacity: '10–12 MT per 20ft',
    packagingOptions: ['500g one-way valve kraft bag', '250g retail tin', 'Hang ear drip pack (10g per sachet)', '3-in-1 instant sachet', 'Custom OEM packaging'],
    faqs: [
      { question: 'What is a hang ear drip pack and can you supply it?', answer: 'A hang ear drip pack (cà phê túi lọc) is a single-serve drip filter that hooks over a cup rim. Each pack is pre-portioned with 10–15g of ground coffee. They are extremely popular for gifting and hotel minibar use. Yes, we supply these with custom branded packaging.' },
      { question: 'Can you match an existing coffee blend profile?', answer: 'Yes, with a sample of your target coffee, our R&D team can develop a close match through blend ratio and roast profile adjustment. Sample development: 4–6 weeks. A matching fee may apply.' },
    ],
    relatedSlugs: ['robusta-coffee-beans', 'arabica-coffee-beans'],
    seoTitle: 'Vietnamese Ground Coffee Private Label | Drip Filter Phin Coffee Export',
    seoDescription: 'Vietnamese roasted ground coffee for export. Traditional phin filter blend, drip packs, whole bean. Private label from 500kg. Export to USA, Australia, Germany, UAE.',
    keywords: ['Vietnamese ground coffee export', 'phin filter coffee Vietnam', 'Vietnamese coffee private label', 'drip filter coffee Vietnam', 'cà phê Vietnam wholesale'],
    hsCode: '0901.21.10',
  },
  {
    slug: 'instant-coffee-3in1-export',
    name: 'Vietnamese 3 in 1 Instant Coffee Sachets',
    category: 'Coffee',
    categorySlug: 'coffee',
    tagline: 'Classic Vietnamese Instant Coffee Private Label Ready for Global Retail',
    description: 'Ready to drink 3 in 1 instant coffee sachets combining Vietnamese Robusta instant coffee, creamer, and sugar. Iconic smooth sweet profile loved across Asia and the Middle East. Available in custom formulations and full private label packaging from 50,000 sachets.',
    longDescription: `Vietnamese 3 in 1 instant coffee is one of Southeast Asia's most recognisable beverage formats a convenient sachet combining spray dried or freeze dried Robusta coffee, non dairy creamer, and granulated sugar for a rich, sweet cup in seconds. Vietnam is among the world's top producers of instant coffee and has developed domestic brands with immense regional recognition.

**Product Formats:**
- **Classic 3 in 1**: Coffee, creamer, sugar in a single sachet (typically 16–20g). The format dominant across Vietnamese households and exported widely to ASEAN, GCC, and diaspora markets
- **2 in 1 (Unsweetened)**: Coffee and creamer only for calorie conscious consumers or buyers who prefer to control sweetness
- **Black instant coffee**: Pure soluble Robusta granules for foodservice, hotel amenity sets, or mixing applications
- **Specialty instant**: Freeze dried Arabica sachets for premium tier retail

**Manufacturing:**
Produced in ISO 22000 and HACCP certified facilities. Spray drying or agglomeration process depending on formulation. Non dairy creamer derived from palm kernel or coconut cream. Sugar sourced from Vietnamese refined sugar mills. Full nutritional analysis and allergen declarations provided with each production batch.

**Private Label:**
Custom printing on single box sachets, display boxes, or bulk cartons. Custom formulations possible for caffeine level, sweetness, creamer type, and flavour additions (ginger, coconut, taro). MOQ 50,000 sachets for custom print.`,
    heroImage: '/coffee/3-in-1 Instant Coffee Sachets.jpg',
    specs: [
      { label: 'Format', value: '3 in 1 / 2 in 1 / Black instant' },
      { label: 'Net Weight per Sachet', value: '16–20g (customisable)' },
      { label: 'Coffee Type', value: 'Spray dried Robusta / Freeze dried Arabica (premium)' },
      { label: 'Caffeine', value: '≈ 60–80mg per sachet' },
      { label: 'Shelf Life', value: '18–24 months' },
      { label: 'MOQ', value: '50,000 sachets (private label)' },
      { label: 'HS Code', value: '2101.11.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'FDA Vietnam'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'Philippines', 'Malaysia', 'USA', 'Australia', 'UK'],
    moq: '50,000 sachets (private label) / 1 carton (stock)',
    containerCapacity: '20ft: approx. 8–10 MT (sachets)',
    packagingOptions: ['Individual foil sachet', '10 sachet display box', '50 sachet carton', 'Bulk 500 sachet carton', 'Custom OEM packaging'],
    faqs: [
      { question: 'Can you make a low sugar or sugar free 3 in 1 formula?', answer: 'Yes. We can substitute sucralose or stevia for cane sugar. Low sugar and sugar free variants require a minimum reformulation run of 100,000 sachets and are subject to a one time R&D fee.' },
      { question: 'What is the difference between spray dried and freeze dried instant coffee?', answer: 'Spray dried instant coffee is produced by atomising brewed coffee into a hot air chamber, evaporating water rapidly. It is the more affordable format. Freeze dried instant coffee is brewed coffee frozen at very low temperatures and then vacuum dried, preserving more volatile aromatics. Freeze dried produces a superior cup closer to filter coffee and commands a price premium of 30–50% over spray dried.' },
    ],
    relatedSlugs: ['robusta coffee beans', 'vietnamese drip filter coffee'],
    seoTitle: 'Vietnamese 3 in 1 Instant Coffee Export | Private Label Sachets | Wholesale Supplier',
    seoDescription: 'Export Vietnamese 3 in 1 instant coffee sachets. Halal, ISO 22000 certified. Custom private label from 50,000 sachets. Supplier to GCC, Asia, USA, Australia.',
    keywords: ['Vietnamese instant coffee export', '3 in 1 instant coffee sachets', 'instant coffee private label Vietnam', 'coffee sachet manufacturer Vietnam', 'wholesale instant coffee Vietnam'],
    hsCode: '2101.11.00',
  },

];

const cashewProducts: Product[] = [
  {
    slug: 'cashew-nuts-w320',
    name: 'Cashew Nuts W320',
    category: 'Cashew Nuts',
    categorySlug: 'cashew nuts',
    tagline: "World Standard W320 Vietnam's Most Exported Cashew Grade",
    description: "W320 whole white cashews 320 kernels per pound are the global benchmark for cashew quality. Vietnam is the world's #1 cashew exporter, and our W320 grade meets the strictest international import standards for the GCC, EU, and North American markets.",
    longDescription: `Vietnam produces approximately 90% of the world's processed cashew kernels, and the W320 grade 320 whole white kernels per pound is the international standard against which all cashews are measured. Ideal Deal Vietnam sources directly from processing facilities in Binh Phuoc, Dong Nai, and Ba Ria–Vung Tau provinces, where modern shelling, grading, and packing technology produces kernels that consistently meet or exceed USDA and EU import standards.

W320 cashews have a natural, creamy ivory color, uniform size, and a characteristically sweet, buttery flavor profile with low tannin content. They are whole kernels with no splits or broken pieces, making them ideal for retail snack packs, confectionery, chocolate dipping, and foodservice applications across the Middle East, Europe, and Asia.

Our processing plants operate under ISO 22000, HACCP, BRC, and FSSC 22000 certifications. All lots are tested for aflatoxins (B1, B2, G1, G2), heavy metals, pesticide residues, and moisture before release. We offer both conventional and organic certified grades.

Packaging options include vacuum sealed tins, nitrogen flushed aluminum pouches, and bulk PP bags. Custom private label packaging is available for retail and wholesale brands.`,
    heroImage: '/cashew/Cashew Nuts W320.jpg',
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
    packagingOptions: ['25 kg vacuum PP bag', '11.34 kg vacuum tin', '5 kg vacuum bag', 'Custom retail OEM', 'Nitrogen flushed pouch'],
    faqs: [
      { question: 'What is the difference between W320 and W240?', answer: 'W320 means 320 kernels per pound medium sized nuts. W240 means 240 kernels per pound — larger nuts. W320 is the most widely traded grade globally due to its price-quality balance.' },
      { question: 'Do you supply Halal certified cashews for the GCC market?', answer: 'Yes, all our cashew processing facilities hold current Halal certification from accredited Islamic certification bodies, with certificates available for review.' },
      { question: 'Can you arrange full container loads (FCL) directly to Saudi Arabia or UAE?', answer: 'Yes, we regularly ship FCL to Jeddah, Riyadh, Dubai, Abu Dhabi, and Dammam. We handle all export documentation including phytosanitary certificates, COO, and health certificates.' },
      { question: 'What is the aflatoxin testing protocol?', answer: 'Every lot is tested at accredited SGS, Intertek, or Bureau Veritas laboratories in Vietnam before shipment. Test reports are provided with each shipment.' },
      { question: 'Do you offer private label packaging?', answer: 'Yes, we offer custom label design, pouch printing, and branded tin manufacturing for MOQs of 500 kg and above.' },
    ],
    relatedSlugs: ['cashew nuts w240', 'cashew nuts w180'],
    seoTitle: 'Cashew Nuts W320 Vietnam Export | Wholesale B2B Supplier | Halal Certified',
    seoDescription: 'Premium W320 cashew nuts from Vietnam. ISO 22000, HACCP, Halal certified. Export to Saudi Arabia, UAE, EU. MOQ 1 container. Best price from direct manufacturer.',
    keywords: ['cashew nuts w320 Vietnam', 'buy w320 cashews wholesale', 'Vietnam cashew exporter', 'cashew nuts supplier Saudi Arabia', 'w320 cashew price'],
    hsCode: '0801.32.00',
  },
  {
    slug: 'cashew-nuts-w240',
    name: 'Cashew Nuts W240',
    category: 'Cashew Nuts',
    categorySlug: 'cashew nuts',
    tagline: 'Large, Premium W240 Cashews  The Choice for Luxury Retail',
    description: 'W240 extra large whole cashews   240 kernels per pound. Premium grade favored for high end retail, gourmet gifting, and hotel foodservice across the Middle East and Europe where kernel size signals quality.',
    longDescription: `W240 cashews represent the premium tier of the global cashew market. With just 240 kernels per pound, each nut is visibly larger than standard W320, commanding a price premium in upscale retail, hotel dining, and luxury gifting markets. Vietnam's Binh Phuoc province produces the majority of large grade cashews due to its ideal soil composition and the cultivation of high yielding hybrid varieties.

Our W240 cashews are sourced exclusively from audited processing facilities that dedicate separate production lines to large grade nuts to prevent cross contamination with smaller grades. Optical sorting machines ensure size uniformity, while color graders separate ivory white (IW) and lightly whiter (LW) lots.

In the Middle East market particularly Saudi Arabia, UAE, and Kuwait larger cashew kernels are associated with higher quality and command significant retail price premiums. Our W240 grade is a preferred choice for luxury food retailers, private label brands, and hotel chains throughout the GCC region.

We offer W240 in vacuum sealed retail packs of 250g, 500g, and 1 kg for branded retail programs, as well as bulk 25 kg bags for food manufacturers and blending facilities.`,
    heroImage: '/cashew/Cashew Nuts W240.jpg',
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
      { question: 'Is W240 suitable for chocolate covered cashew products?', answer: "Absolutely the larger size of W240 makes it ideal for chocolate enrobing as it provides a more satisfying size to chocolate ratio and better visual appeal in premium gift boxes." },
      { question: 'Can you supply mixed grades (W240 + W320) in one container?', answer: 'Yes, split containers are available for buyers wishing to compare or blend grades. Minimum per grade within a container is 5 MT.' },
    ],
    relatedSlugs: ['cashew nuts w320', 'cashew nuts w180'],
    seoTitle: 'W240 Cashew Nuts Export Vietnam | Large Grade Premium Cashews B2B',
    seoDescription: 'Premium W240 large cashew nuts from Vietnam. Halal, ISO 22000, BRC A certified. Export to Saudi Arabia, UAE, Europe. MOQ 5 MT. Competitive wholesale price.',
    keywords: ['w240 cashew nuts Vietnam', 'large cashew nuts export', 'premium cashew supplier', 'w240 cashews wholesale price', 'cashew nuts UAE supplier'],
    hsCode: '0801.32.00',
  },
  {
    slug: 'cashew-nuts-w180',
    name: 'Cashew Nuts W180',
    category: 'Cashew Nuts',
    categorySlug: 'cashew nuts',
    tagline: 'Jumbo W180 Cashews  Finest Large Whole Kernels for Premium Markets',
    description: 'W180 jumbo cashew kernels  180 kernels per pound. The pinnacle of whole cashew grades, reserved for ultra premium retail, gourmet gifting, and high end foodservice. Exceptional size, uniform ivory color.',
    longDescription: `W180 cashew kernels are the crown jewel of the cashew industry. At just 180 kernels per pound, these are the largest commercially available whole cashew grade and command the highest market price. Their exceptional size, uniform ivory white color, and distinct sweet flavor make them the preferred choice for premium gift box brands, luxury hotel minibar programs, and high end confectionery.

Producing W180 grade cashews requires careful selection of raw cashew nuts with the ideal size profile, followed by precision shelling and optical sorting to achieve grade compliance. The yield of W180 from raw nuts is lower than smaller grades, making it a limited availability product that should be contracted in advance of harvest seasons.

Our W180 cashews are available from facilities with BRC Grade A, ISO 22000, HACCP, and full Halal certification. Each lot is subjected to third party laboratory analysis for aflatoxins, pesticide residues, heavy metals, and microbiological safety before shipment.`,
    heroImage: '/cashew/Cashew Nuts W180.jpg',
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
    relatedSlugs: ['cashew nuts w240', 'cashew nuts w320'],
    seoTitle: 'W180 Jumbo Cashew Nuts Export Vietnam | Premium Grade | Direct Supplier',
    seoDescription: 'W180 jumbo cashew nuts from Vietnam. Largest whole kernel grade. Halal, BRC A, ISO 22000 certified. Export to Saudi Arabia, UAE, Germany. MOQ 3 MT.',
    keywords: ['w180 cashew nuts Vietnam', 'jumbo cashew export', 'premium cashew nuts supplier', 'w180 cashews wholesale'],
    hsCode: '0801.32.00',
  },
  {
    slug: 'broken-cashew-sp-grade',
    name: 'Broken Cashew Kernels (SP Grade)',
    category: 'Cashew Nuts',
    categorySlug: 'cashew nuts',
    tagline: 'SP Grade Broken Cashew — Best Value for Food Manufacturing & Confectionery',
    description: 'SP (Small Pieces) grade broken cashew kernels — pieces smaller than 3/8 of a whole kernel. Identical flavor and nutritional profile to whole grades at significantly lower price. Ideal for bakeries, confectionery, ice cream, granola, nut butter, and food manufacturers who do not require whole kernel presentation.',
    longDescription: `SP (Small Pieces) broken cashew kernels are a natural byproduct of the whole kernel grading process — the same high quality Vietnamese cashew, but in smaller pieces that form during shelling and do not meet the size threshold for whole grades (W180, W240, W320, W450).

SP grade cashews are nutritionally and flavor identical to whole grades — the breaking happens mechanically during processing and does not reflect any quality difference in the underlying nut. This makes SP grade the smart buying choice for applications where nut presentation is not required:

**Primary Uses:**
- **Bakery**: Cashew cookies, cakes, muffins, and pastries
- **Confectionery**: Chocolate covered cashew pieces, pralines, and candy bars
- **Ice Cream & Dairy**: Cashew inclusions in ice cream, yogurt, and dairy products
- **Granola & Cereal**: Premium granola mixes, muesli, trail mix
- **Nut Butter**: Cashew butter and cashew paste for spreads and sauces
- **Savory Applications**: Stir-fry, curry, and rice dishes in food service

**Price Advantage**: SP grade typically trades at 30–50% discount to equivalent W320 whole kernels, making it the preferred grade for food manufacturers with high volume nut usage.

Same quality certifications as whole grades: ISO 22000, HACCP, BRC Grade A, Halal, Kosher. Same third party testing for aflatoxins, pesticides, and heavy metals.`,
    heroImage: '/cashew/Broken Cashew Kernels (SP Grade).jpg',
    specs: [
      { label: 'Grade', value: 'SP (Small Pieces) / SS (Small Splits)' },
      { label: 'Piece Size', value: 'Less than 3/8 whole kernel' },
      { label: 'Moisture', value: '≤ 5%' },
      { label: 'Total Defects', value: '≤ 20 pieces per 500g' },
      { label: 'Aflatoxin B1', value: '≤ 8 ppb (EU standard)' },
      { label: 'Color', value: 'White / Ivory' },
      { label: 'Origin', value: 'Binh Phuoc, Vietnam' },
      { label: 'Shelf Life', value: '12 months (vacuum)' },
      { label: 'HS Code', value: '0801.32.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'BRC Grade A', 'Halal', 'Kosher', 'FSSC 22000'],
    exportMarkets: ['USA', 'Germany', 'India', 'UAE', 'Netherlands', 'Australia', 'UK', 'Saudi Arabia'],
    moq: '3 MT',
    containerCapacity: '10–12 MT per 20ft / 22–24 MT per 40ft',
    packagingOptions: ['25 kg vacuum PP bag', '12.5 kg vacuum bag', 'Bulk 50 kg bag (non-vacuum)', 'Custom OEM retail'],
    faqs: [
      { question: 'What is the difference between SP and SS grades?', answer: "SP (Small Pieces) are fragments less than 3/8 of a whole kernel — the smallest commercial broken grade. SS (Small Splits) are slightly larger halves or splits. Both offer the same value-for-money for food manufacturing." },
      { question: 'Are broken cashews suitable for cashew butter production?', answer: 'Yes — broken grades are ideal for cashew butter, cashew paste, and cashew cream production. The breaking is purely mechanical; flavor, oil content, and nutrition are identical to whole kernels. Most cashew butter manufacturers specifically source broken grades for cost efficiency.' },
    ],
    relatedSlugs: ['cashew nuts w320', 'cashew nuts w240'],
    seoTitle: 'Broken Cashew SP Grade Vietnam | Food Manufacturing | Wholesale Price',
    seoDescription: 'SP grade broken cashew kernels from Vietnam. Same quality as whole grades at 30-50% lower price. HACCP, BRC A, Halal. MOQ 3 MT. Ideal for bakery, confectionery, ice cream.',
    keywords: ['broken cashew kernels Vietnam', 'SP grade cashew export', 'cashew pieces wholesale Vietnam', 'broken cashew food manufacturing', 'Vietnam cashew SP grade'],
    hsCode: '0801.32.00',
  },
  {
    slug: 'roasted-salted-cashews-export',
    name: 'Roasted & Salted Cashew Nuts',
    category: 'Cashew Nuts',
    categorySlug: 'cashew nuts',
    tagline: 'Ready to Eat Roasted Cashews — Private Label Snack Packs from Vietnam',
    description: 'Dry roasted or oil roasted W240/W320 cashew nuts with sea salt. Ready to eat retail snack and food service format. Vacuum or nitrogen flush sealed. BRC, ISO 22000, Halal certified. Private label retail bags from 500 kg.',
    longDescription: `Roasted cashews represent the largest value added cashew product category, transforming raw white cashew kernels into a ready to eat snack that commands a significant retail premium over raw kernels.

Roasting Methods: Dry roasting (oven roasted without added oil, clean label, light golden colour) or oil roasting (sunflower or coconut oil, richer flavour, preferred for Middle Eastern snack markets).

Seasoning Options: Plain unsalted, lightly salted (0.5%), sea salt (1.2-1.5%), honey roasted, chilli lime, smoked paprika. Custom flavour development available (MOQ 1 MT).

Private Label: Retail ready bags (75g-500g) with custom branding, nitrogen flushed or vacuum sealed. Resealable zip lock available.`,
    heroImage: '/cashew/Roasted & Salted Cashews (W320  W240).jpg',
    specs: [
      { label: 'Grade', value: 'W240 / W320 (whole kernels)' },
      { label: 'Roasting', value: 'Dry roast / Oil roast' },
      { label: 'Salt Level', value: 'Unsalted / Light (0.5%) / Medium (1.2-1.5%)' },
      { label: 'Moisture (finished)', value: '≤ 3%' },
      { label: 'Shelf Life', value: '9-12 months (nitrogen flush)' },
      { label: 'HS Code', value: '2008.19.00' },
    ],
    certifications: ['BRC Grade A', 'ISO 22000', 'HACCP', 'Halal', 'Kosher'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'Netherlands', 'USA', 'Australia', 'UK', 'France'],
    moq: '500 kg (retail private label) / 1 MT (bulk)',
    containerCapacity: '8-10 MT per 20ft (retail packed)',
    packagingOptions: ['75g-500g retail stand up pouch', '1 kg food service bag', '10 kg bulk bag', 'Nitrogen flush sealed', 'Custom OEM retail packaging'],
    faqs: [
      { question: 'What is the shelf life of roasted cashews?', answer: 'Dry roasted cashews in nitrogen flushed sealed packaging have a shelf life of 9-12 months at ≤ 20°C away from direct sunlight. Once opened, consume within 4-6 weeks.' },
      { question: 'Can you develop custom flavour seasonings for our market?', answer: 'Yes. R&D team can develop custom seasonings in 4-6 weeks. MOQ for custom flavour is 1 MT per SKU.' },
    ],
    relatedSlugs: ['cashew nuts w320', 'cashew nuts w240'],
    seoTitle: 'Roasted Cashews Export Vietnam | Private Label Snack Packs Wholesale Supplier',
    seoDescription: 'Roasted salted cashews from Vietnam. W240/W320. Dry and oil roast. Halal, BRC, ISO 22000. Retail bags 75g-500g. Private label from 500kg. Export to GCC, EU, USA.',
    keywords: ['roasted cashews exporter Vietnam', 'salted cashew nuts wholesale', 'cashew snack private label Vietnam', 'roasted cashews bulk supplier'],
    hsCode: '2008.19.00',
  },
];

const riceProducts: Product[] = [
  {
    slug: 'jasmine-rice',
    name: 'Vietnamese Jasmine Rice (ST25)',
    category: 'Rice',
    categorySlug: 'rice',
    tagline: "World's Best Rice  ST25 Jasmine from the Mekong Delta",
    description: `Vietnam's award winning ST25 Jasmine rice  voted "World's Best Rice" at the World Rice Conference. Long grain, naturally fragrant, soft and slightly sticky texture. Premium export grade for retail and foodservice buyers.`,
    longDescription: `ST25, developed by Vietnamese scientist Ho Quang Cua and named "World's Best Rice" at the 2019 World Rice Conference in the Philippines, has transformed Vietnam's rice export reputation. This premium jasmine variety is cultivated in the Mekong Delta's rich alluvial soils, particularly in Soc Trang province, where the unique combination of freshwater, tidal salinity, and mineral rich sediment creates ideal growing conditions.

ST25 Jasmine rice is distinguished by its natural floral fragrance  released during cooking its long, slender grain shape, and its soft, slightly sticky texture when cooked. Unlike Thai Jasmine (Hom Mali), Vietnamese ST25 has a subtly different aromatic profile with undertones of pandan leaf, which has proven particularly popular in Middle Eastern and Asian markets.

Our export grade ST25 is milled to 5% broken specification (5% broken rice content), ensuring consistently long, whole grains. Higher specification grades (2% and 0% broken) are available for premium retail brands. We also offer the option of aged ST25 (6–12 months), which further reduces moisture and produces a firmer grain texture preferred in some markets.

All rice is processed in modern mills certified to ISO 22000 and HACCP. Fumigation with approved phytosanitary treatments is included in the export price, along with phytosanitary certificates from Vietnam's Plant Protection Department.`,
    heroImage: '/rice/Vietnamese Jasmine Rice (ST25).jpg',
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
      { question: 'Can you supply custom printed PP bags for retail?', answer: 'Yes, we offer full-color print PP bag manufacturing from 1 kg to 50 kg sizes. MOQ for custom printing is 5,000 bags.' },
      { question: 'Do you handle phytosanitary inspection and fumigation?', answer: 'Yes, fumigation and phytosanitary certificate issuance are included in all export quotations. We work with Vietnam\'s Plant Protection Department (PPD) for all certificates.' },
    ],
    relatedSlugs: ['cashew nuts w320', 'frozen white shrimp'],
    seoTitle: 'Vietnamese ST25 Jasmine Rice Export | World\'s Best Rice | B2B Supplier',
    seoDescription: "Export ST25 Jasmine rice from Vietnam's Mekong Delta. World's Best Rice 2019. Fragrant, long grain, 5% broken. MOQ 1 container. Supplier to Saudi Arabia, UAE, Africa.",
    keywords: ['ST25 jasmine rice Vietnam', 'Vietnamese jasmine rice export', 'buy jasmine rice wholesale', 'Vietnam rice supplier', 'fragrant rice export'],
    hsCode: '1006.30.20',
  },
  {
    slug: 'long-grain-white-rice-25-broken',
    name: 'Long Grain White Rice (25% Broken)',
    category: 'Rice',
    categorySlug: 'rice',
    tagline: 'Cost Effective 25% Broken White Rice  High Volume Export Grade',
    description: 'Vietnam long grain white rice 25% broken  the most affordable export grade. Popular in West Africa, the Middle East, and South Asia for household consumption and food aid programs. Consistently milled, clean, and well dried.',
    longDescription: `Vietnam's 25% broken white rice is the workhorse of global rice trade  offering excellent nutritional value at the most accessible price point. Primarily traded to West African countries (Ivory Coast, Senegal, Benin, Cameroon), South Asia, and the Middle East for government food programs and household consumption.

The 25% designation refers to the proportion of broken kernel pieces (shorter than 3/4 of the full grain length) allowed within the lot. This grade is produced during the milling of premium whole-grain rice and represents an economically efficient use of the full rice crop.

Despite the lower price, our 25% broken rice is carefully cleaned, de-stoned, and dried to ≤14% moisture content  critical for safe long distance shipping. Fumigation with approved agents (phosphine) and phytosanitary certification from Vietnam's Plant Protection Department are included with all export shipments.

Packaging in new 50 kg PP woven bags with polypropylene inner liner is standard. Custom printed bags with buyer's brand or government food program logos are available for container quantities.`,
    heroImage: '/rice/Long Grain White Rice (25%25 Broken).jpg',
    specs: [
      { label: 'Variety', value: 'Long Grain White Rice' },
      { label: 'Broken', value: '25% max' },
      { label: 'Moisture', value: '≤ 14%' },
      { label: 'Milling', value: 'Well milled' },
      { label: 'Chalky Grains', value: '≤ 8%' },
      { label: 'Foreign Matters', value: '≤ 0.1%' },
      { label: 'Damaged Grains', value: '≤ 2.5%' },
      { label: 'Origin', value: 'Mekong Delta, Vietnam' },
      { label: 'Shelf Life', value: '18 months sealed' },
      { label: 'HS Code', value: '1006.30.90' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Phytosanitary Certificate', 'Vietnam Export Quality Standard'],
    exportMarkets: ['Ivory Coast', 'Senegal', 'Benin', 'Ghana', 'Cameroon', 'Philippines', 'Malaysia', 'Iraq'],
    moq: '1 x 20ft container (≈ 22 MT)',
    containerCapacity: '22–24 MT per 20ft / 25–27 MT per 40ft',
    packagingOptions: ['50 kg PP woven bag', '25 kg PP bag', 'Custom printed bag (MOQ 5,000 bags)'],
    faqs: [
      { question: 'What is the difference between 5% broken and 25% broken rice?', answer: '5% broken contains at most 5% broken kernel pieces — predominantly whole, long grains. 25% broken allows up to a quarter broken pieces, which affects texture slightly but not nutrition. Price is correspondingly lower.' },
      { question: 'Is 25% broken rice suitable for retail packaging?', answer: 'Yes — 25% broken rice is widely sold in retail 5 kg, 10 kg, and 25 kg bags across West Africa and parts of Asia. We can supply custom printed retail bags with your brand from 5,000 bag MOQ.' },
    ],
    relatedSlugs: ['jasmine rice', 'glutinous sticky rice'],
    seoTitle: 'Vietnam 25% Broken White Rice Export | Wholesale Supplier B2B',
    seoDescription: 'Buy Vietnam long grain white rice 25% broken. ISO 22000, HACCP certified. MOQ 1 container. Export to West Africa, Middle East, Asia. Competitive FOB price.',
    keywords: ['25% broken rice Vietnam', 'long grain white rice export', 'Vietnam rice 25 broken', 'cheap rice bulk Vietnam', 'white rice Africa supplier'],
    hsCode: '1006.30.90',
  },
  {
    slug: 'glutinous-sticky-rice',
    name: 'Vietnamese Glutinous (Sticky) Rice',
    category: 'Rice',
    categorySlug: 'rice',
    tagline: 'Premium Glutinous Rice for Asian Cuisine, Confectionery & Brewing',
    description: 'High quality Vietnamese glutinous (waxy) rice  opaque white, short to medium grain, high amylopectin content. Prized for Asian desserts, rice wine production, mochi, and ceremonial foods. Exported to ASEAN, East Asia, and specialty ethnic markets globally.',
    longDescription: `Glutinous rice (Oryza sativa var. glutinosa), also called sticky rice or waxy rice, is an essential ingredient across Southeast and East Asian cuisines. Unlike regular white rice, glutinous varieties contain predominantly amylopectin starch (with negligible amylose), which creates the characteristic sticky, cohesive texture when cooked without any added gluten.

Vietnam is a significant producer of glutinous rice, with notable cultivation in the northern upland provinces (Son La, Dien Bien, Hoa Binh) and Mekong Delta lowlands. Northern upland glutinous rice  grown by ethnic minority communities at altitude commands a premium for its superior aroma and firmer, more distinct sticky texture.

**Primary End Uses:**
- **Asian desserts**: Sticky rice cakes (bánh chưng, xôi), mochi, tang yuan, glutinous rice balls
- **Rice wine & sake**: High amylopectin content ideal for saccharification in rice wine brewing
- **Baby food**: Easily digestible, gentle on sensitive stomachs
- **Ceremonial foods**: Essential for Vietnamese, Thai, Lao, and Chinese festival foods

Available in long grain (Thai style), short grain, and black glutinous (purple waxy) varieties. Custom moisture, cleaning, and polishing specifications available.`,
    heroImage: '/rice/Vietnamese Glutinous (Sticky) Rice.jpg',
    specs: [
      { label: 'Type', value: 'White Glutinous / Black Glutinous' },
      { label: 'Amylopectin', value: '≥ 95%' },
      { label: 'Moisture', value: '≤ 13.5%' },
      { label: 'Broken', value: '≤ 10%' },
      { label: 'Chalky Grains', value: '100% (natural characteristic)' },
      { label: 'Foreign Matter', value: '≤ 0.1%' },
      { label: 'Origin', value: 'Son La, Dien Bien / Mekong Delta' },
      { label: 'Shelf Life', value: '12–18 months sealed' },
      { label: 'HS Code', value: '1006.20.20' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Phytosanitary Certificate', 'Halal (on request)'],
    exportMarkets: ['Thailand', 'China', 'Japan', 'South Korea', 'USA (ethnic market)', 'Australia', 'EU (ethnic retail)'],
    moq: '1 x 20ft container (≈ 20 MT)',
    containerCapacity: '20 MT per 20ft / 24 MT per 40ft',
    packagingOptions: ['50 kg PP bag', '25 kg PP bag', '5 kg vacuum retail', '1 kg retail bag', 'Custom OEM print'],
    faqs: [
      { question: 'What is the difference between white and black glutinous rice?', answer: 'White glutinous rice is the standard variety with opaque white appearance. Black (purple) glutinous rice gets its colour from anthocyanins in the outer bran layer — it has a nuttier flavour and is rich in antioxidants, commanding a price premium in specialty and health food markets.' },
      { question: 'Can glutinous rice be used in rice wine production?', answer: "Yes the high amylopectin content makes glutinous rice ideal for traditional Asian rice wine fermentation. Its starch structure is highly accessible to the enzymes in starter cultures (bánh men, koji), enabling efficient saccharification and fermentation." },
    ],
    relatedSlugs: ['jasmine rice', 'long grain white rice 25 broken'],
    seoTitle: 'Vietnamese Glutinous Sticky Rice Export | Wholesale B2B Supplier',
    seoDescription: 'Premium Vietnamese glutinous sticky rice for export. White and black varieties. ISO 22000, HACCP. MOQ 1 container. Export to Asia, EU ethnic markets, USA.',
    keywords: ['glutinous rice Vietnam export', 'sticky rice supplier Vietnam', 'waxy rice export', 'Vietnamese sticky rice wholesale', 'black glutinous rice Vietnam'],
    hsCode: '1006.20.20',
  },
  {
    slug: 'brown-rice-export',
    name: 'Vietnamese Brown Rice (Whole Grain)',
    category: 'Rice',
    categorySlug: 'rice',
    tagline: 'Nutrient Rich Brown Rice from Vietnam  Health Food & Organic Markets',
    description: 'Whole grain brown rice from the Mekong Delta  rice with only the inedible outer husk removed, retaining the nutritious bran and germ layers. High fiber, naturally gluten free, suitable for health food retail, organic distribution, and specialty foodservice.',
    longDescription: `Brown rice is produced by removing only the outer inedible husk from paddy rice, leaving the nutritious bran and germ layers intact. This minimal processing retains significantly higher levels of fiber, B vitamins (B1, B3, B6), magnesium, phosphorus, and antioxidants compared to white rice making it the preferred choice for health conscious consumers globally.

Vietnam's Mekong Delta produces excellent quality brown rice, particularly from Jasmine (ST25 brown), Long An, and An Giang provinces. The warm climate and mineral rich alluvial soils of the delta produce rice with a characteristic nutty flavor and firm, chewy texture that distinguishes it from other origins.

**Product Variants Available:**
- **ST25 Brown Rice**: Premium brown version of Vietnam's award winning jasmine variety  retains floral fragrance with added nutritional profile
- **Long Grain Brown Rice**: Standard long grain brown rice for everyday health food use
- **Organic Brown Rice**: From USDA Organic / EU Organic certified farms in the Mekong Delta

Brown rice requires careful moisture management and packaging to prevent rancidity of the bran oils during storage and shipping. Vacuum packaging is strongly recommended for retail grade product. All export lots are tested for moisture (≤14%) and aflatoxins.`,
    heroImage: '/rice/Vietnamese Brown Rice (Whole Grain).jpg',
    specs: [
      { label: 'Type', value: 'Long Grain Brown Rice / ST25 Brown' },
      { label: 'Moisture', value: '≤ 14%' },
      { label: 'Broken', value: '≤ 5%' },
      { label: 'Milling', value: 'Husk removed only bran intact' },
      { label: 'Foreign Matter', value: '≤ 0.1%' },
      { label: 'Origin', value: 'Mekong Delta (Long An, An Giang)' },
      { label: 'Organic Option', value: 'Available (USDA / EU Organic)' },
      { label: 'Shelf Life', value: '12 months (vacuum packed)' },
      { label: 'HS Code', value: '1006.20.10' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Organic (USDA/EU  select lots)', 'Phytosanitary Certificate', 'Halal (on request)'],
    exportMarkets: ['Australia', 'Germany', 'USA', 'UK', 'Japan', 'South Korea', 'UAE', 'Canada'],
    moq: '5 MT (specialty) / 1 container (commercial)',
    containerCapacity: '20 MT per 20ft / 24 MT per 40ft',
    packagingOptions: ['50 kg PP bag', '5 kg vacuum bag', '1 kg retail vacuum', '2 kg retail', 'Custom OEM'],
    faqs: [
      { question: 'Does brown rice ship well over long distances?', answer: 'Brown rice is more perishable than white rice due to the oil rich bran layer. For export, vacuum packaging is strongly recommended to prevent oxidation and rancidity. Properly vacuum packed brown rice maintains quality for 12 months at ambient temperature.' },
      { question: 'Can you supply organic certified brown rice?', answer: 'Yes. We work with EU Organic and USDA Organic certified farming cooperatives in the Mekong Delta. Organic lots are available from 5 MT with full organic chain of custody documentation.' },
    ],
    relatedSlugs: ['jasmine rice', 'glutinous sticky rice'],
    seoTitle: 'Vietnamese Brown Rice Export | Whole Grain | Organic Option | B2B Supplier',
    seoDescription: 'Premium whole grain brown rice from Vietnam. Long grain and ST25 varieties. Organic option available. HACCP, ISO 22000. MOQ 5 MT. Export to EU, USA, Australia.',
    keywords: ['brown rice Vietnam export', 'whole grain rice supplier', 'organic brown rice Vietnam', 'Vietnamese brown rice wholesale', 'health food rice export'],
    hsCode: '1006.20.10',
  },
  {
    slug: 'parboiled-rice-export',
    name: 'Parboiled Rice (5% Broken)',
    category: 'Rice',
    categorySlug: 'rice',
    tagline: 'Parboiled Long Grain Rice — Non Sticky, Nutrient Rich Vietnam Export',
    description: 'Parboiled (converted) long grain white rice steamed under pressure before milling to drive nutrients into the grain. Non sticky, firm texture. 5% broken. Moisture ≤ 14%. Ideal for African, Middle Eastern, and South Asian markets. HACCP, Halal certified. MOQ 1 x 20ft.',
    longDescription: `Parboiled rice is produced by soaking, pressure steaming, and drying paddy rice before milling. This hydrothermal process drives water soluble B vitamins into the endosperm, making parboiled rice significantly more nutritious than regular white rice while retaining white appearance.

Key benefits: Superior nutrition (retains 80-90% of B vitamins), non sticky firm grain for pilaf and biryani, better pest resistance for longer storage, higher milling yield.

Market: Dominant variety across West Africa (Nigeria, Senegal, Ivory Coast), traditionally preferred for Indian biryani, and increasingly popular in the GCC.`,
    heroImage: '/rice/Parboiled Rice (5%25 Broken, Long Grain).jpg',
    specs: [
      { label: 'Type', value: 'Long grain parboiled rice' },
      { label: 'Broken Grain', value: '5% max' },
      { label: 'Moisture', value: '≤ 14%' },
      { label: 'Chalky Grains', value: '≤ 2%' },
      { label: 'Foreign Matter', value: '≤ 0.05%' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'HS Code', value: '1006.30.20' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Phytosanitary Certificate', 'Vietnam Export Standard'],
    exportMarkets: ['Nigeria', 'Senegal', 'Ghana', 'Ivory Coast', 'Saudi Arabia', 'UAE', 'India', 'UK'],
    moq: '1 x 20ft container (≈ 22 MT)',
    containerCapacity: '22-24 MT per 20ft / 28-30 MT per 40ft',
    packagingOptions: ['50 kg PP woven bag', '25 kg PP woven bag', '10 kg retail bag', '5 kg retail poly bag', 'Custom OEM private label bag'],
    faqs: [
      { question: 'What is the visual difference between parboiled and regular white rice?', answer: 'Parboiled rice has a slightly golden amber appearance due to caramelisation during steaming. After cooking, grains are more distinct and less sticky than regular white rice.' },
      { question: 'Can you supply with private label bags for West African retail?', answer: 'Yes. Custom printed 50 kg bags are available from 1 container (22 MT). Artwork approval: 5-7 working days; first production run: 14-21 days.' },
    ],
    relatedSlugs: ['long grain white rice 25 broken', 'jasmine rice'],
    seoTitle: 'Parboiled Rice Export Vietnam | Converted Rice 5% Broken Wholesale Supplier',
    seoDescription: 'Parboiled long grain rice from Vietnam. 5% broken. Halal, HACCP. 50kg bags, retail packs. MOQ 1 container. Export to Nigeria, Ghana, GCC, India.',
    keywords: ['parboiled rice Vietnam export', 'converted rice wholesale supplier', 'parboiled rice Africa export', 'rice exporter Vietnam parboiled'],
    hsCode: '1006.30.20',
  },
];

const seafoodProducts: Product[] = [
  {
    slug: 'frozen-white-shrimp',
    name: 'Frozen Vannamei (White) Shrimp',
    category: 'Frozen Seafood',
    categorySlug: 'frozen seafood',
    tagline: 'Premium IQF Vannamei Shrimp Vietnam\'s Top Export Seafood',
    description: 'Individual Quick Frozen (IQF) Vannamei white shrimp from VASEP certified aquaculture farms in the Mekong Delta. Available HOSO, HLSO, PD, PTO, and PDTO. The gold standard for international seafood buyers.',
    longDescription: `Vietnam is consistently among the top 3 global exporters of frozen shrimp, with vannamei (Litopenaeus vannamei) representing the largest volume. The Mekong Delta with its complex network of brackish water canals, rivers, and tidal zones provides ideal conditions for intensive shrimp aquaculture.

Our vannamei shrimp supply chain spans from certified farms practicing Responsible Aquaculture Protocol (RAP) through to EU-registered, HACCP certified cold chain processing plants. All shrimp are harvested to order, immediately transferred to processing facilities in refrigerated trucks, and processed within 4 hours of harvest to preserve peak freshness and texture.

We offer a comprehensive range of specifications:
- HOSO (Head On, Shell On)  most economical, ideal for markets preferring whole presentation
- HLSO (Headless, Shell On) popular in Europe and North America
- PD (Peeled, Deveined) ready for cooking, popular in food service
- PTO (Peeled, Tail On) presentation grade for restaurants and retail shrimp rings
- PDTO (Peeled, Deveined, Tail On) premium presentation with maximum convenience

Count sizes range from 8/12 to 100/200 (pieces per pound), with the most popular export sizes being 21/25, 26/30, 31/40, and 41/50.

All processing facilities hold current EU registration, FDA registration (for USA), and HACCP certification. Third party testing covers antibiotics (nitrofurans, chloramphenicol, oxytetracycline), heavy metals, and microbiological parameters before each shipment.`,
    heroImage: '/fish/Frozen Vannamel (White) Shrimp.jpg',
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
      { question: 'How do you ensure shrimp is antibiotic free?', answer: 'Farms undergo regular pond water testing during the grow out cycle. All harvest lots are sampled and tested at accredited labs (Eurofins, SGS) for a panel of 15+ antibiotic residues before processing begins.' },
      { question: 'What is IQF and why is it preferred?', answer: "IQF (Individual Quick Freezing) freezes each shrimp individually at -35°C in a tunnel freezer, preserving cell structure and preventing clumping. This produces superior texture and appearance compared to block frozen shrimp." },
      { question: 'Can you arrange reefer container shipping to the Middle East?', answer: 'Yes, we regularly ship reefer containers to Jeddah, Dubai, Kuwait, Qatar, and other GCC ports. Transit times are approximately 18–22 days from Ho Chi Minh City.' },
      { question: 'Do you offer seafood with Halal certification for Middle East markets?', answer: "Yes, all processing plants in our network hold current Halal certification. Halal certificates are issued per shipment and are included in the document set." },
    ],
    relatedSlugs: ['jasmine rice', 'cashew nuts w320'],
    seoTitle: 'Frozen Vannamei Shrimp Vietnam Export | IQF Shrimp Supplier | HACCP EU Certified',
    seoDescription: 'Buy frozen IQF vannamei shrimp from Vietnam. EU registered, HACCP, ASC, Halal certified. HOSO, HLSO, PD, PTO forms. MOQ 1 reefer container. Export to Saudi Arabia, UAE, EU.',
    keywords: ['frozen vannamei shrimp Vietnam', 'IQF shrimp export', 'Vietnam shrimp supplier', 'frozen shrimp wholesale', 'halal shrimp Vietnam'],
    hsCode: '0306.17.00',
  },
  {
    slug: 'frozen-pangasius-fillet',
    name: 'Frozen Pangasius (Basa) Fillet',
    category: 'Frozen Seafood',
    categorySlug: 'frozen seafood',
    tagline: "IQF Pangasius Fillets Vietnam's Best Value White Fish for Global Markets",
    description: "IQF frozen Pangasius (Basa / Tra) fish fillets from Vietnam's Mekong Delta. White, mild, boneless, skinless fillets at competitive price. EU registered, HACCP, ASC certified. Available in various trim levels (well trimmed, semi trimmed) and sizes 60–220g per fillet.",
    longDescription: `Pangasius (Pangasianodon hypophthalmus), known commercially as basa or tra fish, is one of Vietnam's most successful aquaculture export species. The Mekong Delta's vast freshwater river systems provide ideal conditions for intensive pangasius farming, with production costs that make Vietnamese pangasius one of the world's most competitively priced white fish fillets.

Pangasius fillets are white, mild flavoured, boneless, and skinless making them highly versatile for retail (frozen fish portion packs), food service (fish and chips, battered fish, breaded products), and processing applications (surimi, fish paste, ready meals). The neutral flavour profile allows pangasius to pair easily with a wide range of marinades, sauces, and coatings.

**Processing Standards**: All processing facilities in our supply chain hold EU registration (competent authority approved), FDA registration (USA), and current HACCP + ISO 22000 certification. ASC (Aquaculture Stewardship Council) certification is available from selected farms and plants.

**Chemical Safety**: Standard testing panel includes malachite green/leucomalachite green, trifluralin, antibiotics (tetracyclines, sulfonamides, quinolones), heavy metals, and microbiological parameters. Test certificates from accredited labs accompany every lot.

**Specifications**: Fillets available in size grades 60–90g, 90–120g, 120–170g, 170–220g. Trim levels: well-trimmed (WT), semi-trimmed (ST), and regular trim.`,
    heroImage: '/fish/Frozen Pangasius (Basa) Fillet.jpg',
    specs: [
      { label: 'Species', value: 'Pangasianodon hypophthalmus (Tra/Basa)' },
      { label: 'Form', value: 'IQF boneless, skinless fillet' },
      { label: 'Trim Level', value: 'Well Trimmed (WT) / Semi Trimmed (ST)' },
      { label: 'Fillet Size', value: '60–90g / 90–120g / 120–170g / 170–220g' },
      { label: 'Glazing', value: '5–20% (as specified)' },
      { label: 'Core Temp', value: '≤ -18°C' },
      { label: 'Moisture Retention', value: 'Per buyer specification' },
      { label: 'Origin', value: 'An Giang, Dong Thap (Mekong Delta)' },
      { label: 'Shelf Life', value: '24 months at -18°C' },
      { label: 'HS Code', value: '0304.62.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'EU Registered', 'FDA Registered', 'ASC (selected plants)', 'HALAL', 'BRC'],
    exportMarkets: ['EU (Germany, Netherlands, Spain, UK)', 'USA', 'Brazil', 'Mexico', 'Saudi Arabia', 'UAE', 'Australia'],
    moq: '1 x 20ft reefer container (≈ 12 MT)',
    containerCapacity: '12–14 MT per 20ft reefer / 24–26 MT per 40ft reefer',
    packagingOptions: ['IQF fillets in master carton (10 kg)', '1 kg retail IQF bag (10/carton)', 'Custom retail branded packs', 'Bulk 10 kg blocks'],
    faqs: [
      { question: 'Is pangasius the same as basa fish?', answer: "The terms basa and tra (pangasius) are sometimes used interchangeably but technically differ: basa (Pangasius bocourti) is a separate premium species with slightly firmer, whiter flesh. The most commonly exported species is Pangasianodon hypophthalmus (tra). We can supply either species — please specify when requesting a quote." },
      { question: 'What does "well trimmed" vs "semi trimmed" mean?', answer: "Well Trimmed (WT) fillets have the belly fat, red meat (hemoglobin-rich dark flesh), and all traces of fat removed — producing the whitest possible fillet for premium markets. Semi-Trimmed (ST) retains some belly and red meat portions, reducing processing cost while still delivering an acceptable colour for mass market applications." },
    ],
    relatedSlugs: ['frozen white shrimp', 'frozen squid rings'],
    seoTitle: 'Frozen Pangasius Basa Fillet Vietnam | IQF White Fish Export Supplier',
    seoDescription: 'Buy frozen IQF pangasius/basa fillets from Vietnam. EU registered, HACCP, ASC certified. Well trimmed and semi trimmed. MOQ 1 reefer container. Export to EU, USA, Middle East.',
    keywords: ['frozen pangasius fillet Vietnam', 'basa fish fillet export', 'IQF pangasius supplier', 'Vietnam white fish export', 'frozen fish fillet wholesale Vietnam'],
    hsCode: '0304.62.00',
  },
  {
    slug: 'frozen-squid-rings',
    name: 'Frozen Squid Rings & Tubes',
    category: 'Frozen Seafood',
    categorySlug: 'frozen seafood',
    tagline: 'IQF Frozen Squid Rings & Tubes — Consistent Calamari for Food Service & Retail',
    description: "IQF frozen squid tubes and rings from Vietnam's coastal waters. Illex and Uroteuthis species. White, tender, and clean. Available as whole cleaned tubes, sliced rings (calamari rings), or tentacles. HACCP, EU registered. Widely used for battered calamari, tapas, and seafood mixes.",
    longDescription: `Vietnam has extensive access to squid fishing grounds in the South China Sea, Gulf of Tonkin, and offshore deep water areas. Vietnamese squid processing plants handle multiple species including Uroteuthis chinensis (Chinese squid), Illex argentinus (Argentine squid processed in Vietnam), and various local inshore species.

Frozen squid is one of the most versatile seafood products in the food service industry globally, used for:
- **Calamari rings**: The staple of Mediterranean cuisine, widely popular in European and Middle Eastern restaurants
- **Seafood mix**: Component in frozen seafood cocktail mixes
- **Battered/breaded products**: Food service ring portions for pub menus, hotel catering
- **Asian cuisine**: Stir fry, grilled, and soup applications

**Processing Forms Available:**
- **Whole cleaned tube (IQF)**: Skin removed, mantle cleaned — for further slicing/processing
- **Rings (calamari style)**: Pre-sliced to consistent width (standard 8–10 mm, or custom)
- **Tubes & Tentacles sets**: For premium seafood mixes
- **Tentacles only**: For restaurant use

All squid is IQF frozen at source at -35°C. Glazing from 10–20% protects against dehydration during frozen storage. Consistent sizing enables efficient portion control for food service operators.`,
    heroImage: '/fish/Frozen Squid Rings & Tubes.jpg',
    specs: [
      { label: 'Species', value: 'Uroteuthis chinensis / Illex argentinus' },
      { label: 'Form', value: 'Rings / Tubes / Tentacles / Whole cleaned' },
      { label: 'Ring Width', value: '8–10 mm (standard) / custom' },
      { label: 'Tube Size', value: 'U/10 to 10/20 (oz per piece)' },
      { label: 'Glazing', value: '10–20%' },
      { label: 'Core Temp', value: '≤ -18°C' },
      { label: 'Color', value: 'Creamy white (skin removed)' },
      { label: 'Origin', value: 'South China Sea / Gulf of Tonkin' },
      { label: 'Shelf Life', value: '24 months at -18°C' },
      { label: 'HS Code', value: '0307.43.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'EU Registered', 'HALAL', 'BRC (selected plants)'],
    exportMarkets: ['Spain', 'Italy', 'UAE', 'Saudi Arabia', 'USA', 'UK', 'Australia', 'South Korea'],
    moq: '1 x 20ft reefer container (≈ 10 MT)',
    containerCapacity: '10–12 MT per 20ft reefer / 22–24 MT per 40ft reefer',
    packagingOptions: ['1 kg IQF poly bag x 10 per carton', '5 kg IQF carton', 'Custom retail portions', 'Bulk 10 kg master carton'],
    faqs: [
      { question: 'What is the difference between calamari and squid?', answer: 'Calamari is the culinary name (Italian origin) for squid, particularly when prepared as rings and tentacles. Commercially, all squid rings prepared in this style may be marketed as calamari regardless of exact species.' },
      { question: 'Can you supply battered calamari rings?', answer: 'Yes, we have processing partners who can supply pre-battered (tempura or breadcrumb coated) calamari rings as a value-added product. MOQ is higher and lead times are 4–6 weeks.' },
    ],
    relatedSlugs: ['frozen white shrimp', 'frozen pangasius fillet'],
    seoTitle: 'Frozen Squid Rings Tubes Vietnam | Calamari IQF Export Supplier',
    seoDescription: 'Buy frozen IQF squid rings and tubes from Vietnam. EU registered, HACCP, Halal certified. 8-10mm rings, whole tubes, tentacles. MOQ 1 reefer container.',
    keywords: ['frozen squid rings Vietnam', 'calamari rings export Vietnam', 'IQF squid supplier', 'frozen squid tubes wholesale', 'calamari Vietnam exporter'],
    hsCode: '0307.43.00',
  },
  {
    slug: 'frozen-blue-swimming-crab',
    name: 'Frozen Blue Swimming Crab',
    category: 'Frozen Seafood',
    categorySlug: 'frozen seafood',
    tagline: 'Wild Caught Blue Swimming Crab Whole, Clusters & Portions from Vietnam',
    description: 'IQF frozen blue swimming crab (Portunus pelagicus) from Vietnam coastal waters. Available as whole crab, half shell, claw clusters, and crab meat portions. BQF at -40°C. ISO 22000, HACCP, EU health certificate. MOQ 1 x 20ft container.',
    longDescription: `The blue swimming crab (Portunus pelagicus) is Vietnam's most commercially important crab species — harvested from Mekong Delta, Kien Giang, and Ca Mau coastal waters.

Product Forms: Whole crab IQF (100-300g+ sizes), half shell (split and cleaned), claw clusters (for GCC/USA foodservice), pasteurised crab meat (lump, claw, special grades in 454g cans/pouches).

Quality: All crabs graded by size and condition. IQF at -40°C within 2 hours of harvest. Storage at -18°C. BQF available for whole crab.`,
    heroImage: '/fish/Frozen Blue Swimming Crab (Whole & Portions).jpg',
    specs: [
      { label: 'Species', value: 'Portunus pelagicus (Blue swimming crab)' },
      { label: 'Forms', value: 'Whole IQF / Half shell / Claw clusters / Crab meat' },
      { label: 'Size Grades', value: '100-150g, 150-200g, 200-300g, 300g+' },
      { label: 'Processing', value: 'IQF at -40°C' },
      { label: 'Storage', value: '-18°C or below' },
      { label: 'Shelf Life', value: '24 months frozen' },
      { label: 'HS Code', value: '0306.24.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'EU Health Certificate', 'FDA Registration', 'BAP', 'Halal (on request)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Japan', 'USA', 'Australia', 'South Korea', 'France', 'UK'],
    moq: '1 x 20ft container',
    containerCapacity: '18-22 MT per 20ft',
    packagingOptions: ['1 kg retail vacuum bag', '2 kg foodservice vacuum bag', '10 kg bulk carton', '454g crab meat tub', 'Custom OEM retail packaging'],
    faqs: [
      { question: 'How do you ensure crabs are alive at time of freezing?', answer: 'Crabs are maintained in aerated saltwater tanks within 2 hours of catch. Our facility conducts live/dead inspection before blast freezing, rejecting any non vital crabs.' },
      { question: 'Does your facility hold EU health certificates?', answer: 'Yes. Listed on Vietnam MARD EU export approved facility list. Full EU documentation including EUR.1 certificate provided for EVFTA market access.' },
    ],
    relatedSlugs: ['frozen white shrimp', 'frozen pangasius fillet'],
    seoTitle: 'Frozen Blue Swimming Crab Export Vietnam | Whole Claw Clusters Wholesale',
    seoDescription: 'Frozen blue swimming crab from Vietnam. IQF whole, half shell, claw clusters. EU cert, HACCP. MOQ 1 container. Export to GCC, USA, Japan, EU.',
    keywords: ['frozen blue swimming crab Vietnam', 'blue crab exporter Vietnam', 'IQF crab supplier', 'frozen crab claws wholesale'],
    hsCode: '0306.24.00',
  },
];

const spiceProducts: Product[] = [
  {
    slug: 'black-pepper-bulk',
    name: 'Vietnamese Black Pepper (500 GL+)',
    category: 'Spices',
    categorySlug: 'spices',
    tagline: 'The "King of Spices"  Phu Quoc & Gia Lai Origin Black Pepper',
    description: 'Premium Vietnamese black pepper with 500+ gramme/litre bulk density. Pungent, spicy, and aromatic. Vietnam is the world\'s #1 pepper exporter. ASTA quality, suitable for retail, grinding, and industrial processing.',
    longDescription: `Vietnam has held the position of world's largest black pepper exporter for over two decades, accounting for approximately 35% of global production. The primary growing regions Phu Quoc island (Kien Giang province), Gia Lai, Dak Lak, and Binh Phuoc each impart slightly different aromatic characteristics to the pepper, with Phu Quoc pepper renowned for its intense pungency and complex aromatic profile.

Black pepper (Piper nigrum) berries are harvested when roughly 70% ripe (green yellow stage), then sun dried for 3–4 days to produce the characteristic dark, wrinkled black peppercorn. The drying process concentrates piperine the active compound responsible for black pepper's heat while developing the complex aromatic compounds that distinguish premium Vietnamese pepper.

We supply black pepper to three primary market segments:
1. Retail/Food Service: 500 GL+ whole peppercorns in consumer and professional packaging
2. Grinding Facilities: 550 GL+ and 570 GL+ for pepper mills and spice manufacturing
3. Essential Oil / Oleoresin Production: High piperine lots for extraction industry

Export specifications include ASTA, ESA, and custom buyer specifications. Steam sterilization is available for markets requiring SPC (Standard Plate Count) compliance, particularly EU and USA.`,
    heroImage: '/spices/idealdeal-Vietnamese-Black-Pepper-500-GL+.jpg',
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
    relatedSlugs: ['robusta coffee beans', 'cashew nuts w320'],
    seoTitle: 'Vietnamese Black Pepper Export | 500 GL+ ASTA Quality | Wholesale Supplier',
    seoDescription: "Buy Vietnamese black pepper 500 GL+ ASTA quality. World #1 pepper origin. HACCP, ISO 22000. Export to Germany, USA, Saudi Arabia, UAE. MOQ 5 MT.",
    keywords: ['black pepper Vietnam export', 'Vietnamese pepper supplier', 'buy black pepper bulk', 'Phu Quoc pepper wholesale', 'pepper exporter Vietnam'],
    hsCode: '0904.11.00',
  },
  {
    slug: 'star-anise-whole-export',
    name: 'Vietnamese Star Anise (Whole)',
    category: 'Spices',
    categorySlug: 'spices',
    tagline: "Premium Whole Star Anise from Lang Son The World's Finest Origin",
    description: "Whole dried star anise (Illicium verum) from Lang Son province, Vietnam the world's top origin for star anise. Plump, complete 8-point stars with intense licorice aroma and high essential oil content. Exported to China, EU, USA, and Middle East for culinary, pharmaceutical, and essential oil extraction.",
    longDescription: `Vietnam's Lang Son province, bordering China's Guangxi region, produces the world's finest star anise (Illicium verum). The region's mountainous terrain, red laterite soils, and subtropical climate create ideal conditions for the star anise tree, which produces its prized fruits from October through December (main harvest) and May through June (secondary harvest).

Star anise is globally significant not just as a culinary spice it is the primary natural source of shikimic acid, the precursor compound used to manufacture oseltamivir (Tamiflu), the antiviral medication. This pharmaceutical demand, combined with steady food industry use, creates strong sustained demand for Vietnamese star anise.

**Culinary Applications**: Essential in Chinese five-spice powder, Vietnamese phở broth, Indonesian rendang, and Indian biryani. Widely used in European liqueur production (pastis, absinthe, sambuca).

**Industrial Applications**: Essential oil extraction (trans-anethole content 80–90%), pharmaceutical shikimic acid extraction, fragrance industry.

**Quality Parameters**: Premium whole stars are characterized by complete 8-point form, uniform reddish-brown color, and high essential oil content (≥14% on dry basis). Broken pieces and seeds are graded separately at lower price points.`,
    heroImage: '/spices/idealdeal-Vietnamese Star Anise.jpg',
    specs: [
      { label: 'Form', value: 'Whole / Broken / Seeds' },
      { label: 'Essential Oil', value: '≥ 14% (whole stars)' },
      { label: 'Trans-anethole', value: '≥ 80%' },
      { label: 'Moisture', value: '≤ 12%' },
      { label: 'Extraneous Matter', value: '≤ 1%' },
      { label: 'Origin', value: 'Lang Son Province, Vietnam' },
      { label: 'Harvest', value: 'Oct–Dec (main) / May–Jun (secondary)' },
      { label: 'Shelf Life', value: '24 months sealed' },
      { label: 'HS Code', value: '0909.60.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'ASTA Quality', 'Halal', 'Organic (select lots)', 'Phytosanitary Certificate'],
    exportMarkets: ['China', 'USA', 'Germany', 'India', 'UAE', 'France', 'Netherlands', 'South Korea'],
    moq: '1 MT',
    containerCapacity: '10–12 MT per 20ft',
    packagingOptions: ['25 kg PP bag', '10 kg carton', '1 kg retail bag', 'Custom OEM packaging'],
    faqs: [
      { question: 'What is the difference between whole stars and broken star anise?', answer: 'Whole star anise consists of complete 8-point stars with seeds intact — these command the highest price for culinary and retail use where visual presentation matters. Broken stars and seeds are graded separately at lower prices — suitable for essential oil extraction, tea blending, and industrial spice use.' },
      { question: 'Do you supply star anise essential oil as well?', answer: 'Yes, we can arrange supply of steam distilled star anise essential oil (trans-anethole ≥80%) from Lang Son processors. MOQ is 50 kg. Please contact us for current pricing.' },
    ],
    relatedSlugs: ['black pepper bulk', 'vietnamese cinnamon cassia'],
    seoTitle: 'Vietnamese Star Anise Export | Whole Dried Lang Son Origin | B2B Supplier',
    seoDescription: 'Buy whole dried star anise from Lang Son, Vietnam. High essential oil ≥14%. ISO 22000, HACCP, Halal. MOQ 1 MT. Export to China, USA, Germany, UAE.',
    keywords: ['star anise Vietnam export', 'whole star anise supplier', 'Lang Son star anise', 'Vietnamese spices export', 'star anise wholesale Vietnam'],
    hsCode: '0909.60.00',
  },
  {
    slug: 'vietnamese-cinnamon-cassia',
    name: 'Vietnamese Cinnamon (Cassia) Quế Yên Bái',
    category: 'Spices',
    categorySlug: 'spices',
    tagline: 'Highest Oil Vietnamese Cassia Cinnamon  Split Quills, Broken & Powder',
    description: 'Vietnamese cinnamon (Cinnamomum loureiroi / cassia) from Yên Bái province the strongest and most aromatic cinnamon origin in the world. Essential oil content up to 4–5%. Available as whole split quills, broken cassia, cut & sifted, and powder. Ideal for the food industry, bakeries, and spice manufacturers.',
    longDescription: `Vietnamese cinnamon (Cinnamomum loureiroi, sometimes classified as Cinnamomum cassia var. loureiroi) is considered by many spice industry professionals to be the world's most aromatic and powerful cinnamon. Grown primarily in the mountainous Yên Bái province of northern Vietnam, Vietnamese cassia contains 4–5% essential oil — approximately double the oil content of Indonesian Cassia or Sri Lankan Ceylon cinnamon  and has a characteristically intense, sweet spicy flavor.

The major commercial form is the "split quill" bark that has been harvested from 15–20 year old trees, dried in the sun, and formed into curved, open quills with a rough outer bark surface retained. Split quills are traded by oil percentage (3.5%+, 4%+, 4.5%+) and cassia oil content, with higher oil lots commanding premium prices.

**Product Forms Available:**
- **Split Quills**: 3.5%, 4.0%, 4.5% oil standard export form
- **Broken Cassia**: Pieces and chips, suitable for extraction and spice blends
- **Cut & Sifted (C&S)**: Granular form for tea blending and industrial use
- **Powder (40–80 mesh)**: For baking, food manufacturing, and spice blends
- **Essential Oil**: Steam distilled cassia oil, cinnamaldehyde ≥55%

Vietnamese cinnamon is the dominant form used in North American markets (where "cinnamon" almost always refers to cassia) and is widely used across Middle Eastern, European, and Asian food industries.`,
    heroImage: '/spices/idealdeal-Vietnamese Cinnamon.jpg',
    specs: [
      { label: 'Species', value: 'Cinnamomum loureiroi (Vietnamese Cassia)' },
      { label: 'Essential Oil', value: '3.5% / 4.0% / 4.5% (grade)' },
      { label: 'Form', value: 'Split Quills / Broken / C&S / Powder' },
      { label: 'Moisture', value: '≤ 13%' },
      { label: 'Extraneous Matter', value: '≤ 1%' },
      { label: 'Cinnamaldehyde', value: '≥ 55% (in oil)' },
      { label: 'Origin', value: 'Yên Bái, Lào Cai Province' },
      { label: 'Shelf Life', value: '24 months (sealed, dry)' },
      { label: 'HS Code', value: '0906.11.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'ASTA Quality Standard', 'Organic (select lots)', 'Phytosanitary Certificate'],
    exportMarkets: ['USA', 'Germany', 'India', 'UAE', 'Netherlands', 'France', 'Bangladesh', 'Saudi Arabia'],
    moq: '1 MT',
    containerCapacity: '8–10 MT per 20ft',
    packagingOptions: ['25 kg PP bag', '10 kg carton', '1 kg retail bag', 'Custom spice pack'],
    faqs: [
      { question: 'How does Vietnamese cinnamon compare to Ceylon cinnamon?', answer: "Vietnamese cassia is much stronger and more intensely flavoured due to higher essential oil content (4–5% vs 0.5–1% for Ceylon/True cinnamon). Ceylon cinnamon is milder, sweeter, and considered the gourmet option. For industrial use, baking, and price-sensitive applications, Vietnamese cassia is almost universally preferred." },
      { question: 'Is there a coumarin concern with Vietnamese cinnamon?', answer: "Cassia cinnamon (including Vietnamese) contains natural coumarin which has EU-regulated limits in certain food products. For standard food applications, Vietnamese cinnamon is GRAS (Generally Recognized As Safe) by the FDA. EU buyers should check Regulation EC 1334/2008 limits for specific food categories." },
    ],
    relatedSlugs: ['black pepper bulk', 'star anise whole export'],
    seoTitle: 'Vietnamese Cinnamon Cassia Export | Yên Bái Origin | Split Quills Powder',
    seoDescription: 'Premium Vietnamese cassia cinnamon from Yên Bái. 3.5–4.5% essential oil. Split quills, broken, powder. HACCP, Halal. MOQ 1 MT. Export to USA, EU, UAE.',
    keywords: ['Vietnamese cinnamon export', 'cassia cinnamon Vietnam', 'Yen Bai cinnamon supplier', 'cinnamon quills Vietnam', 'cassia spice wholesale Vietnam'],
    hsCode: '0906.11.00',
  },
  {
    slug: 'turmeric-powder-export',
    name: 'Vietnamese Turmeric Powder',
    category: 'Spices',
    categorySlug: 'spices',
    tagline: 'High Curcumin Turmeric Powder from Vietnam Central Highlands',
    description: 'Premium dried and milled turmeric powder from Curcuma longa grown in Gia Lai and Dak Lak provinces. High curcumin content 3-5%. Vibrant deep yellow, earthy warm aroma. Food grade and nutraceutical-grade. HACCP certified. MOQ 500 kg.',
    longDescription: `Vietnamese turmeric from the Central Highlands has curcumin content consistently 3-5%, comparable to premium Indian varieties. Available in food grade (200-325 mesh) and nutraceutical grade (standardised 95% curcuminoids extract).

Processing: Fresh rhizomes boiled, sun dried 10-15 days, dry milled and micronised. Steam sterilisation available for low microbial nutraceutical grade.

Applications: Curry powder blends, food colouring, supplement manufacturing, cosmetics, golden milk powder, and natural dye applications.`,
    heroImage: '/spices/idealdeal-Turmeric Powder (Ground Curcuma longa).jpg',
    specs: [
      { label: 'Curcumin Content', value: '3-5% (natural) / 95% (extract available)' },
      { label: 'Moisture', value: '≤ 10%' },
      { label: 'Mesh Size', value: '200-325 mesh' },
      { label: 'Colour (CU)', value: '450-500 colour units' },
      { label: 'Total Plate Count', value: '≤ 100,000 CFU/g' },
      { label: 'Shelf Life', value: '24 months sealed' },
      { label: 'HS Code', value: '0910.30.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'Halal', 'Kosher', 'Organic (select lots)', 'EU Pesticide MRL compliant'],
    exportMarkets: ['USA', 'Germany', 'India', 'UAE', 'UK', 'Australia', 'Japan', 'Netherlands'],
    moq: '500 kg',
    containerCapacity: '18-20 MT per 20ft',
    packagingOptions: ['25 kg PP woven bag', '50 kg woven bag', '500g retail spice pack', '1 kg food service pack', 'Custom OEM packaging'],
    faqs: [
      { question: 'What makes Vietnamese turmeric different from Indian varieties?', answer: 'Vietnamese turmeric averages 3-5% curcumin, comparable to premium Indian Erode/Salem varieties. It has a more earthy, less pungent aroma — preferred for cosmetic and food colouring applications.' },
      { question: 'Do you supply 95% curcumin extract for supplements?', answer: 'Yes. Standardised turmeric extract with 95% curcuminoids available with HPLC testing, heavy metal analysis, and full CoA provided per lot.' },
    ],
    relatedSlugs: ['black pepper bulk', 'star anise whole export'],
    seoTitle: 'Vietnamese Turmeric Powder Export | High Curcumin Organic Turmeric Wholesale',
    seoDescription: 'Turmeric powder from Vietnam. High curcumin 3-5%. Halal, HACCP, organic. MOQ 500kg. Export to USA, EU, GCC, India.',
    keywords: ['turmeric powder Vietnam export', 'high curcumin turmeric supplier', 'Vietnamese turmeric wholesale', 'organic turmeric powder bulk'],
    hsCode: '0910.30.00',
  },
];

// ─── Green Tea Products ───────────────────────────────────────────────────────
const greenTeaProducts: Product[] = [
  {
    slug: 'thai-nguyen-green-tea',
    name: 'Thái Nguyên Green Tea (Loose Leaf)',
    category: 'Green Tea',
    categorySlug: 'green tea',
    tagline: "Vietnam's Most Celebrated Green Tea — Direct from Thái Nguyên",
    description: 'Thái Nguyên loose leaf green tea is Vietnam\'s most prized tea origin, grown on mineral rich hillsides at 100–200 metres elevation. Distinguished by its emerald green leaves, fresh grassy aroma, and a smooth, slightly sweet aftertaste — perfectly suited for Middle Eastern, European, and Asian markets.',
    longDescription: `Thái Nguyên province, located 80 km north of Hanoi, is Vietnam's tea capital and home to some of the most celebrated green tea gardens in Southeast Asia. The region's humid subtropical climate, rich laterite soils, and traditional cultivating techniques have produced tea of extraordinary character for over three centuries.

The Thái Nguyên green tea bush (Camellia sinensis var. sinensis) produces tender young leaves with elevated levels of polyphenols, catechins, and L-theanine — the compound responsible for the tea's characteristic umami like smoothness. Unlike mass produced teas, Thái Nguyên green tea is hand picked during three main harvest seasons: spring (March–April), summer (June–July), and autumn (September–October), with spring harvest being the most prized.

Processing involves rapid withering, high temperature fixation (sao/de-enzyming), rolling to release essential oils, and gentle drying to achieve 4–6% moisture content. The result is a vivid green leaf that brews a clear, jade green liquor with fresh, vegetal notes, mild astringency, and a lingering sweet finish.

Our Thái Nguyên green tea is available in multiple grades — from premium Single Bud (Bạch Hào) to OP (Orange Pekoe), Broken, and Fannings — serving the diverse needs of loose leaf retail brands, tea bag manufacturers, health supplement producers, and foodservice operators worldwide.

Export ready packaging includes bulk aluminum foil bags, nitrogen flushed retail canisters, and biodegradable paper pouches. All lots are tested for pesticide residues, heavy metals, and microbiological parameters prior to shipment, with full traceability to named gardens within Thái Nguyên province.`,
    heroImage: '/tea/Thải Nguyên Green Tea (Loose Leaf).jpg',
    specs: [
      { label: 'Grade', value: 'Bud / OP / Broken / Fannings' },
      { label: 'Moisture', value: '≤ 6%' },
      { label: 'Total Ash', value: '≤ 7%' },
      { label: 'Polyphenols', value: '≥ 25%' },
      { label: 'Color (Liquor)', value: 'Clear jade green' },
      { label: 'Aroma', value: 'Fresh, grassy, floral' },
      { label: 'Pesticide Residues', value: 'EU MRL compliant' },
      { label: 'Origin', value: 'Thái Nguyên Province, Vietnam' },
      { label: 'Harvest', value: 'Spring / Summer / Autumn' },
      { label: 'Shelf Life', value: '24 months (sealed)' },
      { label: 'HS Code', value: '0902.10.10' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Organic (select lots)', 'Halal', 'EU Residue Compliant', 'FDA Registered'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Morocco', 'Russia', 'Germany', 'USA', 'Pakistan', 'Egypt'],
    moq: '1 MT',
    containerCapacity: '14–16 MT per 20ft',
    packagingOptions: ['25 kg aluminum foil bag', '5 kg retail canister', '1 kg nitrogen flushed pouch', 'Custom OEM packaging', 'Tea bag cut (CTC / Fannings)'],
    faqs: [
      { question: 'What distinguishes Thái Nguyên green tea from Chinese green teas?', answer: 'Thái Nguyên tea has a bolder, more robust flavor compared to delicate Chinese green teas like Dragon Well (Longjing). It has higher polyphenol content, a stronger brew, and is significantly more affordable, making it ideal for daily consumption retail brands and HoReCa buyers.' },
      { question: 'Can you supply Thái Nguyên green tea certified for the EU market?', answer: 'Yes. We work with farming cooperatives operating under strict EU-compliant pesticide protocols. All export lots are tested at accredited laboratories (Eurofins, SGS) against full EU MRL panels before shipment.' },
      { question: 'Is tea bag cut (TBC) or Fannings grade available for tea bag manufacturers?', answer: 'Yes, we supply CTC (Crush, Tear, Curl) and Fannings grades specifically processed for tea bag production. These are available in 25 kg bulk bags or direct fill drum packaging for automated packing lines.' },
      { question: 'What is the lead time for a custom branded retail order?', answer: 'For bulk green tea with generic packaging: 7–14 days. For custom printed canisters or branded pouches: 3–5 weeks, depending on printing complexity and MOQ.' },
    ],
    relatedSlugs: ['jasmine rice', 'robusta coffee beans'],
    seoTitle: 'Thái Nguyên Green Tea Export Vietnam | Wholesale Loose Leaf Supplier',
    seoDescription: 'Export grade Thái Nguyên green tea from Vietnam. Loose leaf OP, Bud, Fannings grades. ISO 22000, EU compliant. MOQ 1 MT. Supplier to Middle East, EU, Asia.',
    keywords: ['Thai Nguyen green tea export', 'Vietnamese green tea wholesale', 'loose leaf green tea Vietnam', 'green tea supplier Vietnam', 'buy green tea bulk'],
    hsCode: '0902.10.10',
  },
  {
    slug: 'jasmine-green-tea',
    name: 'Vietnamese Jasmine Green Tea',
    category: 'Green Tea',
    categorySlug: 'green tea',
    tagline: 'Floral Jasmine Scented Green Tea Premium Retail & HoReCa Grade',
    description: 'Vietnamese jasmine green tea traditional green tea leaves triple scented with fresh jasmine blossoms. A best selling category globally, our jasmine green tea delivers an intensely floral aroma, smooth liquor, and lasting sweetness that performs equally well in loose leaf retail, tea bags, and HoReCa applications.',
    longDescription: `Jasmine green tea is one of the world's most consumed scented teas, and Vietnam has become a major producer of high quality jasmine scented tea for export to the Middle East, North Africa, Europe, and Southeast Asia. Our jasmine green tea is produced by layering freshly harvested jasmine blossoms (Jasminum sambac) with dried green tea leaves and allowing the tea to absorb the natural floral volatiles overnight a traditional process repeated 3–5 times for premium grades.

The base green tea used for jasmine scenting is sourced primarily from Thái Nguyên, Mộc Châu, and Lâm Đồng provinces, offering consistent quality and flavor profiles across seasons. After scenting, the jasmine petals are removed and the tea is re-dried to achieve optimal moisture content of 5–7%, ensuring shelf stability during long distance shipping.

Our jasmine green tea is available in multiple product formats:
- Loose leaf premium grade (whole leaf, high blossom index)
- Tea bag cut (fannings/CTC) for pyramid and flat tea bag production
- Scented jasmine pearl (hand rolled balls)
- Private label retail packs (100g, 200g, 500g)

The GCC market particularly Saudi Arabia, UAE, Qatar, and Kuwait represents one of the largest per-capita consumers of jasmine tea globally, where it is served as a hospitality tea in hotels, restaurants, and homes. Our grades are specifically calibrated for the floral intensity and visual appeal preferred in these markets.`,
    heroImage: '/tea/Vietnamese Jasmine Green Tea.jpg',
    specs: [
      { label: 'Type', value: 'Jasmine scented green tea' },
      { label: 'Scenting Passes', value: '3–5 times (grade dependent)' },
      { label: 'Moisture', value: '≤ 7%' },
      { label: 'Aroma', value: 'Intensely floral, jasmine sweet' },
      { label: 'Liquor Color', value: 'Pale gold / light green' },
      { label: 'Blossom Index', value: 'Grade A: ≥ 85% floral absorption' },
      { label: 'Origin', value: 'Thái Nguyên / Lâm Đồng, Vietnam' },
      { label: 'Shelf Life', value: '18 months (sealed, cool storage)' },
      { label: 'HS Code', value: '0902.10.90' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'Organic (select)', 'EU MRL Compliant'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Morocco', 'Egypt', 'Malaysia', 'Germany', 'France', 'USA'],
    moq: '500 kg',
    containerCapacity: '12–14 MT per 20ft',
    packagingOptions: ['25 kg bulk aluminum bag', '1 kg retail pouch', '200g gift tin', 'Tea bag cut 25 kg drum', 'Custom OEM retail'],
    faqs: [
      { question: 'How many times is the tea scented with jasmine?', answer: 'Our standard export grade is scented 3 times. Premium and luxury grades receive 5 scenting passes, which dramatically increases the floral intensity and aroma longevity in the cup.' },
      { question: 'Is Vietnamese jasmine tea suitable for making tea bags?', answer: "Yes. We provide fannings-grade jasmine tea specifically processed and graded for tea bag machinery, including CTC-cut for flat bags and a slightly larger cut for pyramid silk bags." },
      { question: 'Do you offer private label packaging for retail jasmine tea?', answer: 'Yes. We manufacture private label tea products from 500 kg MOQ, including custom canister printing, pouch design, and retail box production. We can handle design to shelf within 4–6 weeks.' },
    ],
    relatedSlugs: ['thai nguyen green tea', 'robusta coffee beans'],
    seoTitle: 'Vietnamese Jasmine Green Tea Export | Wholesale Supplier | Halal Certified',
    seoDescription: 'Premium jasmine green tea from Vietnam 3–5x scented. Halal, ISO 22000. Loose leaf, tea bag cut, retail pack. MOQ 500 kg. Supplier to Saudi Arabia, UAE, Morocco.',
    keywords: ['jasmine green tea Vietnam', 'jasmine tea export', 'Vietnamese jasmine tea supplier', 'jasmine tea wholesale', 'scented green tea Vietnam'],
    hsCode: '0902.10.90',
  },
  {
    slug: 'lotus-tea-export',
    name: 'Vietnamese Lotus Tea (Tra Sen)',
    category: 'Green Tea',
    categorySlug: 'green tea',
    tagline: "Vietnam's Most Celebrated Artisanal Tea Hand Scented with Fresh Lotus",
    description: "Traditional Vietnamese lotus tea made by scenting premium Thai Nguyen green tea inside fresh lotus blossoms. Tea absorbs the natural lotus fragrance over 24 hours. Hand crafted using centuries old methods. No artificial fragrance. Premium retail gift packaging available. MOQ 50 kg.",
    longDescription: `Tra sen (lotus tea) is Vietnam's most celebrated tea the tea leaves are packed inside freshly picked lotus flowers and left for 24 hours to absorb the natural floral fragrance. The process is repeated 5-7 times for premium grade.

Quality Tiers: Premium (5-cycle scenting, strongest natural lotus fragrance, limited seasonal production), Standard (3-cycle, excellent quality), Lotus flower blend (dried lotus petals blended with green tea).

Gift Packaging: Hand crafted lacquerware boxes, bamboo canisters, and ceramic tea caddies available for premium retail and gifting programs.`,
    heroImage: '/tea/Lotus Green Tea (Tra Sen).jpg',
    specs: [
      { label: 'Base Tea', value: 'Thai Nguyen green tea (single bud)' },
      { label: 'Scenting Cycles', value: '3x (standard) / 5-7x (premium)' },
      { label: 'Moisture', value: '≤ 7%' },
      { label: 'Aroma', value: 'Natural lotus no artificial fragrance' },
      { label: 'Shelf Life', value: '18 months vacuum sealed' },
      { label: 'MOQ', value: '50 kg' },
      { label: 'HS Code', value: '0902.10.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Vietnam Tea Export Standard', 'No artificial additives'],
    exportMarkets: ['USA', 'France', 'Japan', 'Germany', 'Australia', 'UAE', 'UK', 'Canada'],
    moq: '50 kg',
    containerCapacity: 'Air freight typically used for premium product',
    packagingOptions: ['100g premium tin canister', '50g bamboo canister', '25g ceramic tea caddy', '200g bulk foil bag', 'Custom lacquerware gift box'],
    faqs: [
      { question: 'Is the lotus fragrance natural or artificially added?', answer: 'Exclusively natural tea is packed inside living lotus flowers and absorbs floral volatile compounds naturally. No artificial lotus flavouring or essential oils are added at any stage.' },
      { question: 'Why is lotus tea expensive compared to jasmine tea?', answer: 'Premium 5-cycle lotus tea requires approximately 1,400 fresh lotus blooms per kilogram of finished tea all picked by hand at dawn. The process cannot be industrialised.' },
    ],
    relatedSlugs: ['thai nguyen green tea', 'jasmine green tea'],
    seoTitle: 'Vietnamese Lotus Tea Export | Tra Sen Premium Lotus Scented Green Tea Wholesale',
    seoDescription: 'Authentic Vietnamese lotus tea (tra sen) for export. Hand crafted, natural lotus scented. Premium gift packaging. MOQ 50kg. Export to USA, EU, Japan.',
    keywords: ['Vietnamese lotus tea export', 'tra sen lotus tea wholesale', 'lotus scented green tea Vietnam', 'premium Vietnamese tea supplier'],
    hsCode: '0902.10.00',
  },
];

// ─── Pineapple Products ───────────────────────────────────────────────────────
const pineappleProducts: Product[] = [
  {
    slug: 'fresh-export-pineapple',
    name: 'Fresh Vietnamese Pineapple (Queen/MD2)',
    category: 'Fresh Pineapple',
    categorySlug: 'pineapple',
    tagline: 'Sweet, Golden Pineapples from Vietnam Export Ready for the World',
    description: "Vietnam's Queen and MD2 pineapples offer exceptional sweetness, firm golden flesh, and vibrant aroma. Carefully selected from Long An, Tiền Giang, and Kiên Giang farms, our pineapples meet strict phytosanitary standards for export to the Middle East, Asia, and Europe.",
    longDescription: `Vietnam is one of Southeast Asia's leading pineapple producers, with the Mekong Delta provinces of Long An, Tiền Giang, and Kiên Giang providing ideal growing conditions fertile alluvial soils, year round sunshine, and consistent rainfall that produce pineapples of exceptional sweetness and quality.

The Queen variety (Dứa Ta), the traditional Vietnamese pineapple, is known for its compact size, intensely sweet flavor (Brix 14–18°), deep yellow flesh, and strong aroma. Queen pineapples are harvested at precise maturity to ensure optimal sugar content and shelf life during transit. The MD2 (Gold) variety, popular in European and Gulf markets, offers a larger fruit size, uniform cylindrical shape, and lower acidity  making it the preferred choice for supermarket retail display.

Our export pineapples are:
- Harvested to order from partner farms under Good Agricultural Practices (GAP) protocols
- Treated with approved post harvest fungicides (thiabendazole where permitted)
- Pre-cooled and graded by size (weight/diameter) for uniformity
- Packed in ventilated cartons with foam netting for shock protection
- Inspected and certificated by Vietnam's Plant Protection Department (PPD)

We supply to wholesale importers, supermarket chains, and food distributors across the Middle East, EU, South Korea, Japan, and ASEAN. Custom packing specifications (size range, carton weight, label printing) are accommodated for key account buyers.`,
    heroImage: '/pinple/Fresh Vietnamese Pineapple (QueenMD2).jpg',
    specs: [
      { label: 'Variety', value: 'Queen (Dứa Ta) / MD2 (Gold)' },
      { label: 'Brix (Sugar)', value: '14–18° Brix (Queen) / 13–16° (MD2)' },
      { label: 'Weight / Fruit', value: '0.6–1.0 kg (Queen) / 1.2–2.0 kg (MD2)' },
      { label: 'Shelf Life', value: '14–21 days at 10–12°C' },
      { label: 'Defects', value: '≤ 5% surface blemish allowed' },
      { label: 'Maturity', value: '¼ to ½ yellow at point of export' },
      { label: 'Packing', value: '6–14 fruits per carton (size dependent)' },
      { label: 'Carton Weight', value: '8–12 kg net' },
      { label: 'Origin', value: 'Long An, Tiền Giang, Kiên Giang' },
      { label: 'HS Code', value: '0804.30.00' },
    ],
    certifications: ['GlobalGAP (partner farms)', 'Phytosanitary Certificate', 'Certificate of Origin (Form E/D)', 'Halal (on request)', 'HACCP (packing house)'],
    exportMarkets: ['UAE', 'Saudi Arabia', 'Qatar', 'South Korea', 'Japan', 'Netherlands', 'Germany', 'Malaysia'],
    moq: '1 x 20ft reefer (≈ 14 MT)',
    containerCapacity: '14–16 MT per 20ft reefer',
    packagingOptions: ['Ventilated carton 8 kg net', 'Ventilated carton 12 kg net', 'Individual foam net sleeve', 'Custom label printing'],
    faqs: [
      { question: 'What is the shipping transit time from Vietnam to the Middle East?', answer: 'Transit time from Ho Chi Minh City or Hai Phong port to GCC ports (Jeddah, Dubai, Dammam) is approximately 16–22 days by sea. We recommend reefer containers maintained at 10–12°C for optimal freshness.' },
      { question: 'Can pineapples be exported by air for higher value markets?', answer: 'Yes, for premium or time sensitive orders, we arrange air freight from Tan Son Nhat or Noi Bai airports. Air export quantities are typically 500 kg–2 MT per shipment.' },
      { question: 'Do you offer custom carton labels for supermarket chains?', answer: 'Yes, we accommodate private label carton printing for key account buyers. Requirements include barcode, PLU, retailer logo, and origin declaration. Minimum print run is 1,000 cartons.' },
    ],
    relatedSlugs: ['jasmine rice', 'thai nguyen green tea'],
    seoTitle: 'Fresh Vietnamese Pineapple Export | Queen & MD2 | Wholesale Supplier',
    seoDescription: 'Export fresh pineapples from Vietnam. Queen and MD2 varieties. GlobalGAP, phytosanitary certified. MOQ 1 reefer container. Supplier to UAE, Saudi Arabia, EU, Asia.',
    keywords: ['fresh pineapple Vietnam export', 'Vietnamese pineapple supplier', 'buy pineapple wholesale Vietnam', 'MD2 pineapple Vietnam', 'pineapple exporter Vietnam'],
    hsCode: '0804.30.00',
  },
  {
    slug: 'canned-pineapple-syrup',
    name: 'Canned Pineapple in Syrup',
    category: 'Processed Pineapple',
    categorySlug: 'pineapple',
    tagline: 'HACCP Certified Canned Pineapple Ready for Global Retail & Foodservice',
    description: 'Vietnamese canned pineapple in light syrup slices, chunks, tidbit, and crushed formats. Processed from freshly harvested Queen pineapples with consistent Brix, natural color, and firm texture. Ideal for retail, foodservice, bakery, and confectionery applications globally.',
    longDescription: `Canned pineapple is a globally consumed product with strong demand in the Middle East, Africa, Europe, and North America — particularly for use in bakery, confectionery, HoReCa, and grocery retail. Vietnam has developed a robust canning industry in the Mekong Delta, leveraging fresh pineapple abundance and modern retort processing facilities.

Our canned pineapple is processed within 24 hours of harvest at HACCP certified facilities equipped with automated slicing, blanching, syrup filling, seaming, and retort sterilization lines. This farm to can efficiency preserves the natural flavor, color, and nutritional profile of the fresh fruit.

Available cut styles: Slices (30A can), Chunks, Tidbits, Crushed (for bakery/confectionery), Rings.

Available syrup types: Light syrup (14–16° Brix), Heavy syrup (18–22° Brix), Juice pack (pineapple juice only).

Standard can sizes: A10 (3 kg net), A2½ (825g net), 1 kg, 565g, 227g. All can sizes comply with international fill weight and headspace standards. Our facilities are registered with the FDA and hold EU market authorization.`,
    heroImage: '/pinple/Canned Pineapple in Syrup.jpg',
    specs: [
      { label: 'Drained Weight', value: '≥ 60% of net weight (Codex standard)' },
      { label: 'Syrup Brix', value: '14–16° (light) / 18–22° (heavy)' },
      { label: 'Can Sizes', value: 'A10 / A2½ / 1 kg / 565g / 227g' },
      { label: 'Cut Style', value: 'Slices / Chunks / Tidbits / Crushed / Rings' },
      { label: 'pH', value: '3.5–4.0' },
      { label: 'Shelf Life', value: '36 months (room temperature)' },
      { label: 'Net Weight (A10)', value: '3,000g / Drained: 1,800g min' },
      { label: 'Heavy Metal', value: 'Compliant (Sn ≤ 200 ppm)' },
      { label: 'HS Code', value: '2008.20.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'BRC Food Grade', 'FDA Registered', 'EU Authorized', 'Halal', 'Kosher'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'Germany', 'UK', 'USA', 'Nigeria', 'South Africa'],
    moq: '1 x 20ft container (≈ 24 MT A10)',
    containerCapacity: '24 MT (A10) / 20 MT (A2½) per 20ft',
    packagingOptions: ['A10 can (24 x 3 kg per carton)', 'A2½ can (24 x 825g per carton)', 'Custom label OEM', 'Retailer own brand'],
    faqs: [
      { question: 'What is the minimum order for custom private label canned pineapple?', answer: 'Private label canned pineapple (customer supplied labels or printed cans) is available from 1 x 20ft container. For printed can (not paper label) production, MOQ is 2 containers per design.' },
      { question: 'Do you offer A10 cans for foodservice and bakery buyers?', answer: "Yes, A10 (3 kg net) is our primary foodservice/food industry size and our best selling export format. It's compatible with standard commercial can openers and widely used by bakeries, hotels, and catering operations." },
      { question: 'What certifications are required for Saudi Arabia and Gulf markets?', answer: 'We provide SASO compliance documentation, Halal certificate from an accredited body, COO, health certificate, and packing list as standard for GCC markets.' },
    ],
    relatedSlugs: ['frozen white shrimp', 'jasmine rice'],
    seoTitle: 'Canned Pineapple Vietnam Export | Light & Heavy Syrup | Halal B2B Supplier',
    seoDescription: 'Buy canned pineapple in syrup from Vietnam. A10/A2½ sizes. Slices, chunks, tidbits, crushed. HACCP, Halal, BRC certified. MOQ 1 container. Export to Saudi Arabia, EU, Africa.',
    keywords: ['canned pineapple Vietnam', 'canned pineapple syrup export', 'Vietnamese canned fruit supplier', 'canned pineapple wholesale', 'pineapple can manufacturer Vietnam'],
    hsCode: '2008.20.00',
  },
  {
    slug: 'dried-pineapple-export',
    name: 'Dried Pineapple Slices & Chunks',
    category: 'Pineapple',
    categorySlug: 'pineapple',
    tagline: 'Sun Sweet Dried Pineapple Natural & Sulphur Free Vietnam Export',
    description: 'Premium dried pineapple slices and chunks from Vietnamese Queen variety pineapples. Available sulphur treated (golden, long shelf life) and sulphur free (natural, clean label). Moisture ≤ 18%, Brix 68-72°. HACCP certified. Suitable for snack, trail mix, baking, confectionery. MOQ 1 MT.',
    longDescription: `Dried pineapple is produced from Vietnamese Queen or MD2 pineapples that are peeled, cored, sliced, and dehydrated to 14-18% moisture. Vietnam's consistent tropical climate and year round harvest enable continuous production for snack manufacturers, confectionery producers, and trail mix blenders worldwide.

Variants: Sulphured (SO2, bright golden colour, shelf life 18-24 months, standard commodity) or sulphur free (natural amber, clean label, organic available, 12-18 months). Sugar added for confectionery or sugar free natural options.

Drying methods: Hot air drying, solar tunnel drying, or freeze drying (premium preserves colour and flavour, light crunchy texture).`,
    heroImage: '/pinple/Dried Pineapple Slices & Chunks.jpg',
    specs: [
      { label: 'Variety', value: 'Queen pineapple / MD2' },
      { label: 'Moisture', value: '≤ 18%' },
      { label: 'Brix', value: '68-72°' },
      { label: 'SO2 Residue', value: '≤ 500 ppm (sulphured) / Nil (natural)' },
      { label: 'Colour', value: 'Golden yellow (sulphured) / Amber (natural)' },
      { label: 'Shelf Life', value: '18-24 months (sulphured) / 12-18 months (natural)' },
      { label: 'HS Code', value: '0813.40.00' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'Organic (select lots)', 'Halal', 'BRC'],
    exportMarkets: ['Germany', 'USA', 'Australia', 'UK', 'Netherlands', 'Japan', 'UAE', 'Canada'],
    moq: '1 MT',
    containerCapacity: '18-20 MT per 20ft',
    packagingOptions: ['10 kg carton box', '5 kg inner bag in carton', '1 kg retail pouch', '200g retail snack bag', 'Custom OEM packaging'],
    faqs: [
      { question: 'What is the difference between sulphured and sulphur free dried pineapple?', answer: 'Sulphured retains bright golden colour, shelf life 18-24 months, SO2 must be declared on EU labels. Sulphur free is natural amber colour, 12-18 month shelf life, appeals to clean label and organic consumers.' },
      { question: 'Can you supply certified organic dried pineapple?', answer: 'Yes. USDA Organic and EU Organic certified available in sulphur free only (organic standards prohibit SO2). Requires advance booking during harvest (Feb-May). 30-50% premium over conventional.' },
    ],
    relatedSlugs: ['fresh export pineapple', 'canned pineapple syrup'],
    seoTitle: 'Dried Pineapple Export Vietnam | Natural Sulphur Free Pineapple Slices Wholesale',
    seoDescription: 'Dried pineapple slices and chunks from Vietnam. Natural sulphur free and sulphured. HACCP, ISO 22000, Halal. MOQ 1 MT. Export to Germany, USA, Australia, GCC.',
    keywords: ['dried pineapple exporter Vietnam', 'natural dried pineapple wholesale', 'sulphur free dried pineapple', 'pineapple slices bulk supplier'],
    hsCode: '0813.40.00',
  },
];

// ─── Textile & Apparel OEM Products ───────────────────────────────────────────
const textileProducts: Product[] = [
  {
    slug: 'garment-oem-manufacturing',
    name: 'Garment OEM Manufacturing (Full Package)',
    category: 'Textile & Apparel',
    categorySlug: 'textile apparel',
    tagline: 'Full Package OEM Garment Production Fashion, Workwear & Basics',
    description: "Vietnam is the world's 3rd largest apparel exporter. Our full package OEM service covers design adoption, fabric sourcing, pattern making, cutting, sewing, finishing, and quality inspection for fashion brands, retailers, and wholesale buyers globally.",
    longDescription: `Vietnam's textile and garment industry generates over USD 40 billion in annual exports, making it the country's largest manufacturing sector and one of the world's most capable apparel production hubs. With a workforce of over 2.7 million skilled garment workers, Vietnam offers a unique combination of production capacity, craftsmanship, and competitive cost structure.

Ideal Deal Vietnam partners with audited, WRAP and BSCI certified factories across Ho Chi Minh City, Binh Duong, Dong Nai, and the Mekong Delta facilities that have supplied major international brands across fast fashion, mid-market retail, workwear, and sportswear categories.

Our OEM garment manufacturing capabilities include:
- **Woven garments**: Shirts, blouses, trousers, jackets, dresses, denim
- **Knit garments**: T-shirts, polo shirts, sweaters, hoodies, activewear
- **Outerwear**: Windbreakers, parkas, quilted jackets
- **Workwear & uniforms**: Safety vests, coveralls, hospitality uniforms
- **Babywear & children's**: Onesies, children's sets, school uniforms

Full-package service includes: Fabric sourcing (local or imported), pattern grading, marker making, cutting (automated or manual), sewing, embroidery/printing, finishing, ironing, hang tag/label attachment, inspection, and export packing.

Lead times: Sampling 15–21 days. Bulk production 45–90 days (volume dependent). All factories comply with international labor and environmental standards.`,
    heroImage: '/clothes/Garment OEM Manufacturing — Full Package.png',
    specs: [
      { label: 'Production Type', value: 'Full Package (CMT + Fabric)' },
      { label: 'Fabric Range', value: 'Cotton, Polyester, Nylon, Linen, Denim, Blends' },
      { label: 'MOQ', value: '500–1,000 pcs per style' },
      { label: 'Sample Lead Time', value: '15–21 days' },
      { label: 'Bulk Lead Time', value: '45–90 days' },
      { label: 'Size Range', value: 'XS–5XL / Custom sizing' },
      { label: 'Print & Embroidery', value: 'Screen, DTG, Embroidery, Heat Transfer' },
      { label: 'Quality Inspection', value: 'Inline + Final AQL 2.5' },
      { label: 'Compliance', value: 'WRAP, BSCI, OEKO-TEX, GOTS (select)' },
    ],
    certifications: ['WRAP Certified', 'BSCI Audited', 'OEKO-TEX Standard 100', 'GOTS (select factories)', 'ISO 9001'],
    exportMarkets: ['USA', 'EU (Germany, France, UK)', 'Australia', 'Japan', 'South Korea', 'Canada', 'UAE'],
    moq: '500 pcs per style',
    containerCapacity: 'Per order volume',
    packagingOptions: ['Individual poly bag', 'Branded hang tag + label', 'Retail box packaging', 'Bulk carton', 'Custom OEM spec'],
    faqs: [
      { question: 'What is the minimum order quantity for OEM garment production?', answer: 'MOQ starts at 500 pieces per style per colorway. For reorders of existing styles, MOQ can be reduced to 300 pieces. Complex styles with many components may require higher MOQ.' },
      { question: 'Can you source sustainable or organic fabrics?', answer: 'Yes. We source GOTS-certified organic cotton, recycled polyester (GRS certified), and Tencel/lyocell fabrics from our approved supplier network. A sustainable fabric sourcing premium of 15–30% typically applies.' },
      { question: 'Do your factories comply with international labor standards?', answer: 'All partner factories are WRAP and/or BSCI audited with current certificates. Factory audit reports are available to buyers upon request as part of our supply chain transparency commitment.' },
      { question: 'Can you handle garments requiring CE marking for EU safety compliance?', answer: 'Yes, for categories requiring EU textile labelling compliance, fire retardant standards (EN 11611), or PPE category documentation, we coordinate with accredited testing labs to obtain required certificates.' },
    ],
    relatedSlugs: ['cnc-machined-parts', 'eco-packaging-kraft'],
    seoTitle: 'Vietnam Garment OEM Manufacturing | Apparel Supplier | WRAP BSCI Certified',
    seoDescription: 'OEM garment manufacturing from Vietnam. Full package service fabric to finished goods. WRAP, BSCI, OEKO-TEX certified. MOQ 500 pcs. Export to USA, EU, Australia.',
    keywords: ['garment OEM Vietnam', 'apparel manufacturer Vietnam', 'clothing supplier Vietnam', 'OEM clothing production', 'Vietnam garment factory'],
    hsCode: '6109.10.00',
  },
  {
    slug: 'sportswear-oem',
    name: 'Sportswear & Activewear OEM',
    category: 'Textile & Apparel',
    categorySlug: 'textile apparel',
    tagline: 'Technical Sportswear Manufacturing Performance Fabric Expertise',
    description: 'Vietnam manufactured sportswear and activewear using performance fabrics moisture wicking polyester, compression nylon, and recycled GRS materials. Ideal for sports brands, gym wear retailers, and corporate wellness programs. Sublimation, screen print, and embroidery available.',
    longDescription: `Vietnam has rapidly developed significant capabilities in technical sportswear and activewear manufacturing, with specialized factories serving global brands in yoga wear, gym apparel, cycling gear, team sports kits, and outdoor performance clothing.

Our sportswear OEM partners utilize advanced technical fabrics from leading suppliers including moisture wicking and quick dry polyester (90–110 GSM), 4-way stretch nylon spandex blends for compression wear (80/20 to 87/13 nylon/spandex ratios), recycled polyester for sustainable activewear, and UV-protective fabrics for outdoor applications.

Manufacturing capabilities include flatlock and overlock seam construction for comfort against skin, bonded and taped seams for seamless performance, sublimation printing for full color all over print designs, silicone gripper application, zipper and drawstring insertion, and reflective tape for safety apparel.

Quality benchmarks applied include fabric pilling resistance testing (ISO 12945), colorfastness to washing and perspiration (ISO 105-C06, ISO 105-E04), dimensional stability, and burst strength for compression wear. All garments are pre-shipment inspected per AQL 2.5 or buyer specified level.`,
    heroImage: '/clothes/Sportswear & Activewear OEM.png',
    specs: [
      { label: 'Fabric', value: 'Polyester / Nylon Spandex / Recycled Poly' },
      { label: 'GSM Range', value: '90–200 GSM' },
      { label: 'Stretch', value: '4-way stretch (where applicable)' },
      { label: 'Printing', value: 'Sublimation / Screen / Digital (DTG)' },
      { label: 'Seam Type', value: 'Flatlock / Overlock / Bonded' },
      { label: 'MOQ', value: '300 pcs per style/color' },
      { label: 'Sample Lead Time', value: '14–18 days' },
      { label: 'Bulk Lead Time', value: '45–75 days' },
      { label: 'HS Code', value: '6211.42.00' },
    ],
    certifications: ['OEKO-TEX Standard 100', 'GRS (Recycled)', 'BSCI Audited', 'bluesign (select fabrics)'],
    exportMarkets: ['USA', 'UK', 'Australia', 'Germany', 'UAE', 'South Korea', 'Canada'],
    moq: '300 pcs per style',
    containerCapacity: 'Per order volume',
    packagingOptions: ['Individual poly bag', 'Retail hanger pack', 'Custom branded packaging', 'Bulk export carton'],
    faqs: [
      { question: 'Do you offer all over sublimation printing for sportswear?', answer: "Yes, sublimation printing is available for 100% polyester garments, enabling full color all over print designs including team kits, custom branding, and pattern designs. There's no color limitation with sublimation and no feel to the print." },
      { question: 'Can you produce recycled/sustainable sportswear?', answer: 'Yes, we work with GRS-certified recycled polyester fabric and can provide sustainability documentation including recycled content certificates for your ESG reporting.' },
    ],
    relatedSlugs: ['garment oem-manufacturing', 'eco-packaging kraft'],
    seoTitle: 'Vietnam Sportswear OEM Manufacturer | Activewear Supplier | Sublimation Print',
    seoDescription: 'OEM sportswear and activewear from Vietnam. Polyester, nylon spandex, recycled fabrics. Sublimation printing. OEKO-TEX, GRS. MOQ 300 pcs. Export globally.',
    keywords: ['sportswear manufacturer Vietnam', 'activewear OEM Vietnam', 'gym wear supplier Vietnam', 'sublimation sportswear Vietnam', 'performance wear Vietnam'],
    hsCode: '6211.42.00',
  },
  {
    slug: 'polo-shirts-oem',
    name: 'Polo Shirts OEM Manufacturing',
    category: 'Textile & Apparel',
    categorySlug: 'textile apparel',
    tagline: 'Custom Polo Shirt Production Corporate, Retail & Sportswear Brands',
    description: 'Vietnam OEM polo shirt manufacturing for corporate brands, retailers, and sportswear labels. 100% cotton piqué, cotton polyester blends, and performance fabric options. Custom embroidery, screen print, and heat transfer branding. MOQ 300 pcs per color.',
    longDescription: `Polo shirts are one of the highest volume garment categories exported from Vietnam, with domestic factories supplying major global retail chains, corporate uniform programs, golf brands, and sports apparel companies across 80+ countries.

Ideal Deal Vietnam sources from WRAP and BSCI certified polo shirt factories in Ho Chi Minh City and Binh Duong, offering full package CMT (Cut, Make, Trim) with fabric sourcing, or CM-only service if buyers supply their own fabric. Key manufacturing capabilities include:

- **Fabric options**: 100% combed cotton piqué (180–240 GSM), cotton polyester blend (CVC 60/40, TC 65/35), moisture wicking performance polyester piqué, recycled polyester (GRS certified)
- **Collar constructions**: Classic 3 button polo collar, rib collar, self fabric collar, stand collar
- **Branding methods**: Left chest embroidery (up to 10,000 stitches), screen print, heat transfer, sublimation (polyester), woven label, printed label
- **Fit options**: Regular fit, slim fit, relaxed fit, women's fitted, unisex
- **Sizes**: XS–5XL, custom sizing for corporate programs

All polo shirts are pre-shrunk and tested for colorfastness (ISO 105-C06), dimensional stability after washing, and fabric pilling resistance (Martindale test). Packing: individual poly bag, folded or on hanger, retail ready or bulk carton.`,
    heroImage: '/clothes/Polo Shirts OEM Manufacturing.png',
    specs: [
      { label: 'Fabric', value: '100% Cotton Piqué / CVC / Performance Polyester' },
      { label: 'GSM', value: '180–240 GSM' },
      { label: 'Branding', value: 'Embroidery, Screen Print, Heat Transfer, Sublimation' },
      { label: 'MOQ', value: '300 pcs per color/style' },
      { label: 'Sample Lead Time', value: '14–18 days' },
      { label: 'Bulk Lead Time', value: '35–60 days' },
      { label: 'Sizes', value: 'XS–5XL / Custom sizing' },
      { label: 'Colorfastness', value: 'ISO 105-C06 Grade 4–5' },
      { label: 'Compliance', value: 'WRAP, BSCI, OEKO-TEX Standard 100' },
    ],
    certifications: ['WRAP Certified', 'BSCI Audited', 'OEKO-TEX Standard 100', 'GRS (Recycled option)', 'ISO 9001'],
    exportMarkets: ['USA', 'UK', 'Germany', 'Australia', 'UAE', 'South Korea', 'Canada', 'Netherlands'],
    moq: '300 pcs per color',
    containerCapacity: 'Per order volume',
    packagingOptions: ['Individual poly bag (folded)', 'Hanger pack', 'Custom branded hang tag', 'Retail box', 'Bulk export carton'],
    faqs: [
      { question: 'Can you produce polo shirts with custom embroidered logos?', answer: 'Yes. Left chest embroidery is our most popular branding method for corporate and retail polo shirts. We digitize your artwork at no charge for orders above 500 pieces. Embroidery up to 10,000 stitches is standard; larger designs available.' },
      { question: 'What is the MOQ for sustainable / recycled polo shirts?', answer: 'MOQ for GRS recycled polyester polo shirts starts at 500 pieces per color. GOTS certified organic cotton piqué polo shirts require a minimum of 600 pieces due to fabric minimums. Standard CVC and cotton piqué MOQ is 300 pieces.' },
      { question: "Do you offer women's fitted polo shirts?", answer: "Yes. Women's fitted polo shirts are available in all fabric options with princess seam construction for a tailored fit. Corporate polo programs with both men's and women's styles can be produced simultaneously with shared colorways." },
    ],
    relatedSlugs: ['garment oem manufacturing', 'sportswear oem'],
    seoTitle: 'Vietnam Polo Shirt OEM Manufacturer | Custom Polo Shirts Supplier | WRAP BSCI',
    seoDescription: 'OEM polo shirt manufacturing from Vietnam. Cotton, CVC, performance piqué. Custom embroidery and print. WRAP, BSCI, OEKO-TEX certified. MOQ 300 pcs. Export worldwide.',
    keywords: ['polo shirt manufacturer Vietnam', 'polo shirt OEM Vietnam', 'custom polo shirts supplier', 'corporate polo shirts Vietnam', 'polo shirt factory Vietnam'],
    hsCode: '6105.10.00',
  },
];

// ─── Precision Components Products ───────────────────────────────────────────
const precisionProducts: Product[] = [
  {
    slug: 'cnc-machined-parts',
    name: 'CNC Machined Precision Components',
    category: 'Precision Manufacturing',
    categorySlug: 'precision components',
    tagline: 'ISO 9001 CNC Machining — Tight Tolerance Parts for Global OEM Supply Chains',
    description: "Vietnam's precision machining sector supplies automotive, electronics, and industrial OEMs globally. Our partner facilities offer CNC turning, milling, and grinding to tolerances of ±0.01 mm in aluminum, stainless steel, brass, and engineering plastics.",
    longDescription: `Vietnam's precision manufacturing sector has grown significantly over the past decade, driven by FDI inflows from Samsung, Intel, LG, and Foxconn, which have built world class component manufacturing capabilities that now serve both captive and third party OEM buyers.

Our precision CNC machining partners operate modern facilities equipped with 3-axis, 4-axis, and 5-axis CNC machining centers from Mazak, Fanuc, and Haas, with CMM (Coordinate Measuring Machine) quality verification for every production lot. Material expertise includes:

- **Aluminum alloys** (6061-T6, 7075-T6): Lightweight structural components, heat sinks, enclosures
- **Stainless steel** (304, 316L): Food-grade, marine, and medical components
- **Brass** (C360): Fittings, valves, connectors
- **Engineering plastics** (Delrin, PEEK, Nylon): Lightweight, corrosion resistant parts
- **Copper and titanium**: Specialist high conductivity or medical applications

Surface finishing services include anodizing, powder coating, electroplating (nickel, chrome, zinc), bead blasting, and precision polishing. Tolerances achievable: ±0.01 mm dimensional, Ra 0.4–1.6 μm surface finish.

All production follows ISO 9001:2015 quality management systems with full material traceability (mill certificates), first article inspection (FAI), and production part approval process (PPAP) capability for automotive supply chain requirements.`,
    heroImage: '/Precision Components/CNC Machined Precision Components.jpg',
    specs: [
      { label: 'Processes', value: 'CNC Turning / Milling / Grinding / EDM' },
      { label: 'Tolerance', value: '±0.01 mm (standard) / ±0.005 mm (precision)' },
      { label: 'Materials', value: 'Al, SS, Brass, Cu, PEEK, Delrin, Ti' },
      { label: 'Max Part Size', value: '800 mm x 800 mm x 600 mm' },
      { label: 'Surface Finish', value: 'Ra 0.4–1.6 μm' },
      { label: 'Quality System', value: 'ISO 9001:2015' },
      { label: 'Inspection', value: 'CMM, Vision System, Roughness Tester' },
      { label: 'Lead Time (samples)', value: '7–14 days' },
      { label: 'Lead Time (production)', value: '4–8 weeks' },
      { label: 'HS Code', value: '8466.93.00' },
    ],
    certifications: ['ISO 9001:2015', 'IATF 16949 (select facilities)', 'RoHS Compliant', 'REACH Compliant'],
    exportMarkets: ['Japan', 'South Korea', 'Germany', 'USA', 'Singapore', 'Taiwan', 'Australia'],
    moq: '50 pcs (prototype) / 500 pcs (production)',
    containerCapacity: 'Per order volume',
    packagingOptions: ['Individual foam packaging', 'VCI anti corrosion bags', 'Custom foam lined cases', 'Bulk carton with dividers'],
    faqs: [
      { question: 'Can you produce first article inspection (FAI) reports?', answer: 'Yes, we provide full First Article Inspection (FAI) reports to AS9102 / PPAP format including dimensional report, material certification, surface finish report, and functional test results where applicable.' },
      { question: 'Do you accept DXF, STEP, and IGES files for quoting?', answer: 'Yes. Please send 3D CAD files (STEP/IGES preferred) along with 2D drawings (PDF or DXF) including GD&T callouts. We provide DFM (Design for Manufacturability) feedback with every quotation.' },
      { question: 'What is your typical production lead time for machined components?', answer: 'Prototype/sample lead time: 7–14 days. Production batches of 500–5,000 pcs: 4–8 weeks. Express lead times are available at premium pricing.' },
    ],
    relatedSlugs: ['garment oem manufacturing', 'wooden furniture acacia'],
    seoTitle: 'CNC Precision Components Vietnam | OEM Machined Parts Supplier | ISO 9001',
    seoDescription: 'Precision CNC machined components from Vietnam. Al, SS, brass, plastics. ±0.01mm tolerance. ISO 9001, IATF 16949. MOQ 50 pcs. Export to Japan, EU, USA, Korea.',
    keywords: ['CNC machining Vietnam', 'precision components supplier Vietnam', 'machined parts Vietnam', 'OEM manufacturing Vietnam', 'CNC parts manufacturer'],
    hsCode: '8466.93.00',
  },
  {
    slug: 'precision-stamped-parts',
    name: 'Precision Metal Stamped Parts',
    category: 'Precision Manufacturing',
    categorySlug: 'precision components',
    tagline: 'High Volume Metal Stamping — Automotive, Electronics & Industrial OEM Parts',
    description: 'Vietnam manufactured precision metal stamped parts for automotive, electronics, and industrial OEMs. Progressive die and compound die stamping in steel, stainless steel, aluminum, and copper. Tolerances to ±0.05 mm. ISO 9001 and IATF 16949 facilities available.',
    longDescription: `Metal stamping is one of Vietnam's fastest growing precision manufacturing sectors, with significant investment from Japanese, Korean, and Taiwanese tier-1 automotive and electronics suppliers establishing high volume stamping operations across industrial parks in Hanoi, Binh Duong, and Dong Nai.

Ideal Deal Vietnam sources precision stamped parts from ISO 9001 and IATF 16949-certified facilities equipped with progressive die presses from 20 to 400 tons, transfer die presses for complex multi-stage parts, and fine blanking presses for high precision profiles requiring tight tolerances and smooth edges.

Material capabilities include:
- **Cold rolled steel** (SPCC, SPCD): Brackets, clips, housings, terminals
- **Stainless steel** (SUS304, SUS316L): Food equipment, medical, marine components  
- **Aluminum** (1050, 1060, 5052, 6061): Lightweight automotive and electronics parts
- **Copper / brass** (C1100, C2680): Electrical contacts, terminals, connectors
- **High strength steel** (HSS, AHSS): Automotive structural and safety components

Post stamping services available in house: deburring (tumbling, vibratory), zinc electroplating, nickel plating, powder coating, passivation (stainless), heat treatment, spot welding, and riveting. Full PPAP Level 3 documentation available for automotive supply chain qualification.`,
    heroImage: '/Precision Components/Precision Metal Stamped Parts.jpg',
    specs: [
      { label: 'Process', value: 'Progressive Die / Compound Die / Fine Blanking' },
      { label: 'Press Capacity', value: '20–400 tons' },
      { label: 'Materials', value: 'Steel, SUS, Aluminum, Copper, Brass' },
      { label: 'Tolerance', value: '±0.05 mm (standard); ±0.02 mm (fine blanking)' },
      { label: 'Thickness Range', value: '0.3–6.0 mm' },
      { label: 'Surface Finish', value: 'Zinc Plate / Nickel / Powder Coat / Passivation' },
      { label: 'MOQ', value: '5,000 pcs per part number (tooling amortized)' },
      { label: 'Lead Time (Tooling)', value: '25–35 days' },
      { label: 'Quality Standard', value: 'ISO 9001 / IATF 16949' },
    ],
    certifications: ['ISO 9001:2015', 'IATF 16949 (select facilities)', 'RoHS Compliant', 'REACH Compliant'],
    exportMarkets: ['Japan', 'South Korea', 'Germany', 'USA', 'Taiwan', 'Australia', 'Thailand'],
    moq: '5,000 pcs per part (post tooling)',
    containerCapacity: 'Per order volume',
    packagingOptions: ['Bulk tray pack', 'VCI poly bag (anti corrosion)', 'Reel/tape for auto insertion', 'Custom tote box', 'Export pallet'],
    faqs: [
      { question: 'Do you provide tooling/die fabrication for new parts?', answer: 'Yes. We provide progressive die and compound die design and fabrication for new part qualification. Tooling lead time is typically 25–35 days. Tooling costs are amortized over production volumes or charged as a one time tooling fee depending on order commitment.' },
      { question: 'Can you supply PPAP documentation for automotive qualification?', answer: 'Yes. For IATF 16949-certified facilities, we provide full PPAP Level 3 documentation including dimensional reports, material certifications, MSA studies, process capability (Cpk), and control plans. FAI (First Article Inspection) reports are standard for all new part numbers.' },
      { question: 'What is the typical tolerance achievable with progressive die stamping?', answer: 'Standard progressive die stamping achieves ±0.05–0.10 mm depending on material thickness and part complexity. Fine blanking achieves ±0.02–0.03 mm with smooth shear edges. All tolerances are verified by CMM at first article and by go/no-go gauges in production.' },
    ],
    relatedSlugs: ['cnc-machined parts', 'garment oem manufacturing'],
    seoTitle: 'Vietnam Precision Metal Stamping | Stamped Parts Supplier | ISO IATF 16949',
    seoDescription: 'Precision metal stamped parts from Vietnam. Progressive die, compound die, fine blanking. Steel, aluminum, copper. ISO 9001, IATF 16949. MOQ 5,000 pcs. Automotive & electronics OEM.',
    keywords: ['precision stamping Vietnam', 'metal stamped parts Vietnam', 'progressive die stamping Vietnam', 'automotive stamping parts Vietnam', 'metal stamping manufacturer Vietnam'],
    hsCode: '7326.90.99',
  },
];

// ─── Wooden Furniture Products ────────────────────────────────────────────────
const furnitureProducts: Product[] = [
  {
    slug: 'wooden-furniture-acacia',
    name: 'Acacia Outdoor & Garden Furniture',
    category: 'Wooden Furniture',
    categorySlug: 'wooden-furniture',
    tagline: 'Sustainably Sourced Acacia Garden Furniture — B2B OEM Manufacturer',
    description: "Vietnam is the world's 5th largest furniture exporter. Our acacia outdoor furniture — dining sets, loungers, benches — is crafted in FSC-certified facilities, sanded to 220-grit finish, and tested for UV and moisture resistance. Ideal for garden retailers, hospitality, and furniture importers.",
    longDescription: `Vietnam's furniture export industry generates over USD 15 billion annually, with outdoor and garden furniture being one of the fastest growing segments driven by demand from Europe, North America, and the Middle East hospitality sector.

Acacia wood (Acacia mangium and Acacia auriculiformis) has emerged as the premier choice for outdoor furniture export due to its exceptional durability — natural oils in the wood provide inherent moisture and insect resistance — sustainable plantation-sourced supply chain, beautiful grain pattern, and competitive pricing versus traditional teak.

Our acacia garden furniture range includes dining tables and chairs, sun loungers, benches, storage boxes, and planters. Manufacturing processes include:
- **Timber preparation**: Kiln-dried to 8–12% moisture content to prevent warping
- **Machining**: CNC routing, mortise-and-tenon joints, precision sanding to 180/220 grit
- **Finishing**: Teak oil, Danish oil, or water-based lacquer (color options available)
- **Hardware**: Marine-grade stainless steel (316) fittings throughout
- **Testing**: EN 581 outdoor furniture stability tests, UV weathering 500 hours minimum

FSC chain-of-custody certification ensures all timber is sourced from responsibly managed forests, meeting the requirements of UK Timber Regulations, EU Timber Regulations, and equivalent international standards.

OEM and ODM manufacturing available. Buyers can supply their own designs, or we can adapt our standard range to specific color, finish, or dimension requirements.`,
    heroImage: '/furneture/Acacia Outdoor & Garden Furniture.jpg',
    specs: [
      { label: 'Material', value: 'FSC Acacia / Teak / Mango Wood' },
      { label: 'Moisture Content', value: '8–12% (kiln dried)' },
      { label: 'Surface Finish', value: 'Teak oil / Danish oil / Lacquer' },
      { label: 'Hardware', value: 'SS316 marine-grade stainless' },
      { label: 'Testing', value: 'EN 581 (outdoor stability)' },
      { label: 'Sand Grade', value: 'Final 220 grit' },
      { label: 'Lead Time (samples)', value: '21–30 days' },
      { label: 'Lead Time (bulk)', value: '60–90 days' },
      { label: 'MOQ', value: '20 sets per design' },
      { label: 'HS Code', value: '9401.61.00' },
    ],
    certifications: ['FSC Chain-of-Custody', 'EUTR Compliant', 'UKTR Compliant', 'ISO 9001', 'BSCI Audited', 'Lacey Act Compliant (USA)'],
    exportMarkets: ['UK', 'Germany', 'Netherlands', 'USA', 'France', 'Australia', 'UAE', 'Canada'],
    moq: '20 sets per design',
    containerCapacity: '20ft: 60–80 sets (dining 4-seater) / 40ft: 130–160 sets',
    packagingOptions: ['Disassembled flat-pack with foam corners', 'Carton with assembly hardware bag', 'Custom retail box', 'KD (knock-down) with instructions'],
    faqs: [
      { question: 'Are your acacia furniture factories FSC certified?', answer: "Yes, our primary manufacturing partners hold FSC Chain-of-Custody (CoC) certification, enabling us to supply FSC-certified product with CoC documentation. This is required for major retailers in the UK, Germany, and Netherlands." },
      { question: 'Do you offer custom colour stain matching?', answer: "Yes, we offer custom RAL or NCS colour matching for painted furniture, and can match specific oil finishes using oil samples provided by the buyer. A minimum of 3 sample sets is recommended before bulk production approval." },
      { question: 'What testing do you perform for outdoor durability?', answer: "All outdoor furniture undergoes EN 581 structural and stability testing. We also conduct Xenon arc UV weathering tests (minimum 500 hours exposure), and saltspray testing for metal hardware. Test reports are provided upon request." },
    ],
    relatedSlugs: ['cnc-machined-parts', 'eco-packaging-kraft'],
    seoTitle: 'Acacia Garden Furniture Vietnam OEM | FSC Certified Wood Exporter',
    seoDescription: 'Acacia outdoor & garden furniture from Vietnam. FSC certified, EN 581 tested. OEM/ODM available. MOQ 20 sets. Export to UK, Germany, USA, Australia.',
    keywords: ['acacia furniture Vietnam export', 'garden furniture OEM Vietnam', 'outdoor furniture manufacturer Vietnam', 'FSC furniture Vietnam', 'wooden furniture supplier'],
    hsCode: '9401.61.00',
  },
  {
    slug: 'solid-teak-indoor-furniture',
    name: 'Solid Teak Indoor Furniture (Dining & Bedroom)',
    category: 'Wooden Furniture',
    categorySlug: 'wooden-furniture',
    tagline: 'Heirloom-Quality Solid Teak Indoor Furniture — OEM from Vietnam',
    description: 'Premium solid teak wood indoor furniture — dining tables, chairs, sideboards, and bedroom sets. Plantation-grown Myanmar/Indonesian teak processed in Vietnam. A-grade clean teak, mortise-and-tenon joinery, hand-sanded to 240 grit. FSC certified. Ideal for furniture importers, interior design brands, and luxury hospitality.',
    longDescription: `Teak (Tectona grandis) remains the gold standard for premium furniture globally — prized for its natural oil content (which provides inherent water and pest resistance), exceptional durability (100+ year lifespan), beautiful golden-brown grain, and relatively stable dimensions with humidity change.

Vietnam has emerged as a leading hub for teak furniture manufacturing, combining access to legally sourced plantation teak from Myanmar, Indonesia, and Brazil with highly skilled woodworking artisans and competitive labor costs compared to direct-origin countries. Processing facilities in Binh Duong, Ho Chi Minh City, and Dong Nai produce teak furniture for major European, American, and Middle Eastern furniture brands.

**Product Range:**
- **Dining Room**: Dining tables (4-seater to 12-seater extensions), dining chairs, benches, sideboards
- **Bedroom**: Platform beds, bedside tables, wardrobes, dressing tables, storage ottomans
- **Living Room**: Coffee tables, side tables, console tables, TV cabinets, book shelves
- **Hospitality**: Restaurant tables and chairs, hotel room furniture, lobby pieces

**Manufacturing Standards:**
- Kiln-dried to 8–10% EMC before machining
- Mortise-and-tenon and dowel joinery — no staples, no nails
- Hand-sanded: 120 → 180 → 220 → 240 grit progression
- Finishing: Natural teak oil, Danish oil, matte lacquer, or custom stain
- Hardware: Full-extension drawer runners, soft-close hinges (Blum or equivalent)

FSC Chain-of-Custody certification available. EUTR and UKTR compliant supply chain documentation included.`,
    heroImage: '/furneture/Solid Teak Indoor Furniture (Dining & Bedroom).jpg',
    specs: [
      { label: 'Material', value: 'Plantation Teak (A-grade clear)' },
      { label: 'Moisture Content', value: '8–10% EMC (kiln dried)' },
      { label: 'Joinery', value: 'Mortise-and-tenon / dowel' },
      { label: 'Surface', value: 'Hand-sanded 240 grit finish' },
      { label: 'Finish Options', value: 'Natural oil / Danish oil / Lacquer / Custom stain' },
      { label: 'Hardware', value: 'Soft-close Blum or equivalent' },
      { label: 'Lead Time (samples)', value: '30–45 days' },
      { label: 'Lead Time (bulk)', value: '60–90 days' },
      { label: 'MOQ', value: '10 pieces per SKU' },
      { label: 'HS Code', value: '9403.60.90' },
    ],
    certifications: ['FSC Chain-of-Custody', 'EUTR Compliant', 'UKTR Compliant', 'ISO 9001', 'BSCI Audited', 'Lacey Act Compliant (USA)'],
    exportMarkets: ['UK', 'Germany', 'France', 'USA', 'Netherlands', 'UAE', 'Australia', 'Canada'],
    moq: '10 pieces per SKU',
    containerCapacity: '20ft: 30–50 pieces (item dependent) / 40ft: 60–100 pieces',
    packagingOptions: ['PE foam + corrugated carton', 'Disassembled flat-pack (KD)', 'Custom branded packaging', 'White glove assembly kit'],
    faqs: [
      { question: 'What is the lead time for a custom furniture design?', answer: 'For new custom designs: 2–4 weeks for sample development drawings, 4–6 weeks for sample production, 2–3 rounds of revision, then bulk production 60–90 days. Total from design approval to delivery: approximately 5–6 months for the first order.' },
      { question: 'Can you supply FSC certified teak furniture for UK retailers?', answer: 'Yes, our primary teak furniture manufacturing partners hold FSC Chain of Custody certification. We can supply FSC project certificates for each order, meeting the requirements of UK retailers and the UK Timber Regulations (UKTR).' },
      { question: 'Do you offer a complete bedroom set program?', answer: 'Yes, we offer coordinated bedroom sets (bed frame, 2× bedside tables, chest of 5 drawers, wardrobe) in matching teak finish. Custom dimensions for non-standard mattress sizes (European, US, Middle East) are available.' },
    ],
    relatedSlugs: ['wooden-furniture-acacia', 'cnc-machined-parts'],
    seoTitle: 'Solid Teak Indoor Furniture Vietnam OEM | Dining Bedroom Sets Exporter',
    seoDescription: 'Premium solid teak indoor furniture from Vietnam. FSC certified, EUTR compliant. Dining sets, bedroom furniture, custom OEM. MOQ 10 pieces. Export to UK, EU, UAE.',
    keywords: ['solid teak furniture Vietnam', 'teak indoor furniture export', 'teak dining furniture OEM Vietnam', 'Vietnamese teak furniture manufacturer', 'bedroom furniture Vietnam supplier'],
    hsCode: '9403.60.90',
  },
  {
    slug: 'bamboo-furniture-export',
    name: 'Bamboo Furniture (Export Grade)',
    category: 'Wooden Furniture',
    categorySlug: 'wooden-furniture',
    tagline: 'Sustainable Bamboo Furniture Indoor, Outdoor & Garden Collections',
    description: 'Export-grade bamboo furniture from Vietnam dining sets, shelving, garden furniture, and storage solutions. Carbonized or natural bamboo, mortise and tenon joinery, and lacquer finish. FSC-certified bamboo, CARB P2 compliant. Ideal for eco-conscious retail and hospitality buyers.',
    longDescription: `Vietnam is among the world's largest exporters of bamboo furniture, with industrial scale bamboo processing concentrated in provinces including Thanh Hoa, Nghe An, and Quang Binh — regions with abundant Moso and Dendrocalamus bamboo plantations.

Bamboo furniture exports from Vietnam have grown steadily due to increasing global demand for sustainable home furnishings, with European and North American markets particularly receptive to FSC-certified bamboo as an alternative to hardwood and tropical timber.

Ideal Deal Vietnam partners with export-licensed bamboo furniture factories offering:

**Bamboo processing methods:**
- **Natural bamboo**: Preserved at original color (light cream), kiln dried to 8–12% moisture content
- **Carbonized bamboo**: Heat-treated to achieve deep brown coloration, enhanced hardness and insect resistance
- **Laminated bamboo board**: High-density engineered bamboo panels for flat pack and flatboard furniture

**Product categories available:**
- Indoor: Dining chairs, dining tables, bar stools, bookshelves, bedside tables, shoe racks, storage cabinets
- Outdoor/Garden: Garden chairs, loungers, patio sets, plant stands, pergola components
- Decorative: Bamboo trays, lamp bases, photo frames, storage baskets with bamboo frames

All bamboo is kiln-dried, treated with anti-mold and anti-insect preservatives, and finished with UV-resistant lacquer (matte, satin, or gloss). CARB Phase 2 formaldehyde emission compliance is standard for all laminated bamboo products.`,
    heroImage: '/furneture/Bamboo Furniture (Export Grade).jpg',
    specs: [
      { label: 'Material', value: 'Moso Bamboo (carbonized / natural / laminated)' },
      { label: 'Moisture Content', value: '8–12% (kiln-dried)' },
      { label: 'Surface Finish', value: 'UV Lacquer (matte/satin/gloss) / Natural Oil' },
      { label: 'Joinery', value: 'Mortise-and-tenon / Dowel / Screws (concealed)' },
      { label: 'Formaldehyde', value: 'CARB Phase 2 Compliant (≤0.05 ppm)' },
      { label: 'MOQ', value: '50 sets (container mix available)' },
      { label: 'Lead Time', value: '45–60 days' },
      { label: 'Weight Capacity', value: 'Per item specification (chairs: 120 kg typical)' },
      { label: 'Certifications', value: 'FSC, CARB P2, EUTR Compliant' },
    ],
    certifications: ['FSC Certified Bamboo', 'CARB Phase 2 Compliant', 'EUTR Compliant', 'ISO 9001'],
    exportMarkets: ['USA', 'Germany', 'UK', 'France', 'Netherlands', 'Australia', 'Japan', 'UAE'],
    moq: '50 sets or 1 x 20ft container mix',
    containerCapacity: '20ft: 200–400 chairs / 80–120 dining sets (flat-pack)',
    packagingOptions: ['Flat-pack with assembly hardware', 'Individual carton per piece', 'Protective foam corners', 'Moisture-barrier wrapping', 'Custom retail packaging'],
    faqs: [
      { question: 'Is your bamboo FSC certified?', answer: 'Yes. We source from FSC-certified bamboo plantations and our manufacturing partners hold current FSC Chain of Custody (CoC) certificates. FSC documentation can be provided for each shipment for EU Timber Regulation (EUTR) and US Lacey Act compliance.' },
      { question: 'What is the difference between carbonized and natural bamboo furniture?', answer: 'Natural bamboo retains its pale cream color and is lighter in weight, while carbonized bamboo undergoes heat treatment that turns it deep brown, increases surface hardness by approximately 25%, and enhances resistance to insects and mold. Both are equally durable when properly finished.' },
      { question: 'Do you offer flat-pack furniture for retail?', answer: 'Yes. Most of our bamboo furniture range is available in flat-pack format for retail distribution, with pre-drilled holes, concealed hardware, and illustrated assembly instructions included. Flat-pack significantly reduces shipping volume and cost.' },
    ],
    relatedSlugs: ['teak-outdoor-furniture', 'eco-packaging-kraft'],
    seoTitle: 'Vietnam Bamboo Furniture Exporter | FSC Certified Bamboo Furniture | CARB P2',
    seoDescription: 'Export-grade bamboo furniture from Vietnam. FSC certified, CARB Phase 2 compliant. Indoor, outdoor, garden collections. MOQ 50 sets. EU, USA, AU markets.',
    keywords: ['bamboo furniture Vietnam', 'FSC bamboo furniture Vietnam', 'bamboo furniture exporter', 'sustainable furniture Vietnam', 'carbonized bamboo furniture'],
    hsCode: '9403.60.90',
  },
];

// ─── Eco Packaging Products ───────────────────────────────────────────────────
const ecoPackagingProducts: Product[] = [
  {
    slug: 'eco-packaging-kraft',
    name: 'Kraft Paper Eco Packaging Solutions',
    category: 'Eco Packaging',
    categorySlug: 'eco-packaging',
    tagline: 'Biodegradable Kraft & Recycled Packaging — B2B Manufacturer Vietnam',
    description: "Vietnam-manufactured biodegradable and recycled paper packaging — kraft paper bags, corrugated boxes, honeycomb wrap, and compostable food containers. Ideal for FMCG brands, e-commerce operators, and foodservice chains transitioning to sustainable packaging.",
    longDescription: `The global shift toward sustainable packaging presents a significant sourcing opportunity in Vietnam, where a rapidly growing paper and packaging manufacturing sector offers competitive pricing on kraft paper bags, corrugated cartons, honeycomb protective packaging, and compostable food containers.

Vietnam's Binh Duong, Ho Chi Minh City, and Long An provinces host modern paper mills and converting facilities using a mix of virgin kraft pulp (FSC-certified where required) and recycled OCC (Old Corrugated Containers) feedstock. Production capabilities span:

**Kraft Paper Bags**: Multi-ply SOS (Self-Opening Style) paper bags for food, grocery, retail. Available in 1-ply to 5-ply construction, with or without PE liner for moisture protection. Printing: 1–6 color flexo or digital.

**Corrugated Boxes**: Single wall (B/E flute) and double wall (BC flute) RSC, FOL, and custom die-cut styles. ECT ratings from 23 ECT to 44 ECT. Offset litho-laminated for high quality print finishes.

**Compostable Food Containers**: PLA-coated kraft paper bowls, plates, and cups conforming to EN 13432 industrial composting standard. Alternatives to plastic for foodservice and takeaway applications.

**Honeycomb Wrap**: Paper honeycomb protective void fill for fragile goods — a lightweight, 100% recyclable alternative to bubble wrap.

All paper packaging manufactured from FSC-certified or recycled content can be supplied with FSC CoC, ISPM 15, and custom eco-certifications upon buyer request.`,
    heroImage: '/packiging/Kraft Paper Eco Packaging Solutions.jpg',
    specs: [
      { label: 'Products', value: 'Kraft bags / Corrugated boxes / Compostable containers' },
      { label: 'Material', value: 'Virgin Kraft / Recycled OCC / PLA-coated kraft' },
      { label: 'GSM Range', value: '80–350 GSM' },
      { label: 'Printing', value: 'Flexo (1–6 color) / Offset litho-laminate' },
      { label: 'Certification', value: 'FSC CoC / EN 13432 (compostable) / SGS tested' },
      { label: 'MOQ', value: '5,000 units (standard) / 10,000 (custom print)' },
      { label: 'Lead Time', value: '21–35 days (bulk production)' },
      { label: 'HS Code', value: '4819.10.00' },
    ],
    certifications: ['FSC Chain of Custody', 'EN 13432 (compostable)', 'ISPM 15', 'ISO 9001', 'SGS food safety tested'],
    exportMarkets: ['Australia', 'Germany', 'UK', 'USA', 'Singapore', 'UAE', 'Japan', 'South Korea'],
    moq: '5,000 units',
    containerCapacity: 'Per order (flat packed)',
    packagingOptions: ['Custom print Kraft SOS bags', 'Corrugated RSC boxes', 'Compostable PLA kraft containers', 'Honeycomb wrap rolls'],
    faqs: [
      { question: 'Are your compostable containers certified EN 13432?', answer: "Yes, our PLA-coated kraft bowls, plates, and cups are tested and certified to EN 13432 standard for industrial composting. Certificates are from TÜV Austria." },
      { question: 'Can you print custom designs on kraft paper bags?', answer: "Yes, flexographic printing up to 6 colors is available. For premium presentation, we offer offset litho-lamination for photo-quality print on corrugated boxes. Artwork files should be supplied as AI/EPS at 300 DPI." },
      { question: 'What is the lead time for custom printed packaging?', answer: "Custom printed packaging: 21–35 days for bulk production after artwork approval. Rush orders (15–20 days) are possible at a 15–20% surcharge for existing die sizes." },
    ],
    relatedSlugs: ['garment oem-manufacturing', 'wooden furniture acacia'],
    seoTitle: 'Eco Packaging Manufacturer Vietnam | Kraft Paper Bags | Compostable Supplier',
    seoDescription: 'Biodegradable and recycled packaging from Vietnam. Kraft paper bags, corrugated boxes, compostable food containers. FSC, EN 13432 certified. MOQ 5,000 units.',
    keywords: ['eco packaging Vietnam', 'kraft paper bags manufacturer', 'biodegradable packaging Vietnam', 'compostable packaging supplier', 'sustainable packaging Vietnam'],
    hsCode: '4819.10.00',
  },
  {
    slug: 'biodegradable-food-containers',
    name: 'Biodegradable Food Containers (Bagasse & PLA)',
    category: 'Eco Packaging',
    categorySlug: 'eco-packaging',
    tagline: 'Compostable Food Service Packaging Bagasse, PLA & Plant-Fiber Based',
    description: 'Vietnam-manufactured biodegradable food containers from sugarcane bagasse, PLA (polylactic acid), and molded plant fiber. Clamshells, bowls, plates, cups, and takeaway boxes. EN 13432 compostable certified. Ideal for food service, QSR chains, catering, and retail eco packaging.',
    longDescription: `Vietnam has rapidly emerged as a leading manufacturer of compostable and biodegradable food service packaging, leveraging abundant sugarcane bagasse (a byproduct of sugar production) and proximity to PLA resin suppliers in the region.

Ideal Deal Vietnam supplies EN 13432 and OK Compost certified biodegradable food containers to food service operators, grocery retail chains, airline catering companies, and eco-conscious importers across Europe, North America, Australia, and the Middle East.

**Product categories available:**

**Bagasse (Sugarcane Fiber) Containers:**
- Clamshell takeaway boxes (500 ml, 750 ml, 1,000 ml)
- Round and rectangular bowls with lids (350–1,200 ml)
- Divided plates (1, 2, 3 compartments)
- Plates (6", 7", 9", 10")
- Sugarcane cups (cold drinks, hot drinks versions)

**PLA (Polylactic Acid) Products:**
- Cold cups (8 oz, 12 oz, 16 oz, 22 oz) — crystal clear, compostable
- Domed lids, flat lids for cups
- PLA-coated paper cups (hot drinks)
- PLA cutlery sets (knife, fork, spoon, straw)

**PFAS-Free Commitment:** All products are free from per- and polyfluoroalkyl substances (PFAS / PFOA), complying with new EU food contact material regulations effective 2025.

All containers are grease-resistant, microwave-safe (bagasse), and suitable for hot and cold food applications. Custom printing available with water-based or soy-based inks.`,
    heroImage: '/packiging/Biodegradable Food Containers (Bagasse & PLA).jpg',
    specs: [
      { label: 'Material', value: 'Sugarcane Bagasse / PLA / Molded Fiber' },
      { label: 'Compostability', value: 'EN 13432 / OK Compost Certified' },
      { label: 'PFAS Status', value: 'PFAS-Free (PFOA/PFAS not detected)' },
      { label: 'Heat Resistance', value: 'Bagasse: up to 120°C; PLA cups: cold use only' },
      { label: 'Microwave Safe', value: 'Bagasse containers: Yes; PLA: No' },
      { label: 'MOQ', value: '10,000 pcs per SKU' },
      { label: 'Lead Time', value: '25–35 days' },
      { label: 'Custom Print', value: 'Available (water-based / soy inks, 4-color)' },
      { label: 'Food Contact', value: 'EU Regulation (EC) No 10/2011 Compliant' },
    ],
    certifications: ['EN 13432 Compostable', 'OK Compost (TÜV Austria)', 'BPI Certified (USA)', 'FDA Food Contact Safe', 'ISO 9001'],
    exportMarkets: ['Germany', 'UK', 'France', 'Australia', 'USA', 'Netherlands', 'UAE', 'South Korea'],
    moq: '10,000 pcs per SKU',
    containerCapacity: '20ft: 400,000–600,000 units (product-dependent)',
    packagingOptions: ['Bulk carton (sleeve-packed)', 'Individual poly sleeve (retail)', 'Custom branded sleeve', 'Private label packaging', 'Mixed-SKU container'],
    faqs: [
      { question: 'Are your bagasse containers certified compostable?', answer: 'Yes. All bagasse containers carry EN 13432 certification (European compostability standard) and OK Compost certification from TÜV Austria. For the US market, BPI-certified products are also available. These certifications confirm the products fully biodegrade in industrial composting facilities within 12 weeks.' },
      { question: 'Are these products PFAS-free?', answer: 'Yes. We proactively test all food contact products for PFAS/PFOA and can provide test reports from accredited third party laboratories. Our bagasse and molded fiber products achieve grease resistance through natural fiber compression without any chemical PFAS treatment.' },
      { question: 'Can you produce custom-printed containers with our branding?', answer: 'Yes. Custom printing is available using water-based or soy-based food-safe inks in up to 4 colors. Minimum order for custom print is 20,000 pcs per SKU. Artwork setup takes 5–7 days; pre-production sample approval before full production run.' },
    ],
    relatedSlugs: ['eco-packaging-kraft', 'canned-sardines-export'],
    seoTitle: 'Vietnam Biodegradable Food Containers Supplier | Bagasse PLA Compostable | EN 13432',
    seoDescription: 'Biodegradable food containers from Vietnam. Sugarcane bagasse, PLA, molded fiber. EN 13432, OK Compost certified. PFAS-free. MOQ 10,000 pcs. Export to EU, USA, AU.',
    keywords: ['biodegradable food containers Vietnam', 'bagasse containers supplier', 'compostable packaging Vietnam', 'PLA containers Vietnam', 'eco packaging manufacturer Vietnam'],
    hsCode: '3923.10.00',
  },
];

// ─── Raw Materials Products ───────────────────────────────────────────────────
const rawMaterialsProducts: Product[] = [
  {
    slug: 'portland-cement-export',
    name: 'Portland Cement (OPC 42.5 / 52.5)',
    category: 'Construction Materials',
    categorySlug: 'raw-materials',
    tagline: 'High Quality Portland Cement from Vietnam Bulk Export for Construction Projects',
    description: "Vietnam exports over 30 million tonnes of cement and clinker annually. Our OPC 42.5N/R and 52.5N clinker/cement is produced by major Vietnamese plants with consistent quality, conforming to ASTM C150, EN 197-1, and TCVN 2682 standards for export to Africa, the Middle East, and Southeast Asia.",
    longDescription: `Vietnam has become one of Asia's leading cement exporters, with domestic production capacity exceeding 100 million tonnes per year — significantly outstripping domestic demand. The surplus capacity has created a competitive export market, with Vietnamese manufacturers offering high quality OPC (Ordinary Portland Cement) and clinker at attractive FOB prices from ports including Hai Phong, Da Nang, Ho Chi Minh City, and the dedicated cement export terminals at Nghi Son, Cam Pha, and Thang Long.

**Product Grades Available:**
- **OPC 42.5N**: Standard general-purpose cement for structural concrete, mortar, and plasterwork
- **OPC 42.5R**: Rapid-hardening for applications requiring early strength development
- **OPC 52.5N**: High-strength cement for prestressed concrete, high-rise construction, and demanding infrastructure
- **Clinker**: Unground clinker in bulk for buyers with local grinding capacity

**Key Quality Parameters:**
- **Fineness**: 330–380 m²/kg (Blaine)
- **Setting time (initial)**: ≥ 60 minutes
- **Compressive strength (3-day)**: ≥ 20 MPa (42.5N)
- **Compressive strength (28-day)**: ≥ 42.5 MPa (42.5) / ≥ 52.5 MPa (52.5)
- **SO₃**: ≤ 3.5%
- **C₃A**: ≤ 10% (standard) / ≤ 5% (sulphate resistant)

Our export capability includes bulk vessel shipments (20,000–50,000 MT per vessel), bagged cement in 50 kg PP/PE woven bags or 1-tonne FIBCs, and full documentation including Q/C certificates, Bill of Lading, COO, and SGS pre-shipment inspection reports.`,
    heroImage: '/Raw Materials/Portland Cement (OPC 42.552.5).jpg',
    specs: [
      { label: 'Grade', value: 'OPC 42.5N / 42.5R / 52.5N' },
      { label: 'Standard', value: 'EN 197-1 / ASTM C150 / TCVN 2682' },
      { label: 'Blaine Fineness', value: '330–380 m²/kg' },
      { label: '28-day Strength', value: '≥ 42.5 MPa / ≥ 52.5 MPa' },
      { label: 'Initial Setting', value: '≥ 60 minutes' },
      { label: 'SO₃ Content', value: '≤ 3.5%' },
      { label: 'Packing', value: '50 kg bags / 1T FIBC / Bulk' },
      { label: 'MOQ', value: '1,000 MT' },
      { label: 'Shipment', value: 'Bulk vessel / Container' },
      { label: 'HS Code', value: '2523.29.00' },
    ],
    certifications: ['EN 197-1 Conformity', 'ASTM C150', 'SGS Pre-Shipment Inspection', 'ISO 9001', 'COO (Vietnam)'],
    exportMarkets: ['Bangladesh', 'Philippines', 'Ghana', 'Nigeria', 'Mozambique', 'Cambodia', 'Myanmar', 'Sri Lanka'],
    moq: '1,000 MT',
    containerCapacity: '24 MT per 20ft (bagged) / Bulk vessel 20,000–50,000 MT',
    packagingOptions: ['50 kg PP/PE woven bag', '25 kg paper bag', '1 MT FIBC jumbo bag', 'Bulk (vessel)'],
    faqs: [
      { question: 'Do you supply clinker as well as finished cement?', answer: 'Yes. We supply clinker in bulk from 5,000 MT+ for buyers with local grinding mills. Clinker specifications include C₃S 58–65%, C₂S 15–20%, C₃A 7–10%, and C₄AF 10–12%.' },
      { question: 'What ports do you ship cement from in Vietnam?', answer: 'Primary export ports include Hai Phong, Da Nang, Ho Chi Minh City, Cam Pha, and Nghi Son. Port selection depends on buyer destination, vessel size, and supply source. All ports have mechanical ship-loading facilities.' },
      { question: 'Can you arrange SGS inspection before shipment?', answer: 'Yes, all export lots can be inspected and certified by SGS, Intertek, or Bureau Veritas before loading. Inspection costs are borne by the buyer unless agreed otherwise in the contract.' },
    ],
    relatedSlugs: ['cnc-machined-parts', 'eco-packaging-kraft'],
    seoTitle: 'Vietnam Portland Cement Export | OPC 42.5 52.5 | Bulk Supplier Africa Asia',
    seoDescription: 'Portland cement OPC 42.5 and 52.5 from Vietnam. EN 197-1, ASTM C150 standard. Bagged or bulk. MOQ 1,000 MT. Export to Africa, Bangladesh, Philippines.',
    keywords: ['Portland cement Vietnam export', 'OPC 42.5 cement supplier', 'cement exporter Vietnam', 'clinker export Vietnam', 'bulk cement Vietnam'],
    hsCode: '2523.29.00',
  },
  {
    slug: 'silica-sand-export',
    name: 'Silica Sand (Industrial & Glass Grade)',
    category: 'Construction Materials',
    categorySlug: 'raw-materials',
    tagline: 'High-Purity Vietnam Silica Sand — Glass Manufacturing, Foundry & Construction',
    description: "High-purity silica sand from Vietnam's major deposits in Binh Thuan and Quang Tri provinces. SiO\u2082 content 99.0\u201399.7%. Washed, dried, and sized for glass manufacturing, foundry casting, water filtration, and construction applications. Available in bulk vessel or 25/50 kg bags.",
    longDescription: `Vietnam holds some of Southeast Asia's most significant silica sand reserves, with major deposits concentrated along the central coastal provinces of Binh Thuan, Quang Tri, Quang Binh, and Khanh Hoa. These deposits yield exceptionally pure quartz sand with SiO₂ content exceeding 99.0%, positioning Vietnam as an important regional supplier for glass manufacturing, foundry, and industrial applications.

Ideal Deal Vietnam supplies industrial and glass-grade silica sand processed through washing, scrubbing, magnetic separation, and classification to remove iron oxide (Fe₂O₃), titanium dioxide (TiO₂), and other impurities that would affect downstream product quality.

**Grade specifications available:**

**Float Glass Grade (SiO₂ ≥99.5%):**
- Fe₂O₃: ≤0.020%
- Al₂O₃: ≤0.30%
- TiO₂: ≤0.020%
- Grain size: AFS 50–70 (0.18–0.35 mm)

**Container Glass Grade (SiO₂ ≥99.2%):**
- Fe₂O₃: ≤0.040%
- Al₂O₃: ≤0.40%
- Grain size: AFS 40–60 (0.25–0.50 mm)

**Foundry Sand Grade (SiO₂ ≥99.0%):**
- AFS grain fineness: 45–65
- Clay content: ≤0.3%
- Moisture: ≤0.3%

**Water Filtration Grade:**
- Effective size D10: 0.45–0.65 mm
- Uniformity coefficient: ≤1.5
- NSF/ANSI 61 compliant for potable water systems

**Construction Grade:** Concrete production, plastering, flooring compounds

Sampling and COA (Certificate of Analysis) from SGS, Bureau Veritas, or Intertek available for each shipment. Shipped in bulk (Handysize vessel) or 25 kg / 50 kg woven PP bags or 1,000 kg jumbo bags.`,
    heroImage: '/Raw Materials/Silica Sand (Industrial & Glass Grade.jpg',
    specs: [
      { label: 'SiO₂ Content', value: '99.0–99.7% (grade dependent)' },
      { label: 'Fe₂O₃', value: '≤0.020% (float glass) / ≤0.040% (container glass)' },
      { label: 'Grain Size', value: 'AFS 40–70 / Custom sizing available' },
      { label: 'Moisture', value: '≤0.3% (kiln-dried grades)' },
      { label: 'Bulk Density', value: '1.45–1.55 t/m³' },
      { label: 'MOQ', value: '500 MT (bulk) / 25 MT (bagged)' },
      { label: 'Loading Port', value: 'Qui Nhon / Da Nang / Ho Chi Minh City' },
      { label: 'Inspection', value: 'SGS / Bureau Veritas / Intertek' },
      { label: 'Packaging', value: 'Bulk / 25 kg / 50 kg bags / 1,000 kg jumbo bag' },
    ],
    certifications: ['SGS Tested', 'Bureau Veritas Certified', 'NSF/ANSI 61 (filtration grade)', 'ISO 9001'],
    exportMarkets: ['Japan', 'South Korea', 'Taiwan', 'Malaysia', 'Philippines', 'UAE', 'India', 'Australia'],
    moq: '500 MT (bulk vessel); 25 MT (bagged)',
    containerCapacity: '20ft container: ~25 MT bagged; Bulk vessel: 5,000–50,000 MT',
    packagingOptions: ['Bulk (vessel/barge)', '25 kg woven PP bag', '50 kg woven PP bag', '1,000 kg FIBC jumbo bag', 'Custom bag with printing'],
    faqs: [
      { question: 'What SiO₂ purity levels can you supply for flat glass manufacturing?', answer: 'For float glass and automotive glass manufacturing, we supply SiO₂ ≥99.5% with Fe₂O₃ ≤0.020% and TiO₂ ≤0.020%. These specifications meet the raw material requirements for most float glass tank operations. A detailed COA from SGS or Bureau Veritas accompanies each shipment.' },
      { question: 'Do you offer independent third party quality inspection?', answer: 'Yes. All export shipments include a Certificate of Analysis from SGS, Bureau Veritas, or Intertek covering chemical composition (XRF analysis), grain size distribution (sieve analysis), moisture content, bulk density, and clay content. Inspection at loading port is standard.' },
      { question: 'What are your typical lead times and loading ports?', answer: 'Standard lead time after order confirmation is 7–14 days for bagged cargo and 15–21 days for bulk vessel scheduling. Primary loading ports are Qui Nhon (Binh Dinh), Da Nang, and Ho Chi Minh City (Cat Lai). CIF, CFR, and FOB terms available.' },
    ],
    relatedSlugs: ['granite-tiles-polished', 'eco-packaging-kraft'],
    seoTitle: 'Vietnam Silica Sand Exporter | High-Purity SiO₂ Sand | Glass Foundry Grade',
    seoDescription: 'High-purity silica sand from Vietnam. SiO₂ 99.0–99.7%. Float glass, foundry, filtration grades. SGS/BV certified. MOQ 500 MT bulk or 25 MT bagged. CIF/FOB terms.',
    keywords: ['silica sand Vietnam', 'Vietnam silica sand exporter', 'glass grade silica sand', 'foundry sand Vietnam', 'industrial silica sand supplier'],
    hsCode: '2505.10.00',
  },
];

// ─── Home & Personal Care Products ───────────────────────────────────────────
const homePersonalCareProducts: Product[] = [
  {
    slug: 'liquid-hand-soap-bulk',
    name: 'Liquid Hand Soap (Private Label)',
    category: 'Home & Personal Care',
    categorySlug: 'home-personal-care',
    tagline: 'OEM Liquid Hand Soap — Bulk & Private Label for Global Retail',
    description: 'Vietnam-manufactured liquid hand soap in antibacterial, moisturizing, and natural/organic formulations. Available in 500 ml pump bottles, 1L refill pouches, and 5L/20L bulk drums. GMP, ASEAN Cosmetics Directive compliant. Ideal for hotels, hospitals, retail chains, and wholesalers.',
    longDescription: `The personal care manufacturing sector in Vietnam has experienced rapid growth, with Ho Chi Minh City and Binh Duong Province hosting modern GMP-certified facilities that supply both domestic and international markets with cosmetics, toiletries, and personal hygiene products.

Liquid hand soap represents one of the most accessible categories for private label buyers — short lead times, flexible MOQ, and a wide range of formulation options make it an attractive product for brand owners, wholesalers, and retail chains.

**Available Formulations:**
- **Antibacterial**: Triclosan-free formula with benzalkonium chloride or alcohol-based actives, meeting EU 1223/2009 biocide requirements
- **Moisturizing**: Glycerin and vitamin E enriched, pH balanced (5.5–6.5) for daily use
- **Natural/Organic**: Aloe vera, coconut oil, or tea tree oil formulations with COSMOS Organic compliance available
- **Hospital Grade**: High-active antibacterial for healthcare settings, EN 1040/1499 tested
- **Luxury/Spa**: Fragrance-enriched formulas with premium botanical extracts

**Packaging Options:** 250 ml, 500 ml, 1,000 ml pump or flip-top bottles (PET/HDPE), 5L and 20L HDPE jerrycans for HoReCa/institutional buyers, 200L drums for further processing.

All formulations are ASEAN Cosmetics Directive (ACD) compliant and can be registered for markets including Vietnam, ASEAN, UAE (CPNP), and GCC upon buyer request. Full MSDS and product dossier are provided.`,
    heroImage: '/Home & Personal Care/idealdeal-Liquid Hand Soap (Private Label).png',
    specs: [
      { label: 'pH', value: '5.5–7.0 (formulation dependent)' },
      { label: 'Viscosity', value: '3,000–8,000 cPs' },
      { label: 'Active Content', value: 'Variable by formulation' },
      { label: 'Preservative', value: 'Parabens-free (DMDM Hydantoin / Phenoxyethanol)' },
      { label: 'Fragrance', value: 'IFRA compliant (choice of 20+ options)' },
      { label: 'Packaging', value: '250ml / 500ml / 1L pump / 5L / 20L drum' },
      { label: 'Shelf Life', value: '24 months (sealed, 25°C)' },
      { label: 'MOQ', value: '1,000 units (private label)' },
      { label: 'HS Code', value: '3401.30.00' },
    ],
    certifications: ['GMP ISO 22716', 'ASEAN Cosmetics Directive', 'ISO 9001', 'Halal (select formulas)', 'COSMOS Organic (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Australia', 'Singapore', 'Malaysia', 'Germany', 'UK', 'Thailand'],
    moq: '1,000 units (private label) / 5 MT bulk',
    containerCapacity: '20 MT per 20ft (500 ml bottles)',
    packagingOptions: ['500 ml pump bottle', '1 L refill pouch', '5 L HDPE jerrycan', '20 L drum', 'Custom OEM bottle + label'],
    faqs: [
      { question: 'Do you offer private label hand soap with our branding?', answer: 'Yes, private label is our primary offering. We supply custom-labeled or blank bottles from 1,000 units MOQ. Our design team can assist with label artwork if required. Custom bottle molds are available from 50,000+ units MOQ.' },
      { question: 'Is your hand soap Halal certified for GCC markets?', answer: 'Yes, selected formulations hold Halal certification from accredited Islamic certification bodies. Halal certificates can be provided per shipment for Saudi Arabia, UAE, and other GCC markets.' },
      { question: 'Can you match a specific fragrance or formulation?', answer: 'Yes, we offer fragrance matching from supplied reference samples. Formulation matching (viscosity, color, actives level) is also available with a one-time R&D fee of USD 300–500 which is credited back on first production order.' },
    ],
    relatedSlugs: ['hygiene-disposable-wipes', 'baby-wipes'],
    seoTitle: 'Private Label Hand Soap Manufacturer Vietnam | OEM Liquid Soap Supplier',
    seoDescription: 'OEM private label liquid hand soap from Vietnam. GMP ISO 22716 certified. Antibacterial, moisturizing, organic formulas. MOQ 1,000 units. Export to GCC, EU, ASEAN.',
    keywords: ['private label hand soap Vietnam', 'liquid soap manufacturer Vietnam', 'OEM soap Vietnam', 'hand soap supplier GCC', 'personal care manufacturer Vietnam'],
    hsCode: '3401.30.00',
  },
  {
    slug: 'shampoo-conditioner-bulk',
    name: 'Shampoo & Conditioner (Bulk OEM/Private Label)',
    category: 'Home & Personal Care',
    categorySlug: 'home-personal-care',
    tagline: 'Vietnam OEM Hair Care — Shampoo, Conditioner & Treatment Bulk Manufacturing',
    description: 'OEM and private label shampoo and conditioner manufacturing from Vietnam. Hotel amenity, retail, and salon-grade formulations. Sulfate-free, paraben-free, and natural extract options. GMP-certified cosmetic factory. ISO 22716 compliant. MOQ 1,000 L per SKU.',
    longDescription: `Vietnam's cosmetic and personal care manufacturing sector has grown significantly, with GMP-certified factories in Ho Chi Minh City and Binh Duong supplying both domestic brands and international private label buyers across Southeast Asia, the Middle East, and Africa.

Ideal Deal Vietnam works with ISO 22716 (Cosmetics GMP) certified hair care manufacturing partners offering full-service OEM and private label production including:

**Formulation capabilities:**
- **Hotel & hospitality amenity range**: Low-cost, pleasant-scent formulations in 30 ml, 50 ml, 100 ml bottles for hotel chains
- **Retail consumer range**: Mid-premium shampoos with active ingredients (keratin, argan oil, biotin, collagen, ginger extract, coconut milk)
- **Sulfate-free (SLS/SLES-free)**: For sensitive scalp, color-treated hair, and clean beauty positioning
- **Natural and organic-leaning**: Plant-based surfactant systems with certified natural extract content
- **Salon-grade concentrate**: High-active conditioner and treatment masks (500 ml – 5 L tubs)

**Service offering:**
- Customer-supplied formula manufacturing (toll manufacturing)
- Formula development using our base formulations with custom actives and fragrance
- Full safety assessment and EU/ASEAN Cosmetics Regulation compliance support
- INCI labelling, safety data sheets, and product information files

**Fragrance**: Choose from standard library (30+ options) or custom fragrance blending. Allergen declaration per EU Cosmetics Regulation 1223/2009 provided.

Packaging: bottles (HDPE, PET, PP), pumps, flip caps, sachets, tubes. Custom label printing (digital or offset) and shrink-sleeve labelling available.`,
    heroImage: '/Home & Personal Care/idealdeal-Shampoo Conditioner Body Wash Label.png',
    specs: [
      { label: 'GMP Standard', value: 'ISO 22716 Cosmetics GMP' },
      { label: 'Formulation Type', value: 'Shampoo / Conditioner / Treatment Mask' },
      { label: 'Active Options', value: 'Keratin, Argan Oil, Biotin, Collagen, Ginger' },
      { label: 'Sulfate-Free Option', value: 'Available (SLS/SLES-free)' },
      { label: 'pH Range', value: '4.5–6.5 (hair care optimized)' },
      { label: 'MOQ', value: '1,000 L per SKU (bulk); 2,000 units (filled)' },
      { label: 'Lead Time', value: '21–35 days (standard); 45–60 days (custom formula)' },
      { label: 'Shelf Life', value: '24–36 months (preservative system dependent)' },
      { label: 'Compliance', value: 'EU Cosmetics Reg. 1223/2009 / ASEAN Cosmetics Directive' },
    ],
    certifications: ['ISO 22716 Cosmetics GMP', 'ISO 9001', 'Halal Certified (select formulas)', 'EU Cosmetics Regulation Compliant'],
    exportMarkets: ['UAE', 'Saudi Arabia', 'Australia', 'UK', 'Germany', 'Philippines', 'Nigeria', 'South Africa'],
    moq: '1,000 L bulk or 2,000 filled units per SKU',
    containerCapacity: '20ft: ~15,000–20,000 L bulk; 8,000–12,000 filled bottles (500 ml)',
    packagingOptions: ['IBC tote (1,000 L bulk)', '200 L drum', 'Filled bottles (30 ml – 1 L)', 'Sachet / travel pack', 'Private label custom packaging'],
    faqs: [
      { question: 'Can you manufacture sulfate-free shampoo with our proprietary formula?', answer: 'Yes. We offer toll manufacturing for customer-supplied formulas as well as formula adaptation using our existing SLS/SLES-free base systems. For proprietary formulas, we sign a non-disclosure agreement before any development work begins. Our GMP lab can evaluate your formula for scale-up compatibility.' },
      { question: 'Do you produce hotel amenity shampoos and conditioners?', answer: 'Yes. Hotel amenity production is one of our main segments. We supply white-label and private-label 30 ml, 50 ml, and 100 ml bottles in standard or custom hotel designs. Minimum order is 5,000 units per SKU for hotel amenity sizes. Rapid turnaround of 15–21 days is available for repeat orders.' },
      { question: 'What compliance documentation do you provide?', answer: 'We provide full cosmetics compliance documentation including: Certificate of Analysis (COA), Safety Data Sheet (SDS), Cosmetic Product Safety Report (CPSR) framework, INCI ingredient list, Challenge test results (microbiological stability), and allergen declarations per EU Regulation 1223/2009. For Halal certification, we work with JAKIM or MUI-recognized certifying bodies.' },
    ],
    relatedSlugs: ['hand-sanitizer-gel', 'baby-powder-export'],
    seoTitle: 'Vietnam OEM Shampoo Conditioner Manufacturer | Private Label Hair Care | ISO 22716',
    seoDescription: 'OEM shampoo and conditioner manufacturing from Vietnam. Sulfate-free, natural extract, hotel amenity formulations. ISO 22716 GMP. MOQ 1,000 L. Export to UAE, EU, AU.',
    keywords: ['shampoo manufacturer Vietnam', 'OEM hair care Vietnam', 'private label shampoo Vietnam', 'conditioner bulk manufacturer', 'hotel amenity shampoo supplier'],
    hsCode: '3305.10.00',
  },
];

// ─── Hygiene & Disposable Products ───────────────────────────────────────────
const hygieneProducts: Product[] = [
  {
    slug: 'hygiene-disposable-wipes',
    name: 'Non-Woven Wet Wipes (Private Label)',
    category: 'Hygiene & Disposable',
    categorySlug: 'hygiene-disposable',
    tagline: 'OEM Wet Wipes — Hospital, Baby, Antibacterial & Beauty Grades',
    description: 'Vietnam-manufactured non-woven wet wipes in hospital, antibacterial, baby, and beauty categories. Spunlace non-woven base (viscose/polyester), gentle pH-balanced formulas, and ISO 13485/EN 455 compliance for medical wipes. Private label from 5,000 units.',
    longDescription: `Non-woven wet wipes represent one of the fastest growing hygiene product categories globally, with applications spanning baby care, adult hygiene, medical/clinical use, beauty/cosmetics, and household cleaning. Vietnam has developed a competitive wet wipes manufacturing sector supported by non-woven fabric mills in Binh Duong and Ho Chi Minh City.

Our manufacturing partners produce wet wipes across multiple categories and substrate types:

**Category Range:**
- **Baby wipes**: Unscented or lightly scented, 99.9% water-based formula, pH 5.5, ultra-soft 40 GSM spunlace fabric
- **Antibacterial wipes**: Benzalkonium chloride or alcohol (70% IPA/ethanol) actives for surface and hand disinfection
- **Medical/clinical wipes**: EN 14476 (virucidal), EN 1040 (bactericidal), EN 1275 (fungicidal) tested, hospital grade
- **Feminine hygiene wipes**: pH 4.5 intimate care formula, dermatologist-tested
- **Makeup remover wipes**: Micellar water formula, no-rinse, suitable for sensitive skin

**Substrate Options:**
- 30–60 GSM spunlace (viscose/PET blend) — soft and absorbent
- Drylaid non-woven — economic grade for surface wipes
- Biodegradable plant-based fabric (bamboo/lyocell) for eco-positioned products

**Pack Formats:** Individual sachet, 10-ct resealable pouch, 25-ct flow-wrap, 80-ct/100-ct flip-lid canister, 200-ct industrial roll.

All products comply with ASEAN Cosmetics Directive and EU Cosmetics Regulation 1223/2009 (for cosmetic wipes) or EU MDR (for medical wipes). Full product dossier, safety assessment, and CPSR available.`,
    heroImage: '/Hygiene & Disposable/Non-Woven Wet Wipes (Private Label).jpg',
    specs: [
      { label: 'Substrate', value: '30–60 GSM spunlace non-woven' },
      { label: 'Material', value: 'Viscose/PET / Bamboo / Plant-based' },
      { label: 'Moisture Loading', value: '250–350% of dry fabric weight' },
      { label: 'pH (baby/sensitive)', value: '5.0–6.0' },
      { label: 'Antibacterial Efficacy', value: 'EN 1040 / EN 14476 (medical grade)' },
      { label: 'Wipe Size', value: '15x20 cm / 20x20 cm / custom' },
      { label: 'Pack Format', value: 'Sachet / 25ct / 80ct canister / bulk roll' },
      { label: 'Shelf Life', value: '36 months (sealed)' },
      { label: 'HS Code', value: '3307.90.00' },
    ],
    certifications: ['ISO 22716 (GMP)', 'ISO 13485 (medical)', 'EN 14476 (virucidal)', 'EU Cosmetics 1223/2009', 'Halal', 'Dermatologist tested'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'UK', 'Australia', 'South Korea', 'Japan', 'Egypt'],
    moq: '5,000 units (private label)',
    containerCapacity: '20 MT per 20ft',
    packagingOptions: ['Individual foil sachet', '25-ct resealable pouch', '80-ct flip-lid canister', '200-ct industrial refill', 'Custom OEM packaging'],
    faqs: [
      { question: 'Are your antibacterial wipes effective against COVID-19 / enveloped viruses?', answer: 'Our hospital-grade antibacterial wipes (70% IPA or benzalkonium chloride) are tested to EN 14476 and demonstrate virucidal efficacy including against enveloped viruses. Test reports from accredited European labs are available.' },
      { question: 'Do you offer biodegradable/compostable wipes?', answer: 'Yes, bamboo-based and lyocell spunlace substrates with compostable sachets are available. These can be certified to EN 13432 (industrial compostable) and meet the EU Single-Use Plastics Directive requirements for wipes from 2027.' },
      { question: 'Can you replicate an existing wipe product for private label?', answer: 'Yes. Please provide your reference product and any specific requirements (fragrance, formula actives, substrate feel, moisture level). We will produce matching samples for approval before bulk production.' },
    ],
    relatedSlugs: ['baby wipes', 'liquid hand soap bulk'],
    seoTitle: 'Non-Woven Wet Wipes OEM Vietnam | Private Label Baby & Antibacterial Wipes',
    seoDescription: 'Private label wet wipes manufacturer Vietnam. Baby, antibacterial, medical, beauty grades. ISO 22716, EN 14476. MOQ 5,000 units. Export to Saudi Arabia, EU, Asia.',
    keywords: ['wet wipes manufacturer Vietnam', 'private label wipes supplier', 'OEM wet wipes Vietnam', 'antibacterial wipes Vietnam', 'baby wipes manufacturer'],
    hsCode: '3307.90.00',
  },
  {
    slug: 'disposable-face-masks-export',
    name: 'Disposable 3-Ply Face Masks (Medical & Non-Medical)',
    category: 'Hygiene & Disposable',
    categorySlug: 'hygiene disposable',
    tagline: 'Vietnam Made Disposable Face Masks — CE, FDA, ISO 13485 Certified',
    description: 'High volume disposable 3-ply face masks from certified Vietnamese manufacturers. Medical-grade surgical masks (EN 14683 Type IIR) and non-medical procedural masks available. CE marked, FDA-registered, ISO 13485 facilities. Available in white, colors, and custom print. MOQ 50,000 pcs.',
    longDescription: `Vietnam became one of the world's largest producers of disposable face masks during the COVID-19 pandemic, with dozens of ISO 13485-certified facilities established across the country. These factories continue to supply hospitals, governments, NGOs, pharmacies, and industrial customers globally.

Ideal Deal Vietnam sources from audited, CE-marked and FDA-registered facilities producing both Type I/II/IIR medical surgical masks and non-medical (ASTM F2100 Level 1/2) procedural and industrial masks.

**Medical Surgical Mask (EN 14683):**
- Type I: BFE ≥95%
- Type II: BFE ≥98%
- Type IIR (fluid resistant): BFE ≥98%, splash resistance ≥120 mmHg
- CE marked, ISO 13485:2016 certified factory
- 3-layer: inner non-woven (soft), meltblown filter, outer non-woven (spunbond)
- Earloop or head-tie styles; nose wire aluminum strip included

**Non-Medical / Industrial Masks:**
- ASTM F2100 Level 1: BFE ≥95%, for general public and non-clinical use
- Daily use / fashion masks: Printed, colored, with branding

**Packaging options:**
- 50 pcs per box, 2,000 pcs per carton (standard)
- Individually wrapped (medical grade)
- Private label box printing available (minimum 100,000 pcs)

Custom color, logo printing on mask body available for promotional and corporate orders. Lead time: stock colors 7–10 days; custom colors 15–21 days.`,
    heroImage: '/Hygiene & Disposable/Disposable 3-Ply Face Masks (Medical & Non-Medical.jpg',
    specs: [
      { label: 'Type', value: 'Type IIR Surgical (EN 14683) / Non-Medical' },
      { label: 'BFE (Bacterial Filtration)', value: '≥98% (Type IIR) / ≥95% (Type I)' },
      { label: 'Fluid Resistance', value: '≥120 mmHg (Type IIR)' },
      { label: 'Layers', value: '3-ply (Spunbond + Meltblown + Spunbond)' },
      { label: 'Certification', value: 'CE (EU MDR), FDA 510(k) / Registered' },
      { label: 'QMS', value: 'ISO 13485:2016' },
      { label: 'MOQ', value: '50,000 pcs (stock colors); 100,000 pcs (custom print)' },
      { label: 'Packing', value: '50 pcs/box, 2,000 pcs/carton (standard)' },
      { label: 'Lead Time', value: '7–10 days (stock); 15–21 days (custom)' },
    ],
    certifications: ['CE Marked (EU MDR)', 'FDA Registered', 'ISO 13485:2016', 'EN 14683 Type IIR', 'ASTM F2100 Level 1/2'],
    exportMarkets: ['USA', 'Germany', 'UK', 'France', 'Australia', 'UAE', 'Canada', 'Netherlands'],
    moq: '50,000 pcs per order',
    containerCapacity: '20ft container: ~2,000,000 pcs (standard 3-ply)',
    packagingOptions: ['50 pcs per box, 2,000 pcs per carton', 'Individually wrapped per mask', 'Custom private label box', 'Bulk polybag (industrial)', 'Dispenser box (100 pcs)'],
    faqs: [
      { question: 'Are your surgical masks CE marked under EU Medical Device Regulation?', answer: 'Yes. Our surgical mask supply comes from factories holding current CE certificates under EU MDR (Regulation 2017/745) for Class I medical devices. We provide CE Declaration of Conformity, EN 14683 test reports from accredited EU-notified body labs, and ISO 13485 factory certificates for each supply chain.' },
      { question: 'Can you supply custom-printed masks with our company logo?', answer: 'Yes. Custom printing on the outer layer of the mask is available using non-toxic, skin-safe inks. Minimum order for custom print is 100,000 pieces. One-color, two-color, and full-color print options are available. Pre-production sample provided within 7 days of artwork approval.' },
      { question: 'What is your production capacity and lead time for large orders?', answer: 'Our combined partner factory capacity exceeds 5 million masks per day. For standard orders up to 2 million pieces, lead time is 7–10 days from payment. For custom-print or unique specification orders of 1–10 million pieces, lead time is 15–21 days. Priority allocation is available for institutional buyers with standing purchase orders.' },
    ],
    relatedSlugs: ['hand-sanitizer-gel', 'shampoo conditioner-bulk'],
    seoTitle: 'Vietnam Disposable Face Masks Supplier | CE FDA EN 14683 Type IIR Surgical Masks',
    seoDescription: 'Disposable 3-ply face masks from Vietnam. Type IIR surgical, non-medical grades. CE marked, FDA registered, ISO 13485. MOQ 50,000 pcs. Custom print available. Export worldwide.',
    keywords: ['face mask manufacturer Vietnam', 'surgical mask supplier Vietnam', 'disposable mask Vietnam', 'CE FDA face mask Vietnam', '3-ply mask exporter Vietnam'],
    hsCode: '6307.90.10',
  },
];

// ─── Baby Products ────────────────────────────────────────────────────────────
const babyProducts: Product[] = [
  {
    slug: 'baby-wipes',
    name: 'Baby Wipes (Ultra Soft, Fragrance Free)',
    category: 'Baby Products',
    categorySlug: 'baby products',
    tagline: 'Gentle, Safe Baby Wipes  Private Label Manufacturer Vietnam',
    description: 'Ultra soft, fragrance free baby wipes made with 99.9% water based formula. 40 GSM spunlace substrate, pH 5.5, dermatologist-tested, free from parabens, alcohol, and harsh preservatives. Private label for brand owners from 10,000 packs. ASEAN and EU compliant.',
    longDescription: `Baby wipes are a high trust product category where quality, safety, and ingredient transparency directly influence brand loyalty. Our baby wipe manufacturing partners in Vietnam operate under GMP ISO 22716 certification, with dedicated hygienic production lines and batch testing for every lot.

Our baby wipe formulation is built on a minimal, ultra gentle philosophy:
- **Base formula**: 99.9% water (purified, demineralized)
- **Preservative system**: DMDM Hydantoin free  uses sustainable preservation (Sodium Benzoate + Potassium Sorbate at 0.1% each)
- **Humectant**: Glycerin 0.5%  moisture locking without tackiness
- **Skin conditioner**: Aloe Vera extract (Aloe barbadensis leaf juice)
- **Fragrance**: Fragrance-free (standard) / Natural chamomile (optional)

**Substrate**: 40 GSM spunlace viscose/PET (80/20)  the same fabric quality used by global premium baby brands. Ultra-soft texture, high wet strength, and excellent absorbency.

**Safety testing**: Dermatologist tested, patch tested for 200+ hours, non-irritating. Free from: parabens, phenoxyethanol, alcohol, chlorine, dyes.

Available formats: 80-wipe flip-top canister (our most popular retail format), 10-ct travel sachet, 56-ct value pack, 480-ct jumbo institutional refill.

OEM/private label services include formula development, bottle/canister design, label printing, and export packing. ASEAN, EU, and Saudi Arabia market registration assistance is available.`,
    heroImage: '/Baby Products/idealdeal-Baby Wipes (Ultra Soft, Fragrance-Free).jpg',
    specs: [
      { label: 'Formula', value: '99.9% water-based, fragrance-free' },
      { label: 'pH', value: '5.0–6.0 (skin-safe)' },
      { label: 'Substrate', value: '40 GSM spunlace viscose/PET 80/20' },
      { label: 'Wipe Size', value: '15×20 cm or custom' },
      { label: 'Parabens', value: 'FREE' },
      { label: 'Alcohol', value: 'FREE' },
      { label: 'Dermatologist Tested', value: 'Yes — 200+ hours patch test' },
      { label: 'Pack Options', value: '10ct sachet / 56ct / 80ct canister / 480ct bulk' },
      { label: 'Shelf Life', value: '36 months' },
      { label: 'HS Code', value: '3307.90.00' },
    ],
    certifications: ['GMP ISO 22716', 'ASEAN Cosmetics Directive', 'EU Cosmetics 1223/2009', 'Dermatologist Tested', 'Halal (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Malaysia', 'Australia', 'Germany', 'UK', 'Egypt', 'Philippines'],
    moq: '10,000 packs',
    containerCapacity: '22 MT per 20ft (80-ct canister)',
    packagingOptions: ['80-ct flip-top canister', '10-ct travel sachet', '56-ct value pack', '480-ct jumbo refill', 'Custom OEM packaging'],
    faqs: [
      { question: 'Are your baby wipes safe for newborns?', answer: 'Yes. Our fragrance-free formula is specifically designed for newborn-sensitive skin. The pH 5.5 matches the natural skin pH of infants, and the preservative-minimal formula has been dermatologist patch-tested for 200+ hours with no irritation.' },
      { question: 'What is the MOQ for private label baby wipes?', answer: 'MOQ is 10,000 packs per SKU. For buyers ordering 3+ SKUs, mixed container orders may be available. Development samples (50–100 packs) are available prior to bulk order at cost.' },
    ],
    relatedSlugs: ['hygiene-disposable-wipes', 'liquid-hand-soap-bulk'],
    seoTitle: 'Baby Wipes Private Label Vietnam | OEM Manufacturer | Fragrance Free',
    seoDescription: 'Ultra-soft baby wipes private label from Vietnam. Fragrance-free, paraben-free, pH 5.5. GMP ISO 22716. MOQ 10,000 packs. Export to Saudi Arabia, EU, Australia.',
    keywords: ['baby wipes manufacturer Vietnam', 'private label baby wipes', 'OEM baby wipes Vietnam', 'baby wipes supplier GCC', 'fragrance free baby wipes'],
    hsCode: '3307.90.00',
  },
  {
    slug: 'baby-diapers-oem',
    name: 'Baby Diapers / Nappies (OEM)',
    category: 'Baby Products',
    categorySlug: 'baby-products',
    tagline: 'OEM Baby Diapers — Premium Dry-Feel Core for Global Retail',
    description: 'Vietnam-manufactured OEM baby diapers with 3D leak guards, ultra-thin SAP core, and soft breathable outer cover. Available in Newborn–5XL sizes. Private label from 50,000 packs. Dermatologist-tested, EN 71 toy-grade component safety. For retail chains, pharmacy chains, and wholesale importers.',
    longDescription: `Baby diapers represent one of the world's largest FMCG categories, with emerging market demand growing fastest in the Middle East, Africa, and Southeast Asia. Vietnam's diaper manufacturing industry has matured significantly over the past decade, with facilities producing diapers that compete with major international brands on quality benchmarks.

Our OEM diaper manufacturing capability covers:

**Construction**: Multi-layer design — soft non-woven top sheet (body-contact), acquisition/distribution layer (ADL), SAP (super absorbent polymer) core, PE/PP moisture barrier, and breathable PP outer shell.

**Absorbency**: SAP core weight 22–35g/diaper (size dependent). Re-wet ≤ 0.5 g at 3rd saturation — clinically evaluated "dry feel" performance.

**Fit Features**: 3D leak guard cuffs, elastic waistband (back and front), repositionable hook-and-loop (velcro) or tape fastening.

**Sizes**: Newborn (NB, <4 kg), S (3–8 kg), M (5–11 kg), L (8–16 kg), XL (11–20 kg), XXL (13+ kg). Pull-up training pants also available.

**Key Compliance**: EN 71 Part 1 (mechanical safety) for all plastic components, REACH SVHC compliance, Oeko-Tex tested for skin-contact materials, Dermatologist tested.

Private label includes custom brand name, character artwork, language-specific packaging, and size-specific patterning.`,
    heroImage: '/Baby Products/idealdeal-Baby Diapers Nappies (OEM).jpg',
    specs: [
      { label: 'Core Type', value: 'SAP + Fluff pulp / Ultra-thin SAP' },
      { label: 'SAP Content', value: '22–35g per diaper (size dependent)' },
      { label: 'Re-wet (3rd void)', value: '≤ 0.5 g' },
      { label: 'Top Sheet', value: 'Soft non-woven (16–18 GSM)' },
      { label: 'Fastening', value: 'Hook-and-loop / Tape' },
      { label: 'Sizes', value: 'NB / S / M / L / XL / XXL' },
      { label: 'Pack Count', value: '30–80 pcs per pack (size dependent)' },
      { label: 'MOQ', value: '50,000 packs per size' },
      { label: 'HS Code', value: '9619.00.10' },
    ],
    certifications: ['EN 71 compliant', 'REACH SVHC compliant', 'Oeko Tex Standard 100', 'Dermatologist Tested', 'ISO 9001'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'Nigeria', 'Germany', 'Malaysia', 'Philippines', 'Ethiopia'],
    moq: '50,000 packs per size',
    containerCapacity: '20ft: 40,000–60,000 packs (size dependent)',
    packagingOptions: ['Individual resealable retail pack', 'Bulk carton (6–12 packs)', 'Custom OEM packaging', 'Travel mini pack'],
    faqs: [
      { question: 'What is the minimum order quantity for private label diapers?', answer: 'MOQ is 50,000 packs per size (per SKU). Many buyers order 3–5 sizes simultaneously to maximize container efficiency and meet minimum printing requirements. A total order of 200,000+ packs across sizes is a common first order.' },
      { question: 'Do you offer ultra thin "dry feel" diapers?', answer: 'Yes, our premium tier uses ultra thin SAP core technology (no fluff pulp) delivering a thinner, lighter diaper with equivalent or superior absorbency — this is the preferred format for premium retail positioning.' },
    ],
    relatedSlugs: ['baby wipes', 'hygiene disposable wipes'],
    seoTitle: 'OEM Baby Diapers Manufacturer Vietnam | Private Label Nappies Supplier',
    seoDescription: 'OEM baby diapers from Vietnam. SAP core, 3D leak guard, NB–XXL sizes. EN 71, Oeko Tex, dermatologist tested. MOQ 50,000 packs. Export to Saudi Arabia, Africa, EU.',
    keywords: ['baby diapers manufacturer Vietnam', 'OEM nappies Vietnam', 'private label diapers supplier', 'baby diapers wholesale Vietnam', 'diaper supplier GCC'],
    hsCode: '9619.00.10',
  },
  {
    slug: 'baby-powder-export',
    name: 'Baby Powder (Talc Free & Cornstarch)',
    category: 'Baby Products',
    categorySlug: 'baby products',
    tagline: 'Safe Baby Powder Manufacturing  Talc Free, Cornstarch & Natural Formula OEM',
    description: 'OEM and private label baby powder manufacturing from Vietnam. Talc free cornstarch base and natural formula options. Dermatologist tested, hypoallergenic, fragrance-free and light-fragrance variants. ISO 22716 GMP certified. Suitable for EU, US, ASEAN markets. MOQ 5,000 units.',
    longDescription: `Baby powder remains a significant personal care category globally, with increasing demand for talc free formulations following health authority advisories in major markets. Vietnam's ISO 22716-certified cosmetic manufacturers have pivoted to cornstarch-based and plant-derived baby powder formulations that meet current regulatory and retailer requirements.

Ideal Deal Vietnam supplies OEM and private label talc free baby powder from GMP-certified factories with comprehensive regulatory support for target export markets.

**Formulation options:**

**Cornstarch Base (Talc Free):**
- Primary absorbent: Non-GMO corn starch (80–95%)
- Anti-caking: Silica, magnesium carbonate
- Fragrance: Fragrance free (for sensitive skin) or mild baby fragrance
- Skin conditioners: Zinc oxide (diaper rash protection), aloe vera extract, calendula extract

**Natural & Organic Leaning Variant:**
- Arrowroot powder base
- Certified natural fragrance or fragrance free
- Free from: Talc, parabens, phthalates, synthetic dyes, artificial fragrance (optional)

**Packaging formats:**
- Shaker top bottle: 100g, 200g, 400g (HDPE or PP)
- Pump dispenser: 150g
- Tin (premium / gift range): 100g, 200g
- Flat pouch refill: 500g (retail eco packaging format)

All formulations undergo dermatological testing, stability testing (ICH conditions), and microbiological testing. EU Cosmetics Regulation 1223/2009 CPSR (Cosmetic Product Safety Report) available. No asbestos contamination declaration for talc-free products provided as standard.

Custom fragrance, color (light tinting), and branding on packaging available.`,
    heroImage: '/Baby Products/idealdeal-Baby Powder (Talc-Free & Cornstarch).jpg',
    specs: [
      { label: 'Base', value: 'Cornstarch (Talc-Free) / Arrowroot (Natural variant)' },
      { label: 'Talc Status', value: 'TALC-FREE — cornstarch base only' },
      { label: 'Fragrance Option', value: 'Fragrance-free / Hypoallergenic mild fragrance' },
      { label: 'Skin Test', value: 'Dermatologist tested, hypoallergenic' },
      { label: 'GMP Standard', value: 'ISO 22716 Cosmetics GMP' },
      { label: 'MOQ', value: '5,000 units per SKU' },
      { label: 'Lead Time', value: '21–30 days (stock formula); 35–45 days (custom)' },
      { label: 'Shelf Life', value: '36 months' },
      { label: 'Compliance', value: 'EU Cosmetics Reg. 1223/2009 / ASEAN / FDA compliant' },
    ],
    certifications: ['ISO 22716 Cosmetics GMP', 'Dermatologist Tested', 'EU Cosmetics Regulation Compliant', 'Halal Certifiable', 'Talc-Free Declaration'],
    exportMarkets: ['UAE', 'Saudi Arabia', 'UK', 'Germany', 'Australia', 'Philippines', 'Indonesia', 'Nigeria'],
    moq: '5,000 units per SKU',
    containerCapacity: '20ft: ~60,000 units (200g shaker bottles)',
    packagingOptions: ['Shaker bottle (100g / 200g / 400g)', 'Pump dispenser (150g)', 'Premium tin (100g / 200g)', 'Refill pouch (500g)', 'Custom private label packaging'],
    faqs: [
      { question: 'Is your baby powder talc-free?', answer: 'Yes. All our baby powder formulations are 100% talc-free, using cornstarch or arrowroot as the primary absorbent. We provide a talc-free declaration and can supply third party lab test reports confirming no talc or asbestos content in the finished product.' },
      { question: 'Can you produce fragrance-free baby powder for sensitive skin?', answer: 'Yes. Fragrance-free variants are available for all our cornstarch base formulations. These are particularly suitable for newborns and babies with eczema or sensitive skin. The fragrance-free range is the most popular for EU and Australian markets where parents seek minimal-ingredient baby products.' },
      { question: 'What regulatory documentation do you provide for EU importers?', answer: 'For EU market access, we provide: Cosmetic Product Safety Report (CPSR) prepared by a qualified EU cosmetic safety assessor, INCI ingredient list, Certificate of Analysis (COA), EU Responsible Person nomination support, Stability and microbiological test reports, and Declaration of Conformity with EU Cosmetics Regulation 1223/2009.' },
    ],
    relatedSlugs: ['baby-wet-wipes', 'shampoo-conditioner-bulk'],
    seoTitle: 'Vietnam Baby Powder OEM Manufacturer | Talc-Free Cornstarch Baby Powder | ISO 22716',
    seoDescription: 'Talc-free baby powder OEM manufacturing from Vietnam. Cornstarch base, dermatologist tested, hypoallergenic. ISO 22716 GMP. MOQ 5,000 units. Export to EU, UAE, AU.',
    keywords: ['baby powder manufacturer Vietnam', 'talc-free baby powder OEM', 'cornstarch baby powder Vietnam', 'private label baby powder', 'baby powder supplier Vietnam'],
    hsCode: '3304.99.00',
  },
];

// ─── Cleaning Tools Products ──────────────────────────────────────────────────
const cleaningToolsProducts: Product[] = [
  {
    slug: 'microfiber-mop-set',
    name: 'Microfiber Mop & Cleaning System',
    category: 'Cleaning Tools',
    categorySlug: 'cleaning-tools',
    tagline: 'Professional Microfiber Cleaning Systems — Bulk Export for Retail & Institutional',
    description: "Vietnam-manufactured microfiber mops, flat mops, spin mops, and cleaning kits for household, professional cleaning, and institutional buyers. 80/20 polyester/polyamide split microfiber, 300–450 GSM pads. Private label from 2,000 sets. Ideal for FMCG distributors and cleaning supply wholesalers.",
    longDescription: `Cleaning tools and equipment represent a significant export category from Vietnam, with factories across Ho Chi Minh City, Binh Duong, and Dong Nai producing microfiber mops, brooms, brushes, and complete cleaning systems for retail and institutional markets worldwide.

Vietnam's cleaning tools manufacturing advantage lies in its proximity to raw material suppliers (microfiber yarn, aluminum alloy handles, stainless steel components), competitive labor cost, and factories with ISO 9001-certified quality management systems that supply both private label brands and global cleaning equipment brands.

**Product Range:**
- **Flat mop systems**: Complete set with aluminum/stainless telescopic handle (120–150 cm), swivel connector, and 2–3 replacement microfiber pads (40 x 14 cm standard)
- **Spin mop systems**: Self-wringing bucket with rotating mop head, replacement heads available separately
- **String mop (Kentucky)**: Recycled cotton or polyester yarn, 400g–700g head, for commercial use
- **Brooms & brushes**: PP-bristle brooms, scrubbing brushes, toilet brushes, grout brushes

**Microfiber Quality**: 80/20 polyester/polyamide split microfiber (optimum cleaning efficiency), 300–450 GSM. Washable 500+ times at 60°C. Bacterial pick-up rate >99% (ISO 16100-4 method comparable).

**Private label**: Custom color, handle color, logo embroidery on pad, and branded retail packaging available from 2,000 sets.`,
    heroImage: '/Cleaning Tools/idealdeal-Microfiber Mop & Cleaning System.png',
    specs: [
      { label: 'Microfiber', value: '80% polyester / 20% polyamide split fiber' },
      { label: 'GSM', value: '300–450 GSM' },
      { label: 'Pad Size', value: '40×14 cm (flat) / 35 cm dia (spin)' },
      { label: 'Handle', value: 'Aluminum alloy / SS / PP telescopic' },
      { label: 'Washability', value: '500+ washes at 60°C' },
      { label: 'Bacterial Pick-up', value: '>99%' },
      { label: 'MOQ', value: '2,000 sets' },
      { label: 'Lead Time', value: '21–35 days' },
      { label: 'HS Code', value: '9603.90.10' },
    ],
    certifications: ['ISO 9001', 'OEKO-TEX Standard 100 (fabric)', 'CE Marking (if required)', 'SGS Material Safety'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'UK', 'Australia', 'USA', 'France', 'South Africa'],
    moq: '2,000 sets',
    containerCapacity: '20ft: 3,000–5,000 sets (product size dependent)',
    packagingOptions: ['Retail PDQ box', 'Polybag + header card', 'Bulk carton (no inner packaging)', 'Custom OEM retail packaging'],
    faqs: [
      { question: 'Can you supply replacement microfiber mop pads separately?', answer: 'Yes, replacement pads are available as a separate SKU in packs of 2, 4, or bulk carton quantities. This is popular for cleaning companies and hotel chains maintaining large mop fleets.' },
      { question: 'Do you offer custom logo embroidery on the mop pads?', answer: 'Yes, logo embroidery is available on flat mop pads from 5,000 units. For smaller quantities, screen-printed labels or woven label attachment is used.' },
    ],
    relatedSlugs: ['plastic-household-containers', 'liquid-hand-soap-bulk'],
    seoTitle: 'Microfiber Mop Manufacturer Vietnam | Cleaning Tools Wholesale Supplier',
    seoDescription: 'Professional microfiber mops and cleaning systems from Vietnam. 80/20 polyester/polyamide, 300–450 GSM. ISO 9001. MOQ 2,000 sets. Export to Saudi Arabia, EU, Australia.',
    keywords: ['microfiber mop manufacturer Vietnam', 'cleaning tools supplier Vietnam', 'mop wholesale Vietnam', 'private label mop Vietnam', 'cleaning equipment exporter Vietnam'],
    hsCode: '9603.90.10',
  },
  {
    slug: 'broom-dustpan-set',
    name: 'Broom & Dustpan Set (OEM Wholesale)',
    category: 'Cleaning Tools',
    categorySlug: 'cleaning-tools',
    tagline: 'Household Broom & Dustpan Sets — Vietnam OEM Manufacturer for Retail & Wholesale',
    description: 'PP-bristle brooms, lobby brooms, and matching dustpan sets manufactured in Vietnam. Available in indoor (soft bristle), outdoor (stiff bristle), and lobby brush styles. OEM/private label from 3,000 sets. Popular for FMCG retail programs, cleaning supply distributors, and hardware store chains.',
    longDescription: `Brooms and dustpan sets are among the most consistently demanded household cleaning products globally, and Vietnam has built a competitive manufacturing base for these products alongside its microfiber and mop manufacturing capabilities.

**Product Range:**
- **Standard Household Broom**: 53 cm wide PP bristle head (soft/medium/stiff), 120–150 cm handle (solid wood or hollow metal)
- **Lobby/Lobby Broom**: Smaller 30 cm head with stiff bristles for industrial and commercial use
- **Angled Broom**: Flagged PP bristles angled for corner sweeping — popular in European and US retail
- **Matching Dustpan**: Flat, long-handle (no-bend), or short dustpan in matching color with lip seal for fine dust
- **Complete Sets**: Broom + dustpan + wall hook or storage clip — packaged together for retail

**Material Details**: Bristles use PP (polypropylene) monofilament — stiffness customizable from 0.15 mm (soft, fine dust) to 0.30 mm (stiff, outdoor debris). Handles: solid beech/pine wood (European feel), aluminum tube (lightweight), or PP (economy). All hardware is chromium-free zinc alloy or PP for rust resistance.

Custom colors (Pantone matching), logo printing on handle or head, and branded retail packaging (PDQ display box, polybag + header) are all available.`,
    heroImage: '/Cleaning Tools/idealdeal-Broom & Dustpan Set (OEM Wholesale).png',
    specs: [
      { label: 'Broom Width', value: '30 cm / 40 cm / 53 cm' },
      { label: 'Bristle Material', value: 'PP Monofilament 0.15–0.30 mm' },
      { label: 'Handle', value: 'Wood / Aluminum / PP (110–150 cm)' },
      { label: 'Dustpan Type', value: 'Short / Long-handle / Lobby' },
      { label: 'MOQ', value: '3,000 sets' },
      { label: 'Lead Time', value: '21–35 days' },
      { label: 'HS Code', value: '9603.29.00' },
    ],
    certifications: ['ISO 9001', 'SGS Material Safety', 'REACH SVHC compliant'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'UK', 'Germany', 'Australia', 'USA', 'South Africa', 'France'],
    moq: '3,000 sets',
    containerCapacity: '20ft: 6,000–10,000 sets (size dependent)',
    packagingOptions: ['Polybag + header card', 'PDQ retail display box', 'Shrink-wrap bundle', 'Custom OEM retail box'],
    faqs: [
      { question: 'Can you supply broom and mop sets together in one bundle?', answer: 'Yes, we can create complete home cleaning bundles — broom + dustpan + mop + bucket as a set. These combo sets are popular for modern retail programs and FMCG promotional bundles. MOQ for bundle sets is 2,000 units.' },
      { question: 'What handle materials are available for export markets?', answer: 'We offer wooden handles (natural finish or lacquered), aluminum hollow tubes (lightweight, premium feel), and PP handles (economy). For Middle East and Africa, aluminum handles are preferred for durability in hot, humid climates.' },
    ],
    relatedSlugs: ['microfiber-mop-set', 'microfiber-cleaning-cloths'],
    seoTitle: 'Broom Dustpan Set Manufacturer Vietnam | OEM Cleaning Tools Wholesale',
    seoDescription: 'PP bristle brooms and dustpan sets from Vietnam. OEM private label from 3,000 sets. ISO 9001. Export to Saudi Arabia, UK, Germany, Australia.',
    keywords: ['broom dustpan set Vietnam', 'cleaning tools manufacturer Vietnam', 'OEM broom supplier', 'household broom wholesale Vietnam', 'brush set exporter Vietnam'],
    hsCode: '9603.29.00',
  },
  {
    slug: 'microfiber-cleaning-cloths',
    name: 'Microfiber Cleaning Cloths & Towels (Bulk)',
    category: 'Cleaning Tools',
    categorySlug: 'cleaning-tools',
    tagline: 'High-GSM Microfiber Cloths — Bulk & Private Label for Cleaning & Auto Detailing',
    description: 'Premium 80/20 polyester/polyamide microfiber cleaning cloths and towels. 200–600 GSM range. Multi-color for color-coding systems. OEKO-TEX certified fabric. OEM private label. Popular for household cleaning kits, auto detailing packs, hotel housekeeping supply, and institutional cleaning contracts.',
    longDescription: `Microfiber cleaning cloths are among the most versatile and widely used cleaning products globally — effective on virtually all surfaces, reusable hundreds of times, and hygienic due to the deep mechanical cleaning action of split microfiber. Vietnam manufacturers produce a broad range of microfiber cloths for household, auto detailing, hospitality, and industrial applications.

**Microfiber Specifications:**
- **Split ratio**: 80% polyester / 20% polyamide — the industry standard for deep cleaning efficacy
- **GSM options**: 200 GSM (lightweight, general purpose), 300–350 GSM (standard household), 400–450 GSM (premium cleaning), 500–600 GSM (auto detailing, plush)
- **Sizes**: 30×30 cm (standard), 35×35 cm, 40×40 cm, 40×60 cm (general purpose), 60×80 cm (bath/auto)
- **Edge treatment**: Overlock stitch (standard), silk screen edge (no-scratch), or bound edge

**Applications:**
- Multi-surface household cleaning (glass, counters, appliances)
- Auto detailing (polish application, drying, interior)
- Hotel housekeeping and industrial cleaning
- Kitchen cloths and dish towels
- Glasses and screen cleaning (ultra-fine grade)

**Color Coding**: Multiple colors available for HACCP-compliant color-coded cleaning systems (red = bathroom, blue = general surfaces, green = food prep areas, yellow = disposal areas). Custom Pantone color matching available.

Washable 300–500+ times at 60°C without significant performance loss.`,
    heroImage: '/Cleaning Tools/idealdeal-Microfiber Cleaning Cloths & Towels (Bulk).png',
    specs: [
      { label: 'Fiber', value: '80% polyester / 20% polyamide split' },
      { label: 'GSM', value: '200–600 GSM (grade dependent)' },
      { label: 'Sizes', value: '30×30 to 60×80 cm' },
      { label: 'Washability', value: '300–500+ washes at 60°C' },
      { label: 'Bacterial Pick-up', value: '>99% (ISO 16100 method)' },
      { label: 'Colors', value: '10+ standard + custom Pantone' },
      { label: 'MOQ', value: '2,000 pieces' },
      { label: 'Lead Time', value: '14–28 days' },
      { label: 'HS Code', value: '6307.10.90' },
    ],
    certifications: ['OEKO-TEX Standard 100', 'ISO 9001', 'REACH compliant'],
    exportMarkets: ['Germany', 'UK', 'Saudi Arabia', 'UAE', 'Australia', 'USA', 'Netherlands', 'South Africa'],
    moq: '2,000 pieces',
    containerCapacity: '20ft: 50,000–150,000 pieces (GSM dependent)',
    packagingOptions: ['Polybag per piece', 'Sets of 5/10 in polybag', 'Retail blister pack', 'Bulk packed in carton', 'Custom OEM retail packaging'],
    faqs: [
      { question: 'What GSM should I specify for car detailing cloths?', answer: 'For auto detailing, 400–600 GSM plush microfiber is recommended — the higher pile absorbs more water and polishing compound while the soft texture prevents swirl marks on paintwork. Standard 300 GSM is fine for interior wipe-down and glass cleaning.' },
      { question: 'Can you supply OEKO-TEX certified fabric cloths for European retail?', answer: 'Yes, all our microfiber fabric is OEKO-TEX Standard 100 certified, ensuring it contains no harmful substances above permitted levels. OEKO-TEX certificates can be provided for each shipment.' },
    ],
    relatedSlugs: ['microfiber-mop-set', 'broom-dustpan-set'],
    seoTitle: 'Microfiber Cleaning Cloths Bulk Supplier Vietnam | OEKO-TEX OEM',
    seoDescription: 'Premium microfiber cleaning cloths and towels from Vietnam. 80/20 split, 200–600 GSM, OEKO-TEX certified. OEM private label. MOQ 2,000 pcs. Export to EU, Saudi Arabia, Australia.',
    keywords: ['microfiber cloths Vietnam', 'microfiber cleaning cloth supplier', 'microfiber towels wholesale Vietnam', 'OEKO-TEX microfiber Vietnam', 'cleaning cloths OEM Vietnam'],
    hsCode: '6307.10.90',
  },
  {
    slug: 'spin-mop-with-bucket',
    name: 'Spin Mop with Bucket (360° Self-Wringing)',
    category: 'Cleaning Tools',
    categorySlug: 'cleaning-tools',
    tagline: '360° Self-Wringing Spin Mop — Household, Hotel & Retail Export Quality',
    description: 'Vietnam-manufactured 360° spin mop and bucket sets for retail, hotel, and janitorial markets. Microfiber mop head (refillable), stainless steel handle, foot-pedal spinner bucket. Available in standard, deluxe (with splashguard), and heavy-duty versions. MOQ 500 sets.',
    longDescription: `Spin mops with self-wringing buckets are one of the highest-volume household cleaning product categories exported from Vietnam, with domestic factories producing for major global retailers including IKEA, Walmart, Amazon private label programs, and regional supermarket chains.

Vietnam's cleaning tools manufacturing cluster, concentrated in Binh Duong and Long An provinces, combines competitive labor costs with plastic injection molding capability, metal pressing, and microfiber textile production to deliver fully integrated spin mop sets at competitive price points.

Ideal Deal Vietnam supplies spin mop with bucket sets across three product tiers:

**Standard Tier:**
- 360° rotating microfiber mop head (160–200g weight)
- Steel handle (140–160 cm adjustable height)
- Foot-pedal spin bucket (10–12 L capacity)
- PP bucket body, stainless steel inner basket

**Deluxe Tier (with upgrades):**
- Thicker microfiber head (220–280g) for better absorbency
- Telescopic stainless steel handle with ergonomic grip
- Splash-guard bucket with dual-chamber (clean/dirty water separation)
- Extra mop head included

**Heavy-Duty Commercial Tier:**
- Industrial microfiber head (300–350g)
- Heavy-gauge steel handle (1.2 mm wall thickness)
- 15 L commercial bucket with large spinner basket
- Rubber bumper protection on bucket base

Mop heads are machine-washable (60°C) and replaceable. Refill heads sold separately. OEM branding on bucket and handle available. Flat-pack retail boxing with window for display.

Custom colorways (bucket, handle) available for retail private label buyers with MOQ 1,000 sets per color.`,
    heroImage: '/Cleaning Tools/idealdeal-Spin Mop with Bucket (360° Self-Wringing).png',
    specs: [
      { label: 'Mop Head', value: 'Microfiber (160–350g) — machine washable 60°C' },
      { label: 'Handle', value: 'Stainless steel, 140–160 cm adjustable' },
      { label: 'Bucket Capacity', value: '10–15 L (product tier dependent)' },
      { label: 'Spinner', value: 'Foot-pedal centrifugal spinner, 360° rotation' },
      { label: 'MOQ', value: '500 sets (standard); 1,000 sets (custom color)' },
      { label: 'Lead Time', value: '25–35 days' },
      { label: 'Carton Size', value: '~0.045 m³ per set (flat-pack)' },
      { label: 'Color Options', value: 'White/Grey, Blue/White, Red/White, Custom' },
      { label: 'Testing', value: 'REACH / CA Prop 65 / EN 13697 (where applicable)' },
    ],
    certifications: ['REACH Compliant', 'California Prop 65 Compliant', 'ISO 9001', 'SGS Tested'],
    exportMarkets: ['USA', 'UK', 'Germany', 'France', 'Australia', 'UAE', 'Netherlands', 'South Africa'],
    moq: '500 sets (standard colors)',
    containerCapacity: '20ft: 700–900 sets (flat-pack); 40ft HQ: 1,600–2,000 sets',
    packagingOptions: ['Retail flat-pack color box', 'White box (for private label)', 'Bulk carton (no retail box)', 'Custom branded packaging', 'Polybag + inner carton'],
    faqs: [
      { question: 'Do you offer replacement microfiber mop heads separately?', answer: 'Yes. Replacement microfiber mop heads are sold separately as refill packs (1-pack, 2-pack, 3-pack). They are compatible with our standard, deluxe, and heavy-duty spin mop handles. Custom replacement head packs with private label packaging are available at MOQ 1,000 units per SKU.' },
      { question: 'Can we get custom branding on the bucket and handle?', answer: 'Yes. OEM branding via pad printing, heat transfer, or sticker label is available on the bucket body, bucket lid, and handle grip. For custom color molding (bucket body color change), MOQ is 2,000 units per color. Standard color variants (white, grey, blue) are available from stock tooling at 500-set MOQ.' },
      { question: 'Does your spin mop comply with EU REACH and California Prop 65?', answer: 'Yes. All our spin mop sets are tested by SGS or Bureau Veritas for REACH compliance (SVHC screening) and California Proposition 65. We provide test reports with each shipment. Microfiber mop heads are also tested for microplastic shedding upon request for buyers with sustainability requirements.' },
    ],
    relatedSlugs: ['floor-squeegee-set', 'plastic-storage-bins-export'],
    seoTitle: 'Vietnam Spin Mop Manufacturer | 360 Spin Mop Bucket Set | OEM Private Label',
    seoDescription: 'Spin mop with bucket from Vietnam. 360° self-wringing, microfiber head. Retail and commercial grades. REACH compliant. MOQ 500 sets. OEM branding available. Export worldwide.',
    keywords: ['spin mop manufacturer Vietnam', 'spin mop bucket set Vietnam', 'OEM spin mop Vietnam', 'microfiber mop Vietnam', 'cleaning tools supplier Vietnam'],
    hsCode: '9603.90.90',
  },
];

// ─── Plastic Household Items ──────────────────────────────────────────────────
const plasticHouseholdProducts: Product[] = [
  {
    slug: 'plastic-household-containers',
    name: 'Plastic Storage Containers & Kitchenware',
    category: 'Plastic Household',
    categorySlug: 'plastic-household',
    tagline: 'Food-Safe PP/PE Household Containers — B2B Wholesale Manufacturer Vietnam',
    description: 'Food-grade PP (polypropylene) and PE (polyethylene) storage containers, kitchen organizers, and household products manufactured in Vietnam. BPA-free, FDA 21 CFR and EU 10/2011 compliant for food contact. Wide range of sizes from 0.5L to 30L. OEM/private label from 5,000 units.',
    longDescription: `Vietnam's plastics manufacturing industry serves both domestic consumption and export markets, with a particular concentration of household plastic goods producers in Ho Chi Minh City, Binh Duong, and Long An. Modern injection molding facilities, blow molding lines, and thermoforming equipment enable the production of a broad range of household plastic goods.

**Material Grades:**
- **PP (Polypropylene)**: Lightweight, semi-transparent, microwave-safe (specific grades). Food contact compliant to FDA 21 CFR 177.1520 and EU Regulation 10/2011. Typical products: food storage boxes, lunch boxes, containers.
- **HDPE (High-Density Polyethylene)**: Opaque, high chemical resistance, excellent for laundry baskets, storage bins, and bathroom accessories.
- **ABS**: For rigid, high-gloss products including kitchen tools, dispensers, and organizers.

**Product Range:**
- Food storage containers (round, rectangular, stackable) 0.5L–10L
- Lunch boxes with air-tight seal and locking clips
- Kitchen storage racks and organizers
- Laundry baskets (20L–60L capacity)
- Dustbins / waste bins (2L–50L)
- Water pitchers and dispensers
- Bathroom accessories sets

All products BPA-free. Food contact items tested and certified to EU 10/2011 (plastics regulation) and FDA 21 CFR. REACH SVHC compliant. Colorfastness tested.

Custom colors, sizes, and logo molding (including embossed brand name) are available for OEM buyers from tooling investment.`,
    heroImage: '/Plastic Household Items/idealdeal-Plastic Storage Containers & Kitchenware.png',
    specs: [
      { label: 'Materials', value: 'PP / HDPE / ABS / PET (food grade)' },
      { label: 'BPA', value: 'BPA-Free — all grades' },
      { label: 'Food Contact', value: 'FDA 21 CFR / EU 10/2011 compliant' },
      { label: 'Temperature', value: 'PP: -20°C to +120°C / HDPE: -40°C to +80°C' },
      { label: 'Colors', value: 'Custom Pantone matching available' },
      { label: 'MOQ', value: '5,000 units (stock molds) / Custom mold from 10,000' },
      { label: 'Lead Time', value: '21–30 days (stock molds)' },
      { label: 'HS Code', value: '3924.10.00' },
    ],
    certifications: ['FDA 21 CFR 177.1520', 'EU 10/2011 compliant', 'REACH SVHC compliant', 'ISO 9001', 'BPA-Free tested'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'Australia', 'UK', 'USA', 'Egypt', 'Nigeria'],
    moq: '5,000 units (stock molds)',
    containerCapacity: '20ft: 10,000–40,000 units (size-dependent)',
    packagingOptions: ['Polybag with header card', 'Color retail box', 'Bulk export carton', 'Custom OEM packaging'],
    faqs: [
      { question: 'Are your plastic containers microwave-safe?', answer: 'PP (polypropylene) containers are microwave-safe up to 120°C when marked with microwave-safe symbol. HDPE containers are not microwave-safe. All food containers are clearly marked with resin identification code and safety symbols.' },
      { question: 'Can you produce custom sizes and colors for our brand?', answer: 'Yes, custom sizes require new tooling (mold) investment, typically USD 3,000–15,000 depending on complexity. Tooling lead time is 30–45 days. Custom colors in Pantone matching are available from 10,000 units per color.' },
    ],
    relatedSlugs: ['microfiber-mop-set', 'eco-packaging-kraft'],
    seoTitle: 'Plastic Household Products Vietnam | PP Storage Containers B2B Supplier',
    seoDescription: 'Food-grade plastic containers and household products from Vietnam. BPA-free, FDA/EU 10/2011 compliant. OEM/private label. MOQ 5,000. Export to Saudi Arabia, EU, Africa.',
    keywords: ['plastic household products Vietnam', 'storage containers manufacturer Vietnam', 'PP containers supplier', 'food grade plastic Vietnam', 'household plastic OEM Vietnam'],
    hsCode: '3924.10.00',
  },
  {
    slug: 'plastic-storage-bins-export',
    name: 'Plastic Storage Bins & Organizers (Export Range)',
    category: 'Plastic Household',
    categorySlug: 'plastic-household',
    tagline: 'Vietnam OEM Plastic Storage Solutions — Stackable Bins, Boxes & Drawer Organizers',
    description: 'Export-grade plastic storage bins, stackable containers, and drawer organizers from Vietnam. PP and HDPE construction, BPA-free, food-safe grades available. Sizes from 1 L to 60 L. Retail-ready or bulk. REACH, CA Prop 65 compliant. OEM and private label. MOQ 1,000 pcs.',
    longDescription: `Vietnam is a major global supplier of plastic household products, with manufacturing clusters in Binh Duong, Dong Nai, and Long An producing for major retail chains and private label importers across North America, Europe, and Australia.

Ideal Deal Vietnam supplies a comprehensive range of plastic storage bins and organizers from ISO 9001-certified factories with full plastic injection molding capabilities in PP (polypropylene), HDPE, and ABS, utilizing automotive-grade tooling for tight dimensional consistency.

**Product range:**

**Stackable Storage Bins:**
- Small bins: 1L, 2L, 3L (drawer inserts, desk organizers)
- Medium bins: 5L, 10L, 15L (pantry, closet, garage)
- Large bins: 25L, 40L, 60L (industrial storage, moving boxes)
- Lids available: snap-on, hinged, sliding

**Drawer & Cabinet Organizers:**
- Kitchen drawer dividers (modular, adjustable)
- Refrigerator storage bins (transparent PP)
- Under-bed flat storage containers (with casters)
- Modular shelf bins (open-front, stackable)

**Specialized Storage:**
- Lidded file storage boxes (A4 document boxes)
- Toy storage bins (rounded corners, child-safe)
- Garage wall-mount bins (heavy-duty HDPE)

**Material standards:**
- Food-safe PP (FDA 21 CFR 177.1520) for food contact products
- BPA-free — all products
- UV stabilizer added for outdoor storage products
- REACH SVHC compliant

Custom colors, sizes, and branding (embossed logo, label insert, printed label) available. Retail packaging: color box, shrink wrap, poly bag header card.`,
    heroImage: '/Plastic Household Items/idealdeal-Plastic Storage Bins & Organizers (Export Range).png',
    specs: [
      { label: 'Material', value: 'PP / HDPE / ABS (product-dependent)' },
      { label: 'BPA Status', value: 'BPA-Free (all products)' },
      { label: 'Food Contact', value: 'FDA 21 CFR 177.1520 (food-safe PP grades)' },
      { label: 'Size Range', value: '1L – 60L (standard range)' },
      { label: 'MOQ', value: '1,000 pcs per SKU (from existing mold)' },
      { label: 'Lead Time', value: '20–30 days (existing mold); 45–60 days (new mold)' },
      { label: 'Compliance', value: 'REACH / CA Prop 65 / EU REACH Regulation' },
      { label: 'Stacking', value: 'Interlocking rim design (stackable to 4 high loaded)' },
      { label: 'Certification', value: 'ISO 9001, SGS/Bureau Veritas tested' },
    ],
    certifications: ['ISO 9001', 'REACH Compliant', 'California Prop 65 Compliant', 'BPA-Free Declaration', 'FDA 21 CFR 177.1520 (food-safe grades)'],
    exportMarkets: ['USA', 'UK', 'Germany', 'Australia', 'France', 'UAE', 'South Korea', 'Netherlands'],
    moq: '1,000 pcs per SKU (existing mold)',
    containerCapacity: '20ft: 3,000–8,000 units (size dependent); 40ft HQ: double capacity',
    packagingOptions: ['Retail color box', 'Shrink wrap with header card', 'Bulk polybag', 'Master carton (export)', 'Private label packaging'],
    faqs: [
      { question: 'Are your plastic storage bins BPA-free and food-safe?', answer: 'Yes. All our plastic storage products are BPA-free. For products designated for food contact (refrigerator bins, pantry containers, food storage boxes), we use PP resin compliant with FDA 21 CFR 177.1520 and EU Regulation 10/2011. Food-contact compliant certificates and migration test reports are available.' },
      { question: 'Can you develop new sizes or custom molds for our product line?', answer: 'Yes. We offer custom mold development for new sizes or unique designs. Mold tooling cost typically ranges from USD 3,000–15,000 depending on product complexity and cavity number. Mold lead time is 25–40 days. Tooling is owned by the buyer after payment and stored at our factory for production runs.' },
      { question: 'Do you offer testing for REACH and California Prop 65 compliance?', answer: 'Yes. We provide third party test reports from SGS, Bureau Veritas, or Intertek for REACH SVHC (substance of very high concern) screening and California Proposition 65 listed substances. Reports are available per product SKU and updated annually or when raw material sources change.' },
    ],
    relatedSlugs: ['spin-mop-with-bucket', 'eco-packaging-kraft'],
    seoTitle: 'Vietnam Plastic Storage Bins Manufacturer | OEM Storage Containers | BPA-Free',
    seoDescription: 'Plastic storage bins and organizers from Vietnam. PP/HDPE, BPA-free, food-safe. REACH, CA Prop 65 compliant. MOQ 1,000 pcs. OEM/private label. Export to USA, EU, AU.',
    keywords: ['plastic storage bins Vietnam', 'storage container manufacturer Vietnam', 'OEM plastic bins Vietnam', 'stackable storage bins supplier', 'plastic household products Vietnam'],
    hsCode: '3924.90.00',
  },
];

// ─── Canned & Preserved Food ──────────────────────────────────────────────────
const cannedFoodProducts: Product[] = [
  {
    slug: 'canned-tuna-chunks',
    name: 'Canned Tuna in Oil / Water (Chunks & Flakes)',
    category: 'Canned Food',
    categorySlug: 'canned-preserved-food',
    tagline: 'HACCP Certified Canned Tuna — EU Registered, Halal, B2B Export',
    description: 'Vietnam-processed canned tuna in sunflower oil, brine, or spring water. Skipjack and yellowfin. Chunks and flakes format. EU registered, HACCP, BRC, Halal certified. Available A1/A½/160g/185g/185g formats. Ready for retail, private label, and foodservice buyers globally.',
    longDescription: `Vietnam is one of the top 5 global tuna canning nations, with processing plants concentrated in the south-central coast (Khanh Hoa, Binh Dinh, and Da Nang provinces) operating close to tuna fishing grounds in the Pacific and Indian Oceans.

Our tuna canning partners process both Skipjack tuna (Katsuwonus pelamis) — the most widely consumed canned tuna species globally — and Yellowfin tuna (Thunnus albacares) for premium market positioning. Both species are sourced through certified fishing vessels and processing facilities with MSC (Marine Stewardship Council) chain-of-custody documentation available for eco-conscious buyers.

**Processing Method:**
Raw tuna is delivered chilled (0–4°C) to the processing plant within 24 hours of landing. After cleaning, loining, pre-cooking, cooling, flaking/chunk preparation, and filling, cans are exhausted and sealed in double-seam automatic seamers. Retort sterilization achieves F0 ≥ 5 (Fo value, ensuring complete commercial sterility) with a 4-year ambient shelf life.

**Pack Styles:**
- 160g/185g retail can (most popular for supermarket)
- A1 (425g net drained / 850g total) — foodservice
- A2 (185g/200g) — mid-size retail and catering
- Chunks in sunflower oil / spring water / brine
- Flakes in water / vegetable broth (for diet positioning)

All cans from EU-authorized establishments. Full export documentation: EUR.1 preferential origin, health certificate, FDA registration, Halal certificate. Private label is our standard service.`,
    heroImage: '/Canned & Preserved Food/Canned Tuna in Oil  Water (Chunks & Flakes).jpg',
    specs: [
      { label: 'Species', value: 'Skipjack (Katsuwonus pelamis) / Yellowfin' },
      { label: 'Style', value: 'Chunks / Flakes / Solid' },
      { label: 'Medium', value: 'Sunflower oil / Spring water / Brine' },
      { label: 'Can Sizes', value: '160g / 185g / 425g / 850g' },
      { label: 'Drained Weight', value: '≥ 52% of net weight (EU Codex)' },
      { label: 'Salt Content', value: '≤ 1.5% (standard) / Low-salt available' },
      { label: 'Shelf Life', value: '48 months (ambient)' },
      { label: 'Sterility', value: 'F0 ≥ 5' },
      { label: 'HS Code', value: '1604.14.11' },
    ],
    certifications: ['HACCP', 'ISO 22000', 'BRC Grade A', 'EU Establishment Registered', 'FDA Registered', 'Halal', 'MSC (select lots)', 'SASO/SFDA (Saudi Arabia)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'UK', 'France', 'Ghana', 'Nigeria', 'USA'],
    moq: '1 x 20ft container (≈ 20 MT)',
    containerCapacity: '20 MT per 20ft / 24 MT per 40ft',
    packagingOptions: ['160g/185g retail can (24 per carton)', 'A1 425g can (24 per carton)', 'Custom OEM label', 'Retailer own brand'],
    faqs: [
      { question: 'Are your tuna processing facilities EU-registered?', answer: 'Yes, our primary partner facilities hold current EU establishment registration under Regulation (EC) 854/2004, enabling direct export to EU27 member states without additional import restrictions.' },
      { question: 'Do you offer MSC-certified sustainable tuna?', answer: 'Yes, selected lots from MSC-certified vessels are available. MSC CoC documentation is provided with these lots at a small premium. Important for buyers marketing to European retail chains with sustainability commitments.' },
      { question: 'Can you supply low-sodium / no-salt-added canned tuna?', answer: 'Yes. Low-sodium (≤ 0.5% salt) and no-salt-added variants are available in brine or spring water medium. Popular for health-positioned retail brands and foodservice dietetic programs.' },
    ],
    relatedSlugs: ['frozen-white-shrimp', 'canned-pineapple-syrup'],
    seoTitle: 'Canned Tuna Vietnam Export | EU Registered | Halal | Wholesale Supplier',
    seoDescription: 'Canned tuna in oil/water from Vietnam. Skipjack & yellowfin. EU registered, HACCP, BRC, Halal. 160g–850g formats. MOQ 1 container. Export to Saudi Arabia, EU, Africa.',
    keywords: ['canned tuna Vietnam export', 'tuna canning Vietnam', 'canned fish supplier Vietnam', 'canned tuna wholesale', 'tuna supplier Saudi Arabia'],
    hsCode: '1604.14.11',
  },
  {
    slug: 'canned-sardines-export',
    name: 'Canned Sardines in Oil / Tomato Sauce',
    category: 'Canned Food',
    categorySlug: 'canned-preserved-food',
    tagline: 'Vietnam Canned Sardines — Wild-Caught, MSC-Traceable, Halal & Kosher Certified',
    description: 'Export-grade canned sardines from Vietnamese coastal canneries. Wild-caught, Sardinella species. Available in sunflower oil, olive oil, tomato sauce, brine, and spicy tomato variants. 125g, 155g, 400g can sizes. HACCP, BRC, Halal, Kosher certified. MOQ 1 x 20ft container.',
    longDescription: `Vietnam's south-central coast, particularly the provinces of Binh Thuan, Khanh Hoa, and Ba Ria-Vung Tau, hosts significant sardine and small pelagic fish populations supporting one of Southeast Asia's most productive coastal fisheries. Canned sardine production from Vietnam has grown to supply supermarket chains, food service distributors, and private label buyers across Africa, the Middle East, and Southeast Asia.

Ideal Deal Vietnam sources from HACCP Certified and BRC-audited canneries producing fully processed, commercially sterile canned sardines under rigorous quality and food safety management systems.

**Species and sourcing:**
- Primary species: Sardinella lemuru (Bali sardine / oil sardine) and Sardinella gibbosa
- Caught by purse seine and encircling gill net in Vietnamese territorial waters and WCPFC-managed regions
- Catch-to-can traceability documentation available (vessel log, landing certificate)

**Packing variants available:**
- **In sunflower oil**: Most popular export format for Africa, Middle East, EU
- **In olive oil** (extra-light): Premium variant for EU/Australian retail
- **In tomato sauce**: West Africa, Southeast Asia, household consumption
- **In spicy tomato sauce**: Middle East and Southeast Asian markets
- **In brine** (water-packed): Low-fat, diet format for health-conscious markets
- **In chili oil**: Popular for Asian food service and ethnic grocery

**Can sizes:**
- 125g net / 90g drained weight (standard small oval or round)
- 155g net / 115g drained weight (standard retail)
- 400g net / 300g drained weight (catering / foodservice)

All products are commercially sterile, shelf-stable 3–5 years. Halal certification from JAKIM/MUIS recognized bodies; Kosher available on request.`,
    heroImage: '/Canned & Preserved Food/Canned Sardines in Oil  Tomato Sauce.jpg',
    specs: [
      { label: 'Species', value: 'Sardinella lemuru / Sardinella gibbosa (wild-caught)' },
      { label: 'Packing Medium', value: 'Sunflower Oil / Tomato Sauce / Olive Oil / Brine / Chili' },
      { label: 'Can Sizes', value: '125g / 155g / 400g net weight' },
      { label: 'Shelf Life', value: '3–5 years (commercially sterile)' },
      { label: 'Salt Content', value: '1.0–2.0% (variant dependent)' },
      { label: 'MOQ', value: '1 x 20ft container (~2,400 cartons)' },
      { label: 'Lead Time', value: '21–30 days' },
      { label: 'Certifications', value: 'HACCP, BRC, Halal, ISO 22000' },
      { label: 'Labelling', value: 'OEM / Private Label / Buyer spec' },
    ],
    certifications: ['HACCP Certified', 'BRC Food Safety Grade A', 'ISO 22000', 'Halal (JAKIM/MUIS)', 'Kosher (on request)', 'EU IUU Regulation Compliant'],
    exportMarkets: ['West Africa (Ghana, Nigeria)', 'UAE', 'Saudi Arabia', 'Philippines', 'EU (Italy, Spain)', 'Australia', 'UK'],
    moq: '1 x 20ft container (~2,400 cartons of 48 x 125g cans)',
    containerCapacity: '20ft: ~115,200 cans (125g); ~86,400 cans (155g); ~43,200 cans (400g)',
    packagingOptions: ['Retail can (individual label)', 'Tray-shrink (4-pack, 6-pack)', 'Master carton (24 or 48 cans)', 'Private label / OEM branding', 'White label (buyer-supplied artwork)'],
    faqs: [
      { question: 'Are your canned sardines Halal certified?', answer: 'Yes. Our canned sardines are Halal certified by JAKIM (Malaysia) or MUIS (Singapore) recognized certifying bodies. Halal certificates are issued per factory and per product specification. For buyers in the Middle East, we can also arrange certification recognized by the Gulf Cooperation Council (GCC) markets.' },
      { question: 'Can you produce private label canned sardines with our brand?', answer: 'Yes. Private label is our most common supply arrangement. We require buyer-supplied artwork in AI/PDF format. Label printing is arranged by us (offset lithography, full color) or buyer can supply pre-printed labels. MOQ for private label is 1 x 20ft container. Pre-production label approval and a product sample are provided before full production.' },
      { question: 'How do you ensure compliance with EU IUU fishing regulations?', answer: 'We provide full IUU (Illegal, Unreported, Unregulated) fishing compliance documentation including: Catch Certificates issued by the Vietnamese competent authority (MARD/DECAFIS), vessel license copies, landing declarations, and chain-of-custody documentation from catch to processed product. This documentation is mandatory for EU market entry and is provided as standard for all EU-destined shipments.' },
    ],
    relatedSlugs: ['canned-tuna-chunks', 'frozen-blue-swimming-crab'],
    seoTitle: 'Vietnam Canned Sardines Exporter | Halal Kosher BRC HACCP | Private Label',
    seoDescription: 'Canned sardines from Vietnam. Wild-caught, sunflower oil / tomato sauce. Halal, BRC, HACCP certified. MOQ 1 container. Private label available. Export to Africa, Middle East, EU.',
    keywords: ['canned sardines Vietnam', 'Vietnam sardine exporter', 'halal canned sardines Vietnam', 'private label canned sardines', 'canned fish supplier Vietnam'],
    hsCode: '1604.13.10',
  },
];

// ─── Packaged Food & Snacks ───────────────────────────────────────────────────
const packagedFoodProducts: Product[] = [
  {
    slug: 'vietnamese-instant-noodles',
    name: 'Vietnamese Instant Noodles (OEM)',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Vietnam-Manufactured Instant Noodles — Private Label for Global Retail',
    description: 'Vietnam is one of the world\'s largest instant noodle markets and manufacturers. Our OEM instant noodles — fried (palm oil) or air-dried formats — are available in Vietnamese pho, beef, chicken, shrimp, and vegetarian flavors. HACCP, Halal, ISO 22000. Private label from 5,000 cases.',
    longDescription: `Vietnam ranks among the world's top 5 per-capita instant noodle consuming and producing nations. The country's instant noodle manufacturing infrastructure — anchored by brands like Acecook, Masan, and Vina Acecook — has developed world class OEM capacity serving both domestic and international private label buyers.

**Noodle Types:**
- **Fried instant noodles** (most common): Pre-fried in palm oil, dehydrated, with seasoning sachet and oil sachet
- **Air-dried noodles**: Non-fried, lower calorie, increasingly popular for health-positioned products
- **Rice noodles (Pho)**: Dried flat rice noodles with beef or chicken pho broth sachet — authentic Vietnamese format

**Noodle Ingredients:** Wheat flour (fried) or rice flour (rice noodles), water, salt, sodium carbonate (alkalinity agent for texture), palm oil (fried type only).

**Sachet System:** Each pack contains noodle cake + powder seasoning sachet + oil/sauce sachet (optional). Flavors available: Beef, Chicken, Shrimp, Pork bone, Spicy beef (bún bò Huế style), Vegetarian.

**Pack Formats:** 75g individual pack, 100g individual pack, 5-pack shrink bundle, 30-pack export carton.

All products comply with Codex Alimentarius standards, EU food labelling regulations (EU 1169/2011), and Halal certification for Muslim consumer markets.`,
    heroImage: '/Packaged Food & Snack/Vietnamese Instant Noodles (OEM).jpg',
    specs: [
      { label: 'Type', value: 'Fried / Air-dried / Rice noodle (Pho)' },
      { label: 'Noodle Weight', value: '65–100g per pack' },
      { label: 'Sodium (per 100g)', value: '1,200–1,600 mg' },
      { label: 'Shelf Life', value: '6 months (fried) / 12 months (air-dried)' },
      { label: 'Flavors', value: 'Beef / Chicken / Shrimp / Vegetarian / Spicy' },
      { label: 'MOQ', value: '5,000 cases (30 packs/case)' },
      { label: 'Lead Time', value: '30–45 days' },
      { label: 'HS Code', value: '1902.30.10' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher (select)', 'EU 1169/2011 Labelling', 'FDA Registered'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'USA', 'Germany', 'Australia', 'Japan', 'Malaysia', 'Nigeria'],
    moq: '5,000 cases (30 packs/case)',
    containerCapacity: '20ft: 1,200–1,500 cases',
    packagingOptions: ['Individual pack (75g/100g)', '5-pack shrink bundle', '30-pack export carton', 'Custom OEM packaging'],
    faqs: [
      { question: 'Do you offer private label instant noodles with our brand name?', answer: 'Yes, private label is our standard offering. We can print your brand name, logo, flavor name, and nutritional information on the packaging. Minimum print quantity is 5,000 packs per SKU.' },
      { question: 'Can you manufacture vegetarian or vegan instant noodles?', answer: 'Yes. Our vegetarian/vegan instant noodle formulations contain no meat, fish, or animal-derived additives. These can carry certified Halal status (confirming no haram ingredients) and COSMOS Vegetarian stamp upon request.' },
    ],
    relatedSlugs: ['canned-tuna-chunks', 'jasmine-rice', 'export-biscuits-crackers', 'snack-foods-export', 'packaged-coffee-products'],
    seoTitle: 'Instant Noodles OEM Manufacturer Vietnam | Private Label Ramen Supplier',
    seoDescription: 'OEM instant noodles from Vietnam. Fried, air-dried, rice noodle (Pho). Beef, chicken, shrimp flavors. Halal, ISO 22000. MOQ 5,000 cases. Private label available.',
    keywords: ['instant noodles manufacturer Vietnam', 'OEM noodles Vietnam', 'private label ramen Vietnam', 'instant noodles supplier', 'Vietnamese noodles export'],
    hsCode: '1902.30.10',
  },
  {
    slug: 'export-biscuits-crackers',
    name: 'Biscuits & Crackers (Export Grade)',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Bulk Biscuits & Crackers — B2B Export for Retailers and Distributors',
    description: "Vietnam manufactures export-grade cream-filled biscuits, sandwich cookies, saltine crackers, and wafer sticks for private label and branded retail distribution. HACCP, Halal, ISO 22000 certified. Available in retail display boxes, shelf-ready cartons, and bulk export cases. MOQ 1,000 cartons.",
    longDescription: `Vietnam's biscuit and cracker manufacturing sector produces a broad range of sweet and savoury baked goods for both domestic consumption and international export. Modern facilities in Ho Chi Minh City and Binh Duong operate continuous tunnel ovens, nitrogen-flushed packaging lines, and automated cream-filling equipment capable of producing 50–200 MT per month for private label buyers.

**Product Range:**
- **Cream-filled sandwich biscuits**: Round or rectangular, vanilla / chocolate / strawberry / orange cream fillings. Weight: 25g single serve to 500g family tin
- **Saltine & soda crackers**: Thin, crisp, lightly salted. Ideal for airline catering, hotel amenities, and retail distribution
- **Butter cookies**: Piped shortbread-style cookies in gift tin or retail bag format. Popular in GCC gift markets
- **Wafer rolls**: Crispy rolled wafers with cream filling in chocolate, vanilla, pandan, and strawberry variants

**Packaging:** Retail bags (nitrogen-flushed, resealable zipper available), display boxes (12–24 individual packs), gift tins (seasonal customisation), export carton (24–48 units).

All products comply with EU Regulation 1169/2011 ingredient labelling. Full nutritional information provided for all destination markets.`,
    heroImage: '/Packaged Food & Snack/Biscuits & Crackers (Export Grade).jpg',
    specs: [
      { label: 'Product Types', value: 'Sandwich / Cracker / Butter / Wafer Roll' },
      { label: 'Cream Fillings', value: 'Vanilla / Chocolate / Strawberry / Pandan' },
      { label: 'Shelf Life', value: '6–12 months (nitrogen-flushed)' },
      { label: 'Pack Weight', value: '25g single serve to 500g family pack' },
      { label: 'MOQ', value: '1,000 export cartons per SKU' },
      { label: 'Lead Time', value: '30–45 days after artwork approval' },
      { label: 'HS Code', value: '1905.31.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher (select)', 'EU 1169/2011 Labelling'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Nigeria', 'Ghana', 'Germany', 'Australia', 'USA', 'Malaysia'],
    moq: '1,000 export cartons per SKU',
    containerCapacity: '20ft: 800–1,200 cartons',
    packagingOptions: ['Retail bag (nitrogen-flushed)', 'Display box (12–24 pcs)', 'Gift tin', 'Export master carton'],
    faqs: [
      { question: 'Can you manufacture biscuits under our private label brand?', answer: 'Yes. We offer full private label biscuit manufacturing including custom formulation, artwork design support, and packaging. Our minimum order is 1,000 cartons per SKU, which supports both initial range testing and retail listing requirements.' },
      { question: 'Do your biscuits carry Halal certification?', answer: 'Yes. All biscuit manufacturing lines are Halal-certified, covering ingredients, processing aids, and packaging materials. Halal certificates are issued per shipment and are accepted across GCC, Southeast Asian, and African markets.' },
    ],
    relatedSlugs: ['vietnamese-instant-noodles', 'candy-confectionery-export'],
    seoTitle: 'Biscuits & Crackers Export Supplier Vietnam | Private Label B2B Wholesale',
    seoDescription: 'Export biscuits and crackers from Vietnam. Cream-filled, saltine, butter cookies, wafer rolls. Halal, ISO 22000. Private label MOQ 1,000 cartons. Export to GCC, Africa, EU.',
    keywords: ['biscuits exporter Vietnam', 'crackers wholesale supplier', 'private label biscuits Vietnam', 'cream biscuits export', 'biscuits manufacturer Vietnam'],
    hsCode: '1905.31.00',
  },
  {
    slug: 'wafers-export',
    name: 'Wafers & Wafer Products',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Cream-Filled Wafers — Bulk Export for Snack Distributors Worldwide',
    description: "Light, crispy multi-layer cream wafers in vanilla, chocolate, strawberry, and hazelnut flavours. Manufactured in Vietnam to EU food safety standards. Available in retail bars (20–45g), multipack flow-wrap bags, and 3 kg bulk catering tins. Halal certified. MOQ 500 cartons.",
    longDescription: `Wafer products represent one of the fastest growing snack categories in emerging markets, combining affordable price points with impulse-purchase format sizes. Vietnam's confectionery manufacturers have invested in modern wafer baking lines capable of producing layered wafer sheets with precision cream injection for consistent texture and flavour delivery.

**Wafer Product Range:**
- **Standard cream wafer bars (20–45g)**: 3–5 cream layers between crispy wafer sheets. Flavours: Vanilla, Chocolate, Strawberry, Hazelnut, Pandan (Asian market variant)
- **Wafer rolls / wafer sticks**: Hollow crispy tubes filled with flavoured cream. Popular in GCC markets
- **Mini wafer bites**: Small rectangular pieces in resealable sharing bags — ideal for impulse and sharing occasions
- **Premium cocoa-coated wafers**: Standard wafer bar enrobed in cocoa compound coating for premium tier positioning

**Quality:** All cream fillings use hydrogenated vegetable fat (trans-fat free where required), confectionery glucose, skim milk powder, and natural or nature-identical flavours. FFA, peroxide value, and microbiological analysis per batch.`,
    heroImage: '/Packaged Food & Snack/Wafers & Wafer Products.jpg',
    specs: [
      { label: 'Types', value: 'Bars / Rolls / Mini Bites / Cocoa-coated' },
      { label: 'Layers', value: '3–5 cream layers' },
      { label: 'Flavours', value: 'Vanilla / Chocolate / Strawberry / Hazelnut / Pandan' },
      { label: 'Weight Range', value: '20g – 45g bar; 3 kg catering tin' },
      { label: 'Shelf Life', value: '9–12 months' },
      { label: 'MOQ', value: '500 cartons per flavour' },
      { label: 'HS Code', value: '1905.32.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Trans-fat Free Declaration'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'Nigeria', 'Germany', 'Australia', 'USA'],
    moq: '500 cartons per flavour/SKU',
    containerCapacity: '20ft: 900–1,100 cartons',
    packagingOptions: ['Flow-wrap individual bar', 'Multi-pack bag (5–10 bars)', 'Display box (24–48 bars)', '3 kg catering tin'],
    faqs: [
      { question: 'Are your wafers suitable for hot climate markets like the GCC and Africa?', answer: 'Yes. We use high-melting-point hydrogenated vegetable fat in our cream fillings, which maintains structural integrity at temperatures up to 35°C. For markets regularly exceeding this, we recommend aluminium foil inner wrap packaging to protect against heat and humidity.' },
    ],
    relatedSlugs: ['export-biscuits-crackers', 'candy-confectionery-export'],
    seoTitle: 'Wafers Export Supplier Vietnam | Cream Wafers Wholesale B2B',
    seoDescription: 'Cream wafers from Vietnam vanilla, chocolate, hazelnut. Halal, ISO 22000. Individual bars, multipacks, catering tins. MOQ 500 cartons. Export to GCC, Africa, EU.',
    keywords: ['wafers exporter Vietnam', 'cream wafers wholesale', 'wafer manufacturer Vietnam', 'wafer bars export', 'snack wafers supplier Vietnam'],
    hsCode: '1905.32.00',
  },
  {
    slug: 'candy-confectionery-export',
    name: 'Candy & Confectionery',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Hard Candy, Lollipops & Soft Chews — Vietnam Confectionery Export',
    description: "Vietnam manufactures a wide range of hard candies, lollipops, soft chewy sweets, and jelly confectionery for export to retail chains, wholesale distributors, and private label buyers. Halal certified, trans-fat free. Available in bulk/gravity feed bags, retail twist bags, and display jars. MOQ 500 kg.",
    longDescription: `Vietnam's confectionery manufacturing sector has developed strong OEM and private label capabilities for the global candy market, with particular expertise in tropical fruit flavours — mango, lychee, jackfruit, dragonfruit — that resonate strongly in Asian, African, and Middle Eastern markets.

**Candy Product Range:**
- **Hard candy / boiled sweets**: Classic ball or pillow shape. Flavours: Tropical fruit, Mint, Cola, Mixed fruit, Sour fruit. Sugar or sugar-free (maltitol/sorbitol base for diabetic-friendly positioning)
- **Lollipops**: Round and flat lollipops on paper stick. Individual twist wrap or bulk packed for promotional use
- **Soft chewy candy (toffee/taffy style)**: Individually twist-wrapped, milk-based or fruit-flavoured. Popular in African and Asian markets
- **Jelly candy**: Gelatin-free (halal) or gelatin-based jelly beans, gummy bears, and worm shapes in tropical fruit flavours
- **Milk candy / coffee candy**: Traditional Southeast Asian style soft milk tablets and coffee-cream chews

**Packaging Options:** Bulk gravity feed bags (1–5 kg), retail twist bags (100–500g), gift jars (500g–1 kg), OPP flow-wrap for bulk.`,
    heroImage: '/Packaged Food & Snack/Candy & Confectionery.jpg',
    specs: [
      { label: 'Types', value: 'Hard candy / Lollipop / Chewy / Jelly' },
      { label: 'Flavours', value: 'Tropical fruit / Mint / Cola / Milk / Coffee' },
      { label: 'Sugar-free Option', value: 'Available (maltitol/sorbitol)' },
      { label: 'Gelatin-free', value: 'Yes (halal-compliant carrageenan base for jellies)' },
      { label: 'Shelf Life', value: '12–18 months (hard candy) / 6–9 months (soft)' },
      { label: 'MOQ', value: '500 kg per flavour' },
      { label: 'HS Code', value: '1704.90.91' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Trans-fat Free', 'Kosher (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Nigeria', 'Ghana', 'Egypt', 'Malaysia', 'Philippines', 'Germany'],
    moq: '500 kg per flavour',
    containerCapacity: '20ft: 8,000–12,000 kg',
    packagingOptions: ['Bulk bag (1–5 kg)', 'Retail twist bag (100–500g)', 'Gift jar (500g–1 kg)', 'Display box assortment'],
    faqs: [
      { question: 'Do you supply Halal-certified gelatin-free jelly candies?', answer: 'Yes. Our jelly candy range uses carrageenan (seaweed-derived) as the gelling agent instead of gelatin, making it fully Halal-compliant. This is our standard formulation for all export markets.' },
      { question: 'Can you produce sugar-free candy for health-conscious markets?', answer: 'Yes. We manufacture sugar-free hard candy and soft chews using maltitol, sorbitol, or isomalt as sugar substitutes. These are popular in European markets and suitable for diabetic-friendly retail positioning.' },
    ],
    relatedSlugs: ['export-biscuits-crackers', 'chocolate-products-export'],
    seoTitle: 'Candy & Confectionery Export Supplier Vietnam | Halal Sweets Wholesale',
    seoDescription: 'Candy and confectionery from Vietnam. Hard candy, lollipops, chews, jelly sweets. Halal, ISO 22000. Bulk and retail. MOQ 500 kg. Export to GCC, Africa, Asia.',
    keywords: ['candy exporter Vietnam', 'confectionery supplier Vietnam', 'halal candy export', 'sweets manufacturer Vietnam', 'candy wholesale Vietnam'],
    hsCode: '1704.90.91',
  },
  {
    slug: 'chocolate-products-export',
    name: 'Chocolate & Cocoa Products',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Chocolate Bars, Coatings & Cocoa — B2B Export for Confectionery Brands',
    description: "Vietnam is a top 10 global cocoa producer via neighboring origins. We export chocolate compound bars, cocoa powder, cocoa butter substitute (CBS), and chocolate-coated snacks for food manufacturers, private label chocolate brands, and confectionery distributors. HACCP, Halal. MOQ 1 MT.",
    longDescription: `While Vietnam is not a major cocoa origin itself, its central geographic position in Southeast Asia and strong food manufacturing infrastructure makes it a viable export platform for chocolate compound products using cocoa sourced from Vietnam's Central Highlands and regional origins including Indonesia and Ivory Coast.

**Chocolate & Cocoa Product Range:**
- **Chocolate compound bars**: Dark (35–55% cocoa), milk chocolate, white chocolate. Individual 30–100g bar formats or 1 kg baking blocks for food service
- **Cocoa powder**: Natural (pH 5.5–6.0) and alkalized Dutch-process (pH 6.5–8.0) cocoa powder. Fat content 10–12% or 20–22%. Used in bakery, beverages, and ice cream
- **Cocoa butter substitute (CBS)**: Lauric-based (coconut/palm kernel derived) CBS for confectionery coating applications — provides snap and gloss comparable to cocoa butter at reduced cost
- **Chocolate-coated products**: Chocolate-coated wafers, biscuits, nuts, and dried fruit for confectionery and gift packing

**Formulation Notes:** Compound chocolate (used in most of our products) replaces cocoa butter with vegetable fat (CBS/CBE), enabling production at lower cost and higher temperature tolerance — critical for tropical market exports.`,
    heroImage: '/Packaged Food & Snack/Chocolate & Cocoa Products.jpg',
    specs: [
      { label: 'Types', value: 'Dark / Milk / White compound; Cocoa powder; CBS' },
      { label: 'Cocoa Content', value: '35–55% (dark); 20–30% (milk)' },
      { label: 'Fat Content (powder)', value: '10–12% or 20–22%' },
      { label: 'Melting Point (CBS)', value: '30–34°C' },
      { label: 'Shelf Life', value: '12–18 months' },
      { label: 'MOQ', value: '1 MT per product type' },
      { label: 'HS Code', value: '1806.32.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Rainforest Alliance (select origins)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'USA', 'Australia', 'Nigeria', 'South Korea', 'UK'],
    moq: '1 MT per product type',
    containerCapacity: '20ft: 14–18 MT',
    packagingOptions: ['30–100g retail bar', '1 kg baking block', '25 kg carton (cocoa powder)', '25 kg bag (CBS)', 'Bulk pellets (16 MT flexibag)'],
    faqs: [
      { question: 'What is the difference between couverture chocolate and compound chocolate?', answer: "Couverture chocolate contains cocoa butter as the fat phase and requires tempering before use, producing the finest quality for premium applications. Compound chocolate replaces cocoa butter with vegetable fat (CBS), making it easier to work with, more heat-stable, and lower cost — preferred for most commercial confectionery manufacturing in tropical markets." },
    ],
    relatedSlugs: ['export-biscuits-crackers', 'candy-confectionery-export'],
    seoTitle: 'Chocolate & Cocoa Products Export | Compound Chocolate Cocoa Powder Supplier',
    seoDescription: 'Chocolate compound bars, cocoa powder, CBS from Vietnam. Halal, ISO 22000. Dark, milk, white compound. MOQ 1 MT. Export to GCC, EU, Africa, USA.',
    keywords: ['chocolate export supplier Vietnam', 'cocoa powder exporter Vietnam', 'compound chocolate wholesale', 'CBS cocoa butter substitute supplier', 'chocolate manufacturer Vietnam'],
    hsCode: '1806.32.00',
  },
  {
    slug: 'packaged-tea-products',
    name: 'Packaged Tea Products',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Retail Tea Bags, Loose Leaf & Specialty Teas — Private Label Export',
    description: "Vietnam's Thai Nguyen, Moc Chau, and Lam Dong highlands produce premium green, black, oolong, and herbal teas. We export retail-ready tea bags (string & tag, envelope, pyramid), loose leaf in caddies, and specialty blended teas with full private label capability. Halal, Organic available. MOQ 500 kg.",
    longDescription: `Building on Vietnam's rich tea cultivation heritage (see our bulk Green Tea category), we offer a retail-focused packaged tea range suitable for supermarket shelf placement, food service, and specialty tea retail. Our packaging facility produces OEM tea bags and loose leaf products for international brands seeking a cost-competitive, quality origin source.

**Packaged Tea Product Range:**
- **Green tea bags**: Standard string-and-tag (2g/bag), envelope-sealed, pyramid (3g/bag). Thai Nguyen OP, Jasmine green tea, roasted green tea (hojicha style)
- **Black tea bags**: Strong black CTC tea for milk tea applications; Vietnamese black orthodox tea with honey and floral notes
- **Herbal & wellness blends**: Lotus flower tea, bitter melon tea, artichoke tea (Vietnamese specialty), ginger lemon, lemongrass
- **Oolong tea**: Ba Vì and Da Lat highland oolongs — lightly oxidized with floral aroma
- **Cold brew sachets**: Oversized pyramid bags for cold water steeping — trending product for summer retail promotion

**Private Label**: Full private label production including tea bag printing, box design, inner foil envelope. Sampling within 10 days.`,
    heroImage: '/Packaged Food & Snack/Packaged Tea Products.jpg',
    specs: [
      { label: 'Types', value: 'Green / Black / Oolong / Herbal / Cold brew' },
      { label: 'Formats', value: 'String-tag bags / Pyramid / Loose leaf / Cold brew sachet' },
      { label: 'Bag Fill', value: '1.5–3g per bag' },
      { label: 'Count Options', value: '20, 25, 50, 100 bags per box' },
      { label: 'Shelf Life', value: '24 months (sealed foil envelope)' },
      { label: 'MOQ', value: '500 kg dry leaf equivalent' },
      { label: 'HS Code', value: '0902.10.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Organic (select)', 'Rainforest Alliance (select)'],
    exportMarkets: ['Pakistan', 'UAE', 'Saudi Arabia', 'Germany', 'USA', 'UK', 'Australia', 'Russia'],
    moq: '500 kg dry leaf equivalent',
    containerCapacity: '20ft: 4–6 MT (packaged)',
    packagingOptions: ['String & tag tea bags', 'Envelope-sealed bags', 'Pyramid bags', 'Loose leaf tin/caddy', 'Cold brew oversized sachet'],
    faqs: [
      { question: 'Can you blend our custom herbal tea formula and produce under our brand?', answer: 'Yes. We offer custom blending services — specify your desired herbs, flowers, and flavour profile and we will develop a formula for your approval. Once approved, we produce to your private label specification with your artwork on box, bag tag, and inner envelope.' },
    ],
    relatedSlugs: ['thai-nguyen-green-tea', 'packaged-coffee-products'],
    seoTitle: 'Packaged Tea Products Export Vietnam | Private Label Tea Bags Loose Leaf Supplier',
    seoDescription: 'Retail packaged tea from Vietnam tea bags, pyramid, loose leaf, herbal blends. Halal, organic available. Private label MOQ 500 kg. Export to GCC, EU, USA.',
    keywords: ['tea bags supplier Vietnam', 'private label tea Vietnam', 'green tea bags export', 'herbal tea exporter Vietnam', 'retail tea manufacturer Vietnam'],
    hsCode: '0902.10.00',
  },
  {
    slug: 'packaged-coffee-products',
    name: 'Packaged Coffee Products',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Ground Coffee, Instant Sticks & Vietnamese Drip Coffee — Private Label Export',
    description: "Vietnam is the world's #2 coffee producer. We export retail-ready ground coffee (robusta/arabica blend), 3-in-1 instant coffee sticks, Vietnamese-style drip coffee filter packs, and cold brew pouches under private label. HACCP, Halal. MOQ 500 kg. Roasted-to-order with 60-day freshness guarantee.",
    longDescription: `Building on Vietnam's status as the world's second largest coffee producer and largest robusta origin, our packaged coffee range converts export-grade green beans into retail-ready consumer products for international distribution.

**Packaged Coffee Product Range:**
- **3-in-1 instant coffee sticks (18–20g)**: The dominant coffee format in Asian and African markets. Coffee, creamer, and sugar premixed. Robusta or Arabica/Robusta blend. Flavours: Original, Mocha, Hazelnut, Coconut (Vietnamese style). Box of 10, 15, 20, or 30 sticks.
- **Ground roasted coffee**: Medium and dark roast blends in 200g, 250g, 500g vacuum-sealed bags with one-way degassing valve. Suitable for drip, espresso, French press, and AeroPress brewing
- **Vietnamese drip filter coffee packs**: Pre-measured 10g coffee packs designed for the traditional Vietnamese phin (drip filter). Available with or without filter included.
- **Cold brew coffee pouches**: Single-use cold brew filter bags (15g) for steep-in-bottle cold brew — trending globally
- **Instant espresso powder**: Freeze-dried or spray-dried Arabica or Robusta instant coffee in 50g–500g packs

All products available for private label with custom blend development, roast profiling, and artwork.`,
    heroImage: '/Packaged Food & Snack/Packaged Coffee Products.jpg',
    specs: [
      { label: 'Types', value: '3-in-1 instant / Ground / Drip filter / Cold brew' },
      { label: 'Bean Origin', value: 'Vietnamese Robusta / Arabica / Blend' },
      { label: 'Roast Levels', value: 'Medium / Medium-dark / Dark (French)' },
      { label: 'Packaging', value: 'Valve bag / Stick pack / Drip pouch / Cold brew sachet' },
      { label: 'Shelf Life', value: '12–24 months (sealed)' },
      { label: 'MOQ', value: '500 kg per SKU' },
      { label: 'HS Code', value: '2101.11.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', '4C Association', 'Rainforest Alliance (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'USA', 'Japan', 'South Korea', 'Australia', 'Malaysia'],
    moq: '500 kg per SKU',
    containerCapacity: '20ft: 5–8 MT (packaged)',
    packagingOptions: ['Stick pack box (10–30 sticks)', 'Valve bag 200–500g', 'Drip filter pouch pack', 'Cold brew sachet multipack', 'Bulk 25 kg bag (instant)'],
    faqs: [
      { question: 'Can you develop a custom 3-in-1 coffee blend with our preferred sweetness and strength level?', answer: 'Yes. We offer 3-in-1 formula development — adjusting the coffee-to-creamer-to-sugar ratio, selecting the robusta/arabica blend split, and dialing in roast level to achieve your target cup profile. Samples are dispatched within 15 business days of brief receipt.' },
    ],
    relatedSlugs: ['robusta-coffee-beans', 'vietnamese-drip-filter-coffee'],
    seoTitle: 'Packaged Coffee Export Vietnam | 3-in-1 Instant Coffee Ground Coffee Private Label',
    seoDescription: 'Packaged coffee from Vietnam 3 in 1 instant sticks, ground coffee, drip filter packs, cold brew. Halal, HACCP. Private label MOQ 500 kg. Export to GCC, EU, Asia.',
    keywords: ['instant coffee Vietnam export', 'ground coffee supplier Vietnam', 'private label coffee Vietnam', '3-in-1 coffee manufacturer Vietnam', 'Vietnamese coffee retail export'],
    hsCode: '2101.11.00',
  },
  {
    slug: 'snack-foods-export',
    name: 'Snack Foods',
    category: 'Packaged Food',
    categorySlug: 'packaged-food-snacks',
    tagline: 'Potato Chips, Rice Crackers & Extruded Snacks — Vietnam B2B Export',
    description: "Vietnam manufactures a broad range of snack foods including prawn crackers, rice crackers, extruded corn puffs, seasoned nuts, and flavoured chips for export to retail distributors and private label buyers. Halal, HACCP. Available in retail snack bags (30–200g), club packs, and display boxes. MOQ 500 cartons.",
    longDescription: `Vietnam's snack food industry has grown rapidly alongside rising disposable incomes and global demand for Asian-origin snack varieties. Modern snack manufacturing facilities in Ho Chi Minh City and Hanoi produce a diverse range of extruded, fried, baked, and seasoned snack products for both domestic and export consumption.

**Snack Food Range:**
- **Prawn crackers (kerupuk)**: Expanded, air-dried uncooked crackers (sold for frying) or pre-fried ready-to-eat prawn chips. Vietnamese, Indonesian, and Malaysian style. A consistent high-volume export to Europe and the Middle East
- **Rice crackers**: Puffed and baked rice crackers in original, seaweed, cheese, and spicy flavours. Low calorie positioning for health-conscious retail
- **Extruded corn puffs / corn curls**: Cheese-flavoured or plain puffed corn snacks in childrens snack and sharing bag formats
- **Pork rinds / chicharrones**: Deep-fried pork skin in hot chilli, BBQ, and original flavours — popular in Southeast Asian and Latin American export markets
- **Seasoned mixed nuts**: Roasted and seasoned cashews, peanuts, and mixed nut blends with chilli-lime, honey-soy, and smoked barbecue coatings

**Flavour Customisation**: All products available with custom seasoning development for regional taste preferences (GCC: mild spice, cardamom-forward; EU: paprika, BBQ; Asia: fish sauce, chilli-lime).`,
    heroImage: '/Packaged Food & Snack/Snack Foods.jpg',
    specs: [
      { label: 'Types', value: 'Prawn crackers / Rice crackers / Corn puffs / Pork rinds / Nuts' },
      { label: 'Flavours', value: 'Original / Cheese / Spicy / Seaweed / BBQ / Honey-soy' },
      { label: 'Pack Weight', value: '30g–200g retail; 1–3 kg club pack' },
      { label: 'Shelf Life', value: '3–9 months (nitrogen-flushed)' },
      { label: 'MOQ', value: '500 cartons per SKU' },
      { label: 'Lead Time', value: '30–45 days' },
      { label: 'HS Code', value: '1905.90.40' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'FSSC 22000 (select facilities)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Netherlands', 'Germany', 'USA', 'Australia', 'Malaysia', 'Nigeria'],
    moq: '500 cartons per SKU',
    containerCapacity: '20ft: 600–900 cartons',
    packagingOptions: ['Retail snack bag (30–200g, N₂-flushed)', 'Club/sharing bag (500g–1 kg)', 'Display box (12–24 units)', 'Bulk catering bag (2–3 kg)'],
    faqs: [
      { question: 'Do you develop custom snack flavours for specific regional markets?', answer: 'Yes. Our flavour development team works with seasoning suppliers to create custom coatings for your target market. GCC flavour preferences (mild spice, garlic, cardamom), EU (paprika, sour cream), and Asian-style (fish sauce, chilli-lime, wasabi) profiles are all within our development capability.' },
    ],
    relatedSlugs: ['export-biscuits-crackers', 'wafers-export'],
    seoTitle: 'Snack Foods Export Supplier Vietnam | Prawn Crackers Rice Crackers Puffs Wholesale',
    seoDescription: 'Snack foods from Vietnam prawn crackers, rice crackers, corn puffs, seasoned nuts. Halal, HACCP. Retail and bulk. MOQ 500 cartons. Export to GCC, EU, Africa.',
    keywords: ['snack foods exporter Vietnam', 'prawn crackers supplier Vietnam', 'rice crackers export Vietnam', 'extruded snacks manufacturer Vietnam', 'snack foods wholesale Vietnam'],
    hsCode: '1905.90.40',
  },
  {
    slug: 'rice-crackers-export',
    name: 'Rice Crackers (Banh Gao)  Export Range',
    category: 'Packaged Food',
    categorySlug: 'packaged food-snacks',
    tagline: 'Vietnamese Rice Crackers  Light, Crispy, Gluten-Free Snack for Global Markets',
    description: 'Export-grade Vietnamese rice crackers (Bánh Gạo)  light, crispy, naturally gluten-free snacks. Original, seaweed, sesame, soy sauce, and spicy variants. Individually wrapped or share-bag format. HACCP, ISO 22000, Halal certified. MOQ 500 cartons. Ideal for Asian grocery, health food retail, and snack import.',
    longDescription: `Rice crackers (Bánh Gạo) are one of Vietnam's most export ready snack categories, with a centuries old production tradition now modernized into HACCP Certified manufacturing facilities supplying international supermarkets, Asian grocery chains, health food retailers, and ethnic specialty food importers across 50+ countries.

Vietnamese rice crackers are made from high quality long-grain white rice (milled, soaked, ground, and formed into round discs), then baked or fried at high temperature to achieve a light, airy, crispy texture with very low fat content compared to wheat based snacks.

**Flavor variants available:**
- **Original (lightly salted)**: Pure rice flavor, clean label
- **Seaweed (Nori)**: Coated with Japanese style roasted seaweed seasoning  most popular export flavor
- **Sesame**: White or black sesame seed coating, nutty flavor
- **Soy sauce**: Umami-rich Japanese-style glaze
- **BBQ / smoky**: Western market preferred variant
- **Spicy chili**: Southeast Asian and Middle Eastern markets
- **Cheese**: Western snack aisle positioning
- **Prawn/Shrimp crackers** (related item): Available from same facility

**Product formats:**
- Mini individual bags: 20g, 30g, 40g (vending, lunchbox, travel retail)
- Standard retail bag: 80g, 100g, 150g
- Share/family bag: 250g, 400g, 500g
- Bulk catering pack: 1 kg, 2.5 kg
- Gift box assortment: Mixed flavors, 200–500g

**Dietary credentials (natural or certifiable):**
- Naturally gluten-free (rice base) — suitable for coeliac-friendly positioning
- Low fat, low sugar
- Vegan (original, sesame, seaweed, soy sauce variants)
- Halal certified`,
    heroImage: '/Packaged Food & Snack/Rice Crackers (Banh Gao) —Export Range.jpg',
    specs: [
      { label: 'Base Ingredient', value: 'Long-grain white rice (≥95% rice content)' },
      { label: 'Gluten Status', value: 'Naturally Gluten-Free (rice base; dedicated facility)' },
      { label: 'Fat Content', value: '3–8% (baked); 12–18% (fried variants)' },
      { label: 'Flavors Available', value: 'Original, Seaweed, Sesame, Soy, BBQ, Chili, Cheese' },
      { label: 'Formats', value: '20g – 500g bags; bulk 1–2.5 kg catering' },
      { label: 'MOQ', value: '500 cartons per SKU' },
      { label: 'Shelf Life', value: '6–12 months (nitrogen-flushed, desiccant)' },
      { label: 'Certifications', value: 'HACCP, ISO 22000, Halal' },
      { label: 'Packaging', value: 'Multi-layer metalized film bag (nitrogen-flushed)' },
    ],
    certifications: ['HACCP Certified', 'ISO 22000:2018', 'Halal (JAKIM/MUIS)', 'Gluten-Free (dedicated facility available)', 'Vegan Suitable (select variants)'],
    exportMarkets: ['USA', 'UK', 'Australia', 'Germany', 'Japan', 'UAE', 'Canada', 'Netherlands'],
    moq: '500 cartons per SKU (approximately 6,000–8,000 retail bags)',
    containerCapacity: '20ft: ~800–1,200 cartons (package-size dependent)',
    packagingOptions: ['Mini bag (20–40g, individual)', 'Retail standup pouch (80–150g)', 'Share bag (250–500g)', 'Bulk catering sack (1–2.5 kg)', 'Gift assortment box', 'Private label custom packaging'],
    faqs: [
      { question: 'Are your rice crackers certified gluten-free for EU and Australian markets?', answer: 'Rice crackers are naturally gluten-free by ingredient composition. For retail positioning requiring gluten-free certification (CODEX Alimentarius ≤20 ppm), we can supply from a dedicated gluten-free production facility with annual third party verification testing. The certification covers all rice-base variants excluding any barley malt or wheat-derived seasoning coatings.' },
      { question: 'Can you produce private label rice crackers with our brand?', answer: 'Yes. Private label is a core service for our rice cracker supply. We require buyer-supplied label artwork in PDF/AI format. Inner pouch printing and outer carton printing are both available. MOQ for private label is 500 cartons per SKU. Pre-production samples with your label are produced for approval before full production run.' },
      { question: 'What is the shelf life and what packaging is used to maintain freshness?', answer: 'Standard shelf life is 6–9 months for baked variants and 9–12 months for fried variants at ambient storage conditions. Freshness is maintained through: multi-layer metalized OPP/PE film bags, nitrogen gas flushing of each bag to displace oxygen, food-grade desiccant sachets for high-humidity destination markets, and heat-sealed airtight seams.' },
    ],
    relatedSlugs: ['dried-pineapple-export', 'canned-sardines-export'],
    seoTitle: 'Vietnam Rice Crackers Exporter | Gluten-Free Banh Gao | Private Label Snacks',
    seoDescription: 'Export-grade rice crackers from Vietnam. Naturally gluten-free, Halal, HACCP certified. Multiple flavors. MOQ 500 cartons. Private label available. Export to USA, EU, AU.',
    keywords: ['rice crackers Vietnam', 'Vietnam rice cracker exporter', 'gluten-free rice crackers', 'banh gao exporter', 'rice snacks private label Vietnam'],
    hsCode: '1905.90.90',
  },
];

// ─── Food Staples Products ────────────────────────────────────────────────────
const foodStaplesProducts: Product[] = [
  {
    slug: 'refined-salt-export',
    name: 'Refined Iodized Salt (Food Grade)',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Food-Grade Refined Salt — Bulk Export for Food Processing & Consumer Markets',
    description: "Vietnam's coastal salt fields in Khanh Hoa and Ninh Thuan produce high quality solar-evaporated sea salt refined to international food grade standards. Available as table salt (iodized), pickling salt, and food processing salt in bulk and consumer packaging.",
    longDescription: `Vietnam's long coastline and ideal climate support extensive solar salt production, particularly in the south-central provinces of Khanh Hoa, Ninh Thuan, and Bình Thuận. After evaporation and initial crystallization in salt fields, sea salt is refined — washed, re-crystallized, and kiln-dried — at modern facilities to achieve the purity and consistency required for food grade, feed grade, and industrial applications.

**Food Grade Salt Products:**
- **Table salt (iodized)**: NaCl ≥ 99.5%, iodized (KIO₃ 25–65 mg/kg as required by destination country), anti-caking agent (E535/E536 Sodium/Potassium Ferrocyanide), fine to coarse granulation
- **Sea salt (non-iodized)**: Natural trace mineral profile, available coarse and fine, popular for specialty food and natural product markets
- **Pickling/canning salt**: Low iodine, anti-caking free, for brining and preservation applications in food manufacturing
- **Industrial food processing salt**: Bulk 1,000 MT+ for food manufacturers (MSG plants, sauce producers, noodle manufacturers)

All food grade salt is produced under HACCP and ISO 22000 management systems. Microbiological testing (total plate count, E. coli, Salmonella) and chemical analysis (NaCl purity, iodine content, heavy metals) are conducted per batch.

Packaging: 25 kg PP woven bags (most popular for export), 1 kg retail bags (private label), 500g cylinder containers (retail), and bulk loose loading for industrial buyers.`,
    heroImage: '/Food Staples/idealdeal-efined lodized Salt (Food Grade).png',
    specs: [
      { label: 'NaCl Purity', value: '≥ 99.5% (food grade)' },
      { label: 'Iodine (KIO₃)', value: '25–65 mg/kg (custom per market req)' },
      { label: 'Moisture', value: '≤ 0.5%' },
      { label: 'Granulation', value: 'Fine (0.1–0.5 mm) / Coarse (0.5–2.0 mm)' },
      { label: 'Anti-caking', value: 'E535 / E536 or None (pickling grade)' },
      { label: 'Heavy Metals', value: 'Cd ≤ 0.1 ppm, Pb ≤ 0.5 ppm, As ≤ 0.1 ppm' },
      { label: 'Packaging', value: '25 kg bag / 1 kg retail / Bulk' },
      { label: 'HS Code', value: '2501.00.21' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'EU Food Grade (Reg. 231/2012)', 'FDA 21 CFR'],
    exportMarkets: ['Bangladesh', 'Philippines', 'Indonesia', 'Ghana', 'Nigeria', 'Cambodia', 'Myanmar', 'Sri Lanka'],
    moq: '1 x 20ft container (≈ 20 MT)',
    containerCapacity: '20 MT per 20ft (25 kg bags)',
    packagingOptions: ['25 kg PP woven bag', '1 kg retail bag', '500g retail cylinder', 'Bulk vessel'],
    faqs: [
      { question: 'What is the difference between iodized and non-iodized salt for export?', answer: 'Many countries mandate iodized salt for public health programs (KIO₃ at 25–50 mg/kg). Industrial buyers often prefer non-iodized salt to maintain recipe consistency. We supply both, with exact iodine content customized to the destination country standard.' },
      { question: 'Can you supply anti-caking free salt for pickling and brining?', answer: 'Yes. Pickling and canning salt is specifically free from anti-caking agents (ferrocyanides) that can cause discoloration in pickled vegetables. This is available in fine granulation specifically for food manufacturing applications.' },
    ],
    relatedSlugs: ['canned-tuna-chunks', 'vietnamese-instant-noodles', 'wheat-flour-export', 'granulated-sugar-export', 'pasta-export', 'rice-products-retail'],
    seoTitle: 'Food Grade Salt Export Vietnam | Iodized Table Salt Bulk Supplier',
    seoDescription: 'Food grade refined salt from Vietnam. Iodized table salt, pickling salt, sea salt. ISO 22000, HACCP, Halal. MOQ 1 container. Export to Africa, Asia, Middle East.',
    keywords: ['food grade salt Vietnam export', 'iodized salt supplier Vietnam', 'sea salt exporter Vietnam', 'bulk salt supplier', 'refined salt export'],
    hsCode: '2501.00.21',
  },
  {
    slug: 'wheat-flour-export',
    name: 'Wheat Flour (All-Purpose)',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'All-Purpose Wheat Flour — Bulk & Retail Export for Food Manufacturers',
    description: "Export-grade all-purpose wheat flour milled from premium hard wheat. Protein 10.5–12.5%. Available in 25 kg PP bags, 50 kg bags, and 1 kg retail packs. HACCP, Halal, ISO 22000 certified. Suitable for bread, biscuits, noodles, pastry, and general food manufacturing. MOQ 1 x 20ft container.",
    longDescription: `Wheat flour is the foundational ingredient of the global food industry. Our export-grade all-purpose flour is milled from carefully selected hard wheat varieties to deliver consistent protein content, water absorption, and baking performance required by commercial food manufacturers and retail consumers worldwide.

**Flour Grades Available:**
- **All-purpose flour (plain flour)**: Protein 10.5–11.5%, ash ≤ 0.55%. Balanced protein-to-starch ratio for versatile use in biscuits, cakes, pastry, sauces, and noodles
- **Bread flour (strong flour)**: Protein 12.0–13.5%, higher gluten development. Optimal for yeast-leavened bread, pizza dough, and puff pastry
- **Cake & pastry flour**: Protein 8.0–9.5%, finely milled for delicate crumb structure. For sponge cakes, shortcrust pastry, and cream biscuits
- **Noodle flour**: Medium-high protein (11.5–12.5%), optimized for noodle texture and cooking loss
- **Self-raising flour**: All-purpose base with 1.5% baking powder and 1% salt premixed for retail convenience

**Quality Parameters:** Moisture ≤ 14.5%, Ash ≤ 0.55% (extra white), Gluten (wet) 28–32%, Falling Number (FN) ≥ 300s (non-sprouted), Zero detectable levels of mycotoxins (AFB1, DON, ZEA).`,
    heroImage: '/Food Staples/Wheat Flour (All-Purpose).jpg',
    specs: [
      { label: 'Protein Content', value: '10.5–12.5% (grade dependent)' },
      { label: 'Moisture', value: '≤ 14.5%' },
      { label: 'Ash Content', value: '≤ 0.55% (extra white)' },
      { label: 'Wet Gluten', value: '28–32%' },
      { label: 'Falling Number', value: '≥ 300 seconds' },
      { label: 'Packaging', value: '1 kg retail / 25 kg PP bag / 50 kg PP bag' },
      { label: 'MOQ', value: '1 x 20ft container (≈ 23 MT)' },
      { label: 'HS Code', value: '1101.00.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'Codex Alimentarius', 'FDA Registered'],
    exportMarkets: ['Bangladesh', 'Philippines', 'Nigeria', 'Ghana', 'Kenya', 'UAE', 'Saudi Arabia', 'Indonesia'],
    moq: '1 x 20ft container (≈ 23 MT)',
    containerCapacity: '23 MT per 20ft (25 kg bags)',
    packagingOptions: ['1 kg retail bag', '25 kg PP woven bag', '50 kg PP woven bag', 'Bulk big bag (1 MT)'],
    faqs: [
      { question: 'What wheat flour grade is best for noodle manufacturing?', answer: 'Noodle manufacturers typically specify a medium-high protein flour (11.5–12.5%) with good gluten extensibility (not just strength) to produce noodles with the right texture and low cooking loss. We supply dedicated noodle flour with GDI and SDI measurements on request.' },
      { question: 'Can you supply flour in retail 1 kg packs under our private label?', answer: 'Yes. We supply flour in 1 kg retail bags with your private label artwork. Minimum order for retail pack program is 1 MT (1,000 bags per pack size).' },
    ],
    relatedSlugs: ['bread-flour-export', 'refined-salt-export'],
    seoTitle: 'Wheat Flour Export Supplier | All-Purpose Flour Bulk B2B Wholesale',
    seoDescription: 'Export wheat flour — all-purpose, bread, cake, noodle grades. HACCP, Halal, ISO 22000. 25 kg bags and retail packs. MOQ 1 container. Export to Africa, Asia, GCC.',
    keywords: ['wheat flour exporter', 'all purpose flour supplier', 'bulk wheat flour export', 'flour manufacturer wholesale', 'wheat flour B2B supplier'],
    hsCode: '1101.00.00',
  },
  {
    slug: 'bread-flour-export',
    name: 'Bread Flour (Strong Flour)',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'High-Protein Bread Flour — Bulk Export for Bakeries & Food Manufacturers',
    description: "High-protein strong bread flour (12.0–13.5% protein) for professional bakers, artisan bread producers, and food manufacturers. Excellent gluten development, high water absorption, and consistent fermentation performance. HACCP, Halal. Available in 25 kg bags and 1 kg retail packs. MOQ 1 container.",
    longDescription: `Bread flour (also called strong flour or high-gluten flour) is the essential ingredient for any yeast-leavened baked goods. Its high protein content (12.0–13.5%) enables the development of strong gluten networks that trap carbon dioxide from yeast fermentation, producing the open crumb structure, chew, and crust characteristic of quality bread.

**Applications:**
- **Artisan and commercial bread**: Pan bread, French baguettes, sourdough, and rye blends
- **Pizza dough**: High-protein flour creates the elastic, extensible dough required for hand-tossed and commercial pizza
- **Puff pastry**: Laminated doughs require strong gluten to hold the butter layers without tearing
- **Bagels and pretzels**: Dense, chewy bread products that need maximum gluten development
- **Naan and flatbreads**: Middle Eastern and South Asian breads that require strong flour for the characteristic chew

**Technical Specifications:**
Strong flour is characterized by high wet gluten content (32–38%), excellent water absorption (62–68%), and Farinograph stability time ≥ 7 minutes — all indicators of consistent baking performance across seasons and production batches.

Available bleached or unbleached. Enzyme-enriched (amylase, xylanase) bakery grades available upon specification.`,
    heroImage: '/Food Staples/Bread Flour (Strong Flour).jpg',
    specs: [
      { label: 'Protein Content', value: '12.0–13.5%' },
      { label: 'Wet Gluten', value: '32–38%' },
      { label: 'Water Absorption', value: '62–68% (Farinograph)' },
      { label: 'Stability', value: '≥ 7 min (Farinograph)' },
      { label: 'Ash Content', value: '≤ 0.60%' },
      { label: 'Falling Number', value: '≥ 300 seconds' },
      { label: 'MOQ', value: '1 x 20ft container (≈ 23 MT)' },
      { label: 'HS Code', value: '1101.00.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'Germany', 'Australia', 'USA', 'Nigeria', 'UK'],
    moq: '1 x 20ft container (≈ 23 MT)',
    containerCapacity: '23 MT per 20ft (25 kg bags)',
    packagingOptions: ['1 kg retail bag', '25 kg PP woven bag', '50 kg PP woven bag'],
    faqs: [
      { question: 'What is the difference between all-purpose flour and bread flour?', answer: 'Bread flour has a higher protein content (12–13.5%) compared to all-purpose flour (10–11.5%). This extra protein creates more gluten when mixed, giving yeast-bread doughs the structural strength needed to rise properly and produce the desired chewy texture and open crumb.' },
    ],
    relatedSlugs: ['wheat-flour-export', 'granulated-sugar-export'],
    seoTitle: 'Bread Flour Export Supplier | Strong High-Protein Flour Wholesale B2B',
    seoDescription: 'Bread flour (strong flour) 12–13.5% protein. Halal, HACCP, ISO 22000. 25 kg bags. MOQ 1 container. B2B export to bakeries, food manufacturers, distributors.',
    keywords: ['bread flour exporter', 'strong flour wholesale supplier', 'high protein flour export', 'bakers flour B2B', 'bulk bread flour supplier'],
    hsCode: '1101.00.00',
  },
  {
    slug: 'granulated-sugar-export',
    name: 'Granulated White Sugar',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Refined White Sugar — Bulk & Retail Export for Food Industry & Distributors',
    description: "Premium refined granulated white sugar (ICUMSA 45 and 100) for food manufacturing, retail, and food service distribution. Polarization ≥ 99.80%, moisture ≤ 0.04%. Available in 25 kg PP bags, 50 kg bags, and 1 kg retail packs. Halal, HACCP, Kosher. MOQ 1 x 20ft container.",
    longDescription: `Refined white sugar is the world's most traded food commodity, essential to every segment of the food and beverage industry. We export Refined Standard (ICUMSA 45–150) and Very High Polarization (VHP, ICUMSA 800–1,200) sugar to food manufacturers, retail distributors, and bulk industrial buyers.

**Sugar Grade Guide:**
- **ICUMSA 45 (white refined)**: Sparkling white, the benchmark for retail table sugar and premium food manufacturing. Polarization ≥ 99.80%, ICUMSA ≤ 45 RBU color units
- **ICUMSA 100 (fine granulated)**: Slightly off-white, commonly used in bakery and confectionery manufacturing where visual appearance in final product is less critical
- **ICUMSA 150 (plantation white)**: Minimally refined direct-consumption sugar suitable for general food processing in cost-sensitive markets

**Physical Properties:**
Granulation: Fine (0.2–0.5 mm), Medium (0.5–1.0 mm), Coarse (1.0–2.0 mm) — specify per application requirement. Moisture ≤ 0.04% ensures free-flowing powder without caking in tropical climates.

Comprehensive Certificate of Analysis (COA) provided per shipment including polarization, ICUMSA color, moisture, conductivity ash, dextran, starch, and microbiological analysis.`,
    heroImage: '/Food Staples/Granulated White Sugar.jpg',
    specs: [
      { label: 'Grade', value: 'ICUMSA 45 / 100 / 150' },
      { label: 'Polarization', value: '≥ 99.80%' },
      { label: 'ICUMSA Color', value: '≤ 45 RBU (premium white)' },
      { label: 'Moisture', value: '≤ 0.04%' },
      { label: 'Conductivity Ash', value: '≤ 0.04%' },
      { label: 'Granulation', value: 'Fine / Medium / Coarse (specify)' },
      { label: 'MOQ', value: '1 x 20ft container (≈ 24 MT)' },
      { label: 'HS Code', value: '1701.99.90' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'Codex Alimentarius'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Bangladesh', 'Nigeria', 'Ghana', 'Indonesia', 'Philippines', 'Egypt'],
    moq: '1 x 20ft container (≈ 24 MT)',
    containerCapacity: '24 MT per 20ft (50 kg bags)',
    packagingOptions: ['1 kg retail bag', '25 kg PP woven bag', '50 kg PP woven bag', 'Bulk big bag (1 MT)'],
    faqs: [
      { question: 'What is ICUMSA and why does the number matter for sugar buyers?', answer: "ICUMSA (International Commission for Uniform Methods of Sugar Analysis) is the internationally recognized color measurement system for refined sugar. Lower ICUMSA numbers indicate whiter, more refined sugar: ICUMSA 45 is the highest grade used in retail, while ICUMSA 150 is suitable for industrial food manufacturing where color is less critical." },
    ],
    relatedSlugs: ['brown-sugar-export', 'sugar-cubes-export'],
    seoTitle: 'Granulated White Sugar Export | ICUMSA 45 Bulk Supplier B2B',
    seoDescription: 'Refined white sugar ICUMSA 45/100 from Vietnam. Halal, HACCP, Kosher. 25–50 kg bags and retail packs. MOQ 1 container. Export to GCC, Africa, Asia.',
    keywords: ['white sugar exporter', 'ICUMSA 45 sugar supplier', 'granulated sugar wholesale', 'refined sugar export', 'sugar B2B supplier'],
    hsCode: '1701.99.90',
  },
  {
    slug: 'sugar-cubes-export',
    name: 'Sugar Cubes',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'White & Brown Sugar Cubes — Retail & Hotel/Catering Export Supply',
    description: "Refined white and demerara brown sugar cubes for hotel amenity programs, tea room service, restaurant catering, and retail distribution. Standard 4g cubes, oblong and rectangular formats. Individually wrapped and box-packed options. Halal, HACCP. MOQ 500 cartons.",
    longDescription: `Sugar cubes are a premium-format food staple product with high demand in hotel and catering supply chains, tea room service, and retail markets seeking portion-controlled convenience. Our sugar cubes are produced from high quality ICUMSA 45 (white) and raw cane (demerara/brown) sugar compressed to precise weight and hardness standards.

**Product Range:**
- **White sugar cubes**: Compressed refined white sugar (ICUMSA 45). Standard 4g cube, 5g cube. Regular and oblong rectangular shapes
- **Brown (demerara) sugar cubes**: Compressed golden demerara sugar with molasses aroma. 5g cube for premium tea and coffee service
- **Flavoured sugar sticks**: Single-portion sugar crystals in paper sticks (5g) — popular for coffee shop and restaurant service

**Packaging Configurations:**
- **Retail box**: 100-cube and 500-cube consumer retail packaging
- **Hotel amenity**: 2-cube or 4-cube individual sachets (paper or poly) for in-room tea and coffee service
- **Bulk catering carton**: 1 kg, 2 kg, 5 kg cartons for food service and catering supply
- **Display jar**: 250–500g glass or PET jar for counter display

All products comply with EU food contact materials regulations and are individually date-stamped per carton for traceability.`,
    heroImage: '/Food Staples/Sugar Cubes.jpg',
    specs: [
      { label: 'Types', value: 'White (ICUMSA 45) / Demerara brown' },
      { label: 'Cube Weight', value: '4g or 5g per cube (specify)' },
      { label: 'Shape', value: 'Square / Oblong rectangular' },
      { label: 'Hardness', value: '40–60 N (Kahl press strength)' },
      { label: 'Shelf Life', value: '24 months (dry storage)' },
      { label: 'MOQ', value: '500 cartons' },
      { label: 'HS Code', value: '1701.91.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'EU Food Contact Materials'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'UK', 'France', 'Australia', 'Egypt', 'Turkey'],
    moq: '500 cartons',
    containerCapacity: '20ft: 12,000–15,000 cartons (retail box)',
    packagingOptions: ['100-cube retail box', '500-cube retail box', '2/4-cube hotel sachet', '1–5 kg catering carton', 'Counter display jar'],
    faqs: [
      { question: 'Do you supply individual wrapped sugar cubes for hotel amenity programs?', answer: 'Yes. We produce individually wrapped (paper or polypropylene wrap) sugar cubes in 2-cube and 4-cube portion sachets specifically for hotel in-room service and restaurant table service. Custom branding on wrapper is available from MOQ 50,000 pieces.' },
    ],
    relatedSlugs: ['granulated-sugar-export', 'brown-sugar-export'],
    seoTitle: 'Sugar Cubes Export Supplier | White Brown Sugar Cubes Wholesale B2B',
    seoDescription: 'Sugar cubes — white and demerara brown. Retail boxes, hotel amenity sachets, catering cartons. Halal, HACCP. MOQ 500 cartons. Export to GCC, EU, worldwide.',
    keywords: ['sugar cubes supplier', 'sugar cubes wholesale export', 'hotel sugar cubes supplier', 'white sugar cubes exporter', 'demerara sugar cubes B2B'],
    hsCode: '1701.91.00',
  },
  {
    slug: 'brown-sugar-export',
    name: 'Brown Sugar & Raw Cane Sugar',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Brown Sugar, Demerara & Raw Cane Sugar — Bulk Export Supplier',
    description: "Natural light and dark brown sugar, demerara, and raw cane sugar (VHP/ICUMSA 800–1,200) for food manufacturing, bakery, beverage, and retail distribution. Rich molasses flavour profile. 25 kg PP bags and 1 kg retail packs. Halal, HACCP. MOQ 1 x 20ft container.",
    longDescription: `Brown sugar and raw cane sugars occupy a distinct market position — prized by bakers, brewers, and specialty food manufacturers for their molasses content, which contributes moisture-retention, colour depth, and complex caramel notes impossible to replicate with refined white sugar.

**Product Range:**
- **Light brown sugar**: 2–3% molasses content. Golden colour. Preferred for cookies, sauces, cakes, and marinades where subtle caramel notes are desired
- **Dark brown sugar**: 6–8% molasses content. Deep brown colour and strong molasses flavour. For gingerbread, barbecue sauces, molasses cookies, and dark ales
- **Demerara sugar**: Large golden crystals with light molasses coating. Crunchy texture makes it ideal for coffee stirring, baking toppings, and premium retail
- **Muscovado**: Unrefined, minimally processed raw cane sugar retaining full natural molasses. Intense flavour. Specialty bakery and artisan food market positioning
- **VHP raw sugar (ICUMSA 800–1,200)**: Very High Polarization raw sugar for refinery input, industrial food processing, and fermentation (ethanol, rum production)

Moisture content controlled to ≤ 3.5% for brown sugars to prevent caking during shipping in tropical conditions.`,
    heroImage: '/Food Staples/Brown Sugar & Raw Cane Sugar.jpg',
    specs: [
      { label: 'Types', value: 'Light brown / Dark brown / Demerara / Muscovado / VHP raw' },
      { label: 'Molasses Content', value: '2–3% (light) to 6–8% (dark)' },
      { label: 'ICUMSA Color', value: '800–2,000 RBU (grade dependent)' },
      { label: 'Moisture', value: '≤ 3.5%' },
      { label: 'Polarization', value: '≥ 96.5% (VHP)' },
      { label: 'MOQ', value: '1 x 20ft container (≈ 23 MT)' },
      { label: 'HS Code', value: '1701.91.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'Non-GMO (select)'],
    exportMarkets: ['Germany', 'USA', 'UK', 'Australia', 'UAE', 'Japan', 'Netherlands', 'Canada'],
    moq: '1 x 20ft container (≈ 23 MT)',
    containerCapacity: '23 MT per 20ft (25 kg bags)',
    packagingOptions: ['1 kg retail bag', '25 kg PP woven bag', '50 kg PP bag (VHP raw)'],
    faqs: [
      { question: 'What is the difference between brown sugar and raw cane sugar?', answer: 'Brown sugar is refined white sugar with molasses syrup added back (or partially retained) to achieve the desired colour and flavour. Raw cane sugar (like VHP or muscovado) is minimally processed, with natural molasses retained from the cane juice. Raw sugar has more complex flavour but less consistent composition than controlled brown sugar.' },
    ],
    relatedSlugs: ['granulated-sugar-export', 'sugar-cubes-export'],
    seoTitle: 'Brown Sugar Export Supplier | Demerara Raw Cane Sugar Wholesale B2B',
    seoDescription: 'Brown sugar, demerara, raw cane sugar VHP. Halal, HACCP. 25 kg bags and retail packs. MOQ 1 container. Export to EU, USA, GCC, Africa, Asia.',
    keywords: ['brown sugar exporter', 'demerara sugar supplier', 'raw cane sugar wholesale', 'VHP sugar export', 'brown sugar bulk supplier'],
    hsCode: '1701.91.00',
  },
  {
    slug: 'pasta-export',
    name: 'Pasta (Durum Wheat Semolina)',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Dry Pasta — Bulk & Retail Export for Distributors and Food Service',
    description: "Export-grade dry pasta made from 100% durum wheat semolina. Penne, fusilli, farfalle, rigatoni, and specialty shapes. Bronze-die extruded for rough texture and superior sauce adhesion. Slow-dried for structural integrity. HACCP, Halal. Available in 500g retail bags and 5 kg catering packs. MOQ 1,000 cartons.",
    longDescription: `Dry pasta is a global food staple with consistent demand across all income segments and geographies. Our export pasta range is manufactured from 100% durum wheat semolina (semolina, not whole wheat — for the traditional yellow colour and firm al dente texture) using bronze-die extrusion and slow drying techniques associated with premium Italian-style pasta.

**Shape Range:**
- **Long shapes**: Spaghetti (no. 3, 5, 7), Linguine, Fettuccine, Vermicelli (thin spaghetti)
- **Short shapes**: Penne rigate, Penne lisce, Fusilli, Farfalle, Rigatoni, Conchiglie, Orecchiette
- **Specialty / regional shapes**: Ditali, Orzo, Rotini, Cavatappi
- **Egg pasta**: Tagliatelle, Pappardelle — with pasteurized liquid egg for authentic texture

**Extrusion Method:**
- **Bronze-die (trafila al bronzo)**: Creates rough, porous surface for superior sauce adhesion. Premium positioning
- **Teflon-die**: Smooth surface, faster production, lower cost. Standard commercial grade

**Drying Process:** Slow drying at 40–80°C over 8–20 hours preserves protein network integrity and produces pasta that maintains al dente texture during cooking without becoming mushy. Fast-dried pasta (high temperature / short time) is more fragile and has softer post-cooking texture.`,
    heroImage: '/Food Staples/idealdeal-Pasta (Durum Wheat Semolina).png',
    specs: [
      { label: 'Base Ingredient', value: '100% durum wheat semolina' },
      { label: 'Protein', value: '12.0–13.0%' },
      { label: 'Moisture', value: '≤ 12.5%' },
      { label: 'Extrusion', value: 'Bronze-die (premium) / Teflon-die (standard)' },
      { label: 'Cooking Time', value: '8–12 minutes (shape dependent)' },
      { label: 'Cooking Loss', value: '≤ 8%' },
      { label: 'MOQ', value: '1,000 cartons (500g retail)' },
      { label: 'HS Code', value: '1902.19.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'USA', 'Australia', 'Germany', 'Nigeria', 'UK', 'Canada'],
    moq: '1,000 cartons (500g retail) per shape',
    containerCapacity: '20ft: 2,000–2,500 cartons (500g)',
    packagingOptions: ['250g retail bag', '500g retail bag', '1 kg retail bag', '5 kg catering bag', '10 kg food service bag'],
    faqs: [
      { question: 'What is the shelf life of your dry pasta and how should it be stored?', answer: 'Dry pasta (≤ 12.5% moisture) has a shelf life of 24–36 months when stored in a cool, dry environment away from direct sunlight. No refrigeration is required. Packaging in sealed polyethylene bags or cardboard cartons with moisture barrier provides adequate protection during sea freight.' },
    ],
    relatedSlugs: ['spaghetti-export', 'wheat-flour-export'],
    seoTitle: 'Pasta Export Supplier | Dry Pasta Bulk Wholesale B2B Durum Wheat',
    seoDescription: 'Dry pasta from 100% durum wheat semolina. Penne, fusilli, farfalle and more. Halal, HACCP. 500g retail and bulk. MOQ 1,000 cartons. Export to GCC, EU, Africa.',
    keywords: ['pasta exporter', 'dry pasta supplier wholesale', 'durum wheat pasta export', 'pasta B2B supplier', 'penne fusilli wholesale'],
    hsCode: '1902.19.00',
  },
  {
    slug: 'spaghetti-export',
    name: 'Spaghetti',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Export-Grade Spaghetti — Durum Semolina, Bulk & Retail Supply',
    description: "Classic spaghetti in No. 3 (thin), No. 5 (standard), and No. 7 (thick) gauge from 100% durum wheat semolina. Bronze-die extruded for authentic sauce-holding texture. 400g, 500g, 1 kg retail packs and 5 kg food service. Halal, HACCP, ISO 22000. MOQ 1,000 cartons.",
    longDescription: `Spaghetti is the world's most recognised pasta shape and one of the most consistently traded food staple products. Its universal appeal, long shelf life, and ease of preparation make it a mainstay of retail distribution, food aid programs, and food service supply chains globally.

**Spaghetti Gauge Options:**
- **Spaghettini (No. 3)**: 1.4–1.6 mm diameter. Thin, quick-cooking (7–9 min). Paired with light oil or cream sauces
- **Spaghetti (No. 5)**: 1.8–2.0 mm diameter. Standard gauge, the most universally traded size. Cooking time 9–11 min
- **Spaghettoni (No. 7)**: 2.2–2.5 mm diameter. Thick, robust. For hearty meat sauces and slow-cooked ragù. Cooking time 11–14 min

**Production Quality Markers:**
- **Translucency**: High quality durum spaghetti is slightly translucent when held to light — indicating proper semolina hydration and extrusion
- **Break resistance**: Should snap cleanly with a crisp sound, not crumble
- **Post-cooking texture**: Firm, al dente, not mushy after correct cooking time. Measured objectively as Texture Profile Analysis (TPA) hardness ≥ 5.0 N

**Packaging:** 400g, 500g, and 1 kg retail packs in clear or opaque window polyethylene bags or cardboard cartons. Private label printing available. Neck-banded bundles for catering.`,
    heroImage: '/Food Staples/idealdeal-Spaghetti.png',
    specs: [
      { label: 'Gauge Options', value: 'No. 3 (1.4 mm) / No. 5 (2.0 mm) / No. 7 (2.5 mm)' },
      { label: 'Base', value: '100% durum wheat semolina' },
      { label: 'Protein', value: '12.0–13.0%' },
      { label: 'Moisture', value: '≤ 12.5%' },
      { label: 'Cooking Time', value: '7–14 min (gauge dependent)' },
      { label: 'Shelf Life', value: '24–36 months' },
      { label: 'MOQ', value: '1,000 cartons (500g)' },
      { label: 'HS Code', value: '1902.11.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Nigeria', 'Egypt', 'USA', 'Germany', 'Australia', 'UK'],
    moq: '1,000 cartons (500g) per gauge',
    containerCapacity: '20ft: 2,200–2,600 cartons (500g)',
    packagingOptions: ['400g retail bag', '500g retail bag', '1 kg retail bag', '5 kg food service', 'Neck-banded bulk bundles'],
    faqs: [
      { question: 'Which spaghetti gauge is most popular for export markets?', answer: 'No. 5 (standard gauge, 2.0 mm) is by far the most universally demanded gauge globally and represents approximately 70% of spaghetti export volumes. We recommend starting with No. 5 for initial range entry, with No. 3 as an addition for markets with lighter sauce preferences.' },
    ],
    relatedSlugs: ['pasta-export', 'wheat-flour-export'],
    seoTitle: 'Spaghetti Export Supplier | Durum Wheat Spaghetti Wholesale B2B',
    seoDescription: 'Spaghetti from 100% durum wheat semolina. No. 3, 5, 7 gauge. Halal, HACCP. 500g retail and food service packs. MOQ 1,000 cartons. Export to GCC, Africa, EU.',
    keywords: ['spaghetti exporter', 'spaghetti wholesale supplier', 'durum wheat spaghetti export', 'spaghetti bulk B2B', 'spaghetti manufacturer export'],
    hsCode: '1902.11.00',
  },
  {
    slug: 'rice-products-retail',
    name: 'Rice Products (Retail Packs)',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Retail-Packed Vietnamese Rice — Private Label for Supermarkets & Distributors',
    description: "Retail-ready packaged Vietnamese rice including jasmine (fragrant), parboiled, sticky glutinous, and quick-cook varieties. 1 kg, 2 kg, 5 kg retail vacuum packs with private label capability. HACCP, Halal. Ideal for supermarket ranging and ethnic food distribution. MOQ 1,000 packs per SKU.",
    longDescription: `While our bulk rice category serves container-load commodity buyers, this retail packaged rice program is designed for supermarket buyers, ethnic food distributors, and retail brands who need consumer-ready packaging with accurate nutritional labelling, barcodes, and private label branding.

**Retail Rice Range:**
- **Jasmine rice (fragrant long grain)**: Vietnam's most exported premium rice variety. Aromatic, slightly sticky when cooked. ST25 (multi-award-winning variety), Nang Thom varieties available
- **Parboiled rice**: Partially pre-cooked under pressure then dried. Firmer grain, higher nutritional retention, longer shelf life. Popular in African and Middle Eastern markets
- **Glutinous / sticky rice**: Short-grain, waxy rice variety that becomes very sticky when cooked. Essential in Southeast and East Asian cuisine. Ideal for ethnic food retail sections
- **Quick-cook (instant) rice**: Pre-cooked and re-dried rice that rehydrates in 5 minutes. Sold in boil-in-bag format for convenience retail

**Packaging:** 1 kg and 2 kg vacuum-sealed poly bags with resealable zipper (retail), 5 kg and 10 kg woven PP bags with inner poly liner (catering/food service). Full private label including nutritional panel, barcode, QR traceability code available.`,
    heroImage: '/Food Staples/idealdeal-Rice Products (Retail Packs)idealdeal-Rice Products (Retail Packs).png',
    specs: [
      { label: 'Varieties', value: 'Jasmine / Parboiled / Glutinous / Quick-cook' },
      { label: 'Moisture', value: '≤ 14%' },
      { label: 'Broken Grains', value: '≤ 2% (premium) / ≤ 5% (standard)' },
      { label: 'Retail Pack Sizes', value: '1 kg / 2 kg / 5 kg' },
      { label: 'Shelf Life', value: '18–24 months' },
      { label: 'MOQ', value: '1,000 packs per SKU/variety' },
      { label: 'HS Code', value: '1006.30.90' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Phytosanitary Certificate', 'Vietnam Export Standard'],
    exportMarkets: ['Germany', 'UK', 'USA', 'Australia', 'France', 'Netherlands', 'Japan', 'Canada'],
    moq: '1,000 packs per SKU',
    containerCapacity: '20ft: 5,000–8,000 packs (1–2 kg packs)',
    packagingOptions: ['1 kg vacuum poly bag', '2 kg vacuum poly bag', '5 kg woven PP bag', '10 kg food service bag', 'Boil-in-bag (quick-cook)'],
    faqs: [
      { question: 'Can you print our supermarket private label on the rice packaging?', answer: 'Yes. We supply retail-packed rice with full private label printing including your brand logo, product name, nutritional information table (EU/GCC/Australian format), barcode (EAN-13 or UPC), and origin declaration. Artwork setup is free from MOQ 1,000 packs. Sampling within 10 days.' },
    ],
    relatedSlugs: ['jasmine-rice', 'glutinous-sticky-rice'],
    seoTitle: 'Retail Packaged Vietnamese Rice | Private Label Rice Supplier Wholesale',
    seoDescription: 'Retail-packed Vietnamese rice — jasmine, parboiled, glutinous. 1–5 kg packs. Private label. HACCP, Halal. MOQ 1,000 packs. Export to EU, USA, Australia, GCC.',
    keywords: ['retail packaged rice supplier', 'private label rice Vietnam', 'jasmine rice retail packs', 'supermarket rice supplier', 'Vietnamese rice private label'],
    hsCode: '1006.30.90',
  },
  {
    slug: 'dried-lentils-export',
    name: 'Dried Lentils (Red, Green & Black — Repackaged Export)',
    category: 'Food Staples',
    categorySlug: 'food-staples',
    tagline: 'Dried Lentils Repackaged & Exported from Vietnam Halal, HACCP, Custom Label',
    description: 'Dried lentils (red split, green whole, black beluga) sourced, cleaned, graded, and repackaged in Vietnam for export. Retail bags (500g, 1 kg), catering packs (5 kg, 25 kg), and bulk sacks. Halal certified. HACCP and ISO 22000 repackaging facility. Private label available. MOQ 1 x 20ft container.',
    longDescription: `Vietnam operates as a significant regional repackaging and re-export hub for dried pulses including lentils, chickpeas, and dried beans — sourcing from primary production origins (India, Canada, Australia, Turkey) and processing through HACCP Certified facilities in Ho Chi Minh City for value-added repackaging, grading, and re-export to regional markets.

This supply model is particularly suited for buyers in Southeast Asia, the Middle East, and Africa who prefer a regional supplier offering shorter lead times, smaller lot flexibility, Halal certification from ASEAN-recognized bodies, and Vietnamese food authority export health certificates.

**Lentil varieties handled:**

**Red Split Lentils (Masoor Dal):** 
- Origin: Canada, Australia, India (buyer choice)
- Size: Diameter 2.0–3.5 mm, uniform split
- Color: Bright orange-red, no discoloration
- Moisture: ≤14%
- Admixture: ≤1.0%

**Green Whole Lentils:**
- Origin: Canada or Australia
- Size: Diameter 3.0–4.0 mm
- Color: Medium green, uniform
- Split/damaged: ≤3%

**Black Lentils (Beluga/Urad):**
- Origin: India or Canada
- Size: Small diameter 2.0–3.0 mm
- Glistening black, whole, polished

**Value-added services:**
- Cleaning and destoning (gravity separator)
- Color sorting (optical sorter removes discolored grains)
- Moisture adjustment to target specification
- Custom repackaging in any bag size and material
- Private label printing (offset or digital)
- Halal certification (JAKIM/MUI recognized)
- Export health certificate from Vietnam Food Safety Authority

**Application segments served:** Food retail, food service wholesale, humanitarian food aid programs, meal kit assembly, restaurant supply chains.`,
    heroImage: '/Food Staples/idealdeal-Dried Lentils Red Green Black Repackaged Export.png',
    specs: [
      { label: 'Varieties', value: 'Red Split / Green Whole / Black (Beluga/Urad)' },
      { label: 'Origin', value: "Canada / Australia / India (buyer's choice)" },
      { label: 'Moisture Content', value: '≤14%' },
      { label: 'Foreign Matter', value: '≤0.5%' },
      { label: 'Admixture', value: '≤1.0%' },
      { label: 'Packaging', value: '500g / 1 kg / 5 kg / 25 kg / 50 kg / bulk' },
      { label: 'MOQ', value: '1 x 20ft container (~18–20 MT repackaged)' },
      { label: 'Lead Time', value: '14–21 days from order confirmation' },
      { label: 'Certifications', value: 'HACCP, Halal, ISO 22000, Export Health Cert.' },
    ],
    certifications: ['HACCP Certified', 'ISO 22000:2018', 'Halal (JAKIM/MUI recognized)', 'Vietnam Food Safety Authority Export Certificate', 'Non-GMO Declarable'],
    exportMarkets: ['UAE', 'Saudi Arabia', 'Indonesia', 'Philippines', 'Malaysia', 'Australia', 'West Africa', 'UK'],
    moq: '1 x 20ft container (~18–20 MT)',
    containerCapacity: '20ft: ~18–20 MT (depending on packaging format); 40ft: ~25–27 MT',
    packagingOptions: ['500g retail bag (standup pouch)', '1 kg retail bag', '5 kg catering bag', '25 kg woven PP sack', '50 kg woven PP sack', 'Custom private label packaging'],
    faqs: [
      { question: 'What is the origin of the lentils? Are they Vietnamese?', answer: 'Lentils are not grown commercially in Vietnam. We source raw lentils from primary producing countries (Canada, Australia, India) and perform value-added services in Vietnam: cleaning, color sorting, grading, and repackaging to buyer specification. The resulting product is exported with a Vietnamese food safety export certificate and Halal certificate from ASEAN-recognized certifying bodies.' },
      { question: 'Can you supply Halal-certified lentils for Middle East markets?', answer: 'Yes. All lentil repackaging is conducted in our Halal-certified facility (certified by a JAKIM or MUI-recognized body). Halal certificates are issued per batch and cover all varieties. For GCC market requirements, we work with certifying bodies recognized by the Gulf countries\u2019 import standards.' },
      { question: 'What private label packaging options are available?', answer: 'We offer full private label service including: design and print of retail standup pouches (500g, 1 kg) in up to 8-color flexographic printing, woven PP sack printing (1-2 colors) for 5–50 kg formats, nutritional labeling to EU, GCC, or Australian regulatory standards, barcode assignment, and batch coding. Artwork lead time is 7–10 days; production of private label packs begins within 5 days of artwork approval.' },
    ],
    relatedSlugs: ['jasmine-rice-5pc', 'parboiled-rice-export'],
    seoTitle: 'Vietnam Dried Lentils Exporter | Halal HACCP Red Green Black Lentils | Private Label',
    seoDescription: 'Dried lentils (red, green, black) repackaged and exported from Vietnam. Halal, HACCP, ISO 22000. MOQ 1 x 20ft container. Private label available. Export to Middle East, ASEAN, Africa.',
    keywords: ['dried lentils Vietnam exporter', 'halal lentils supplier', 'red lentils exporter Vietnam', 'private label lentils', 'dried pulses repackaging Vietnam'],
    hsCode: '0713.40.00',
  },
];

// ─── Edible Oils & Fats Products ──────────────────────────────────────────────
const edibleOilsProducts: Product[] = [
  {
    slug: 'refined-coconut-oil',
    name: 'Refined Coconut Oil (RBD)',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'RBD Coconut Oil from Vietnam Food, Cosmetic & Industrial Grade',
    description: "Vietnam's Mekong Delta and coastal provinces produce high quality coconut oil from Cocos nucifera. Our RBD (Refined, Bleached, Deodorized) coconut oil meets international food standards with FFA ≤ 0.1%, moisture ≤ 0.1%, and iodine value 7–11. Available in bulk tankers, IBC, drums, and consumer packing.",
    longDescription: `Vietnam's Bến Tre province known as the "Land of Coconuts" is home to over 60,000 hectares of coconut palm cultivation, producing the raw material for one of the country's most versatile agro-industrial exports: coconut oil.

**Processing:** Copra (dried coconut kernel) or fresh coconut cream is processed into Crude Coconut Oil (CCO), which is then refined through the RBD (Refined, Bleached, Deodorized) process:
- **Refining**: Removes Free Fatty Acids (FFA) via alkali neutralization or physical refining
- **Bleaching**: Activated earth removes color pigments and residual impurities
- **Deodorization**: High temperature steam stripping removes volatile compounds for neutral odor and taste

**Quality Grades:**
- **RBD Coconut Oil (Food Grade)**: FFA ≤ 0.1%, Moisture ≤ 0.1%, Iodine Value 7–11, Color Lovibond ≤ 3 Yellow / ≤ 0.3 Red. Used in food manufacturing, baking, frying, confectionery.
- **Virgin Coconut Oil (VCO)**: Cold-pressed from fresh coconut cream, retaining natural lauric acid, coconut aroma. Used for premium food, cosmetics, and health supplement applications.
- **Hydrogenated Coconut Oil**: Fully saturated, solid at room temperature, for confectionery coatings and specialty fat applications.

**Applications:** Food manufacturing (frying oil, margarine, shortening base), cosmetics (skin care, hair care), personal care, soap manufacturing, and industrial lubricants.`,
    heroImage: '/oil/Refined-Coconut-Oil-(RBD).jpg',
    specs: [
      { label: 'Type', value: 'RBD / Virgin / Hydrogenated' },
      { label: 'FFA (as lauric)', value: '≤ 0.1% (RBD)' },
      { label: 'Moisture', value: '≤ 0.1%' },
      { label: 'Iodine Value', value: '7–11 (Wijs)' },
      { label: 'Saponification Value', value: '250–264 mg KOH/g' },
      { label: 'Lauric Acid (C12)', value: '45–55%' },
      { label: 'Color (Lovibond)', value: '≤ 3Y / 0.3R' },
      { label: 'Melting Point', value: '24–27°C' },
      { label: 'Shelf Life', value: '24 months (sealed, cool & dark)' },
      { label: 'HS Code', value: '1513.19.10' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal (IFANCA)', 'Kosher', 'RSPO (select supply chains)', 'Organic (VCO, select)'],
    exportMarkets: ['India', 'Germany', 'Netherlands', 'USA', 'Saudi Arabia', 'South Korea', 'Malaysia', 'UK'],
    moq: '18 MT (1 x 20ft, bulk drum)',
    containerCapacity: '18 MT per 20ft (bulk) / 20 MT per 20ft (drums)',
    packagingOptions: ['180 kg steel drum', '1,000L IBC', '25 kg HDPE jerry can', '20L HDPE jerrycan', 'Bulk flexitank', 'Custom retail bottle'],
    faqs: [
      { question: 'What is the difference between RBD and Virgin Coconut Oil?', answer: 'RBD (Refined, Bleached, Deodorized) coconut oil is neutral in taste and smell, making it ideal for food manufacturing where coconut flavor is not desired. Virgin Coconut Oil (VCO) retains the natural coconut aroma and flavor and is preferred in premium food, beauty, and supplement applications.' },
      { question: 'Is your coconut oil Halal certified?', answer: 'Yes. All coconut oil from our production facilities holds current Halal certification from IFANCA or JAKIM-recognized certifiers. Halal certificates are issued per shipment for GCC, Malaysia, and Indonesia market compliance.' },
      { question: 'Do you supply RSPO-certified sustainable palm-free coconut oil?', answer: 'Coconut oil is naturally palm-free — a key marketing advantage for brands repositioning away from palm oil. We can also supply RSPO-certified where buyers require full sustainability chain documentation.' },
    ],
    relatedSlugs: ['refined-salt-export', 'canned-tuna-chunks', 'vegetable-oil-export', 'olive-oil-wholesale', 'canola-oil-export', 'margarine-export'],
    seoTitle: 'Coconut Oil Vietnam Export | RBD & Virgin | Halal Certified B2B Supplier',
    seoDescription: 'Refined (RBD) and virgin coconut oil from Vietnam. Halal, ISO 22000, HACCP. FFA ≤ 0.1%. Drum, IBC, flexitank. MOQ 18 MT. Export to India, EU, Saudi Arabia, USA.',
    keywords: ['coconut oil Vietnam export', 'RBD coconut oil supplier', 'virgin coconut oil Vietnam', 'coconut oil wholesale Vietnam', 'coconut oil manufacturer Vietnam'],
    hsCode: '1513.19.10',
  },
  {
    slug: 'vegetable-oil-export',
    name: 'Refined Vegetable Oil (RBD)',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'Refined Vegetable Oil — Bulk & Retail Export for Food Manufacturers',
    description: "Refined, Bleached, and Deodorized (RBD) vegetable oil blends including soybean, sunflower-soy blend, and palm olein for food manufacturing, retail distribution, and food service. FFA ≤ 0.1%, peroxide value ≤ 2 meq/kg. Halal, HACCP, ISO 22000. Bulk flexitank, IBC, and retail bottles. MOQ 18 MT.",
    longDescription: `Refined vegetable oil is among the highest-volume food commodity exports globally, serving as the primary cooking medium in household kitchens, commercial food service kitchens, and industrial food manufacturing plants across every geography.

**Oil Types Available:**
- **Soybean oil (RBD)**: Light colour, neutral flavour, high linoleic acid (omega-6). Widely used general-purpose cooking and salad oil. The world's most traded edible oil
- **Sunflower oil (RBD)**: High oleic (for frying stability) or mid-oleic. Light golden colour, mild taste. Preferred in European retail markets
- **Palm olein (RBD)**: Semi-solid at ambient temperature, liquid olein fraction. High stability for deep frying and food manufacturing. Dominant in Asian and African markets
- **Soy-sunflower blend**: Custom blend for cost optimization — combining soybean oil economics with sunflower's consumer positioning
- **Canola oil (RBD)**: Low erucic acid rapeseed oil. High in monounsaturated fat (omega-9). Popular in health-positioned retail brands

**Quality Standards:**
FFA ≤ 0.1% (as oleic), Peroxide Value ≤ 2 meq/kg, Moisture ≤ 0.1%, Iodine Value (soy: 125–140, sunflower: 100–135, palm olein: 56–62). Full SGS/Intertek pre-shipment inspection reports available.`,
    heroImage: '/oil/Refined-Vegetable-Oil-(RBD).jpg',
    specs: [
      { label: 'Types', value: 'Soybean / Sunflower / Palm olein / Canola / Blends' },
      { label: 'FFA (as oleic)', value: '≤ 0.1%' },
      { label: 'Peroxide Value', value: '≤ 2 meq/kg' },
      { label: 'Moisture', value: '≤ 0.1%' },
      { label: 'Color (Lovibond)', value: '≤ 3Y / 0.3R (typical)' },
      { label: 'Smoke Point', value: '220–240°C (RBD)' },
      { label: 'MOQ', value: '18 MT (1 x 20ft)' },
      { label: 'HS Code', value: '1507.90.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'RSPO (palm, select)', 'Non-GMO (sunflower, canola)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Nigeria', 'Bangladesh', 'Philippines', 'Indonesia', 'Ghana', 'India'],
    moq: '18 MT (1 x 20ft)',
    containerCapacity: '18 MT per 20ft (flexitank) / 20 MT drums',
    packagingOptions: ['Bulk flexitank (18–22 MT)', '1,000L IBC', '200L drum', '20L jerrycan', '1–5 L retail bottle'],
    faqs: [
      { question: 'What is the difference between palm olein and palm oil?', answer: 'Palm oil is a semi-solid fat at room temperature due to its high saturated fat content. Palm olein is the liquid fraction of palm oil separated by fractionation — it remains liquid at ambient temperatures (above ~18°C) and is the commercially traded cooking oil. Palm stearin is the solid fraction used in margarine and shortening manufacturing.' },
      { question: 'Can you supply Non-GMO certified vegetable oil?', answer: 'Yes. Sunflower oil and canola oil are available with Non-GMO Project verification or IP (Identity Preserved) non-GMO declarations. Soybean oil from non-GMO sources is available at premium pricing with longer lead times due to segregated supply chain requirements.' },
    ],
    relatedSlugs: ['refined-coconut-oil', 'margarine-export'],
    seoTitle: 'Vegetable Oil Export Supplier | Soybean Sunflower Palm Olein Wholesale B2B',
    seoDescription: 'Refined vegetable oil — soybean, sunflower, palm olein. Halal, HACCP, RSPO. Bulk flexitank, IBC, drums, retail bottles. MOQ 18 MT. Export to GCC, Africa, Asia.',
    keywords: ['vegetable oil exporter', 'soybean oil supplier wholesale', 'refined cooking oil export', 'vegetable oil B2B', 'cooking oil bulk supplier'],
    hsCode: '1507.90.00',
  },
  {
    slug: 'olive-oil-wholesale',
    name: 'Olive Oil (Extra Virgin & Pure)',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'Olive Oil Wholesale Supply — Extra Virgin & Pure Grades for Retail & Food Service',
    description: "Premium extra virgin olive oil (EVOO) and refined pure olive oil sourced from Mediterranean origins (Spain, Italy, Tunisia, Greece) for wholesale distribution, retail private label, and food service supply across Asia, the Middle East, and Pacific markets. IOC-standard grades. Halal. MOQ 1,000 liters.",
    longDescription: `While olive oil is not a Vietnamese-origin product, Ideal Deal Vietnam operates as a trusted commodity trading and distribution partner, sourcing Mediterranean olive oil for redistribution to retail chains, food service distributors, and private label buyers across Asia-Pacific, the Middle East, and Africa — markets where establishing direct supply relationships with European producers can be complex.

**Olive Oil Grade Guide:**
- **Extra Virgin Olive Oil (EVOO)**: FFA ≤ 0.8%, Peroxide Value ≤ 20 meq/kg, Produced by cold mechanical extraction only. No heat or chemical treatment. Highest quality grade for retail positioning and premium culinary use
- **Virgin Olive Oil**: FFA ≤ 2.0%. Cold-pressed but slightly higher defect acceptance than EVOO. Mid-tier retail and food service
- **Pure / Light Olive Oil (Refined + Virgin blend)**: Refined olive oil blended with 15–25% virgin olive oil for flavour. FFA ≤ 1.0%. Standard grade for everyday cooking retail
- **Extra Light Olive Oil**: Very mild flavour. Predominantly refined. Preferred by consumers seeking olive oil health credentials without strong flavour

**Packaging for Distribution:** 250 mL, 500 mL, 1 L retail glass bottles (private label available); 4 L, 5 L tins for food service; 20 L and 200 L drums for industrial buyers.`,
    heroImage: '/oil/olive-oil.jpg',
    specs: [
      { label: 'Grades', value: 'EVOO / Virgin / Pure / Extra Light' },
      { label: 'FFA (EVOO)', value: '≤ 0.8% (as oleic)' },
      { label: 'Peroxide Value', value: '≤ 20 meq/kg (EVOO)' },
      { label: 'Polyphenols', value: '≥ 150 mg/kg (premium EVOO)' },
      { label: 'Oleic Acid (C18:1)', value: '55–83%' },
      { label: 'Origins', value: 'Spain / Italy / Tunisia / Greece' },
      { label: 'MOQ', value: '1,000 liters per grade' },
      { label: 'HS Code', value: '1509.10.00' },
    ],
    certifications: ['IOC Certification', 'ISO 22000', 'HACCP', 'Halal', 'Kosher', 'Organic (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Japan', 'South Korea', 'Australia', 'Malaysia', 'Singapore', 'China'],
    moq: '1,000 liters per grade',
    containerCapacity: '20ft: 18,000–20,000 liters (bulk)',
    packagingOptions: ['250 mL glass bottle', '500 mL glass bottle', '1 L glass bottle', '4 L tin', '200 L drum (bulk)'],
    faqs: [
      { question: 'How do I verify the authenticity of extra virgin olive oil?', answer: 'Authentic EVOO must comply with IOC (International Olive Council) chemical parameters: FFA ≤ 0.8%, Peroxide Value ≤ 20, Waxes ≤ 250 mg/kg, and specific UV absorption limits (K232 ≤ 2.50, K270 ≤ 0.22). We provide full COA from accredited IOC-member laboratories for every shipment. Additionally, sensory evaluation (absence of organoleptic defects) is a mandatory component of EVOO classification.' },
    ],
    relatedSlugs: ['vegetable-oil-export', 'refined-coconut-oil'],
    seoTitle: 'Olive Oil Wholesale Supplier | Extra Virgin Pure Olive Oil B2B Export',
    seoDescription: 'Extra virgin and pure olive oil wholesale supply. Mediterranean origins. IOC certified, Halal. 250 mL to 200 L bulk. MOQ 1,000 L. Export to GCC, Asia-Pacific, Africa.',
    keywords: ['olive oil wholesale supplier', 'extra virgin olive oil export', 'olive oil B2B distributor', 'EVOO wholesale Asia', 'olive oil private label supplier'],
    hsCode: '1509.10.00',
  },
  {
    slug: 'canola-oil-export',
    name: 'Canola Oil (RBD)',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'Refined Canola Oil — Heart-Healthy Cooking Oil for Retail & Food Industry',
    description: "Refined, Bleached, and Deodorized (RBD) canola oil from low-erucic acid rapeseed. High in monounsaturated fat (omega-9), low saturated fat. FFA ≤ 0.1%, smoke point 230–240°C. Non-GMO and conventional grades available. Halal, HACCP. Retail bottles, IBC, flexitank. MOQ 18 MT.",
    longDescription: `Canola oil (from Canadian Oil, Low Acid — i.e., low-erucic acid rapeseed oil) has earned a strong reputation as a health-positioned cooking oil due to its favourable fatty acid composition: high oleic acid (omega-9, ~62%), moderate linoleic acid (omega-6, ~21%), and significant alpha-linolenic acid (omega-3, ~11%) — the best omega-3:omega-6 ratio of commonly available vegetable oils.

**Health Positioning:**
- Lowest saturated fat content of commonly available cooking oils (7% vs 14% soybean, 51% palm oil)
- High smoke point (230–240°C) makes it excellent for high-heat cooking, deep frying, and baking
- "Heart-healthy" claims supported by FDA-authorized qualified health claim and EFSA endorsement for oleic acid
- Non-GMO versions available for natural and organic retail market positioning

**Processing:**
RBD canola oil undergoes degumming, neutralization, bleaching, and deodorization to produce a neutral-flavoured, light yellow oil suitable for both domestic cooking and industrial food manufacturing applications including baking (replaces shortening), mayonnaise production, salad dressing, and spray oil applications.

**Market Positioning:** Canola oil commands a premium over soybean oil in retail markets due to its health profile, and trades below olive oil and avocado oil — the optimal price-health balance for mainstream supermarket shoppers.`,
    heroImage: '/oil/Canola Oil.jpg',
    specs: [
      { label: 'Type', value: 'RBD Canola Oil (low erucic acid)' },
      { label: 'FFA (as oleic)', value: '≤ 0.1%' },
      { label: 'Erucic Acid', value: '≤ 2%' },
      { label: 'Oleic Acid (C18:1)', value: '55–65%' },
      { label: 'ALA (Omega-3)', value: '9–11%' },
      { label: 'Smoke Point', value: '230–240°C' },
      { label: 'MOQ', value: '18 MT (1 x 20ft)' },
      { label: 'HS Code', value: '1514.99.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Kosher', 'Non-GMO (RTRS/IP available)', 'RSPO Identity Preserved (select)'],
    exportMarkets: ['UAE', 'Saudi Arabia', 'Japan', 'South Korea', 'Australia', 'USA', 'Germany', 'UK'],
    moq: '18 MT (1 x 20ft)',
    containerCapacity: '18–22 MT per 20ft',
    packagingOptions: ['1 L retail PET bottle', '2 L retail PET bottle', '5 L retail jug', '20 L jerrycan', '1,000 L IBC', 'Bulk flexitank'],
    faqs: [
      { question: 'Is Non-GMO canola oil available and how is it verified?', answer: 'Yes. Non-GMO canola oil is available through Identity Preserved (IP) supply chains where rapeseed varieties are documented as non-GMO from farm through crushing facility. Third party PCR (polymerase chain reaction) DNA testing is conducted on the oil to verify non-GMO status. IP non-GMO canola carries a 15–25% price premium over conventional RBD canola oil.' },
    ],
    relatedSlugs: ['vegetable-oil-export', 'olive-oil-wholesale'],
    seoTitle: 'Canola Oil Export Supplier | RBD Canola Oil Wholesale Non-GMO Available',
    seoDescription: 'Refined canola oil (RBD). Low erucic acid, high oleic. Halal, HACCP. Non-GMO available. Retail bottles, IBC, flexitank. MOQ 18 MT. Export to GCC, Asia, EU.',
    keywords: ['canola oil exporter', 'canola oil wholesale supplier', 'RBD canola oil B2B', 'non-GMO canola oil export', 'rapeseed oil wholesale'],
    hsCode: '1514.99.00',
  },
  {
    slug: 'margarine-export',
    name: 'Margarine & Table Spreads',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'Margarine & Vegetable Spreads — Bulk & Retail Export for Bakeries and Distributors',
    description: "Block and tub margarine, and soft vegetable spreads for bakery manufacturing, food service, and retail distribution. Vegetable fat content 80% (margarine) or 60–70% (spread). Trans-fat free. Halal certified. Available in 250g retail tubs, 500g blocks, and 15–25 kg bulk blocks for bakery use. MOQ 1 MT.",
    longDescription: `Margarine and vegetable spreads are manufactured from refined vegetable oils (palm, palm kernel, soybean, canola) through controlled partial hydrogenation (modern, trans-fat free processes use interesterification instead) or fractionation to produce solid or semi-solid fat products designed to replicate butter functionality at competitive cost.

**Product Range:**
- **Bakery block margarine (80% fat)**: Firm at refrigerated temperatures, plastic consistency at working temperature (18–22°C). Roll-in margarine for croissants and Danish pastry — specific plasticity curve for laminated doughs. Puff pastry margarine with elevated melting point
- **Table/bread spread margarine (80% fat)**: Soft-blend tub margarine. Spreadable directly from refrigerator. Yellow colour, butter-adjacent flavour from diacetyl/butter flavour system
- **Reduced-fat spread (60–70% fat)**: Lower calorie positioning. Retail tub format. Not suitable for baking (too much water)
- **Compound butter / butter blend**: 20–40% real butter blended with vegetable fat. Premium tier. Lower cost than pure butter, improved spreadability

**Technical Note:** All modern margarine products are formulated to be trans-fat free (0g trans fat per serving), replacing partially hydrogenated oils with interesterified palm kernel and fractionated palm stearin to achieve the required solid fat index (SFI) profile.`,
    heroImage: '/oil/Margarine & Table Spreads.jpg',
    specs: [
      { label: 'Types', value: 'Block bakery / Table spread tub / Reduced-fat / Compound' },
      { label: 'Fat Content', value: '80% (margarine) / 60–70% (spread)' },
      { label: 'Trans Fat', value: '0g per serving (interesterified base)' },
      { label: 'Melting Point', value: '36–42°C (bakery block)' },
      { label: 'Salt Content', value: '0.5–1.5% (salted) or salt-free' },
      { label: 'Shelf Life', value: '6–12 months (refrigerated)' },
      { label: 'MOQ', value: '1 MT per product type' },
      { label: 'HS Code', value: '1517.10.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'Trans-fat Free Declaration', 'Kosher (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Nigeria', 'Ghana', 'Egypt', 'Bangladesh', 'Philippines', 'Malaysia'],
    moq: '1 MT per product type',
    containerCapacity: '20ft: 16–18 MT',
    packagingOptions: ['250g retail tub', '500g retail block (wrapped)', '1 kg food service block', '15–25 kg bulk bakery block', '10 kg food service pail'],
    faqs: [
      { question: 'What type of margarine is required for croissant and puff pastry manufacturing?', answer: 'Croissant and laminated pastry production requires roll-in margarine with a very specific plasticity profile — it must be plastic (malleable without cracking) at dough temperature (typically 15–18°C) to roll into thin layers, and must not melt during lamination. This is characterised by a steep solid fat index (SFI) curve. We supply dedicated roll-in margarine with SFI specifications optimised for laminated dough applications.' },
    ],
    relatedSlugs: ['vegetable-shortening-export', 'vegetable-oil-export'],
    seoTitle: 'Margarine Export Supplier | Block Margarine Table Spread Wholesale B2B',
    seoDescription: 'Margarine and vegetable spreads — bakery block, table spread, reduced-fat. Trans-fat free, Halal, HACCP. Retail tubs and bulk blocks. MOQ 1 MT. Export to GCC, Africa, Asia.',
    keywords: ['margarine exporter', 'margarine wholesale supplier', 'block margarine bakery export', 'vegetable spread B2B', 'margarine manufacturer export'],
    hsCode: '1517.10.00',
  },
  {
    slug: 'vegetable-shortening-export',
    name: 'Vegetable Shortening',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'All-Purpose Vegetable Shortening — Bulk Export for Bakeries & Food Manufacturers',
    description: "100% vegetable all-purpose shortening and high-stability bakery shortening from palm kernel and palm fractions. Trans-fat free. Excellent creaming ability, superior aeration for cakes and pastry. Solid white appearance. Available in 15–25 kg bulk blocks and 20 kg pails. Halal, HACCP. MOQ 1 MT.",
    longDescription: `Vegetable shortening is a solid fat product with exceptional creaming properties and high-temperature stability, making it indispensable in high-volume bakery manufacturing where butter would be prohibitively expensive and where consistent performance across production batches is critical.

**Types of Shortening:**
- **All-purpose shortening**: Blended interesterified palm/palm kernel base. Suitable for cake baking, pie crusts, cookies, and frying. Solid white, odourless, neutral flavour
- **High-stability frying shortening**: Elevated melting point (44–48°C). Extended fry life. For commercial deep frying of donuts, fried dough, and snack foods
- **Emulsified shortening (hi-ratio shortening)**: Contains emulsifiers (mono/diglycerides, SSL or DATEM) for exceptional aeration — enables high-ratio cakes (more sugar than flour) common in mass-produced layer cakes
- **Pastry / pie crust shortening**: Moderate melting point, flake structure. Designed to produce laminated, flaky pastry layers

**Technical Properties:**
Solid Fat Index (SFI): 25–30% at 20°C, 10–15% at 33°C, ≤ 5% at 40°C (all-purpose). Iodine value 20–35 (highly saturated). Cloud point tested for temperature stability in tropical storage conditions.

All shortening products are manufactured from RSPO-certified sustainable palm and palm kernel oil on request.`,
    heroImage: '/oil/Vegetable-Shortening.jpg',
    specs: [
      { label: 'Types', value: 'All-purpose / Frying / Hi-ratio emulsified / Pastry' },
      { label: 'Fat Content', value: '100% vegetable fat' },
      { label: 'Trans Fat', value: '0g per serving' },
      { label: 'Melting Point', value: '36–48°C (type dependent)' },
      { label: 'Iodine Value', value: '20–35 (highly stable)' },
      { label: 'Solid Fat Index (20°C)', value: '25–35%' },
      { label: 'MOQ', value: '1 MT per type' },
      { label: 'HS Code', value: '1516.20.00' },
    ],
    certifications: ['ISO 22000', 'HACCP', 'Halal', 'RSPO (select)', 'Trans-fat Free Declaration'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Egypt', 'Nigeria', 'Bangladesh', 'Philippines', 'Malaysia', 'Indonesia'],
    moq: '1 MT per type',
    containerCapacity: '20ft: 16–18 MT',
    packagingOptions: ['15 kg bulk block (waxed carton)', '20 kg bulk pail (HDPE)', '25 kg bulk carton', '500g retail pack (select types)'],
    faqs: [
      { question: 'What is hi-ratio shortening and when should bakers use it instead of all-purpose shortening?', answer: 'Hi-ratio (emulsified) shortening contains approximately 5% emulsifiers (mono/diglycerides) blended into the fat, giving it an exceptional ability to incorporate and hold air during creaming and to carry more liquid and sugar than standard shortening. It is specifically designed for high-ratio cake formulas (where sugar weight exceeds flour weight) and produces finer, moister crumb texture. Standard all-purpose shortening lacks this emulsification capacity and should not be substituted in high-ratio cake formulations.' },
    ],
    relatedSlugs: ['margarine-export', 'vegetable-oil-export'],
    seoTitle: 'Vegetable Shortening Export Supplier | Bakery Shortening Wholesale B2B',
    seoDescription: 'Vegetable shortening — all-purpose, frying, hi-ratio, pastry types. Trans-fat free, Halal, HACCP. Bulk blocks and pails. MOQ 1 MT. Export to GCC, Africa, Asia.',
    keywords: ['vegetable shortening exporter', 'bakery shortening wholesale', 'shortening supplier B2B', 'palm shortening export', 'hi-ratio shortening manufacturer'],
    hsCode: '1516.20.00',
  },
  {
    slug: 'palm-oil-rbd-export',
    name: 'RBD Palm Oil (Refined, Bleached & Deodorized)',
    category: 'Edible Oils',
    categorySlug: 'edible-oils-fats',
    tagline: 'RBD Palm Oil for Food Manufacturing — Vietnam Re-Export Hub, Halal & RSPO Available',
    description: 'RBD (Refined, Bleached & Deodorized) palm oil traded and re-exported through Vietnam. Suitable for food manufacturing, frying, margarine, shortening, and confectionery. Halal certified, RSPO segregated (SG) option available. FFA ≤0.1%. Supplied in flexitanks, ISO tanks, drums, or Jerry cans. MOQ 20 MT.',
    longDescription: `Vietnam serves as an established regional trading and re-export hub for edible palm oil, with licensed commodity trading companies and food-grade tank storage facilities in Ho Chi Minh City and Ba Ria-Vung Tau handling significant volumes of RBD palm oil sourced primarily from Indonesia and Malaysia for regional redistribution.

RBD Palm Oil (Refined, Bleached and Deodorized) is the world's most consumed vegetable oil, used across food manufacturing, QSR frying operations, margarine and shortening production, confectionery fat systems, soap and oleochemical manufacturing, and institutional food service.

**Product specifications:**

**RBD Palm Oil (Standard CP8 / CP10):**
- Free Fatty Acids (FFA as palmitic): ≤0.10%
- Moisture & Impurities: ≤0.10%
- Iodine Value: 50–55
- Cloud Point (CP8): 8°C; (CP10): 10°C
- Color: Lovibond 5.25" cell — max 3.0 Red
- Peroxide Value: ≤2.0 meq O₂/kg
- DOBI (Deterioration of Bleachability Index): ≥2.50

**RBD Palm Olein (Liquid fraction — frying oil):**
- Cloud Point: ≤10°C (single fractionated) or ≤6°C (double fractionated)
- Iodine Value: ≥56
- FFA: ≤0.10%
- Most popular format for institutional and industrial frying

**RBD Palm Stearin (Hard fraction — margarine/shortening):**
- Slip Melting Point: 44–56°C (specification-dependent)
- Iodine Value: ≤35
- Used in margarine, shortening, and cocoa butter equivalent fats

**Sustainability options:**
- **RSPO Segregated (SG):** Certified sustainable palm oil with full chain of custody — suitable for buyers with NDPE (No Deforestation, Peat, Exploitation) commitments
- **Mass Balance (MB):** Blended sustainable volumes — cost-effective sustainability claim

**Packaging:** Flexitank (24 MT per 20ft container), ISO tank, 200L steel drums, 20L Jerry cans.`,
    heroImage: '/oil/idealdeal- red Palm Oil (Refined, Bleached & Deodorized).png',
    specs: [
      { label: 'Product Type', value: 'RBD Palm Oil / Palm Olein / Palm Stearin' },
      { label: 'FFA (as palmitic)', value: '≤0.10%' },
      { label: 'Moisture & Impurities', value: '≤0.10%' },
      { label: 'Iodine Value', value: '50–55 (RBD oil); ≥56 (olein)' },
      { label: 'Color (Lovibond)', value: 'Max 3.0 Red (5.25" cell)' },
      { label: 'Peroxide Value', value: '≤2.0 meq O₂/kg' },
      { label: 'MOQ', value: '20 MT (drums); 24 MT (flexitank)' },
      { label: 'Packaging', value: 'Flexitank / ISO Tank / 200L Drum / 20L Jerry Can' },
      { label: 'Sustainability', value: 'RSPO Segregated (SG) or Mass Balance (MB) available' },
    ],
    certifications: ['Halal (JAKIM/MUI)', 'RSPO Segregated (SG) available', 'ISO 22000', 'GMP+ Feed Safety (oleochemical grade)', 'SGS/BV Quality Certificate'],
    exportMarkets: ['Philippines', 'Indonesia', 'Malaysia (re-export)', 'Bangladesh', 'UAE', 'India', 'Pakistan', 'West Africa'],
    moq: '20 MT (drums); 24 MT per 20ft flexitank',
    containerCapacity: '20ft flexitank: 24 MT liquid; 20ft drums: 80 x 200L = 16 MT',
    packagingOptions: ['Flexitank (20ft container, 24 MT)', 'ISO tank (24–26 MT)', '200L steel drum', '20L HDPE Jerry can', 'IBC tote (1,000L)'],
    faqs: [
      { question: 'Is your RBD palm oil Halal certified?', answer: 'Yes. All palm oil we supply is sourced from Halal-certified refineries in Indonesia or Malaysia (JAKIM or MUI certified). Halal certificates are provided per lot. For GCC market requirements, we can arrange supply from refineries holding certifications recognized by the relevant Gulf country import authorities.' },
      { question: 'Do you offer RSPO certified sustainable palm oil?', answer: 'Yes. RSPO Segregated (SG) certified RBD Palm Oil and Palm Olein are available for buyers with sustainability commitments. RSPO SG certification provides the highest segregation assurance — the certified sustainable palm oil is physically separated throughout the supply chain. RSPO Mass Balance (MB) is also available at lower cost. RSPO certificates and credit documentation are provided with each SG shipment.' },
      { question: 'What quality documentation accompanies each shipment?', answer: 'Each shipment includes: Certificate of Analysis (COA) from the producing refinery, SGS or Bureau Veritas independent inspection certificate at load port, Halal certificate, phytosanitary/health certificate from Vietnamese food authority, bill of lading, packing list, and commercial invoice. For EU shipments, a food safety declaration per Regulation (EU) 2015/2283 is also available.' },
    ],
    relatedSlugs: ['virgin-coconut-oil', 'rice-bran-oil-refined'],
    seoTitle: 'RBD Palm Oil Supplier Vietnam | RSPO Halal Palm Olein Stearin | Flexitank Drums',
    seoDescription: 'RBD palm oil exported from Vietnam. Palm olein, palm stearin. Halal certified, RSPO SG available. FFA ≤0.10%. Flexitank, drums. MOQ 20 MT. Supply to ASEAN, Middle East, Africa.',
    keywords: ['RBD palm oil Vietnam', 'palm oil supplier Vietnam', 'RSPO palm oil Vietnam', 'halal palm oil exporter', 'palm olein supplier Vietnam'],
    hsCode: '1511.90.00',
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
    relatedCategorySlugs: ['cashew-nuts', 'spices', 'green-tea', 'food-staples'],
    products: coffeeProducts,
  },
  {
    slug: 'cashew-nuts',
    name: 'Cashew Nuts',
    tagline: "Vietnam The World's Largest Cashew Processor",
    description: 'Vietnam processes ~65% of the world\'s cashew supply. We export W180, W240, W320, and specialty grades to retailers, food manufacturers, and importers in the GCC, EU, and Asia with full Halal and BRC certification.',
    longDescription: "Vietnam's dominance in cashew processing is unmatched globally. With state-of-the-art shelling, grading, and packing facilities in Binh Phuoc and Dong Nai, Ideal Deal Vietnam delivers consistent quality cashew kernels across all commercial grades — from the most-traded W320 to the prestigious jumbo W180.",
    heroImage: '/images/categories/cashew-hero.jpg',
    icon: '🥜',
    certifications: ['ISO 22000', 'HACCP', 'BRC Grade A', 'Halal', 'Kosher', 'FSSC 22000'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Germany', 'Netherlands', 'USA', 'India'],
    seoTitle: 'Cashew Nuts Vietnam Export | W180 W240 W320 | Halal Certified Supplier',
    seoDescription: 'Buy cashew nuts from Vietnam  W180, W240, W320 grades. ISO 22000, HACCP, Halal certified. Export to Saudi Arabia, UAE, EU. Direct manufacturer price.',
    keywords: ['cashew nuts Vietnam', 'cashew exporter Vietnam', 'buy cashews wholesale', 'halal cashew nuts', 'cashew nuts supplier GCC'],
    oemDescription: "Custom grading, roasting, and private label packaging available. Vacuum or modified-atmosphere pouches. MOQ 1 MT.",
    relatedCategorySlugs: ['coffee', 'spices', 'edible-oils-fats', 'food-staples'],
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
    relatedCategorySlugs: ['food-staples', 'packaged-food-snacks', 'canned-preserved-food', 'edible-oils-fats'],
    products: riceProducts,
  },
  {
    slug: 'frozen-seafood',
    name: 'Frozen Seafood',
    tagline: "Vietnam's World Class Seafood — Cold Chain Excellence",
    description: "Vietnam is a top 5 global seafood exporter. We supply IQF vannamei shrimp, pangasius fillet, and squid from EU-registered, ASC-certified processing plants in the Mekong Delta.",
    longDescription: "Vietnam's seafood industry is a cornerstone of its export economy, with VASEP-certified processing plants operating to the strictest international food safety standards. Ideal Deal Vietnam connects international seafood buyers with EU-registered, FDA-listed processing facilities for a consistent cold chain supply of shrimp, pangasius, squid, and value-added products.",
    heroImage: '/images/categories/seafood-hero.jpg',
    icon: '🦐',
    certifications: ['HACCP', 'ISO 22000', 'EU Registration', 'FDA Registration', 'ASC', 'BAP', 'Halal', 'BRC'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Japan', 'South Korea', 'Germany', 'Netherlands', 'USA'],
    seoTitle: 'Frozen Seafood Vietnam Export | Shrimp Pangasius Supplier | EU HACCP Certified',
    seoDescription: 'Frozen seafood from Vietnam — IQF shrimp, pangasius fillet. EU registered, HACCP, ASC, Halal certified. MOQ 1 reefer container. Supplier to GCC, EU, Asia.',
    keywords: ['frozen seafood Vietnam', 'shrimp exporter Vietnam', 'pangasius fillet Vietnam', 'seafood supplier Vietnam', 'IQF shrimp wholesale'],
    relatedCategorySlugs: ['canned-preserved-food', 'spices', 'packaged-food-snacks', 'edible-oils-fats'],
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
    oemDescription: "Custom blending, grinding, and private label spice packaging available. Retail sachets to 25 kg sacks. MOQ 500 kg.",
    relatedCategorySlugs: ['coffee', 'green-tea', 'canned-preserved-food', 'packaged-food-snacks'],
    products: spiceProducts,
  },
  // ─── Agriculture: Green Tea ──────────────────────────────────────────────────
  {
    slug: 'green-tea',
    name: 'Green Tea',
    tagline: 'Premium Vietnamese Green Tea — From Thai Nguyen to the World',
    description: "Vietnamese green tea from the Thai Nguyen highlands is prized globally for its fresh, grassy aroma and clean finish. We export OPA, OP, and Jasmine-scented grades in bulk and private label packaging for tea brands and wholesalers worldwide.",
    longDescription: "Thai Nguyen province in northern Vietnam has been cultivating tea for over 3,000 years, producing what many consider the finest green tea in Southeast Asia. Ideal Deal Vietnam exports a full range of Vietnamese green tea — from the prestigious Tan Cuong OP and OPA grades to Jasmine-scented teas and export-grade fannings for teabag manufacturers. Our farms maintain traditional cultivation practices while meeting modern food safety standards.",
    heroImage: '/products/greentea.png',
    icon: '🍵',
    certifications: ['ISO 22000', 'HACCP', 'Organic (select)', 'Halal', 'Rainforest Alliance (select)'],
    exportMarkets: ['Pakistan', 'UAE', 'Saudi Arabia', 'Germany', 'Russia', 'USA', 'Poland'],
    seoTitle: 'Vietnamese Green Tea Export | Thai Nguyen OP OPA Jasmine | Wholesale Supplier',
    seoDescription: 'Export-quality Vietnamese green tea from Thai Nguyen. OP, OPA, Jasmine grades. ISO 22000, HACCP, Halal. MOQ 1 MT. Supplier to Pakistan, GCC, EU.',
    keywords: ['Vietnamese green tea export', 'Thai Nguyen green tea supplier', 'green tea wholesale Vietnam', 'buy green tea bulk Vietnam', 'jasmine green tea exporter'],
    oemDescription: "Private label tea packaging in tea bags, loose leaf tins, and bulk sacks. Custom blend development. MOQ 500 kg.",
    relatedCategorySlugs: ['coffee', 'spices', 'packaged-food-snacks', 'food-staples'],
    products: greenTeaProducts,
  },
  // ─── Agriculture: Pineapple ──────────────────────────────────────────────────
  {
    slug: 'pineapple',
    name: 'Pineapple',
    tagline: "Vietnam's Queen Pineapple — Fresh & Processed for Global Markets",
    description: "Vietnamese Queen pineapple is prized for its exceptionally sweet flavour profile and golden colour. We export fresh MD2 and Queen varieties, plus canned pineapple in syrup and juice, from IFS-certified processing facilities.",
    longDescription: "Vietnam's pineapple industry produces over 700,000 tonnes annually, with Tien Giang, Long An, and Ninh Binh provinces as the leading cultivation areas. The Queen variety — Vietnam's signature pineapple — delivers a sweeter, more aromatic flavour than the globally dominant MD2. Ideal Deal Vietnam bridges Vietnamese pineapple farmers with international buyers through fresh export programs and value-added canned products.",
    heroImage: '/products/Pineapple.png',
    icon: '🍍',
    certifications: ['GlobalGAP', 'HACCP', 'ISO 22000', 'Halal', 'Phytosanitary Certificate'],
    exportMarkets: ['China', 'South Korea', 'Japan', 'UAE', 'Saudi Arabia', 'Netherlands', 'Russia'],
    seoTitle: 'Vietnamese Pineapple Export | Fresh & Canned | Supplier to GCC Asia EU',
    seoDescription: 'Vietnamese fresh and canned pineapple export. GlobalGAP, HACCP certified. Fresh Queen/MD2 pineapple and canned pineapple in syrup. MOQ 1 container.',
    keywords: ['Vietnamese pineapple export', 'fresh pineapple Vietnam supplier', 'canned pineapple Vietnam', 'pineapple in syrup export', 'buy pineapple wholesale Vietnam'],
    relatedCategorySlugs: ['canned-preserved-food', 'packaged-food-snacks', 'edible-oils-fats', 'food-staples'],
    products: pineappleProducts,
  },
  // ─── Manufacturing: Textile & Apparel ───────────────────────────────────────
  {
    slug: 'textile-apparel',
    name: 'Textile & Apparel OEM',
    tagline: 'Vietnam OEM Garment Manufacturing — Your Brand, Our Expertise',
    description: "Vietnam is the world's 3rd largest garment exporter. We offer full-package OEM/ODM manufacturing for fashion brands, sportswear labels, and retail chains with OEKO-TEX STANDARD 100, WRAP, and BSCI-certified production facilities.",
    longDescription: "Vietnam's garment and textile industry employs over 2.5 million workers and generates USD 44 billion in annual exports, making it the country's largest manufacturing sector. Ho Chi Minh City, Binh Duong, and Dong Nai host modern, compliance-certified apparel factories supplying global fashion brands. Ideal Deal Vietnam provides end-to-end OEM/ODM garment manufacturing services — from fabric sourcing and pattern making to finished product delivery.",
    heroImage: '/products/Textile.png',
    icon: '👕',
    certifications: ['OEKO-TEX STANDARD 100', 'WRAP Certified', 'BSCI', 'SA8000', 'ISO 9001', 'SEDEX'],
    exportMarkets: ['USA', 'Germany', 'UK', 'France', 'Japan', 'Australia', 'Canada', 'Netherlands'],
    seoTitle: 'Vietnam OEM Garment Manufacturer | Apparel Textile Export | WRAP BSCI Certified',
    seoDescription: 'OEM garment manufacturing in Vietnam. OEKO-TEX, WRAP, BSCI certified. T-shirts, sportswear, activewear, workwear. MOQ 500 pcs. Export to USA, EU, Australia.',
    keywords: ['Vietnam garment manufacturer OEM', 'apparel manufacturer Vietnam', 'textile exporter Vietnam', 'OEM clothing Vietnam', 'garment factory Vietnam export'],
    oemDescription: "Full-package OEM and ODM garment manufacturing. Design development, fabric sourcing, CMT and FOB options. MOQ 500 pcs per style.",
    relatedCategorySlugs: ['home-personal-care', 'baby-products', 'cleaning-tools', 'eco-packaging'],
    products: textileProducts,
  },
  // ─── Manufacturing: Precision Components ────────────────────────────────────
  {
    slug: 'precision-components',
    name: 'Precision Components',
    tagline: 'CNC Machined Parts & Industrial Components from Vietnam',
    description: "Vietnam's precision engineering sector supplies global OEMs with high-tolerance CNC machined parts, stamped components, and custom fabrications in steel, aluminium, brass, and engineering plastics. ISO 9001 and IATF 16949 certified facilities.",
    longDescription: "Vietnam has emerged as a serious destination for precision manufacturing outsourcing, with over 2,000 FDI-invested component manufacturers serving automotive, electronics, aerospace, and industrial machinery sectors. Ideal Deal Vietnam connects international OEMs and procurement teams with Vietnamese precision engineering facilities that operate to Japanese, German, and American quality standards.",
    heroImage: '/products/precision.png',
    icon: '⚙️',
    certifications: ['ISO 9001:2015', 'IATF 16949', 'ISO 14001', 'RoHS Compliant', 'PPAP Documentation'],
    exportMarkets: ['Japan', 'South Korea', 'Germany', 'USA', 'Australia', 'Taiwan', 'Singapore', 'UK'],
    seoTitle: 'CNC Machined Parts Vietnam | Precision Engineering Components | OEM Supplier',
    seoDescription: 'Precision CNC machined parts from Vietnam. ISO 9001, IATF 16949 certified. Steel, aluminium, brass components. MOQ 100 pcs. Export to Japan, Germany, USA, Korea.',
    keywords: ['CNC machined parts Vietnam', 'precision components Vietnam', 'machining supplier Vietnam', 'OEM parts manufacturer Vietnam', 'industrial components export Vietnam'],
    oemDescription: "Custom OEM precision manufacturing to customer drawings and 3D models. Prototype to mass production. PPAP documentation available.",
    relatedCategorySlugs: ['wooden-furniture', 'eco-packaging', 'plastic-household', 'raw-materials'],
    products: precisionProducts,
  },
  // ─── Manufacturing: Wooden Furniture ────────────────────────────────────────
  {
    slug: 'wooden-furniture',
    name: 'Wooden Furniture',
    tagline: "Handcrafted Vietnamese Furniture — FSC Wood, Global Standards",
    description: "Vietnam is the world's 5th largest furniture exporter with USD 14 billion in annual exports. We manufacture FSC-certified solid acacia, teak, and rubber wood furniture for retail chains, interior designers, and wholesale importers.",
    longDescription: "Vietnam's furniture manufacturing industry is concentrated in Binh Duong, Dong Nai, and Ho Chi Minh City — home to over 3,000 furniture factories ranging from craft workshops to large scale export operations. Vietnamese furniture is prized globally for skilled craftsmanship, competitive pricing, and the use of sustainable fast-growing hardwoods like acacia. Ideal Deal Vietnam sources furniture from FSC-certified manufacturers with CARB Phase 2 compliance for formaldehyde emissions.",
    heroImage: '/products/furniture.png',
    icon: '🪑',
    certifications: ['FSC Certified', 'CARB Phase 2', 'ISO 9001', 'BSCI', 'Lacey Act Compliant', 'EUTR Compliant'],
    exportMarkets: ['USA', 'Germany', 'UK', 'France', 'Australia', 'Japan', 'Netherlands', 'Canada'],
    seoTitle: 'Vietnamese Furniture Export | FSC Acacia Wood | Wholesale Furniture Supplier',
    seoDescription: 'FSC-certified wooden furniture from Vietnam. Solid acacia, teak, rubber wood. CARB Phase 2 compliant. MOQ 1 container. Export to USA, EU, Australia, Japan.',
    keywords: ['Vietnamese furniture export', 'wooden furniture Vietnam supplier', 'FSC furniture Vietnam', 'acacia furniture Vietnam', 'furniture manufacturer Vietnam wholesale'],
    oemDescription: "Custom furniture design and OEM manufacturing. FSC-certified timber. From concept to finished product. MOQ 1 x 20ft container.",
    relatedCategorySlugs: ['eco-packaging', 'precision-components', 'plastic-household', 'home-personal-care'],
    products: furnitureProducts,
  },
  // ─── Manufacturing: Eco Packaging ───────────────────────────────────────────
  {
    slug: 'eco-packaging',
    name: 'Eco Packaging',
    tagline: 'Sustainable Packaging Solutions from Vietnam',
    description: "Vietnam manufactures a wide range of eco-friendly packaging including kraft paper bags, corrugated boxes, biodegradable pouches, and compostable packaging. FSC-certified paper sources, custom printing, MOQ from 1,000 units.",
    longDescription: "As global brands accelerate their sustainability commitments, Vietnam has emerged as a key manufacturing hub for eco-friendly packaging solutions. With access to FSC-certified paper mills in the north, bamboo processing in the Central Highlands, and modern flexographic printing facilities, Vietnamese packaging manufacturers can deliver sustainable packaging at competitive prices for international brands.",
    heroImage: '/products/ecopack.png',
    icon: '📦',
    certifications: ['FSC Certified', 'ISO 9001', 'Compostable (OK Compost/TÜV)', 'BPI Certified', 'SGP Certified Printer'],
    exportMarkets: ['USA', 'Germany', 'Australia', 'UK', 'Japan', 'Netherlands', 'Canada', 'France'],
    seoTitle: 'Eco Packaging Manufacturer Vietnam | Kraft Paper Bags Boxes | FSC Certified',
    seoDescription: 'Sustainable eco-friendly packaging from Vietnam. FSC certified kraft paper, corrugated boxes, compostable pouches. MOQ 1,000 units. Export to USA, EU, Australia.',
    keywords: ['eco packaging Vietnam manufacturer', 'kraft paper bags Vietnam', 'sustainable packaging supplier Vietnam', 'FSC packaging Vietnam', 'biodegradable packaging Vietnam'],
    oemDescription: "Custom design and private label eco-packaging. Digital and flexographic printing. Rapid sampling within 7 days. MOQ 1,000 units.",
    relatedCategorySlugs: ['plastic-household', 'wooden-furniture', 'home-personal-care', 'hygiene-disposable'],
    products: ecoPackagingProducts,
  },
  // ─── Manufacturing: Raw Materials ───────────────────────────────────────────
  {
    slug: 'raw-materials',
    name: 'Raw Materials',
    tagline: 'Industrial Raw Materials from Vietnam — Cement, Minerals & More',
    description: "Vietnam is a significant supplier of Portland cement, limestone, kaolin, silica sand, and other industrial minerals. We serve construction, manufacturing, and industrial buyers across Africa, Asia, and the Middle East.",
    longDescription: "Vietnam's extensive mineral resources and modern industrial infrastructure make it a competitive supplier of construction and industrial raw materials. Portland cement from Vietnam's major producers — Vicem, SCG, INSEE, and Xuang Thanh — meets international EN 197-1 and ASTM C150 standards and is exported to over 30 countries.",
    heroImage: '/products/rawmaterials.png',
    icon: '🏗️',
    certifications: ['EN 197-1 Conformity', 'ASTM C150', 'ISO 9001', 'SGS Pre-Shipment Inspection', 'COO (Vietnam)'],
    exportMarkets: ['Bangladesh', 'Philippines', 'Ghana', 'Nigeria', 'Mozambique', 'Cambodia', 'Myanmar', 'Sri Lanka'],
    seoTitle: 'Vietnam Raw Materials Export | Portland Cement Minerals | Industrial Supplier',
    seoDescription: 'Industrial raw materials from Vietnam — Portland cement OPC 42.5/52.5, minerals. EN 197-1, ASTM C150. MOQ 1,000 MT. Export to Africa, Asia, Middle East.',
    keywords: ['raw materials Vietnam export', 'Portland cement Vietnam', 'industrial minerals Vietnam', 'cement supplier Vietnam', 'bulk raw materials Vietnam'],
    relatedCategorySlugs: ['eco-packaging', 'plastic-household', 'precision-components', 'wooden-furniture'],
    products: rawMaterialsProducts,
  },
  // ─── Consumer Goods: Home & Personal Care ───────────────────────────────────
  {
    slug: 'home-personal-care',
    name: 'Home & Personal Care',
    tagline: 'OEM Personal Care Products — Private Label from Vietnam',
    description: "Vietnam manufactures a full range of home and personal care products including liquid soaps, shampoos, body wash, and household cleaners. GMP ISO 22716 certified facilities. Private label from 1,000 units. Export to GCC, EU, ASEAN.",
    longDescription: "Vietnam's personal care manufacturing sector serves global brands and retailers with GMP-certified production, flexible formulation options, and cost-competitive OEM/ODM services. Facilities in Ho Chi Minh City and Binh Duong operate under ASEAN Cosmetics Directive compliance and can serve diverse markets from the GCC to Europe.",
    heroImage: '/products/clean.png',
    icon: '🧴',
    certifications: ['GMP ISO 22716', 'ASEAN Cosmetics Directive', 'ISO 9001', 'Halal', 'COSMOS Organic (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Australia', 'Singapore', 'Malaysia', 'Germany', 'UK', 'Thailand'],
    seoTitle: 'Private Label Personal Care Manufacturer Vietnam | OEM Home Care Supplier',
    seoDescription: 'OEM personal care and home care manufacturing from Vietnam. GMP ISO 22716 certified. Private label soap, shampoo, cleaners. MOQ 1,000 units. Export to GCC, EU.',
    keywords: ['personal care manufacturer Vietnam', 'private label OEM Vietnam', 'home care products Vietnam', 'liquid soap manufacturer Vietnam', 'OEM cosmetics Vietnam'],
    oemDescription: "Private label and OEM formulation services. Custom fragrance, colour, and packaging. GMP ISO 22716 certified. MOQ 1,000 units.",
    relatedCategorySlugs: ['hygiene-disposable', 'baby-products', 'cleaning-tools', 'plastic-household'],
    products: homePersonalCareProducts,
  },
  // ─── Consumer Goods: Hygiene & Disposable ───────────────────────────────────
  {
    slug: 'hygiene-disposable',
    name: 'Hygiene & Disposable',
    tagline: 'Wet Wipes, Tissues & Disposable Products — Vietnam OEM Supplier',
    description: "Vietnam manufactures non-woven wet wipes, facial tissues, disposable gloves, and personal hygiene products for global brands and private label buyers. ISO 13485 for medical wipes, GMP for cosmetic wipes. MOQ from 5,000 units.",
    longDescription: "Vietnam's non-woven and disposable hygiene product manufacturing sector has expanded rapidly, serving both domestic consumer markets and international export demand. Modern facilities in Binh Duong and Ho Chi Minh City produce wet wipes, dry tissues, and other disposable hygiene products across baby, adult, medical, and beauty categories.",
    heroImage: '/products/hygiene.png',
    icon: '🧻',
    certifications: ['ISO 13485 (medical wipes)', 'GMP ISO 22716', 'CE Mark (select)', 'Halal', 'EN 14476 (virucidal)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'USA', 'Germany', 'Australia', 'South Korea', 'Japan', 'UK'],
    seoTitle: 'Wet Wipes Manufacturer Vietnam | OEM Non-Woven Hygiene Products | Private Label',
    seoDescription: 'OEM wet wipes and disposable hygiene products from Vietnam. ISO 13485, GMP certified. Baby wipes, antibacterial wipes, medical wipes. MOQ 5,000 units. Export to GCC, EU.',
    keywords: ['wet wipes manufacturer Vietnam', 'non-woven wipes Vietnam OEM', 'private label wipes Vietnam', 'hygiene products manufacturer Vietnam', 'disposable hygiene Vietnam'],
    oemDescription: "Custom OEM wet wipes and disposable hygiene products. Proprietary formula, custom branding, and packaging. MOQ 5,000 units.",
    relatedCategorySlugs: ['baby-products', 'home-personal-care', 'cleaning-tools', 'textile-apparel'],
    products: hygieneProducts,
  },
  // ─── Consumer Goods: Baby Products ──────────────────────────────────────────
  {
    slug: 'baby-products',
    name: 'Baby Products',
    tagline: 'Safe, Certified Baby Products — OEM Manufacturing from Vietnam',
    description: "Vietnam manufactures baby wipes, diapers, baby toiletries, and accessories to the highest safety standards. EN 71, REACH compliant. Dermatologist-tested formulas. Private label and OEM diaper manufacturing. Export to GCC, EU, ASEAN.",
    longDescription: "Baby product safety is the highest priority for both consumers and retailers. Ideal Deal Vietnam works exclusively with manufacturers that maintain rigorous safety testing, dermatological certification, and compliance with EU and GCC regulatory requirements for baby and infant products.",
    heroImage: '/products/babyC.png',
    icon: '👶',
    certifications: ['EN 71 (toy safety)', 'REACH Compliant', 'OEKO-TEX (fabrics)', 'Dermatologist Tested', 'Halal (select)', 'GMP ISO 22716 (toiletries)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Germany', 'Australia', 'Malaysia', 'Thailand'],
    seoTitle: 'Baby Products Manufacturer Vietnam | OEM Baby Wipes Diapers | Private Label',
    seoDescription: 'OEM baby products from Vietnam — wipes, diapers, toiletries. EN 71, REACH, dermatologist tested. MOQ 5,000 units. Private label. Export to GCC, EU, ASEAN.',
    keywords: ['baby products manufacturer Vietnam', 'OEM baby wipes Vietnam', 'diaper manufacturer Vietnam', 'private label baby products Vietnam', 'baby care supplier Vietnam'],
    oemDescription: "OEM baby product manufacturing. Custom formulation for baby toiletries, wipes, and accessories. EU and GCC regulatory compliance. MOQ 5,000 units.",
    relatedCategorySlugs: ['hygiene-disposable', 'home-personal-care', 'textile-apparel', 'plastic-household'],
    products: babyProducts,
  },
  // ─── Consumer Goods: Cleaning Tools ─────────────────────────────────────────
  {
    slug: 'cleaning-tools',
    name: 'Cleaning Tools',
    tagline: 'Microfiber Mops, Brushes & Cleaning Accessories from Vietnam',
    description: "Vietnam manufactures a wide range of cleaning tools — microfiber mops, brooms, scrub brushes, and cleaning accessories — for retail brands, wholesalers, and distributors. OEM private label. Competitive pricing. MOQ from 500 sets.",
    longDescription: "Vietnam's cleaning tools and household implements manufacturing is centred in Ho Chi Minh City and the surrounding industrial provinces, producing microfiber mops, telescopic handle systems, scrub brushes, and cleaning accessory kits for both OEM supply to global brands and direct wholesale export.",
    heroImage: '/products/mop.png',
    icon: '🧹',
    certifications: ['ISO 9001', 'OEKO-TEX (microfiber)', 'REACH Compliant', 'SGS Testing', 'BSCI'],
    exportMarkets: ['USA', 'Germany', 'UK', 'Australia', 'France', 'Netherlands', 'Canada', 'Saudi Arabia'],
    seoTitle: 'Cleaning Tools Manufacturer Vietnam | Microfiber Mop OEM Supplier | Wholesale',
    seoDescription: 'OEM cleaning tools from Vietnam — microfiber mops, brushes, accessories. ISO 9001, OEKO-TEX certified. MOQ 500 sets. Private label. Export to USA, EU, Australia.',
    keywords: ['cleaning tools manufacturer Vietnam', 'microfiber mop Vietnam OEM', 'cleaning accessories supplier Vietnam', 'mop manufacturer Vietnam', 'household cleaning tools Vietnam export'],
    oemDescription: "Private label and OEM cleaning tool sets. Custom logo, colour scheme, and retail packaging design. Rapid sampling. MOQ 500 sets.",
    relatedCategorySlugs: ['home-personal-care', 'plastic-household', 'hygiene-disposable', 'eco-packaging'],
    products: cleaningToolsProducts,
  },
  // ─── Consumer Goods: Plastic Household ──────────────────────────────────────
  {
    slug: 'plastic-household',
    name: 'Plastic Household Items',
    tagline: 'Durable Plastic Household Products from Vietnam',
    description: "Vietnam manufactures food-grade and household plastic containers, storage solutions, kitchenware, and utensils for export. FDA/LFGB food-contact compliant. PP, HDPE, and BPA-free materials. OEM private label from 1,000 units.",
    longDescription: "Vietnam's plastics manufacturing sector produces a comprehensive range of food-grade and non-food household plastic products for global retail and wholesale markets. Modern injection moulding and blow moulding facilities in Ho Chi Minh City and the Mekong Delta supply both branded and private label plastic household goods.",
    heroImage: '/products/plastic.png',
    icon: '🥤',
    certifications: ['FDA 21 CFR (food contact)', 'LFGB (Germany)', 'BPA-Free Declaration', 'REACH Compliant', 'ISO 9001'],
    exportMarkets: ['USA', 'Germany', 'Australia', 'UK', 'France', 'Saudi Arabia', 'Japan', 'Canada'],
    seoTitle: 'Plastic Household Items Vietnam | Food Grade Containers OEM | Wholesale Supplier',
    seoDescription: 'Food-grade plastic household products from Vietnam. FDA, LFGB, BPA-free certified. Containers, kitchenware, storage. MOQ 1,000 units. OEM private label. Export worldwide.',
    keywords: ['plastic household items Vietnam', 'food grade plastic containers Vietnam', 'plastic manufacturer Vietnam OEM', 'BPA-free plastic Vietnam', 'household plastic export Vietnam'],
    oemDescription: "Custom injection-moulded plastic household items. Tooling support and investment recovery programs. Private label from MOQ 1,000 units.",
    relatedCategorySlugs: ['eco-packaging', 'cleaning-tools', 'home-personal-care', 'hygiene-disposable'],
    products: plasticHouseholdProducts,
  },
  // ─── Consumer Goods: Canned & Preserved Food ────────────────────────────────
  {
    slug: 'canned-preserved-food',
    name: 'Canned & Preserved Food',
    tagline: 'Vietnam Canned Seafood, Vegetables & Fruits — Export Grade',
    description: "Vietnam exports premium canned tuna, sardines, vegetables, and fruits from HACCP, EU-registered, and BRC-certified processing plants. Long shelf-life, consistent quality, and private label available for retail brands and food distributors.",
    longDescription: "Vietnam's canned food industry combines the country's rich agricultural and seafood resources with modern food processing technology. HACCP and EU-registered canneries produce shelf-stable tuna, sardines, shrimp, and a range of tropical fruits and vegetables for export to over 50 countries.",
    heroImage: '/products/cans.png',
    icon: '🥫',
    certifications: ['HACCP', 'ISO 22000', 'BRC Food Grade A', 'EU Registration', 'FDA Registration', 'Halal', 'Kosher (select)'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'Germany', 'USA', 'UK', 'Australia', 'Netherlands', 'Japan'],
    seoTitle: 'Canned Food Vietnam Export | Canned Tuna Seafood Vegetables | HACCP Certified',
    seoDescription: 'Canned food from Vietnam — tuna, sardines, vegetables, fruits. HACCP, EU registered, BRC Grade A. MOQ 1 x 20ft. Supplier to GCC, EU, USA, Australia.',
    keywords: ['canned food Vietnam export', 'canned tuna Vietnam supplier', 'canned vegetables Vietnam', 'canned fruit Vietnam', 'HACCP canned food Vietnam'],
    oemDescription: "Private label canned food manufacturing. Custom recipes, label design, and retail pack configuration. BRC Grade A certified. MOQ 1 x 20ft.",
    relatedCategorySlugs: ['packaged-food-snacks', 'frozen-seafood', 'food-staples', 'edible-oils-fats'],
    products: cannedFoodProducts,
  },
  // ─── Consumer Goods: Packaged Food & Snacks ─────────────────────────────────
  {
    slug: 'packaged-food-snacks',
    name: 'Packaged Food & Snacks',
    tagline: 'Instant Noodles, Snacks & Packaged Foods from Vietnam',
    description: "Vietnam is a major producer of instant noodles, rice crackers, dried fruits, and packaged snacks. We export retail-ready and bulk packaged foods with HACCP, Halal, and private label options for food importers and distributors worldwide.",
    longDescription: "Vietnam's packaged food industry, anchored by global players like Acecook, Masan, and Vifon as well as hundreds of SME processors, produces a diverse range of shelf-stable foods for both domestic and export markets. Instant noodles, rice paper, dried fruit, and traditional Vietnamese snacks are among the most exported categories.",
    heroImage: '/products/snacks.png',
    icon: '🍜',
    certifications: ['HACCP', 'ISO 22000', 'Halal', 'Kosher (select)', 'FDA Registration'],
    exportMarkets: ['USA', 'Germany', 'Australia', 'Japan', 'South Korea', 'UAE', 'Russia', 'UK'],
    seoTitle: 'Packaged Food Vietnam Export | Instant Noodles Snacks | HACCP Halal Certified',
    seoDescription: 'Packaged food from Vietnam — instant noodles, rice crackers, dried fruit. HACCP, Halal, ISO 22000 certified. MOQ 1 container. Export to USA, EU, GCC, Asia.',
    keywords: ['packaged food Vietnam export', 'instant noodles Vietnam supplier', 'Vietnamese snacks wholesale', 'food exporter Vietnam', 'HACCP packaged food Vietnam'],
    oemDescription: "Private label packaged food and snack manufacturing. Custom recipes, flavours, and retail packaging. HACCP certified. MOQ 1,000 units.",
    relatedCategorySlugs: ['canned-preserved-food', 'food-staples', 'rice', 'edible-oils-fats'],
    products: packagedFoodProducts,
  },
  // ─── Consumer Goods: Food Staples ───────────────────────────────────────────
  {
    slug: 'food-staples',
    name: 'Food Staples',
    tagline: 'Salt, Sugar, Flour & Essential Food Commodities from Vietnam',
    description: "Vietnam exports refined salt, white sugar, wheat flour, and other essential food staples to food manufacturers and wholesale distributors across Asia, Africa, and the Middle East. HACCP certified. Bulk and retail pack available.",
    longDescription: "Food staples form the foundation of food manufacturing and retail supply chains globally. Vietnam produces and exports refined salt from coastal salt fields, refined white sugar from the southern provinces, and wheat flour from modern milling facilities. Ideal Deal Vietnam supplies these commodities in both industrial bulk and retail-ready packaging.",
    heroImage: '/products/Food Staples.jpeg',
    icon: '🧂',
    certifications: ['HACCP', 'ISO 22000', 'Halal', 'Codex Alimentarius', 'COO (Vietnam)'],
    exportMarkets: ['Bangladesh', 'Philippines', 'Indonesia', 'Cambodia', 'Nigeria', 'Ghana', 'UAE', 'Saudi Arabia'],
    seoTitle: 'Food Staples Export Vietnam | Salt Sugar Flour | Bulk Food Commodity Supplier',
    seoDescription: 'Food staples from Vietnam — refined salt, sugar, flour. HACCP, Halal, ISO 22000 certified. Bulk and retail. MOQ 1 container. Export to Asia, Africa, GCC.',
    keywords: ['food staples Vietnam export', 'refined salt Vietnam', 'white sugar Vietnam export', 'flour supplier Vietnam', 'bulk food commodity Vietnam'],
    relatedCategorySlugs: ['packaged-food-snacks', 'rice', 'edible-oils-fats', 'canned-preserved-food'],
    products: foodStaplesProducts,
  },
  // ─── Consumer Goods: Edible Oils & Fats ─────────────────────────────────────
  {
    slug: 'edible-oils-fats',
    name: 'Edible Oils & Fats',
    tagline: 'Coconut Oil, Cooking Oils & Edible Fats from Vietnam',
    description: "Vietnam produces and exports refined coconut oil, palm olein, soybean oil, and specialty edible fats. HACCP, Halal, RSPO (select) certified. Available in bulk tanker, IBC, and retail packaging. Export to GCC, EU, Asia.",
    longDescription: "Vietnam's edible oil sector processes a wide range of tropical and imported oilseed crops into refined, bleached, and deodorized (RBD) cooking oils and specialty fats for both food manufacturers and retail consumers. Coconut oil from the Mekong Delta, in particular, has gained significant international demand for both food and cosmetic applications.",
    heroImage: '/products/Edible Oils & Fats.jpeg',
    icon: '🫒',
    certifications: ['HACCP', 'ISO 22000', 'Halal', 'RSPO (select)', 'Kosher (select)', 'FDA Registration'],
    exportMarkets: ['Saudi Arabia', 'UAE', 'India', 'China', 'Germany', 'USA', 'Philippines', 'Australia'],
    seoTitle: 'Edible Oils Vietnam Export | Coconut Oil Palm Oil | Halal HACCP Supplier',
    seoDescription: 'Edible oils and fats from Vietnam refined coconut oil, palm olein, soybean oil. HACCP, Halal certified. Bulk tanker, IBC, retail. Export to GCC, EU, Asia.',
    keywords: ['edible oil Vietnam export', 'coconut oil Vietnam supplier', 'palm olein Vietnam', 'cooking oil exporter Vietnam', 'refined coconut oil Vietnam wholesale'],
    relatedCategorySlugs: ['food-staples', 'canned-preserved-food', 'packaged-food-snacks', 'raw-materials'],
    products: edibleOilsProducts,
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

export function getCategoriesBySlugs(slugs: string[]): ProductCategory[] {
  return slugs
    .map(slug => getCategoryBySlug(slug))
    .filter((cat): cat is ProductCategory => cat !== undefined);
}
