import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import creamPhoto from "../../public/creamPhoto.jpeg";

const MainProduct = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    `Introducing Glow Essence Radiance Serum, a luxurious addition to your skincare routine that redefines beauty with every drop. Crafted with a potent blend of nature’s finest ingredients, this lightweight, fast-absorbing serum is designed to hydrate, brighten, and rejuvenate your skin, delivering a radiant, youthful glow that turns heads. Perfect for all skin types, Glow Essence is your daily dose of luminosity, transforming dull, tired complexions into vibrant, dewy masterpieces.`,
    `At the heart of Glow Essence lies a powerful trio of active ingredients: Hyaluronic Acid, Vitamin C, and Niacinamide. Hyaluronic Acid deeply hydrates, plumping the skin to smooth fine lines and restore elasticity. Vitamin C, a renowned antioxidant, brightens dark spots, evens skin tone, and protects against environmental stressors like pollution and UV damage. Niacinamide works to minimize pores, reduce redness, and strengthen the skin’s barrier, ensuring a flawless, balanced complexion. Infused with soothing Aloe Vera and nourishing Rosehip Oil, this serum calms irritation while promoting cell regeneration for a soft, supple finish.`,
  ];

  return (
    <div className="mx-auto md:w-[860px] py-7 flex flex-col gap-5 px-4">
      <h1 className="text-center text-2xl">Name of Main Product</h1>
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
        <Image
          src={creamPhoto}
          alt="Main product"
          width={500}
          height={200}
          className="rounded-sm w-full h-auto object-cover"
        />

        <div className="flex flex-col gap-6">
          <h2 className="text-5xl">Product Name</h2>

          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isExpanded ? "expanded" : "collapsed"}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden space-y-4"
            >
              {paragraphs
                .slice(0, isExpanded ? paragraphs.length : 1)
                .map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 bg-[#AE8625] text-white px-5 py-2 rounded-md hover:bg-[#906b1d] transition duration-300 w-fit"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
