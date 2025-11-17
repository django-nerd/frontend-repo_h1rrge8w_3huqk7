import { Clock, Thermometer, Wind, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs text-blue-700 mb-4">
            <Clock className="h-3.5 w-3.5" /> 24/7 Emergency Response • 60-Min Arrival
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Flood, Water & Mold Damage Restoration
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            When disaster strikes, minutes matter. Our IICRC-certified team dries, cleans, and restores your property—fast.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-blue-100 bg-white p-3 flex items-center gap-2 text-sm">
              <Thermometer className="h-4 w-4 text-blue-600" /> Moisture Mapping
            </div>
            <div className="rounded-lg border border-blue-100 bg-white p-3 flex items-center gap-2 text-sm">
              <Wind className="h-4 w-4 text-blue-600" /> HEPA Filtration
            </div>
            <div className="rounded-lg border border-blue-100 bg-white p-3 flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-blue-600" /> Direct Insurance Billing
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="tel:+18005551234" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md shadow-md transition">
              Get Emergency Help <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-700 border border-blue-200 px-5 py-3 rounded-md">
              Free Damage Assessment
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">Serving homes and businesses across the metro area.</p>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-blue-100 rounded-full blur-3xl opacity-70" />
          <div className="relative rounded-2xl border border-blue-100 bg-white p-4 shadow-xl">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop" alt="Water damage restoration" className="h-72 w-full object-cover rounded-xl" />
            <div className="grid grid-cols-3 gap-3 mt-4">
              <Stat number="60m" label="Avg Arrival" />
              <Stat number="4.9★" label="Customer Rating" />
              <Stat number="10k+" label="Restorations" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-3 text-center">
      <p className="text-lg font-bold text-blue-700">{number}</p>
      <p className="text-[11px] text-gray-500">{label}</p>
    </div>
  )
}
