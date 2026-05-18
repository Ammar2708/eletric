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
    <footer className="relative bg-[var(--brand-night)] text-white border-t border-slate-200">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-amber)] to-[#C20E1E]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-14 md:pt-20 pb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col space-y-5">
            <div className="inline-flex w-fit rounded-lg bg-white px-3 py-2 shadow-lg shadow-black/20">
              <div className="relative h-[72px] w-48 lg:w-56">
                <Image
                  src="/logo5-cropped.png"
                  alt="Emergency Electrical Solution"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-[14px] text-slate-400 leading-relaxed max-w-xs">
              Delivering reliable, compliant, and high-performance electrical solutions across industrial and commercial sectors.
            </p>

            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-[var(--brand-amber)] hover:border-[var(--brand-amber)]/50 transition-all duration-300"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">
              Expertise
            </h3>
            <ul className="space-y-4 text-[14px]">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white flex items-center gap-2 group transition-all"
                  >
                    <span className="h-[2px] w-0 rounded-full bg-[#C20E1E] group-hover:w-3 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-[13px] uppercase tracking-[0.2em] mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6 text-[14px] text-slate-400">
              <div className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt className="text-[var(--brand-amber)]" size={14} />
                </div>
                <span className="leading-relaxed">
                  London, UK
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <FaPhoneAlt className="text-[var(--brand-amber)]" size={14} />
                </div>
                <Link href="tel:02039733443" className="text-white hover:text-[var(--brand-amber)] transition font-medium">
                  (020) 397-33443
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[var(--brand-amber)]" size={14} />
                </div>
                <Link href="mailto:info@emergencyelectricalsolutionltd.co.uk" className="hover:text-white transition break-all md:break-normal">
                  info@emergencyelectricalsolution <br className="hidden md:block" />ltd.co.uk
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:pl-4">
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-amber)] to-[#C20E1E]" />
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[var(--brand-amber)]/15 blur-3xl group-hover:bg-[#C20E1E]/20 transition-all" />

              <div className="flex items-center gap-3">
                <div className="relative">
                  <IoAlertCircle size={28} className="text-[#C20E1E] relative z-10" />
                  <div className="absolute inset-0 bg-[#C20E1E]/20 blur-lg animate-pulse" />
                </div>
                <h3 className="font-bold text-lg tracking-tight">24/7 Support</h3>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                Critical electrical failure? Our rapid response team is on standby 24 hours a day.
              </p>

              <Link
                href="tel:02039733443"
                className="flex items-center justify-center bg-[#C20E1E] hover:bg-white hover:text-[var(--brand-night)] text-white transition-all py-4 text-sm font-black tracking-wide rounded-md shadow-lg active:scale-[0.98]"
              >
                Request Emergency Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#050815] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <IoShieldCheckmarkSharp className="text-[var(--brand-amber)]" size={16}/>
            <span>Copyright {currentYear} Emergency Electrical Solution</span>
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
