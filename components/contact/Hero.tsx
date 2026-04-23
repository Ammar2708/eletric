"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import {
  Loader2,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock3,
  BadgeCheck,
} from "lucide-react";

const Hero = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isPending, setIsPending] = useState(false);

  const contactInfo = {
    email: "info@emergencyelectricalsolutionltd.co.uk",
    phone: "(020) 397-33443",
    address: "London, United Kingdom",
    socials: [
      { Icon: FaFacebookF, href: "#" },
      { Icon: FaInstagram, href: "#" },
      { Icon: FaLinkedinIn, href: "#" },
    ],
  };

  const contactHighlights = [
    {
      icon: Clock3,
      label: "Response Window",
      value: "Within 24 business hours",
    },
    {
      icon: BadgeCheck,
      label: "Project Support",
      value: "Residential, commercial, and emergency enquiries",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "London and surrounding areas",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsPending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_vbz5594",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z3ea6h1",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "3R2aN4QZ5TNoPtPTP"
      )
      .then(() => {
        alert("Inquiry sent successfully.");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Submission failed.");
      })
      .finally(() => setIsPending(false));
  };

  return (
    <section className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-indigo-100">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <div className="mb-20 mt-10 max-w-2xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Let&apos;s start your <br />
            <span className="text-indigo-600">next project.</span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-500">
            Whether it&apos;s a high-end construction build or specialized
            electrical work, our team is ready to deliver professional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-4">
            <div className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_30px_80px_-45px_rgba(15,23,42,0.35)]">
              

              <div className="space-y-8 p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-100">
                      <Mail size={18} className="text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="mt-1 block break-all text-sm font-semibold text-zinc-900 transition-colors hover:text-indigo-600"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-100">
                      <Phone size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                        Phone
                      </p>
                      <a
                        href="tel:02039733443"
                        className="mt-1 block text-sm font-semibold text-zinc-900 transition-colors hover:text-indigo-600"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-zinc-100">
                      <MapPin size={18} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-400">
                        Office
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-900">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>

                

                <div className="border-t border-zinc-200 pt-6">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                    Follow Us
                  </p>
                  <div className="flex gap-3">
                    {contactInfo.socials.map(({ Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-900 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-600 hover:text-white"
                      >
                        <Icon size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Your Name
                  </label>
                  <input
                    name="user_name"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-transparent bg-zinc-100 p-4 outline-none transition-all focus:border-indigo-600 focus:bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    Email Address
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-transparent bg-zinc-100 p-4 outline-none transition-all focus:border-indigo-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Select Service
                </label>
                <select
                  name="service"
                  className="w-full cursor-pointer appearance-none rounded-xl border border-transparent bg-zinc-100 p-4 outline-none transition-all focus:border-indigo-600 focus:bg-white"
                >
                  <option value="Construction">Construction & Renovation</option>
                  <option value="Electrical">Electrical Engineering</option>
                  <option value="Design">Interior Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="w-full resize-none rounded-xl border border-transparent bg-zinc-100 p-4 outline-none transition-all focus:border-indigo-600 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-900 px-10 py-4 font-bold text-white transition-all hover:bg-indigo-600 active:scale-95 disabled:opacity-50 md:w-auto"
              >
                {isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Send Message"
                )}
                <FaArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
