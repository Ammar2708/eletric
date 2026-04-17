"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Loader2, Zap, Phone, X } from "lucide-react";
import { useQuoteModal } from "@/components/context/QuoteModalContext";

const QuoteModal = () => {
  const { open, setOpen } = useQuoteModal();
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u1kx4s8";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z3ea6h1";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "3R2aN4QZ5TNoPtPTP";

    setIsPending(true);

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        alert("Emergency Request Received. We will contact you immediately.");
        formRef.current?.reset();
        setOpen(false);
      })
      .catch(() => alert("Failed to send request. Please call us directly."))
      .finally(() => setIsPending(false));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#050810]/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)] border border-blue-500/20"
          >
            {/* Urgent Header */}
            <div className="bg-[#0A1224] border-b border-blue-500/20 p-7 pt-10 relative overflow-hidden">
                {/* Decorative background pulse */}
                <div className="absolute top-19 right-0 p-4">
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/50 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live Dispatch</span>
                    </div>
                </div>

              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <Zap className="text-white fill-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight uppercase">Request Assistance</h3>
              </div>
              <p className="text-slate-400 text-sm">
                Complete the form below for rapid electrical support.
              </p>
            </div>

            {/* Industrial Form Section */}
            <div className="bg-[#0A1224] p-6 md:p-8">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Contact Name</label>
                  <input
                    name="user_name"
                    required
                    placeholder="e.g. Michael Smith"
                    className="bg-[#0F172A] text-white px-4 py-3 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Emergency Phone</label>
                  <input
                    name="user_phone"
                    required
                    type="tel"
                    placeholder="+44 000 000 000"
                    className="bg-[#0F172A] text-white px-4 py-3 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="email@company.com"
                    className="bg-[#0F172A] text-white px-4 py-3 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Nature of Fault</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Briefly describe the electrical issue (e.g. Power failure, burning smell, tripping breaker)..."
                    className="bg-[#0F172A] text-white px-4 py-3 rounded-lg border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all min-h-[100px] placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="md:col-span-2 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-900/20 uppercase tracking-widest text-sm"
                >
                  {isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                        <Phone size={18} />
                        Submit Request
                    </>
                  )}
                </button>
              </form>

              {/* Call-back note */}
              <p className="text-center text-[10px] text-slate-500 mt-6 uppercase tracking-[0.2em]">
                Average Response Time: <span className="text-blue-400">Under 60 Minutes</span>
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-10 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;