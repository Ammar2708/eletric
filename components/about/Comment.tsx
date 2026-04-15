"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { Quote } from "lucide-react"; // Added for a professional touch

const testimonials = [
  {
    quote: "Exceptional Electrical Engineering",
    description:
      "The technical precision in our panel upgrades was outstanding. They are easily the most reliable contractors we've worked with in London.",
    author: "James Sterling",
    location: "London, UK",
    image: "/pic8.webp", // Using your project images
  },
  {
    quote: "Modern Design & Flawless Execution",
    description:
      "They managed to blend our industrial requirements with a clean, modern aesthetic. Truly a high-end service for technical projects.",
    author: "Sarah Jenkins",
    location: "Manchester, UK",
    image: "/pic10.webp",
  },
  {
    quote: "Rapid Response & Reliability",
    description:
      "Their emergency electrical solutions saved our facility hours of downtime. Professional, transparent, and highly skilled.",
    author: "Robert Hall",
    location: "Surrey, UK",
    image: "/pic3.webp",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setOpen } = useQuoteModal();

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="bg-white py-24 px-6 lg:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Static Content (Brand Identity) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-1.5 bg-[#FF4D4D]" />
                <p className="text-[#1a1333] text-[11px] font-black tracking-[0.4em] uppercase">
                  Client Feedback
                </p>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-[#1a1333] tracking-tighter leading-[0.9] uppercase">
                What our <br />
                <span className="text-gray-300 italic font-light text-4xl">
                  Customers say
                </span>
              </h2>

              <p className="text-gray-500 text-lg max-w-md font-light leading-relaxed">
                We take pride in delivering technical excellence across the UK, 
                fostering long-term partnerships through reliability and precision.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
                <button
                  onClick={() => setOpen(true)}
                  className="group relative overflow-hidden bg-[#1a1333] text-white px-10 py-4 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all duration-500"
                >
                  <span className="relative z-10">Get a quote</span>
                  <div className="absolute inset-0 bg-[#2E5BFF] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>

                {/* DOTS NAVIGATION */}
                <div className="flex gap-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 transition-all duration-700 rounded-full ${
                        index === i ? "w-12 bg-[#2E5BFF]" : "w-4 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: The Card Slider */}
          <div 
            className="lg:col-span-7 order-1 lg:order-2 relative h-[500px] w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl border border-gray-100"
              >
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].author}
                  fill
                  className="object-cover brightness-[0.6] grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end bg-gradient-to-t from-[#1a1333] via-[#1a1333]/30 to-transparent text-white">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Quote className="text-[#FF4D4D] mb-6" size={40} fill="currentColor" />
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight max-w-lg">
                      {testimonials[index].quote}
                    </h3>

                    <p className="text-base text-white/70 max-w-md mb-8 font-light leading-relaxed italic">
                      "{testimonials[index].description}"
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="h-[1px] w-10 bg-[#2E5BFF]" />
                      <div>
                        <p className="text-xs uppercase tracking-widest font-black text-white">
                          {testimonials[index].author}
                        </p>
                        <p className="text-[10px] uppercase tracking-widest text-[#2E5BFF] font-bold">
                          {testimonials[index].location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;