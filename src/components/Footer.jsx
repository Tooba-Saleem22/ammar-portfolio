// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-[#ceba9e] py-12 px-6">
      {/* Divider */}
      <div className="border-t border-[#ceba9e]/20 mt-10 mb-10"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side */}
        <div className="text-left">
          <h3 className="text-2xl font-light mb-1">Ammar Awan</h3>
          <p className="text-sm font-light text-[#ceba9e]/80">
            ammarawan@example.com
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white hover:scale-110 transition-transform duration-300"
              >
                <Icon />
              </a>
            ),
          )}
        </div>

        {/* Right Side Button */}
        <div>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#ceba9e] text-black px-4 py-2  font-light hover:bg-[#bfa77c] transition-transform duration-300"
          >
            Let's Connect
            <span className="inline-block transform rotate-45 text-xl">➔</span>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ceba9e]/20 mt-10"></div>

      {/* Bottom Text */}
      <div className="text-center text-sm font-light mt-6 text-[#ceba9e]/60">
        &copy; {new Date().getFullYear()} Ammar Awan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
