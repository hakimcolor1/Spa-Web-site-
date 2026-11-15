"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.email.trim()) e.email = "Email is required";
    if (!form.password) e.password = "Password is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // Authentication handled by backend
    alert("Login functionality requires backend configuration.");
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex">
      {/* Left image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=85"
          alt="Lumière spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#243C32]/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-12">
          <Link href="/" className="mb-auto pt-10">
            <span className="font-heading text-4xl font-light tracking-[0.12em] text-[#F8F5EF]">Lumière</span>
            <span className="block text-[9px] font-body tracking-[0.3em] uppercase text-[#A9B7A4] mt-1">Spa & Skincare</span>
          </Link>
          <div className="pb-20">
            <h2 className="font-heading text-4xl text-[#F8F5EF] font-light leading-tight mb-4">
              Welcome back.
            </h2>
            <p className="text-sm font-body text-[#A9B7A4] leading-relaxed">
              Sign in to manage your appointments, view your treatment history, and access your membership benefits.
            </p>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden text-center mb-10">
            <Link href="/">
              <span className="font-heading text-3xl font-light tracking-[0.12em] text-[#243C32]">Lumière</span>
            </Link>
          </div>

          <h1 className="font-heading text-3xl text-[#243C32] font-light mb-2">Sign In</h1>
          <p className="text-sm font-body text-[#A9B7A4] mb-8">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#B69A65] hover:underline">Create one</Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.email ? "border-red-400" : "border-[#E8DCCB]"}`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] pr-11 ${errors.password ? "border-red-400" : "border-[#E8DCCB]"}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A9B7A4] hover:text-[#243C32] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-body text-[#262622]/65 cursor-pointer">
                <input type="checkbox" className="w-3.5 h-3.5" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-sm font-body text-[#B69A65] hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#243C32] text-[#F8F5EF] py-3.5 text-sm font-body font-medium tracking-wide hover:bg-[#1a2d25] transition-colors group"
            >
              Sign In <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </form>

          <p className="text-center text-xs font-body text-[#A9B7A4] mt-8">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="text-[#B69A65] hover:underline">Terms</Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#B69A65] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
