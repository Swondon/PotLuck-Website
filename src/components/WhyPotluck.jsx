import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  "Make peer-to-peer event-based agreements simple and secure.",
  "Track outcomes and settle contracts transparently.",
  "Perfect for friendly predictions, challenges, and social competitions.",
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyPotluck() {
  return (
    <motion.section
      className="py-20 px-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-potluck-light mb-10">Why Potluck Markets?</motion.h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-4 bg-[#251C37] border border-white/10 p-6 rounded-3xl">
              <FaCheckCircle className="w-6 h-6 text-potluck-purple flex-shrink-0" />
              <p className="text-lg text-potluck-light text-left">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}