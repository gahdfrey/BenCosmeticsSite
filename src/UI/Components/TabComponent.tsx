"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Tab {
  heading: string;
  title: string;
  image: string;
  link: string;
  cardIngredients: string;
  xata_id?: string; // Add xata_id to the interface
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
}

const Tabs = ({ tabs, defaultTab = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabRefs = useRef<HTMLButtonElement[]>([]);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    if (tabRefs.current[defaultTab]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[defaultTab];
      setHighlightStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [defaultTab]);

  const updateHighlight = (index: number) => {
    if (tabRefs.current[index]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[index];
      setHighlightStyle({ left: offsetLeft, width: offsetWidth });
    }
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto py-4 md:py-8">
      {/* Tab Buttons - Hidden on mobile, shown on md+ */}
      <div className="hidden md:flex justify-center mb-6">
        <div className="relative flex border border-[#E4E4E7] rounded-md overflow-hidden p-1">
          <span
            className="absolute inset-y-1 bg-[#AE8625] rounded-lg transition-all duration-300 ease-out transform-gpu will-change-transform "
            style={{
              left: `${highlightStyle.left}px`,
              width: `${highlightStyle.width}px`,
            }}
          />
          {tabs.map((tab, index) => (
            <button
              key={index}
              ref={(el) => {
                if (el) tabRefs.current[index] = el;
              }}
              onMouseEnter={() => updateHighlight(index)}
              className={`relative px-4 py-2 font-medium transition-colors duration-100 ease-in-out z-10 ${
                activeTab === index ? "text-white" : "text-[#AAAAAA]"
              }`}
            >
              {tab.heading}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full max-w-4xl mx-auto py-4 md:py-8">
        {/* Mobile: List all cards with entrance animation */}
        <div className="md:hidden flex flex-col gap-6">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="bg-[#F6FAF3] rounded-lg shadow-lg p-4 flex flex-col gap-4 animate-mobile-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col gap-4">
                <h1 className="text-[#828282] text-[19.5px] leading-[100%] font-semibold mb-2 tracking-[-2%]">
                  {tab.heading}
                </h1>
                <span>
                  <h2 className="font-medium text-[#22263F] text-[30.9px] leading-[100%] tracking-[-2%] w-[255.11px]">
                    {tab.title}
                  </h2>
                </span>
                <Image
                  src={tab.image}
                  alt={tab.heading}
                  width={600}
                  height={300}
                  className="object-contain rounded-md w-full h-full"
                />
              </div>
              <Link
                href={`/products/${tab.xata_id}`}
                className="px-5 py-2 bg-[#AE8625] text-white rounded-md hover:bg-[#906b1d] transition-colors duration-200 text-sm self-start"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop: Single active card with animation */}
        <div
          key={activeTab}
          className="relative bg-[#F6FAF3] hidden rounded-lg shadow-lg p-4 md:p-8 min-h-[300px] md:min-h-[523.52px] w-full md:flex flex-col justify-center gap-4 md:gap-6 overflow-hidden animate-card"
        >
          <div className="max-w-full md:max-w-md flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-[#828282] text-base leading-tight md:leading-[100%] font-semibold mb-2 tracking-[-2%]">
              {tabs[activeTab].heading}
            </h1>
            <span>
              <h2 className="font-medium text-[#22263F] w-[345.11px] text-[35.9px] leading-tight md:leading-[100%] tracking-[-2%]">
                {tabs[activeTab].title}
              </h2>
              <h2 className="font-medium text-[#828282] text-[20.9px] leading-[100%] tracking-[-2%] w-[255.11px] mt-6">
                {tabs[activeTab].cardIngredients}
              </h2>
            </span>
            <Link
              href={`/products/${tabs[activeTab].xata_id}`}
              className="px-4 py-1 md:px-5 md:py-2 bg-[#AE8625] text-white rounded-md hover:bg-[#906b1d] transition-colors duration-200 text-xs md:text-sm self-center md:self-start"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-4 md:mt-0 md:absolute md:top-[35px] md:right-[-5px] w-full md:w-[500px] h-[200px] md:h-[600px]">
            <Image
              src={tabs[activeTab].image}
              alt={tabs[activeTab].heading}
              width={600}
              height={300}
              className="object-contain rounded-md w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes glow {
          0% {
            opacity: 0;
            transform: scaleX(0.8);
          }
          50% {
            opacity: 0.3;
            transform: scaleX(1.2);
          }
          100% {
            opacity: 0;
            transform: scaleX(0.8);
          }
        }
        .animate-glow {
          animation: glow 1.5s ease-in-out infinite;
        }

        @keyframes mobile-card {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-mobile-card {
          animation: mobile-card 0.5s ease-out forwards;
        }

        @keyframes card {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-card {
          animation: card 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Tabs;
