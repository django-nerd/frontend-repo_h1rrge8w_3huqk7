export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-500">© {new Date().getFullYear()} BlueShield Restoration. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-gray-600">
          <a href="#" className="hover:text-blue-700">Privacy</a>
          <a href="#" className="hover:text-blue-700">Terms</a>
          <a href="#" className="hover:text-blue-700">Licensing</a>
        </nav>
      </div>
    </footer>
  )
}
