export type ProfileCategory = 'team' | 'advisor';

export type TeamProfile = {
  slug: string;
  name: string;
  role: string;
  image: string;
  category: ProfileCategory;
  shortBio: string;
  longBio: string[];
  focusAreas: string[];
  highlights: string[];
};

export const teamProfiles: TeamProfile[] = [
  {
    slug: 'nikhil-kichambare',
    name: 'Nikhil Kichambare',
    role: 'Founder & CEO',
    image: '/team/nikhil-kichambare.jpg',
    category: 'team',
    shortBio:
      'Founded AxionIntegra with a clear focus on solving structural challenges in industrial supply chains through centralized responsibility and accountable execution.',
    longBio: [
      'Nikhil Kichambare founded AxionIntegra with a clear focus on solving a structural challenge in industrial supply chains the lack of centralized responsibility across manufacturing and execution.',
      'His approach is centered on integrating engineering requirements with manufacturing capability under a controlled and accountable framework. He works across supplier coordination, production alignment, and quality validation to ensure that industrial programs are executed with clarity, discipline, and predictable outcomes.',
      'Nikhil operates at the intersection of precision manufacturing, supply chain integration, and execution governance, enabling companies to reduce operational complexity while maintaining performance standards across cost, quality, and delivery.',
    ],
    focusAreas: [
      'Precision Manufacturing Integration',
      'Supply Chain Execution & Coordination',
      'Industrial Cost & Process Optimization',
      'Quality Control & Compliance Alignment',
      'Cross-Border Manufacturing Strategy',
    ],
    highlights: [
      'Established AxionIntegra as a structured execution model for precision manufacturing and supply integration.',
      'Developed accountable workflows for supplier coordination, quality validation, and delivery control.',
      'Built manufacturing networks aligned with cost efficiency and engineering standards.',
      'Focused on reducing supply chain fragmentation through centralized execution responsibility.',
    ],
  },
  {
    slug: 'aditi-hiray',
    name: 'Aditi Hiray',
    role: 'Co-Founder & Director',
    image: '/team/aditi-hiray.png',
    category: 'team',
    shortBio:
      'Shaping organizational structure and operational alignment to ensure execution frameworks remain consistent, scalable, and aligned with long-term objectives.',
    longBio: [
      'Aditi Hiray plays a key role in shaping the organizational structure and operational alignment at AxionIntegra. As Co-Founder, she focuses on building internal clarity across processes, ensuring that execution frameworks remain consistent, scalable, and aligned with long-term business objectives.',
      'Her work supports the integration of strategic direction with day-to-day execution, enabling teams to operate with discipline, coordination, and clear communication. She works closely with leadership and operational functions to maintain continuity across planning, delivery, and customer engagement.',
      'Aditi contributes to establishing stable operational foundations, ensuring that growth is supported by structured processes rather than reactive execution.',
    ],
    focusAreas: [
      'Organizational Structuring & Process Alignment',
      'Business Operations & Internal Coordination',
      'Delivery Planning & Execution Consistency',
      'Cross-Functional Communication',
      'Scalable Operational Frameworks',
    ],
    highlights: [
      "Co-established AxionIntegra's operational and execution framework.",
      'Strengthened internal coordination between strategy and delivery functions.',
      'Contributed to building structured workflows for scalable program execution.',
      'Supports consistency in execution standards and communication across projects.',
    ],
  },
  {
    slug: 'rajendra-desurkar',
    name: 'Rajendra Desurkar',
    role: 'Director & COO',
    image: '/team/rajendra-desurkar.jpeg',
    category: 'team',
    shortBio:
      'Bringing over three decades of manufacturing and industrial operations experience to lead execution with structured workflows and delivery reliability.',
    longBio: [
      'Rajendra Desurkar brings over three decades of experience across manufacturing operations, production coordination, and industrial supply environments. His professional background spans organizations such as HMT Limited (HMB Division, Bangalore), Century Alloys, Leakproof Seals Pvt. Ltd., and EagleBurgmann India Pvt. Ltd., where he has worked across planning, production supervision, export sales, and coordination functions.',
      'At AxionIntegra, he leads operational execution with a focus on structured workflows, supplier coordination, and delivery reliability. His approach is grounded in practical manufacturing experience, enabling him to manage production alignment, resolve operational challenges, and maintain process discipline across projects.',
      'Rajendra combines analytical problem-solving with strong communication and coordination capabilities, ensuring that execution remains controlled, efficient, and aligned with customer expectations.',
    ],
    focusAreas: [
      'Operations Management & Execution Control',
      'Production Planning & Coordination',
      'Supplier Alignment & Communication',
      'Process Optimization & Workflow Discipline',
      'Delivery Reliability & Operational Risk Management',
    ],
    highlights: [
      'Brings 31+ years of experience across manufacturing, planning, and industrial coordination roles.',
      'Worked across leading organizations including HMT Limited, Century Alloys, Leakproof Seals, and EagleBurgmann India.',
      'Managed production supervision, export coordination, and multi-functional operational roles.',
      'Known for strong problem-solving ability, structured execution, and cross-functional coordination.',
    ],
  },
  {
    slug: 'akshay-devhare',
    name: 'Akshay Devhare',
    role: 'Human Resource',
    image: '/team/akshay-devhare.jpeg',
    category: 'team',
    shortBio:
      'HR and administration professional with manufacturing-sector experience across statutory compliance, labour law, recruitment, payroll, training, and employee relations.',
    longBio: [
      'Akshay Devhare brings HR, industrial relations, and administration experience across manufacturing organizations in Chakan, Pune. His background includes roles with SAM Manufacturing Ltd. (MINDA Group), Otter Controls India Pvt. Ltd. (UK MNC), and S N Casting Ltd., where he has worked across HR operations, IR, administration, and employee support functions.',
      'He has in-depth knowledge of legal and statutory compliance, labour law, and HR best practices. His work spans recruitment and selection, onboarding, employee orientation, payroll processing, benefits administration, documentation, training coordination, performance appraisal systems, and health and safety protocol compliance.',
      'Akshay has managed HR responsibilities for a 250+ employee manufacturing unit and has supported recruitment and training for mid-level employees. He also contributes to employee relations by addressing demands, grievances, workplace concerns, and disputes through structured communication between management and employees.',
    ],
    focusAreas: [
      'HR, IR & Administration',
      'Legal & Statutory Compliance',
      'Labour Law & HR Best Practices',
      'Recruitment, Onboarding & Training',
      'Payroll, Benefits & Employee Records',
      'Employee Relations & Grievance Handling',
    ],
    highlights: [
      'Worked in HR and administration roles across SAM Manufacturing, Otter Controls India, and S N Casting.',
      'Supported management and employee relations by addressing demands, grievances, disputes, employment concerns, and workplace complaints.',
      'Maintained employment records covering compensation, benefits, pension plans, disciplinary matters, and employee disputes.',
      'Participated in CSR activities in local villages and supported workplace morale initiatives with motivational speakers and industry experts.',
    ],
  },
  {
    slug: 'sudhakar-punde',
    name: 'Sudhakar Punde',
    role: 'Advisor',
    image: '/team/sudhakar-punde.jpeg',
    category: 'advisor',
    shortBio:
      'Strategic advisor with 40+ years of techno-managerial experience across project management, industrial operations, energy systems, and safety engineering.',
    longBio: [
      'Sudhakar (S. V.) Punde brings over four decades of techno-managerial experience across project management, industrial operations, energy systems, and safety engineering. His professional journey spans leading organizations including the Indian Air Force, MICO, TELCO, Crompton Greaves, and Perkins Pump, where he has contributed across engineering, maintenance, and large-scale industrial program execution.',
      'Beyond his corporate experience, Mr. Punde has held director-level responsibilities across multiple industrial organizations and has been actively involved in establishing and developing engineering and consultancy firms in Nashik. His exposure to both operational execution and organizational leadership provides a balanced perspective on industrial growth, performance, and sustainability.',
      'As an advisor to AxionIntegra, he provides strategic direction on industrial project structuring, operational planning, and capability development. His expertise in energy conservation, environmental management systems (ISO 14001), and occupational health and safety (OHSAS/ISO 18001) brings a strong compliance and sustainability perspective to complex manufacturing environments.',
      'Mr. Punde has successfully led and completed multiple turnkey industrial projects and has implemented structured safety and environmental systems across a wide range of organizations. His international exposure across Europe, the Middle East, and Asia, combined with his deep understanding of Indian industrial ecosystems, enables him to provide balanced and practical strategic guidance.',
      'Through his extensive industry network and long-standing professional relationships, he also supports market connectivity and opportunity development for industrial collaborations.',
    ],
    focusAreas: [
      'Strategic Industrial Advisory & Project Structuring',
      'Energy Management & Sustainability Systems',
      'Safety Engineering & Compliance Frameworks',
      'Industrial Operations & Maintenance Strategy',
      'Market Connectivity & Industry Network Development',
    ],
    highlights: [
      '40+ years of experience across engineering, project management, and industrial operations.',
      'Worked with major organizations including Indian Air Force, TELCO, Crompton Greaves, and Perkins Pump.',
      'Successfully completed 17 large-scale turnkey industrial projects.',
      'Implemented environmental and safety systems (ISO 14001 & OHSAS 18001) across hundreds of organizations.',
      'Extensive international exposure across Europe, Middle East, UK, and Asia in industrial and environmental domains.',
      'Acts as a strategic industry connector, supporting business development and industrial partnerships.',
    ],
  },
  {
    slug: 'anagha-hiray',
    name: 'Anagha Hiray',
    role: 'Advisor',
    image: '/team/anagha-hiray.png',
    category: 'advisor',
    shortBio:
      'Supporting leadership with practical advisory input across program structuring, stakeholder alignment, and execution consistency.',
    longBio: [
      'Anagha Hiray contributes to AxionIntegra by supporting leadership with practical advisory input across program structuring, stakeholder alignment, and execution consistency.',
      'Her approach focuses on strengthening coordination between planning and delivery, ensuring that execution remains structured, disciplined, and aligned with defined objectives. She works closely with teams to bring clarity in decision-making, improve process consistency, and support reliable program outcomes.',
      'Anagha provides a balanced perspective between strategic direction and ground-level execution, helping maintain stability and continuity across ongoing initiatives.',
    ],
    focusAreas: [
      'Program Structuring & Advisory Support',
      'Stakeholder Alignment & Coordination',
      'Execution Discipline & Process Consistency',
      'Delivery Planning Support',
      'Decision Framework Alignment',
    ],
    highlights: [
      'Contributes to structured advisory reviews across ongoing programs.',
      'Supports development of clear execution checkpoints and decision frameworks.',
      'Helps improve coordination between planning and delivery functions.',
      'Strengthens consistency and discipline in execution across initiatives.',
    ],
  },
];

export function getProfileBySlug(slug: string) {
  return teamProfiles.find((profile) => profile.slug === slug);
}
