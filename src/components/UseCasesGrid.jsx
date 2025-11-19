import { motion } from 'framer-motion';

const useCases = [
  {
    title: "Sports with Friends",
    description: "Settle the debate once and for all. Create a market for the big game and invite your friends to put their money where their mouth is. Who will win the championship? Will your favorite player score? Track the odds and enjoy the bragging rights.",
    imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2835&auto=format&fit=crop",
    align: "left"
  },
  {
    title: "Office Pools & Challenges",
    description: "Bring some competitive fun to the workplace. Run a pool for March Madness, predict quarterly sales targets, or say who will finish the next big project first. It's a perfect way to boost morale and engagement.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop",
    align: "right"
  },
  {
    title: "Content Creator Engagement",
    description: "Give your audience a real stake in your content. Let them predict the outcome of your next stream, the winner of a subscriber competition, or the topic of your next video. It's a powerful tool for building a loyal and active community.",
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2874&auto=format&fit=crop",
    align: "left"
  },
  {
    title: "Personal Bets & Inside Jokes",
    description: "The possibilities are endless. Bet on whether a friend will finish a marathon, predict the plot twist in your favorite show, or create markets around personal goals and inside jokes. If you can question it, you can market it.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2940&auto=format&fit=crop",
    align: "right"
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

export default function UseCasesGrid() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {useCases.map((useCase, index) => (
          <motion.div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={`relative h-80 rounded-3xl overflow-hidden ${useCase.align === 'right' ? 'lg:order-last' : ''}`}>
              <img src={useCase.imageUrl} alt={useCase.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-potluck-purple mb-4">{useCase.title}</h3>
              <p className="text-lg text-potluck-dark leading-relaxed">
                {useCase.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}