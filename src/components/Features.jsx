import About from './About';
import HowItWorks from './HowItWorks';

export default function Features() {
  return (
    <div className="relative z-10 bg-potluck-bg">
      <div className="bg-[#9F54E9] rounded-t-3xl pt-8">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full"></div>
        <HowItWorks />
        <About />
      </div>
    </div>
  );
}