import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <ScrollToTop />
      <div className="flex justify-center px-0 sm:px-4 pt-0 sm:pt-5">
        <div className="w-full max-w-[1240px] bg-white shadow-[0_18px_60px_rgba(0,0,76,.18)] overflow-hidden flex flex-col">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
