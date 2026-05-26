export interface CountryProduct {
  name: string;
  slug: string;
  categorySlug: string;
  demand: string;
  note: string;
  description?: string;
  image?: string;
  annualVolume?: string;
}

export interface CountryFAQ {
  question: string;
  answer: string;
}

export interface CountryRegulation {
  title: string;
  description: string;
}

export interface CountryData {
  slug: string;
  name: string;
  arabicName?: string;
  flag: string;
  region: string;
  capital: string;
  currency: string;
  population: string;
  gdpPerCapita: string;
  importVolume: string;
  tagline: string;
  heroDescription: string;
  whyVietnam: string[];
  topProducts: CountryProduct[];
  shippingInfo: {
    transitDays: string;
    mainPorts: string[];
    incoterms: string[];
    paymentMethods: string[];
  };
  certifications: string[];
  regulations: CountryRegulation[];
  faqs: CountryFAQ[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const countries: CountryData[] = [
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    arabicName: 'المملكة العربية السعودية',
    flag: '🇸🇦',
    region: 'Middle East / GCC',
    capital: 'Riyadh',
    currency: 'Saudi Riyal (SAR)',
    population: '36 million',
    gdpPerCapita: '$23,200',
    importVolume: 'Vietnam exports ~$3.2B to Saudi Arabia annually',
    tagline: 'Your Trusted Supplier for Vietnamese Products to Saudi Arabia',
    heroDescription: 'Saudi Arabia is the largest economy in the GCC and the Arab world. With Vision 2030 driving economic diversification and a young, growing population, demand for imported food commodities, agricultural products, and consumer goods is expanding rapidly. Vietnam is an ideal supply partner for Saudi importers.',
    whyVietnam: [
      'Vietnam is #1 globally in cashew nuts and black pepper exports — essential commodities for Saudi food manufacturers.',
      'Halal-certified processing facilities across all product categories meet Saudi import requirements.',
      'Competitive pricing vs. competitors: Vietnamese products offer consistent quality at better value.',
      'Reliable shipping lanes: 18–22 day transit to Jeddah or Dammam via major shipping lines.',
      'All documentation including SASO conformity, phytosanitary certificates, and COO from Vietnam is routinely handled.',
    ],
    topProducts: [
      { name: 'Cashew Nuts W320 / W240', slug: 'cashew-nuts-w320', categorySlug: 'cashew-nuts', demand: 'Very High', note: 'Used extensively in Saudi confectionery and retail snacking' },
      { name: 'Vietnamese Black Pepper', slug: 'black-pepper-bulk', categorySlug: 'spices', demand: 'High', note: 'Key ingredient for Saudi food manufacturing and retail' },
      { name: 'Frozen Vannamei Shrimp', slug: 'frozen-white-shrimp', categorySlug: 'frozen-seafood', demand: 'High', note: 'Premium seafood for hotels, restaurants, retail chains' },
      { name: 'Jasmine Rice ST25', slug: 'jasmine-rice', categorySlug: 'rice', demand: 'Medium-High', note: 'Fragrant rice growing in popularity vs Thai jasmine' },
      { name: 'Robusta Coffee Beans', slug: 'robusta-coffee-beans', categorySlug: 'coffee', demand: 'Growing', note: 'Input for Saudi coffee roasters and instant coffee brands' },
    ],
    shippingInfo: {
      transitDays: '18–22 days (Ho Chi Minh City → Jeddah / Dammam)',
      mainPorts: ['Jeddah Islamic Port', 'King Abdulaziz Port (Dammam)', 'King Fahad Industrial Port'],
      incoterms: ['FOB Ho Chi Minh City', 'CFR Jeddah', 'CIF Dammam', 'DDP Riyadh (by arrangement)'],
      paymentMethods: ['L/C at sight', 'T/T (30% deposit, 70% before shipment)', 'D/A 30–60 days (established accounts)'],
    },
    certifications: ['Halal (SANHA, MUI, or equivalent)', 'SASO Conformity Certificate', 'Phytosanitary Certificate', 'Certificate of Origin (Form A)', 'SGS / Intertek Pre-Shipment Inspection'],
    regulations: [
      { title: 'Halal Certification', description: 'All food imports require Halal certification from a SASO-recognized Islamic body.' },
      { title: 'GSO Standards', description: 'Food products must comply with Gulf Standard Organization (GSO) standards.' },
      { title: 'Arabic Labeling', description: 'Arabic labeling is mandatory for all retail food products.' },
      { title: 'Phytosanitary Certificate', description: 'Phytosanitary certificate required for agricultural commodities.' },
      { title: 'Seafood Facility Approval', description: 'Frozen seafood must originate from EU-registered or Saudi-approved facilities.' },
    ],
    faqs: [
      { question: 'Do Vietnamese food exports comply with Saudi SFDA regulations?', answer: 'Yes. We provide full SFDA-compliant documentation including Halal certificates, product specifications, manufacturing facility audits, and pre-shipment inspection reports from SGS or Intertek.' },
      { question: 'How long does it take to receive a shipment from Vietnam?', answer: 'Sea freight from Ho Chi Minh City or Da Nang to Jeddah takes 18–22 days; to Dammam 20–24 days. Air freight is available for samples and urgent shipments.' },
      { question: 'Can you arrange CIF delivery to Saudi ports?', answer: 'Yes, we offer FOB, CFR, and CIF pricing to Jeddah (JEDDAH) and Dammam (DAMMAM). We work with established freight forwarders and can arrange marine insurance.' },
      { question: 'What is the minimum order quantity for export to Saudi Arabia?', answer: 'For most products, the MOQ is 1 x 20ft container. For premium grades and specialty items, smaller orders (1–5 MT) are available at a slightly higher per-unit price.' },
      { question: 'Do you have established Saudi import partners you can refer us to?', answer: 'We have a network of Saudi importers and can facilitate introductions. However, our primary role is as exporter — we work with whichever Saudi licensed importer our buyer designates.' },
    ],
    seoTitle: 'Export from Vietnam to Saudi Arabia | Food & Agricultural Products Supplier',
    seoDescription: 'Export cashew nuts, coffee, shrimp, rice, and spices from Vietnam to Saudi Arabia. Halal certified, SASO compliant. MOQ 1 container. Direct manufacturer pricing.',
    keywords: ['export Vietnam to Saudi Arabia', 'Vietnam food export Saudi', 'Vietnamese cashew nuts Saudi Arabia', 'halal food supplier Vietnam', 'import from Vietnam Saudi Arabia'],
  },
  {
    slug: 'uae',
    name: 'UAE',
    arabicName: 'الإمارات العربية المتحدة',
    flag: '🇦🇪',
    region: 'Middle East / GCC',
    capital: 'Abu Dhabi',
    currency: 'UAE Dirham (AED)',
    population: '10 million',
    gdpPerCapita: '$44,300',
    importVolume: 'Vietnam exports ~$7.5B to UAE annually (including re-export hub)',
    tagline: 'Vietnam Export to UAE — Your Gateway to the GCC and MENA Region',
    heroDescription: "The UAE is not just a destination market — it is the re-export gateway to the wider GCC, MENA, and East Africa region. With Dubai's Jebel Ali Port ranking as the 9th busiest container port globally, many of our clients use UAE-based importers to distribute Vietnamese products across 50+ markets.",
    whyVietnam: [
      "Vietnam is among UAE's top food import origins for cashews, coffee, seafood, and pepper.",
      'Dubai-based importers use Vietnamese products as cost-effective alternatives to higher-priced Asian origins.',
      "UAE's free zone infrastructure (Jafza, KIZAD) allows efficient re-export across MENA and Africa.",
      'Transit time of 14–18 days from Ho Chi Minh City to Jebel Ali.',
      'Strong Vietnamese diaspora community creates established trade networks and trusted logistics channels.',
    ],
    topProducts: [
      { name: 'Cashew Nuts (W320, W240, W180)', slug: 'cashew-nuts-w320', categorySlug: 'cashew-nuts', demand: 'Very High', note: 'UAE imports for domestic retail and GCC re-export' },
      { name: 'Frozen Vannamei Shrimp', slug: 'frozen-white-shrimp', categorySlug: 'frozen-seafood', demand: 'Very High', note: 'Hotels, restaurants, retail chains across UAE and re-export' },
      { name: 'Vietnamese Coffee (Robusta)', slug: 'robusta-coffee-beans', categorySlug: 'coffee', demand: 'High', note: 'Input for UAE coffee roasters and private label brands' },
      { name: 'Black Pepper', slug: 'black-pepper-bulk', categorySlug: 'spices', demand: 'High', note: 'Food manufacturing and spice retail in UAE and GCC' },
      { name: 'Jasmine Rice', slug: 'jasmine-rice', categorySlug: 'rice', demand: 'Medium', note: 'Asian community retail and re-export to East Africa' },
    ],
    shippingInfo: {
      transitDays: '14–18 days (Ho Chi Minh City → Jebel Ali / Abu Dhabi)',
      mainPorts: ['Jebel Ali Port (Dubai)', 'Khalifa Port (Abu Dhabi)', 'Sharjah Port'],
      incoterms: ['FOB HCMC', 'CFR Jebel Ali', 'CIF Jebel Ali', 'DAP Dubai Warehouse'],
      paymentMethods: ['L/C at sight', 'T/T (50/50)', 'CAD (Documents Against Payment)', 'Open account (established relations)'],
    },
    certifications: ['Halal (UAE-recognized body)', 'ESMA Conformity', 'Phytosanitary Certificate', 'Certificate of Origin', 'Health Certificate'],
    regulations: [
      { title: 'ESMA Compliance', description: 'ESMA (Emirates Standards & Metrology Authority) governs food safety standards.' },
      { title: 'Halal Certification', description: 'Halal certification required for all meat and food products.' },
      { title: 'Arabic Labeling', description: 'Arabic labeling required for retail products sold in UAE.' },
      { title: 'MoHAP Approval', description: 'MoHAP (Ministry of Health) approval needed for certain health food items.' },
      { title: 'CITES Certificate', description: 'CITES certificate required for certain wood and botanical products.' },
    ],
    faqs: [
      { question: 'Can I use UAE as a re-export hub for distributing across GCC?', answer: 'Yes, many of our UAE clients import into Jafza free zone and re-export to Saudi Arabia, Oman, Kuwait, Qatar, and Bahrain without paying UAE customs duties on the re-exported goods.' },
      { question: 'What shipping lines serve the Vietnam–UAE route?', answer: 'Multiple major carriers operate this route including MSC, CMA CGM, COSCO, Evergreen, and ONE Line. Transit time to Jebel Ali is typically 14–18 days.' },
      { question: 'Do you have references from existing UAE buyers?', answer: 'Yes, we can provide references from existing Dubai and Abu Dhabi based importers upon request under NDA.' },
    ],
    seoTitle: 'Export Vietnam to UAE | Cashew Nuts Coffee Shrimp Supplier | GCC Gateway',
    seoDescription: 'Export from Vietnam to UAE — cashew nuts, coffee, shrimp, spices. Halal certified. MOQ 1 container. Use UAE as GCC re-export gateway. Competitive FOB pricing.',
    keywords: ['export Vietnam to UAE', 'Vietnam food supplier UAE', 'cashew nuts supplier Dubai', 'Vietnamese products UAE', 'import from Vietnam to Dubai'],
  },
  {
    slug: 'egypt',
    name: 'Egypt',
    arabicName: 'مصر',
    flag: '🇪🇬',
    region: 'North Africa / MENA',
    capital: 'Cairo',
    currency: 'Egyptian Pound (EGP)',
    population: '104 million',
    gdpPerCapita: '$4,200',
    importVolume: 'Vietnam exports ~$500M to Egypt annually',
    tagline: "Vietnamese Products to Egypt — Africa's Largest Food Import Market",
    heroDescription: "Egypt is Africa's most populous country and one of the largest food-importing nations in the MENA region. With a young, growing population and strong demand for affordable, quality food staples, Egypt represents a significant market opportunity for Vietnamese agricultural exports.",
    whyVietnam: [
      "Vietnam's competitive pricing makes it a preferred origin for Egyptian importers seeking quality at value.",
      'Egyptian buyers particularly prize Vietnamese black pepper, cashew nuts, and coffee for food manufacturing.',
      'Vietnamese rice offers a fragrant alternative to domestic Egyptian rice varieties.',
      'Direct shipping services via Alexandria Port with transit times of 20–25 days.',
      'Bilateral trade relations between Vietnam and Egypt are growing with new MoU frameworks.',
    ],
    topProducts: [
      { name: 'Black Pepper', slug: 'black-pepper-bulk', categorySlug: 'spices', demand: 'High', note: 'Egypt is a major buyer of Vietnamese pepper for food processing' },
      { name: 'Cashew Nuts W320', slug: 'cashew-nuts-w320', categorySlug: 'cashew-nuts', demand: 'High', note: 'Growing retail and food manufacturing demand' },
      { name: 'Robusta Coffee Beans', slug: 'robusta-coffee-beans', categorySlug: 'coffee', demand: 'Medium-High', note: "Egypt's growing coffee culture drives import demand" },
      { name: 'Jasmine Rice', slug: 'jasmine-rice', categorySlug: 'rice', demand: 'Medium', note: 'Premium positioning against domestic rice varieties' },
      { name: 'Frozen Seafood', slug: 'frozen-white-shrimp', categorySlug: 'frozen-seafood', demand: 'Growing', note: 'Hotel and restaurant sector expansion' },
    ],
    shippingInfo: {
      transitDays: '20–25 days (Ho Chi Minh City → Alexandria)',
      mainPorts: ['Port of Alexandria', 'Port Said', 'Damietta Port'],
      incoterms: ['FOB HCMC', 'CFR Alexandria', 'CIF Port Said'],
      paymentMethods: ['L/C at sight (preferred)', 'T/T with full prepayment (new buyers)', 'CAD 30–60 days (established)'],
    },
    certifications: ['GOEIC Conformity Certificate', 'Phytosanitary Certificate', 'Certificate of Origin (Arab League)', 'Halal Certification', 'SGS Inspection Report'],
    regulations: [
      { title: 'GOEIC Inspection', description: 'GOEIC (General Organization for Export and Import Control) pre-shipment inspection required for many food items.' },
      { title: 'Arabic Labeling', description: 'Arabic labeling mandatory for retail products.' },
      { title: 'Halal Certification', description: 'Halal certification required for meat, poultry, and food additives.' },
      { title: 'EFSA Approval', description: 'Egyptian Food Safety Authority (EFSA) approval for novel food categories.' },
      { title: 'Payment Terms', description: 'Egyptian buyers often require 100% L/C for first transactions.' },
    ],
    faqs: [
      { question: 'Is GOEIC inspection required for all products exported to Egypt?', answer: 'GOEIC inspection is mandatory for certain categories including food commodities. We handle pre-shipment inspection coordination with SGS, Intertek, or Bureau Veritas on behalf of Egyptian importers.' },
      { question: 'What payment terms are typical for Egyptian buyers?', answer: 'For new buyers, we require 100% L/C at sight or full T/T prepayment. Established buyers can negotiate CAD or partial open account terms.' },
      { question: 'Can you provide Arabic documentation for Egyptian customs?', answer: 'Yes, we can provide Arabic translations of key documents and work with Arabic-speaking freight forwarders familiar with Egyptian customs procedures.' },
    ],
    seoTitle: 'Export Vietnam to Egypt | Food Agricultural Products Supplier Cairo Alexandria',
    seoDescription: 'Export from Vietnam to Egypt — black pepper, cashew nuts, coffee, rice, seafood. MOQ 1 container. CFR Alexandria pricing. GOEIC compliant documentation.',
    keywords: ['export Vietnam to Egypt', 'Vietnam food supplier Egypt', 'black pepper supplier Egypt', 'cashew nuts Egypt import', 'Vietnamese products Egypt'],
  },
  {
    slug: 'oman',
    name: 'Oman',
    arabicName: 'عُمان',
    flag: '🇴🇲',
    region: 'Middle East / GCC',
    capital: 'Muscat',
    currency: 'Omani Rial (OMR)',
    population: '4.5 million',
    gdpPerCapita: '$19,500',
    importVolume: 'Growing bilateral trade; Vietnam → Oman ~$150M annually',
    tagline: 'Premium Vietnamese Exports to Oman — Quality for the Omani Market',
    heroDescription: "Oman's growing retail sector, thriving hospitality industry, and strategic position on the Gulf of Oman make it an attractive destination for premium Vietnamese food exports. Oman's buyers are known for their appreciation of consistent quality and reliable supply chains.",
    whyVietnam: [
      "Vietnamese cashew nuts and seafood are well-established in Oman's supermarket chains.",
      "Transit time of 16–20 days to Salalah or Muscat via direct services.",
      'Oman Free Trade Agreement network makes re-export to neighboring markets possible.',
      'Halal certification from recognized Islamic bodies is standard across our product range.',
    ],
    topProducts: [
      { name: 'Cashew Nuts W320 / W240', slug: 'cashew-nuts-w320', categorySlug: 'cashew-nuts', demand: 'High', note: "Key snack commodity across Oman's retail chains" },
      { name: 'Frozen Shrimp', slug: 'frozen-white-shrimp', categorySlug: 'frozen-seafood', demand: 'High', note: "Strong demand from Muscat's hotel and restaurant sector" },
      { name: 'Vietnamese Black Pepper', slug: 'black-pepper-bulk', categorySlug: 'spices', demand: 'Medium', note: 'Spice import for food manufacturing and retail' },
      { name: 'Coffee Beans', slug: 'robusta-coffee-beans', categorySlug: 'coffee', demand: 'Growing', note: "Oman's café culture is expanding rapidly" },
    ],
    shippingInfo: {
      transitDays: '16–20 days (Ho Chi Minh City → Salalah / Muscat)',
      mainPorts: ['Port of Salalah', 'Port Sultan Qaboos (Muscat)', 'Sohar Port'],
      incoterms: ['FOB HCMC', 'CFR Salalah', 'CIF Muscat'],
      paymentMethods: ['L/C at sight', 'T/T 30/70', 'CAD (established accounts)'],
    },
    certifications: ['Halal', 'Phytosanitary Certificate', 'Certificate of Origin', 'HACCP', 'SGS Inspection'],
    regulations: [
      { title: 'FSC Standards', description: 'Oman Food Safety Center (FSC) governs import standards.' },
      { title: 'Halal Certification', description: 'Halal certificate required for all meat and certain food products.' },
      { title: 'Arabic Labeling', description: 'Arabic labeling required for retail goods.' },
      { title: 'GSO Compliance', description: 'Products must meet GSO (Gulf Standards Organization) specifications.' },
    ],
    faqs: [
      { question: 'What is the port situation in Oman?', answer: "Salalah Port is a major transshipment hub with excellent connections. Muscat's Sultan Qaboos Port handles most Oman-destined cargo. We can quote to either port." },
      { question: 'Can shipments transit through Oman to other GCC countries?', answer: 'Yes, Salalah Free Zone is a major regional hub. Some buyers use Oman for onward distribution to neighboring Gulf states.' },
    ],
    seoTitle: 'Export Vietnam to Oman | Cashew Nuts Seafood Coffee Supplier | GCC',
    seoDescription: 'Export from Vietnam to Oman cashew nuts, frozen shrimp, coffee, black pepper. Halal certified. MOQ 1 container. CFR Muscat / Salalah pricing.',
    keywords: ['export Vietnam to Oman', 'cashew nuts Oman supplier', 'Vietnam food export Oman', 'seafood supplier Oman'],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    arabicName: 'قطر',
    flag: '🇶🇦',
    region: 'Middle East / GCC',
    capital: 'Doha',
    currency: 'Qatari Riyal (QAR)',
    population: '2.9 million',
    gdpPerCapita: '$55,000+',
    importVolume: 'Vietnam→Qatar trade growing at 15% CAGR',
    tagline: "Premium Vietnamese Food Exports to Qatar The World's Wealthiest Market",
    heroDescription: "Qatar's exceptionally high GDP per capita, world class hospitality sector, and rapidly expanding food retail landscape make it one of the highest-value destination markets for premium Vietnamese exports. Qatar imports over 90% of its food supply, creating significant demand for reliable international food suppliers.",
    whyVietnam: [
      'Qatar imports nearly 100% of its food Vietnam is a preferred origin for quality food staples.',
      "The FIFA World Cup legacy has expanded Qatar's hotel and restaurant sector, driving premium seafood demand.",
      'Short transit time of 16–18 days via direct services to Hamad Port.',
      "Halal-certified products align with Qatar's mandatory import requirements.",
    ],
    topProducts: [
      { name: 'Premium Cashew Nuts (W240, W180)', slug: 'cashew-nuts-w240', categorySlug: 'cashew-nuts', demand: 'Very High', note: "Qatar's retail sector demands premium large-grade cashews" },
      { name: 'Frozen Vannamei Shrimp (PTO, PDTO)', slug: 'frozen-white-shrimp', categorySlug: 'frozen-seafood', demand: 'Very High', note: 'Hospitality sector drives demand for premium shrimp forms' },
      { name: 'Specialty Coffee (Arabica)', slug: 'arabica-coffee-beans', categorySlug: 'coffee', demand: 'Growing', note: "Qatar's specialty café segment is expanding" },
      { name: 'Black Pepper', slug: 'black-pepper-bulk', categorySlug: 'spices', demand: 'Medium', note: 'Food manufacturing and retail spice market' },
    ],
    shippingInfo: {
      transitDays: '16–18 days (Ho Chi Minh City → Hamad Port, Doha)',
      mainPorts: ['Hamad Port (Doha)'],
      incoterms: ['FOB HCMC', 'CFR Doha', 'CIF Doha', 'DDP Doha (by arrangement)'],
      paymentMethods: ['L/C at sight', 'T/T 50/50', 'Bank Guarantee (government tenders)'],
    },
    certifications: ['Halal (Qatar AQCM approved body)', 'QSAS (Qatar Standards)', 'Phytosanitary Certificate', 'COO', 'Health Certificate'],
    regulations: [
      { title: 'MOPH Approval', description: 'MOPH (Ministry of Public Health) approval for food products.' },
      { title: 'Halal Certification', description: 'Halal certification mandatory from a body recognized by Qatar.' },
      { title: 'GSO Standards', description: 'GSO standards compliance for all GCC food imports.' },
      { title: 'Bilingual Labeling', description: 'Arabic and English labeling required.' },
    ],
    faqs: [
      { question: 'Does Qatar have specific Halal body requirements different from Saudi Arabia?', answer: 'Qatar follows GSO Halal standard and typically accepts certificates from MUI Indonesia, JAKIM Malaysia, IFANCA USA, and similar recognized bodies. We verify acceptance for each specific product category.' },
      { question: 'Can you tender for government procurement in Qatar?', answer: 'We can support Qatari buyers in responding to government food procurement tenders by providing necessary certifications, pricing, and product compliance documentation.' },
    ],
    seoTitle: 'Export Vietnam to Qatar | Premium Food Agricultural Supplier | Halal Certified',
    seoDescription: 'Export from Vietnam to Qatar — premium cashew nuts, frozen shrimp, coffee, spices. Halal certified. MOQ 1 container. CFR Doha pricing.',
    keywords: ['export Vietnam to Qatar', 'food supplier Qatar', 'Vietnamese cashew nuts Qatar', 'frozen shrimp Qatar', 'Vietnam halal export Qatar'],
  },
];

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countries.find((c) => c.slug === slug);
}
