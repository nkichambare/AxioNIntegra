'use client';

import { useRef } from 'react';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

type Capability = {
  slug: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageClassName?: string;
};

const capabilities: Capability[] = [
  {
    slug: 'precision-manufacturing',
    title: 'Precision Manufacturing Execution',
    description:
      'We coordinate precision-machined components, fabricated metal parts, and industrial assemblies through qualified manufacturing networks.',
    items: [
      'Tight-tolerance CNC machining',
      'Fabricated parts and assemblies',
      'Prototype through serial production',
    ],
    image: '/capabilities/precision-manufacturing.jpg',
    imageClassName: 'object-[58%_center]',
  },
  {
    slug: 'manufacturing-integration',
    title: 'Manufacturing Integration & Supplier Coordination',
    description:
      'One accountable interface connects customer requirements with supplier alignment, scheduling, and production oversight.',
    items: [
      'Supplier identification and qualification',
      'Technical documentation alignment',
      'Production and capacity coordination',
    ],
    image: '/capabilities/manufacturing-integration-team.jpg',
    imageClassName: 'object-center',
  },
  {
    slug: 'quality-validation',
    title: 'Quality Validation & Compliance Control',
    description:
      'Defined inspection gates, documentation checks, and traceability controls protect dimensional and material conformity.',
    items: [
      'Inspection planning and coordination',
      'Material certificate verification',
      'Final approval before dispatch',
    ],
    image: '/capabilities/quality-validation.jpg',
    imageClassName: 'object-[64%_center]',
  },
  {
    slug: 'strategic-sourcing',
    title: 'Strategic Sourcing & Cost Optimization',
    description:
      'Disciplined qualification and structured benchmarking improve cost performance without lowering engineering standards.',
    items: [
      'Cost and supplier benchmarking',
      'Manufacturing feasibility evaluation',
      'Long-term sourcing strategy',
    ],
    image: '/capabilities/strategic-sourcing.jpg',
    imageClassName: 'object-center',
  },
  {
    slug: 'scalable-production',
    title: 'Scalable Production & Program Support',
    description:
      'Capacity planning, execution control, and delivery coordination keep industrial programmes stable as volume grows.',
    items: [
      'Prototype and pre-series support',
      'Serial production planning',
      'Programme lifecycle coordination',
    ],
    image: '/capabilities/scalable-production.jpg',
    imageClassName: 'object-[62%_center]',
  },
];

type BackgroundSceneProps = {
  capability: Capability;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
};

function BackgroundScene({
  capability,
  index,
  total,
  progress,
  reduceMotion,
}: BackgroundSceneProps) {
  const lastIndex = total - 1;
  const fadeWidth = reduceMotion ? 0.0001 : 0.025;
  const entry = Math.max(0, (index - 0.5) / lastIndex);
  const exit = Math.min(1, (index + 0.5) / lastIndex);

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, exit - fadeWidth, exit + fadeWidth]
      : index === lastIndex
        ? [entry - fadeWidth, entry + fadeWidth, 1]
        : [entry - fadeWidth, entry + fadeWidth, exit - fadeWidth, exit + fadeWidth],
    index === 0 ? [1, 1, 0] : index === lastIndex ? [0, 1, 1] : [0, 1, 1, 0],
  );

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 will-change-[opacity]">
      <Image
        src={capability.image}
        alt=""
        fill
        sizes="100vw"
        className={`object-cover ${capability.imageClassName ?? 'object-center'}`}
      />
    </motion.div>
  );
}

type ImageTransitionFlashProps = {
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
};

function ImageTransitionFlash({ total, progress, reduceMotion }: ImageTransitionFlashProps) {
  const lastIndex = total - 1;
  const flashWidth = 0.014;
  const input = [0];
  const output = [0];

  for (let index = 1; index < total; index += 1) {
    const boundary = (index - 0.5) / lastIndex;
    input.push(boundary - flashWidth, boundary, boundary + flashWidth);
    output.push(0, reduceMotion ? 0 : 0.14, 0);
  }

  input.push(1);
  output.push(0);

  const opacity = useTransform(progress, input, output);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0 bg-white will-change-[opacity]"
    />
  );
}

type TextSceneProps = {
  capability: Capability;
  index: number;
  locale: string;
};

function TextScene({ capability, index, locale }: TextSceneProps) {
  const alignRight = index % 2 === 1;

  return (
    <article className="flex min-h-[calc(100dvh-4rem)] items-end px-6 py-10 sm:py-14 md:items-center md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className={`w-full md:flex ${alignRight ? 'md:justify-end' : 'md:justify-start'}`}>
          <div className="max-w-xl text-white md:w-[48%]">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/75 sm:text-[13px]">
              Core capabilities
            </p>
            <h3 className="mt-4 text-balance text-[30px] font-semibold leading-[1.18] tracking-tight sm:text-[36px] lg:text-[42px]">
              {capability.title}
            </h3>
            <p className="mt-4 max-w-lg text-[15px] leading-[1.65] text-white/85 sm:text-[16px]">
              {capability.description}
            </p>

            <ul className="capability-details mt-6 space-y-2.5" aria-label="Included services">
              {capability.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] leading-[1.5] text-white/80 sm:text-[14px]"
                >
                  <span className="mt-[0.7em] h-px w-5 shrink-0 bg-white/70" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/capabilities/${capability.slug}`}
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[13px] font-medium uppercase tracking-[0.12em] text-white outline-none transition hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Learn more
              <HiOutlineArrowLongRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CapabilitiesSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { locale = 'en' } = useParams<{ locale: string }>();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="capabilities" className="bg-footer">
      <div ref={stackRef} className="relative bg-footer">
        <div className="sticky top-16 h-[calc(100dvh-4rem)] overflow-hidden" aria-hidden="true">
          {capabilities.map((capability, index) => (
            <BackgroundScene
              key={capability.slug}
              capability={capability}
              index={index}
              total={capabilities.length}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
          <div className="absolute inset-0 bg-slate-950/55" />
          <ImageTransitionFlash
            total={capabilities.length}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        </div>

        <div className="relative z-10 mt-[calc(-100dvh+4rem)]">
          {capabilities.map((capability, index) => (
            <TextScene
              key={capability.slug}
              capability={capability}
              index={index}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
