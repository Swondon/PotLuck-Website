import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/animations.css';

const phrases = [
  { text: "your friend's hot take.", font: "font-serif" },
  { text: "who shows up.", font: "font-mono" },
  { text: "the next big headline.", font: "font-sans" },
  { text: "your rival’s bold claim.", font: "font-serif" },
  { text: "the score.", font: "font-mono" },
  { text: "who pays for dinner.", font: "font-sans" },
  { text: "the wild card moment.", font: "font-serif" },
  { text: "the next bar bet.", font: "font-mono" },
  { text: "your group's inside joke.", font: "font-sans" },
    { text: "the future.", font: "font-script" },
  { text: "anything.", font: "font-bold" } // Final phrase
];


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(null);
  const [isCycling, setIsCycling] = useState(true);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const finalPhraseIndex = phrases.length - 1;

  useEffect(() => {
    if (!isCycling) return;

    const cycleSpeed = 120; // ms, slightly less than animation duration for overlap

    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1);
      if (nextIndex >= finalPhraseIndex) {
        setIsCycling(false);
        setCurrentIndex(finalPhraseIndex);
        setPreviousIndex(currentIndex);
      } else {
        setPreviousIndex(currentIndex);
        setCurrentIndex(nextIndex);
      }
    }, cycleSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isCycling, finalPhraseIndex]);

  useEffect(() => {
    if (!isCycling) {
      // Wait for the final text animation to finish before showing the subtitle.
      const subtitleTimer = setTimeout(() => setShowSubtitle(true), 350); // 300ms animation + 50ms buffer
      return () => clearTimeout(subtitleTimer);
    }
  }, [isCycling, finalPhraseIndex]);

  const currentPhrase = phrases[currentIndex];
  const previousPhrase = previousIndex !== null ? phrases[previousIndex] : null;

  return (
    <header className="h-screen flex flex-col justify-center items-center text-center px-5 bg-potluck-bg sticky top-0 z-10">
      <div className="space-y-12 w-full pt-24">
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight flex flex-col items-center">
          <span className="text-potluck-light font-bold">Predict</span>
          <span className="relative w-full max-w-[18ch] h-[3em]">
            {/* Current phrase fading in. The final phrase appears instantly. */}
            <span key={`current-${currentIndex}`} className={`absolute inset-0 w-full text-center text-potluck-purple ${currentPhrase.font} ${isCycling ? 'animate-cycle-in' : ''}`}>
              {currentPhrase.text}
            </span>

            {/* Previous phrase fading out */}
            {isCycling && previousPhrase && (
              <span key={`previous-${previousIndex}`} className={`absolute inset-0 w-full text-center text-potluck-purple ${previousPhrase.font} animate-blend-out`}>
                {previousPhrase.text}
              </span>
            )}
          </span>
        </h1>
        {/* Subtitle container to prevent layout shift */}
        <div className="h-40 min-h-[10rem]">
          {showSubtitle && (
            <div className="opacity-0 animate-settle space-y-8">
              <p className="text-lg md:text-xl text-potluck-dark max-w-sm leading-relaxed mx-auto">
                The social prediction marketplace for moments that matter to you.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <a href="https://apps.apple.com/us/app/potluck-markets/id6753965126" className="group inline-flex items-center bg-potluck-purple text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors">
                  <span className="md:hidden">Download</span>
                  <span className="hidden md:inline">Download on the App Store</span>
                  <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="/features" className="border border-potluck-dark text-potluck-dark font-semibold py-3 px-6 rounded-full hover:bg-white/10 transition-colors">
                  <span className="md:hidden">More</span>
                  <span className="hidden md:inline">Learn More</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* iPhone-style Home Bar / Scroll Indicator */}
      {showSubtitle && (
        <div className="absolute bottom-5 w-32 h-1.5 bg-potluck-dark rounded-full opacity-0 animate-settle-and-bounce" />
      )}
    </header>
  );
}
