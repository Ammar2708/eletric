"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: DUAL IMAGE COMPOSITION */}
          <div className="relative h-[500px] md:h-[600px] flex items-center">
            {/* Primary Image (Larger, Right-aligned) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-4/5 h-4/5 ml-auto rounded-[40px] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/pic7.webp" // Replace with your circuit breaker close-up
                alt="Electrical precision"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Secondary Image (Overlapping, Left-aligned) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute left-0 bottom-0 w-3/5 h-3/5 rounded-[40px] overflow-hidden shadow-2xl z-20 border-8 border-white"
            >
              <Image
                src="/pic8.webp" // Replace with your electrician working image
                alt="Expert at work"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-50 rounded-full blur-3xl -z-10 opacity-50" />
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1333] tracking-tighter leading-[1.1]">
                The values that shape <br />
                <span className="text-[#2E5BFF]">our commitment</span> <br />
                to excellence
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                At the core of our practice lies a set of values that guide 
                everything we do. Integrity, precision, and accountability are 
                the pillars of our work.
              </p>
              
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed italic border-l-4 border-[#FF4D4D] pl-6">
                We hold ourselves to the highest standards of excellence, ensuring 
                that every project, whether big or small, meets the expectations 
                of quality and reliability.
              </p>
            </motion.div>

            {/* Quick Stats/Values Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-8 pt-6"
            >
              <div>
                <p className="text-[#1a1333] font-black text-xs uppercase tracking-widest mb-2">Integrity</p>
                <div className="h-1 w-full bg-gray-100 rounded-full">
                   <div className="h-full w-full bg-[#FF4D4D] rounded-full" />
                </div>
              </div>
              <div>
                <p className="text-[#1a1333] font-black text-xs uppercase tracking-widest mb-2">Precision</p>
                <div className="h-1 w-full bg-gray-100 rounded-full">
                   <div className="h-full w-full bg-[#2E5BFF] rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;