import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const features = [
  {
    name: 'Prediction Market Platform',
    potluck: true,
    competitors: true,
    description: 'Core functionality allows users to trade on the outcomes of future events.'
  },
  {
    name: 'Transparent Market Activity',
    potluck: true,
    competitors: true,
    description: 'All market data, such as volume and pricing, is openly visible to participants.'
  },
  {
    name: 'Community-First Resolution',
    potluck: true,
    competitors: false,
    description: 'Predictions are resolved by group consensus, not a central "house" or oracle.'
  },
  {
    name: 'Hyperlocal & Social Markets',
    potluck: true,
    competitors: false,
    description: 'Focus on relatable, personal events, not just macro/political topics.'
  },
  {
    name: 'Built for Social Competition',
    potluck: true,
    competitors: false,
    description: 'Designed for fun, fair, and high-stakes group activities.'
  },
  {
    name: 'High-Frequency Engagement',
    potluck: true,
    competitors: false,
    description: 'Optimized for low-friction, frequent, and fun interactions.'
  },
  {
    name: 'Create Your Own Markets',
    potluck: true,
    competitors: false,
    description: 'Anyone can create a market for any event, from sports to inside jokes.'
  },
];

export default function CompetitorMatrix() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-potluck-light mb-4">
          Intentionally Different
        </h2>
        <p className="text-lg text-potluck-dark max-w-3xl mx-auto mb-12">
          While platforms like Kalshi and Polymarket focus on macro events, Potluck is built for your world. We prioritize community-driven fun over financial speculation.
        </p>
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 text-left">
          {/* Headers */}
          <div className="bg-[#251C37] p-4 font-bold text-potluck-light">Feature</div>
          <div className="bg-[#251C37] p-4 font-bold text-potluck-light text-center">Potluck Markets</div>
          <div className="bg-[#251C37] p-4 font-bold text-potluck-light text-center">Kalshi / Polymarket</div>

          {/* Data Rows */}
          {features.flatMap(feature => [
            <div key={feature.name} className="bg-[#251C37] p-4">
              <p className="font-semibold text-potluck-light">{feature.name}</p>
              <p className="text-sm text-potluck-dark mt-1">{feature.description}</p>
            </div>,
            <div key={`${feature.name}-potluck`} className="bg-[#251C37] p-4 flex items-center justify-center">
              {feature.potluck ? <FaCheckCircle className="text-potluck-purple w-6 h-6" /> : <FaTimesCircle className="text-potluck-purple w-6 h-6 opacity-50" />}
            </div>,
            <div key={`${feature.name}-competitors`} className="bg-[#251C37] p-4 flex items-center justify-center">
              {feature.competitors ? <FaCheckCircle className="text-potluck-purple w-6 h-6" /> : <FaTimesCircle className="text-potluck-purple w-6 h-6 opacity-50" />}
            </div>
          ])}
        </div>
      </div>
    </section>
  );
}