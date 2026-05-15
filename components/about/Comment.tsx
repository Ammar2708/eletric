"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "@/components/context/QuoteModalContext";
import { Play, Quote, Sparkles, Star, Video } from "lucide-react";

const testimonials = [
  {
    quote: "Exceptional Electrical Engineering",
    description:
      "The technical precision in our panel upgrades was outstanding. They are easily the most reliable contractors we've worked with in London.",
    author: "James Sterling",
    location: "London, UK",
    service: "Panel upgrade",
    duration: "00:42",
    video: "/v1.mp4",
    poster: "/pic8.webp",
  },
  {
    quote: "Modern Design & Flawless Execution",
    description:
      "They managed to blend our industrial requirements with a clean, modern aesthetic. Truly a high-end service for technical projects.",
    author: "Sarah Jenkins",
    location: "Manchester, UK",
    service: "Commercial fit-out",
    duration: "01:08",
    video: "/v1.mp4",
    poster: "/pic10.webp",
  },
  {
    quote: "Rapid Response & Reliability",
    description:
      "Their emergency electrical solutions saved our facility hours of downtime. Professional, transparent, and highly skilled.",
    author: "Robert Hall",
    location: "Surrey, UK",
    service: "Emergency repair",
    duration: "00:55",
    video: "/v1.mp4",
    poster: "/pic3.webp",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { setOpen } = useQuoteModal();

  const activeTestimonial = testimonials[index];

  return (
    <section className="overflow-hidden bg-[#f7f9fc] px-4 py-8 lg:px-8 lg:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-1.5 w-12 bg-[#FF4D4D]" />
                <p className="text-[#1a1333] text-[11px] font-black tracking-[0.4em] uppercase">
                  Client Video Stories
                </p>
              </div>

              <h2 className="text-3xl font-black uppercase leading-[0.95] tracking-normal text-[#1a1333] md:text-4xl">
                Real words <br />
                <span className="text-2xl font-light italic text-slate-300 md:text-3xl">
                  from real sites
                </span>
              </h2>

              <p className="max-w-md text-sm font-light leading-relaxed text-slate-500">
                A video-first wall of client moments, site results, and the kind of
                details that matter after the tools are packed away.
              </p>

              <div className="grid max-w-md grid-cols-3 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white shadow-sm">
                <div className="border-r border-slate-100 p-2.5">
                  <p className="text-lg font-black text-[#1a1333]">4.9</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Rating
                  </p>
                </div>
                <div className="border-r border-slate-100 p-2.5">
                  <p className="text-lg font-black text-[#1a1333]">24h</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Response
                  </p>
                </div>
                <div className="p-2.5">
                  <p className="text-lg font-black text-[#1a1333]">UK</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Coverage
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center">
                <button
                  onClick={() => setOpen(true)}
                  className="group relative overflow-hidden rounded-full bg-[#1a1333] px-7 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-500"
                >
                  <span className="relative z-10">Get a quote</span>
                  <div className="absolute inset-0 translate-y-full bg-[#2E5BFF] transition-transform duration-500 group-hover:translate-y-0" />
                </button>

                <div className="flex gap-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Show client video ${i + 1}`}
                      className={`h-2 transition-all duration-700 rounded-full ${
                        index === i ? "w-12 bg-[#2E5BFF]" : "w-4 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative order-1 w-full lg:order-2 lg:col-span-7">
            <div className="absolute left-6 top-4 hidden h-28 w-28 rounded-full border border-[#2E5BFF]/20 bg-white/70 backdrop-blur md:block" />
            <div className="absolute bottom-10 right-8 hidden h-40 w-40 rounded-full border border-[#FF4D4D]/20 bg-white/70 backdrop-blur md:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 overflow-hidden rounded-[1.25rem] border border-white bg-[#090617] p-2.5 shadow-2xl shadow-slate-300/80 md:p-3"
              >
                <div className="grid gap-3 md:grid-cols-[minmax(170px,230px)_1fr] md:items-stretch">
                  <div className="mx-auto w-full max-w-[230px] rounded-[1.25rem] border border-white/10 bg-black p-1.5 shadow-2xl shadow-black/40">
                    <div className="relative aspect-[9/16] max-h-[350px] overflow-hidden rounded-[1rem] bg-black">
                      <video
                        key={`${activeTestimonial.video}-${index}`}
                        className="h-full w-full object-contain"
                        poster={activeTestimonial.poster}
                        src={activeTestimonial.video}
                        playsInline
                        controls
                        preload="metadata"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[1rem] border border-white/10 bg-white/[0.04] p-4 text-white">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#1a1333]">
                          <Video size={15} className="text-[#2E5BFF]" />
                          Client reel
                        </span>
                        <span className="rounded-full bg-[#FF4D4D] px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white">
                          Press play for sound
                        </span>
                      </div>

                      <div className="mb-3 flex items-center gap-1 text-[#FFD166]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>

                      <Quote className="mb-3 text-[#FF4D4D]" size={26} fill="currentColor" />

                      <h3 className="text-lg font-bold leading-tight md:text-xl">
                        {activeTestimonial.quote}
                      </h3>

                      <p className="mt-2 text-xs font-light leading-relaxed text-white/75 md:text-sm">
                        &quot;{activeTestimonial.description}&quot;
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#1a1333]">
                        <Play size={15} fill="currentColor" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase tracking-widest">
                          {activeTestimonial.author}
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#75A7FF]">
                          {activeTestimonial.location} / {activeTestimonial.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative z-20 mt-2 grid gap-2 sm:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`group flex min-h-16 items-center gap-2.5 rounded-xl border p-2 text-left shadow-lg transition-all duration-500 ${
                    index === i
                      ? "border-[#2E5BFF] bg-white text-[#1a1333] shadow-blue-100"
                      : "border-white/70 bg-white/80 text-slate-500 backdrop-blur hover:border-[#2E5BFF]/60 hover:bg-white"
                  }`}
                >
                  <span
                    className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.poster})` }}
                  >
                    <span className="absolute inset-0 bg-[#1a1333]/30" />
                    <span className="absolute inset-0 flex items-center justify-center text-white">
                      <Play size={17} fill="currentColor" />
                    </span>
                  </span>
                  <span className="min-w-0">
                    <span className="mb-1 flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[#FF4D4D]">
                      <Sparkles size={12} />
                      {testimonial.service}
                    </span>
                    <span className="block truncate text-sm font-black">
                      {testimonial.author}
                    </span>
                    <span className="block truncate text-xs font-semibold text-slate-400">
                      {testimonial.location}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
