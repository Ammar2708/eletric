// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section className="relative  w-full overflow-hidden bg-[#080808] pb-15 pt-27">
      
//       {/* 🔥 FULL BACKGROUND IMAGE LAYER */}
//       <div className="absolute inset-0 z-0 ">
//         <motion.div 
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="relative h-full w-full"
//         >
//           <Image
//             src="/bg1.png" 
//             alt="Architecture"
//             fill
//             priority
//             className="object-cover object-right lg:object-center"
//           />
          
//           {/* Subtle dark tint over the whole image */}
//           <div className="absolute inset-0 bg-black/20" />
          
//           {/* THE CRITICAL GRADIENT: This creates the "Split" look from the video */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
//         </motion.div>
//       </div>

//       {/* 🔥 CONTENT LAYER */}
//       <div className="relative z-20 h-full w-full flex items-center">
//         <div className="px-6 sm:px-12 md:px-24 w-full">
          
//           <div className="max-w-4xl relative">
//             {/* Gold Vertical Accent Line */}
//             <div className="absolute -left-10 top-2 w-[1.5px] h-40 bg-[#D4AF37]/60 hidden xl:block" />

//             {/* Small Animated Heading */}
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-[#D4AF37] text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-6"
//             >
//               Prime Build Works Limited
//             </motion.p>

//             {/* Main Bold Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//               className="text-[11vw] sm:text-[9vw] lg:text-[75px] font-black text-white leading-[0.8] tracking-tighter uppercase"
//             >
//               Creating <br /> 
//               <span className="inline-block">Spaces</span>
//             </motion.h1>

//             {/* Script/Serif Subheading */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 0.8 }}
//               className="font-serif italic text-4xl md:text-5xl lg:text-5xl text-white/90 mt-2 lowercase tracking-tight"
//             >
//               that inspire
//             </motion.p>

//             {/* Description Paragraph */}
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//               className="text-gray-400 text-sm md:text-base max-w-md mt-9 leading-relaxed font-light tracking-wide"
//             >
//               Delivering bespoke architectural excellence and high-end construction across the UK. 
//               We combine structural precision with luxury craftsmanship.
//             </motion.p>

//             {/* Action Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 1.2 }}
//               className="flex  gap-5 mt-10 sm:flex"
//             >
//               <a href="/contact">
//               <button className="rounded-full bg-[#D4AF37] text-black font-bold text-[11px] uppercase tracking-[0.2em] px-5 py-3 hover:bg-[#DDBB52] transition-colors duration-300 cursor-pointer md:px-10 md:py-4">
//                 Get a Quote →
//               </button>
//               </a>
//               <a href="/project">
//               <button className="rounded-full border border-white/20 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-5 py-3 md:px-10 md:py-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
//                 Our Projects
//               </button></a>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Bottom Indicator */}
//       <div className="absolute left-10 bottom-10 hidden md:flex flex-col items-center gap-4 z-30">
        
//         <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
//       </div>

//     </section>
//   );
// };

// export default Hero;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#080808] pb-20 pt-28">

      {/* 🔥 BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/bg1.png"
            alt="Construction Site"
            fill
            priority
            className="object-cover object-right lg:object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent" />
        </motion.div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-20 flex items-center w-full">
        <div className="px-6 sm:px-12 md:px-24 w-full">
          <div className="max-w-4xl relative">

            {/* Accent Line */}
            <div className="absolute -left-10 top-2 w-[2px] h-40 bg-[#D4AF37]/60 hidden xl:block" />

            {/* Company Name */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#D4AF37] text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-4"
            >
              Prime Build Works Limited
            </motion.p>

            {/* Industry Tag */}
            <div className="text-gray-500 text-xs tracking-[0.4em] mb-6">
              INDUSTRIAL • CIVIL • INFRASTRUCTURE
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[12vw] sm:text-[10vw] md:text-[70px] font-black text-white leading-[0.9] tracking-tight uppercase"
            >
              Building <br />
              Reliable Projects
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-serif italic text-3xl md:text-4xl text-white/90 mt-3 lowercase"
            >
              with precision and safety
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-gray-400 text-sm md:text-base max-w-md mt-8 leading-relaxed"
            >
              Delivering high-quality construction solutions with precision,
              safety, and on-time execution across industrial, civil, and
              infrastructure projects.
            </motion.p>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 mt-6 text-xs text-gray-400"
            >
              <span>✔ 10+ Projects</span>
              <span>✔ Skilled Engineers</span>
              <span>✔ On-Time Delivery</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-4 mt-10 flex-wrap"
            >
              <a href="/contact">
                <button className="rounded-full bg-[#D4AF37] text-black font-bold text-[11px] uppercase tracking-[0.2em] px-6 py-3 md:px-10 md:py-4 hover:bg-[#E5C158] transition duration-300">
                  Get Free Quote →
                </button>
              </a>

              <a href="/project">
                <button className="rounded-full border border-white/20 text-white font-bold text-[11px] uppercase tracking-[0.2em] px-6 py-3 md:px-10 md:py-4 hover:bg-white hover:text-black transition duration-300">
                  View Our Projects
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute left-10 bottom-10 hidden md:flex flex-col items-center gap-4 z-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;