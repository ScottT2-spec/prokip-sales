"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
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
} from "./FilledIcons";
import { ArrowRight, X, Loader2, ChevronUp } from "lucide-react";

const YOUTUBE_VIDEO_1 = "xwkcPcL7DIE";
const YOUTUBE_VIDEO_2 = "WXfLnZ-iyYA";

const FEATURES = [
  {
    icon: CreditCard,
    title:
      "Automatically store customers records, manage credit sales, send payment invoices and receipts",
  },
  {
    icon: BarChart3,
    title:
      "You\u2019ll know exactly how much is being sold every single minute of the day without spending hours keeping paper records that can easily be manipulated",
  },
  {
    icon: Package,
    title:
      "You\u2019ll know exactly how many stocks of each product you have in your store or warehouse and get alerts when they\u2019re about to finish or expire",
  },
  {
    icon: TrendingUp,
    title:
      "You\u2019ll be able to track the sales and cash flow easily without a mistake",
  },
  {
    icon: Lock,
    title:
      "And you\u2019ll be able to prevent your employees from stealing your products and money even if in your absence",
  },
];

/* ── Reusable scroll-reveal wrapper ── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProkipSalesPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEO_1);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showFloatingCta, setShowFloatingCta] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    ownsBusiness: "",
    employees: "",
  });

  useEffect(() => {
    const onScroll = () => setShowFloatingCta(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
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
      <div className="min-h-screen bg-gradient-to-b from-[#011635] via-[#072654] to-[#0a3270] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl shadow-emerald-500/30"
          >
            <CheckCircle2 className="h-14 w-14 text-white" />
          </motion.div>
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Thank you</h1>
          <p className="text-2xl font-semibold text-amber-400 mb-8">
            Your Request Was Received Successfully
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 space-y-5">
            <p className="text-lg text-white/90 leading-relaxed">
              A Call Agent Will Call You Within 24 Hrs To Explain To You More
              About Prokip And How It Can Help Your Business.
            </p>
            <p className="text-white/60">
              If You Can&apos;t Wait For The Call, You Can Call Us Directly On:
            </p>
            <a
              href="tel:+2349019183882"
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/25 hover:-translate-y-1"
            >
              <Phone className="h-6 w-6" />
              +2349019183882
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── VIDEO MODAL ── */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-amber-400 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                className="w-full h-full rounded-2xl shadow-2xl"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── LEAD FORM MODAL ── */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Enter your correct details to book a
                </p>
                <p className="text-3xl font-extrabold text-[#011635] my-1">
                  FREE call
                </p>
                <p className="text-lg text-gray-600">
                  with Prokip representative and
                </p>
                <p className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  secure your business 100%
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" /></svg>
                    </div>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm((p) => ({ ...p, firstName: e.target.value }))}
                      className="w-full rounded-2xl border-0 bg-[#f5f7fa] pl-12 pr-4 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#011635]/20 transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" /><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" /></svg>
                    </div>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full rounded-2xl border-0 bg-[#f5f7fa] pl-12 pr-4 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#011635]/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" /></svg>
                    </div>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full rounded-2xl border-0 bg-[#f5f7fa] pl-12 pr-4 py-4 text-base text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#011635]/20 transition-all"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                {/* Own business */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">
                    Do you own a business?
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75a24.726 24.726 0 0 1-7.814-1.259c-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25ZM7.5 15.972v4.428c0 1.034.792 1.96 1.872 2.098 2.026.26 4.095.396 6.187.378 1.823-.013 3.617-.178 5.382-.498A2.019 2.019 0 0 0 22.5 20.4v-4.428a25.22 25.22 0 0 1-3-.267v.317a.75.75 0 0 1-1.5 0v-.573a25.3 25.3 0 0 1-3-.135v.708a.75.75 0 0 1-1.5 0v-.837a25.32 25.32 0 0 1-3 .135v.573a.75.75 0 0 1-1.5 0v-.317a25.22 25.22 0 0 1-3 .267Zm3-10.472v-.75a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v.75h-6Z" clipRule="evenodd" /></svg>
                    </div>
                    <select
                      required
                      value={form.ownsBusiness}
                      onChange={(e) => setForm((p) => ({ ...p, ownsBusiness: e.target.value }))}
                      className="w-full appearance-none rounded-2xl border-0 bg-[#f5f7fa] pl-12 pr-10 py-4 text-base text-gray-900 outline-none focus:ring-2 focus:ring-[#011635]/20 transition-all"
                    >
                      <option value="">- Select -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </div>
                </div>

                {/* Employees */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-2">
                    How many employees do you have?
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 17.243a11.68 11.68 0 0 1 8.38-.328 7.116 7.116 0 0 1 4.56 5.335.75.75 0 0 1-.737.875H3.787a.75.75 0 0 1-.737-.875 7.116 7.116 0 0 1 3.26-5.007ZM19.658 17.12a8.645 8.645 0 0 0-.37-.266.75.75 0 0 1 .158-1.334 5.625 5.625 0 0 1 4.492.665.75.75 0 0 1-.079 1.304 9.413 9.413 0 0 1-4.201-.37ZM4.342 17.12a9.413 9.413 0 0 1-4.2.37.75.75 0 0 1-.08-1.303 5.625 5.625 0 0 1 4.493-.665.75.75 0 0 1 .157 1.334 8.645 8.645 0 0 0-.37.265Z" /></svg>
                    </div>
                    <select
                      required
                      value={form.employees}
                      onChange={(e) => setForm((p) => ({ ...p, employees: e.target.value }))}
                      className="w-full appearance-none rounded-2xl border-0 bg-[#f5f7fa] pl-12 pr-10 py-4 text-base text-gray-900 outline-none focus:ring-2 focus:ring-[#011635]/20 transition-all"
                    >
                      <option value="">- Select -</option>
                      <option value="None">None</option>
                      <option value="1-5">1-5</option>
                      <option value="6-20">6-20</option>
                      <option value="21-50">21-50</option>
                      <option value="51-100">51-100</option>
                      <option value="100+">100+</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-2xl bg-[#1e293b] py-4.5 text-base font-semibold text-white hover:bg-[#334155] transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-3"
                  style={{ paddingTop: "18px", paddingBottom: "18px" }}
                >
                  {submitting ? (
                    <><Loader2 className="h-5 w-5 animate-spin" /> Processing...</>
                  ) : (
                    <>Yes, I&apos;m Ready to Secure My Business <ArrowRight className="h-5 w-5" /></>
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOATING CTA ── */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-[#011635]/95 backdrop-blur-lg p-4 sm:p-5"
          >
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              <p className="text-white/90 text-sm sm:text-base font-medium hidden sm:block">
                Ready to stop employee theft?
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-sm font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/20"
              >
                Get Your FREE Call <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── SCROLL TO TOP ── */}
      <AnimatePresence>
        {showFloatingCta && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ChevronUp className="h-5 w-5 text-gray-700" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#011635] via-[#072654] to-[#0a3270] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-amber-500/8 blur-[150px] animate-pulse" />
          <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/8 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-0 right-1/3 h-[300px] w-[600px] rounded-full bg-amber-500/5 blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2 text-sm font-semibold text-amber-400 mb-10"
          >
            <Shield className="h-4 w-4" />
            FOR BUSINESS OWNERS ONLY!
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight"
          >
            Here&apos;s How to{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Stop Employees Theft
            </span>
            , Mismanagement of Funds And Loss In Your Business
          </motion.h1>

          {/* Video thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-3xl mx-auto mb-10"
          >
            <button
              onClick={() => openVideo(YOUTUBE_VIDEO_1)}
              className="group relative w-full aspect-video rounded-3xl overflow-hidden bg-black/40 border-2 border-white/10 hover:border-amber-500/40 transition-all shadow-2xl shadow-black/30"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_1}/maxresdefault.jpg`}
                alt="Prokip testimonial video"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-2xl shadow-amber-500/40 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-white/80 text-sm font-medium">▶ Watch how Prokip protects businesses</p>
              </div>
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Now you can grow your business successfully, have more freedom and
            enjoy the life you really deserve!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => setShowForm(true)}
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-12 py-6 text-base sm:text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 active:translate-y-0"
            >
              I&apos;m Ready to Get Rid of Theft In My Business
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68.3C120 56.7 240 33.3 360 26.7C480 20 600 30 720 36.7C840 43.3 960 46.7 1080 43.3C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SALES LETTER
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-7 text-gray-800" style={{ fontSize: "0.9rem", lineHeight: "1.75" }}>
            <Reveal><p className="text-lg font-bold text-[#011635]">Dear Business Owner,</p></Reveal>

            <Reveal delay={0.05}><p>If you&apos;d like to protect your business from going bankrupt, then it&apos;s important you read this message without hesitation…</p></Reveal>

            <Reveal delay={0.05}><p className="font-bold text-[#011635] text-base">Here&apos;s why:</p></Reveal>

            <Reveal><p>As you already know…</p></Reveal>
            <Reveal><p>Nowadays, lots of businesses are shutting down.</p></Reveal>
            <Reveal><p>The rate is higher than ever before</p></Reveal>
            <Reveal><p>And you know why?</p></Reveal>
            <Reveal><p>It&apos;s not actually because they are not making enough sales…</p></Reveal>
            <Reveal><p>But because of…</p></Reveal>

            <Reveal>
              <div className="my-12 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-3xl blur-lg" />
                <div className="relative rounded-3xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 p-10 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-red-700 leading-tight">
                    Unknown Employees Theft &amp; Mismanagement of Business Funds
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal><p>Most business owners invest a lot of money in their businesses…</p></Reveal>
            <Reveal><p>And they work tirelessly without results because <strong className="text-[#011635]">someone else is eating their profits.</strong></p></Reveal>
            <Reveal><p className="font-medium">Think about it...</p></Reveal>
            <Reveal><p>If your salesboy or salesgirl steals just N1000 daily from your business…</p></Reveal>

            <Reveal>
              <div className="my-10 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#011635]/30 to-[#0a3270]/30 rounded-3xl blur-lg" />
                <div className="relative rounded-3xl bg-gradient-to-br from-[#011635] to-[#0a3270] p-8 sm:p-10 text-center">
                  <p className="text-lg sm:text-xl font-extrabold text-amber-400 mb-3">
                    That&apos;s over N300,000 GONE at the end of the year.
                  </p>
                  <p className="text-white/60 italic text-lg">
                    (that&apos;s if it&apos;s just ₦1,000 they are exploiting from your business)
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal><p>What if you have more than one employee stealing from your business without you knowing?</p></Reveal>
            <Reveal><p>Well, it&apos;s a matter of time before your business shuts down.</p></Reveal>
            <Reveal><p>And if you think CCTV cameras will save your business, then you&apos;re joking</p></Reveal>
            <Reveal><p>You see…</p></Reveal>
            <Reveal><p>Reports have shown that some employees go as far as adjusting stock inventory, manipulating sales transactions and expenses so they don&apos;t get caught.</p></Reveal>
            <Reveal><p className="font-bold text-[#011635] text-base">Truth be told:</p></Reveal>
            <Reveal><p>Your employees will always want to exploit your business...</p></Reveal>
            <Reveal><p>Not because they hate you</p></Reveal>
            <Reveal><p>But because they will always need extra money.</p></Reveal>
            <Reveal><p>Their salary will never be enough even if you think you are paying them well enough.</p></Reveal>
            <Reveal><p className="italic text-gray-400 text-lg">(Remember, human wants are unlimited)</p></Reveal>
            <Reveal><p className="font-bold text-[#011635] text-base">But don&apos;t worry…</p></Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SOLUTION — Prokip intro + features
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-amber-500/5 rounded-full blur-[120px]" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 mb-8">
              <CheckCircle2 className="h-4 w-4" />
              100% Control Over Your Business
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#011635] mb-5 tracking-tight">
              Now you can have 100% control over your business.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-5">
              Prokip is all you need to run a successful business
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Prokip is a powerful accounting &amp; business management software
              that helps you{" "}
              <strong className="text-[#011635]">monitor, automate and grow your business faster with ease</strong>
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-center text-base font-bold text-[#011635] mb-10">
              With Prokip, ALL the loopholes in your business will be fixed:
            </p>
          </Reveal>

          <div className="text-left space-y-5">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="group flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-amber-200 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#011635] to-[#0a3270] shadow-lg shadow-[#011635]/20 group-hover:shadow-[#011635]/40 transition-shadow">
                      <Icon className="h-7 w-7 text-amber-400" />
                    </div>
                    <p className="text-sm text-gray-800 pt-2.5 leading-relaxed">{feature.title}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#011635] mb-14 tracking-tight">
              Here&apos;s What Other Business Owners Like You Are Saying About Prokip
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-500/20 to-[#011635]/20 rounded-3xl blur-xl" />
              <button
                onClick={() => openVideo(YOUTUBE_VIDEO_2)}
                className="group relative w-full aspect-video rounded-3xl overflow-hidden bg-black/40 border-2 border-gray-200 hover:border-amber-500/50 transition-all shadow-2xl"
              >
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_2}/maxresdefault.jpg`}
                  alt="Prokip customer testimonial"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-2xl shadow-amber-500/40 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-white/80 text-sm font-medium">▶ Hear from real business owners</p>
                </div>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HYBRID FEATURE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#011635]/40 to-[#0a3270]/40 rounded-[2rem] blur-xl" />
              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#011635] via-[#072654] to-[#0a3270] p-12 sm:p-16 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-amber-500/10 blur-[60px]" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[60px]" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/30 px-5 py-2 text-sm font-semibold text-amber-400 mb-8">
                    <Zap className="h-4 w-4" />
                    The best part?
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-4 leading-tight tracking-tight">
                    Prokip is built with a hybrid feature that allows you to work{" "}
                    <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                      offline and online.
                    </span>
                  </h3>
                  <p className="text-xl text-white/70 leading-relaxed">
                    So, you can easily operate efficiently whether the network is
                    good or bad
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-36 bg-gradient-to-b from-[#011635] via-[#072654] to-[#0a3270] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-amber-500/8 blur-[150px]" />
        </div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              Ready to Secure Your Business?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
              Click the button below and fill in your details. You will get a FREE
              call from one of our representatives who will help secure your
              business with Prokip…regardless of your location
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <button
              onClick={() => setShowForm(true)}
              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 px-14 py-7 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:-translate-y-1 active:translate-y-0"
            >
              Click Here Now
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Bottom spacer for floating CTA */}
      <div className="h-20" />
    </div>
  );
}
