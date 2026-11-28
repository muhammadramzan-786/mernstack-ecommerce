import React, { useEffect, useState } from 'react'
import { useGetProducts } from '../../hooks/useProducts'

const categories = ['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports', 'Books']
// const products = [
//   { name: 'Wireless Headphones', price: 'Rs. 7,999' },
//   { name: 'Smart Watch Series 5', price: 'Rs. 12,499' },
//   { name: 'Leather Backpack', price: 'Rs. 4,999' },
//   { name: 'Running Shoes', price: 'Rs. 6,499' },
// ]
const perks = [
  { title: 'Free delivery', text: 'On all orders above Rs. 3,000' },
  { title: 'Easy returns', text: '7-day hassle-free return policy' },
  { title: 'Secure payment', text: 'Cash on delivery and online payment' },
]

function ProductCard({ name, price, images }) {
  return (
    <a href="#" className="group block">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 transition group-hover:from-slate-200 overflow-hidden">
        <img src={images[0]} className='h-[293px] w-full bg-cover' />
      </div>
      <h3 className="mt-3 text-sm font-medium text-slate-900">{name}</h3>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-900">{price}</span>
        <span className="text-xs text-amber-500">★ 4.5</span>
      </div>
    </a>
  )
}

function Home() {
        const {
        data,
        isLoading,
        isError,
        error
    } = useGetProducts();
  const products = data?.products || [];


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    console.log(products);

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
            New season sale: up to 40% off
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Everything you need, delivered to your door.
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
            Thousands of products from trusted brands at prices that make sense. Order today and get it in 2 to 4 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20">Shop now</a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200">Browse categories</a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-indigo-100 via-slate-100 to-fuchsia-100" />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Shop by category</h2>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <a key={c} href="#" className="group rounded-2xl border border-slate-200 p-5 text-center transition hover:border-indigo-200 hover:bg-indigo-50/40">
              <div className="mx-auto h-12 w-12 rounded-full bg-slate-100 transition group-hover:bg-indigo-100" />
              <p className="mt-3 text-sm font-medium">{c}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured products</h2>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">See more</a>
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {products?.length > 0 ?
          products?.map((p) => (
            <ProductCard key={p?.name} {...p} />
          )) : <p>No products</p>}
        </div>
      </section>

      {/* Promo banner */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-white sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-600/40 blur-3xl" />
          <div className="relative max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight">Get 15% off your first order</h2>
            <p className="mt-3 text-slate-300">Create an account today and the discount is applied automatically at checkout.</p>
            <a href="#" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Create account
            </a>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 sm:grid-cols-3">
        {perks.map((p) => (
          <div key={p.title} className="flex gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-indigo-50" />
            <div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.text}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
