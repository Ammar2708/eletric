"use client";

import { useState, useEffect } from "react";
import {
  Banknote,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Landmark,
  Lock,
  ShieldCheck,
  Smartphone,
  WalletCards,
} from "lucide-react";

const paymentMethods = [
  { name: "Visa", detail: "Credit & debit cards", icon: CreditCard },
  { name: "Mastercard", detail: "Fast card settlements", icon: WalletCards },
  { name: "American Express", detail: "Business card ready", icon: CreditCard },
  { name: "PayPal", detail: "Online payment option", icon: ShieldCheck },
  { name: "Apple Pay", detail: "Contactless mobile pay", icon: Smartphone },
  { name: "Google Pay", detail: "Tap-to-pay supported", icon: Smartphone },
  { name: "Cash", detail: "On-site payment", icon: Banknote },
  { name: "Pay by card", detail: "Secure terminal payment", icon: CreditCard },
  { name: "Online transfer", detail: "Invoice & bank transfer", icon: Landmark },
];

export default function PaySlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % paymentMethods.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + paymentMethods.length) % paymentMethods.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % paymentMethods.length);
  };

  const activeMethod = paymentMethods[current];
  const ActiveIcon = activeMethod.icon;

  return (
    <section className="bg-white px-6 py-16 lg:px-14 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase text-blue-600">
              <span className="h-[2px] w-10 bg-blue-600" />
              Secure Transactions
            </div>
            <h2 className="text-4xl font-bold leading-tight text-[#1a1333] md:text-5xl">
              Accepted payment methods
            </h2>
            <div className="mt-4 h-1 w-16 bg-blue-600" />
          </div>

          <div className="flex w-full items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-5 py-3 text-sm font-bold text-[#1B365D] shadow-sm md:w-auto">
            <Lock size={18} className="text-blue-600" />
            Payments processed securely after completion
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-4 shadow-xl shadow-blue-100/40 sm:p-6">
            <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {paymentMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <article
                      key={method.name}
                      className="grid min-h-[260px] w-full flex-shrink-0 gap-8 p-6 text-[#0B1221] sm:min-h-[300px] sm:p-9 md:grid-cols-[0.9fr_1.1fr] md:items-center"
                    >
                      <div className="flex h-44 items-center justify-center rounded-[1.5rem] bg-[#1B365D] text-white shadow-lg shadow-blue-100 sm:h-52">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                          <Icon size={44} />
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <p className="mb-3 text-xs font-black uppercase text-blue-600">
                          Payment Method
                        </p>
                        <h3 className="text-4xl font-black leading-none text-[#1a1333] sm:text-5xl">
                          {method.name}
                        </h3>
                        <p className="mt-4 max-w-sm text-base font-semibold leading-relaxed text-slate-500">
                          {method.detail}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                          <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
                            Accepted
                          </span>
                          <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500">
                            Invoice ready
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex justify-center gap-2 sm:justify-start">
                {paymentMethods.map((method, i) => (
                  <button
                    key={method.name}
                    type="button"
                    onClick={() => setCurrent(i)}
                    aria-label={`Show ${method.name}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      current === i ? "w-9 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-center gap-3">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label="Show previous payment method"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1B365D] transition-all hover:border-blue-600 hover:text-blue-600"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label="Show next payment method"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-100 transition-all hover:bg-[#1B365D]"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#1a1333] p-6 text-white shadow-xl shadow-slate-200/70">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                <ActiveIcon size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-white/50">Now showing</p>
                <p className="text-xl font-black">{activeMethod.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method, i) => (
                <button
                  key={method.name}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`min-h-16 rounded-2xl border px-3 py-3 text-left text-xs font-bold transition-all ${
                    current === i
                      ? "border-blue-500 bg-blue-600 text-white"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-blue-400 hover:text-white"
                  }`}
                >
                  {method.name}
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6 text-sm text-white/60">
              <ShieldCheck size={20} className="shrink-0 text-blue-400" />
              Secure options for call-outs, project work, and invoices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
