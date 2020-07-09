import React from "react";

import { FaHeart } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="https://www.instagram.com/speak.up.tech/">
          <FaInstagram size="40"  color="#fff"/>
        </a>
        <a href="https://www.youtube.com/c/SpeakupTech">
          <FaYoutube size="40"  color="#fff"/>
        </a>  
      </div>
      <p className="footer__copyright">Made with by <FaHeart color="#B51942"/> Speak up Tech</p>
    </footer>
  )
}

export default Footer;