import React from 'react'

const categories = [
  { name: 'Electronics', count: 124 },
  { name: 'Fashion', count: 320 },
  { name: 'Home & Living', count: 86 },
  { name: 'Beauty', count: 142 },
  { name: 'Sports', count: 64 },
  { name: 'Books', count: 210 },
  { name: 'Toys', count: 58 },
  { name: 'Groceries', count: 175 },
]

function Categories() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Categories</h1>
        <p className="mt-1 text-sm text-slate-500">Find exactly what you are looking for.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <a
            key={c.name}
            href="#"
            className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-5 transition hover:from-indigo-100 hover:to-fuchsia-100"
          >
            <h2 className="text-lg font-semibold text-slate-900">{c.name}</h2>
            <p className="text-sm text-slate-500">{c.count} products</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Categories
