"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#080808] flex items-center justify-center font-sans lg:top-13">
      
      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/bg11.png" // Path to your background image
            alt="Electrical Service Background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay to make text pop */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/40" />
        </motion.div>
      </div>

      {/* 🔥 CONTENT CONTAINER */}
      <div className="relative z-20 w-full px-6 py-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[0.95] uppercase mb-8">
              About Our <br className="hidden md:block" />
              Electrical Practice
            </h1>
          </motion.div>

          {/* Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed tracking-wide">
              At Emergency Electrical, we specialize in providing top-tier electrical services for 
              residential, commercial, and industrial clients across the UK. With years of expertise, 
              our licensed electricians are committed to delivering safe, reliable, and efficient 
              electrical solutions, merging technical integrity with unrivaled aesthetic precision.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;