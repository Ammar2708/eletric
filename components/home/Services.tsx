"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Wind, Zap, Settings2, Plus, RotateCcw } from "lucide-react";

const servicesData = [
  {
    id: 1,
    title: "Air conditioning",
    slug: "air-conditioning",
    details:
      "High-efficiency cooling systems, VRF installations, and routine maintenance for commercial spaces.",
    image: "/pic5.webp",
    icon: <Wind size={24} className="text-white" />,
    iconBg: "bg-blue-600", // Changed from Red
  },
  {
    id: 2,
    title: "Heating service",
    slug: "heating-service",
    details:
      "Industrial boiler repairs, central heating upgrades, and energy-efficient heat pump solutions.",
    image: "/pic6.webp",
    icon: <Settings2 size={24} className="text-white" />,
    iconBg: "bg-blue-600",
  },
  {
    id: 3,
    title: "Electrical panels",
    slug: "electrical-panels",
    details:
      "Full distribution board upgrades, EICR testing, and custom industrial control panel wiring.",
    image: "/pic7.webp",
    icon: <Zap size={24} className="text-white" />,
    iconBg: "bg-blue-600",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1333] mb-4">
              Comprehensive electrical <br className="hidden md:block" /> services
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-blue-600"
            />
          </motion.div>

          <Link href="/services">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-blue-100 text-sm"
            >
              VIEW ALL SERVICES <Plus size={18} />
            </motion.button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group perspective-1000 h-[420px]" // Reduced size from 550px
            >
              <Link
                href={`/services/${service.slug}`}
                className="block md:pointer-events-none h-full"
              >
                <div className="relative w-full h-full transition-all duration-700 preserve-3d md:group-hover:rotate-y-180 cursor-pointer md:pointer-events-auto">
                  
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-[2.5rem] overflow-hidden shadow-xl border border-zinc-100">
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Neutral Badge on Front (No Red) */}
                    <div
                      className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-md border border-white/20 z-20"
                    >
                      {service.icon}
                    </div>

                    <div className="absolute bottom-10 left-8 right-8 z-20">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-widest font-bold">
                        <RotateCcw size={12} />
                        Hover for details
                      </div>
                    </div>
                  </div>

                  {/* BACK (Matches Screenshot Style) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0a0a0f] rounded-[2.5rem] flex flex-col justify-center items-center p-8 text-center shadow-2xl">
                    
                    {/* Centered Blue Icon */}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-blue-600 mb-6 shadow-xl shadow-blue-600/20">
                      {React.cloneElement(service.icon, { size: 28 })}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-[220px]">
                      {service.details}
                    </p>

                    <div className="w-full max-w-[180px]">
                      <div className="w-full bg-white text-zinc-900 py-3 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 group-hover:bg-zinc-100 transition-all shadow-lg">
                        SHOW DETAILS <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;