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
      'Leading AxioNIntegra with a focus on integrated delivery, production readiness, and accountable outcomes.',
    longBio: [
      'Dummy text: Nikhil drives the company vision and connects engineering, manufacturing, and execution into one delivery model for enterprise programs.',
      'Dummy text: He works closely with teams across the lifecycle to improve predictability, reduce handoffs, and keep quality standards high from concept to deployment.',
    ],
    focusAreas: [
      'Integrated program leadership',
      'Industrial engineering strategy',
      'Execution governance',
    ],
    highlights: [
      'Dummy text: Led multiple cross-functional delivery transformations.',
      'Dummy text: Built operating frameworks for faster production onboarding.',
      'Dummy text: Established quality-first execution standards.',
    ],
  },
  {
    slug: 'aditi-hiray',
    name: 'Aditi Hiray',
    role: 'Co-Founder & Director',
    image: '/team/p4.png',
    category: 'team',
    shortBio:
      'Helping shape long-term direction, operational discipline, and scalable delivery foundations.',
    longBio: [
      'Dummy text: Aditi supports strategic planning, organizational alignment, and growth priorities across AxioNIntegra programs.',
      'Dummy text: She partners with leadership and delivery teams to maintain consistency in execution and customer communication.',
    ],
    focusAreas: ['Business operations', 'Leadership alignment', 'Delivery planning'],
    highlights: [
      'Dummy text: Co-created the initial operating model for the company.',
      'Dummy text: Strengthened cross-team decision workflows.',
      'Dummy text: Helped scale program coordination processes.',
    ],
  },
  {
    slug: 'rajendra-desurkar',
    name: 'Rajendra Desurkar',
    role: 'COO',
    image: '/team/rajendra-desurkar.jpeg',
    category: 'team',
    shortBio:
      'Overseeing operational performance and execution excellence across active initiatives.',
    longBio: [
      'Dummy text: Rajendra leads day-to-day operations and ensures delivery teams maintain clear timelines, ownership, and accountability.',
      'Dummy text: He focuses on operational reliability, risk management, and process optimization for enterprise-scale engagement.',
    ],
    focusAreas: ['Operations management', 'Execution controls', 'Process optimization'],
    highlights: [
      'Dummy text: Improved internal tracking for multi-stream programs.',
      'Dummy text: Reduced operational bottlenecks across teams.',
      'Dummy text: Standardized reporting for leadership visibility.',
    ],
  },
  {
    slug: 'sudhakar-punde',
    name: 'Sudhakar Punde',
    role: 'Advisor',
    image: '/team/sudhakar-punde.jpeg',
    category: 'advisor',
    shortBio:
      'Advisor supporting strategic direction and practical decisions for sustainable growth.',
    longBio: [
      'Dummy text: Sudhakar provides leadership guidance on long-term priorities, market positioning, and capability development.',
      'Dummy text: He contributes an external perspective to strengthen decision-making for complex industrial opportunities.',
    ],
    focusAreas: ['Strategic advisory', 'Market direction', 'Capability building'],
    highlights: [
      'Dummy text: Mentored leadership on scale-readiness initiatives.',
      'Dummy text: Guided planning for new strategic programs.',
      'Dummy text: Supported executive-level reviews and recommendations.',
    ],
  },
  {
    slug: 'anagha-hiray',
    name: 'Anagha Hiray',
    role: 'Advisor',
    image: '/team/anagha-hiray.png',
    category: 'advisor',
    shortBio:
      'Advisor contributing domain perspective for disciplined and resilient program outcomes.',
    longBio: [
      'Dummy text: Anagha supports leadership with advisory input on program shaping, stakeholder alignment, and execution discipline.',
      'Dummy text: She works with the team on practical approaches that improve delivery confidence across initiatives.',
    ],
    focusAreas: ['Program advisory', 'Stakeholder alignment', 'Execution maturity'],
    highlights: [
      'Dummy text: Contributed to advisory reviews for major initiatives.',
      'Dummy text: Helped define decision checkpoints for delivery quality.',
      'Dummy text: Provided strategic feedback for long-term planning.',
    ],
  },
];

export function getProfileBySlug(slug: string) {
  return teamProfiles.find((profile) => profile.slug === slug);
}
