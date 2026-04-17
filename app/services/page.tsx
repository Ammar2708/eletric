"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Clock, Shield } from "lucide-react";
import { SERVICES } from '@/data/servicesData';
import { motion, AnimatePresence, Transition, Variants } from "framer-motion";

/**
 * FIXED: By using 'as const', we tell TypeScript this is a 
 * fixed tuple of 4 numbers, matching the Cubic Bezier requirement.
 */
const premiumSlow: Transition = {
  duration: 1.2,
  ease: [0.16, 1, 0.3, 1] as const,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: premiumSlow 
  },
};

export default function ServicesPage() {
  const [query, setQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredServices = SERVICES.filter((service) =>
    service.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-zinc-900 selection:bg-blue-100">
      
      {/* Professional Header */}
      <section className="pt-28 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={premiumSlow}
          className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-blue-600" />
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-blue-600">Specialist Catalog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A0A0F]">
              Expertise <span className="text-zinc-400 font-light italic">Sectors.</span>
            </h1>
          </div>
          
          <div className="w-full md:w-72 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
            <input
              type="text"
              placeholder="Filter services..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-zinc-200 bg-white shadow-sm focus:ring-1 focus:ring-blue-600 outline-none transition-all text-xs"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* Optimized Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div key={service.slug} variants={cardVariants} layout>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}

function ServiceCard({ service }: { service: any }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="[perspective:2000px] h-[360px] w-full group cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`relative w-full h-full transition-all duration-[1000ms] [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}>
        
        {/* FRONT: Zooming Image + Label */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-white">
          <motion.div 
            className="relative w-full h-full"
            animate={{ scale: flipped ? 1.1 : 1 }}
            // FIXED: Added 'as const' here too to prevent build errors
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <Image 
              src={service.image} 
              alt={service.title} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent opacity-95" />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-base font-bold text-white tracking-tight leading-tight mb-3">{service.title}</h3>
            <div className="h-[1.5px] w-6 bg-blue-600 transition-all duration-700 group-hover:w-full group-hover:bg-white/20" />
          </div>
        </div>

        {/* BACK: Detailed View */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#0F1115] [transform:rotateY(180deg)] [backface-visibility:hidden] p-6 flex flex-col items-center justify-center text-center">
          
          <div className="relative mb-4">
             <div className="absolute inset-0 bg-blue-600 blur-[20px] opacity-20 rounded-full" />
             <div className="relative w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-blue-500 border border-zinc-700">
                <service.icon size={22} strokeWidth={1.5} />
             </div>
          </div>

          <h3 className="text-sm font-bold text-white mb-2 tracking-tight">{service.title}</h3>
          
          <p className="text-zinc-500 text-[10px] leading-relaxed mb-6 max-w-[150px]">
            Technical emergency solutions for specialized environments.
          </p>
          
          <Link 
            href={`/services/${service.slug}`}
            className="w-full py-2.5 bg-white text-black font-bold text-[8px] uppercase tracking-[0.2em] rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-2"
          >
            View Specification <ArrowRight size={10} />
          </Link>

          <div className="absolute bottom-5 flex justify-center gap-3 opacity-30">
             <div className="flex items-center gap-1 text-[7px] text-zinc-400 font-bold uppercase tracking-widest">
                <Clock size={8} /> On-Site
             </div>
             <div className="flex items-center gap-1 text-[7px] text-zinc-400 font-bold uppercase tracking-widest">
                <Shield size={8} /> ISO
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}