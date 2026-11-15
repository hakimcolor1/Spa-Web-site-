"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (form.password.length < 8) e.password = "Minimum 8 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords do not match";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-[#243C32] flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-[#B69A65]">✓</span>
          </div>
          <h2 className="font-heading text-3xl text-[#243C32] font-light mb-3">Account created.</h2>
          <p className="text-sm font-body text-[#A9B7A4] mb-6 leading-relaxed">
            We've sent a verification email to <strong className="text-[#243C32]">{form.email}</strong>. Please verify your email to activate your account.
          </p>
          <Link href="/login" className="inline-flex items-center gap-2 bg-[#243C32] text-[#F8F5EF] px-8 py-3.5 text-sm font-body font-medium hover:bg-[#1a2d25] transition-colors">
            Go to Sign In <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=85"
          alt="Lumière spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#243C32]/60 flex flex-col items-center justify-center text-center px-12">
          <Link href="/" className="mb-auto pt-10">
            <span className="font-heading text-4xl font-light tracking-[0.12em] text-[#F8F5EF]">Lumière</span>
          </Link>
          <div className="pb-20">
            <h2 className="font-heading text-4xl text-[#F8F5EF] font-light mb-4">Begin your<br/><span className="italic text-[#B69A65]">skin journey.</span></h2>
            <p className="text-sm font-body text-[#A9B7A4] leading-relaxed">Create your account to book treatments, track your skin history, and access exclusive member content.</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden text-center mb-10">
            <Link href="/"><span className="font-heading text-3xl font-light tracking-[0.12em] text-[#243C32]">Lumière</span></Link>
          </div>
          <h1 className="font-heading text-3xl text-[#243C32] font-light mb-2">Create Account</h1>
          <p className="text-sm font-body text-[#A9B7A4] mb-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#B69A65] hover:underline">Sign in</Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">First Name</label>
                <input type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.firstName ? "border-red-400" : "border-[#E8DCCB]"}`} placeholder="First" />
                {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Last Name</label>
                <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.lastName ? "border-red-400" : "border-[#E8DCCB]"}`} placeholder="Last" />
                {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.email ? "border-red-400" : "border-[#E8DCCB]"}`} placeholder="your@email.com" />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Password</label>
              <div className="relative">
                <input type={showPass ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] pr-11 ${errors.password ? "border-red-400" : "border-[#E8DCCB]"}`} placeholder="Min 8 characters" />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A9B7A4]">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Confirm Password</label>
              <input type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.confirm ? "border-red-400" : "border-[#E8DCCB]"}`} placeholder="Repeat password" />
              {errors.confirm && <p className="text-xs text-red-500 mt-1">{errors.confirm}</p>}
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#243C32] text-[#F8F5EF] py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[#1a2d25] transition-colors mt-2 group">
              Create Account <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
