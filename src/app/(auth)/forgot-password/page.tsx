"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <Link href="/"><span className="font-heading text-3xl font-light tracking-[0.12em] text-[#243C32]">Lumière</span></Link>
        </div>

        {submitted ? (
          <div className="text-center">
            <div className="w-14 h-14 bg-[#E8DCCB] flex items-center justify-center mx-auto mb-6">
              <Mail size={22} className="text-[#243C32]" />
            </div>
            <h2 className="font-heading text-3xl text-[#243C32] font-light mb-3">Check your inbox</h2>
            <p className="text-sm font-body text-[#A9B7A4] mb-6 leading-relaxed">
              If an account exists for <strong className="text-[#243C32]">{email}</strong>, we've sent a password reset link. It may take a few minutes to arrive.
            </p>
            <Link href="/login" className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#B69A65] hover:underline">
              <ArrowLeft size={14} /> Back to Sign In
            </Link>
          </div>
        ) : (
          <>
            <h1 className="font-heading text-3xl text-[#243C32] font-light mb-2">Forgot Password</h1>
            <p className="text-sm font-body text-[#A9B7A4] mb-8 leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${error ? "border-red-400" : "border-[#E8DCCB]"}`}
                  placeholder="your@email.com"
                />
                {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#243C32] text-[#F8F5EF] py-3.5 text-sm font-body font-medium hover:bg-[#1a2d25] transition-colors group">
                Send Reset Link <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
            <div className="text-center mt-6">
              <Link href="/login" className="inline-flex items-center gap-2 text-sm font-body text-[#A9B7A4] hover:text-[#243C32] transition-colors">
                <ArrowLeft size={14} /> Back to Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
