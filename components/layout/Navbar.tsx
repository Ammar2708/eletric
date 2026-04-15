// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X, PhoneCall } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '/services' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   return (
//     <nav className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 md:h-24">
          
//           {/* Logo Section - Now Image Only */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link 
//               href="/" 
//               className="block relative w-16 h-16 md:w-84 md:h-48 transition-transform duration-200 hover:scale-105 active:scale-95"
//             >
//               <Image
//                 src="/logo.png" 
//                 alt="Emergency Electrical Solution Logo"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-slate-600 hover:text-[#1B365D] font-bold transition-colors duration-200 text-sm uppercase tracking-widest"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link 
//               href="tel:07000000000"
//               className="bg-[#1B365D] hover:bg-[#254a80] text-white px-6 py-3 rounded-none flex items-center gap-2 font-black transition-all shadow-md hover:shadow-xl active:scale-95"
//             >
//               <PhoneCall size={18} />
//               24/7 EMERGENCY
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-[#1B365D] focus:outline-none p-2"
//             >
//               {isOpen ? <X size={32} /> : <Menu size={32} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div className={`md:hidden bg-white border-b border-slate-200 transition-all ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-6 pt-4 pb-10 space-y-4 text-center">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               onClick={() => setIsOpen(false)}
//               className="block py-4 text-lg font-black text-slate-800 uppercase tracking-tighter border-b border-slate-50"
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             href="tel:07000000000"
//             className="w-full mt-6 bg-[#1B365D] text-white p-5 rounded-none flex justify-center items-center gap-3 font-black text-lg shadow-lg"
//           >
//             <PhoneCall size={22} />
//             CALL NOW
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-22">
          
          {/* Logo Section - Preserved Desktop Dimensions */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="block relative w-44 h-32 md:w-84 md:h-48 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <Image
                src="/logo.png" 
                alt="Emergency Electrical Solution Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile, shown on md+ */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-[#1B365D] font-bold transition-colors duration-200 text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="tel:07000000000"
              className="bg-[#1B365D] hover:bg-[#254a80] text-white px-6 py-3 rounded-none flex items-center gap-2 font-black transition-all shadow-md hover:shadow-xl active:scale-95"
            >
              <PhoneCall size={18} />
              24/7 EMERGENCY
            </Link>
          </div>

          {/* Mobile Menu Button - Shown only on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1B365D] focus:outline-none p-2 transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Menu Overlay - Maintains your exact Design & White Theme */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="px-6 pt-4 pb-10 space-y-1 text-center flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-4 text-lg font-black text-slate-800 uppercase tracking-tighter border-b border-slate-50 hover:bg-slate-50 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile CTA Button - Preserved your style but centered for mobile */}
          <div className="pt-4">
            <Link
              href="tel:07000000000"
              className="w-full bg-[#1B365D] text-white p-5 rounded-none flex justify-center items-center gap-3 font-black text-lg shadow-lg active:bg-[#254a80]"
            >
              <PhoneCall size={22} />
              CALL NOW
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;