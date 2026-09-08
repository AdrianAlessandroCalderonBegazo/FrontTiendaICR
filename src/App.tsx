import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Producto from './pages/Producto'
import Cotizacion from './pages/Cotizacion'
import Proyectos from './pages/Proyectos'
import Soluciones from './pages/Soluciones'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Route>
    </Routes>
  )
}
