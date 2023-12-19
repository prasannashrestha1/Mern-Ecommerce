import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center text-xl">
        All Rights Reserved @Prasanna Shrestha
      </h1>
      <p className="text-center text-lg mt-5 gap-4">
        <Link to="/about" className="gap-4">
          About
        </Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/policy">Privacy and Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
