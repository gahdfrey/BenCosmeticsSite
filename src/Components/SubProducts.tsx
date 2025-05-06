import React from "react";
import Tabs from "../UI/Components/TabComponent";
import { TAB_DATA } from "../../config/constants";

const SubProducts = () => {
  return (
    <div id="products" className="flex flex-col mt-10 md:mt-22">
      <div className="flex flex-col gap-3">
        {/* Heading */}
        <span className=" md:w-[644px] mx-auto">
          <h1 className="text-3xl md:text-[50px] leading-9 md:leading-[62px] text-center font-semibold text-[#22263F] tracking-tight md:tracking-normal">
            Variants of main product
          </h1>
        </span>

        {/* Subheading */}
        <span className="w-full max-w-[90vw] md:w-[860px] mx-auto">
          <h2 className="font-medium text-base md:text-[22px] leading-6 md:leading-[38px] text-center text-gray-700 md:text-[#22263F]">
            Discover Your Perfect Glow: 6 Radiant Variants of Glow Essence
            Cream!
          </h2>
        </span>

        {/* Tabs Component */}
        <div className="container mx-auto px-4 py-6">
          <Tabs tabs={TAB_DATA} defaultTab={0} />
        </div>
      </div>
    </div>
  );
};

export default SubProducts;
