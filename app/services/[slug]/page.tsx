'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/data/servicesData'
import Link from 'next/link'
import { 
  ChevronLeft, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Hammer 
} from 'lucide-react'
import { motion, Transition, Variants } from 'framer-motion'
import Image from 'next/image'

/**
 * 1. Explicitly typing the transition fixes the 
 * "Type 'number[]' is not assignable to type 'Easing'" error.
 */
const smoothTransit: Transition = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1], 
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransit 
  }
};

export default function ServiceDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  /**
   * 2. In Next.js 15 'use client' components, 
   * we use 'use(params)' instead of 'await params'.
   */
  const { slug } = use(params)
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) return notFound()

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-zinc-900 pt-32 pb-20 px-6 overflow-x-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
      >

        {/* Navigation Breadcrumb */}
        <motion.div variants={fadeUpVariant} className="mb-12">
          <Link 
            href="/services" 
            className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 hover:text-blue-600 transition-all"
          >
            <div className="w-8 h-[1px] bg-zinc-300 group-hover:w-12 group-hover:bg-blue-600 transition-all duration-500" />
            Back to Catalog
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Content (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Header Section */}
            <motion.section 
              variants={fadeUpVariant}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 text-blue-600 font-bold text-sm tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Emergency Electrical Service
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-[#0A0A0F] leading-[0.9]">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed">
                {service.description || 
                  "High-specification engineering solutions designed for safety, longevity, and efficiency."}
              </p>
            </motion.section>

            {/* Main Visual */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 1.05 },
                visible: { opacity: 1, scale: 1, transition: { ...smoothTransit, duration: 1.4 } }
              }}
              className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent" />
              
              <div className="absolute top-8 left-8 backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                Certified Solutions
              </div>
            </motion.div>

            {/* Detailed Info */}
            <motion.section 
              variants={fadeUpVariant}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0A0A0F] flex items-center gap-3 text-balance">
                  <Hammer size={24} className="text-blue-600" />
                  Technical Scope
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Our {service.title.toLowerCase()} service encompasses full-cycle project management. From initial load calculations to final certification, we ensure every component exceeds UK safety standards.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#0A0A0F] flex items-center gap-3">
                  <ShieldCheck size={24} className="text-blue-600" />
                  Compliance
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Everything we install is fully EICR compliant. We provide digital documentation for all commercial and residential works, ensuring your property remains insured and protected.
                </p>
              </div>
            </motion.section>
          </div>

          {/* RIGHT: Bento Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Feature Bento Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { ...smoothTransit, delay: 0.3 } }
              }}
              className="bg-[#0A0A0F] rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/40 transition-all duration-1000" />
              
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">
                Capabilities
              </h3>
              <ul className="space-y-6">
                {service.features?.map((feature: string, i: number) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                    className="flex items-center gap-4 text-sm font-medium text-zinc-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-500 shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Conversion Bento Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0, transition: { ...smoothTransit, delay: 0.4 } }
              }}
              className="bg-white rounded-[2.5rem] p-10 border border-zinc-100 shadow-xl space-y-8"
            >
              <div className="space-y-2">
                <h4 className="text-2xl font-bold tracking-tight">Need Assistance?</h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">Schedule a technical consultation or request an emergency call-out.</p>
              </div>

              <div className="space-y-3">
                <Link href={`/contact?service=${service.slug}`} className="block">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 hover:bg-[#0A0A0F] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-3"
                  >
                    Start Project <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <a href="tel:08001234567" className="block">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-zinc-200 hover:border-blue-600 hover:text-blue-600 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 text-zinc-400"
                  >
                    <PhoneCall size={16} /> Urgent Help
                  </motion.button>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-zinc-50 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Response Time</span>
                  <span className="text-sm font-bold flex items-center gap-1">
                    <Clock size={14} className="text-blue-600" /> &lt; 60 Mins
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-zinc-100" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Rating</span>
                  <span className="text-sm font-bold text-blue-600">5.0 / 5.0</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </main>
  )
}