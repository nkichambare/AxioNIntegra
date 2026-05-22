'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    src: '/trusted-by/bedmutha-logo.png',
    alt: 'Bedmutha',
    href: 'https://bedmutha.com/',
    containerWidth: 60,
  },
  {
    src: '/trusted-by/atul-hiray-logo.png',
    alt: 'Groups of Atul',
    href: 'https://groupsofatul.com/',
    containerWidth: 60,
  },
  {
    src: '/trusted-by/sidhi-forge-logo.png',
    alt: 'Sidhi Forge',
    href: 'https://www.siddhiforge.com/',
    containerWidth: 60,
  },
  {
    src: '/trusted-by/siddhi-logo.png',
    alt: 'Siddhi Precision',
    href: 'https://siddhiprecision.com/',
    containerWidth: 110,
  },
  {
    src: '/trusted-by/m&e-logo.svg',
    alt: 'M&E Components',
    href: 'https://mnecomponents.com/',
    containerWidth: 110,
  },
  {
    src: '/trusted-by/lemken-logo.svg',
    alt: 'Lemken',
    href: 'https://lemken.com/',
    containerWidth: 140,
  },
  {
    src: '/trusted-by/tata-motors Logo.png',
    alt: 'Tata Motors',
    href: 'https://www.tatamotors.com',
    containerWidth: 55,
  },
  {
    src: '/trusted-by/zf-india-logo.svg',
    alt: 'ZF India',
    href: 'https://www.zf.com/india/en/home/home.html',
    containerWidth: 55,
  },
  {
    src: '/trusted-by/mahindra-logo.jpeg',
    alt: 'Mahindra',
    href: 'https://www.mahindra.com/',
    containerWidth: 120,
  },
];

export default function TrustedBySection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6">
        <span
          className={`font-ibm-mono text-[16px] tracking-[0.2em] uppercase text-[#475569] transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Trusted By
        </span>
        <div
          className={`w-full overflow-hidden transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="flex animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <a
                key={`${logo.href}-${i}`}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={i >= LOGOS.length ? true : undefined}
                className="relative flex h-[60px] flex-shrink-0 transition-opacity duration-300 hover:opacity-70"
                style={{ width: logo.containerWidth }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes={`${logo.containerWidth}px`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
