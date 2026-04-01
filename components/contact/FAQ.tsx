"use client";

import React from 'react';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: "01",
    question: "How many years of experience does Construktion have?",
    answer:
      "With over 25 years of industry leadership, we have successfully delivered over 400 high-complexity projects, ranging from sustainable urban developments to bespoke luxury residences."
  },
  {
    id: "02",
    question: "How big is your team of contractors?",
    answer:
      "Our core organization consists of 65 full-time licensed professionals, supported by a strictly vetted network of specialized subcontractors to ensure expert handling of every phase."
  },
  {
    id: "03",
    question: "Do you have case studies of past successful projects?",
    answer:
      "Absolutely. We maintain a comprehensive digital portfolio featuring architectural blueprints, site progression reports, and client testimonials for our flagship commercial and residential builds."
  },
  {
    id: "04",
    question: "Does Construktion have a project minimum?",
    answer:
      "To maintain our rigorous quality standards and dedicated resource allocation, we typically prioritize projects with a minimum valuation of $250,000. However, we assess all unique architectural inquiries."
  }
];

const FAQ = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section
      className="bg-white py-24 px-6 md:px-16 lg:px-32 text-[#1a1a1a] antialiased"
      aria-labelledby="faq-heading"
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4 block"
          >
            Information Center
          </motion.span>

          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tighter mb-6"
          >
            Frequently asked questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-xl text-base md:text-lg text-gray-500 font-light leading-relaxed"
          >
            Detailed insights into our operational standards, project management 
            philosophy, and technical capabilities.
          </motion.p>
        </header>

        {/* FAQ LIST */}
        <div className="border-t border-gray-100" role="list">
          {faqData.map((item, index) => (
            <motion.article
              key={item.id}
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-12 py-12 border-b border-gray-100 group transition-colors duration-500 hover:bg-gray-50/50 px-4 -mx-4"
            >
              
              {/* Question */}
              <div className="lg:col-span-5 flex items-start gap-6">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 mt-1.5 uppercase tabular-nums">
                  {item.id}
                </span>
                <h3 className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-gray-900">
                  {item.question}
                </h3>
              </div>

              {/* Answer */}
              <div className="lg:col-span-7 lg:pl-10">
                <p className="text-base md:text-[17px] text-gray-500 leading-relaxed font-light max-w-2xl">
                  {item.answer}
                </p>
              </div>

            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <footer className="mt-20 pt-10 border-t border-gray-50">
          <p className="text-sm text-gray-400">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-black font-medium border-b border-black hover:text-gray-600 hover:border-gray-600 transition-all ml-1"
            >
              Connect with our strategy team
            </a>
          </p>
        </footer>

      </div>
    </section>
  );
};

export default FAQ;