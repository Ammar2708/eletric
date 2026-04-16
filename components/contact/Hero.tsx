// "use client";

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaArrowRight,
// } from "react-icons/fa";
// import { Loader2, Mail, Phone, Globe, ShieldCheck } from "lucide-react";

// const Hero = () => {
//   const formRef = useRef<HTMLFormElement | null>(null);
//   const [isPending, setIsPending] = useState(false);

//   const contactInfo = {
//     email: "info@primebuildworks.co.uk",
//     phone: "+44 7412 345678",
//     status: "Available for Projects",
//     socials: [
//       { Icon: FaFacebookF, href: "#" },
//       { Icon: FaInstagram, href: "#" },
//       { Icon: FaLinkedinIn, href: "#" },
//     ],
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     setIsPending(true);

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u1kx4s8",
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z3ea6h1",
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "3R2aN4QZ5TNoPtPTP"
//       )
//       .then(() => {
//         alert("Message received. Our team will contact you shortly.");
//         formRef.current?.reset();
//       })
//       .catch((err) => {
//         console.error("Error:", err);
//         alert("Transmission failed.");
//       })
//       .finally(() => setIsPending(false));
//   };

//   return (
//     <section className="min-h-screen bg-[#050505] text-[#E4E4E7] font-sans selection:bg-blue-500/30">
//       <div className="max-w-[1200px] mx-auto px-6 py-24">
        
//         {/* SECTION TITLE */}
//         <div className="mb-16">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="w-8 h-[1px] bg-blue-500"></span>
//             <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.3em]">
//               Contact Interface
//             </span>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
//             System <span className="text-blue-500">Inquiry.</span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* LEFT: TECH SPECS / CONTACT */}
//           <div className="lg:col-span-4 space-y-8">
//             <div className="bg-[#0A0A0A] border border-zinc-800 p-6 rounded-lg">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
//                 <span className="text-xs text-zinc-400 uppercase tracking-widest">{contactInfo.status}</span>
//               </div>

//               <div className="space-y-6">
//                 <div className="group">
//                   <p className="text-[10px] text-zinc-500 uppercase mb-1">Direct Line</p>
//                   <a href={`tel:${contactInfo.phone}`} className="text-lg font-mono hover:text-blue-500 transition-colors">
//                     {contactInfo.phone}
//                   </a>
//                 </div>

//                 <div className="group">
//                   <p className="text-[10px] text-zinc-500 uppercase mb-1">Support Email</p>
//                   <a href={`mailto:${contactInfo.email}`} className="text-lg font-mono hover:text-blue-500 transition-colors">
//                     {contactInfo.email}
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="p-4 border border-zinc-900 bg-[#080808] rounded-md">
//                 <ShieldCheck className="text-blue-500 mb-2" size={20} />
//                 <p className="text-xs text-zinc-300 font-medium text-white">Certified Team</p>
//               </div>
//               <div className="p-4 border border-zinc-900 bg-[#080808] rounded-md">
//                 <Globe className="text-blue-500 mb-2" size={20} />
//                 <p className="text-xs text-zinc-300 font-medium text-white">UK Wide</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: THE FORM */}
//           <div className="lg:col-span-8">
//             <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   name="user_name"
//                   required
//                   placeholder="IDENTIFY NAME"
//                   className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono text-sm"
//                 />
//                 <input
//                   name="user_email"
//                   type="email"
//                   required
//                   placeholder="EMAIL ADDRESS"
//                   className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-mono text-sm"
//                 />
//               </div>

//               <select 
//                 name="service"
//                 className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-blue-500 transition-all font-mono text-sm appearance-none text-zinc-400"
//               >
//                 <option value="Electrical">Electrical Installation</option>
//                 <option value="Construction">Building & Renovation</option>
//                 <option value="Maintenance">System Maintenance</option>
//               </select>

//               <textarea
//                 name="message"
//                 required
//                 placeholder="MESSAGE SPECIFICATIONS..."
//                 rows={5}
//                 className="w-full bg-[#0A0A0A] border border-zinc-800 p-4 rounded-md focus:outline-none focus:border-blue-500 transition-all font-mono text-sm resize-none"
//               />

//               <button
//                 type="submit"
//                 disabled={isPending}
//                 className="group w-full md:w-auto px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
//               >
//                 {isPending ? (
//                   <Loader2 className="animate-spin" />
//                 ) : (
//                   <span className="uppercase tracking-[0.2em] text-xs">Execute Send</span>
//                 )}
//                 <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";
import { Loader2, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isPending, setIsPending] = useState(false);

  const contactInfo = {
    email: "info@primebuildworks.co.uk",
    phone: "+44 7412 345678",
    address: "London, United Kingdom",
    socials: [
      { Icon: FaFacebookF, href: "#" },
      { Icon: FaInstagram, href: "#" },
      { Icon: FaLinkedinIn, href: "#" },
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsPending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_u1kx4s8",
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
      <div className="max-w-[1100px] mx-auto px-6 py-20">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-20 mt-10">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Let’s start your <br />
            <span className="text-indigo-600">next project.</span>
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Whether it's a high-end construction build or specialized electrical work, 
            our team is ready to deliver professional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: INFO CARDS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                      <Mail size={18} className="text-indigo-600" />
                    </div>
                    <a href={`mailto:${contactInfo.email}`} className="font-medium hover:text-indigo-600 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
                      <Phone size={18} className="text-indigo-600" />
                    </div>
                    <a href={`tel:${contactInfo.phone}`} className="font-medium hover:text-indigo-600 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-zinc-200 flex gap-4">
                {contactInfo.socials.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-10 h-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center hover:bg-indigo-600 transition-all shadow-md shadow-zinc-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-start gap-3">
              <CheckCircle2 className="text-indigo-600 shrink-0" size={20} />
              <p className="text-xs text-indigo-900 font-medium leading-relaxed">
                Response time: We typically reply within 24 business hours.
              </p>
            </div>
          </div>

          {/* RIGHT: CLEAN FORM */}
          <div className="lg:col-span-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider">Your Name</label>
                  <input
                    name="user_name"
                    required
                    placeholder="Full Name"
                    className="w-full bg-zinc-100 border-transparent border focus:border-indigo-600 focus:bg-white p-4 rounded-xl transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider">Email Address</label>
                  <input
                    name="user_email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full bg-zinc-100 border-transparent border focus:border-indigo-600 focus:bg-white p-4 rounded-xl transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider">Select Service</label>
                <select 
                  name="service"
                  className="w-full bg-zinc-100 border-transparent border focus:border-indigo-600 focus:bg-white p-4 rounded-xl transition-all outline-none appearance-none cursor-pointer"
                >
                  <option value="Construction">Construction & Renovation</option>
                  <option value="Electrical">Electrical Engineering</option>
                  <option value="Design">Interior Design</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase text-zinc-400 tracking-wider">Project Details</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="w-full bg-zinc-100 border-transparent border focus:border-indigo-600 focus:bg-white p-4 rounded-xl transition-all outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full md:w-auto px-10 py-4 bg-zinc-900 text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all active:scale-95 disabled:opacity-50"
              >
                {isPending ? <Loader2 className="animate-spin" /> : "Send Message"}
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