import React from 'react'
import { Link } from 'react-router-dom'

function AddProduct() {
  return (
    <div className="p-6 lg:p-8">
      <Link to="/admin/products" className="text-sm font-medium text-slate-500 hover:text-slate-900">&larr; Back to products</Link>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Add product</h1>
      <p className="mt-1 text-sm text-slate-500">Fill in the details to add a new product.</p>

      <form className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Basic information</h2>
            <div className="mt-5 space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Product name</label>
                <input type="text" placeholder="e.g. Leather Backpack"VAL_AddProduct className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
                <textarea rows={5} placeholder="Describe the product" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Pricing and inventory</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Price (Rs.)</label>
                <input type="number" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Compare-at price (Rs.)</label>
                <input type="number" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">SKU</label>
                <input type="text" placeholder="e.g. LB-210" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Stock quantity</label>
                <input type="number" placeholder="0" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-semibold text-slate-900">Images</h2>
            <label className="mt-5 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 px-6 py-10 text-center transition hover:border-indigo-400 hover:bg-indigo-50/30">
              <span className="text-sm font-medium text-slate-900">Click to upload or drag and drop</span>
              <span className="mt-1 text-xs text-slate-500">PNG or JPG, up to 5 MB each</span>
              <input type="file" multiple accept="image/*" className="hidden" />
            </label>
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
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 flex-1">Save product</button>
          </div>
        </aside>
      </form>
    </div>
  )
}

export default AddProduct
