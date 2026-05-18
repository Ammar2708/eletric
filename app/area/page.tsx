import Link from 'next/link';
import { Clock, MapPin, PhoneCall, ShieldCheck } from 'lucide-react';
import { AREAS } from '@/data/areasData';

const AreaPage = () => {
  return (
    <main className="min-h-screen bg-white pt-32 text-[var(--brand-night)]">
      <section className="px-6 pb-14 pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-[#C20E1E]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#C20E1E]">
            <MapPin size={18} />
            Coverage
          </div>
          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            Our Service Areas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            24/7 emergency electricians across London and nearby areas.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-1 w-12 rounded-full bg-[#C20E1E]" />
              <h2 className="text-3xl font-black tracking-tight">Areas We Cover</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}`}
                  className="group flex min-h-20 items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C20E1E]/30 hover:shadow-xl hover:shadow-slate-200/70"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C20E1E]/10 text-[#C20E1E] transition-colors group-hover:bg-[#C20E1E] group-hover:text-white">
                    <MapPin size={20} />
                  </span>
                  <span className="text-lg font-semibold leading-snug text-slate-800">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <aside className="sticky top-36 space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200/80">
              <div className="relative h-[520px] bg-[#eef2f6]">
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute left-[-10%] top-[20%] h-8 w-[120%] rotate-[-18deg] rounded-full bg-white shadow-sm" />
                  <div className="absolute left-[-12%] top-[46%] h-7 w-[125%] rotate-[16deg] rounded-full bg-white shadow-sm" />
                  <div className="absolute left-[18%] top-[-10%] h-[120%] w-8 rotate-[30deg] rounded-full bg-white shadow-sm" />
                  <div className="absolute left-[62%] top-[-8%] h-[115%] w-7 rotate-[-28deg] rounded-full bg-white shadow-sm" />
                  <div className="absolute left-0 top-[68%] h-6 w-full rotate-[-6deg] rounded-full bg-white shadow-sm" />
                </div>

                <div className="absolute left-[47%] top-[43%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C20E1E] text-white shadow-2xl shadow-red-900/20">
                  <MapPin size={30} fill="currentColor" />
                </div>

                <div className="absolute left-6 top-6 rounded-2xl bg-white p-5 shadow-xl">
                  <p className="text-lg font-black">London Coverage</p>
                  <p className="mt-1 text-sm text-slate-500">24/7 response</p>
                </div>

                <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="font-black text-emerald-700">Engineers Active Now</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[var(--brand-night)] p-8 text-white shadow-2xl shadow-slate-200/80">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-amber)] text-[var(--brand-night)]">
                  <Clock size={30} />
                </span>
                <div>
                  <h3 className="text-2xl font-black">45-Minute Response</h3>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-amber)]">
                    Emergency guarantee
                  </p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-slate-300">
                Local electricians ready across London.
              </p>
              <Link
                href="tel:02039733443"
                className="mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-black text-[var(--brand-night)] transition-colors hover:bg-[var(--brand-amber)]"
              >
                <PhoneCall size={20} />
                Check Availability
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ['24/7 Support', 'Emergency help, day or night.'],
            ['NICEIC Approved', 'Certified electrical work.'],
            ['Local Engineers', 'Fast London coverage.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm">
              <ShieldCheck className="text-[#C20E1E]" size={28} />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AreaPage;
