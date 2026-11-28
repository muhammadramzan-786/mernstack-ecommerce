import React from 'react'
import { NavLink, Outlet, Link } from 'react-router-dom'
import Icon from '../ui/Icon'

const links = [
  { to: '/admin', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/admin/products', label: 'Products', icon: 'products' },
  { to: '/admin/products/add', label: 'Add product', icon: 'plus' },
  { to: '/admin/categories', label: 'Categories', icon: 'categories' },
  { to: '/admin/orders', label: 'Orders', icon: 'orders' },
  { to: '/admin/customers', label: 'Customers', icon: 'customers' },
]

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
    isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`

function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* CSS-only mobile sidebar toggle (no state needed) */}
      <input id="sidebar-toggle" type="checkbox" className="peer hidden" />

      {/* Overlay (mobile) */}
      <label htmlFor="sidebar-toggle" className="fixed inset-0 z-30 hidden bg-slate-950/50 peer-checked:block lg:peer-checked:hidden" />

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 flex w-64 -translate-x-full flex-col bg-slate-950 p-4 transition-transform duration-200 peer-checked:translate-x-0 lg:translate-x-0">
        <div className="flex items-center justify-between px-2 py-3">
          <Link to="/admin" className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <Icon name="store" className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">YourBrand</span>
          </Link>
          <label htmlFor="sidebar-toggle" className="cursor-pointer rounded-lg p-1.5 text-slate-400 hover:bg-white/10 lg:hidden" aria-label="Close menu">
            <Icon name="close" className="h-5 w-5" />
          </label>
        </div>

        <p className="mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Manage</p>
        <nav className="mt-2 flex-1 space-y-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              <Icon name={l.icon} className="h-[18px] w-[18px]" />
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="space-y-1 border-t border-white/10 pt-4">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white">
            <Icon name="store" className="h-[18px] w-[18px]" />
            View store
          </Link>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-rose-400">
            <Icon name="logout" className="h-[18px] w-[18px]" />
            Log out
          </button>
        </div>
      </aside>

      {/* Content */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/80 px-6 backdrop-blur">
          <label htmlFor="sidebar-toggle" className="cursor-pointer rounded-xl p-2 text-slate-600 hover:bg-slate-100 lg:hidden" aria-label="Open menu">
            <Icon name="menu" />
          </label>

          <div className="relative hidden w-full max-w-sm sm:block">
            <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
            />
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-slate-900">Admin</p>
              <p className="text-xs text-slate-500">admin@yourbrand.com</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
              A
            </div>
          </div>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
