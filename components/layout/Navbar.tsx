"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Menu, PhoneCall, ShieldCheck, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Area', href: '/area' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="hidden bg-[var(--brand-night)] text-white md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs font-semibold sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck size={14} className="text-[var(--brand-amber)]" />
            <span><span className='text-[#C2101D]'>NICEIC</span> approved electricians - 24/7 emergency response</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="mailto:info@emergencyelectricalsolutionltd.co.uk" className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white">
              <Mail size={14} className="text-[var(--brand-amber)]" />
              info@emergencyelectricalsolutionltd.co.uk
            </Link>
            <Link href="tel:02039733443" className="flex items-center gap-2 text-white">
              <PhoneCall size={14} className="text-[var(--brand-amber)]" />
              020 3973 3443
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-amber)] to-[#C20E1E] md:top-9" />

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Emergency Electrical Solution home"
          onClick={() => setIsOpen(false)}
          className="relative flex h-[92px] w-48 shrink-0 items-center sm:w-52 lg:w-56"
        >
          <span className="relative block h-[93px] w-[900px]">
            <Image
              src="/logo5-cropped.png"
              alt="Emergency Electrical Solution Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-2 text-lg font-bold transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[#C20E1E] after:transition-all ${
                isActive(link.href)
                  ? 'text-[var(--brand-night)] after:w-full'
                  : 'text-slate-600 after:w-0 hover:text-[var(--brand-night)] hover:after:w-full'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            href="/contact"
            className="rounded-md bg-[#C20E1E] px-5 py-3 text-sm font-black text-white shadow-lg shadow-red-900/15 transition-all hover:-translate-y-0.5 hover:bg-[var(--brand-night)]"
          >
            Emergency Call
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[var(--brand-night)] transition-colors hover:bg-slate-50 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-xl shadow-slate-900/10 transition-all duration-300 md:hidden ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-sm font-bold ${
                isActive(link.href)
                  ? 'bg-slate-100 text-[var(--brand-night)]'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="tel:02039733443"
            onClick={() => setIsOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#C20E1E] px-5 py-4 text-sm font-black text-white"
          >
            <PhoneCall size={18} />
            Call Emergency Line
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
