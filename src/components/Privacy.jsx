import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <section id="privacy" className="min-h-screen w-screen flex-shrink-0 flex items-center justify-center py-20 px-6 md:px-[5vw]">
      <div className="flex items-center justify-around w-full max-w-6xl gap-16 md:gap-[8vw] flex-col-reverse md:flex-row">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            Your Trust, Our Priority.
          </h2>
          <p className="text-base md:text-lg text-potluck-dark leading-relaxed">
            We are committed to protecting your data and privacy. Our platform is built on a foundation of security and transparency. Download our full policy to see how we safeguard your information.
          </p>
          <Link
            to="/privacy-policy"
            className="inline-block mt-8 bg-potluck-purple text-potluck-bg font-semibold px-7 py-3 rounded-full transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(158,120,247,0.3)]"
          >
            View Privacy Policy
          </Link>
        </div>
        <div className="opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-40 md:w-60 text-potluck-purple"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
