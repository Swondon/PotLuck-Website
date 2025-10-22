import Carousel from './Carousel'

export default function AppLaunch() {
  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-potluck-bg to-[#150d24]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-around w-full max-w-6xl gap-16 md:gap-[5vw] flex-col md:flex-row">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Available on the App Store
            </h2>
            <p className="text-base md:text-lg text-potluck-dark leading-relaxed mb-8">
              Download Potluck Markets today and start creating event-based contracts with your friends.
            </p>
            <a
              href="https://apps.apple.com/us/app/potluck-markets/id6753965126"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-14" />
            </a>
          </div>
          <div className="mt-12 md:mt-0">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  )
}
