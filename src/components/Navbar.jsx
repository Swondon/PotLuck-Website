import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-potluck-bg/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-10 h-[70px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-potluck-light text-xl font-semibold no-underline">
          <img
            src="/potlucklogo.png"
            alt="Potluck Markets Logo"
            className="h-8 w-8"
            style={{ mixBlendMode: 'screen', filter: 'brightness(1.2)' }}
          />
          <span>Potluck Markets</span>
        </Link>
        <div className="flex items-center gap-5">
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
      </div>
    </nav>
  )
}
