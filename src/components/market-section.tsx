"use client";

import { useState } from "react";

import Button from "@/components/button";

const markets = [
  {
    title: "Networks & Data Centres",
    description: "Infrastructure reliability, thermal control, and precision assemblies.",
    details:
      "Supports energy‑intensive infrastructure with controlled tolerances, thermal stability, and verified quality.",
  },
  {
    title: "Switchgears",
    description: "High‑accuracy components for critical electrical systems.",
    details:
      "Electrical systems demand repeatable geometry, robust insulation interfaces, and compliance‑ready build records.",
  },
  {
    title: "Metals & Chlorine Refining",
    description: "Corrosion‑resistant parts and process‑critical assemblies.",
    details:
      "Material integrity and process resistance for harsh chemical environments and continuous‑duty operations.",
  },
  {
    title: "Green Hydrogen",
    description: "Manufacturing support for emerging energy systems.",
    details:
      "Precision components for systems scaling into industrial production and deployment.",
  },
  {
    title: "Power Storage",
    description: "Precision manufacturing for storage modules and enclosures.",
    details:
      "Structural assemblies, thermal interfaces, and manufacturing governance for energy storage programs.",
  },
  {
    title: "Industrial Mobility",
    description: "Durable components for heavy‑duty applications.",
    details:
      "Designed for load, vibration, and lifecycle performance in industrial operating environments.",
  },
];

export default function MarketSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMarket = markets[activeIndex];

  return (
    <section id="market" className="bg-bg py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6">
        <div className="flex flex-col gap-3">
          <p className="section-heading text-secondary">Markets</p>
          <h2 className="heading-2">Where we operate</h2>
          <p className="body-text max-w-2xl text-secondary">
            Focused expertise across energy, industrial, and infrastructure markets that demand
            precision, compliance, and delivery reliability.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {markets.map((market, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={market.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full border-b border-border pb-4 text-left transition ${
                    isActive ? "text-primary" : "text-secondary"
                  }`}
                >
                  <p className="heading-3">{market.title}</p>
                  <p className="body-text mt-2 text-secondary">{market.description}</p>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl border border-border bg-soft p-6">
            <p className="label-text text-secondary">Coverage</p>
            <div className="mt-6 flex h-64 items-center justify-center rounded-xl border border-dashed border-border bg-bg p-6">
              <svg viewBox="0 0 360 180" className="h-full w-full" fill="none" aria-hidden="true">
                <path
                  d="M24 90C44 62 78 42 118 44C160 46 178 76 220 78C260 80 280 56 312 60C334 62 350 74 356 90C350 108 332 122 310 124C272 126 262 104 224 102C182 100 164 130 120 134C78 138 44 118 24 90Z"
                  stroke="rgb(226 232 240)"
                  strokeWidth="2"
                />
                <path
                  d="M86 64C104 52 124 48 150 52C176 56 186 70 210 72C236 74 246 62 268 66"
                  stroke="rgb(226 232 240)"
                  strokeWidth="1"
                />
                <path
                  d="M92 108C118 122 150 128 182 124C214 120 232 108 258 106"
                  stroke="rgb(226 232 240)"
                  strokeWidth="1"
                />
                <circle cx="90" cy="70" r="4" fill="rgb(30 58 138)" />
                <circle cx="190" cy="90" r="4" fill="rgb(30 58 138)" />
                <circle cx="260" cy="70" r="4" fill="rgb(30 58 138)" />
              </svg>
            </div>
            <p className="body-text mt-4 text-secondary">{activeMarket.details}</p>
            <div className="mt-6">
              <Button variant="secondary">Read more</Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
