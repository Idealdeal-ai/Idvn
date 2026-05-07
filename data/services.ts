// ============================================================
// data/services.ts — Service sub-page data for Ideal Deal Vietnam
// ============================================================

export interface ServiceFeature {
  icon: string; // material-symbols icon name
  title: string;
  description: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  longDescription: string;
  icon: string; // material-symbols icon name
  heroImage: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  targetIndustries: string[];
  certifications: string[];
  faqs: ServiceFAQ[];
  relatedServices: string[]; // other service slugs
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const servicesData: ServiceData[] = [
  // ─────────────────────────────────────────────────────────
  // 1. PRIVATE LABEL
  // ─────────────────────────────────────────────────────────
  {
    slug: 'private-label',
    name: 'Private Label Manufacturing',
    tagline: 'Your Brand. Vietnamese Quality.',
    heroDescription:
      'Launch your own food brand with premium Vietnamese products — packaged, labeled, and certified to your exact specifications. We handle everything from formulation to freight.',
    longDescription: `
Private label manufacturing is one of the fastest-growing strategies for importers, distributors, and retailers who want to build brand equity without investing in production facilities. Ideal Deal Vietnam bridges the gap between world-class Vietnamese food production and your brand's specific requirements.

**Why Choose Private Label from Vietnam?**

Vietnam is among the world's top five exporters of coffee, cashew nuts, black pepper, rice, and frozen seafood. The country's competitive labor costs, sophisticated agri-processing infrastructure, and access to high-quality raw materials make it an ideal private label hub for international buyers.

Our private label clients include supermarket chains in Saudi Arabia and the UAE, specialty food brands in Europe, and health-food retailers in Canada and Australia. Every client starts with the same commitment: your brand on the shelf, our quality behind it.

**Product Categories Available for Private Label**

We offer private label services across our entire product portfolio: roasted and ground coffee, whole and broken cashew nuts, jasmine and fragrant rice, frozen shrimp and seafood, and ground or whole spices including black pepper, turmeric, and cinnamon. Each product can be formulated, blended, and packaged to meet your target market's taste and regulatory requirements.

**Labeling & Packaging**

We work with certified packaging partners to produce retail-ready pouches, cans, boxes, and vacuum packs. Packaging formats available include: stand-up pouches with zip locks, vacuum-sealed bags, tin cans, glass jars, kraft paper bags, and bulk sacks. We can match your brand's Pantone colors, apply barcode and nutrition information panels in any language, and add regulatory compliance text for your destination market.

**Regulatory Compliance**

Private label products for GCC markets require Halal certification — we work with JAKIM-recognized and ESMA-approved Halal certifying bodies. Products for the EU require compliance with EU 2073/2005 (microbiological criteria), pesticide MRLs under EC 396/2005, and full allergen labeling under EU 1169/2011. We prepare all necessary documentation including Certificate of Analysis (CoA), Certificate of Origin (C/O), Phytosanitary Certificate, and Health Certificate.

**Minimum Order Quantities**

Private label orders typically start at one 20-foot container (~20 MT for coffee, ~18 MT for cashew nuts, ~25 MT for rice). Smaller pilot orders of 1–5 MT are available for new clients conducting market testing before scaling. We offer flexible MOQs for clients committing to annual volume agreements.

**Lead Times**

Standard private label orders (with approved artwork and confirmed specifications) ship within 3–5 weeks. Complex formulations or custom packaging requiring new tooling may require 6–8 weeks. We provide a detailed production timeline at order confirmation.

**Quality Assurance**

Every private label batch undergoes third-party laboratory testing at SGS, Eurofins, or Bureau Veritas before shipment. We provide the full CoA with your shipment documents. Clients may also send their own inspectors or appoint a third-party inspection agency at any stage of production.
    `.trim(),
    icon: 'label',
    heroImage: '/images/services/private-label-hero.jpg',
    features: [
      {
        icon: 'inventory_2',
        title: 'Custom Packaging',
        description:
          'Stand-up pouches, vacuum bags, tin cans, kraft sacks — any format, your brand colors, any language on the label.',
      },
      {
        icon: 'science',
        title: 'Product Formulation',
        description:
          "Custom coffee blends, spice mixes, rice varieties — we develop recipes to match your target market's taste profile.",
      },
      {
        icon: 'verified',
        title: 'Halal & Organic Certified',
        description:
          'Products certified Halal (JAKIM/ESMA), organic (EU/USDA), and compliant with importing country regulations.',
      },
      {
        icon: 'local_shipping',
        title: 'Full Export Documentation',
        description:
          'C/O, CoA, Phytosanitary Certificate, Health Certificate, Packing List — all documents prepared and verified.',
      },
      {
        icon: 'scale',
        title: 'Flexible MOQs',
        description:
          'Pilot orders from 1 MT for market testing, scaling to full container loads once your brand is established.',
      },
      {
        icon: 'groups',
        title: 'Dedicated Account Manager',
        description:
          'One point of contact from product development through final delivery — no handoffs, no confusion.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Brief',
        description:
          'Share your brand vision, target market, product requirements, and budget. We assess feasibility and suggest optimal product configurations.',
      },
      {
        step: 2,
        title: 'Sample Development',
        description:
          'We develop product samples and packaging mock-ups for your review. Typically 2–3 rounds of samples until you approve the final specification.',
      },
      {
        step: 3,
        title: 'Lab Testing & Approval',
        description:
          'Approved samples undergo third-party laboratory testing. You receive a full CoA confirming the product meets all regulatory and quality standards.',
      },
      {
        step: 4,
        title: 'Production & QC',
        description:
          'Full production run with in-line quality control. You or your appointed inspector may visit the factory at any stage.',
      },
      {
        step: 5,
        title: 'Documentation & Shipping',
        description:
          'All export documents prepared. Cargo booked, container loaded, and B/L issued. Real-time shipment tracking provided.',
      },
    ],
    targetIndustries: [
      'Supermarkets & Hypermarkets',
      'Specialty Food Retailers',
      'Online Grocery Platforms',
      'Wholesale Distributors',
      'Hotel & Hospitality Groups',
      'Health Food Brands',
    ],
    certifications: [
      'Halal (JAKIM / ESMA)',
      'ISO 22000:2018',
      'HACCP',
      'Organic (EU / USDA)',
      'FDA Registration',
      'FSSC 22000',
    ],
    faqs: [
      {
        question: 'What is the minimum order quantity for private label?',
        answer:
          'Standard private label orders start at one 20-foot container. For new clients doing market testing, pilot orders of 1–5 MT are available. Contact us to discuss your specific volume requirements.',
      },
      {
        question: 'Can I get samples before committing to a full order?',
        answer:
          "Yes. We provide up to 3 kg of product samples free of charge (freight at buyer's cost). Sample development takes 5–10 business days depending on the product.",
      },
      {
        question: 'Do you provide Halal certification for GCC markets?',
        answer:
          'Yes. We work with JAKIM-recognized and ESMA-approved Halal certifying bodies. All our factories maintain valid Halal certificates, and we can provide product-specific Halal certificates for each shipment.',
      },
      {
        question: 'How long does private label production take?',
        answer:
          'From artwork approval to shipment, standard orders take 3–5 weeks. Complex formulations or new packaging tooling may extend lead time to 6–8 weeks. We provide a production timeline at order confirmation.',
      },
      {
        question: 'Can you print labels in Arabic?',
        answer:
          'Yes. We produce labels in Arabic, English, French, Spanish, Chinese, and Vietnamese. We recommend having your local regulatory consultant review the Arabic label copy before we go to print.',
      },
    ],
    relatedServices: ['oem-manufacturing', 'quality-control', 'export-support'],
    seoTitle: 'Private Label Food Manufacturing Vietnam | Coffee, Cashew, Rice & Spices',
    seoDescription:
      'Launch your brand with Vietnamese private label manufacturing. Coffee, cashew nuts, rice, seafood, and spices — custom packaging, Halal certified, full export documentation.',
    keywords: [
      'private label food vietnam',
      'vietnam private label coffee',
      'cashew nut private label manufacturer',
      'halal private label food vietnam',
      'custom packaging food vietnam',
      'vietnamese food private label exporter',
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 2. OEM MANUFACTURING
  // ─────────────────────────────────────────────────────────
  {
    slug: 'oem-manufacturing',
    name: 'OEM Manufacturing',
    tagline: 'Scale Production Without Building a Factory.',
    heroDescription:
      'Commission large-scale food manufacturing in Vietnam under your technical specification. Our partner factories operate ISO 22000-certified production lines with full traceability from farm to container.',
    longDescription: `
OEM (Original Equipment Manufacturer) food production in Vietnam allows international food companies to access world-class production capacity without the capital investment of building their own facility. Ideal Deal Vietnam acts as your on-the-ground manufacturing partner, managing factory selection, technical compliance, production scheduling, and quality assurance on your behalf.

**Vietnam as a Global OEM Food Hub**

Vietnam's food processing industry has invested heavily in modern infrastructure over the past decade. Factories in the country now operate to HACCP, ISO 22000, BRC, SQF, and FSSC 22000 standards — the same certifications demanded by European and North American retail chains. Combined with Vietnam's natural advantage in raw material supply, labor cost competitiveness, and government export incentives, OEM production from Vietnam offers exceptional value.

**Our OEM Manufacturing Capabilities**

We manage OEM production for clients across multiple product categories. In coffee, we operate roasting, grinding, instant coffee spray-drying, and capsule-filling lines. In cashew nuts, we process raw nuts through shelling, peeling, grading, roasting, salting, and flavoring lines. In seafood, we manage IQF freezing, HACCP-compliant processing, and ready-to-cook preparations. In rice, we handle milling, grading, polishing, and parboiling. In spices, we offer grinding, blending, sterilization (steam pasteurization and ETO), and encapsulation.

**Technical Specification Development**

If you have an existing product that you want to reproduce in Vietnam, we conduct a detailed technical audit of your specification. We match ingredient sourcing, processing methods, particle size, moisture content, color, and flavor profile to your target. Our food scientists work with you to develop the formulation and validate it through sensory analysis and laboratory testing.

**Factory Audit & Selection**

We maintain a vetted network of partner factories across Vietnam's key agricultural regions — Ho Chi Minh City, Dak Lak, Binh Phuoc, Can Tho, and Hue. We select the most appropriate factory for your product category and volume, then arrange a factory audit (either in-person or via video) before production begins.

**Volume and Scalability**

OEM contracts typically start at 2–5 containers per month, scaling to 20+ containers per month for large retail programs. We support clients through seasonal demand fluctuations, managing production scheduling across multiple factory lines when needed.

**Traceability and Documentation**

Every OEM production batch is fully traceable from raw material lot to finished product. We maintain batch records, CoA, incoming material inspection reports, production logs, and finished goods inspection reports. These documents are available to you and your auditors at any time.
    `.trim(),
    icon: 'factory',
    heroImage: '/images/services/oem-manufacturing-hero.jpg',
    features: [
      {
        icon: 'precision_manufacturing',
        title: 'Spec-to-Production',
        description:
          'Submit your technical specification — we reproduce it exactly using Vietnamese raw materials and certified production lines.',
      },
      {
        icon: 'network_check',
        title: 'Vetted Factory Network',
        description:
          "Access our network of ISO 22000, BRC, and HACCP-certified factories across Vietnam's key agricultural regions.",
      },
      {
        icon: 'data_object',
        title: 'Full Traceability',
        description:
          'From raw material lot to finished goods, every production batch is documented and traceable. Audit-ready records at all times.',
      },
      {
        icon: 'trending_up',
        title: 'Scalable Capacity',
        description:
          'Start with 2–5 containers/month and scale to 20+ as your retail program grows. We manage production scheduling across multiple lines.',
      },
      {
        icon: 'verified_user',
        title: 'Third-Party Testing',
        description:
          'Every production run tested by SGS, Eurofins, or Bureau Veritas before shipment. CoA provided with every container.',
      },
      {
        icon: 'support_agent',
        title: 'On-Site QC Representative',
        description:
          'Our QC team is based at or near each partner factory for real-time monitoring during production runs.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Specification Review',
        description:
          'Submit your product specification, target price, and volume forecast. We assess feasibility and identify the best production approach.',
      },
      {
        step: 2,
        title: 'Factory Selection & Audit',
        description:
          'We select the most suitable certified factory from our network and arrange a factory audit — in-person or via video call.',
      },
      {
        step: 3,
        title: 'Trial Production',
        description:
          'A small-scale trial run produces samples for your approval. Lab tests confirm the product meets your specification.',
      },
      {
        step: 4,
        title: 'Commercial Production',
        description:
          'Full-scale production with in-line QC checks. Final inspection before loading. Real-time updates from our on-site team.',
      },
      {
        step: 5,
        title: 'Ongoing Programme Management',
        description:
          'Monthly production scheduling, raw material procurement management, and continuous quality monitoring for repeat programs.',
      },
    ],
    targetIndustries: [
      'Food & Beverage Brands',
      'Private Equity-Backed Food Groups',
      'Supermarket Own-Brand Programs',
      'Food Service Distributors',
      'Industrial Food Ingredient Buyers',
      'Contract Manufacturers Seeking Supply',
    ],
    certifications: [
      'ISO 22000:2018',
      'HACCP',
      'BRC (British Retail Consortium)',
      'SQF (Safe Quality Food)',
      'FSSC 22000',
      'FDA Registration (US)',
    ],
    faqs: [
      {
        question: 'What is the difference between OEM and private label?',
        answer:
          'Private label focuses on putting your brand on a standard or slightly customized product. OEM involves reproducing your full technical specification — your exact formulation, process parameters, and quality standard — using our production infrastructure.',
      },
      {
        question: 'Can I visit the factory before placing an order?',
        answer:
          'Yes, factory visits are encouraged and can be arranged with advance notice. We can also conduct a virtual factory tour with live video walkthrough if you cannot travel to Vietnam.',
      },
      {
        question: 'What certifications do your partner factories hold?',
        answer:
          'Our core partner factories are certified to ISO 22000, HACCP, and relevant product-specific certifications (Halal, Organic, etc.). Several factories also hold BRC and FSSC 22000 certificates for clients requiring those standards.',
      },
      {
        question: 'What is the minimum monthly volume for an OEM contract?',
        answer:
          'Most OEM programs start at 2 containers (approximately 40 MT) per month. We can discuss smaller trial volumes during the onboarding phase.',
      },
      {
        question: 'Do you manage raw material sourcing for OEM production?',
        answer:
          'Yes. We handle all raw material procurement, incoming inspection, and supplier management. You can also supply specific approved ingredients if required by your specification.',
      },
    ],
    relatedServices: ['private-label', 'quality-control', 'logistics'],
    seoTitle: 'OEM Food Manufacturing Vietnam | Contract Production Coffee, Cashew, Seafood',
    seoDescription:
      'OEM food manufacturing in Vietnam for international brands. ISO 22000-certified factories, full traceability, scalable capacity from 2 to 20+ containers/month.',
    keywords: [
      'oem food manufacturing vietnam',
      'contract food production vietnam',
      'vietnam food contract manufacturer',
      'oem coffee production vietnam',
      'cashew nut oem manufacturer',
      'iso 22000 food factory vietnam',
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 3. EXPORT SUPPORT
  // ─────────────────────────────────────────────────────────
  {
    slug: 'export-support',
    name: 'Export Support & Documentation',
    tagline: 'From Purchase Order to Port — Handled.',
    heroDescription:
      'Navigating Vietnamese export regulations, trade documentation, and customs procedures can be complex. Our export support team manages the entire process so your shipment arrives on time, every time.',
    longDescription: `
Exporting food products from Vietnam requires precise coordination between producers, freight forwarders, customs brokers, certifying authorities, and the importing country's customs. A single missing document — a Phytosanitary Certificate, an incorrect HS code, or an expired Halal certificate — can result in shipment delays, port detention, or outright rejection. Ideal Deal Vietnam's export support service eliminates these risks by managing the entire export process from your purchase order to final delivery.

**What We Handle**

Our export support covers every step of the documentary and logistical process. Before production, we confirm that your destination country's import requirements are met — including quarantine conditions, pesticide MRL limits, microbiological standards, and labeling regulations. During production, we coordinate third-party testing and certification. Before shipment, we prepare and verify all documents. At origin, we manage customs clearance and cargo handover.

**Documentation We Prepare**

For every shipment, we prepare and coordinate the following documents:

- **Commercial Invoice** — accurate pricing, HS codes, and Incoterms
- **Packing List** — detailed carton counts, weights, and dimensions
- **Bill of Lading (B/L)** — coordinated with the shipping line
- **Certificate of Origin (C/O)** — issued by VCCI or relevant authority, confirming Vietnamese origin for preferential tariff under VJEPA, RCEP, EVFTA, or other applicable FTAs
- **Phytosanitary Certificate** — for plant-based products (coffee, cashew, rice, spices), issued by MARD-approved inspection offices
- **Health Certificate** — for animal and seafood products, issued by NAFIQAD
- **Certificate of Analysis (CoA)** — third-party lab results confirming product specification compliance
- **Halal Certificate** — for GCC and Muslim-majority market shipments
- **Fumigation Certificate** — for wooden packing materials
- **Weight Certificate** — for bulk commodities

**Free Trade Agreement Optimization**

Vietnam is a signatory to 16 Free Trade Agreements, including EVFTA (EU-Vietnam), RCEP (Asia-Pacific), VKFTA (South Korea), CPTPP (11 countries), and VJEPA (Japan). Proper C/O documentation allows buyers to claim preferential import duties that can reduce your landed cost by 5–20% depending on the product and destination. Our team ensures your shipments are correctly documented to capture all available FTA benefits.

**Importer Guidance**

For clients new to importing from Vietnam, we provide a detailed importer guide covering: customs registration requirements in the destination country, applicable import duties and VAT rates, recommended customs brokers in key markets (Saudi Arabia, UAE, Egypt, UK, Netherlands, Germany), and product registration requirements for regulated categories such as seafood and organic products.
    `.trim(),
    icon: 'description',
    heroImage: '/images/services/export-support-hero.jpg',
    features: [
      {
        icon: 'article',
        title: 'Full Documentation Suite',
        description:
          'We prepare and coordinate all export documents: C/O, CoA, Phytosanitary, Health Certificate, B/L, Halal, and more.',
      },
      {
        icon: 'handshake',
        title: 'FTA Optimization',
        description:
          'We issue the correct C/O to unlock preferential tariffs under EVFTA, RCEP, CPTPP, and other applicable FTAs.',
      },
      {
        icon: 'gavel',
        title: 'Regulatory Compliance',
        description:
          "We verify your destination country's import requirements before production — no surprises at the port.",
      },
      {
        icon: 'track_changes',
        title: 'Real-Time Shipment Tracking',
        description:
          'Track your container from factory gate to destination port with weekly status updates from our operations team.',
      },
      {
        icon: 'language',
        title: 'Multi-Market Expertise',
        description:
          'Experienced in export documentation for GCC, EU, UK, Africa, Australia, and Southeast Asian markets.',
      },
      {
        icon: 'verified',
        title: 'Zero Rejection Guarantee',
        description:
          'Our pre-shipment document review process eliminates the risk of shipment rejection due to documentary errors.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Import Requirements Audit',
        description:
          "We audit your destination country's requirements: HS codes, import duty rates, quarantine conditions, and labeling rules.",
      },
      {
        step: 2,
        title: 'Documentation Planning',
        description:
          'We prepare a document checklist specific to your product and destination, with timelines for each certificate.',
      },
      {
        step: 3,
        title: 'Production & Testing Coordination',
        description:
          'We coordinate third-party lab testing during production to ensure the CoA is ready before shipment.',
      },
      {
        step: 4,
        title: 'Document Preparation',
        description:
          'All documents are prepared, verified for accuracy, and submitted to the relevant authorities for official issuance.',
      },
      {
        step: 5,
        title: 'Customs Clearance & Handover',
        description:
          'We manage Vietnamese customs export clearance and coordinate cargo handover to the freight forwarder for loading.',
      },
    ],
    targetIndustries: [
      'First-Time Vietnam Importers',
      'Experienced Importers Expanding Categories',
      'Supermarket Import Teams',
      'Commodity Traders',
      'Food Distributors',
      'E-Commerce Food Importers',
    ],
    certifications: [
      'VCCI Certificate of Origin',
      'MARD Phytosanitary',
      'NAFIQAD Health Certificate',
      'JAKIM / ESMA Halal',
      'Organic Certificate (EU/USDA)',
    ],
    faqs: [
      {
        question: 'What is a Certificate of Origin and why do I need it?',
        answer:
          'A Certificate of Origin (C/O) is an official document confirming that goods were produced in Vietnam. It is required by most importing countries and is essential for claiming preferential import duties under FTAs like EVFTA or RCEP.',
      },
      {
        question: 'Can you help me understand the import duties for my destination country?',
        answer:
          'Yes. We provide a duty rate analysis for your specific product (by HS code) and destination country, including applicable FTA preferential rates if Vietnam has a trade agreement with that country.',
      },
      {
        question: 'What is the Phytosanitary Certificate and when is it required?',
        answer:
          "A Phytosanitary Certificate is issued by Vietnam's Ministry of Agriculture (MARD) and confirms that plant-based products (coffee, cashew nuts, rice, spices) meet the phytosanitary import requirements of the destination country. It is required for virtually all plant product exports.",
      },
      {
        question: 'How long does the export documentation process take?',
        answer:
          'Most documents are prepared and issued within 3–5 business days after production is complete. The Halal certificate and third-party CoA may require an additional 3–5 days. We schedule document preparation in parallel with production to avoid delays.',
      },
      {
        question: 'Do you handle customs clearance in my country?',
        answer:
          'We handle export customs clearance in Vietnam. For import clearance at destination, we can recommend trusted customs brokers in Saudi Arabia, UAE, Egypt, the Netherlands, and the UK.',
      },
    ],
    relatedServices: ['logistics', 'quality-control', 'private-label'],
    seoTitle: 'Vietnam Food Export Documentation & Support | C/O, Halal, Phytosanitary',
    seoDescription:
      'Full export documentation support for Vietnamese food products: Certificate of Origin, Phytosanitary, Halal, CoA, and FTA tariff optimization for GCC, EU, and Africa.',
    keywords: [
      'vietnam food export documentation',
      'certificate of origin vietnam',
      'phytosanitary certificate vietnam',
      'halal certificate vietnam export',
      'vietnam export support service',
      'evfta certificate of origin',
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 4. LOGISTICS
  // ─────────────────────────────────────────────────────────
  {
    slug: 'logistics',
    name: 'Freight & Logistics',
    tagline: 'Vietnam to Your Warehouse — on Time, Every Time.',
    heroDescription:
      'We coordinate full container and LCL ocean freight from Vietnamese ports to major destinations across the Middle East, Africa, Europe, and Southeast Asia, with door-to-door options available.',
    longDescription: `
Moving food cargo from Vietnam to global markets requires more than booking a container. Temperature-sensitive products require reefer containers. High-value commodities require marine insurance. Perishable items require precise scheduling to avoid port delays. Ideal Deal Vietnam's logistics team has the experience, carrier relationships, and destination knowledge to ensure your cargo arrives in perfect condition and on schedule.

**Ocean Freight — FCL and LCL**

We book FCL (Full Container Load) and LCL (Less than Container Load) shipments from Vietnam's three main export ports: Hai Phong (North Vietnam), Da Nang (Central Vietnam), and Cat Lai / Cai Mep (South Vietnam). For most food commodity exports, Cat Lai and Cai Mep handle the highest volume of container traffic to the Middle East and Europe.

FCL container sizes: 20-foot dry (approximately 22–26 MT of coffee, cashew, or spice), 40-foot dry (45–52 MT), 20-foot reefer (for frozen seafood), and 40-foot reefer. For seafood shipments, we work exclusively with reefer containers maintained at -18°C or lower throughout transit.

**Freight Rates and Lead Times**

To the Middle East (Jeddah, Dubai, Oman, Qatar): approximately 18–25 days transit from Cat Lai port. To North Africa (Alexandria, Casablanca): 22–28 days. To West Africa (Lagos, Dakar): 25–35 days. To Europe (Rotterdam, Hamburg, Felixstowe): 25–32 days. Freight rates vary by carrier, season, and global market conditions — we obtain competitive quotations from multiple carriers for each shipment.

**Incoterms We Support**

We handle shipments under all major Incoterms: FOB Ho Chi Minh City / Hai Phong, CIF to named port, CFR to named port, and DDP to named destination. For buyers who want simplicity, DDP (Delivered Duty Paid) removes all logistical responsibility from the buyer — we handle everything including destination customs clearance and inland delivery.

**Marine Insurance**

All shipments are eligible for marine cargo insurance at competitive rates. We recommend institute cargo clauses (A) for all food commodity shipments, providing all-risk coverage from warehouse to warehouse. Insurance certificates are available as part of the shipping document set.

**Cold Chain Management**

For frozen seafood exports, we manage the complete cold chain: pre-cooling of factory storage, reefer container pre-conditioning, temperature monitoring during loading, and seal verification. We provide temperature log reports with every reefer shipment.

**Tracking and Updates**

We provide container booking confirmation, vessel departure notification, bill of lading copies, and arrival ETA updates for every shipment. Our operations team is reachable via WhatsApp, email, and phone for real-time updates.
    `.trim(),
    icon: 'local_shipping',
    heroImage: '/images/services/logistics-hero.jpg',
    features: [
      {
        icon: 'anchor',
        title: 'FCL & LCL Ocean Freight',
        description:
          'Full and part-container loads from Hai Phong, Da Nang, and Cat Lai/Cai Mep ports to all major global destinations.',
      },
      {
        icon: 'ac_unit',
        title: 'Reefer Container Management',
        description:
          'Complete cold chain management for frozen seafood exports — temperature monitoring from factory to destination port.',
      },
      {
        icon: 'policy',
        title: 'Marine Insurance',
        description:
          'All-risk Institute Cargo Clauses (A) marine insurance available for every shipment, with insurance certificate in your document set.',
      },
      {
        icon: 'public',
        title: 'Global Destination Coverage',
        description:
          'Regular sailings to GCC, North Africa, West Africa, Europe, and Southeast Asia. Competitive multi-carrier rates.',
      },
      {
        icon: 'route',
        title: 'Door-to-Door DDP',
        description:
          'Choose DDP and we handle everything — freight, destination customs, and inland delivery to your warehouse.',
      },
      {
        icon: 'notifications_active',
        title: 'Real-Time Updates',
        description:
          'Departure notifications, ETA updates, and container tracking via WhatsApp and email for every shipment.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Freight Quotation',
        description:
          'Share your product, weight, and destination. We obtain competitive quotations from multiple ocean carriers and present the best options.',
      },
      {
        step: 2,
        title: 'Booking Confirmation',
        description:
          'Once you confirm the carrier and sailing, we issue the booking confirmation and arrange container pickup at the factory.',
      },
      {
        step: 3,
        title: 'Loading & Sealing',
        description:
          'Container is loaded, weighed, sealed, and photographed. For reefer shipments, temperature is set and logged before departure.',
      },
      {
        step: 4,
        title: 'Document Issuance',
        description:
          'Bill of Lading, Packing List, Commercial Invoice, and all certificates are finalized and sent to you before vessel departure.',
      },
      {
        step: 5,
        title: 'Voyage & Arrival Monitoring',
        description:
          'We track your container throughout the voyage and notify you of ETA updates. Arrival documentation is coordinated with your customs broker.',
      },
    ],
    targetIndustries: [
      'Food Importers & Distributors',
      'Commodity Traders',
      'Supermarket Buying Teams',
      'Industrial Food Manufacturers',
      'E-Commerce Food Businesses',
      'Hotel Supply Companies',
    ],
    certifications: [
      'Licensed Freight Forwarder',
      'IATA Cargo Agent',
      'C-TPAT Compliant Processes',
    ],
    faqs: [
      {
        question: 'What are the main Vietnamese ports for export?',
        answer:
          'The three main export ports are Hai Phong (serving northern Vietnam, near Hanoi), Da Nang (central Vietnam), and Cat Lai / Cai Mep (serving southern Vietnam, near Ho Chi Minh City). Most food commodity exports originate from Cat Lai or Cai Mep.',
      },
      {
        question: 'What is the transit time to Saudi Arabia (Jeddah)?',
        answer:
          'Transit time from Cat Lai port (Ho Chi Minh City) to Jeddah Islamic Port is approximately 18–22 days depending on the shipping line and routing. Some services via Singapore can be slightly faster.',
      },
      {
        question: 'Do you handle reefer containers for frozen seafood?',
        answer:
          'Yes. We manage the full cold chain for frozen seafood exports, including reefer container pre-conditioning, temperature monitoring, and temperature log documentation.',
      },
      {
        question: 'What Incoterms do you offer?',
        answer:
          'We handle FOB, CFR, CIF, and DDP. For buyers who want complete simplicity, we recommend DDP — we handle all freight, insurance, and destination customs charges.',
      },
      {
        question: 'Can you handle LCL (Less than Container Load) shipments?',
        answer:
          'Yes. LCL consolidation services are available for smaller orders. Note that LCL is generally more expensive per ton than FCL and has slightly longer transit times due to consolidation and deconsolidation at CFS facilities.',
      },
    ],
    relatedServices: ['export-support', 'quality-control', 'oem-manufacturing'],
    seoTitle: 'Vietnam Food Export Logistics | Ocean Freight to Middle East, Africa & Europe',
    seoDescription:
      'Vietnam food export logistics: FCL/LCL ocean freight, reefer containers, marine insurance, and DDP delivery to Saudi Arabia, UAE, Egypt, Europe, and Africa.',
    keywords: [
      'vietnam food export logistics',
      'ocean freight vietnam to saudi arabia',
      'vietnam to uae freight',
      'reefer container vietnam seafood',
      'vietnam food export shipping',
      'fcl lcl vietnam export',
    ],
  },

  // ─────────────────────────────────────────────────────────
  // 5. QUALITY CONTROL
  // ─────────────────────────────────────────────────────────
  {
    slug: 'quality-control',
    name: 'Quality Control & Inspection',
    tagline: 'Third-Party Verified. Every Shipment.',
    heroDescription:
      'Independent quality control at every stage of the supply chain — from raw material intake to pre-shipment inspection. We partner with SGS, Bureau Veritas, and Eurofins to verify every container before loading.',
    longDescription: `
In international food trade, quality control is not optional — it is the foundation of trust between supplier and buyer. A single rejected shipment can cost more than the product itself in freight, port storage, disposal fees, and reputational damage. Ideal Deal Vietnam's quality control service provides multi-stage, independent inspection and laboratory testing to ensure every shipment meets your specification before it leaves Vietnam.

**Our Quality Control Philosophy**

We believe quality control must be independent of commercial pressure. Our QC team reports to the client, not to the production team. Our laboratory partners — SGS, Bureau Veritas, and Eurofins — are globally recognized, accredited testing bodies whose certificates are accepted in all major importing countries. We do not use in-house laboratory testing as the primary quality confirmation method.

**Raw Material Inspection**

The quality journey begins at raw material intake. For coffee, we inspect cherry moisture, green bean moisture, density, defect count, screen size, and cupping profile. For cashew nuts, we inspect raw nut kernel outturn rate (KOR), moisture, aflatoxin levels, and shell damage. For rice, we inspect moisture, broken percentage, chalky grain percentage, and impurity levels. For seafood, we inspect temperature at receipt, glazing percentage, defrost drip loss, and microbiological status.

**In-Process Quality Control**

During production, our QC representatives conduct in-line checks at critical control points. For roasted coffee, this includes roast profile verification (color, moisture, density). For processed cashew nuts, this includes grade sorting accuracy and moisture post-drying. For frozen seafood, this includes IQF blast freezing temperature verification and net weight after glazing deduction.

**Pre-Shipment Inspection (PSI)**

Our standard pre-shipment inspection covers: carton count verification, net weight check, packaging integrity check, label accuracy review, and sampling for laboratory testing. Samples are sent to SGS, Bureau Veritas, or Eurofins for testing against your specification. We provide a full PSI report within 48 hours of inspection.

**Laboratory Tests Available**

- Microbiological: Total Plate Count, E. coli, Salmonella, Listeria, Staphylococcus aureus
- Mycotoxins: Aflatoxin B1/B2/G1/G2, Ochratoxin A, Fumonisins
- Pesticide Residues: multi-residue screening (500+ substances)
- Heavy metals: Lead, Cadmium, Arsenic, Mercury
- Moisture, Water Activity, pH, Brix
- Nutritional analysis (for label claims)
- Allergen testing (gluten, peanut, soy, milk, etc.)
- Dye and adulterant screening

**Certificates Issued**

Certificate of Analysis (CoA), Test Report, Inspection Certificate, Fumigation Certificate. All reports are issued on the testing body's official letterhead with accreditation number and are legally recognized by customs authorities worldwide.
    `.trim(),
    icon: 'verified',
    heroImage: '/images/services/quality-control-hero.jpg',
    features: [
      {
        icon: 'science',
        title: 'Independent Laboratory Testing',
        description:
          'SGS, Bureau Veritas, and Eurofins testing for microbiological, chemical, mycotoxin, and pesticide parameters.',
      },
      {
        icon: 'search',
        title: 'Pre-Shipment Inspection',
        description:
          'Full PSI covering carton count, net weight, packaging integrity, labeling, and product sampling before loading.',
      },
      {
        icon: 'receipt_long',
        title: 'Certificate of Analysis',
        description:
          'Official CoA issued by accredited laboratory, accepted by customs authorities in GCC, EU, US, and Africa.',
      },
      {
        icon: 'timeline',
        title: 'Multi-Stage QC',
        description:
          'Quality checks at raw material intake, in-process critical control points, and finished goods before shipment.',
      },
      {
        icon: 'bug_report',
        title: 'Mycotoxin & Pesticide Screening',
        description:
          'Comprehensive aflatoxin, ochratoxin, and 500+ pesticide residue screening — essential for EU and GCC compliance.',
      },
      {
        icon: 'assignment_turned_in',
        title: '48-Hour PSI Report',
        description:
          'Pre-shipment inspection report with photos, weight certificates, and lab test results within 48 hours.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'QC Plan Development',
        description:
          'We review your specification and destination market requirements to develop a customized QC plan with defined critical control points.',
      },
      {
        step: 2,
        title: 'Raw Material Inspection',
        description:
          'Incoming raw materials are inspected against specification. Non-conforming materials are rejected before entering production.',
      },
      {
        step: 3,
        title: 'In-Process Checks',
        description:
          'Our QC representatives conduct checks at critical production stages. Any deviations are flagged and corrected immediately.',
      },
      {
        step: 4,
        title: 'Pre-Shipment Inspection',
        description:
          'Final inspection of finished goods: carton verification, weight check, packaging integrity, and laboratory sampling.',
      },
      {
        step: 5,
        title: 'Certificate & Report Issuance',
        description:
          'Full PSI report and CoA from accredited laboratory provided within 48 hours. Shipment released only upon passing all checks.',
      },
    ],
    targetIndustries: [
      'Supermarket & Retail Buyers',
      'Food Safety Managers',
      'Import Compliance Teams',
      'Commodity Traders',
      'Brand Owners & Private Label Clients',
      'Food Industry Auditors',
    ],
    certifications: [
      'SGS Inspection',
      'Bureau Veritas Testing',
      'Eurofins Laboratory',
      'ISO 17025 Accredited Labs',
      'ILAC MRA Recognized',
    ],
    faqs: [
      {
        question: 'Which laboratories do you use for testing?',
        answer:
          "We use SGS, Bureau Veritas, and Eurofins — three of the world's most recognized accredited testing and inspection bodies. All three operate ISO 17025-accredited laboratories in Vietnam and issue certificates accepted globally.",
      },
      {
        question: 'What is a Pre-Shipment Inspection (PSI)?',
        answer:
          'A PSI is an independent inspection of the finished goods before they are loaded into a container. It verifies that the quantity, quality, packaging, and labeling match your purchase order. We provide a full PSI report with photographs within 48 hours.',
      },
      {
        question: 'Can I appoint my own inspection agency?',
        answer:
          'Yes. If you have a preferred inspection agency, we will coordinate access and provide all necessary documentation for their inspection. We have experience working with all major international inspection companies.',
      },
      {
        question: 'What tests are required for GCC (Saudi Arabia / UAE) food imports?',
        answer:
          'GCC imports typically require testing for microbiological parameters (Salmonella, E. coli, Total Plate Count), aflatoxin, pesticide residues, and heavy metals. Halal certification is also required for meat and poultry, and recommended for all food products. We prepare a specific QC checklist for your product and GCC destination.',
      },
      {
        question: 'How do you handle a product that fails a quality check?',
        answer:
          'If a product fails a QC check, production is stopped and the root cause is investigated. The failed batch is either reworked (if permitted by the specification) or rejected. Shipment does not proceed until all quality parameters are confirmed passing.',
      },
    ],
    relatedServices: ['private-label', 'oem-manufacturing', 'export-support'],
    seoTitle: 'Food Quality Control & Inspection Vietnam | SGS, Bureau Veritas, Eurofins',
    seoDescription:
      'Independent food quality control and pre-shipment inspection in Vietnam. SGS, Bureau Veritas, Eurofins lab testing for microbiological, pesticide, mycotoxin, and heavy metals.',
    keywords: [
      'food quality control vietnam',
      'pre-shipment inspection vietnam',
      'sgs inspection vietnam',
      'bureau veritas vietnam food testing',
      'vietnam food lab testing',
      'certificate of analysis vietnam',
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions
// ─────────────────────────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getRelatedServices(service: ServiceData): ServiceData[] {
  return service.relatedServices
    .map((slug) => servicesData.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => s !== undefined);
}
