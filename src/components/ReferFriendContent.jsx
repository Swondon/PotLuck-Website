import { FaUser, FaShare, FaUserPlus, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: FaUser,
    title: "Find Your Code",
    description: "Open the Potluck app and navigate to your profile page to find your unique referral code."
  },
  {
    icon: FaShare,
    title: "Share with a Friend",
    description: "Send your code to any friend who you think would enjoy creating and joining pots."
  },
  {
    icon: FaUserPlus,
    title: "They Sign Up",
    description: "When your friend creates their Potluck account, they'll have a chance to enter your referral code."
  },
  {
    icon: FaDollarSign,
    title: "You Get Paid",
    description: "Once their signup is complete, we'll be notified and will contact you to give you $5. It's that simple!"
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

export default function ReferFriendContent() {
  return (
    <motion.section
      className="py-20 px-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-[#251C37] border border-white/10 rounded-3xl p-8 flex flex-col items-center">
              <step.icon className="w-8 h-8 text-potluck-purple mb-6" />
              <h3 className="text-2xl font-bold text-potluck-light mb-3">{step.title}</h3>
              <p className="text-lg text-potluck-dark leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}