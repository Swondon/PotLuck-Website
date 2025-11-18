"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PotluckLogo from '/potlucklogo.png';

const navLinks = [
  {
    title: "Product",
    subLinks: [
      { title: "Features", href: "#about" },
      { title: "How it Works", href: "#how-it-works" },
      { title: "Use Cases", href: "#possibilities" },
      { title: "FAQ", href: "#faq" },
      { title: "Regulatory", href: "#regulatory" },
      { title: "Refer A Friend", href: "#refer" },
    ],
  },
  {
    title: "Company",
    subLinks: [
      { title: "About", href: "#company-about" },
      { title: "Press", href: "#press" },
      { title: "Contact", href: "#contact" },
      { title: "Brand", href: "#brand" },
    ],
  },
];

// Variants for the mobile menu
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

const DropdownMenu = ({ item }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-potluck-bg/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg overflow-hidden">
      <ul className="py-2">
        {item.subLinks.map((subLink) => (
          <li key={subLink.title}>
            <a href={subLink.href} className="block px-4 py-2 text-potluck-light hover:bg-white/10 transition-colors">
              {subLink.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar Container */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95vw] max-w-7xl">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center space-x-3 group h-12 px-4 bg-potluck-bg/50 backdrop-blur-md border border-white/10 rounded-full">
            <img src={PotluckLogo} alt="Potluck Markets Logo" className="h-8 w-auto" />
            <span className="text-potluck-light font-bold text-xl group-hover:text-potluck-purple transition-colors hidden sm:inline">Potluck Markets</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-12 px-4 bg-potluck-bg/50 backdrop-blur-md border border-white/10 rounded-full">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li
                key={link.title}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="text-potluck-light font-semibold hover:text-potluck-purple transition-colors">
                  {link.title}
                </button>
                <AnimatePresence>
                  {openDropdown === link.title && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                      <DropdownMenu item={link} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="w-12 h-12 bg-potluck-bg/50 backdrop-blur-md border border-white/10 rounded-full flex flex-col justify-center items-center space-y-1.5">
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
      </header>

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
                {navLinks.map((item, i) => (
                  <motion.li key={item.title} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                    <div className="text-2xl font-bold text-potluck-light mb-4">{item.title}</div>
                    <ul className="space-y-4">
                      {item.subLinks.map((subLink) => (
                        <li key={subLink.title}>
                          <a
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-potluck-dark hover:text-potluck-purple transition-colors"
                          >{subLink.title}</a>
                        </li>
                      ))}
                    </ul>
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