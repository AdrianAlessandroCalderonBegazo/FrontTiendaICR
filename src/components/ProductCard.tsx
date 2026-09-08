import { Link } from 'react-router-dom'
import { money, type Producto } from '../data/products'
import { useQuote } from '../context/QuoteContext'

export default function ProductCard({ p }: { p: Producto }) {
  const { add } = useQuote()

  return (
    <div className="border border-ink/[.14] bg-white flex flex-col hover:border-accent transition-colors">
      <Link
        to={`/producto/${p.id}`}
        className="relative h-40 bg-surface flex items-center justify-center border-b border-ink/10"
      >
        <div className="text-[10px] font-medium tracking-[.14em] uppercase text-ink/30 text-center leading-relaxed">
          Imagen de
          <br />
          producto
        </div>
        <div className="absolute left-0 top-0 bg-ink text-white text-[9.5px] font-bold tracking-[.1em] uppercase px-2.5 py-[5px]">
          {p.cat}
        </div>
        {p.b2b && (
          <div className="absolute right-0 top-0 bg-accent text-ink text-[9.5px] font-black tracking-[.1em] uppercase px-2.5 py-[5px]">
            Industrial
          </div>
        )}
      </Link>
      <div className="p-3.5 flex flex-col flex-1">
        <div className="text-[10.5px] font-bold tracking-[.12em] uppercase text-accent-dark mb-1.5">
          {p.marca}
        </div>
        <Link
          to={`/producto/${p.id}`}
          className="text-[13.5px] font-bold leading-tight mb-2.5 min-h-[52px] text-ink hover:text-accent-dark transition-colors"
        >
          {p.nombre}
        </Link>
        <div className="text-[11px] text-ink/55 mb-3">{p.spec}</div>
        <div className="mt-auto">
          <div className="text-[17px] font-black tracking-tight mb-0.5">{money(p.precio)}</div>
          <div className="text-[10.5px] text-ink/45 mb-3">IGV incluido · {p.stock}</div>
          <div className="flex gap-1.5">
            <button
              onClick={() => add(p.id)}
              className="flex-1 border-0 bg-ink text-white font-heading text-[10.5px] font-bold tracking-[.08em] uppercase px-2 py-[11px] hover:bg-accent-dark transition-colors"
            >
              Cotizar
            </button>
            <Link
              to={`/producto/${p.id}`}
              className="border border-ink/25 text-ink font-heading text-[10.5px] font-bold tracking-[.08em] uppercase px-3 py-[11px] hover:border-accent transition-colors text-center"
            >
              Ficha
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
