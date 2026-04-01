"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  Lightbulb, 
  Globe, 
  Users,
  Flag 
} from 'lucide-react';

const values = [
  {
    title: "Quality",
    description: "An exceptional quality that can't be beaten. We merge structural precision with bespoke luxury craftsmanship.",
    icon: <Trophy className="w-7 h-7 stroke-[1.5px]" />,
  },
  {
    title: "Commitment",
    description: "Our mission is to deliver high-quality work, ensuring every detail reflects our commitment to superior quality.",
    icon: <Award className="w-7 h-7 stroke-[1.5px]" />,
  },
  {
    title: "Innovation",
    description: "Transforming architectural visions into permanent legacies through advanced techniques and modern materials.",
    icon: <Lightbulb className="w-7 h-7 stroke-[1.5px]" />,
  },
  {
    title: "Openness",
    description: "Clear communication and transparent processes at every stage of the design and construction journey.",
    icon: <Globe className="w-7 h-7 stroke-[1.5px]" />,
  },
  {
    title: "Teamwork",
    description: "Integrating strategic planning with expert execution through a collaborative, end-to-end team experience.",
    icon: <Users className="w-7 h-7 stroke-[1.5px]" />,
  },
  {
    title: "Leadership",
    description: "Redefining the UK skyline by setting the standard for architectural excellence and structural integrity.",
    icon: <Flag className="w-7 h-7 stroke-[1.5px]" />,
  },
];

const Value = () => {
  return (
    <section className="bg-white py-14 px-6 sm:px-10 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight"
          >
            The values that drive <br /> everything we do
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              
              {/* Icon */}
              <div className="text-black mb-4 transition-transform duration-500 group-hover:scale-110">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-black mb-3 uppercase tracking-wide">
                {value.title}
              </h3>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gray-300 mb-4" />

              {/* Description */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[240px]">
                {value.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Value;