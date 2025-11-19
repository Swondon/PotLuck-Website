import { FaQuestionCircle, FaChartLine, FaGavel, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: FaQuestionCircle,
    title: "Create a Pot",
    description: "Everything starts with a question about a future event. Will your favorite team win? Will a friend complete a challenge? Will it rain tomorrow? You define the market.",
    points: [
      "<strong>Pose a Question:</strong> Frame a clear, verifiable 'Yes' or 'No' question.",
      "<strong>Set the Rules:</strong> Define the event's timeframe and the source of truth for its outcome. This ensures everyone agrees on how the result will be determined.",
      "<strong>Appoint an Arbiter:</strong> For added integrity, you can designate a neutral third party who cannot join the pot but helps vote on the final outcome.",
      "<strong>Invite Participants:</strong> Share your market with friends, a specific group, or open it to the public.",
    ]
  },
  {
    icon: FaChartLine,
    title: "Participate and Trade",
    description: "Once a market is live, participants make their prediction by buying into the outcome they believe will happen. This is a one-time action.",
    points: [
      "<strong>Make Your Prediction:</strong> Choose 'Yes' or 'No' and buy in. This is your single entry into the market; shares cannot be sold or traded afterward.",
      "<strong>Fixed Entry:</strong> The entry price is set by the market creator and can be any amount, including $0 for free-to-enter markets.",
      "<strong>Build the Pot:</strong> All entries are collected into a central pot. The size of the pot grows with each participant.",
    ]
  },
  {
    icon: FaGavel,
    title: "Community-First Resolution",
    description: "This is what makes Potluck unique. Instead of a centralized authority, the market's participants resolve the outcome based on the real-world result.",
    points: [
      "<strong>Event Occurs:</strong> The real-world event happens as defined in the market rules.",
      "<strong>Group Consensus:</strong> Participants vote on the outcome. Our system ensures a fair and transparent resolution process, preventing bad actors and promoting honesty.",
      "<strong>Verified Outcome:</strong> Once consensus is reached, the market is officially resolved, locking in the final result.",
    ]
  },
  {
    icon: FaTrophy,
    title: "Settle Up",
    description: "Potluck simplifies settling up. We don't handle any real money; instead, we generate a clear IOU ledger showing who owes what, so you can easily square up with your friends.",
    points: [
      "<strong>Automatic IOU Generation:</strong> Once a pot is resolved, the app automatically calculates and displays who owes money to the winners.",
      "<strong>Clear & Simple Ledger:</strong> You'll see a straightforward record (e.g., 'Alex owes Bob $5'), removing any confusion about the final amounts.",
      "<strong>Settle Your Way:</strong> Use the ledger to settle debts with friends via Venmo, cash, or your preferred method outside of the app. Potluck just keeps the score.",
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HowItWorksSteps() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical dotted line */}
        <div className="absolute left-8 top-0 h-full w-px bg-white/10">
          <div className="h-full w-full border-l-2 border-dashed border-potluck-dark/50"></div>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-24"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon on the line */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-potluck-purple rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-potluck-light">{index + 1}</span>
              </div>

              {/* Card Content */}
              <div className="bg-[#251C37] border border-white/10 rounded-3xl p-8">
                <h3 className="text-3xl font-bold text-potluck-purple mb-4">{step.title}</h3>
                <p className="text-lg text-potluck-dark leading-relaxed mb-6">{step.description}</p>
                <div className="space-y-4">
                  {step.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3 text-potluck-light">
                      <span className="text-potluck-purple mt-1.5 flex-shrink-0">&bull;</span>
                      <span className="flex-1 text-lg" dangerouslySetInnerHTML={{ __html: point }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}