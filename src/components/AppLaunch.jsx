export default function AppLaunch() {
  return (
    <section className="py-24 px-10 bg-gradient-to-b from-potluck-bg to-[#150d24]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-16 flex-col md:flex-row">
          <div className="flex-1 max-w-lg">
            <h2 className="text-5xl md:text-6xl font-bold mb-5 leading-tight">
              App Coming Soon
            </h2>
            <p className="text-base md:text-lg text-potluck-dark leading-relaxed">
              We're putting the finishing touches on the Potluck Markets app. Get ready to create and track event based contracts with your friends.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-lg text-potluck-light">
                <span>Mobile-First Experience</span>
              </div>
              <div className="flex items-center gap-3 text-lg text-potluck-light">
                <span>Live Transaction Tracking</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 md:w-72 h-[32rem] md:h-[35rem] bg-gradient-to-br from-potluck-purple/20 to-potluck-pink/20 border-[3px] border-white/10 rounded-[40px] p-3 shadow-2xl relative">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-potluck-bg rounded-b-3xl z-10"></div>
              <div className="w-full h-full bg-gradient-to-b from-[#2a1a45] to-potluck-bg rounded-[32px] flex items-center justify-center overflow-hidden">
                <div className="text-3xl font-bold bg-gradient-to-r from-potluck-purple to-potluck-pink bg-clip-text text-transparent animate-pulse">
                  POTLUCK
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
