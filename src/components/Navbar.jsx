import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-potluck-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-[70px] flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-potluck-light text-xl font-semibold no-underline"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/potlucklogo.png"
              alt="Potluck Markets Logo"
              className="h-8 w-8"
              style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }}
            />
            <span className="hidden sm:inline">Potluck Markets</span>
            <span className="sm:hidden">Potluck</span>
          </Link>
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/privacy-policy"
              className="text-potluck-light no-underline font-medium transition-colors hover:text-potluck-purple"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-potluck-light no-underline font-medium transition-colors hover:text-potluck-purple"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:s.potluck.markets@gmail.com"
              className="text-potluck-light no-underline font-medium px-4 py-2 border border-white/10 rounded-full transition-all hover:bg-potluck-purple hover:border-potluck-purple hover:text-potluck-bg"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-potluck-light focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 pt-2 pb-4 space-y-3">
          <Link
            to="/privacy-policy"
            className="block text-potluck-light no-underline font-medium transition-colors hover:text-potluck-purple"
            onClick={() => setIsOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="block text-potluck-light no-underline font-medium transition-colors hover:text-potluck-purple"
            onClick={() => setIsOpen(false)}
          >
            Terms of Service
          </Link>
          <a
            href="mailto:s.potluck.markets@gmail.com"
            className="block text-potluck-light no-underline font-medium transition-colors hover:text-potluck-purple"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  )
}
