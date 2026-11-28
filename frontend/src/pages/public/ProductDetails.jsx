import React from 'react'

const sizes = ['S', 'M', 'L', 'XL']
const colors = ['bg-slate-900', 'bg-indigo-600', 'bg-rose-500', 'bg-emerald-500']
const reviews = [
  { name: 'Ayesha K.', rating: 5, text: 'Quality is excellent and delivery was quicker than expected.' },
  { name: 'Hamza R.', rating: 4, text: 'Good value for money. Packaging could be a little better.' },
]

function ProductDetails() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <nav className="mb-8 text-sm text-slate-500">
        <a href="#" className="hover:text-slate-900">Home</a> / <a href="#" className="hover:text-slate-900">Fashion</a> /{' '}
        <span className="text-slate-900">Leather Backpack</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200" />
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                className={`aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 ${i === 0 ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-sm font-medium text-indigo-600">Fashion</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">Leather Backpack</h1>
          <div className="mt-3 flex items-center gap-3 text-sm">
            <span className="text-amber-500">★★★★★</span>
            <span className="text-slate-500">4.8 (126 reviews)</span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">In stock</span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-3xl font-semibold text-slate-900">Rs. 4,999</span>
            <span className="text-lg text-slate-400 line-through">Rs. 6,499</span>
            <span className="rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-600">-23%</span>
          </div>

          <p className="mt-6 leading-relaxed text-slate-600">
            A durable everyday backpack made from premium leather with padded straps, a laptop sleeve and plenty of room for daily essentials.
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-semibold text-slate-900">Color</h2>
            <div className="mt-3 flex gap-3">
              {colors.map((c, i) => (
                <button key={c} className={`h-9 w-9 rounded-full ${c} ${i === 0 ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`} />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-semibold text-slate-900">Size</h2>
            <div className="mt-3 flex gap-2">
              {sizes.map((s, i) => (
                <button
                  key={s}
                  className={`h-10 w-12 rounded-xl border text-sm font-medium ${i === 1 ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-xl border border-slate-200">
              <button className="h-11 w-11 text-lg text-slate-600 hover:bg-slate-50">-</button>
              <span className="w-10 text-center text-sm font-medium">1</span>
              <button className="h-11 w-11 text-lg text-slate-600 hover:bg-slate-50">+</button>
            </div>
            <button className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 flex-1 py-3.5">Add to cart</button>
            <button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200 py-3.5">Wishlist</button>
          </div>

          <ul className="mt-8 space-y-2 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <li>Free delivery on orders above Rs. 3,000</li>
            <li>7-day easy return policy</li>
            <li>Cash on delivery available</li>
          </ul>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-16 border-t border-slate-200 pt-10">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">Customer reviews</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between">
                <p className="font-medium text-slate-900">{r.name}</p>
                <span className="text-sm text-amber-500">{'★'.repeat(r.rating)}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductDetails
