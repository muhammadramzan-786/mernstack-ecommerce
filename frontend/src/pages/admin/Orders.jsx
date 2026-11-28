import React from 'react'
import { Link } from 'react-router-dom'

const tabs = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
const orders = [
  { id: '#10482', customer: 'Ali Khan', date: '24 Nov 2026', total: 'Rs. 8,498', payment: 'Paid', status: 'Delivered' },
  { id: '#10481', customer: 'Sara Ahmed', date: '24 Nov 2026', total: 'Rs. 3,200', payment: 'COD', status: 'Shipped' },
  { id: '#10480', customer: 'Hamza Raza', date: '23 Nov 2026', total: 'Rs. 12,499', payment: 'Paid', status: 'Pending' },
  { id: '#10479', customer: 'Fatima Noor', date: '22 Nov 2026', total: 'Rs. 1,850', payment: 'COD', status: 'Cancelled' },
]

function Orders() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Orders</h1>
      <p className="mt-1 text-sm text-slate-500">View and update customer orders.</p>

      <div className="mt-6 flex gap-2 overflow-x-auto border-b border-slate-200">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`shrink-0 border-b-2 px-4 py-2.5 text-sm font-medium transition ${i === 0 ? 'border-slate-950 text-slate-950' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <input type="search" placeholder="Search by order ID or customer" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15 mt-5 sm:max-w-xs" />

      <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs text-slate-500">
            <tr>
              <th className="px-6 py-3 font-medium">Order</th>
              <th className="px-6 py-3 font-medium">Customer</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Total</th>
              <th className="px-6 py-3 font-medium">Payment</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((o) => (
              <tr key={o.id}>
                <td className="px-6 py-4 font-medium text-slate-900">{o.id}</td>
                <td className="px-6 py-4 text-slate-600">{o.customer}</td>
                <td className="px-6 py-4 text-slate-600">{o.date}</td>
                <td className="px-6 py-4 text-slate-900">{o.total}</td>
                <td className="px-6 py-4 text-slate-600">{o.payment}</td>
                <td className="px-6 py-4">
                  <select defaultValue={o.status} className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15">
                    <option>Pending</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                    <option>Delivered</option>
                    <option>Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/admin/orders/${o.id.slice(1)}`} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View</Link>
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

export default Orders
