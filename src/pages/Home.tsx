import { Link } from 'react-router-dom'
import PromoSlider, { type Slide } from '../components/PromoSlider'
import ProductCard from '../components/ProductCard'
import { PRODUCTOS } from '../data/products'
import instPanel from '../assets/instPanel.png'
import tablero from '../assets/tablero.jpg'
import almacen from '../assets/almacen.jpg'

const SLIDES: Slide[] = [
  {
    kicker: 'Promoción · Paneles solares',
    title: 'Los mejores paneles solares',
    highlight: 'para tu proyecto',
    desc: 'Alta calidad, garantía de fábrica y respaldo técnico local. Cotiza al 945 103 227.',
    cta: { label: 'Ver catálogo técnico', to: '/catalogo?cat=Panel solar' },
    bg: `url(${instPanel})`,
  },
  {
    kicker: 'Promoción · Almacenamiento',
    title: 'Baterías con hasta',
    highlight: '10 años de garantía',
    desc: 'Bancos LiFePO4 para respaldo de cargas críticas ante cortes de red.',
    cta: { label: 'Ver baterías', to: '/catalogo?cat=Batería' },
    bg: `url(${almacen})`,
  },
  {
    kicker: 'Ingeniería ICR',
    title: 'Diseño, instalación',
    highlight: 'y respaldo postventa',
    desc: 'Un solo responsable técnico desde el dimensionamiento hasta la operación.',
    cta: { label: 'Solicitar cotización', to: '/cotizacion' },
    bg: `url(${tablero})`,
  },
]

export default function Home() {
  const destacados = PRODUCTOS.filter((p) => p.destacado).slice(0, 4)
  const masVendidos = [...PRODUCTOS]
    .sort((a, b) => (b.vendidos ?? 0) - (a.vendidos ?? 0))
    .slice(0, 4)

  return (
    <div>
      <PromoSlider slides={SLIDES} />

      <section className="px-4 sm:px-6 py-14">
        <div className="flex flex-wrap gap-4 items-baseline justify-between mb-6">
          <h2 className="kicker text-ink/55 m-0">Productos destacados</h2>
          <Link to="/catalogo" className="text-[11px] font-bold tracking-[.1em] uppercase hover:text-accent-dark">
            Ver todo el catálogo →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {destacados.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 py-10 bg-surface">
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
      </section>

      <section className="mx-4 sm:mx-6 my-14 bg-ink text-white p-8 sm:p-11 flex flex-wrap gap-6 items-center justify-between">
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
          to="/catalogo"
          className="border-0 bg-accent text-ink font-heading text-xs font-black tracking-[.1em] uppercase px-7 py-4 hover:bg-accent-2 transition-colors"
        >
          Ir al catálogo completo
        </Link>
      </section>
    </div>
  )
}
