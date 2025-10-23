import React, { useState } from "react";
import { motion } from "framer-motion";
const Newsletter = ({ prefillEmail = "" }) => {
    const [email, setEmail] = useState(prefillEmail);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    // simple regex for email validation (good enough for UI)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("সঠিক ইমেইল দিন (example@mail.com)");
      return;
    }

    try {
      setStatus("loading");

      // ======= Replace this block with real API call (Firebase/Netlify function/Mailchimp) =======
      // Example:
      // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email }) });

      // Mocking network delay
      await new Promise((res) => setTimeout(res, 700));
      // ==========================================================================================

      // You can also save to localStorage as a simple mock:
      const saved = JSON.parse(localStorage.getItem("gamehub_subscribers") || "[]");
      if (!saved.includes(email)) {
        saved.push(email);
        localStorage.setItem("gamehub_subscribers", JSON.stringify(saved));
      }

      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setEmail("");
      }, 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("ওপস! সাবস্ক্রাইব করতে সমস্যা হয়েছে। পরে চেষ্টা করুন।");
    }
  };

    return (
     <section className="w-11/12 mx-auto my-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-cyan-300 drop-shadow-sm">
        Join the <span className="text-white">GameHub</span> Newsletter
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-cyan-700/90 to-slate-900/80"
      >
        {/* Background decorative images (replace with your own game images) */}
        <img
          src="https://i.ibb.co.com/kgWq1cpS/5d356e494809537e071e93cbb94d1977.jpg"
          alt="gaming-bg"
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        />

        <div className="relative z-10 px-6 py-10 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
          {/* Left: text + mini showcase */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Get Early Access to Indie Releases 🎮
            </h3>
            <p className="text-cyan-100/95 mb-6">
              Subscribe to discover curated indie games, developer interviews, and exclusive GameHub events — straight to your inbox.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              {/* small game thumbnails */}
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-md border-2 border-white/20" src="https://i.ibb.co.com/kgWq1cpS/5d356e494809537e071e93cbb94d1977.jpg" alt="thumb1" />
                <img className="w-12 h-12 rounded-md border-2 border-white/20" src="https://i.ibb.co.com/kgWq1cpS/5d356e494809537e071e93cbb94d1977.jpg" alt="thumb2" />
                <img className="w-12 h-12 rounded-md border-2 border-white/20" src="https://i.ibb.co.com/kgWq1cpS/5d356e494809537e071e93cbb94d1977.jpg" alt="thumb3" />
              </div>
              <span className="text-cyan-100 text-sm">Curated picks from indie devs</span>
            </div>
          </div>

          {/* Right: form */}
          <div className="mt-8 lg:mt-0 w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/5 shadow-inner">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex gap-3">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-slate-900"
                  aria-invalid={!!error}
                  required
                />
                <button
                  type="submit"
                  className={`px-5 py-3 rounded-lg font-semibold transition ${
                    status === "loading"
                      ? "bg-cyan-400/70 cursor-wait"
                      : "bg-cyan-500 hover:bg-cyan-400"
                  } text-white`}
                >
                  {status === "loading" ? "Please wait..." : "Subscribe"}
                </button>
              </div>

              {/* status / error */}
              <div className="mt-3 min-h-[1.25rem]">
                {error && <p className="text-sm text-rose-300">{error}</p>}
                {status === "success" && <p className="text-sm text-green-300">Thanks! You're subscribed ✅</p>}
              </div>

              {/* small note */}
              <p className="mt-4 text-xs text-cyan-100/80">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
    );
};

export default Newsletter;