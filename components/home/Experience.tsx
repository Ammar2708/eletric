"use client";

import React from 'react';
import { ShieldCheck, Award, Users, HardHat, CheckCircle2, Factory } from 'lucide-react';

const Experience = () => {
  const stats = [
    { label: 'Years of Excellence', value: '15+', icon: <Award className="text-[#1B365D]" size={24} /> },
    { label: 'Projects Delivered', value: '2,500', icon: <CheckCircle2 className="text-[#1B365D]" size={24} /> },
    { label: 'Expert Engineers', value: '40+', icon: <HardHat className="text-[#1B365D]" size={24} /> },
    { label: 'Contract Partners', value: '180+', icon: <Users className="text-[#1B365D]" size={24} /> },
  ];

  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
        <Factory size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content: Text & Accreditation */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-10 h-[2px] bg-[#3b82f6]"></span>
                <span className="text-[#3b82f6] font-bold text-xs uppercase tracking-[0.2em]">
                  Established Industry Leaders
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-[#0B1221] leading-tight tracking-tighter">
                Proven Expertise in <br />
                <span className="text-[#1B365D]">Complex Infrastructure</span>
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                For over a decade, we have been the silent engine behind major industrial 
                and commercial operations. Our team provides the technical precision 
                required for high-stakes electrical environments, ensuring safety, 
                compliance, and zero-interruption performance.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {[
                "Platinum Tier NICEIC Approved Contractors",
                "Full Health & Safety Compliance (CHAS/SafeContractor)",
                "Specialized in Industrial Rapid-Response Systems",
                "Bespoke Commercial Energy Management"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-50 p-1 rounded-full">
                    <CheckCircle2 size={18} className="text-[#3b82f6]" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Insurance Badge */}
            <div className="inline-flex items-center gap-5 p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
              <div className="bg-[#1B365D] p-3 rounded-xl shadow-md">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <div>
                <p className="text-[#0B1221] font-bold text-lg">Fully Insured & Bonded</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Comprehensive £10M Public Liability</p>
              </div>
            </div>
          </div>

          {/* Right Content: Modern Stats Card */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white border border-slate-100 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-blue-500 transition-colors duration-500">
                  <span className="group-hover:text-white transition-colors duration-500">
                    {stat.icon}
                  </span>
                </div>
                <h4 className="text-5xl font-black text-[#1B365D] mb-2 tracking-tighter">
                  {stat.value}
                </h4>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Accreditation Ribbon */}
        <div className="mt-24 pt-10 border-t border-slate-100">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {/* Replace these text placeholders with actual partner/accreditation logo images */}
            <span className="text-[#0B1221] font-black text-2xl italic tracking-tighter">NICEIC</span>
            <span className="text-[#0B1221] font-black text-2xl italic tracking-tighter">CHAS</span>
            <span className="text-[#0B1221] font-black text-2xl italic tracking-tighter">SafeContractor</span>
            <span className="text-[#0B1221] font-black text-2xl italic tracking-tighter">Constructionline</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;