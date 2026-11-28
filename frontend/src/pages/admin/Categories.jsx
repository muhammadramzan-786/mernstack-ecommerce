import React from 'react'

const categories = [
  { name: 'Electronics', slug: 'electronics', products: 124, active: true },
  { name: 'Fashion', slug: 'fashion', products: 320, active: true },
  { name: 'Home & Living', slug: 'home-living', products: 86, active: true },
  { name: 'Toys', slug: 'toys', products: 0, active: false },
]

function Categories() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Categories</h1>
      <p className="mt-1 text-sm text-slate-500">Organize your products into categories.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[340px_1fr]">
        <form className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Add category</h2>
          <div className="mt-5 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
              <input type="text" placeholder="e.g. Electronics" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Slug</label>
              <input type="text" placeholder="electronics" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
              <textarea rows={3} placeholder="Short description" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Image</label>
              <input type="file" accept="image/*" className="block w-full text-sm text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 w-full">Add category</button>
          </div>
        </form>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Category</th>
                <th className="px-6 py-3 font-medium">Products</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {categories.map((c) => (
                <tr key={c.slug}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                      <div>
                        <p className="font-medium text-slate-900">{c.name}</p>
                        <p className="text-xs text-slate-500">/{c.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{c.products}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                      {c.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-4 text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-500">Edit</button>
                      <button className="text-rose-600 hover:text-rose-500">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Categories
