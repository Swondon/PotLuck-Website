"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Potluck Markets?",
    answer: "Potluck is a peer-to-peer prediction market platform where you can create and participate in markets based on any real-world event. It's designed for social competition among friends, communities, and groups."
  },
  {
    question: "How is Potluck different from sports betting or other prediction markets?",
    answer: "Our key difference is community-first resolution. Instead of a centralized 'house' or oracle, the participants of a market vote to determine the outcome. This makes it a more social, transparent, and engaging group activity, focused on the hyperlocal and personal events that matter to you, rather than just macro/financial ones."
  },
  {
    question: "Is this legal?",
    answer: "Potluck operates as a platform for event-based contracts between peers. We are structured to comply with regulations by focusing on user-created markets and community resolution. For specific details, please refer to our regulatory information."
  },
  {
    question: "How are markets resolved?",
    answer: "After an event concludes, the market enters a resolution phase. Participants, and any designated arbiters, vote on the outcome based on the pre-defined rules. Our system ensures a fair consensus is reached before any payouts are made. If necessary, participants can also vote to void the market and have all funds returned."
  },
  {
    question: "What happens if there's a dispute about an outcome?",
    answer: "Since our markets are friend-focused and transactions are handled outside the app, the first step should always be to talk with your friends. Our community resolution model is also designed to minimize disputes by setting clear rules and sources of truth upfront. In the rare case that a friendly conversation doesn't resolve the issue, our support team can help mediate based on the evidence provided."
  },
  {
    question: "What are the different pot types (Public, Friends, Invite Only)?",
    answer: "You can control who sees and joins your pot. 'Public' pots are open for anyone on Potluck to join. 'Friends' pots are visible only to your friends on the app. 'Invite Only' pots are completely private and only accessible to people you specifically send an invitation to."
  },
  {
    question: "Can I create my own market about anything?",
    answer: "Yes! That's the core of Potluck. You can create a market for almost any event with a clear, verifiable 'Yes' or 'No' outcome. From sports games with friends to personal challenges and inside jokes, if you can question it, you can create a market for it."
  },
  {
    question: "What does 'When does this contract finish?' mean?",
    answer: "This is a critical rule set by the pot creator. It defines the exact date and time the event's outcome is determined (e.g., 'the final whistle of the game'). This prevents ambiguity and ensures everyone agrees on when the event is officially over before voting begins."
  },
  {
    question: "What does 'How long should voting last?' mean?",
    answer: "This setting determines the time window participants have to vote on the outcome after the contract has finished. It can be short (e.g., 1 hour) for obvious outcomes or longer (e.g., 24 hours) to give everyone a chance to participate in the resolution."
  },
  {
    question: "Are there any fees?",
    answer: "No, Potluck is completely free to use. We do not charge any fees to create or participate in markets."
  },
  {
    question: "How do payouts work with the IOU mechanic?",
    answer: "Potluck does not handle any real money. We act as a trusted scorekeeper. When a pot is resolved, our app automatically generates a simple IOU ledger that shows exactly who owes what to whom (e.g., 'You owe Sarah $10'). You can then use this ledger to settle up with your friends using your preferred method, like Venmo or cash."
  }
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-xl font-semibold text-potluck-light">{item.question}</span>
        <div className="text-potluck-purple">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-lg text-potluck-dark leading-relaxed pr-8">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />
        ))}
      </div>
    </section>
  );
}