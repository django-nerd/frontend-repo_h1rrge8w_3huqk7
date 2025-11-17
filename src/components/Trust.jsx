import { Star, Shield, BadgeCheck, Users, FileCheck2 } from 'lucide-react'

export default function Trust() {
  const items = [
    { icon: Star, label: '4.9/5 Average Rating' },
    { icon: Shield, label: 'IICRC Certified Technicians' },
    { icon: BadgeCheck, label: 'Licensed • Bonded • Insured' },
    { icon: Users, label: 'Family Owned & Local' },
    { icon: FileCheck2, label: 'Work With All Insurers' }
  ]
  return (
    <section className="py-12 bg-gradient-to-br from-emerald-50 to-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-5 gap-4">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-lg border border-blue-100 bg-white/70 backdrop-blur p-4 text-center">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm">
                <it.icon className="h-5 w-5" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
