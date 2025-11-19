"use client";
import { useState, useEffect, useRef } from 'react';

export default function FeatureWheel({ features }) {
  const sectionRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
  
      const { top, height } = section.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight * 1.5; // Adjust scroll sensitivity
  
      if (top > window.innerHeight * 0.3 || top < -scrollableHeight) return; // Start when section top reaches 30vh
  
      // Calculate progress based on the section being centered
      const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.3 - top) / scrollableHeight));
      const newRotation = progress * 360;
      setRotation(newRotation);
  
      // Determine active index
      const newActiveIndex = Math.round((newRotation % 360) / (360 / features.length)) % features.length;
      setActiveIndex(newActiveIndex);
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  const radius = 350;
  const angleStep = 360 / features.length;

  return (
    <section ref={sectionRef} className="relative z-50 h-[300vh] pt-32">
      <div className="sticky top-[18vh] h-[70vh] w-full">
        <div className="relative h-full w-full flex flex-col items-center justify-center">
          {/* 3D Rolodex Container */}
          <div style={{ perspective: '1000px' }}>
            <div
              className="relative transition-transform duration-700 ease-out"
              style={{
                width: '1px',
                height: '1px',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${-rotation}deg)`,
              }}
            >
              {features.map((feature, index) => {
                const cardAngle = index * angleStep;
                const isCardActive = index === activeIndex;
                return (
                  <div
                    key={feature.title}
                    className={`absolute top-0 left-0 w-[24rem] h-[18rem] -mt-36 -ml-48 flex flex-col bg-[#251C37] border border-white/10 rounded-3xl p-8 text-left transition-all duration-500 ${isCardActive ? 'opacity-100' : 'opacity-60 blur-sm'}`}
                    style={{
                      transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    }}
                  >
                    <div className="bg-potluck-purple p-2 rounded-xl inline-flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-auto text-potluck-light" />
                    </div>
                    <h3 className="text-xl font-bold text-potluck-light mb-3">{feature.title}</h3>
                    <ul className="space-y-2 text-xs text-potluck-dark leading-relaxed">
                      {feature.description.map((point, i) => (
                        <li key={i} className="flex items-baseline gap-3"><span className="text-potluck-purple">&bull;</span><span>{point}</span></li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}