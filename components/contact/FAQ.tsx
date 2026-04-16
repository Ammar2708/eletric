"use client";

import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: "01",
    question: "What is your average response time for emergencies?",
    answer:
      "We aim to have a certified engineer at your doorstep within 60 to 90 minutes for urgent calls across London, 24 hours a day, 365 days a year."
  },
  {
    id: "02",
    question: "Do you charge a call-out fee?",
    answer:
      "We provide transparent pricing. While there is a standard emergency call-out fee to cover immediate dispatch, we provide a clear breakdown of costs before any repair work begins."
  },
  {
    id: "03",
    question: "What should I do if I smell burning near my fuse box?",
    answer:
      "Switch off your main power supply immediately if it is safe to do so and call us. Avoid touching any charred or hot components. Our engineers will prioritize your call as a potential fire hazard."
  },
  {
    id: "04",
    question: "Do you handle commercial power failures?",
    answer:
      "Yes. We understand that downtime equals lost revenue. Emergency Electrical Solution specializes in rapid restoration for retail, hospitality, and office environments to get your business back online."
  }
];

const FAQ = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-32 text-zinc-900 antialiased">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] uppercase tracking-[0.4em] text-red-600 font-bold mb-4 block"
          >
            24/7 Rapid Response
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Emergency <span className="text-zinc-400">Assistance.</span>
          </h2>
          <p className="max-w-xl text-lg text-zinc-500 leading-relaxed">
            Quick answers to help you navigate electrical failures and safety concerns with Emergency Electrical Solution.
          </p>
        </header>

        <div className="border-t border-zinc-100">
          {faqData.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-12 py-14 border-b border-zinc-100 group hover:bg-zinc-50/80 px-4 -mx-4 transition-all"
            >
              <div className="lg:col-span-5 flex items-start gap-6">
                <span className="text-xs font-bold text-red-600 mt-1.5 uppercase tabular-nums">{item.id}</span>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
                  {item.question}
                </h3>
              </div>
              <div className="lg:col-span-7 lg:pl-10">
                <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;