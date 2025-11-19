"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PotluckLogo from '/potlucklogo.png';

const navLinks = [
  {
    title: "Product",
    subLinks: [
      { title: "Features", href: "/features" },
      { title: "How it Works", href: "/how-it-works" },
      { title: "Use Cases", href: "/use-cases" },
      { title: "FAQ", href: "/faq" },
      { title: "Regulatory", href: "/regulatory" },
      { title: "Refer A Friend", href: "/refer-a-friend" },
    ],
  },
  {
    title: "Company",
    subLinks: [
      { title: "About", href: "/about" },
      { title: "Press", href: "/press" },
      { title: "Contact", href: "/contact" },
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

const DropdownMenu = ({ item, align, currentPath }) => {
  return (
    <div className={`absolute top-full mt-2 w-max bg-potluck-bg/50 backdrop-blur-xl border border-potluck-dark rounded-3xl shadow-lg overflow-hidden ${align === 'left' ? 'left-0' : 'right-0'}`}>
      <ul className="p-2">
        {item.subLinks.map((subLink) => {
          const isActive = subLink.href === currentPath;
          return (
            <li key={subLink.title}>
              <a href={subLink.href} className={`block px-4 py-2 transition-colors rounded-full ${isActive ? 'text-potluck-purple font-semibold' : 'text-potluck-light hover:bg-white/10'}`}>
                {subLink.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = window.location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar Container */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between w-[95vw] max-w-7xl">
        {/* Logo */}
        <div>
          <a href="/" className="flex items-center space-x-3 group h-12 px-4 bg-potluck-bg/50 backdrop-blur-md border border-potluck-dark rounded-full">
            <img src={PotluckLogo} alt="Potluck Markets Logo" className="h-8 w-auto" />
            <span className="text-potluck-light font-bold text-xl group-hover:text-potluck-purple transition-colors hidden sm:inline">Potluck Markets</span>
          </a>
        </div>

        {/* Desktop Nav & Download Button */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex relative items-center h-12 px-4 bg-potluck-bg/50 backdrop-blur-md border border-potluck-dark rounded-full">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <li // The li is now static, letting the dropdown be positioned relative to the nav
                  key={link.title}
                  onMouseEnter={() => setOpenDropdown(link.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-potluck-light font-semibold hover:text-potluck-purple transition-colors px-2">
                    {link.title}
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.title && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full w-full left-0">
                        <DropdownMenu item={link} align={index === 0 ? 'left' : 'right'} currentPath={pathname} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="https://apps.apple.com/us/app/potluck-markets/id6753965126"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 px-6 bg-potluck-bg/50 text-potluck-light font-semibold rounded-full hover:bg-opacity-90 transition-colors border border-potluck-dark"
          >
            Download
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="w-12 h-12 bg-potluck-bg/50 backdrop-blur-md border border-potluck-dark rounded-full flex flex-col justify-center items-center space-y-1.5">
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
            className="fixed top-0 right-0 h-full w-full sm:w-80 bg-potluck-bg/80 backdrop-blur-xl z-[90] shadow-2xl"
          >
            <nav className="h-full flex flex-col justify-center items-center pt-24 pb-12">
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
                            className={`text-lg transition-colors ${pathname === subLink.href ? 'text-potluck-purple font-semibold' : 'text-potluck-dark hover:text-potluck-purple'}`}
                          >{subLink.title}</a>
                        </li>
                      ))}
                    </ul>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12">
                <a
                  href="https://apps.apple.com/us/app/potluck-markets/id6753965126"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-14" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}