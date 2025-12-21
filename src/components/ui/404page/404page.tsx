import { ScrollToTop } from "@/components/scrolltop"

export default function Page404() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-16">
      <ScrollToTop />
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200">
          <span className="text-2xl font-bold text-emerald-600">!</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold text-slate-900">404</h1>
          <p className="text-lg font-semibold text-slate-800">
            Page not found
          </p>
        </div>

        {/* Message */}
        <p className="text-sm text-slate-500">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            ← Go home
          </a>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            Refresh page
          </button>
        </div>

        {/* Small hint */}
        <p className="text-sm text-slate-400">
          If you think this is a mistake, please check the URL and try again.
        </p>
      </div>
    </div>
  )
}
