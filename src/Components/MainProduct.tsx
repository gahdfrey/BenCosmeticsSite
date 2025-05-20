import React, { useState, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import creamPhoto from "../../public/IMG_3020.jpeg";

const MainProduct = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const paragraphs = [
    `Introducing AQUA RICH body gel wash & lotion, a luxurious addition to your skincare routine that redefines beauty with every drop. Crafted with a potent blend of nature's finest ingredients, this lightweight, fast-absorbing serum is designed to hydrate, brighten, and transform your skin, delivering a radiant, youthful glow that captivates. Perfect for all skin types, Aqua rich is your daily dose of luminosity, revitalizing dull, uneven complexions into vibrant, flawless masterpieces. Experience five key benefits: reduced hyperpigmentation, evened skin tone, strengthened skin barrier, diminished redness, and faded dark spots.`,
    `At the heart of aqua rich lies a powerful trio of active ingredients: Niacinamide, Alpha Arbutin, and Tranexamic Acid. Niacinamide strengthens the skin's barrier, reduces redness, and minimizes pore appearance for a smooth, balanced complexion. Alpha Arbutin fades dark spots and promotes an even skin tone, revealing a luminous, uniform glow. Tranexamic Acid brightens the skin and diminishes hyperpigmentation, tackling discoloration for a radiant finish.`,
  ];

  const imageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, x: 100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div
      ref={ref}
      className="mx-auto md:w-[860px] py-7 flex flex-col gap-5 px-4 my-[4rem]"
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-6 items-start w-full overflow-hidden">
        {/* Image with Slide-in Animation and Rounded Edges - Hidden on mobile */}
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="hidden md:block relative w-full h-[400px] rounded-lg overflow-hidden"
        >
          <Image
            src={creamPhoto}
            alt="Main product"
            fill
            className="object-cover rounded-lg"
            style={{ 
              borderRadius: "8px",
              transform: "none",
              objectFit: "cover"
            }}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={true}
            quality={100}
          />
        </motion.div>

        {/* Content with Slide-in Animation */}
        <motion.div
          variants={contentVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="flex flex-col gap-6 md:col-start-2"
        >
          <h2 className="text-4xl md:text-5xl">AQUA RICH</h2>
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
                  <p key={idx} className="text-sm md:text-base">
                    {para}
                  </p>
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
        </motion.div>
      </div>
    </div>
  );
};

export default MainProduct;
