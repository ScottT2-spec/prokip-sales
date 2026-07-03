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
} from "lucide-react";

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

export default function ProkipSalesPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(YOUTUBE_VIDEO_1);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    ownsBusiness: "",
    employees: "",
  });

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
      <div className="min-h-screen bg-gradient-to-b from-[#011635] to-[#072654] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30">
            <CheckCircle2 className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">Thank you</h1>
          <p className="text-xl font-semibold text-amber-400 mb-6">
            Your Request Was Received Successfully
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-4">
            <p className="text-lg text-white/90">
              A Call Agent Will Call You Within 24 Hrs To Explain To You More
              About Prokip And How It Can Help Your Business.
            </p>
            <p className="text-white/70">
              If You Can&apos;t Wait For The Call, You Can Call Us Directly On:
            </p>
            <a
              href="tel:+2349019183882"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-xl font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25"
            >
              <Phone className="h-6 w-6" />
              +2349019183882
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
              className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full rounded-2xl"
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
            className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700">
                Enter your correct details to book a
              </p>
              <p className="text-2xl font-extrabold text-[#011635]">
                FREE call
              </p>
              <p className="text-lg text-gray-700">
                with Prokip representative and
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none"
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
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#011635] focus:ring-2 focus:ring-[#011635]/20 outline-none"
                >
                  <option value="">- Select -</option>
                  <option value="None">None</option>
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-[#011635] py-4 text-lg font-bold text-white hover:bg-[#072654] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Yes, I&apos;m Ready to Secure My Business{" "}
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          HERO — Dark navy
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-[#011635] to-[#072654] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-8">
            <Shield className="h-4 w-4" />
            FOR BUSINESS OWNERS ONLY!
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Here&apos;s How to Stop Employees Theft, Mismanagement of Funds And
            Loss In Your Business
          </h1>

          {/* Video thumbnail */}
          <div className="relative max-w-3xl mx-auto mb-8">
            <button
              onClick={() => openVideo(YOUTUBE_VIDEO_1)}
              className="group relative w-full aspect-video rounded-2xl overflow-hidden bg-black/40 border-2 border-white/10 hover:border-amber-500/50 transition-all"
            >
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_1}/maxresdefault.jpg`}
                alt="Prokip testimonial video"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>
            </button>
          </div>

          <p className="text-xl sm:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
            Now you can grow your business successfully, have more freedom and
            enjoy the life you really deserve!
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            I&apos;m Ready to Get Rid of Theft In My Business
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SALES LETTER BODY
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-gray-800"
          style={{ fontSize: "1.2rem", lineHeight: "1.85" }}
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

          <p>As you already know…</p>

          <p>Nowadays, lots of businesses are shutting down.</p>

          <p>The rate is higher than ever before</p>

          <p>And you know why?</p>

          <p>
            It&apos;s not actually because they are not making enough sales…
          </p>

          <p>But because of…</p>

          <div className="my-10 rounded-2xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-8 text-center">
            <p className="text-2xl sm:text-3xl font-extrabold text-red-700">
              Unknown Employees Theft &amp; Mismanagement of Business Funds
            </p>
          </div>

          <p>
            Most business owners invest a lot of money in their businesses…
          </p>

          <p>
            And they work tirelessly without results because{" "}
            <strong>someone else is eating their profits.</strong>
          </p>

          <p>Think about it...</p>

          <p>
            If your salesboy or salesgirl steals just N1000 daily from your
            business…
          </p>

          <div className="my-8 rounded-2xl bg-[#011635] p-6 sm:p-8 text-center">
            <p className="text-xl sm:text-2xl font-bold text-amber-400 mb-2">
              That&apos;s over N300,000 GONE at the end of the year.
            </p>
            <p className="text-white/70 italic">
              (that&apos;s if it&apos;s just N1,000 they are exploiting from
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
            you&apos;re joking
          </p>

          <p>You see…</p>

          <p>
            Reports have shown that some employees go as far as adjusting stock
            inventory, manipulating sales transactions and expenses so they
            don&apos;t get caught.
          </p>

          <p>
            <strong>Truth be told:</strong>
          </p>

          <p>Your employees will always want to exploit your business...</p>

          <p>Not because they hate you</p>

          <p>But because they will always need extra money.</p>

          <p>
            Their salary will never be enough even if you think you are paying
            them well enough.
          </p>

          <p className="italic text-gray-500">
            (Remember, human wants are unlimited)
          </p>

          <p>
            <strong>But don&apos;t worry…</strong>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SOLUTION — Prokip intro + features
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-6">
            <CheckCircle2 className="h-4 w-4" />
            100% Control Over Your Business
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011635] mb-4">
            Now you can have 100% control over your business.
          </h2>

          <p className="text-2xl font-bold text-amber-600 mb-4">
            Prokip is all you need to run a successful business
          </p>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Prokip is a powerful accounting &amp; business management software
            that helps you{" "}
            <strong>
              monitor, automate and grow your business faster with ease
            </strong>
          </p>

          <div className="text-left mb-12">
            <p className="text-center text-lg font-bold text-[#011635] mb-8">
              With Prokip, ALL the loopholes in your business will be fixed:
            </p>
            <div className="space-y-4">
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
                  >
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#011635] to-[#072654]">
                      <Icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <p className="text-lg text-gray-800 pt-2">
                      {feature.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#011635] mb-12">
            Here&apos;s What Other Business Owners Like You Are Saying About
            Prokip
          </h2>

          <div className="relative max-w-3xl mx-auto mb-12">
            <button
              onClick={() => openVideo(YOUTUBE_VIDEO_2)}
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
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HYBRID FEATURE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-[#011635] to-[#072654] p-10 sm:p-14 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
              <Zap className="h-4 w-4" />
              The best part?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
              Prokip is built with a hybrid feature that allows you to work
              offline and online.
            </h3>
            <p className="text-xl text-white/80">
              So, you can easily operate efficiently whether the network is good
              or bad
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#011635] to-[#072654]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Click the button below and fill in your details. You will get a FREE
            call from one of our representatives who will help secure your
            business with Prokip…regardless of your location
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-10 py-5 text-lg font-bold text-[#011635] hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
          >
            Click Here Now
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
