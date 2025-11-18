"use client";
import { useState, useEffect, useRef } from 'react';

const pots = [
  { title: "Who's winning the game tonight?", category: "Sports" },
  { title: "Will our fantasy team win this week?", category: "Fantasy Sports" },
  { title: "Will the new Marvel movie be a hit?", category: "Movies" },
  { title: "Who will be late to brunch?", category: "Inside Jokes" },
  { title: "Will Dogecoin pump this weekend?", category: "Crypto" },
  { title: "Who pays for the next round?", category: "Bar Bets" },
];

export default function Possibilities() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -200px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="possibilities" className="relative z-10 bg-potluck-bg py-20 px-6 md:px-[5vw]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-potluck-light">
          Endless Possibilities
        </h2>
        <p className="text-lg md:text-xl text-potluck-dark max-w-3xl mx-auto leading-relaxed mb-20">
          From sports to entertainment, create markets for anything you and your friends care about.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pots.map((pot, index) => (
            <div key={index} className={`bg-white/5 border border-white/10 rounded-xl p-6 text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <p className="text-xs font-semibold text-potluck-purple uppercase tracking-wider mb-2">{pot.category}</p>
              <h3 className="text-lg font-bold text-potluck-light">{pot.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}