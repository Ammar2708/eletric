"use client";

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Loc = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-16 overflow-hidden text-zinc-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-[11px] uppercase tracking-[0.4em] text-indigo-600 font-bold block mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Visit our headquarters <br /> in London
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch shadow-2xl shadow-zinc-200 rounded-3xl overflow-hidden border border-zinc-100">
          
          {/* MAP */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[500px] bg-zinc-100">
            <iframe
              title="Prime Build Works Location"
              /* Replace the src below with your actual Google Maps Embed link */
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340003!2d-0.241681!3d51.5285582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1712800000000!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full grayscale contrast-110 hover:grayscale-0 transition-all duration-700 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* DETAILS */}
          <div className="lg:col-span-5 relative flex items-center bg-zinc-50">
            <div className="py-12 px-8 lg:px-12 space-y-10">
              
              {/* Location Info */}
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
                  Main Office
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  London, UK
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Our central hub manages all high-end residential and commercial projects across the UK. 
                  From architectural planning to advanced electrical engineering, this is where we 
                  coordinate our specialist teams.
                </p>
              </div>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 gap-y-8 pt-8 border-t border-zinc-200">
                
                <div className="flex items-start gap-4">
                  <Mail className="text-indigo-600 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">
                      Email Inquiries
                    </p>
                    <p className="text-sm font-semibold hover:text-indigo-600 transition-colors cursor-pointer">
                      info@primebuildworks.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-indigo-600 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">
                      Phone Number
                    </p>
                    <p className="text-sm font-semibold">
                      +44 7412 345678
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-indigo-600 mt-1" size={18} />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">
                      Studio Address
                    </p>
                    <p className="text-sm font-semibold leading-relaxed">
                      123 Business Quarter, Canary Wharf <br />
                      London, United Kingdom E14 5AB
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Loc;