import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-[#AE8625] text-center py-4">
      Developed by dleventh @{currentYear}
    </div>
  );
};

export default Footer;
