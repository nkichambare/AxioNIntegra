'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const LOGOS = [
  { src: '/trusted-by/bedmutha-logo.png', alt: 'Bedmutha', href: 'https://bedmutha.com/' },
  {
    src: '/trusted-by/atul-hiray-logo.png',
    alt: 'Groups of Atul',
    href: 'https://groupsofatul.com/',
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
          className={`font-ibm-mono text-[16px] tracking-[0.2em] uppercase text-muted transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          Trusted By
        </span>
        <div
          className={`flex items-center gap-10 transition-all duration-700 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {LOGOS.map((logo) => (
            <a
              key={logo.href}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              <Image src={logo.src} alt={logo.alt} height={32} width={140} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
