export default function RegulatoryHero() {
  return (
    <section className="relative pt-48 pb-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-potluck-light leading-tight">
          Our Regulatory Approach
        </h1>
        <p className="mt-6 text-xl text-potluck-dark max-w-3xl mx-auto">
          We are committed to building a platform that is both innovative and compliant. Here’s how we approach our legal and regulatory responsibilities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/privacy-policy"
            className="flex items-center justify-center h-12 px-6 bg-potluck-bg/50 text-potluck-light font-semibold rounded-full hover:bg-white/10 transition-colors border border-potluck-dark w-full sm:w-auto"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="flex items-center justify-center h-12 px-6 bg-potluck-bg/50 text-potluck-light font-semibold rounded-full hover:bg-white/10 transition-colors border border-potluck-dark w-full sm:w-auto"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
}