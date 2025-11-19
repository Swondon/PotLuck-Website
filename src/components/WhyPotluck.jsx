import { FaCheckCircle } from 'react-icons/fa';

const benefits = [
  "Make peer-to-peer event-based agreements simple and secure.",
  "Track outcomes and settle contracts transparently.",
  "Perfect for friendly predictions, challenges, and social competitions.",
];

export default function WhyPotluck() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-potluck-light mb-10">Why Potluck Markets?</h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#251C37] border border-white/10 p-6 rounded-3xl">
              <FaCheckCircle className="w-6 h-6 text-potluck-purple flex-shrink-0" />
              <p className="text-lg text-potluck-light text-left">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}