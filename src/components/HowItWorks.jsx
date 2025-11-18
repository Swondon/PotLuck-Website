"use client";
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Create Your Market",
    description: "Set up a prediction market with friends. Define the event, set the stakes, and invite participants."
  },
  {
    number: "02",
    title: "Make Predictions",
    description: "Everyone places their bets on the outcome. All positions are recorded transparently on the blockchain."
  },
  {
    number: "03",
    title: "Track Progress",
    description: "Watch the market evolve in real-time. See how predictions shift as the event approaches."
  },
  {
    number: "04",
    title: "Auto Settlement",
    description: "When the event concludes, smart contracts automatically distribute winnings. Fair and instant."
  }
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;

      if (top > 0 || top < -scrollableHeight) return;

      const progress = -top / scrollableHeight;
      
      // Calculate the exact translation needed to center the last element
      const lastStep = track.lastElementChild;
      if (!lastStep) return;
      const endPosition = lastStep.offsetLeft + lastStep.offsetWidth / 2 - window.innerWidth / 2;
      const trackWidth = endPosition;
      
      track.style.transform = `translateX(-${progress * trackWidth}px)`;

      // Update active step for dot navigation
      const currentStep = Math.round(progress * (steps.length - 1));
      setActiveStep(currentStep);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDotClick = (index) => {
    const section = sectionRef.current;
    if (!section) return;

    // Calculate the target scroll progress for the clicked step
    const targetProgress = index / (steps.length - 1);

    // Calculate the corresponding vertical scroll position
    const scrollableHeight = section.offsetHeight - window.innerHeight;
    const targetTopOffset = -targetProgress * scrollableHeight;

    // Get the absolute top of the parent container relative to the document
    const featuresSection = section.parentElement.parentElement;
    const featuresSectionTop = featuresSection.getBoundingClientRect().top + window.scrollY;
    const newScrollY = featuresSectionTop + targetTopOffset;

    window.scrollTo({
      top: newScrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section ref={sectionRef} id="how-it-works" className="relative h-[300vh] bg-potluck-purple">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center w-full px-6 z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-potluck-light">How It Works</h2>
          <p className="text-lg md:text-xl text-potluck-light max-w-3xl mx-auto leading-relaxed">
            Four simple steps from creating a market to celebrating your wins
          </p>
        </div>
        <div ref={trackRef} className="flex items-center relative pl-[25vw]">
          {steps.map((step) => (
            <div key={step.number} className="w-[50vw] flex-shrink-0 px-8">
              <div className="max-w-md text-center mx-auto">
                <div className="inline-block bg-white/10 text-potluck-light font-bold py-1 px-3 rounded-full text-sm mb-4">
                  Step {step.number}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-potluck-light mb-4">{step.title}</h3>
                <p className="text-base md:text-lg text-potluck-light/80 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to step ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeStep === index ? 'bg-potluck-light' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}