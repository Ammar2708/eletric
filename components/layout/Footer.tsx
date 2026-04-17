
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';
import { IoAlertCircle, IoShieldCheckmarkSharp } from 'react-icons/io5';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Industrial Wiring',
    'EICR Reports',
    'Emergency Repairs',
    'Fault Finding',
    'Commercial Fit-outs'
  ];

  return (
    <footer className="relative bg-[#0B1221] text-white border-t border-white/5">

      
      
      {/* Increased padding-top for desktop to accommodate your absolute positioning, but kept it sensible for mobile */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 md:pt-30 pb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand */}
          {/* Added h-[300px] on lg only to maintain your absolute positioning layout on desktop */}
          <div className="flex flex-col space-y-6 relative h-auto lg:h-[300px]">
            <div className="relative lg:absolute lg:bottom-22 h-20 lg:h-85 w-full"> 
              <Image 
                src="/logo3.png" 
                alt="Emergency Electrical Solution" 
                fill 
                className="object-contain object-left brightness-0 invert" 
                priority
              />
            </div>

            {/* Hidden absolute positioning on mobile (static), kept on desktop (lg:absolute) */}
            <p className="static lg:absolute lg:bottom-32 text-[14px] text-gray-400 leading-relaxed max-w-xs mt-4 lg:mt-0">
              Delivering reliable, compliant, and high-performance electrical solutions across industrial and commercial sectors.
            </p>

            <div className="flex gap-3 static lg:absolute lg:bottom-23 mt-6 lg:mt-0">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-[#2563eb] hover:border-[#2563eb]/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:pl-10">
            <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">
              Expertise
            </h3>
            <ul className="space-y-4 text-[14px]">
              {services.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-white flex items-center gap-2 group transition-all"
                  >
                    <span className="h-[1px] w-0 bg-[#2563eb] group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6 text-[14px] text-gray-400">
              <div className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-[#2563eb]" size={14} />
                </div>
                <span className="leading-relaxed">
                  123 Construction Way<br />
                  Industrial Park, London, UK
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <FaPhoneAlt className="text-[#2563eb]" size={14} />
                </div>
                <Link href="tel:+44123456789" className="text-white hover:text-[#2563eb] transition font-medium">
                    +44 (0) 123 456 789
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-[#2563eb]" size={14} />
                </div>
                <Link href="mailto:info@emergencyelectricalsolutionltd.co.uk" className="hover:text-white transition break-all md:break-normal">
                    info@emergencyelectricalsolution <br className="hidden md:block" />ltd.co.uk
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Emergency Card */}
          <div className="lg:pl-4">
            <div className="bg-[#161f32] border border-white/5 rounded-2xl p-7 space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/10 blur-3xl group-hover:bg-blue-600/20 transition-all" />
              
              <div className="flex items-center gap-3">
                <div className="relative">
                    <IoAlertCircle size={28} className="text-red-500 relative z-10" />
                    <div className="absolute inset-0 bg-red-500/20 blur-lg animate-pulse" />
                </div>
                <h3 className="font-bold text-lg tracking-tight">24/7 Support</h3>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Critical electrical failure? Our rapid response team is on standby 24 hours a day.
              </p>

              <Link 
                href="tel:0000000000"
                className="flex items-center justify-center bg-[#1D4ED8] hover:bg-[#2563eb] text-white transition-all py-4 text-sm font-bold tracking-wide rounded-xl shadow-lg active:scale-[0.98]"
              >
                Request Emergency Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Darker contrast */}
      <div className="border-t border-white/5 bg-[#080d17] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <IoShieldCheckmarkSharp className="text-[#1D4ED8]" size={16}/>
            <span>© {currentYear} Emergency Electrical Solution</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;