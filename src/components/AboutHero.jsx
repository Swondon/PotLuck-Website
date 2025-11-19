import { motion } from 'framer-motion';

const stats = [
  { value: "50+", label: "Active Users" },
  { value: "Live", label: "on iOS App Store" },
  { value: "6 Months", label: "From Idea to Launch" },
  { value: "100%", label: "Founder-Coded" },
];

const heroVariants = {
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

export default function AboutHero() {
  return (
    <motion.section
      className="relative pt-48 pb-24 text-center"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-potluck-light leading-tight">
          About Us
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 text-xl text-potluck-dark max-w-2xl mx-auto mb-16">
          Meet the team building the future of social prediction markets.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <p className="text-4xl font-bold text-potluck-purple">{stat.value}</p>
              <p className="text-sm text-potluck-dark uppercase tracking-wider mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}