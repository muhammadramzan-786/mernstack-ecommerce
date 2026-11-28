import React from 'react'
import { Link } from 'react-router-dom'

function EditProduct() {
  return (
    <div className="p-6 lg:p-8">
      <Link to="/admin/products" className="text-sm font-medium text-slate-500 hover:text-slate-900">&larr; Back to products</Link>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Edit product</h1>
      <p className="mt-1 text-sm text-slate-500">Update the product details below.</p>

      <form className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Basic information</h2>
            <div className="mt-5 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Product name</label>
                <input type="text" placeholder="e.g. Leather Backpack"VAL_EditProduct className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
                <textarea rows={5} placeholder="Describe the product" defaultValue="A durable everyday backpack made from premium leather." className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Pricing and inventory</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Price (Rs.)</label>
                <input type="number" placeholder="0" defaultValue="4999" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Compare-at price (Rs.)</label>
                <input type="number" placeholder="0" defaultValue="6499" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">SKU</label>
                <input type="text" placeholder="e.g. LB-210" defaultValue="LB-210" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Stock quantity</label>
                <input type="number" placeholder="0" defaultValue="28" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Images</h2>
            <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="group relative aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-slate-200">
                  <button type="button" aria-label="Remove image" className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-rose-600 shadow">✕</button>
                </div>
              ))}
              <label className="flex aspect-square cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-2xl text-slate-400 transition hover:border-indigo-400 hover:text-indigo-500">
                +
                <input type="file" multiple accept="image/*" className="hidden" />
              </label>
            </div>
          </section>
        </div>

        <aside className="h-fit space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Organization</h2>
            <div className="mt-5 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Category</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15">
                  <option>Select category</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home &amp; Living</option>
                  <option>Sports</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Status</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15">
                  <option>Active</option>
                  <option>Draft</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          </section>

          <div className="flex gap-3">
            <Link to="/admin/products" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 flex-1">Cancel</Link>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 flex-1">Save changes</button>
          </div>
        </aside>
      </form>
    </div>
  )
}

export default EditProduct
