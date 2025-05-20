"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { ProductsRecord } from "@/lib/types";
import { NAV_ITEMS } from "../../config/constants";
import Image from "next/image";

interface NavBarProps {
  products?: ProductsRecord[];
}

const NavBar = ({ products = [] }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Get the current product ID from the URL
  const currentProductId =
    typeof window !== "undefined"
      ? window.location.pathname.split("/products/")[1]
      : "";

  // Filter out the current product from the dropdown list
  const filteredProducts = products.filter(
    (product) => product.xata_id !== currentProductId
  );

  return (
    <nav className="sticky top-0 z-50  px-4 py-4  bg-white shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <Link
          href="/"
          className={`z-60 ${
            isOpen ? "text-white" : "text-black"
          } flex items-center`}
        >
          <Image
            src="/logo.jpg"
            alt={"Ben Cosmetics Logo"}
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() =>
                item.text === "Products" && setIsHovered(true)
              }
              onMouseLeave={() =>
                item.text === "Products" && setIsHovered(false)
              }
            >
              <motion.div
                whileHover={{ scale: 1.05, color: "#93C5FD" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center cursor-pointer"
              >
                <Link
                  href={item.href}
                  className="text-black text-xl font-medium hover:text-[#93C5FD]"
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault();
                      if (window.location.pathname !== "/") {
                        // Navigate to home page first, then scroll to the section
                        window.location.href = "/" + item.href;
                      } else {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                          setIsOpen(false);
                        }
                      }
                    }
                  }}
                >
                  {item.text}
                </Link>
                {item.text === "Products" && (
                  <svg
                    className="ml-1 w-4 h-4 text-black group-hover:text-[#93C5FD]"
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
                )}
              </motion.div>
              {/* Desktop Dropdown */}
              {item.text === "Products" && (
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 z-50 min-w-[200px]"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {filteredProducts.map((product, idx) => (
                        <Link
                          key={idx}
                          href={`/products/${product.xata_id}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {product.heading}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden focus:outline-none z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between z-[60]">
            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-0.5 origin-center ${
                isOpen ? "bg-white" : "bg-black"
              }`}
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-0.5 ${isOpen ? "bg-white" : "bg-black"}`}
            />
            <motion.div
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`w-6 h-0.5 origin-center ${
                isOpen ? "bg-white" : "bg-black"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu - Pass filtered products */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        products={filteredProducts}
      />
    </nav>
  );
};

export default NavBar;
