import React from 'react'
import { Link } from 'react-router-dom'

function VerifyOTP() {
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
          <h2 className="text-4xl font-semibold leading-tight tracking-tight">Sirf ek aakhri qadam.</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">Hum ne aap ke email par 6 digit ka code bheja hai. Code likh kar apna account verify karein.</p>
        </div>

        <p className="relative text-sm text-slate-400">© 2026 YourBrand. Sab huqooq mehfooz hain.</p>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-sm">

          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Verify your email</h1>
          <p className="mt-2 text-sm text-slate-500">
            6 digit ka code <span className="font-medium text-slate-900">you@example.com</span> par bheja gaya hai
          </p>

          <form className="mt-8">
            <div className="flex justify-between gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  aria-label={`Digit ${i + 1}`}
                  className="h-14 w-12 rounded-xl border border-slate-200 bg-white text-center text-xl font-semibold text-slate-900 transition focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/15"
                />
              ))}
            </div>

            <button type="submit" className="mt-8 w-full rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-950/20 active:scale-[0.99]">
              Verify
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Code nahi mila?{' '}
            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">Dobara bhejein</button>
            <span className="ml-1 text-slate-400">(00:30)</span>
          </p>
          <p className="mt-3 text-center text-sm">
            <Link to="/register" className="font-medium text-slate-500 hover:text-slate-900">Wapas jayein</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default VerifyOTP
