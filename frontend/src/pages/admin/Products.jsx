import React from 'react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Wireless Headphones', sku: 'WH-001', category: 'Electronics', price: 'Rs. 7,999', stock: 45, active: true },
  { name: 'Smart Watch Series 5', sku: 'SW-005', category: 'Electronics', price: 'Rs. 12,499', stock: 12, active: true },
  { name: 'Leather Backpack', sku: 'LB-210', category: 'Fashion', price: 'Rs. 4,999', stock: 0, active: false },
  { name: 'Running Shoes', sku: 'RS-042', category: 'Sports', price: 'Rs. 6,499', stock: 28, active: true },
]

function Products() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Products</h1>
          <p className="mt-1 text-sm text-slate-500">Manage your product catalog.</p>
        </div>
        <Link to="/admin/products/add" className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20">+ Add product</Link>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input type="search" placeholder="Search by name or SKU" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:max-w-xs" />
        <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:w-auto">
          <option>All categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
        </select>
        <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:w-auto">
          <option>All status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-6 py-3 font-medium">Product</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Price</th>
              <th className="px-6 py-3 font-medium">Stock</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products.map((p) => (
              <tr key={p.sku}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                    <div>
                      <p className="font-medium text-slate-900">{p.name}</p>
                      <p className="text-xs text-slate-500">{p.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{p.category}</td>
                <td className="px-6 py-4 text-slate-900">{p.price}</td>
                <td className={`px-6 py-4 ${p.stock === 0 ? 'font-medium text-rose-600' : 'text-slate-600'}`}>
                  {p.stock === 0 ? 'Out of stock' : p.stock}
                </td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${p.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {p.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4 text-sm font-medium">
                    <Link to={`/admin/products/${p.sku}/edit`} className="text-indigo-600 hover:text-indigo-500">Edit</Link>
                    <button className="text-rose-600 hover:text-rose-500">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Products
