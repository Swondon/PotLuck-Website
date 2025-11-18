import { FaShieldAlt, FaDownload, FaStar } from 'react-icons/fa';
import Carousel from './Carousel'; // Assuming Carousel.jsx exists

export default function AppLaunch() {
  return (
    <section className="relative z-10 py-32 px-6 md:px-10 bg-gradient-to-b from-potluck-bg to-[#150d24]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
        {/* Left Column: Text Content */}
        <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center flex flex-col justify-center">
          <div className="inline-block mx-auto bg-potluck-purple text-white text-xs font-bold py-1.5 px-4 rounded-full mb-4 uppercase tracking-wider">
            Available Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-potluck-light">
            Ready to Start?
          </h2>
          <p className="text-base md:text-lg text-potluck-dark leading-relaxed mb-10 px-6 md:px-12">
            Join in and create fair, transparent prediction markets with friends. Download now and create your first Pot.
          </p>
          <a
            href="https://apps.apple.com/us/app/potluck-markets/id6753965126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mx-auto transition-transform hover:scale-105"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-14" />
          </a>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-potluck-dark">
            <div className="flex items-center gap-2">
              <FaShieldAlt />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <FaDownload />
              <span>Beta Downloads Open</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar />
              <span>5-Star Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Carousel */}
        <div className="flex items-center justify-center">
          <Carousel />
        </div>
      </div>
    </section>
  )
}
