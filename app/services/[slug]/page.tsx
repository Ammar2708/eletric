// 'use client'

// import { notFound } from 'next/navigation'
// import { SERVICES } from '@/data/servicesData'
// import Link from 'next/link'
// import { ChevronLeft } from 'lucide-react'
// import { motion } from 'framer-motion'

// export default async function ServiceDetail({ 
//   params 
// }: { 
//   params: Promise<{ slug: string }> 
// }) {
//   const { slug } = await params
//   const service = SERVICES.find((s) => s.slug === slug)

//   if (!service) return notFound()

//   return (
//     <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20 px-5">
//       <div className="max-w-4xl mx-auto">

//         {/* Back */}
//         <Link 
//           href="/services" 
//           className="inline-flex items-center text-zinc-400 hover:text-[#C9A24A] transition-colors mb-12 group text-sm"
//         >
//           <ChevronLeft size={16} className="mr-1.5 group-hover:-translate-x-1 transition-transform" />
//           Back to Services
//         </Link>

//         {/* HEADER */}
//         <motion.header 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="border-b border-white/10 pb-10 mb-10"
//         >

//           {service.icon && (
//             <div className="text-[#C0C0C0] mb-6">
//               <service.icon size={40} strokeWidth={1.2} />
//             </div>
//           )}

//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 leading-tight">
//             <span className="bg-gradient-to-r from-[#C9A24A] via-[#E6C067] to-[#C0C0C0] bg-clip-text text-transparent">
//               {service.title}
//             </span>
//           </h1>

//           <p className="text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed">
//             Precision-driven {service.title.toLowerCase()} solutions crafted with
//             expertise and long-term performance.
//           </p>
//         </motion.header>

//         {/* CONTENT */}
//         <div className="grid md:grid-cols-3 gap-10">

//           {/* LEFT */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="md:col-span-2"
//           >
//             <h2 className="text-xl font-semibold mb-4 text-[#E6C067]">
//               Service Overview
//             </h2>

//             <p className="text-zinc-300 text-base leading-relaxed">
//               {service.description || 
//                 "We deliver high-end solutions tailored to demanding project requirements, combining precision, durability, and refined execution."}
//             </p>

//             {/* Divider */}
//             <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />

//             {/* Why Choose Us */}
//             <div className="mt-8">
//               <h3 className="text-lg font-medium mb-3 text-[#C0C0C0]">
//                 Why Choose Us
//               </h3>
//               <p className="text-zinc-400 text-sm leading-relaxed">
//                 Our approach ensures every project is delivered with precision,
//                 efficiency, and a high standard of quality.
//               </p>
//             </div>
//           </motion.div>
          
//           {/* RIGHT */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="p-6 rounded-lg border border-white/10 bg-[#121212]">

//               <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24A] mb-6 font-semibold">
//                 Core Expertise
//               </h3>

//               <ul className="space-y-4">
//                 {service.features?.map((feature, i) => (
//                   <li key={i} className="flex items-start text-xs text-zinc-300">
//                     <span className="w-1.5 h-1.5 bg-[#C0C0C0] rounded-full mr-2 mt-1 shrink-0" />
//                     {feature}
//                   </li>
//                 )) || (
//                   <li className="text-zinc-600 italic text-xs">
//                     Feature list coming soon.
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </main>
//   )
// }

'use client'

import { notFound } from 'next/navigation'
import { SERVICES } from '@/data/servicesData'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default async function ServiceDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) return notFound()

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-24 pb-20 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <Link 
          href="/services" 
          className="inline-flex items-center text-zinc-400 hover:text-[#C9A24A] transition-colors mb-10 group text-sm"
        >
          <ChevronLeft size={16} className="mr-1.5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link>

        {/* HERO IMAGE */}
        {service.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-white/10 mb-12"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </motion.div>
        )}

        {/* HEADER */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border-b border-white/10 pb-10 mb-10"
        >

          {service.icon && (
            <div className="text-[#C0C0C0] mb-6">
              <service.icon size={40} strokeWidth={1.2} />
            </div>
          )}

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-4 leading-tight">
            <span className="bg-gradient-to-r from-[#C9A24A] via-[#E6C067] to-[#C0C0C0] bg-clip-text text-transparent">
              {service.title}
            </span>
          </h1>

          <p className="text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            {service.description || 
              `Precision-driven ${service.title.toLowerCase()} solutions crafted with expertise and long-term performance.`}
          </p>
        </motion.header>

        {/* CONTENT */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-10"
          >

            {/* Overview */}
            <div>
              <h2 className="text-xl font-semibold mb-4 text-[#E6C067]">
                Service Overview
              </h2>
              <p className="text-zinc-300 text-base leading-relaxed">
                {service.longDescription || 
                  "We deliver high-end solutions tailored to demanding project requirements, combining precision, durability, and refined execution."}
              </p>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />

            {/* Why Choose Us */}
            <div>
              <h3 className="text-lg font-medium mb-3 text-[#C0C0C0]">
                Why Choose Us
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Our approach ensures every project is delivered with precision,
                efficiency, and a high standard of quality. We focus on long-term
                reliability and premium finishing in every detail.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link href={`/contact?service=${service.slug}`}>
                <button className="px-8 py-3 text-sm font-medium rounded-md 
                  bg-gradient-to-r from-[#C9A24A] to-[#E6C067] text-black 
                  hover:opacity-90 transition">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
          
          {/* RIGHT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-white/10 bg-[#121212]">

              <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#C9A24A] mb-6 font-semibold">
                Core Expertise
              </h3>

              <ul className="space-y-4">
                {service.features?.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-[#C0C0C0] rounded-full mr-2 mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sticky CTA Card */}
            <div className="p-6 rounded-xl border border-[#C9A24A]/20 bg-gradient-to-br from-[#121212] to-[#1a1a1a]">
              <h4 className="text-sm font-medium mb-3">Start Your Project</h4>
              <p className="text-xs text-zinc-400 mb-5">
                Get in touch with our team and book your service today.
              </p>

              <Link href={`/contact?service=${service.slug}`}>
                <button className="w-full py-3 text-sm font-medium rounded-md 
                  bg-gradient-to-r from-[#C9A24A] to-[#E6C067] text-black 
                  hover:opacity-90 transition">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  )
}
