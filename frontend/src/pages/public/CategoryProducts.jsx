import React from 'react'

const subcategories = ['All', 'Phones', 'Laptops', 'Audio', 'Wearables', 'Accessories']
const products = Array.from({ length: 8 }, (_, i) => ({
  name: `Electronics item ${i + 1}`,
  price: `Rs. ${(i + 2) * 2500 - 1}`,
}))

function ProductCard({ name, price }) {
  return (
    <a href="#" className="group block">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 transition group-hover:from-slate-200" />
      <h3 className="mt-3 text-sm font-medium text-slate-900">{name}</h3>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">{price}</span>
        <span className="text-xs text-amber-500">★ 4.5</span>
      </div>
    </a>
  )
}

function CategoryProducts() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <nav className="mb-6 text-sm text-slate-500">
        <a href="#" className="hover:text-slate-900">Categories</a> / <span className="text-slate-900">Electronics</span>
      </nav>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Electronics</h1>
          <p className="mt-1 text-sm text-slate-500">124 products</p>
        </div>
        <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:w-auto">
          <option>Newest</option>
          <option>Price: low to high</option>
          <option>Price: high to low</option>
          <option>Top rated</option>
        </select>
      </div>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {subcategories.map((s, i) => (
          <button
            key={s}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${i === 0 ? 'bg-slate-950 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>

      <nav className="mt-12 flex items-center justify-center gap-1.5">
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">Prev</button>
        <button className="rounded-lg bg-slate-950 px-3.5 py-2 text-sm font-medium text-white">1</button>
        <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-600 hover:bg-slate-50">2</button>
        <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-600 hover:bg-slate-50">3</button>
        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">Next</button>
      </nav>
    </div>
  )
}

export default CategoryProducts
