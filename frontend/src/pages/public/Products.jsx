import React, { useEffect, useState } from 'react'
import { useGetProducts } from '../../hooks/useProducts'

const categories = ['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports']
const products = Array.from({ length: 12 }, (_, i) => ({
  name: `Product name ${i + 1}`,
  price: `Rs. ${(i + 3) * 1000 - 1}`,
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

function Products() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const products = useGetProducts()
        setProducts(products)
    },[])
    useEffect(()=>{
        console.log(products);
        
    },[])
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">All products</h1>
          <p className="mt-1 text-sm text-slate-500">Showing 12 of 240 products</p>
        </div>
        <div className="flex gap-3">
          <input type="search" placeholder="Search products" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:w-64" />
          <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:w-auto">
            <option>Newest</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Top rated</option>
          </select>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        {/* Filters */}
        <aside className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">Category</h2>
            <ul className="mt-3 space-y-2.5">
              {categories.map((c) => (
                <li key={c}>
                  <label className="flex items-center gap-2.5 text-sm text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    {c}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Price range</h2>
            <div className="mt-3 flex items-center gap-2">
              <input type="number" placeholder="Min" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              <span className="text-slate-400">-</span>
              <input type="number" placeholder="Max" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">Rating</h2>
            <ul className="mt-3 space-y-2.5">
              {[4, 3, 2].map((r) => (
                <li key={r}>
                  <label className="flex items-center gap-2.5 text-sm text-slate-600">
                    <input type="radio" name="rating" className="h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="text-amber-500">{'★'.repeat(r)}</span> &amp; up
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <button className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 w-full">Apply filters</button>
        </aside>

        {/* Grid */}
        <div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
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
      </div>
    </div>
  )
}

export default Products
