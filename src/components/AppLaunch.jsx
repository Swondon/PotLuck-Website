import Carousel from './Carousel'

export default function AppLaunch() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-potluck-bg to-[#150d24]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-around w-full max-w-6xl gap-16 md:gap-[5vw] flex-col md:flex-row">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
              App Coming Soon
            </h2>
            <p className="text-base md:text-lg text-potluck-dark leading-relaxed">
              We're putting the finishing touches on the Potluck Markets app. Get ready to create and track event based contracts with your friends.
            </p>
            <div className="mt-8 flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3 text-lg text-potluck-light">
                <span>Mobile-First Experience</span>
              </div>
              <div className="flex items-center gap-3 text-lg text-potluck-light">
                <span>Live Transaction Tracking</span>
              </div>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  )
}
