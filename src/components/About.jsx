export default function About() {
  return (
    <section id="about" className="h-screen w-screen flex-shrink-0 flex items-center justify-center px-[5vw]">
      <div className="flex items-center justify-around w-full max-w-6xl gap-[5vw] flex-col md:flex-row">
        <div className="max-w-lg">
          <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
            What is Potluck Markets?
          </h2>
          <p className="text-base md:text-lg text-potluck-dark leading-relaxed">
            Potluck Markets is a social platform where users can create and participate in prediction markets with friends. It automates settlement and tracks payouts, removing disputes and ensuring fairness.
          </p>
        </div>
        <div className="relative group">
          <div className="card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 w-72 backdrop-blur-sm transition-transform duration-500 -rotate-6 -translate-y-8">
            Private Markets
          </div>
          <div className="card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 w-72 backdrop-blur-sm transition-transform duration-500 rotate-3 z-10 absolute top-0 left-0 group-hover:scale-105 group-hover:rotate-0">
            Secure Escrow
          </div>
          <div className="card bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 w-72 backdrop-blur-sm transition-transform duration-500 rotate-[8deg] translate-y-8 absolute top-0 left-0">
            Transaction Tracking
          </div>
        </div>
      </div>
    </section>
  )
}
