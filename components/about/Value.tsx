"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Value = () => {
  const coreValues = [
    "Professional and excellence",
    "Team and growth",
    "Innovation and sustainability",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[40px] bg-[#1a1333]">
          
          {/* LEFT SIDE: CONTENT (Navy Background) */}
          <div className="lg:col-span-6 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-4xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
                Our mission: creating lasting impact through quality and care
              </h2>
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-lg">
                At Emergency Electrical, our mission is to deliver exceptional 
                electrical services that create a lasting impact for our clients 
                and communities.
              </p>

              {/* Checkmark List */}
              <ul className="space-y-5">
                {coreValues.map((value, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="text-white group-hover:text-[#2E5BFF] transition-colors">
                      <CheckCircle2 size={24} strokeWidth={2.5} />
                    </div>
                    <span className="text-white text-lg font-medium tracking-wide">
                      {value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="lg:col-span-6 relative h-[400px] lg:h-auto min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 p-4 lg:p-8"
            >
              <div className="relative w-full h-full rounded-[30px] overflow-hidden shadow-2xl">
                <Image
                  src="/pic9.webp" // Replace with your high-voltage worker image
                  alt="Electricians working on utility pole"
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay to match the brand depth */}
                <div className="absolute inset-0 bg-[#1a1333]/10 mix-blend-multiply" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Value;