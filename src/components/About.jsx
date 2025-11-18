"use client";
import { useState, useEffect, useRef } from 'react';
import { FaLock, FaUsers, FaChartLine, FaCogs, FaMobileAlt, FaEye } from 'react-icons/fa';

const features = [
  {
    title: "Private Markets",
    description: "Create invite-only prediction markets with your trusted circle. Complete control over who participates.",
    icon: FaLock,
  },
  {
    title: "Peer to Peer",
    description: "Direct agreements between friends. No middlemen, no hidden fees. Just honest predictions.",
    icon: FaUsers,
  },
  {
    title: "Real-Time Tracking",
    description: "Watch markets evolve in real-time. Track positions, monitor outcomes, and see settlement instantly.",
    icon: FaChartLine,
  },
  {
    title: "Automated Settlement",
    description: "Smart contracts ensure fair payouts. No disputes, no delays. When the event concludes, settlement is instant.",
    icon: FaCogs,
  },
  {
    title: "Mobile First",
    description: "Designed for iOS with a buttery smooth experience. Create and manage markets on the go.",
    icon: FaMobileAlt,
  },
  {
    title: "100% Transparent",
    description: "Every transaction is recorded and visible. Full audit trail ensures trust and fairness for all parties.",
    icon: FaEye,
  }
];

export default function About() {
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
      {
        rootMargin: '0px 0px -200px 0px', // Trigger when the section is 200px into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative z-10 bg-potluck-bg pt-32 pb-20 px-6 md:px-[5vw]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-potluck-light">
          Why Potluck Markets?
        </h2>
        <p className="text-lg md:text-xl text-potluck-dark max-w-3xl mx-auto leading-relaxed mb-20">
          The most elegant way to create, track, and settle prediction markets with your friends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            return (
              <div key={feature.title} className={`bg-white/5 border border-white/10 rounded-xl p-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <feature.icon className="text-3xl text-potluck-purple mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-potluck-light mb-2">{feature.title}</h3>
                <p className="text-potluck-dark leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
