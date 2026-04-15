// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { ArrowUpRight, Search } from 'lucide-react';
// import { SERVICES } from '@/data/servicesData';

// export default function ServicesPage() {
//   const [query, setQuery] = useState("");

//   const filteredServices = SERVICES.filter((service) =>
//     service.title.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <main className="min-h-screen bg-[#0A0A0A] text-white">

//       {/* HERO */}
//       <section className="text-center py-24 px-6">
//         <h1 className="text-5xl md:text-7xl font-serif font-semibold tracking-tight leading-tight">
//           <span className="bg-gradient-to-r from-[#C9A24A] to-[#E6C067] bg-clip-text text-transparent">
//           Set of Services
//           </span>
//         </h1>

//         <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
//           Delivering premium construction solutions with precision, durability,
//           and refined craftsmanship.
//         </p>

//         {/* SEARCH BAR */}
//         <div className="mt-10 max-w-xl mx-auto">
//           <div className="flex items-center bg-[#151515] border border-[#C9A24A]/50 rounded-full px-5 py-3 shadow-[0_0_20px_rgba(201,162,74,0.15)]">
//             <Search className="text-[#C9A24A] mr-3" size={18} />
//             <input
//               type="text"
//               placeholder="Search services..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-400"
//             />
//           </div>
//         </div>
//       </section>

//       {/* SERVICES GRID */}
//       <section className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 rounded-xl overflow-hidden">

//           {filteredServices.length > 0 ? (
//             filteredServices.map((service) => (
//               <Link
//                 href={`/services/${service.slug}`}
//                 key={service.slug}
//                 className="group relative p-10 flex flex-col justify-between bg-[#121212] border-b border-r border-white/10 transition-all duration-300 hover:bg-[#1A1A1A]"
//               >
//                 {/* Arrow */}
//                 <div className="absolute top-6 right-6 text-gray-400 group-hover:text-[#C9A24A] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
//                   <ArrowUpRight size={22} strokeWidth={1.5} />
//                 </div>

//                 {/* Icon */}
//                 <div className="mb-8 text-gray-300 group-hover:text-[#E6C067] transition-colors duration-300">
//                   <service.icon size={42} strokeWidth={1.2} />
//                 </div>

//                 {/* Content */}
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 uppercase tracking-wide text-white group-hover:text-[#E6C067] transition-colors">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-300 text-sm leading-relaxed max-w-[300px]">
//                     Expert {service.title.toLowerCase()} solutions designed to deliver
//                     long-term value, performance, and excellence.
//                   </p>
//                 </div>

//                 {/* Bottom Gold Line */}
//                 <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#C9A24A] to-[#E6C067] transition-all duration-300 group-hover:w-full" />
//               </Link>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-20 text-gray-400">
//               No services found.
//             </div>
//           )}

//         </div>
//       </section>
//     </main>
//   );
// }


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page