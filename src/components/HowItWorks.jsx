"use client";
import React, { useState, useEffect, useRef } from 'react';

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
    description: "When the event concludes, smart contracts automatically distribute IOUs. Fair and instant."
  }
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [borderRadius, setBorderRadius] = useState(24); // Initial border radius

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const { top, height } = section.getBoundingClientRect();

      // Animate border radius: from 24px to 0px as the section top reaches the viewport top
      setBorderRadius(Math.max(0, Math.min(24, top)));

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

  return (
    <section ref={sectionRef} id="how-it-works" className="relative z-10 h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-potluck-purple" style={{ borderTopLeftRadius: `${borderRadius}px`, borderTopRightRadius: `${borderRadius}px` }}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center w-full px-6 z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-potluck-light">How It Works</h2>
          <p className="text-lg md:text-xl text-potluck-light max-w-3xl mx-auto leading-relaxed">
            Four simple steps from creating a market to celebrating your wins
          </p>
        </div>
        <div ref={trackRef} className="flex items-center relative pl-[25vw] pt-20">
          {/* Dashed line connecting the steps */}
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2">
            <svg width="100%" height="2"><line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" strokeDasharray="8 8" /></svg>
          </div>
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="relative z-10 w-[50vw] flex-shrink-0 px-8 bg-potluck-purple">
                <div className="max-w-md text-center mx-auto">
                  <div className="inline-block bg-white/10 text-potluck-light font-bold py-1 px-3 rounded-full text-sm mb-4">
                    Step {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-potluck-light mb-4">{step.title}</h3>
                  <p className="text-base md:text-lg text-potluck-light/80 leading-relaxed ">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="relative z-10 h-64 w-px bg-white/50" />
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {steps.map((_, index) => (
            <div
              key={index}
              aria-label={`Step ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeStep === index ? 'bg-potluck-light' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}