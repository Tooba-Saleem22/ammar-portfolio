// src/pages/AboutPage.js
import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import CTA from "../components/CTA";

const AboutPage = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "WordPress",
    "SEO",
    "UI/UX",
    "Canva",
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-center px-4 mt-8 md:mt-16"
      >
        <h1 className="text-5xl md:text-9xl font-light mb-3 md:mb-6 text-[#ceba9e]">
          About Me
        </h1>
        <p className="text-base md:text-xl text-[#ceba9e]/80 mb-8 max-w-2xl mx-auto">
          I’m a passionate frontend developer focused on building modern,
          responsive and visually engaging digital experiences.
        </p>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-2"
      >
        <div className="p-3 rounded-full border-2 border-[#ceba9e] bg-transparent">
          <FaArrowDown className="w-4 h-4 text-[#ceba9e]" />
        </div>
        <span className="uppercase tracking-wider mb-10 font-semibold text-[#ceba9e]">
          About Me
        </span>
      </motion.div>

      {/* Continuous Marquee */}
      <div className="w-full overflow-hidden border-t border-b border-[#ceba9e]/40 py-1 relative bg-black">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...skills, ...skills, ...skills].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-[#ceba9e] text-sm px-4"
            >
              <span>{skill}</span>
              <span className="text-[#ceba9e] font-light">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Personal Introduction Card */}
      <div className="w-full max-w-4xl px-4 md:px-0 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#181716] border border-[#ceba9e] p-6 md:p-10 rounded-md shadow-lg"
        >
          <h2 className="text-xl md:text-1xl text-[#ceba9e] mb-4 font-light text-left">
            Ammar Awan
          </h2>

          {/* Image like service cards */}
          <div className="overflow-hidden rounded-md mb-6">
            <img
              src="img1.png" // replace with your image path
              alt="Ammmar Awan"
              className="w-full h-[280px]  md:h-[480px] object-cover"
            />
          </div>

          <h3 className="text-xl md:text-2xl text-[#ceba9e]/80 mb-4 font-light text-left">
            Your Partner in Bringing Your Web Design Vision to Life
          </h3>
          <p className="text-[#ceba9e]/90 text-sm md:text-base mb-2">
            As a freelance web designer and developer, I combine creativity and
            technical expertise to deliver user-friendly web experiences. My
            approach emphasizes collaboration and clear communication, making
            complex technical concepts easy to understand. I’m dedicated to
            quality and staying updated with the latest trends, ensuring
            exceptional results for every project.
          </p>
        </motion.div>
      </div>

      <CTA />
    </div>
  );
};

export default AboutPage;
