"use client";

import React from 'react';
import Link from 'next/link';
import { PhoneCall, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

const Hero = () => {
  return (
    // Changed min-h-screen to min-h-[90vh] or flex-shrink to ensure it fits better on shorter laptop screens
    <section className="relative min-h-screen lg:min-h-[850px] flex items-center pt-28 overflow-hidden bg-[var(--brand-night)]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(#24a8ff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }}
        />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[var(--brand-blue)]/25 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-[var(--brand-amber)]/20 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-blue)]/10 border border-[var(--brand-blue-light)]/30 text-[var(--brand-blue-light)] text-[10px] md:text-xs font-bold uppercase tracking-widest">
              <Zap size={14} fill="currentColor" />
              Certified Industrial Specialists
            </div>

            {/* Responsive Text Sizes: text-3xl (mobile) -> text-5xl (tablet) -> text-7xl (desktop) */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Rapid Response <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-blue-light)] via-[var(--brand-amber)] to-[var(--brand-orange)]">
                Electrical Solutions
              </span>
            </h1>

            {/* Adjusted max-width and text size for better readability on small screens */}
            <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Minimizing downtime with expert industrial and commercial electrical services. 
              Available 24/7 for critical failures across the UK.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="tel:02039733443"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-[var(--brand-red)] to-[var(--brand-orange)] text-white px-6 md:px-8 py-4 md:py-5 font-black transition-all shadow-xl shadow-red-950/20 active:scale-95 w-full sm:w-auto justify-center"
              >
                <PhoneCall size={20} className="text-white transition-colors" />
                <span className="tracking-tighter text-base md:text-lg">EMERGENCY CALL-OUT</span>
              </Link>

              <Link 
                href="/services"
                className="flex items-center gap-2 text-white font-bold hover:text-[var(--brand-amber)] transition-colors px-6 py-4 group"
              >
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Badges - Stacked on mobile, grid on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5">
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-1 justify-center lg:justify-start">
                <Clock className="text-[var(--brand-amber)] shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold text-sm">60m Response</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Emergency Average</p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-1 justify-center lg:justify-start">
                <ShieldCheck className="text-[var(--brand-blue-light)] shrink-0" size={24} />
                <div>
                  <p className="text-[#C20E1E] font-bold text-sm">NICEIC Approved</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Fully Accredited</p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 lg:gap-1 justify-center lg:justify-start">
                <Zap className="text-[var(--brand-orange)] shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold text-sm">24/7 Support</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Round the Clock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative hidden lg:block pr-10">
            <div className="relative z-10 bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-night)] border border-white/10 p-2 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#050810]">
                 <img src="h1.png" alt="Industrial Electrician" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-[var(--brand-blue)]/10 mix-blend-overlay" />
              </div>
            </div>
            
            {/* Decorative Card Overlay - Adjusted position to stay within screen */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-[var(--brand-navy)] p-5 shadow-2xl border border-[var(--brand-amber)]/30">
              <p className="text-[var(--brand-amber)] font-black text-2xl md:text-3xl">99.9%</p>
              <p className="text-white text-[10px] font-bold uppercase tracking-widest">Uptime Guaranteed</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
