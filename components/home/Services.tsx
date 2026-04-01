"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ClipboardCheck, HardHat, 
  Ruler, Briefcase, Layers, PenTool 
} from 'lucide-react';

const servicesData = [
  { id: 1, slug: "project-planning", title: "Project Planning", desc: "Strategic, end-to-end planning that integrates meticulous foresight with high-performance execution.", icon: <ClipboardCheck size={40} strokeWidth={1.2} />, mt: "lg:mt-20" },
  { id: 2, slug: "modern-construction", title: "Modern Construction", desc: "Delivering structural excellence through advanced building techniques and premium material selection.", icon: <HardHat size={40} strokeWidth={1.2} />, mt: "lg:mt-10" },
  { id: 3, slug: "design-strategy", title: "Design Strategy", desc: "Architectural precision tailored to your vision, blending modern aesthetics with functional elegance.", icon: <Ruler size={40} strokeWidth={1.2} />, mt: "lg:mt-0" },
  { id: 4, slug: "project-management", title: "Project Management", desc: "Seamless coordination of resources and timelines to ensure every milestone is met with absolute precision.", icon: <Briefcase size={40} strokeWidth={1.2} />, mt: "lg:mt-20" },
  { id: 5, slug: "custom-builds", title: "Custom Builds", desc: "Bespoke construction solutions designed to adapt to unique landscapes and specific client requirements.", icon: <Layers size={40} strokeWidth={1.2} />, mt: "lg:mt-10" },
  { id: 6, slug: "technical-execution", title: "Technical Execution", desc: "High-performance engineering and finishing that meet the most rigorous modern industry standards.", icon: <PenTool size={40} strokeWidth={1.2} />, mt: "lg:mt-0" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section className="bg-white py-10 px-5 md:px-8 lg:p-14 overflow-hidden">

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 mb-10 lg:mb-12">

        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-black">
            A comprehensive <br /> set of services
          </h2>

          <div className="flex flex-wrap gap-3 pt-6">
            <Link href='/contact'>
              <button className="bg-[#D4AF37] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#B8860B] transition-all">
                GET A QUOTE
              </button>
            </Link>
            <Link href='/services'>
              <button className="border border-[#C0C0C0]/40 text-neutral-500 px-6 py-2 rounded-full font-bold text-sm hover:text-black hover:border-black transition-all">
                Browse all services
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }}
          className="lg:pl-14 text-[#5D575B] text-sm md:text-base leading-relaxed"
        >
          <p>
            Prime Build Work Limited offers a comprehensive, end-to-end experience by 
            integrating strategic planning with expert technical execution. We deliver 
            high-performance, scalable solutions tailored to the highest modern standards.
          </p>
        </motion.div>

      </div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 lg:gap-x-8"
      >
        {servicesData.map((service) => (
          <motion.div 
            key={service.id}
            variants={itemVariants}
            className={`group border-t border-[#c0bcbc] pt-4 ${service.mt}`}
          >
            <Link href={`/services/${service.slug}`} className="block cursor-pointer">
              
              {/* Arrow */}
              <div className="flex justify-end mb-4">
                <ArrowUpRight 
                  className="text-[#A6A2A4] group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  size={18} 
                />
              </div>

              {/* Icon */}
              <div className="mb-4 text-[#292728]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#A6A2A4] leading-relaxed text-xs lg:text-sm">
                {service.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;