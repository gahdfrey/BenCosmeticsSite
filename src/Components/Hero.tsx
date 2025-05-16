"use client";
import React from "react";
import creamPhoto from "../../public/IMG_3010 2.jpeg";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full text-white" id="hero">
      {/* Background Image */}
      <Image
        src={creamPhoto}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 min-h-[calc(628px-64px)] flex flex-col justify-center items-center text-center">
          <div className="md:max-w-4xl">
            <h1 className="mb-6 md:text-6xl md:w-[636px] md:mx-auto md:leading-[82px] text-2xl font-cursive">
              AQUA RICH
            </h1>
            <p className="mb-8 md:w-[860px] md:text-[22px] md:leading-[38px] text-xl font-cursive">
              Glow Your Way – Beauty That Shines!
            </p>
            <motion.a
              href="#products"
              className="bg-white text-[#0c1528] rounded-md px-6 py-4 hover:bg-blue-100 w-[192px] h-[50px] flex items-center justify-center mx-auto mt-[30px] cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Available Products
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
