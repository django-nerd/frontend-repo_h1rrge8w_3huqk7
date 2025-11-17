import { PhoneCall, ShieldCheck, Droplets } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center shadow-sm">
            <Droplets className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-blue-700 leading-none">BlueShield</p>
            <p className="text-[11px] text-gray-500 leading-none">Water • Flood • Mold</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-emerald-600">
            <ShieldCheck className="h-4 w-4" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-blue-700">
            <span className="px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium">24/7 Emergency</span>
          </div>
        </div>
        <a href="tel:+18005551234" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition">
          <PhoneCall className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
          <span className="font-semibold tracking-wide">(800) 555-1234</span>
        </a>
      </div>
    </header>
  )
}
