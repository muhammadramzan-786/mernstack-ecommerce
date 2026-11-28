import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const links = [
  { to: '/account', label: 'Overview', end: true },
  { to: '/account/profile', label: 'Profile' },
  { to: '/account/addresses', label: 'Addresses' },
  { to: '/account/orders', label: 'Orders' },
  { to: '/account/reviews', label: 'Reviews' },
  { to: '/checkout', label: 'Checkout' },
]

const linkClass = ({ isActive }) =>
  `shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
    isActive ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100'
  }`

function CustomerLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <div className="mx-auto w-full max-w-7xl flex-1 px-6 py-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-4">
        {/* Sidebar (becomes a scrollable row on mobile) */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <nav className="flex gap-1 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <button className="shrink-0 rounded-xl px-4 py-2.5 text-left text-sm font-medium text-rose-600 transition hover:bg-rose-50 lg:mt-4">
              Log out
            </button>
          </nav>
        </aside>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default CustomerLayout
