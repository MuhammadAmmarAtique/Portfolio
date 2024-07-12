import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
        <h4>Copyright &copy; 2024</h4>
        <div className="footerLinks">
          <a href="https://github.com/MuhammadAmmarAtique" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ammar-atique-0b409223a/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="mailTo:muhammadammaratique@gmail.com" target="_blank">
            <GrMail />
          </a>
          <a href="https://x.com/AmmarAtiqu" target="_blank">
            <FaTwitter />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
