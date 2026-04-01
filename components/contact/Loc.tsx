"use client";

import React from 'react';

const Loc = () => {
  return (
    <section className="relative bg-white py-14 px-6 md:px-12 lg:px-16 overflow-hidden text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-5xl font-semibold tracking-tight  leading-tight">
            Visit our flagship office <br /> in Los Angeles
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* MAP */}
          <div className="lg:col-span-7 relative z-10 min-h-[300px] lg:min-h-[450px] shadow-xl">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.2436849!3d34.0522342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec270186e2ebdc1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full grayscale contrast-110 brightness-105 hover:grayscale-0 transition-all duration-700 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* DETAILS */}
          <div className="lg:col-span-5 relative flex items-center">
            
            <div className="absolute inset-0 bg-[#F9F9F9] -z-10 lg:-translate-x-10" />
            
            <div className="py-12 px-6 lg:pl-16 lg:pr-10 space-y-8">
              
              {/* Location Info */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  Los Angeles, CA
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm font-light">
                  Our West Coast headquarters is located in the heart of the design district. 
                  We host our primary architectural studio and client consultation lounge here, 
                  focusing on sustainable urban development.
                </p>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 pt-5 border-t border-gray-200">
                
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                    Email address
                  </p>
                  <p className="text-xs md:text-sm font-medium hover:text-gray-500 transition-colors cursor-pointer">
                    losangeles@construktion.com
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                    Phone number
                  </p>
                  <p className="text-xs md:text-sm font-medium">
                    +1 (414) 903 - 6781
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-bold">
                    Studio Address
                  </p>
                  <p className="text-xs md:text-sm font-medium leading-relaxed">
                    123 Design District, Suite 400 <br />
                    Los Angeles, California 90012
                  </p>
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