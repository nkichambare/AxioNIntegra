export type PortfolioItem = {
  family: 'precision-tooling';
  slug: string;
  title: string;
  standard: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  products: string[];
  supplierSource: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    family: 'precision-tooling',
    slug: 'bt-tool-holders',
    title: 'BT Tool Holders',
    standard: 'DIN ISO 7388-2',
    description:
      'A versatile holder system for CNC machining centres, available across drilling, milling, collet, hydraulic, and shrink-fit configurations.',
    imageSrc: '/portfolio/bt-tool-holders.jpg',
    imageAlt: 'Selection of precision BT tool holders',
    products: [
      'BT hydraulic chucks',
      'BT NC drill chucks',
      'BT ER collet holders',
      'BT shrink-fit holders',
      'Side-lock and face-mill holders',
    ],
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    family: 'precision-tooling',
    slug: 'sk-tool-holders',
    title: 'SK Tool Holders',
    standard: 'DIN ISO 7388-1',
    description:
      'Precision-balanced SK tooling for milling, drilling, and machining applications that require stable clamping and repeatable accuracy.',
    imageSrc: '/portfolio/sk-tool-holders.jpg',
    imageAlt: 'Selection of precision SK tool holders',
    products: [
      'SK ER collet holders',
      'SK face-mill holders',
      'SK Weldon holders',
      'Combi shell-mill adaptors',
    ],
    supplierSource: 'https://siddhiprecision.com/sk-taper-holder/',
  },
  {
    family: 'precision-tooling',
    slug: 'hsk-tool-holders',
    title: 'HSK-A Tool Holders',
    standard: 'DIN 69893-1',
    description:
      'Hollow-shank tooling for high-speed machining where low runout, rigidity, and reliable tool changes are critical.',
    imageSrc: '/portfolio/hsk-tool-holders.jpg',
    imageAlt: 'Selection of HSK-A tool holders',
    products: [
      'HSK-A ER collet holders',
      'HSK-A shrink-fit holders',
      'HSK-A Weldon holders',
      'Morse-taper adaptors',
    ],
    supplierSource: 'https://siddhiprecision.com/hsk-tool-shank/',
  },
  {
    family: 'precision-tooling',
    slug: 'iso-tool-holders',
    title: 'ISO Tool Holders',
    standard: 'DIN 2080',
    description:
      'Established ISO taper tooling for conventional and CNC equipment, covering common milling and drilling interfaces.',
    imageSrc: '/portfolio/iso-tool-holders.jpg',
    imageAlt: 'Selection of DIN 2080 ISO tool holders',
    products: [
      'ISO ER collet holders',
      'ISO Morse-taper adaptors',
      'ISO Weldon holders',
      'Shell-mill holders',
    ],
    supplierSource: 'https://siddhiprecision.com/iso-taper-holder/',
  },
  {
    family: 'precision-tooling',
    slug: 'collet-chucks',
    title: 'Collet Chucks',
    standard: 'Cylindrical & Morse taper',
    description:
      'Flexible collet-chuck solutions for general machining, multi-spindle equipment, and controlled tapping applications.',
    imageSrc: '/portfolio/collet-chucks.jpg',
    imageAlt: 'Cylindrical shank ER collet chucks',
    products: [
      'Cylindrical ER collet chucks',
      'Morse-taper collet chucks',
      'Multi-spindle ER chucks',
      'Rigid tapping chucks',
    ],
    supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
  },
  {
    family: 'precision-tooling',
    slug: 'drilling-tapping',
    title: 'Drilling & Tapping Tooling',
    standard: 'Quick-change systems',
    description:
      'Quick-change and precision tooling that supports efficient drilling and tapping across varied production requirements.',
    imageSrc: '/portfolio/drilling-tapping.jpg',
    imageAlt: 'Quick-change drilling and tapping chuck adaptors',
    products: [
      'Quick-change chucks',
      'Quick-change adaptors',
      'Precision drill chucks',
      'Keyless drill chucks',
      'CNC sleeves',
    ],
    supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
  },
  {
    family: 'precision-tooling',
    slug: 'conventional-accessories',
    title: 'Conventional Machine Accessories',
    standard: 'Machine-tool interfaces',
    description:
      'Supporting tooling and adaptors for conventional milling and production equipment, supplied to programme requirements.',
    imageSrc: '/portfolio/conventional-accessories.jpg',
    imageAlt: 'Long milling arbor for conventional machine tools',
    products: ['Long milling arbors', 'Adjustable adaptors', 'Machine-tool interface accessories'],
    supplierSource: 'https://siddhiprecision.com/conventional-machine-tool/',
  },
  {
    family: 'precision-tooling',
    slug: 'lathe-accessories',
    title: 'Lathe Accessories',
    standard: 'Precision & productivity',
    description:
      'A supporting range for turning operations and specialised workholding, from production tooling to custom programme needs.',
    imageSrc: '/portfolio/lathe-accessories.jpg',
    imageAlt: 'Selection of precision lathe accessories',
    products: [
      'Lathe tooling accessories',
      'Long-length holders',
      'Boring-bar blanks',
      'Master mandrills',
    ],
    supplierSource: 'https://siddhiprecision.com/lathe-accessories-for-precision-and-productivity/',
  },
];

export function getPortfolioItem(slug: string | undefined) {
  return portfolioItems.find((item) => item.slug === slug);
}

export type ToolingSubproduct = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  supplierSource: string;
};

export const btToolHolders: ToolingSubproduct[] = [
  {
    slug: 'bt-hydraulic-chuck',
    title: 'BT Hydraulic Chuck',
    imageSrc: '/portfolio/cnc-tooling/bt/hydraulic-chuck.jpg',
    imageAlt: 'BT hydraulic chuck tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    slug: 'bt-nc-drill-chuck',
    title: 'BT NC Drill Chuck',
    imageSrc: '/portfolio/cnc-tooling/bt/nc-drill-chuck.jpg',
    imageAlt: 'BT NC drill chuck tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    slug: 'bt-sla-fmh-shc',
    title: 'BT SLA / FMH / SHC',
    imageSrc: '/portfolio/cnc-tooling/bt/sla-fmh-shc.jpg',
    imageAlt: 'BT side-lock, face-mill and shell-mill tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    slug: 'bt-er',
    title: 'BT ER',
    imageSrc: '/portfolio/cnc-tooling/bt/er.jpg',
    imageAlt: 'BT ER collet tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    slug: 'bt-sfa-mta-er-we',
    title: 'BT SFA / MTA / ER / WE',
    imageSrc: '/portfolio/cnc-tooling/bt/sfa-mta-er-we.jpg',
    imageAlt: 'BT SFA, MTA, ER and Weldon tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    slug: 'bt-shrink-fit',
    title: 'BT Shrink Fit',
    imageSrc: '/portfolio/cnc-tooling/bt/shrink-fit.jpg',
    imageAlt: 'BT shrink-fit tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
  {
    slug: 'bt-tool-holder-range',
    title: 'BT Tool Holders',
    imageSrc: '/portfolio/bt-tool-holders.jpg',
    imageAlt: 'Selection of BT tool holders',
    supplierSource: 'https://siddhiprecision.com/bt-taper-holder/',
  },
];

export type ToolingRange = {
  slug: string;
  title: string;
  standard: string;
  description: string;
  products: ToolingSubproduct[];
};

export const toolingRanges: ToolingRange[] = [
  {
    slug: 'sk-tool-holders',
    title: 'SK Tool Holders',
    standard: 'DIN ISO 7388-1',
    description:
      'Precision-balanced SK taper tooling for milling, drilling, collet, and shell-mill applications across CNC machining centres.',
    products: [
      {
        slug: 'sk-fmh-er-csma',
        title: 'SK FMH / ER / CSMA',
        imageSrc: '/portfolio/cnc-tooling/sk/fmh-er-csma.jpg',
        imageAlt: 'SK face-mill, ER collet, and combi shell-mill tool holders',
        supplierSource: 'https://siddhiprecision.com/sk-taper-holder/',
      },
      {
        slug: 'sk-fmh-swflk-we-er',
        title: 'SK FMH / SWFLK / WE / ER',
        imageSrc: '/portfolio/cnc-tooling/sk/fmh-swflk-we-er.jpg',
        imageAlt: 'SK face-mill, shell-mill, Weldon, and ER tool holders',
        supplierSource: 'https://siddhiprecision.com/sk-taper-holder/',
      },
      {
        slug: 'sk-swflk',
        title: 'SK SWFLK',
        imageSrc: '/portfolio/cnc-tooling/sk/swflk.jpg',
        imageAlt: 'SK shell-mill tool holders',
        supplierSource: 'https://siddhiprecision.com/sk-taper-holder/',
      },
      {
        slug: 'sk-we',
        title: 'SK WE',
        imageSrc: '/portfolio/cnc-tooling/sk/we.jpg',
        imageAlt: 'SK Weldon tool holders',
        supplierSource: 'https://siddhiprecision.com/sk-taper-holder/',
      },
    ],
  },
  {
    slug: 'hsk-tool-holders',
    title: 'HSK-A Tool Holders',
    standard: 'DIN 69893-1',
    description:
      'Hollow-shank HSK-A tooling for high-speed milling, drilling, collet, and shrink-fit applications requiring rigidity and low runout.',
    products: [
      {
        slug: 'hsk-a-shrink-fit',
        title: 'HSK-A Shrink Fit',
        imageSrc: '/portfolio/cnc-tooling/hsk-a/shrink-fit.jpg',
        imageAlt: 'HSK-A shrink-fit tool holders',
        supplierSource: 'https://siddhiprecision.com/hsk-tool-shank/',
      },
      {
        slug: 'hsk-a-csma-er-sfa',
        title: 'HSK-A CSMA / ER / SFA',
        imageSrc: '/portfolio/cnc-tooling/hsk-a/csma-er-sfa.jpg',
        imageAlt: 'HSK-A combi shell-mill, ER collet, and SFA tool holders',
        supplierSource: 'https://siddhiprecision.com/hsk-tool-shank/',
      },
      {
        slug: 'hsk-a-mta-swflk-we',
        title: 'HSK-A MTA / SWFLK / WE',
        imageSrc: '/portfolio/cnc-tooling/hsk-a/mta-swflk-we.jpg',
        imageAlt: 'HSK-A Morse-taper, shell-mill, and Weldon tool holders',
        supplierSource: 'https://siddhiprecision.com/hsk-tool-shank/',
      },
      {
        slug: 'hsk-a-we-er',
        title: 'HSK-A WE / ER',
        imageSrc: '/portfolio/cnc-tooling/hsk-a/we-er.jpg',
        imageAlt: 'HSK-A Weldon and ER collet tool holders',
        supplierSource: 'https://siddhiprecision.com/hsk-tool-shank/',
      },
      {
        slug: 'hsk-a-swflk',
        title: 'HSK-A SWFLK',
        imageSrc: '/portfolio/cnc-tooling/hsk-a/swflk.jpg',
        imageAlt: 'HSK-A shell-mill tool holders',
        supplierSource: 'https://siddhiprecision.com/hsk-tool-shank/',
      },
    ],
  },
  {
    slug: 'iso-tool-holders',
    title: 'ISO Tool Holders',
    standard: 'DIN 2080',
    description:
      'DIN 2080 ISO taper tooling for conventional and CNC milling and drilling applications, including Morse-taper, shell-mill, and collet interfaces.',
    products: [
      {
        slug: 'iso-we-swflk-mta',
        title: 'ISO WE / SWFLK / MTA',
        imageSrc: '/portfolio/cnc-tooling/iso/we-swflk-mta.jpg',
        imageAlt: 'ISO Weldon, shell-mill, and Morse-taper tool holders',
        supplierSource: 'https://siddhiprecision.com/iso-taper-holder/',
      },
      {
        slug: 'iso-csma-fmh-er',
        title: 'ISO CSMA / FMH / ER',
        imageSrc: '/portfolio/cnc-tooling/iso/csma-fmh-er.jpg',
        imageAlt: 'ISO combi shell-mill, face-mill, and ER collet tool holders',
        supplierSource: 'https://siddhiprecision.com/iso-taper-holder/',
      },
      {
        slug: 'iso-mta',
        title: 'ISO MTA',
        imageSrc: '/portfolio/cnc-tooling/iso/mta.jpg',
        imageAlt: 'ISO Morse-taper adaptors',
        supplierSource: 'https://siddhiprecision.com/iso-taper-holder/',
      },
      {
        slug: 'iso-swflk',
        title: 'ISO SWFLK',
        imageSrc: '/portfolio/cnc-tooling/iso/swflk.jpg',
        imageAlt: 'ISO shell-mill tool holders',
        supplierSource: 'https://siddhiprecision.com/iso-taper-holder/',
      },
      {
        slug: 'iso-we',
        title: 'ISO WE',
        imageSrc: '/portfolio/cnc-tooling/iso/we.jpg',
        imageAlt: 'ISO Weldon tool holders',
        supplierSource: 'https://siddhiprecision.com/iso-taper-holder/',
      },
    ],
  },
  {
    slug: 'collet-chucks',
    title: 'Collet Chucks',
    standard: 'Cylindrical & Morse taper',
    description:
      'Flexible collet-chuck solutions for general machining, multi-spindle equipment, milling, and controlled tapping applications.',
    products: [
      {
        slug: 'cylindrical-collet-chucks-1',
        title: 'Cylindrical Collet Chucks — Range 1',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/cylindrical-collet-chucks-1.jpg',
        imageAlt: 'First range of cylindrical ER collet chucks',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
      {
        slug: 'cylindrical-collet-chucks-2',
        title: 'Cylindrical Collet Chucks — Range 2',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/cylindrical-collet-chucks-2.jpg',
        imageAlt: 'Second range of cylindrical ER collet chucks',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
      {
        slug: 'collet-chuck-mta-fmh',
        title: 'MTA / FMH',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/mta-fmh.jpg',
        imageAlt: 'Morse-taper adaptors and face-mill holders',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
      {
        slug: 'collet-chuck-mtb-swflk',
        title: 'MTB / SWFLK',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/mtb-swflk.jpg',
        imageAlt: 'Morse-taper and shell-mill tool holders',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
      {
        slug: 'multi-spindle-er-collet-chuck',
        title: 'Multi-Spindle ER Collet Chuck',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/multi-spindle-er-collet-chuck.jpg',
        imageAlt: 'Multi-spindle ER collet chuck tooling',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
      {
        slug: 'rigid-tapping-chuck',
        title: 'Rigid Tapping Chuck',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/rigid-tapping-chuck.jpg',
        imageAlt: 'Rigid tapping chucks',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
      {
        slug: 'er-collet-chuck',
        title: 'ER Collet Chuck',
        imageSrc: '/portfolio/cnc-tooling/collet-chucks/er-collet-chuck-range.jpg',
        imageAlt: 'Threaded ER collet chuck',
        supplierSource: 'https://siddhiprecision.com/er-collet-chuck/',
      },
    ],
  },
  {
    slug: 'drilling-tapping',
    title: 'Drilling & Tapping Tooling',
    standard: 'Quick-change systems',
    description:
      'Quick-change and precision tooling for efficient drilling, tapping, tool adaptation, and work support across varied production requirements.',
    products: [
      {
        slug: 'cnc-sleeve',
        title: 'CNC Sleeve',
        imageSrc: '/portfolio/cnc-tooling/drilling-tapping/cnc-sleeve.jpg',
        imageAlt: 'Precision CNC sleeves',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
      {
        slug: 'high-speed-cnc-live-center',
        title: 'High-Speed CNC Live Center',
        imageSrc: '/portfolio/cnc-tooling/drilling-tapping/high-speed-cnc-live-center.jpg',
        imageAlt: 'High-speed CNC live centers',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
      {
        slug: 'keyless-drill-chuck',
        title: 'Keyless Drill Chuck',
        imageSrc: '/portfolio/cnc-tooling/drilling-tapping/keyless-drill-chuck.jpg',
        imageAlt: 'Keyless precision drill chucks',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
      {
        slug: 'precision-drill-chuck-sleeve-dead-center',
        title: 'Precision Drill Chuck / CNC Sleeve / Dead Center',
        imageSrc:
          '/portfolio/cnc-tooling/drilling-tapping/precision-drill-chuck-sleeve-dead-center.jpg',
        imageAlt: 'Precision drill chucks, CNC sleeves, and CNC dead centers',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
      {
        slug: 'quick-change-chuck-adaptor',
        title: 'Quick-Change Chuck & Adaptor',
        imageSrc: '/portfolio/cnc-tooling/drilling-tapping/quick-change-chuck-adaptor.jpg',
        imageAlt: 'Quick-change chucks and adaptors',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
      {
        slug: 'quick-change-chuck',
        title: 'Quick-Change Chuck',
        imageSrc: '/portfolio/cnc-tooling/drilling-tapping/quick-change-chuck.jpg',
        imageAlt: 'Quick-change precision chucks',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
      {
        slug: 'quick-change-adaptor',
        title: 'Quick-Change Adaptor',
        imageSrc: '/portfolio/cnc-tooling/drilling-tapping/quick-change-adaptor.jpg',
        imageAlt: 'Quick-change precision adaptors',
        supplierSource: 'https://siddhiprecision.com/precision-tool-holder/',
      },
    ],
  },
  {
    slug: 'conventional-accessories',
    title: 'Conventional Machine Accessories',
    standard: 'Machine-tool interfaces',
    description:
      'Supporting tooling and adaptors for conventional milling and production equipment, supplied to programme requirements.',
    products: [
      {
        slug: 'adjustable-adaptors',
        title: 'Adjustable Adaptors',
        imageSrc: '/portfolio/cnc-tooling/conventional/adjustable-adaptors.jpg',
        imageAlt: 'Adjustable machine-tool adaptors',
        supplierSource: 'https://siddhiprecision.com/conventional-machine-tool/',
      },
      {
        slug: 'long-milling-arbor',
        title: 'Long Milling Arbor',
        imageSrc: '/portfolio/cnc-tooling/conventional/long-milling-arbor.jpg',
        imageAlt: 'Long milling arbors for conventional machine tools',
        supplierSource: 'https://siddhiprecision.com/conventional-machine-tool/',
      },
    ],
  },
  {
    slug: 'lathe-accessories',
    title: 'Lathe Accessories',
    standard: 'Precision & productivity',
    description:
      'A supporting range for turning operations and specialised workholding, from production tooling to custom programme needs.',
    products: [
      {
        slug: 'lathe-accessory-range',
        title: 'Lathe Accessories Range',
        imageSrc: '/portfolio/cnc-tooling/lathe/lathe-accessories.jpg',
        imageAlt: 'Precision lathe accessories range',
        supplierSource:
          'https://siddhiprecision.com/lathe-accessories-for-precision-and-productivity/',
      },
    ],
  },
];

export function getToolingRange(slug: string | undefined) {
  return toolingRanges.find((range) => range.slug === slug);
}

export function getToolingSubproduct(slug: string | undefined) {
  return [...btToolHolders, ...toolingRanges.flatMap((range) => range.products)].find(
    (item) => item.slug === slug,
  );
}

export type CopperTechnicalGroup = {
  title: string;
  sizeRange: string[];
  specifications: string[];
  applications: string[];
};

export type CopperAtAGlance = {
  sizeRange: string[];
  specifications: string[];
  applications: string[];
};

export type CopperRange = {
  family: 'copper-products';
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  products: string[];
  atAGlance: CopperAtAGlance;
  technicalDetails: CopperTechnicalGroup[];
  supplierSource: string;
};

export const copperRanges: CopperRange[] = [
  {
    family: 'copper-products',
    slug: 'copper-rods-wire-rods',
    title: 'Copper Rods & Wire Rods',
    description:
      'High-conductivity copper feedstock for electrical, engineering, and downstream drawing applications, supplied in round and extruded forms.',
    imageSrc: '/portfolio/copper/rod.jpg',
    imageAlt: 'Copper rods prepared for industrial supply',
    products: [
      'Round rods: 5–60 mm',
      'Extruded rods: 5–100 mm',
      'Wire rods: 8, 12, 16, 20 & 25 mm',
      'IS 1897, IS 613 and IS 12444 grades',
    ],
    atAGlance: {
      sizeRange: ['Rods: 5–100 mm diameter', 'Wire rods: 8, 12, 16, 20 and 25 mm'],
      specifications: ['IS 1897, IS 613 and IS 12444/B-91', 'OFC grades C-11100 and C-10100'],
      applications: ['Power transmission', 'Wire and cable manufacturing', 'Renewable energy'],
    },
    technicalDetails: [
      {
        title: 'Copper rods',
        sizeRange: [
          'Copper rounds (soft, half hard or full hard): 5–60 mm diameter',
          'Extruded copper rod (soft): 5–100 mm diameter',
        ],
        specifications: ['IS 1897 and IS 613', 'OFC grade copper C-11100'],
        applications: [
          'Residential and commercial buildings',
          'Electrical substations',
          'Telecommunications infrastructure',
          'Power plants',
          'Industrial facilities',
          'Lightning protection systems',
          'Transmission towers and antennas',
          'Renewable energy installations',
          'Railway systems',
          'Oil and gas industry',
          'Medical facilities',
        ],
      },
      {
        title: 'Copper wire rods',
        sizeRange: ['Nominal diameters: 8, 12, 16, 20 and 25 mm'],
        specifications: [
          'IS 12444/B-91',
          'UNI C-10100 copper with oxygen below 5 ppm',
          'Tensile strength: 18–24 kg/mm²',
          'Elongation: 35% minimum',
          'Conductivity: above 101% IACS',
          'Extruded 8 mm OFC rod suitable for drawing copper wire down to 40 SWG',
        ],
        applications: [
          'Wire and cable manufacturing',
          'Electrical conductors',
          'Transformers and coils',
          'Motors and generators',
          'Automotive wiring',
          'Electronics',
          'Household appliances',
          'Telecommunications',
          'Jewellery and craftsmanship',
          'Automotive components',
          'Medical devices',
          'Heating elements',
          'Aerospace and defence',
          'Renewable energy systems',
        ],
      },
    ],
    supplierSource: 'https://bedmutha.com/copper-products/',
  },
  {
    family: 'copper-products',
    slug: 'busbars-strips-profiles',
    title: 'Busbars, Strips & Profiles',
    description:
      'Conductive copper forms for switchgear, power distribution, electrical equipment, and made-to-drawing industrial applications.',
    imageSrc: '/portfolio/copper/busbar.jpg',
    imageAlt: 'Copper busbar moving through production rollers',
    products: [
      'Busbars: 10–160 mm wide, 3–50 mm thick',
      'Rectangular strips: 8–200 mm wide, 0.15–3 mm thick',
      'Sections and profiles to customer requirements',
      'IS 1897, IS 613 and OFC C-11100 options',
    ],
    atAGlance: {
      sizeRange: ['Busbars: 10–160 mm wide', 'Strips: 8–200 mm wide'],
      specifications: ['IS 1897 and IS 613', 'OFC C-11100; strip conductivity up to 101% IACS'],
      applications: ['Switchgear and power distribution', 'Electric vehicles', 'Data centres'],
    },
    technicalDetails: [
      {
        title: 'Copper busbars',
        sizeRange: [
          'Soft, half-hard or full-hard flats and busbars',
          'Width: 10–160 mm',
          'Thickness: above 3–50 mm',
        ],
        specifications: ['IS 1897 and IS 613', 'OFC grade copper C-11100'],
        applications: [
          'Power distribution panels',
          'Switchgear and circuit breakers',
          'Power substations',
          'Industrial equipment',
          'Data centres',
          'Renewable energy systems',
          'Electric vehicles',
          'Power electronics',
          'Electrical enclosures and earthing',
          'High-current applications',
        ],
      },
      {
        title: 'Copper rectangular strips',
        sizeRange: ['Width: 8–200 mm', 'Thickness: 0.15–3 mm'],
        specifications: [
          'IS 1897 and IS 613, as applicable',
          'Oxygen: below 10 ppm',
          'Tensile strength: maximum 205 MPa',
          'Conductivity: 101% IACS',
          'Elongation: minimum 30%',
        ],
        applications: [
          'Electrical conductors and busbars',
          'Electrical grounding',
          'Electromagnetic shielding',
          'Heat sinks',
          'Architectural elements',
          'Automotive industry',
          'Craftsmanship and artistry',
          'Consumer electronics',
          'Renewable energy systems',
          'Manufacturing equipment',
          'Medical equipment',
          'Telecommunications',
          'Food and beverage industry',
          'Railway and transportation',
          'HVAC systems',
          'Metalworking and fabrication',
          'Electric vehicles',
        ],
      },
      {
        title: 'Copper sections, profiles and components',
        sizeRange: ['Width: 5–160 mm', 'Thickness: above 3–50 mm'],
        specifications: ['Oxygen-free copper', 'Produced to customer requirements'],
        applications: [
          'Busbars and conductors',
          'Heat exchangers',
          'Architectural elements',
          'Automotive radiators',
          'Renewable energy systems',
          'Lighting fixtures',
          'Electromagnetic shielding',
          'Electric vehicles',
          'Electrical connectors',
          'Switch contacts',
          'Electronic components',
          'Soldering',
          'Automotive wiring',
          'Telecommunications',
          'Medical equipment',
          'Consumer electronics',
          'Industrial machinery',
        ],
      },
    ],
    supplierSource: 'https://bedmutha.com/copper-products/',
  },
  {
    family: 'copper-products',
    slug: 'copper-foil',
    title: 'Copper Foil',
    description:
      'Thin oxygen-free copper foil for electrical and engineered applications where consistent thickness and conductivity are essential.',
    imageSrc: '/portfolio/copper/foil.jpg',
    imageAlt: 'Precision copper foil production',
    products: [
      'Widths from 8–160 mm',
      'Thicknesses from 0.035–0.150 mm',
      'Oxygen-free copper construction',
      'Application-specific supply programmes',
    ],
    atAGlance: {
      sizeRange: ['Width: 8–160 mm', 'Thickness: 0.035–0.150 mm'],
      specifications: ['Oxygen-free copper foil', 'Produced to applicable IS standards'],
      applications: ['PCBs and electronics', 'Battery manufacturing', 'Electromagnetic shielding'],
    },
    technicalDetails: [
      {
        title: 'Copper foil',
        sizeRange: ['Width: 8–160 mm', 'Thickness: 0.035–0.150 mm'],
        specifications: ['Oxygen-free copper foil produced to applicable IS standards'],
        applications: [
          'Printed circuit boards (PCBs)',
          'Electromagnetic shielding',
          'Battery manufacturing',
          'Flexible electronics',
          'Electroplating',
          'Solar cells',
          'Electrical transformers',
          'RFID tags',
          'Shielded cables',
          'Automotive electronics',
          'Aerospace and defence',
          'Electronic components',
          'Heat exchangers',
          'Photovoltaic applications',
          'Medical devices',
        ],
      },
    ],
    supplierSource: 'https://bedmutha.com/copper-products/',
  },
  {
    family: 'copper-products',
    slug: 'wires-cables',
    title: 'Copper Wires & Cables',
    description:
      'Bare, bunched, and insulated copper conductors for residential, industrial, submersible, and battery cable requirements.',
    imageSrc: '/portfolio/copper/cables.jpg',
    imageAlt: 'Copper electrical cables and conductors',
    products: [
      'Bare wire: 1.6–4.0 mm',
      'Bunched wire: 0.35–16 mm²',
      'Housing cable: 0.5–95 mm², up to 1100 V',
      'Three-core flat submersible cable: 1.5–50 mm²',
      'Battery cable: 16–95 mm²',
    ],
    atAGlance: {
      sizeRange: ['Conductors: 0.18–4 mm diameter', 'Cables: 0.35–95 mm²'],
      specifications: ['IS 8130 and IS 694', 'Up to 1100 V; application-specific insulation'],
      applications: [
        'Power distribution and buildings',
        'Pumps and irrigation',
        'Automotive systems',
      ],
    },
    technicalDetails: [
      {
        title: 'Bare copper wire',
        sizeRange: ['Bare stranded copper conductors: 1.6–4 mm diameter'],
        specifications: ['IS 8130:2010 for bare copper conductors'],
        applications: [
          'Electrical grounding',
          'Rivet wire',
          'Electrical power transmission',
          'Power distribution networks',
          'Industrial motors and generators',
          'Busbars and electrical bus systems',
          'Electroplating and electrolysis',
          'Electromagnets',
          'Electrical contacts and connectors',
          'Cable shielding and armour',
          'Earthing systems',
          'HVAC systems',
          'Solar power installations',
          'Wind energy systems',
          'Industrial lighting systems',
          'Electrical testing and research',
          'Industrial manufacturing equipment',
        ],
      },
      {
        title: 'Bunched copper wire',
        sizeRange: ['Conductor diameter: 0.180–1.6 mm', 'Cross-sectional area: 0.35–16 mm²'],
        specifications: [
          'Annealed or hard condition',
          'Conductivity: 100% IACS minimum',
          'Elongation over 250 mm gauge length: 20% minimum for 0.18–0.50 mm',
          'Elongation: 25% minimum for 0.51–1.36 mm',
          'Elongation: 30% minimum above 1.36 mm',
        ],
        applications: [
          'Electrical power distribution',
          'Industrial motors and generators',
          'Transformers and inductors',
          'Automotive industry',
          'Industrial machinery',
          'Renewable energy systems',
          'Mining equipment',
          'Construction and infrastructure',
          'Marine and offshore applications',
          'Industrial control systems',
          'Aerospace and defence',
          'Power generation and transmission',
          'HVAC systems',
          'Data centres and telecommunications',
          'Electrical substations',
          'Oil and gas industry',
        ],
      },
      {
        title: 'Housing and industrial cables',
        sizeRange: [
          'Single-core FR-LF, FR-LF-LSH and HR-FR-LF cable: 0.5–16 mm²',
          'Single-core and multicore industrial cable: 0.5–95 mm²',
          'Voltage grade: up to 1100 V',
          'Standard and customized core colours available',
        ],
        specifications: [
          'IS 694:2010, IEC 60332-1:2004 and ASTM D2863 / ASTM D2803-17a',
          'IS 8130:2013 BIS approval and IMS system',
          'Nominal voltage: 600/1100 V',
          'Maximum operating temperature: 70°C',
          'Operating temperature range: 15°C to +70°C',
          'Flame-resistant construction with 8D minimum bending radius',
        ],
        applications: [
          'Residential electrical wiring',
          'Commercial buildings',
          'Industrial facilities',
          'Apartment complexes and condominiums',
          'Wiring upgrades and renovations',
          'Lighting systems',
          'Heating and cooling systems',
          'Home entertainment systems',
          'Home automation',
          'Electrical outlets and receptacles',
          'Safety systems',
          'Outdoor electrical wiring',
          'Garages and workshops',
          'Bathroom appliances',
        ],
      },
      {
        title: 'Submersible pump cables',
        sizeRange: ['Three-core flat submersible cable: 1.5–50 mm²'],
        specifications: [
          'Flexible bare annealed electrolytic-grade copper conductor',
          'Specially formulated Type A, C or D PVC insulation',
          'Specially formulated ST-1 or ST-3 PVC outer sheath',
          'IS 694:2010',
          'Customer-specific configurations available',
        ],
        applications: [
          'Submersible pumps',
          'Agricultural irrigation',
          'Water supply systems',
          'Water treatment plants',
          'Aquaculture and fish farming',
          'Fountains and water features',
          'Sewage and wastewater management',
          'Industrial and construction dewatering',
          'Oil wells',
          'Geothermal wells',
          'Mining',
          'Emergency pumping systems',
        ],
      },
      {
        title: 'Battery cables',
        sizeRange: [
          'Standard battery cable: 16–95 mm²',
          'HFFR-grade standard battery cable: 16–95 mm²',
          'Superflex battery cable: 16–95 mm²',
        ],
        specifications: [
          'Maximum voltage rating: 200 V',
          'Test voltage: 1000 V',
          'Temperature range: -30°C to +70°C',
          'Annealed bare copper strands',
          'Class 5 or Class 6 construction to EN 60228, depending on cable type',
          'TPE or PVC insulation over bunched conductor',
          'Supplied on wooden drums',
          'Insulation tested for acid resistance and resistance to deformation or shrinkage',
          'Resistant to ozone, acids, solvents, detergents, petroleum jelly and oils',
        ],
        applications: [
          'Automotive and transportation',
          'Material-handling equipment',
          'Backup power systems',
          'Renewable energy systems',
          'Industrial machinery',
          'Mining equipment',
          'Marine and boating',
          'Construction machinery',
          'Telecommunications',
          'Agricultural machinery',
          'Railway systems',
          'Emergency lighting',
          'Electric vehicles',
        ],
      },
    ],
    supplierSource: 'https://bedmutha.com/copper-products/',
  },
  {
    family: 'copper-products',
    slug: 'battery-connectors-flexible-busbars',
    title: 'Battery Connectors & Flexible Busbars',
    description:
      'Custom current-carrying connections for EV and energy-storage battery systems, engineered around electrical, thermal, vibration, and packaging constraints.',
    imageSrc: '/portfolio/copper/profiles.jpg',
    imageAlt: 'Engineered copper profiles for electrical connections',
    products: [
      'Cell-to-cell connectors',
      'Cylindrical, prismatic and pouch-cell formats',
      'Copper, aluminium and clad material options',
      'Laminated flexible and hybrid busbars',
    ],
    atAGlance: {
      sizeRange: ['Custom to cell format and pack layout'],
      specifications: ['Copper, aluminium and clad materials', 'Flexible laminated construction'],
      applications: ['EV battery packs', 'Energy-storage systems', 'Switchgear'],
    },
    technicalDetails: [
      {
        title: 'Cell-to-cell connectors',
        sizeRange: ['Custom engineered for the battery-cell format and pack layout'],
        specifications: [
          'Compatible with cylindrical, prismatic and pouch cells',
          'Copper, aluminium and clad material options',
          'Designed for EV battery systems and energy-storage modules',
        ],
        applications: ['Electric-vehicle battery packs', 'Energy-storage system modules'],
      },
      {
        title: 'Flexible and hybrid busbars',
        sizeRange: ['Custom layouts, insulation systems and thermal requirements'],
        specifications: [
          'Laminated copper or aluminium construction',
          'High current-carrying capacity',
          'Designed for vibration performance',
        ],
        applications: [
          'Electric-vehicle battery packs',
          'Energy-storage systems',
          'Switchgear and power distribution',
        ],
      },
    ],
    supplierSource: 'https://mnecomponents.com/',
  },
  {
    family: 'copper-products',
    slug: 'stamped-laser-welded-components',
    title: 'Stamped & Laser-Welded Components',
    description:
      'Precision-formed and joined components for battery packs and electrical assemblies, including high-volume progressive-stamped parts and dissimilar-metal joints.',
    imageSrc: '/portfolio/copper/strip.jpg',
    imageAlt: 'Formed copper strip components',
    products: [
      'High-speed progressive stamping',
      'Copper, nickel, aluminium, clad and stainless materials',
      'Similar and dissimilar-metal laser welding',
      'Custom battery and electrical components',
    ],
    atAGlance: {
      sizeRange: ['Custom to drawing and joint geometry'],
      specifications: [
        'Progressive stamping and laser welding',
        'Cu, Ni, Al, clad and stainless steel',
      ],
      applications: ['High-power battery packs', 'Electrical assemblies', 'Cell interconnects'],
    },
    technicalDetails: [
      {
        title: 'Stamped and formed components',
        sizeRange: ['Custom engineered to component drawings and production requirements'],
        specifications: [
          'High-speed progressive stamping',
          'Copper, nickel, aluminium, clad and stainless-steel materials',
          'Precision engineered for high-volume production',
        ],
        applications: [
          'Battery-pack components',
          'Cell interconnects',
          'Electrical assemblies',
          'Switchgear components',
        ],
      },
      {
        title: 'Laser-welded components',
        sizeRange: ['Custom engineered to joint geometry and assembly requirements'],
        specifications: [
          'Similar- and dissimilar-metal joining',
          'Clean, strong and reliable welded connections',
          'Copper, nickel, aluminium, clad and stainless-steel material combinations',
        ],
        applications: [
          'High-power battery packs',
          'Cell-to-cell connections',
          'Electrical subassemblies',
          'Automotive and energy-storage systems',
        ],
      },
    ],
    supplierSource: 'https://mnecomponents.com/',
  },
];

export function getCopperRange(slug: string | undefined) {
  return copperRanges.find((item) => item.slug === slug);
}

export type ForgedComponent = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  supplierSource: string;
};

export type ForgedSector = {
  family: 'forged-components';
  slug: 'automotive' | 'agriculture' | 'general-engineering';
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  supplierSource: string;
  components: ForgedComponent[];
};

export const forgedSectors: ForgedSector[] = [
  {
    family: 'forged-components',
    slug: 'automotive',
    title: 'Automotive Components',
    description:
      'Forged and machined transmission, drivetrain, and motion-control components for automotive applications.',
    imageSrc: '/portfolio/forged/automotive/ring-gear-6890.png',
    imageAlt: 'Forged automotive ring gear',
    supplierSource: 'https://www.siddhiforge.com/auto-sector/',
    components: [
      {
        slug: 'ring-gear-6890-2',
        title: 'Ring Gear 6890 2',
        imageSrc: '/portfolio/forged/automotive/ring-gear-6890.png',
        imageAlt: 'Forged Ring Gear 6890 2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-gear-6890-n06',
        title: 'Ring Gear 6890 N06',
        imageSrc: '/portfolio/forged/automotive/ring-gear-6890-n06.png',
        imageAlt: 'Forged Ring Gear 6890 N06',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-gear-6890',
        title: 'Ring Gear 6890',
        imageSrc: '/portfolio/forged/automotive/ring-gear-6890.png',
        imageAlt: 'Forged Ring Gear 6890',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-shifter',
        title: 'Ring Shifter 1',
        imageSrc: '/portfolio/forged/automotive/ring-shifter.png',
        imageAlt: 'Forged automotive Ring Shifter 1',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-shifter-2',
        title: 'Ring Shifter 2',
        imageSrc: '/portfolio/forged/automotive/ring-shifter-2.png',
        imageAlt: 'Forged automotive Ring Shifter 2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'shaft',
        title: 'Shaft 1',
        imageSrc: '/portfolio/forged/automotive/shaft.png',
        imageAlt: 'Forged automotive Shaft 1',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'shaft-2',
        title: 'Shaft 2',
        imageSrc: '/portfolio/forged/automotive/shaft-2.png',
        imageAlt: 'Forged automotive Shaft 2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'solid-worm',
        title: 'Solid Worm',
        imageSrc: '/portfolio/forged/automotive/solid-worm.png',
        imageAlt: 'Forged solid worm component',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'worm-8043',
        title: 'Worm 8043',
        imageSrc: '/portfolio/forged/automotive/worm-8043.png',
        imageAlt: 'Forged automotive Worm 8043',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'worm-m033',
        title: 'Worm M033',
        imageSrc: '/portfolio/forged/automotive/worm-m033.png',
        imageAlt: 'Forged automotive Worm M033',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'fifth-gear',
        title: 'Fifth Gear',
        imageSrc: '/portfolio/forged/automotive/fifth-gear.png',
        imageAlt: 'Forged automotive fifth gear',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'counter-gear-6mt',
        title: 'Counter Gear 6MT',
        imageSrc: '/portfolio/forged/automotive/counter-gear-6mt.png',
        imageAlt: 'Forged counter gear 6MT',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'pinion-1680',
        title: 'Pinion 1680 N06',
        imageSrc: '/portfolio/forged/automotive/pinion-1680.png',
        imageAlt: 'Forged automotive Pinion 1680 N06',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'pinion-1780-n05',
        title: 'Pinion 1780 N05',
        imageSrc: '/portfolio/forged/automotive/pinion-1780-n05.png',
        imageAlt: 'Forged automotive Pinion 1780 N05',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'pinion-4773',
        title: 'Pinion 4773',
        imageSrc: '/portfolio/forged/automotive/pinion-4773.png',
        imageAlt: 'Forged automotive Pinion 4773',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'pinion-6680',
        title: 'Pinion 6680',
        imageSrc: '/portfolio/forged/automotive/pinion-6680.png',
        imageAlt: 'Forged automotive Pinion 6680',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'pinion-7218',
        title: 'Pinion 7218',
        imageSrc: '/portfolio/forged/automotive/pinion-7218.png',
        imageAlt: 'Forged automotive Pinion 7218',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-105-w1',
        title: 'Piston 105 W1',
        imageSrc: '/portfolio/forged/automotive/piston-105-w1.png',
        imageAlt: 'Forged automotive Piston 105 W1',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-105-w2',
        title: 'Piston 105 W2',
        imageSrc: '/portfolio/forged/automotive/piston-105-w2.png',
        imageAlt: 'Forged automotive Piston 105 W2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-623-d-1',
        title: 'Piston 623 D — View 1',
        imageSrc: '/portfolio/forged/automotive/piston-623-d-1.png',
        imageAlt: 'First forged automotive Piston 623 D configuration',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-121-t-2',
        title: 'Piston 121 T 2',
        imageSrc: '/portfolio/forged/automotive/piston-121-t-2.png',
        imageAlt: 'Forged automotive Piston 121 T 2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-121t',
        title: 'Piston 121 T',
        imageSrc: '/portfolio/forged/automotive/piston-121t.png',
        imageAlt: 'Forged automotive Piston 121 T',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-185-r',
        title: 'Piston 185 R',
        imageSrc: '/portfolio/forged/automotive/piston-185-r.png',
        imageAlt: 'Forged automotive Piston 185 R',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-623-d-2',
        title: 'Piston 623 D — View 2',
        imageSrc: '/portfolio/forged/automotive/piston-623-d-2.png',
        imageAlt: 'Second forged automotive Piston 623 D configuration',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston',
        title: 'Piston',
        imageSrc: '/portfolio/forged/automotive/piston.png',
        imageAlt: 'Forged automotive piston',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-gear-692-2',
        title: 'Ring Gear 692 2',
        imageSrc: '/portfolio/forged/automotive/ring-gear-692-2.png',
        imageAlt: 'Forged automotive Ring Gear 692 2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-gear-692',
        title: 'Ring Gear 692',
        imageSrc: '/portfolio/forged/automotive/ring-gear-692.png',
        imageAlt: 'Forged automotive Ring Gear 692',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-gear-6670-1',
        title: 'Ring Gear 6670 1',
        imageSrc: '/portfolio/forged/automotive/ring-gear-6670-1.png',
        imageAlt: 'Forged automotive Ring Gear 6670 1',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-gear-6670-2',
        title: 'Ring Gear 6670 2',
        imageSrc: '/portfolio/forged/automotive/ring-gear-6670-2.png',
        imageAlt: 'Forged automotive Ring Gear 6670 2',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
    ],
  },
  {
    family: 'forged-components',
    slug: 'agriculture',
    title: 'Agricultural Equipment Components',
    description:
      'Durable forged parts for agricultural equipment, covering structural, clamping, guiding, and connection applications.',
    imageSrc: '/portfolio/forged/agriculture/arbor-580d.png',
    imageAlt: 'Forged agricultural equipment arbor',
    supplierSource: 'https://www.siddhiforge.com/farm-sector/',
    components: [
      ['arbor-580d', 'Arbor 580 D 1', 'arbor-580d.png'],
      ['arbor-580d-2', 'Arbor 580 D 2', 'arbor-580d-2.png'],
      ['arbor-729x-1', 'Arbor 729 X 1', 'arbor-729x-1.png'],
      ['arbor-729x-2', 'Arbor 729 X 2', 'arbor-729x-2.png'],
      ['arbor-837g-1', 'Arbor 837 G 1', 'arbor-837g-1.png'],
      ['arbor-837g-2', 'Arbor 837 G 2', 'arbor-837g-2.png'],
      ['band', 'Band 1', 'band.png'],
      ['band-2', 'Band 2', 'band-2.png'],
      ['brake-cover-49e', 'Brake Cover 49 E 1', 'brake-cover-49e.png'],
      ['brake-cover-49e-2', 'Brake Cover 49 E 2', 'brake-cover-49e-2.png'],
      ['brake-cover-76v-2', 'Brake Cover 76 V 2', 'brake-cover-76v-2.png'],
      ['brake-cover-76v-1', 'Brake Cover 76 V 1', 'brake-cover-76v-1.png'],
      ['brake-cover-612f-1', 'Brake Cover 612 F 1', 'brake-cover-612f-1.png'],
      ['brake-cover-612f-2', 'Brake Cover 612 F 2', 'brake-cover-612f-2.png'],
      ['guide-ring', 'Guide Ring 1', 'guide-ring.png'],
      ['guide-ring-2', 'Guide Ring 2', 'guide-ring-2.png'],
      ['guide-ring-upper-2', 'Guide Ring Upper 2', 'guide-ring-upper-2.png'],
      ['guide-ring-upper', 'Guide Ring Upper', 'guide-ring-upper.png'],
      ['hub-nut', 'Hub Nut 1', 'hub-nut.png'],
      ['hub-nut-2', 'Hub Nut 2', 'hub-nut-2.png'],
      ['lower-body-63', 'Lower Body 63', 'lower-body-63.png'],
      ['lower-body-76', 'Lower Body 76', 'lower-body-76.png'],
      ['sms-nut-76-2', 'SMS Nut 76 2', 'sms-nut-76-2.png'],
      ['sms-nut-76', 'SMS Nut 76', 'sms-nut-76.png'],
      ['stem-nut', 'Stem Nut 1', 'stem-nut.png'],
      ['stem-nut-2', 'Stem Nut 2', 'stem-nut-2.png'],
      ['thread-clamp-ring', 'Thread Clamp Ring', 'thread-clamp-ring.png'],
      ['upper-body-51', 'Upper Body 51', 'upper-body-51.png'],
      ['upper-body-76', 'Upper Body 76', 'upper-body-76.png'],
      ['upper-body-din65', 'Upper Body DIN 65', 'upper-body-din65.png'],
      ['welding-adaptor', 'Welding Adaptor', 'welding-adaptor.png'],
    ].map(([slug, title, imageFile]) => ({
      slug,
      title,
      imageSrc: `/portfolio/forged/agriculture/${imageFile}`,
      imageAlt: `Forged agricultural ${title}`,
      supplierSource: 'https://www.siddhiforge.com/farm-sector/',
    })),
  },
  {
    family: 'forged-components',
    slug: 'general-engineering',
    title: 'General Engineering Components',
    description:
      'Forged and machined rings, covers, supports, lugs, and rotors for industrial engineering programmes.',
    imageSrc: '/portfolio/forged/general-engineering/rotor-200k.png',
    imageAlt: 'Forged general-engineering rotor',
    supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
    components: [
      ['end-cover-2', 'End Cover 2', 'end-cover-2.png'],
      ['frame-foot', 'Frame Foot 1', 'frame-foot.png'],
      ['frame-foot-2', 'Frame Foot 2', 'frame-foot-2.png'],
      ['frame-foot-center', 'Frame Foot Center 1', 'frame-foot-center.png'],
      ['frame-foot-center-2', 'Frame Foot Center 2', 'frame-foot-center-2.png'],
      ['lug-rh', 'Lug RH 1', 'lug-rh.png'],
      ['lug-rh-2', 'Lug RH 2', 'lug-rh-2.png'],
      ['lug-rh-3', 'Lug RH 3', 'lug-rh-3.png'],
      ['rotor-225', 'Rotor 225', 'rotor-225.png'],
      ['rotor-48e', 'Rotor 48 E', 'rotor-48e.png'],
      ['rotor-200k-2', 'Rotor 200 K 2', 'rotor-200k-2.png'],
      ['rotor-200k', 'Rotor 200 K', 'rotor-200k.png'],
      ['rotor-225-2', 'Rotor 225 2', 'rotor-225-2.png'],
      ['rotor-324e', 'Rotor 324 E', 'rotor-324e.png'],
      ['rotor-493t-2', 'Rotor 493 T 2', 'rotor-493t-2.png'],
      ['rotor-493t', 'Rotor 493 T', 'rotor-493t.png'],
      ['rotor-663b', 'Rotor 663 B', 'rotor-663b.png'],
      ['rotor-663b-2', 'Rotor 663 B 2', 'rotor-663b-2.png'],
      ['clamp-ring-504', 'Clamp Ring 504', 'clamp-ring-504.png'],
      ['clamp-ring', 'Clamp Ring', 'clamp-ring.png'],
      ['din-50-upper', 'DIN 50 Upper', 'din-50-upper.png'],
      ['end-cover', 'End Cover 1', 'end-cover.png'],
    ].map(([slug, title, imageFile]) => ({
      slug,
      title,
      imageSrc: `/portfolio/forged/general-engineering/${imageFile}`,
      imageAlt: `Forged general-engineering ${title}`,
      supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
    })),
  },
];

export function getForgedSector(slug: string | undefined) {
  return forgedSectors.find((sector) => sector.slug === slug);
}
