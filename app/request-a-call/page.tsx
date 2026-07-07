"use client";

import { useState } from "react";
import {
  ArrowRight,
  X,
  Loader2,
  Shield,
  CheckCircle2,
  Phone,
  Play,
  Zap,
  CreditCard,
  BarChart3,
  Package,
  TrendingUp,
  Lock,
  ChevronDown,
  Users,
  Globe,
  BadgeDollarSign,
  Star,
  PhoneCall,
  Settings,
  ShieldCheck,
  Quote,
} from "lucide-react";

/* ─── DATA ─── */

const YOUTUBE_VIDEO_1 = "xwkcPcL7DIE";
const YOUTUBE_VIDEO_2 = "WXfLnZ-iyYA";

const STATS = [
  { value: "26,000+", label: "Users", icon: Users },
  { value: "80+", label: "Regions", icon: Globe },
  { value: "₦1.8B+", label: "Daily Transactions", icon: BadgeDollarSign },
  { value: "4.8 / 5", label: "Avg. Rating", icon: Star },
];

const FEATURES = [
  {
    icon: CreditCard,
    title: "Customer & Credit Management",
    desc: "Automatically store customer records, manage credit sales, send payment invoices and receipts.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Sales Tracking",
    desc: "Know exactly how much is being sold every single minute without spending hours keeping paper records that can easily be manipulated.",
  },
  {
    icon: Package,
    title: "Smart Inventory Alerts",
    desc: "Know exactly how many stocks of each product you have and get alerts when they\u2019re about to finish or expire.",
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Clarity",
    desc: "Track the sales and cash flow easily without a mistake.",
  },
  {
    icon: Lock,
    title: "Theft Prevention",
    desc: "Prevent your employees from stealing your products and money even in your absence.",
  },
];

const STEPS = [
  {
    num: "01",
    icon: PhoneCall,
    title: "Request a Call",
    desc: "Fill in your details and submit the form on this page.",
  },
  {
    num: "02",
    icon: Phone,
    title: "We Call You",
    desc: "A Prokip representative calls you within 24 hours to understand your business.",
  },
  {
    num: "03",
    icon: Settings,
    title: "Get Set Up",
    desc: "We help you set up Prokip for your business \u2014 fast and hassle-free.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Secure Your Business",
    desc: "Start monitoring and growing your business with full control from day one.",
  },
];

const FAQS = [
  {
    q: "Do I need good internet to use Prokip?",
    a: "Prokip has an offline version that syncs when you\u2019re back online, making it practical for areas with unreliable connectivity.",
  },
  {
    q: "Can my staff learn it quickly?",
    a: "Most businesses are fully onboarded within 48 hours. We also train your team at no extra charge.",
  },
  {
    q: "What if I\u2019m already using another software?",
    a: "We can help migrate your data so your team doesn\u2019t have to rebuild everything manually.",
  },
  {
    q: "Is Prokip built for businesses across Africa?",
    a: "Yes. Prokip supports local invoicing, multi-currency needs, tax workflows, branches, and teams working across different locations.",
  },
  {
    q: "Is the call really free?",
    a: "Absolutely. No obligations. We\u2019ll explain how Prokip works and how it fits your business \u2014 you decide from there.",
  },
];

/* ─── COMPONENT ─── */

export default function RequestACallPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEO_1);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    ownsBusiness: "",
    employees: "",
  });

  const openVideoModal = (id: string) => {
    setActiveVideo(id);
    setShowVideo(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setShowForm(false);
  };

  /* ── SUCCESS STATE ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#011635] to-[#072654] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 animate-[bounce_1s_ease-in-out]">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl font-semibold text-amber-400 mb-6">
            Your Request Was Received Successfully
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-4">
            <p className="text-lg text-white/90">
              A Call Agent Will Call You Within 24 Hrs To Explain More About
              Prokip And How It Can Help Your Business.
            </p>
            <p className="text-white/70">
              Can&apos;t wait? Call us directly:
            </p>
            <a
              href="tel:+2349019183882"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-xl font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
            >
              <Phone className="h-6 w-6" />
              +234 901 918 3882
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── VIDEO MODAL ── */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-amber-400 transition-colors"
              aria-label="Close video"
            >
              <X className="h-8 w-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full rounded-2xl shadow-2xl"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* ── LEAD FORM MODAL ── */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close form"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center mb-6">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                <PhoneCall className="h-7 w-7 text-amber-600" />
              </div>
              <p className="text-lg text-gray-700">
                Enter your details to request a
              </p>
              <p className="text-2xl font-extrabold text-[#011635]">
                FREE Call
              </p>
              <p className="text-lg text-gray-700">
                with a Prokip representative and
              </p>
              <p className="text-xl font-bold text-amber-600">
                secure your business 100%
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, firstName: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none transition-all"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none transition-all"
                  placeholder="+234..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Do you own a business?
                </label>
                <select
                  required
                  value={form.ownsBusiness}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, ownsBusiness: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none transition-all"
                >
                  <option value="">- Select -</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  How many employees do you have?
                </label>
                <select
                  required
                  value={form.employees}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, employees: e.target.value }))
                  }
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none transition-all"
                >
                  <option value="">- Select -</option>
                  <option value="None">None</option>
                  <option value="1-5">1 – 5</option>
                  <option value="6-20">6 – 20</option>
                  <option value="21-50">21 – 50</option>
                  <option value="51-100">51 – 100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-4 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Processing…
                  </>
                ) : (
                  <>
                    Yes, I&apos;m Ready to Secure My Business
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          1 · HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#011635] via-[#05204a] to-[#072654] overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/8 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-400/8 blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-10 text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-400 mb-8">
            <Shield className="h-4 w-4" />
            FOR BUSINESS OWNERS ONLY
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
            Here&apos;s How to Stop Employee Theft, Mismanagement&nbsp;of Funds
            &amp;&nbsp;Loss In&nbsp;Your&nbsp;Business
          </h1>

          <p className="text-lg sm:text-xl text-white/75 mb-8 max-w-2xl mx-auto">
            Grow your business successfully, have more freedom, and enjoy the
            life you really deserve.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 mb-12"
          >
            Request a Free Call
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Video thumbnail */}
          <div className="relative max-w-3xl mx-auto mb-10">
            <button
              onClick={() => openVideoModal(YOUTUBE_VIDEO_1)}
              className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border-2 border-white/10 hover:border-amber-500/50 transition-all shadow-2xl"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_1}/maxresdefault.jpg`}
                alt="Watch how Prokip helps business owners"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90">
                ▶ Watch Video
              </div>
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <Icon className="h-5 w-5 text-amber-400 mb-1" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white">
                    {s.value}
                  </span>
                  <span className="text-sm text-white/60">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2 · SALES LETTER
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-gray-800"
          style={{ fontSize: "1.15rem", lineHeight: "1.85" }}
        >
          <p className="text-xl">
            <strong>Dear Business Owner,</strong>
          </p>
          <p>
            If you&apos;d like to protect your business from going bankrupt,
            then it&apos;s important you read this message without hesitation…
          </p>
          <p>
            <strong>Here&apos;s why:</strong>
          </p>
          <p>As you already know… nowadays, lots of businesses are shutting down. The rate is higher than ever before.</p>
          <p>And you know why?</p>
          <p>
            It&apos;s not actually because they are not making enough sales… but because of…
          </p>

          <div className="my-10 rounded-2xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8 text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-red-700">
              Unknown Employee Theft &amp; Mismanagement of Business Funds
            </p>
          </div>

          <p>
            Most business owners invest a lot of money in their businesses… and
            they work tirelessly without results because{" "}
            <strong>someone else is eating their profits.</strong>
          </p>
          <p>Think about it…</p>
          <p>
            If your salesboy or salesgirl steals just ₦1,000 daily from your
            business…
          </p>

          <div className="my-8 rounded-2xl bg-[#011635] p-6 sm:p-8 text-center">
            <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">
              That&apos;s over ₦300,000 GONE at the end of the year.
            </p>
            <p className="text-white/70 italic">
              (that&apos;s if it&apos;s just ₦1,000 they are exploiting from
              your business)
            </p>
          </div>

          <p>
            What if you have more than one employee stealing from your business
            without you knowing?
          </p>
          <p>
            Well, it&apos;s a matter of time before your business shuts down.
          </p>
          <p>
            And if you think CCTV cameras will save your business, then
            you&apos;re joking.
          </p>
          <p>
            Reports have shown that some employees go as far as{" "}
            <strong>
              adjusting stock inventory, manipulating sales transactions and
              expenses
            </strong>{" "}
            so they don&apos;t get caught.
          </p>
          <p>
            <strong>Truth be told:</strong> Your employees will always want to
            exploit your business… not because they hate you, but because they
            will always need extra money. Their salary will never be enough even
            if you think you are paying them well.
          </p>
          <p className="italic text-gray-500">
            (Remember, human wants are unlimited)
          </p>
          <p className="text-xl font-bold text-[#011635]">
            But don&apos;t worry…
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3 · SOLUTION — Feature Grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-6">
            <CheckCircle2 className="h-4 w-4" />
            100% Control Over Your Business
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011635] mb-4">
            Prokip is all you need to run a successful business
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A powerful accounting &amp; business management software that helps
            you <strong>monitor, automate and grow</strong> your business faster
            with ease.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#011635] to-[#072654] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="h-7 w-7 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#011635] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="mt-12 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5"
          >
            Request a Free Call Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4 · HOW IT WORKS — Timeline
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011635] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to securing your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative text-center group">
                  {/* connector line (hidden on last item & mobile) */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-amber-400/60 to-amber-400/10" />
                  )}
                  <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#011635] to-[#072654] shadow-lg group-hover:scale-105 transition-transform">
                    <Icon className="h-9 w-9 text-amber-400" />
                    <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-extrabold text-[#011635] shadow">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#011635] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5 · HYBRID FEATURE CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#011635] to-[#072654] p-10 sm:p-14 text-center text-white shadow-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
              <Zap className="h-4 w-4" />
              The Best Part?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Prokip works offline <em>and</em> online.
            </h3>
            <p className="text-lg sm:text-xl text-white/80 max-w-xl mx-auto">
              Built with a hybrid feature so you can operate efficiently whether
              the network is good or bad.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6 · TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011635] mb-4">
              What Business Owners Are Saying
            </h2>
          </div>

          {/* Video testimonial */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <button
              onClick={() => openVideoModal(YOUTUBE_VIDEO_2)}
              className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border-2 border-gray-200 hover:border-amber-500/50 transition-all shadow-lg"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_2}/maxresdefault.jpg`}
                alt="Prokip customer testimonial"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90">
                ▶ Customer Testimonial
              </div>
            </button>
          </div>

          {/* Quote card */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-gray-100 bg-gray-50 p-8 relative">
            <Quote className="absolute top-4 left-4 h-10 w-10 text-amber-500/20" />
            <p className="text-lg text-gray-700 italic leading-relaxed mb-4 relative z-10">
              &ldquo;Before Prokip, I was managing my three branches on
              spreadsheets and WhatsApp forwards. Within a week of getting set
              up, all three locations were live.&rdquo;
            </p>
            <p className="font-bold text-[#011635]">— Business Owner</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7 · FAQ ACCORDION
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011635] mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Things businesses usually ask before requesting a call.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#011635] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8 · FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#011635] to-[#072654] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-amber-500/8 blur-[100px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Click the button below and fill in your details. A Prokip
            representative will call you for FREE to help secure your
            business — regardless of your location.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5 mb-8"
          >
            Request a Free Call Now
            <ArrowRight className="h-5 w-5" />
          </button>
          <div>
            <p className="text-white/60 text-sm mb-2">
              Or call us directly:
            </p>
            <a
              href="tel:+2349019183882"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-xl font-bold transition-colors"
            >
              <Phone className="h-5 w-5" />
              +234 901 918 3882
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#010e24] py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Prokip. All rights reserved.
      </footer>
    </div>
  );
}
