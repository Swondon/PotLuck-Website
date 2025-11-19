import { motion } from 'framer-motion';

const founders = [
  {
    name: "Ian Condon",
    title: "CEO",
    image: "/ian.jpeg",
    bio: [
      "4x startup and technical challenge award winner.",
      "SWE intern experience at Gilbarco Veeder-Root.",
      "Early-stage R&D grant recipient."
    ]
  },
  {
    name: "Brennen Farrell",
    title: "CTO",
    image: "/brennen.jpeg",
    bio: [
      "SWE intern experience at Wells Fargo.",
      "First author of a peer-reviewed IEEE research paper.",
      "Proven leader (team captain, high school salutatorian)."
    ]
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutContent() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-potluck-light space-y-24">
        {/* Our Story */}
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-potluck-purple mb-6">Our Story</motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-potluck-dark leading-relaxed max-w-3xl mx-auto">
            As college roommates and seniors in Computer Science at NC State, we saw firsthand how common casual betting is. Our friends were constantly making predictions, but the process was always messy. There's unclear terms, no record-keeping, and no accountability. We knew there had to be a better way.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-potluck-dark leading-relaxed max-w-3xl mx-auto mt-4">
            We created Potluck Markets to be intentionally distinct from the macro-focus of other platforms. Our core differentiators are <strong>Community-First Resolution</strong>, where predictions are resolved by group consensus, and <strong>Targeted Engagement</strong> on hyperlocal, relatable events. We're currently validating this model with 50 early adopters right here at NC State.
          </motion.p>
        </motion.div>

        {/* The Founders */}
        <motion.div
          className="text-center"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-potluck-purple mb-12">The Founders</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((member) => (
              <motion.div key={member.name} variants={itemVariants} className="flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className="text-3xl font-bold text-potluck-light">{member.name}</h3>
                <p className="text-lg font-semibold text-potluck-purple">{member.title}</p>
                <ul className="mt-4 space-y-2 text-potluck-dark text-left">
                  {member.bio.map((point, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="text-potluck-purple flex-shrink-0">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <motion.div variants={itemVariants} className="text-center bg-[#251C37] border border-white/10 rounded-3xl p-8 flex flex-col">
            <h3 className="text-3xl font-bold text-potluck-light mb-4">Join The Team</h3>
            <p className="text-lg text-potluck-dark mb-6 flex-grow">We are looking for a co-founder with strong marketing experience to help with user acquisition, branding, compliance, and engagement.</p>
            <a href="/contact" className="inline-block h-12 px-8 bg-potluck-purple text-potluck-light font-semibold rounded-full hover:bg-potluck-purple/90 transition-colors flex items-center justify-center mx-auto mt-auto">
              Contact Us
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center bg-[#251C37] border border-white/10 rounded-3xl p-8 flex flex-col">
            <h3 className="text-3xl font-bold text-potluck-light mb-4">Invest In Us</h3>
            <p className="text-lg text-potluck-dark mb-6 flex-grow">We are currently fundraising and would love to talk about investment opportunities and how you can be a part of our growth.</p>
            <a href="/contact" className="inline-block h-12 px-8 bg-potluck-purple text-potluck-light font-semibold rounded-full hover:bg-potluck-purple/90 transition-colors flex items-center justify-center mx-auto mt-auto">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}