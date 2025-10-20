export default function About() {
  return (
    <section id="about" className="min-h-screen w-screen flex-shrink-0 flex items-center justify-center py-20 px-6 md:px-[5vw]">
      <div className="flex items-center justify-around w-full max-w-6xl gap-16 md:gap-[5vw] flex-col md:flex-row">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            What is Potluck Markets?
          </h2>
          <p className="text-base md:text-lg text-potluck-dark leading-relaxed">
            Potluck Markets is a social platform where users can create and participate in prediction markets with friends. It automates settlement and tracks payouts, removing disputes and ensuring fairness.
          </p>
        </div>
        <div className="group mt-12 md:mt-0" style={{ perspective: '1000px' }}>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl px-8 py-5 w-[300px] backdrop-blur-sm transition-transform duration-500 ease-out text-xl font-medium -rotate-[5deg] -translate-y-8 group-hover:-rotate-[8deg] group-hover:-translate-x-5 group-hover:-translate-y-10">
            Private Markets
          </div>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl px-8 py-5 w-[300px] backdrop-blur-sm transition-transform duration-500 ease-out text-xl font-medium rotate-[3deg] z-[1] group-hover:rotate-0 group-hover:scale-105 group-hover:z-[2]">
            Secure Payments
          </div>
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl px-8 py-5 w-[300px] backdrop-blur-sm transition-transform duration-500 ease-out text-xl font-medium rotate-[8deg] translate-y-8 group-hover:rotate-[12deg] group-hover:translate-x-5 group-hover:translate-y-10">
            Transaction Tracking
          </div>
        </div>
      </div>
    </section>
  )
}
