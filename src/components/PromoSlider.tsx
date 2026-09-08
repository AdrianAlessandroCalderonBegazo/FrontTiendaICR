'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export interface Slide {
  kicker: string
  title: string
  highlight?: string
  desc: string
  cta: { label: string; to: string }
  bg: string
}

export default function PromoSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [slides.length])

  const s = slides[active]

  return (
    <div className="relative bg-ink text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-[background-image] duration-500"
        style={{ backgroundImage: s.bg }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(100deg,#00004c 8%,rgba(0,0,76,.86) 46%,rgba(0,0,115,.35) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,183,194,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(0,183,194,.14) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative px-4 sm:px-6 pt-16 sm:pt-20 pb-14 max-w-[820px]">
        <div className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[.16em] uppercase text-accent mb-5">
          <span className="w-6 h-px bg-accent block" />
          {s.kicker}
        </div>
        <h1 className="text-4xl sm:text-[52px] leading-[.98] font-black tracking-tight mb-5 uppercase">
          {s.title}
          {s.highlight && <span className="text-accent-2"> {s.highlight}</span>}
        </h1>
        <p className="text-base leading-relaxed text-white/80 max-w-[520px] mb-7">{s.desc}</p>
        <Link
          href={s.cta.to}
          className="inline-block border-0 bg-accent text-ink font-heading text-xs font-black tracking-[.1em] uppercase px-6 py-4 hover:bg-accent-2 transition-colors"
        >
          {s.cta.label}
        </Link>
      </div>

      <div className="relative flex gap-2 px-4 sm:px-6 pb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir a la promoción ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-8 bg-accent' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
