import { Droplets, ShieldCheck, SprayCan, Home, Ruler, RotateCw } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Water Extraction',
    desc: 'Powerful truck-mounted extraction removes standing water fast to prevent further damage.'
  },
  {
    icon: SprayCan,
    title: 'Mold Remediation',
    desc: 'HEPA filtration, containment, and antimicrobial treatment for safe, thorough removal.'
  },
  {
    icon: Ruler,
    title: 'Structural Drying',
    desc: 'Industrial air movers and dehumidifiers with daily moisture monitoring and mapping.'
  },
  {
    icon: ShieldCheck,
    title: 'Sanitization',
    desc: 'Hospital-grade disinfectants to eliminate bacteria, odors, and contaminants.'
  },
  {
    icon: RotateCw,
    title: 'Full Restoration',
    desc: 'From cleanup to rebuild—walls, flooring, and finishes restored like new.'
  },
  {
    icon: Home,
    title: 'Insurance Support',
    desc: 'We document damage and bill your carrier directly to reduce stress.'
  }
]

export default function Services() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What We Do</h2>
          <p className="mt-2 text-gray-600">Rapid response services tailored to stop damage, remove contaminants, and restore your space.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-items-center shadow-sm">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
