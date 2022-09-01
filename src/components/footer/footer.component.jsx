import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© WALEWAHAB &nbsp; {new Date().getFullYear()} All Rights Reserved</div>
    </div>
  );
};

export default FooterPanel;
