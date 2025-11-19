import { motion } from 'framer-motion';

const featuredPots = [
  {
    title: "Over 4.5 planes at the NC State vs. Georgia Tech flyover",
    category: "Sports",
    potSize: "$1,260",
    participants: 42,
  },
  {
    title: "Jack finishes his book by the end of the semester",
    category: "Personal",
    potSize: "$14",
    participants: 7,
  },
  {
    title: "Potluck Markets gets accepted into YC",
    category: "Business",
    potSize: "$30",
    participants: 6,
  }
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

export default function FeaturedPots() {
  return (
    <motion.section
      className="py-20 px-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-4xl font-bold text-potluck-light mb-12">Featured Pots</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPots.map((pot, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-[#251C37] border border-white/10 rounded-3xl p-8 text-left flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-potluck-purple uppercase tracking-wider">{pot.category}</span>
              </div>
              <h3 className="text-xl font-bold text-potluck-light flex-grow mb-6">{pot.title}</h3>
              <div className="flex items-center justify-between text-potluck-light">
                <div className="text-center">
                  <div className="text-2xl font-bold">{pot.potSize}</div>
                  <div className="text-xs text-potluck-dark">Total Pot</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{pot.participants}</div>
                  <div className="text-xs text-potluck-dark">Participants</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}