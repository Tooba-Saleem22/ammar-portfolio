import React from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen mt-10 flex flex-col justify-center items-center text-center bg-black ">
      {/* Heading */}
      <h1
        className="text-5xl md:text-9xl font-light mb-6"
        style={{ color: "#ceba9e" }}
      >
        Web Designer <span className="block">& Developer</span>
      </h1>

      {/* Subtext */}
      <p
        className="text-lg md:text-xl font-light mb-12"
        style={{ color: "#ceba9e" }}
      >
        Premium Web Design, Development, and SEO services to help your business
        stand out.
      </p>

      {/* Services arrow with border */}
      <div className="flex flex-col items-center gap-2">
        <div className="p-3 rounded-full border-2 border-[#ceba9e] bg-transparent">
          <ArrowDown className=" w-6 h-6 text-[#ceba9e]" />
        </div>
        <span className="uppercase tracking-wider font-semibold text-[#ceba9e]">
          Services
        </span>
      </div>
    </section>
  );
}
