import { PhoneOutgoing, MessageSquare } from 'lucide-react'

export default function CTA() {
  return (
    <section id="quote" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-600 to-blue-700 p-6 md:p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Need help right now?</h3>
              <p className="mt-2 text-blue-100">Call our emergency line or request a free on-site damage assessment. We'll be there within the hour.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="tel:+18005551234" className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-5 py-3 rounded-md font-semibold shadow">
                  <PhoneOutgoing className="h-4 w-4" /> (800) 555-1234
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-white px-5 py-3 rounded-md border border-white/20">
                  <MessageSquare className="h-4 w-4" /> Get a Free Quote
                </a>
              </div>
              <p className="mt-3 text-xs text-blue-100">No obligation • We work with your insurance</p>
            </div>
            <form className="bg-white/10 rounded-xl p-4 grid gap-3">
              <input className="w-full rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400" placeholder="Full name" />
              <input className="w-full rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400" placeholder="Phone number" />
              <input className="w-full rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400" placeholder="Address (optional)" />
              <textarea className="w-full rounded-md px-3 py-2 bg-white text-gray-900 placeholder:text-gray-400" rows="3" placeholder="Tell us about the damage"></textarea>
              <button type="button" className="mt-1 inline-flex justify-center bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-semibold">
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
