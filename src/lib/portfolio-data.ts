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
  featured: boolean;
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: false,
  },
];

export const featuredPortfolioItems = portfolioItems.filter((item) => item.featured);

export function getPortfolioItem(slug: string | undefined) {
  return portfolioItems.find((item) => item.slug === slug);
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
        slug: 'ring-gear-6890',
        title: 'Ring Gear 6890',
        imageSrc: '/portfolio/forged/automotive/ring-gear-6890.png',
        imageAlt: 'Forged Ring Gear 6890',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'ring-shifter',
        title: 'Ring Shifter',
        imageSrc: '/portfolio/forged/automotive/ring-shifter.png',
        imageAlt: 'Forged automotive ring shifter',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'shaft',
        title: 'Forged Shaft',
        imageSrc: '/portfolio/forged/automotive/shaft.png',
        imageAlt: 'Forged automotive shaft',
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
        title: 'Pinion 1680',
        imageSrc: '/portfolio/forged/automotive/pinion-1680.png',
        imageAlt: 'Forged automotive pinion 1680',
        supplierSource: 'https://www.siddhiforge.com/auto-sector/',
      },
      {
        slug: 'piston-121t',
        title: 'Piston 121T',
        imageSrc: '/portfolio/forged/automotive/piston-121t.png',
        imageAlt: 'Forged piston 121T component',
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
      {
        slug: 'arbor-580d',
        title: 'Arbor 580D',
        imageSrc: '/portfolio/forged/agriculture/arbor-580d.png',
        imageAlt: 'Forged agricultural Arbor 580D',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'band',
        title: 'Forged Band',
        imageSrc: '/portfolio/forged/agriculture/band.png',
        imageAlt: 'Forged agricultural equipment band',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'brake-cover-49e',
        title: 'Brake Cover 49E',
        imageSrc: '/portfolio/forged/agriculture/brake-cover-49e.png',
        imageAlt: 'Forged agricultural brake cover 49E',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'guide-ring',
        title: 'Guide Ring',
        imageSrc: '/portfolio/forged/agriculture/guide-ring.png',
        imageAlt: 'Forged agricultural guide ring',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'hub-nut',
        title: 'Hub Nut',
        imageSrc: '/portfolio/forged/agriculture/hub-nut.png',
        imageAlt: 'Forged agricultural hub nut',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'lower-body-63',
        title: 'Lower Body 63',
        imageSrc: '/portfolio/forged/agriculture/lower-body-63.png',
        imageAlt: 'Forged agricultural lower body 63',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'stem-nut',
        title: 'Stem Nut',
        imageSrc: '/portfolio/forged/agriculture/stem-nut.png',
        imageAlt: 'Forged agricultural stem nut',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'thread-clamp-ring',
        title: 'Thread Clamp Ring',
        imageSrc: '/portfolio/forged/agriculture/thread-clamp-ring.png',
        imageAlt: 'Forged agricultural thread clamp ring',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'upper-body-din65',
        title: 'Upper Body DIN 65',
        imageSrc: '/portfolio/forged/agriculture/upper-body-din65.png',
        imageAlt: 'Forged agricultural upper body DIN 65',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
      {
        slug: 'welding-adaptor',
        title: 'Welding Adaptor',
        imageSrc: '/portfolio/forged/agriculture/welding-adaptor.png',
        imageAlt: 'Forged agricultural welding adaptor',
        supplierSource: 'https://www.siddhiforge.com/farm-sector/',
      },
    ],
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
      {
        slug: 'clamp-ring-504',
        title: 'Clamp Ring 504',
        imageSrc: '/portfolio/forged/general-engineering/clamp-ring-504.png',
        imageAlt: 'Forged clamp ring 504',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'din-50-upper',
        title: 'DIN 50 Upper',
        imageSrc: '/portfolio/forged/general-engineering/din-50-upper.png',
        imageAlt: 'Forged DIN 50 upper component',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'end-cover',
        title: 'End Cover',
        imageSrc: '/portfolio/forged/general-engineering/end-cover.png',
        imageAlt: 'Forged general-engineering end cover',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'frame-foot',
        title: 'Frame Foot',
        imageSrc: '/portfolio/forged/general-engineering/frame-foot.png',
        imageAlt: 'Forged industrial frame foot',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'frame-foot-center',
        title: 'Frame Foot Center',
        imageSrc: '/portfolio/forged/general-engineering/frame-foot-center.png',
        imageAlt: 'Forged center frame foot',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'lug-rh',
        title: 'Lug RH',
        imageSrc: '/portfolio/forged/general-engineering/lug-rh.png',
        imageAlt: 'Forged right-hand lug',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'rotor-200k',
        title: 'Rotor 200K',
        imageSrc: '/portfolio/forged/general-engineering/rotor-200k.png',
        imageAlt: 'Forged industrial rotor 200K',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'rotor-225',
        title: 'Rotor 225',
        imageSrc: '/portfolio/forged/general-engineering/rotor-225.png',
        imageAlt: 'Forged industrial rotor 225',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'rotor-493t',
        title: 'Rotor 493T',
        imageSrc: '/portfolio/forged/general-engineering/rotor-493t.png',
        imageAlt: 'Forged industrial rotor 493T',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
      {
        slug: 'rotor-663b',
        title: 'Rotor 663B',
        imageSrc: '/portfolio/forged/general-engineering/rotor-663b.png',
        imageAlt: 'Forged industrial rotor 663B',
        supplierSource: 'https://www.siddhiforge.com/general-engineering-sector/',
      },
    ],
  },
];

export function getForgedSector(slug: string | undefined) {
  return forgedSectors.find((sector) => sector.slug === slug);
}
