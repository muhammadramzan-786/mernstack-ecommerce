import React from 'react'
import { Link } from 'react-router-dom'

const customers = [
  { name: 'Ali Khan', email: 'ali@example.com', phone: '0300 1234567', orders: 12, spent: 'Rs. 84,500', joined: '12 Jan 2026', active: true },
  { name: 'Sara Ahmed', email: 'sara@example.com', phone: '0311 7654321', orders: 7, spent: 'Rs. 41,200', joined: '03 Mar 2026', active: true },
  { name: 'Hamza Raza', email: 'hamza@example.com', phone: '0322 1112223', orders: 3, spent: 'Rs. 15,999', joined: '21 Jun 2026', active: true },
  { name: 'Fatima Noor', email: 'fatima@example.com', phone: '0333 9998887', orders: 0, spent: 'Rs. 0', joined: '14 Oct 2026', active: false },
]

function Customers() {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Customers</h1>
          <p className="mt-1 text-sm text-slate-500">934 registered customers</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-200">Export CSV</button>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input type="search" placeholder="Search by name, email or phone" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:max-w-xs" />
        <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 sm:w-auto">
          <option>All customers</option>
          <option>Active</option>
          <option>Blocked</option>
        </select>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-6 py-3 font-medium">Customer</th>
              <th className="px-6 py-3 font-medium">Phone</th>
              <th className="px-6 py-3 font-medium">Orders</th>
              <th className="px-6 py-3 font-medium">Total spent</th>
              <th className="px-6 py-3 font-medium">Joined</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {customers.map((c) => (
              <tr key={c.email}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
                      {c.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{c.name}</p>
                      <p className="text-xs text-slate-500">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{c.phone}</td>
                <td className="px-6 py-4 text-slate-600">{c.orders}</td>
                <td className="px-6 py-4 text-slate-900">{c.spent}</td>
                <td className="px-6 py-4 text-slate-600">{c.joined}</td>
                <td className="px-6 py-4">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${c.active ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                    {c.active ? 'Active' : 'Blocked'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4 text-sm font-medium">
                    <Link to={`/admin/customers/${encodeURIComponent(c.email)}`} className="text-indigo-600 hover:text-indigo-500">View</Link>
                    <button className="text-rose-600 hover:text-rose-500">{c.active ? 'Block' : 'Unblock'}</button>
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

export default Customers
