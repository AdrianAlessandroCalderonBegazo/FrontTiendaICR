import Link from 'next/link'
import Container from './Container'
import SolarPanelIllustration from './SolarPanelIllustration'

export default function HeroBannerSlide() {
  return (
    <div className="relative bg-ink overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,183,194,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(0,183,194,.14) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 75% 30%, rgba(0,183,194,.18), transparent 60%)' }}
      />

      <Container className="relative pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-white text-sm sm:text-base font-bold tracking-[0.35em] uppercase mb-2">
              Los mejores
            </div>
            <h1 className="leading-[0.88] mb-3">
              <span className="block text-accent-2 text-6xl sm:text-7xl lg:text-8xl font-black uppercase">
                Paneles
              </span>
              <span className="block text-white text-6xl sm:text-7xl lg:text-8xl font-black uppercase">
                Solares
              </span>
            </h1>
            <div className="text-accent text-lg sm:text-xl font-bold italic tracking-wide uppercase mb-8">
              Para tu proyecto
            </div>
            <Link
              href="/catalogo?cat=Panel solar"
              className="inline-block border-0 bg-accent text-ink font-heading text-xs font-black tracking-[.1em] uppercase px-7 py-4 hover:bg-accent-2 transition-colors"
            >
              Ver catálogo técnico
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-2 left-2 sm:left-10 lg:left-2 z-10 bg-accent-2 text-ink rounded-2xl px-5 py-3 text-center shadow-lg">
              <div className="font-black uppercase leading-tight text-sm sm:text-base">Alta</div>
              <div className="font-black uppercase leading-tight text-sm sm:text-base">Calidad</div>
            </div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className="absolute top-16 left-8 sm:left-16 lg:left-8 z-10 text-accent-2"
              fill="none"
            >
              <path
                d="M4 4c0 16 6 24 22 26"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path d="M20 26 L28 30 L26 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <SolarPanelIllustration className="w-full max-w-[420px] h-auto" />
          </div>
        </div>
      </Container>

      <div className="relative bg-accent-2 py-4">
        <Container className="flex justify-end">
          <span className="text-ink font-black uppercase tracking-wide text-sm sm:text-base">
            Cotiza al: 945 103 227
          </span>
        </Container>
      </div>
    </div>
  )
}
