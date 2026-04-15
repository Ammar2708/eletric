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
    iconBg: "bg-[#FF4D4D]",
  },
  {
    id: 2,
    title: "Heating service",
    slug: "heating-service",
    details:
      "Industrial boiler repairs, central heating upgrades, and energy-efficient heat pump solutions.",
    image: "/pic6.webp",
    icon: <Settings2 size={24} className="text-white" />,
    iconBg: "bg-[#2E5BFF]",
  },
  {
    id: 3,
    title: "Electrical panels",
    slug: "electrical-panels",
    details:
      "Full distribution board upgrades, EICR testing, and custom industrial control panel wiring.",
    image: "/pic7.webp",
    icon: <Zap size={24} className="text-white" />,
    iconBg: "bg-[#4B2C82]",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a1333] mb-6">
              Comprehensive electrical <br className="hidden md:block" /> services
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-[#FF4D4D]"
            />
          </motion.div>

          <Link href="/services">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-[#2E5BFF] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-100"
            >
              VIEW ALL SERVICES <Plus size={20} />
            </motion.button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group perspective-1000 h-[550px]"
            >
              {/* ✅ WHOLE CARD CLICKABLE ON MOBILE */}
              <Link
                href={`/services/${service.slug}`}
                className="block md:pointer-events-none h-full"
              >
                <div className="relative w-full h-full transition-all duration-700 preserve-3d md:group-hover:rotate-y-180 cursor-pointer md:pointer-events-auto">
                  
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden rounded-[40px] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1f] via-[#1a1333]/40 to-transparent" />

                    <div
                      className={`absolute top-10 right-10 w-14 h-14 rounded-full flex items-center justify-center ${service.iconBg} shadow-xl z-20 border-4 border-white/10`}
                    >
                      {service.icon}
                    </div>

                    <div className="absolute bottom-12 left-10 right-10 z-20">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/60 text-xs uppercase">
                        <RotateCcw size={14} className="animate-spin-slow" />
                        Hover for info
                      </div>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1a1333] rounded-[40px] flex flex-col justify-center items-center p-10 text-center shadow-2xl border-2 border-[#2E5BFF]/20">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${service.iconBg} mb-8`}
                    >
                      {React.cloneElement(service.icon, { size: 40 })}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-lg mb-10">
                      {service.details}
                    </p>

                    {/* ❌ Removed nested Link */}
                    <div className="w-full">
                      <button className="w-full bg-white text-[#1a1333] py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#2E5BFF] hover:text-white transition-all">
                        SHOW DETAILS <ArrowRight size={20} />
                      </button>
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