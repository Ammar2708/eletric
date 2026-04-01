"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-5 relative min-h-[85vh] w-full overflow-hidden bg-[#080808] flex items-center justify-center">
      
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/bg4.png" 
            alt="Luxury Architecture"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
        </motion.div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-20 w-full px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-[1px] bg-[#D4AF37]/40" />
            <p className="text-[#D4AF37] text-[8px] md:text-[10px] font-medium tracking-[0.7em] uppercase">
              About Our Practice
            </p>
            <div className="w-6 h-[1px] bg-[#D4AF37]/40" />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[11vw] md:text-[52px] lg:text-[64px] font-extrabold text-[#ECD280] leading-[1.05] tracking-tight uppercase mb-4">
              Prime Build <br />
              <span 
                className="text-transparent" 
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
              >
                Works Limited
              </span>
            </h1>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed mb-6">
              &ldquo;We don&apos;t just build structures; we craft the silent witnesses of your legacy.&rdquo;
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-400 text-[12px] md:text-[14px] max-w-md font-light tracking-wide mb-8 leading-relaxed opacity-80">
              Based in the UK, we specialize in high-end developments, 
              merging structural integrity with unrivaled aesthetic precision.
            </p>

            <a href="/project">
              <button className="cursor-pointer group relative overflow-hidden border border-[#D4AF37]/20 px-8 py-3 transition-all duration-500 hover:border-[#D4AF37]">
                <span className="relative z-10 text-white text-[9px] font-semibold uppercase tracking-[0.35em] group-hover:text-black transition-colors duration-500">
                  Discover Our Projects
                </span>
                <div className="absolute inset-0 z-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;