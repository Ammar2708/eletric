"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
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
        alert("Message sent successfully!");
        formRef.current?.reset();
        setOpen(false);
      })
      .catch(() => alert("Failed to send message"))
      .finally(() => setIsPending(false));
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-[95%] max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >

            {/* Gradient Header */}
            <div className="bg-gradient-to-r from-[#C9A24A] via-[#E6C067] to-[#C0C0C0] p-6 text-black">
              <h3 className="text-2xl font-semibold">Get a Quote</h3>
              <p className="text-sm opacity-80 mt-1">
                Tell us about your project and we’ll get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <div className="bg-[#0f0f0f] p-6 md:p-8 text-white">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400">Full Name</label>
                  <input
                    name="user_name"
                    required
                    placeholder="John Carter"
                    className="bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/10 focus:border-[#E6C067] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400">Email</label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    className="bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/10 focus:border-[#E6C067] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400">Phone</label>
                  <input
                    name="user_phone"
                    required
                    placeholder="+44..."
                    className="bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/10 focus:border-[#E6C067] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs text-zinc-400">Service</label>
                  <input
                    name="service"
                    required
                    placeholder="Construction, Design..."
                    className="bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/10 focus:border-[#E6C067] outline-none"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-1">
                  <label className="text-xs text-zinc-400">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    className="bg-[#1A1A1A] px-4 py-3 rounded-lg border border-white/10 min-h-[120px] focus:border-[#E6C067] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="md:col-span-2 flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A24A] to-[#E6C067] text-black font-medium py-3 rounded-lg hover:opacity-90 transition"
                >
                  {isPending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-lg"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
