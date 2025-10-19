export default function Hero() {
  return (
    <header className="h-screen flex flex-col justify-center items-center text-center px-5">
      <div className="space-y-5">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight bg-gradient-to-r from-potluck-purple to-potluck-pink bg-clip-text text-transparent">
          Predict. Compete. Win.
        </h1>
        <p className="text-base md:text-xl text-potluck-dark max-w-2xl leading-relaxed mx-auto text-left md:text-center">
          The social prediction market where you can challenge your friends on anything. Fair, transparent, and automated.
        </p>
      </div>
      <div className="absolute bottom-10 opacity-70 text-sm animate-bounce">
        <span>Scroll to Explore</span>
        <div className="w-2 h-2 border-r-2 border-b-2 border-potluck-dark rotate-45 mx-auto mt-2"></div>
      </div>
    </header>
  )
}
