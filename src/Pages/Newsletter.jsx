import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Newsletter = ({ prefillEmail = "" }) => {
  const [email, setEmail] = useState(prefillEmail);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
   toast.success('Successfully Submitted')

    if (!validateEmail(email)) {
      setError("সঠিক ইমেইল দিন (example@mail.com)");
      return;
    }

    try {
      setStatus("loading");
      await new Promise((res) => setTimeout(res, 700));

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
      setError("Oops! There was an issue subscribing. Please try again later.");
    }
  };

  return (
    <section className="w-11/12 mx-auto my-16">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-cyan-700 drop-shadow-sm">
        Join the <span className="text-gray-800">GameHub</span> Newsletter
      </h2>

      {/* Newsletter Box */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-cyan-50 to-white p-10 sm:p-14 border border-cyan-100"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-cyan-800 mb-3">
              Discover Indie Games Early 🎮
            </h3>
            <p className="text-cyan-700/90 leading-relaxed">
              Subscribe to get curated indie game updates, developer insights, and exclusive GameHub
              events directly to your inbox.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-100 shadow-md"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-gray-800 border border-cyan-200 focus:ring-2 focus:ring-cyan-400 transition"
                  aria-invalid={!!error}
                  required
                />
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    status === "loading"
                      ? "bg-cyan-300 cursor-wait"
                      : "bg-cyan-500 hover:bg-cyan-400"
                  } text-white`}
                >
                  {status === "loading" ? "Please wait..." : "Subscribe"}
                </button>
              </div>

              {/* Messages */}
              <div className="mt-3 min-h-[1.25rem] text-center sm:text-left">
                {error && <p className="text-sm text-rose-500">{error}</p>}
                {status === "success" && (
                  <p className="text-sm text-green-600">Thanks! You're subscribed ✅</p>
                )}
              </div>

              {/* Note */}
              <p className="mt-4 text-xs text-cyan-700/80 text-center sm:text-left">
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

