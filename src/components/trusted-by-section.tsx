'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function TrustedBySection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-8">
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
          <a
            href="https://bedmutha.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-70"
          >
            <Image
              src="/bedmutha-logo.png"
              alt="Bedmutha"
              height={32}
              width={140}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
