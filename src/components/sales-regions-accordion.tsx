'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

const REGIONS = [
  {
    label: 'Europe',
    countries: [
      { code: 'gb', country: 'United Kingdom' },
      { code: 'fr', country: 'France' },
      { code: 'ie', country: 'Ireland' },
      { code: 'it', country: 'Italy' },
      { code: 'dk', country: 'Denmark' },
      { code: 'nl', country: 'Netherlands' },
      { code: 'be', country: 'Belgium' },
      { code: 'at', country: 'Austria' },
      { code: 'pl', country: 'Poland' },
      { code: 'hu', country: 'Hungary' },
    ],
  },
  {
    label: 'Asia Pacific',
    countries: [
      { code: 'au', country: 'Australia' },
      { code: 'jp', country: 'Japan' },
    ],
  },
];

export default function SalesRegionsAccordion() {
  const [openRegions, setOpenRegions] = useState<Set<string>>(new Set(REGIONS.map((r) => r.label)));

  function toggle(label: string) {
    setOpenRegions((prev) => {
      const next = new Set(prev);
      if (next.has(label)) {
        next.delete(label);
      } else {
        next.add(label);
      }
      return next;
    });
  }

  return (
    <div className="border-t border-border">
      {REGIONS.map((region) => {
        const isOpen = openRegions.has(region.label);
        return (
          <div key={region.label} className="border-b border-border">
            <button
              onClick={() => toggle(region.label)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-semibold text-primary">{region.label}</span>
                <span className="font-ibm-mono text-[10px] tracking-[0.1em] text-muted">
                  {region.countries.length} countries
                </span>
              </div>
              <FiChevronDown
                className={`h-4 w-4 text-muted transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-3 pb-5">
                    {region.countries.map((c) => (
                      <div
                        key={c.code}
                        className="flex items-center gap-1.5 rounded-full border border-border bg-bg px-3 py-1.5"
                      >
                        <Image
                          src={`https://flagcdn.com/w40/${c.code}.png`}
                          alt={c.country}
                          width={16}
                          height={11}
                          className="rounded-sm object-cover shrink-0"
                        />
                        <span className="text-[12px] font-semibold text-primary">{c.country}</span>
                        <span className="text-[11px] text-muted">· Sales &amp; Services</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
