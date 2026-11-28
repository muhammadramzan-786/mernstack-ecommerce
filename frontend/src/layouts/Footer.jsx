import React from 'react'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Shop',
    links: [
      { to: '/products', label: 'All products' },
      { to: '/categories', label: 'Categories' },
      { to: '/cart', label: 'Cart' },
    ],
  },
  {
    title: 'Account',
    links: [
      { to: '/account', label: 'My account' },
      { to: '/account/orders', label: 'My orders' },
      { to: '/account/addresses', label: 'Addresses' },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '#', label: 'Help center' },
      { to: '#', label: 'Shipping and returns' },
      { to: '#', label: 'Contact us' },
    ],
  },
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold tracking-tight text-white">YourBrand</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Quality products at fair prices, delivered to your door across Pakistan.
          </p>
          <form className="mt-6 flex max-w-xs gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            />
            <button type="submit" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
              Join
            </button>
          </form>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold text-white">{c.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-slate-400 transition hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© 2026 YourBrand. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy policy</a>
            <a href="#" className="hover:text-white">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
