import Link from 'next/link'
import Carousel from '@/components/Carousel'
import HeroBannerSlide from '@/components/HeroBannerSlide'
import PromoSlide, { type PromoSlideData } from '@/components/PromoSlide'
import ProductCard from '@/components/ProductCard'
import Container from '@/components/Container'
import { PRODUCTOS } from '@/data/products'
import almacen from '@/assets/almacen.jpg'
import tablero from '@/assets/tablero.jpg'

const OTHER_SLIDES: PromoSlideData[] = [
  {
    kicker: 'Promoción · Almacenamiento',
    title: 'Baterías con hasta',
    highlight: '10 años de garantía',
    desc: 'Bancos LiFePO4 para respaldo de cargas críticas ante cortes de red.',
    cta: { label: 'Ver baterías', to: '/catalogo?cat=Batería' },
    bg: `url(${almacen.src})`,
  },
  {
    kicker: 'Ingeniería ICR',
    title: 'Diseño, instalación',
    highlight: 'y respaldo postventa',
    desc: 'Un solo responsable técnico desde el dimensionamiento hasta la operación.',
    cta: { label: 'Solicitar cotización', to: '/cotizacion' },
    bg: `url(${tablero.src})`,
  },
]

export default function Home() {
  const destacados = PRODUCTOS.filter((p) => p.destacado).slice(0, 4)
  const masVendidos = [...PRODUCTOS].sort((a, b) => (b.vendidos ?? 0) - (a.vendidos ?? 0)).slice(0, 4)

  return (
    <div>
      <Carousel
        slides={[
          <HeroBannerSlide key="banner" />,
          ...OTHER_SLIDES.map((s) => <PromoSlide key={s.kicker} slide={s} />),
        ]}
      />

      <section className="py-14">
        <Container>
          <div className="flex flex-wrap gap-4 items-baseline justify-between mb-6">
            <h2 className="kicker text-ink/55 m-0">Productos destacados</h2>
            <Link href="/catalogo" className="text-[11px] font-bold tracking-[.1em] uppercase hover:text-accent-dark">
              Ver todo el catálogo →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {destacados.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 bg-surface">
        <Container>
          <div className="flex flex-wrap gap-4 items-baseline justify-between mb-6">
            <h2 className="kicker text-ink/55 m-0">Productos más vendidos</h2>
            <span className="text-[11px] font-medium tracking-[.1em] uppercase text-ink/45">
              Según pedidos de los últimos 12 meses
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {masVendidos.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="my-14">
        <Container>
          <div className="bg-ink text-white p-8 sm:p-11 flex flex-wrap gap-6 items-center justify-between">
            <div className="max-w-[520px]">
              <h2 className="text-2xl sm:text-[28px] font-black uppercase leading-tight mb-3">
                Explora el catálogo técnico completo
              </h2>
              <p className="text-sm leading-relaxed text-white/75 m-0">
                Inversores, baterías, paneles y estructura organizados por solución: respaldo, autoconsumo,
                off-grid/on-grid y monitoreo.
              </p>
            </div>
            <Link
              href="/catalogo"
              className="border-0 bg-accent text-ink font-heading text-xs font-black tracking-[.1em] uppercase px-7 py-4 hover:bg-accent-2 transition-colors"
            >
              Ir al catálogo completo
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
