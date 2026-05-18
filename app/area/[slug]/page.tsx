import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, MapPin, PhoneCall, ShieldCheck, Zap } from 'lucide-react';
import { AREAS, findAreaBySlug } from '@/data/areasData';

export const generateStaticParams = () =>
  AREAS.map((area) => ({
    slug: area.slug,
  }));

const localServices = [
  'Emergency fault finding',
  'EICR reports',
  'Consumer unit upgrades',
  'Commercial electrical repairs',
  'Lighting and socket installation',
  '24/7 electrical call-outs',
];

const AreaDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const area = findAreaBySlug(slug);

  if (!area) return notFound();

  return (
    <main className="min-h-screen bg-white pt-32 text-[var(--brand-night)]">
      <section className="relative overflow-hidden bg-[var(--brand-night)] px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-amber)] to-[#C20E1E]" />
        <div className="absolute -right-28 top-16 h-72 w-72 rounded-full bg-[#C20E1E]/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[var(--brand-blue)]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/area"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to service areas
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--brand-amber)]">
                <MapPin size={18} />
                {area.region}
              </div>
              <h1 className="mt-7 text-4xl font-black tracking-tight md:text-6xl">
                Emergency Electricians in {area.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                24/7 electrical repairs, inspections, and call-outs in {area.name}.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="tel:02039733443"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-[#C20E1E] px-7 py-4 font-black text-white shadow-lg shadow-red-950/20 transition-colors hover:bg-white hover:text-[var(--brand-night)]"
                >
                  <PhoneCall size={20} />
                  Call 020 3973 3443
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-md border border-white/15 px-7 py-4 font-black text-white transition-colors hover:bg-white/10"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl">
              <div className="flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--brand-amber)] text-[var(--brand-night)]">
                  <Clock size={30} />
                </span>
                <div>
                  <p className="text-2xl font-black">Rapid response</p>
                  <p className="text-sm text-slate-400">Available 24/7</p>
                </div>
              </div>
              <div className="mt-7 space-y-4">
                {['NICEIC approved', 'Fully insured', 'Commercial and domestic', 'Emergency call-outs'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-200">
                    <ShieldCheck size={18} className="text-[var(--brand-amber)]" />
                    <span className={item.toLowerCase().includes('niceic') ? 'font-bold text-[#C20E1E]' : 'font-semibold'}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-18 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-1 w-12 rounded-full bg-[#C20E1E]" />
              <h2 className="text-3xl font-black tracking-tight">Electrical services in {area.name}</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Local support for homes, landlords, facilities teams, and commercial sites.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {localServices.map((service) => (
                <div key={service} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <Zap size={20} className="shrink-0 text-[#C20E1E]" />
                  <span className="font-bold text-slate-800">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200/80">
            <div className="relative h-[520px] bg-[#eef2f6]">
              <div className="absolute inset-0 opacity-80">
                <div className="absolute left-[-10%] top-[20%] h-8 w-[120%] rotate-[-18deg] rounded-full bg-white shadow-sm" />
                <div className="absolute left-[-12%] top-[46%] h-7 w-[125%] rotate-[16deg] rounded-full bg-white shadow-sm" />
                <div className="absolute left-[18%] top-[-10%] h-[120%] w-8 rotate-[30deg] rounded-full bg-white shadow-sm" />
                <div className="absolute left-[62%] top-[-8%] h-[115%] w-7 rotate-[-28deg] rounded-full bg-white shadow-sm" />
                <div className="absolute left-0 top-[68%] h-6 w-full rotate-[-6deg] rounded-full bg-white shadow-sm" />
              </div>
              <div className="absolute left-6 top-6 rounded-2xl bg-white p-5 shadow-xl">
                <p className="text-lg font-black">{area.name}</p>
                <p className="mt-1 text-sm text-slate-500">Local coverage</p>
              </div>
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C20E1E] text-white shadow-2xl shadow-red-900/20">
                <MapPin size={30} fill="currentColor" />
              </div>
              <div className="absolute bottom-6 right-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <span className="h-3 w-3 rounded-full bg-emerald-500" />
                <span className="font-black text-emerald-700">Engineers Active Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AreaDetailPage;
