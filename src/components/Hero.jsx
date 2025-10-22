export default function Hero() {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center px-5">
      <div className="space-y-8">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-potluck-purple to-potluck-pink bg-clip-text text-transparent">
          Create. Track. Settle.
        </h1>
        <p className="text-base md:text-xl text-potluck-dark max-w-2xl leading-relaxed mx-auto text-center">
          The peer-to-peer event-based contract tracker where you can create agreements with friends. Fair, transparent, and automated.
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
      <div className="absolute bottom-10 opacity-70 text-sm animate-bounce">
        <span>Scroll to Explore</span>
        <div className="w-2 h-2 border-r-2 border-b-2 border-potluck-dark rotate-45 mx-auto mt-2"></div>
      </div>
    </header>
  )
}
