import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2025</h4>
      <div className="footerLinks">
        <a
          href="https://github.com/MuhammadAmmarAtique"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-ammar-atique-0b409223a/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:muhammadammaratique@yahoo.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
        <a href="https://x.com/AmmarAtiqu" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
