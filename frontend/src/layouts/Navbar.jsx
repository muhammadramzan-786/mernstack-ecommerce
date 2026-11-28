import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from '../ui/Icon'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/categories', label: 'Categories' },
]

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition ${isActive ? 'text-slate-950' : 'text-slate-500 hover:text-slate-950'}`

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      {/* CSS-only mobile menu toggle (no state needed) */}
      <input id="nav-toggle" type="checkbox" className="peer hidden" />

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white">
            <Icon name="store" className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">YourBrand</span>
        </Link>

        <nav className="ml-4 hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="relative ml-auto hidden w-full max-w-xs lg:block">
          <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search products"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
          />
        </div>

        <div className="ml-auto flex items-center gap-1 lg:ml-0">
          <Link to="/cart" className="relative rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100" aria-label="Cart">
            <Icon name="cart" />
            <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-semibold text-white">
              3
            </span>
          </Link>
          <Link to="/account" className="hidden rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 sm:block" aria-label="Account">
            <Icon name="user" />
          </Link>
          <Link to="/login" className="ml-2 hidden rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex">
            Log in
          </Link>

          <label htmlFor="nav-toggle" className="cursor-pointer rounded-xl p-2.5 text-slate-600 transition hover:bg-slate-100 md:hidden" aria-label="Menu">
            <Icon name="menu" />
          </label>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="hidden border-t border-slate-200 bg-white px-6 py-4 peer-checked:block md:!hidden">
        <input type="search" placeholder="Search products" className="mb-3 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none" />
        <nav className="flex flex-col">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-600'}`}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/account" className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600">My account</Link>
          <Link to="/login" className="mt-3 rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">Log in</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
