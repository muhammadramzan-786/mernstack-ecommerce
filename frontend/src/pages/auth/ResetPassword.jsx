import React from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">
      {/* Left panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-slate-950 p-12 text-white">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl" />

        <div className="relative flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 2 7l10 5 10-5-10-5Z" />
              <path d="m2 17 10 5 10-5" />
              <path d="m2 12 10 5 10-5" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">YourBrand</span>
        </div>

        <div className="relative max-w-md">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">Naya password chunein.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">Aisa password rakhein jo aap ko yaad rahe aur doosron ke liye andaza lagana mushkil ho.</p>
        </div>

        <p className="relative text-sm text-slate-400">© 2026 YourBrand. Sab huqooq mehfooz hain.</p>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-sm">

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Reset password</h1>
          <p className="mt-2 text-sm text-slate-500">Apna naya password likhein</p>

          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">New password</label>
              <input id="password" type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
              <p className="mt-1.5 text-xs text-slate-500">Kam az kam 8 characters, ek number aur ek capital letter</p>
            </div>
            <div>
              <label htmlFor="confirm" className="mb-1.5 block text-sm font-medium text-slate-700">Confirm new password</label>
              <input id="confirm" type="password" placeholder="••••••••" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 active:scale-[0.99]">
              Reset password
            </button>
          </form>

          <p className="mt-8 text-center text-sm">
            <Link to="/login" className="font-medium text-slate-500 hover:text-slate-900">Back to login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
