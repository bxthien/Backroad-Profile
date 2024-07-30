import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="py-20 px-9 bg-[#c5c5c5] grid items-center justify-center">
      <div className="flex items-center justify-center mb-6">
        <Logo />
      </div>

      <p className="copyright">
        Development by Bui Xuan Thien
        <span id="date"> {new Date().getFullYear()}</span>. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
