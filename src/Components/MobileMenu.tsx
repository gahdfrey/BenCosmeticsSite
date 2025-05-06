"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, TAB_DATA } from "../../config/constants";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  const dropdownVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#AE8625] z-40 md:hidden flex flex-col items-center justify-center bottom-0 left-0"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <div key={index}>
                <motion.div
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex items-center"
                >
                  <Link
                    href={item.href}
                    className="text-white text-xl font-medium hover:text-blue-300"
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                          setIsOpen(false);
                        }
                      }
                    }}
                  >
                    {item.text}
                  </Link>
                  {item.text === "Products" && (
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="ml-2 focus:outline-none"
                    >
                      <svg
                        className={`w-5 h-5 text-white transform transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </motion.div>
                {item.text === "Products" && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        className="flex flex-col items-center gap-4 mt-2"
                        variants={dropdownVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        {TAB_DATA.map((product, idx) => (
                          <motion.div
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                          >
                            <Link
                              href={product.link}
                              className="text-white text-lg hover:text-blue-300"
                              onClick={() => setIsOpen(false)}
                            >
                              {product.heading}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;