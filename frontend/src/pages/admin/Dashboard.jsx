import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { label: 'Total revenue', value: 'Rs. 1,284,500', change: '+12.5%', up: true },
  { label: 'Orders', value: '1,482', change: '+8.2%', up: true },
  { label: 'Customers', value: '934', change: '+4.1%', up: true },
  { label: 'Returns', value: '23', change: '-2.4%', up: false },
]
const bars = ['h-20', 'h-32', 'h-24', 'h-40', 'h-28', 'h-44', 'h-36', 'h-48', 'h-32', 'h-40', 'h-52', 'h-44']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const orders = [
  { id: '#10482', customer: 'Ali Khan', total: 'Rs. 8,498', status: 'Delivered', badge: 'bg-emerald-50 text-emerald-700' },
  { id: '#10481', customer: 'Sara Ahmed', total: 'Rs. 3,200', status: 'Shipped', badge: 'bg-indigo-50 text-indigo-700' },
  { id: '#10480', customer: 'Hamza Raza', total: 'Rs. 12,499', status: 'Pending', badge: 'bg-amber-50 text-amber-700' },
  { id: '#10479', customer: 'Fatima Noor', total: 'Rs. 1,850', status: 'Cancelled', badge: 'bg-rose-50 text-rose-700' },
]
const top = [
  { name: 'Wireless Headphones', sold: 182 },
  { name: 'Smart Watch Series 5', sold: 144 },
  { name: 'Leather Backpack', sold: 121 },
  { name: 'Running Shoes', sold: 98 },
]

function Dashboard() {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Here is what is happening with your store.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">{s.label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{s.value}</p>
            <p className={`mt-1 text-xs font-medium ${s.up ? 'text-emerald-600' : 'text-rose-600'}`}>{s.change} from last month</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Sales overview</h2>
          <div className="mt-6 flex h-56 items-end gap-3">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className={`w-full rounded-t-lg bg-indigo-500/80 ${h}`} />
                <span className="text-xs text-slate-400">{months[i]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-semibold text-slate-900">Top products</h2>
          <ul className="mt-4 space-y-4">
            {top.map((p) => (
              <li key={p.name} className="flex items-center gap-3">
                <div className="h-11 w-11 shrink-0 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{p.name}</p>
                  <p className="text-xs text-slate-500">{p.sold} sold</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="font-semibold text-slate-900">Recent orders</h2>
          <Link to="/admin/orders" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Order</th>
                <th className="px-6 py-3 font-medium">Customer</th>
                <th className="px-6 py-3 font-medium">Total</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((o) => (
                <tr key={o.id}>
                  <td className="px-6 py-4 font-medium text-slate-900">{o.id}</td>
                  <td className="px-6 py-4 text-slate-600">{o.customer}</td>
                  <td className="px-6 py-4 text-slate-900">{o.total}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${o.badge}`}>{o.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
