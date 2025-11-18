"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PotluckLogo from '/potlucklogo.png';

const navLinks = [
  { title: "How It Works", href: "#how-it-works" },
  { title: "Features", href: "#about" },
  { title: "Use Cases", href: "#possibilities" },
  { title: "FAQ", href: "#" },
];

const menuVariants = {
  hidden: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.5,
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <a href="/" className="flex items-center space-x-3 group">
          <img src={PotluckLogo} alt="Potluck Markets Logo" className="h-8 w-auto" />
          <span className="text-potluck-light font-bold text-xl group-hover:text-potluck-purple transition-colors">Potluck Markets</span>
        </a>
      </div>
      <div className="fixed top-6 right-6 z-50">
        <button onClick={toggleMenu} className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex flex-col justify-center items-center space-y-1.5 p-3">
          <motion.span
            className="block w-6 h-0.5 bg-potluck-light"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-potluck-light"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-potluck-light"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-potluck-bg/80 backdrop-blur-xl z-40 shadow-2xl"
          >
            <nav className="h-full flex flex-col justify-center items-center">
              <ul className="space-y-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.li key={link.title} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                    <a href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-potluck-light hover:text-potluck-purple transition-colors">
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}