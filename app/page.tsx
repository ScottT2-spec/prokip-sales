"use client";

import { useState, useEffect } from "react";
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
  AlertTriangle,
  Wifi,
  WifiOff,
  ChevronDown,
} from "lucide-react";

const YOUTUBE_VIDEO_1 = "xwkcPcL7DIE";
const YOUTUBE_VIDEO_2 = "WXfLnZ-iyYA";

const FEATURES = [
  {
    icon: CreditCard,
    title:
      "Automatically store customers records, manage credit sales, send payment invoices and receipts",
    accent: "from-amber-400 to-yellow-500",
  },
  {
    icon: BarChart3,
    title:
      "You\u2019ll know exactly how much is being sold every single minute of the day without spending hours keeping paper records that can easily be manipulated",
    accent: "from-blue-400 to-cyan-400",
  },
  {
    icon: Package,
    title:
      "You\u2019ll know exactly how many stocks of each product you have in your store or warehouse and get alerts when they\u2019re about to finish or expire",
    accent: "from-emerald-400 to-teal-400",
  },
  {
    icon: TrendingUp,
    title:
      "You\u2019ll be able to track the sales and cash flow easily without a mistake",
    accent: "from-violet-400 to-purple-400",
  },
  {
    icon: Lock,
    title:
      "And you\u2019ll be able to prevent your employees from stealing your products and money even if in your absence",
    accent: "from-rose-400 to-pink-400",
  },
];

export default function ProkipSalesPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEO_1);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    ownsBusiness: "",
    employees: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openVideo = (id: string) => {
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
      <div className="min-h-screen bg-[var(--dark-deep)] flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative z-10 max-w-lg w-full text-center animate-fade-up">
          {/* Success icon */}
          <div className="relative mx-auto mb-8 w-28 h-28">
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl shadow-emerald-500/30">
              <CheckCircle2 className="h-14 w-14 text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-extrabold text-white mb-3 tracking-tight">
            Thank you
          </h1>
          <p className="text-2xl font-bold text-[var(--gold)] mb-8">
            Your Request Was Received Successfully
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 space-y-5">
            <p className="text-lg text-white/90 leading-relaxed">
              A Call Agent Will Call You Within 24 Hrs To Explain To You More
              About Prokip And How It Can Help Your Business.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-white/60">
              If You Can&apos;t Wait For The Call, You Can Call Us Directly On:
            </p>
            <a
              href="tel:+2349019183882"
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] px-8 py-4 text-xl font-bold text-[var(--dark)] hover:shadow-lg hover:shadow-[var(--gold)]/25 transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-6 w-6 group-hover:animate-bounce" />
              +2349019183882
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── FLOATING NAV ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--dark)]/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center">
              <Shield className="h-5 w-5 text-[var(--dark)]" />
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Pro<span className="text-[var(--gold)]">kip</span>
            </span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
              scrolled
                ? "bg-[var(--gold)] text-[var(--dark)] hover:bg-[var(--gold-light)]"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Book Free Call
          </button>
        </div>
      </nav>

      {/* ── VIDEO MODAL ── */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
            >
              Close <X className="h-5 w-5" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--dark)]/80 backdrop-blur-md p-4"
          onClick={() => setShowForm(false)}
        >
          <div
            className="relative w-full max-w-md animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold accent bar */}
            <div className="absolute -top-1 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)]" />

            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-2xl shadow-black/20">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-5 right-5 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-all"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-center mb-8">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--cream)] mb-4">
                  <Phone className="h-7 w-7 text-[var(--gold-dark)]" />
                </div>
                <p className="text-lg text-gray-600">
                  Enter your correct details to book a
                </p>
                <p className="text-3xl font-extrabold text-[var(--dark)]">
                  FREE call
                </p>
                <p className="text-lg text-gray-600">
                  with Prokip representative and
                </p>
                <p className="text-xl font-bold bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] bg-clip-text text-transparent">
                  secure your business 100%
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, firstName: e.target.value }))
                    }
                    className="w-full rounded-xl border-2 border-gray-100 bg-gray-50/50 px-4 py-3.5 text-sm font-medium focus:border-[var(--gold)] focus:bg-white focus:ring-4 focus:ring-[var(--gold)]/10 outline-none transition-all"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full rounded-xl border-2 border-gray-100 bg-gray-50/50 px-4 py-3.5 text-sm font-medium focus:border-[var(--gold)] focus:bg-white focus:ring-4 focus:ring-[var(--gold)]/10 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full rounded-xl border-2 border-gray-100 bg-gray-50/50 px-4 py-3.5 text-sm font-medium focus:border-[var(--gold)] focus:bg-white focus:ring-4 focus:ring-[var(--gold)]/10 outline-none transition-all"
                    placeholder="+234..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Own a business?
                    </label>
                    <select
                      required
                      value={form.ownsBusiness}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, ownsBusiness: e.target.value }))
                      }
                      className="w-full rounded-xl border-2 border-gray-100 bg-gray-50/50 px-4 py-3.5 text-sm font-medium focus:border-[var(--gold)] focus:bg-white focus:ring-4 focus:ring-[var(--gold)]/10 outline-none transition-all appearance-none"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                      Employees
                    </label>
                    <select
                      required
                      value={form.employees}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, employees: e.target.value }))
                      }
                      className="w-full rounded-xl border-2 border-gray-100 bg-gray-50/50 px-4 py-3.5 text-sm font-medium focus:border-[var(--gold)] focus:bg-white focus:ring-4 focus:ring-[var(--gold)]/10 outline-none transition-all appearance-none"
                    >
                      <option value="">Select</option>
                      <option value="None">None</option>
                      <option value="1-5">1-5</option>
                      <option value="6-20">6-20</option>
                      <option value="21-50">21-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[var(--dark)] to-[var(--dark-deep)] py-4 text-base font-bold text-white hover:shadow-lg hover:shadow-[var(--dark)]/30 transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Processing...
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
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden grain">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-deep)] via-[var(--dark)] to-[#132744]" />

        {/* Decorative orbs */}
        <div className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full bg-[var(--gold)]/[0.07] blur-[150px] animate-float" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.05] blur-[120px] animate-float-delayed" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent transform rotate-12 translate-x-[40vw]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 sm:py-40 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/[0.08] px-5 py-2 text-sm font-bold text-[var(--gold)] mb-8 backdrop-blur-sm">
              <Shield className="h-4 w-4" />
              FOR BUSINESS OWNERS ONLY!
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Here&apos;s How to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Stop</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-[var(--gold)]/30 rounded-full -z-0" />
              </span>{" "}
              Employees Theft, Mismanagement of Funds And Loss In Your Business
            </h1>

            <p className="text-xl sm:text-2xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Now you can grow your business successfully, have more freedom and
              enjoy the life you really deserve!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] px-8 py-5 text-lg font-bold text-[var(--dark)] hover:shadow-2xl hover:shadow-[var(--gold)]/30 transition-all hover:-translate-y-1"
              >
                I&apos;m Ready to Get Rid of Theft
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => openVideo(YOUTUBE_VIDEO_1)}
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/15 bg-white/[0.04] backdrop-blur-sm px-8 py-5 text-lg font-semibold text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[var(--gold)]/30 animate-ping" style={{ animationDuration: "2.5s" }} />
                  <Play className="relative h-5 w-5 text-[var(--gold)]" />
                </div>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right: Video thumbnail */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--gold)]/20 to-blue-500/10 blur-2xl" />

              <button
                onClick={() => openVideo(YOUTUBE_VIDEO_1)}
                className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--gold)]/40 transition-all shadow-2xl shadow-black/40"
              >
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_1}/maxresdefault.jpg`}
                  alt="Prokip testimonial video"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark)]/80 via-transparent to-transparent" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[var(--gold)] animate-ping opacity-30" style={{ animationDuration: "2s" }} />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] shadow-2xl shadow-[var(--gold)]/40 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-[var(--dark)] ml-1" />
                    </div>
                  </div>
                </div>
                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white/80 text-sm font-medium">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  Watch how Prokip protects businesses
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SALES LETTER — The Problem
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
        {/* Subtle side accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="prose-custom space-y-6"
            style={{ fontSize: "1.2rem", lineHeight: "1.9", color: "#2d3748" }}
          >
            <p className="text-2xl font-bold text-[var(--dark)]">
              Dear Business Owner,
            </p>

            <p>
              If you&apos;d like to protect your business from going bankrupt,
              then it&apos;s important you read this message without hesitation…
            </p>

            <p className="font-bold text-[var(--dark)]">Here&apos;s why:</p>

            <p>As you already know…</p>

            <p>Nowadays, lots of businesses are shutting down.</p>

            <p>The rate is higher than ever before</p>

            <p>And you know why?</p>

            <p>
              It&apos;s not actually because they are not making enough sales…
            </p>

            <p className="font-semibold text-[var(--dark)]">But because of…</p>

            {/* Danger callout */}
            <div className="relative my-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.1) 20px, rgba(0,0,0,0.1) 40px)" }} />
              <div className="relative p-10 sm:p-12 text-center">
                <AlertTriangle className="h-10 w-10 text-white/80 mx-auto mb-4" />
                <p className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Unknown Employees Theft &amp; Mismanagement of Business Funds
                </p>
              </div>
            </div>

            <p>
              Most business owners invest a lot of money in their businesses…
            </p>

            <p>
              And they work tirelessly without results because{" "}
              <strong className="text-[var(--dark)]">
                someone else is eating their profits.
              </strong>
            </p>

            <p>Think about it...</p>

            <p>
              If your salesboy or salesgirl steals just N1000 daily from your
              business…
            </p>

            {/* Loss stat */}
            <div className="relative my-12 rounded-3xl bg-[var(--dark)] p-10 sm:p-12 text-center overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)]" />
              <p className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                That&apos;s over{" "}
                <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] bg-clip-text text-transparent">
                  N300,000
                </span>{" "}
                GONE
              </p>
              <p className="text-lg text-white/50 italic">
                at the end of the year.
              </p>
              <p className="text-white/40 italic mt-2">
                (that&apos;s if it&apos;s just N1,000 they are exploiting from
                your business)
              </p>
            </div>

            <p>
              What if you have more than one employee stealing from your business
              without you knowing?
            </p>

            <p className="font-semibold text-[var(--dark)]">
              Well, it&apos;s a matter of time before your business shuts down.
            </p>

            <p>
              And if you think CCTV cameras will save your business, then
              you&apos;re joking
            </p>

            <p>You see…</p>

            <p>
              Reports have shown that some employees go as far as adjusting stock
              inventory, manipulating sales transactions and expenses so they
              don&apos;t get caught.
            </p>

            <p className="font-bold text-[var(--dark)]">Truth be told:</p>

            <p>Your employees will always want to exploit your business...</p>

            <p>Not because they hate you</p>

            <p>But because they will always need extra money.</p>

            <p>
              Their salary will never be enough even if you think you are paying
              them well enough.
            </p>

            <p className="italic text-gray-400 text-base">
              (Remember, human wants are unlimited)
            </p>

            <p className="text-xl font-bold text-[var(--dark)]">
              But don&apos;t worry…
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SOLUTION — Prokip intro + features
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] to-white" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full border border-[var(--gold)]/10" />
        <div className="absolute bottom-20 left-[5%] w-40 h-40 rounded-full border border-[var(--gold)]/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold text-emerald-700 mb-6">
              <CheckCircle2 className="h-4 w-4" />
              THE SOLUTION
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[var(--dark)] mb-6 tracking-tight">
              Now you can have{" "}
              <span className="bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold)] bg-clip-text text-transparent">
                100% control
              </span>{" "}
              over your business.
            </h2>

            <p className="text-2xl font-bold text-[var(--dark)]/80 mb-4">
              Prokip is all you need to run a successful business
            </p>

            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Prokip is a powerful accounting &amp; business management software
              that helps you{" "}
              <strong className="text-gray-700">
                monitor, automate and grow your business faster with ease
              </strong>
            </p>
          </div>

          {/* Features label */}
          <p className="text-center text-lg font-bold text-[var(--dark)] mb-10">
            With Prokip, ALL the loopholes in your business will be fixed:
          </p>

          {/* Feature cards — staggered grid */}
          <div className="space-y-4">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl bg-white p-6 sm:p-8 border border-gray-100 hover:border-[var(--gold)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--gold)]/[0.06] hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-5">
                    {/* Number + icon */}
                    <div className="flex-shrink-0 relative">
                      <span className="absolute -top-2 -left-2 text-5xl font-extrabold text-gray-100 select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-lg`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    {/* Text */}
                    <p className="text-lg text-gray-700 pt-2 leading-relaxed group-hover:text-[var(--dark)] transition-colors">
                      {feature.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA between sections */}
          <div className="text-center mt-14">
            <button
              onClick={() => setShowForm(true)}
              className="group inline-flex items-center gap-3 rounded-2xl bg-[var(--dark)] px-10 py-5 text-lg font-bold text-white hover:shadow-2xl hover:shadow-[var(--dark)]/30 transition-all hover:-translate-y-1"
            >
              I Want These For My Business
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 bg-[var(--dark)] overflow-hidden grain">
        {/* Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--gold)]/[0.04] blur-[200px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/[0.08] px-5 py-2 text-sm font-bold text-[var(--gold)] mb-6">
            <Play className="h-4 w-4" />
            REAL RESULTS
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Here&apos;s What Other Business Owners Like You Are Saying About
            Prokip
          </h2>

          <p className="text-xl text-white/50 mb-14 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from real business owners who transformed their operations
          </p>

          {/* Video */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--gold)]/15 to-blue-500/10 blur-2xl" />
            <button
              onClick={() => openVideo(YOUTUBE_VIDEO_2)}
              className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-[var(--gold)]/40 transition-all shadow-2xl"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_2}/maxresdefault.jpg`}
                alt="Prokip customer testimonial"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-10" style={{ animationDuration: "2s" }} />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HYBRID FEATURE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark)] via-[var(--dark)] to-[#1a2f50]" />
            {/* Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative p-10 sm:p-16 lg:p-20">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left: icons */}
                <div className="flex items-center justify-center gap-6">
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-xl shadow-emerald-500/30">
                      <Wifi className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Online</span>
                  </div>
                  <div className="text-4xl font-extrabold text-white/20">+</div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] shadow-xl shadow-[var(--gold)]/30">
                      <WifiOff className="h-10 w-10 text-[var(--dark)]" />
                    </div>
                    <span className="text-sm font-bold text-[var(--gold)] uppercase tracking-widest">Offline</span>
                  </div>
                </div>

                {/* Right: text */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-4 py-1.5 text-sm font-bold text-[var(--gold)] mb-6">
                    <Zap className="h-4 w-4" />
                    The best part?
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
                    Prokip is built with a hybrid feature that allows you to work
                    offline and online.
                  </h3>
                  <p className="text-xl text-white/60 leading-relaxed">
                    So, you can easily operate efficiently whether the network is good
                    or bad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--dark-deep)] via-[var(--dark)] to-[#132744]" />

        {/* Gold accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[var(--gold)]/[0.08] blur-[150px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] bg-clip-text text-transparent">
              Secure
            </span>{" "}
            Your Business?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto leading-relaxed">
            Click the button below and fill in your details. You will get a FREE
            call from one of our representatives who will help secure your
            business with Prokip…regardless of your location
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] px-12 py-6 text-xl font-bold text-[var(--dark)] hover:shadow-2xl hover:shadow-[var(--gold)]/30 transition-all hover:-translate-y-1"
          >
            Click Here Now
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-6 text-sm text-white/30 flex items-center justify-center gap-2">
            <Lock className="h-3.5 w-3.5" />
            Your information is 100% secure and will never be shared
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════ */}
      <footer className="bg-[var(--dark-deep)] border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] flex items-center justify-center">
              <Shield className="h-4 w-4 text-[var(--dark)]" />
            </div>
            <span className="text-lg font-extrabold text-white/80">
              Pro<span className="text-[var(--gold)]">kip</span>
            </span>
          </div>
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Prokip. Protecting businesses across Africa.
          </p>
        </div>
      </footer>
    </div>
  );
}
