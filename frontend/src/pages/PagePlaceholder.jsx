import { Link } from 'react-router-dom'

function PagePlaceholder({
  title,
  description = "Navigation is ready, but this page's content has not been added yet.",
  backTo,
  backLabel = 'Continue shopping',
  actionTo,
  actionLabel,
}) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-start justify-center px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">{description}</p>
      <Link
        to={backTo || '/'}
        className="mt-6 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        {backLabel}
      </Link>
      {actionTo && actionLabel && (
        <Link
          to={actionTo}
          className="mt-3 inline-flex rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          {actionLabel}
        </Link>
      )}
    </section>
  )
}

export default PagePlaceholder
