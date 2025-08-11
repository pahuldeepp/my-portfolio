'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, Variants, easeInOut } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, X, Menu as MenuIcon } from 'lucide-react';

const navItems = [
  { label: "Home", onClick: () => window.location.href = "/" },
  { label: "About", onClick: () => window.location.hash = "#about" },
  { label: "Contact", onClick: () => window.location.hash = "#contact" },
  {
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    onClick: () => window.open("https://www.linkedin.com/in/pahuldeep-singh-b7aa22181/", "_blank"),
  },
];

const buttonVariants: Variants = {
  initial: {
    backgroundColor: "#000000",
    color: "#ffffff",
    scale: 1,
    y: 8,
  },
  hover: {
    backgroundColor: "#ffffff",
    color: "#000000",
    scale: 1.08,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    backgroundColor: "#000000",
    color: "#ffffff",
    scale: 0.97,
    y: 2,
  },
};

const navMotionVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.3, 
      ease: easeInOut, 
    } 
  },
};

const sidebarVariants: Variants = {
  hidden: { x: '-100%' },
  visible: { 
    x: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 30 
    } 
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
};

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar on ESC key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false);
    };
    if (sidebarOpen) window.addEventListener('keydown', onKeyDown);
    else window.removeEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [sidebarOpen]);

  // Close sidebar on clicking outside
  const backdropRef = useRef<HTMLDivElement>(null);
  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) setSidebarOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.nav
            variants={navMotionVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 z-30 w-full bg-gray-500 border-b border-gray-600 flex items-center px-4 sm:px-6 md:px-8"
            style={{ height: '76px' }}
          >
            {/* Left avatar */}
            <div className="absolute left-4">
              <Link href="/">
                <Image
                  src="/avatar.png"
                  alt="Profile Avatar"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-gray-300 shadow-sm object-cover cursor-pointer hover:ring-2 hover:ring-blue-400 transition"
                  priority
                />
              </Link>
            </div>

            {/* Nav items for md+ screens */}
            <div className="hidden md:flex flex-wrap gap-4 justify-center items-center flex-1 ml-16 md:ml-24">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={item.onClick}
                  className="flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold border-none outline-none cursor-pointer focus:outline-none shadow-sm transition-all duration-150 whitespace-nowrap"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  style={{ minWidth: "auto", backgroundColor: "#000", color: "#fff" }}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="text-sm md:text-base">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Github button for md+ */}
            <div className="hidden md:flex absolute right-4 items-center">
              <motion.a
                href="https://github.com/pahuldeepp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-semibold border-none outline-none cursor-pointer shadow-sm transition-all duration-150 whitespace-nowrap"
                style={{ backgroundColor: "#000", color: "#fff" }}
                aria-label="GitHub"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline text-sm md:text-base">GitHub</span>
              </motion.a>
            </div>

            {/* Hamburger menu button for small screens */}
            <div className="md:hidden absolute right-4">
              <button
                onClick={() => setSidebarOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-md bg-black text-white hover:bg-white hover:text-black transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Sidebar for small screens */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              ref={backdropRef}
              className="fixed inset-0 z-40 bg-black bg-opacity-50"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={onBackdropClick}
            />
            {/* Sidebar panel */}
            <motion.div
              className="fixed top-0 left-0 z-50 h-full w-64 bg-gray-800 p-6 shadow-lg flex flex-col"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={sidebarVariants}
            >
              {/* Close button */}
              <button
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="self-end p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Nav links */}
              <nav className="mt-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick();
                      setSidebarOpen(false);
                    }}
                    className="flex items-center gap-2 text-white hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
                  >
                    {item.icon && <span>{item.icon}</span>}
                    {item.label}
                  </button>
                ))}

                {/* Github link */}
                <a
                  href="https://github.com/pahuldeepp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-white hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded px-2 py-1"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
