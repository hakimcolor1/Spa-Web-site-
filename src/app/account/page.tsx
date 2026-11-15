"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User, Heart, Bell, LogOut, ChevronRight, Star, ArrowRight } from "lucide-react";
import { treatments, testimonials } from "@/lib/data";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const mockBookings = [
  { id: "b1", treatment: "Luxury Glow Facial", date: "2026-11-20", time: "10:00", status: "CONFIRMED", price: 220, specialist: "Aria Chen" },
  { id: "b2", treatment: "Hydrating Facial", date: "2026-10-15", time: "14:30", status: "COMPLETED", price: 120, specialist: "Maya Patel" },
  { id: "b3", treatment: "Anti-Aging Facial", date: "2026-09-08", time: "11:00", status: "COMPLETED", price: 185, specialist: "Aria Chen" },
];

const navItems = [
  { id: "overview", label: "Overview", icon: User },
  { id: "bookings", label: "My Bookings", icon: Calendar },
  { id: "saved", label: "Saved Treatments", icon: Heart },
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
];

const statusColors: Record<string, string> = {
  CONFIRMED: "bg-green-50 text-green-700",
  COMPLETED: "bg-[#E8DCCB] text-[#262622]",
  CANCELLED: "bg-red-50 text-red-700",
  PENDING: "bg-yellow-50 text-yellow-700",
};

export default function AccountPage() {
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F8F5EF]">
      {/* Top bar */}
      <div className="bg-[#243C32] border-b border-[#A9B7A4]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-light tracking-widest text-[#F8F5EF]">
            Lumière
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-body text-[#A9B7A4]">Welcome, Catherine</span>
            <Button href="/" variant="outline" size="sm" className="border-[#A9B7A4]/30 text-[#E8DCCB] hover:bg-white/10 hover:text-white">
              Back to Site
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Profile card */}
            <div className="bg-white border border-[#E8DCCB] p-6 mb-6 text-center">
              <div className="w-16 h-16 bg-[#E8DCCB] flex items-center justify-center mx-auto mb-3 font-heading text-2xl text-[#243C32]">
                C
              </div>
              <h3 className="font-body font-semibold text-[#243C32]">Catherine D.</h3>
              <p className="text-xs font-body text-[#A9B7A4] mt-0.5">Member since 2024</p>
              <Badge variant="gold" className="mt-3">Premium Member</Badge>
            </div>

            {/* Nav */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveNav(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-body font-medium transition-all ${
                      activeNav === item.id
                        ? "bg-[#243C32] text-[#F8F5EF]"
                        : "text-[#262622] hover:bg-[#E8DCCB]"
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </button>
                );
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-body font-medium text-red-500 hover:bg-red-50 transition-all mt-2">
                <LogOut size={15} />
                Sign Out
              </button>
            </nav>
          </aside>

          {/* Main */}
          <main className="lg:col-span-3 space-y-6">
            {activeNav === "overview" && (
              <>
                {/* Welcome */}
                <div className="bg-[#243C32] p-8">
                  <p className="text-xs font-body text-[#B69A65] tracking-widest uppercase mb-2">Good morning</p>
                  <h1 className="font-heading text-3xl text-[#F8F5EF] font-light mb-2">Catherine</h1>
                  <p className="text-sm font-body text-[#A9B7A4]">
                    Your next appointment is in <strong className="text-[#E8DCCB]">5 days</strong>.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Total Visits", value: "12" },
                    { label: "This Year", value: "8" },
                    { label: "Treatments", value: "3" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-[#E8DCCB] p-5 text-center">
                      <p className="font-heading text-3xl text-[#243C32] font-light">{stat.value}</p>
                      <p className="text-xs font-body text-[#A9B7A4] mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Upcoming */}
                <div className="bg-white border border-[#E8DCCB] p-6">
                  <h3 className="font-body font-semibold text-sm text-[#243C32] tracking-widest uppercase mb-5">
                    Upcoming Appointment
                  </h3>
                  {mockBookings.filter((b) => b.status === "CONFIRMED").map((b) => (
                    <div key={b.id} className="flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <p className="font-body font-semibold text-[#243C32]">{b.treatment}</p>
                        <p className="text-sm font-body text-[#A9B7A4] mt-0.5">with {b.specialist}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs font-body text-[#262622]/65">
                          <span className="flex items-center gap-1"><Calendar size={11} /> {b.date}</span>
                          <span className="flex items-center gap-1"><Clock size={11} /> {b.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className={`text-xs font-body font-medium px-3 py-1 ${statusColors[b.status]}`}>{b.status}</span>
                        <button className="text-xs font-body text-red-500 hover:underline">Cancel</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick book */}
                <div className="bg-[#E8DCCB] p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-body font-semibold text-[#243C32] mb-1">Ready for your next treatment?</h3>
                    <p className="text-sm font-body text-[#262622]/65">Your next session makes all the difference.</p>
                  </div>
                  <Button href="/book" size="sm">Book Now</Button>
                </div>
              </>
            )}

            {activeNav === "bookings" && (
              <div>
                <h2 className="font-heading text-3xl text-[#243C32] font-light mb-6">My Bookings</h2>
                <div className="space-y-4">
                  {mockBookings.map((b) => (
                    <div key={b.id} className="bg-white border border-[#E8DCCB] p-6 flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-body font-semibold text-[#243C32]">{b.treatment}</h3>
                          <span className={`text-xs font-body font-medium px-2 py-0.5 ${statusColors[b.status]}`}>{b.status}</span>
                        </div>
                        <p className="text-sm font-body text-[#A9B7A4]">with {b.specialist}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs font-body text-[#262622]/65">
                          <span>{b.date} at {b.time}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-heading text-xl text-[#243C32] font-light">£{b.price}</p>
                        {b.status === "COMPLETED" && (
                          <button className="text-xs font-body text-[#B69A65] hover:underline mt-1 flex items-center gap-1">
                            <Star size={11} /> Leave Review
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeNav === "saved" && (
              <div>
                <h2 className="font-heading text-3xl text-[#243C32] font-light mb-6">Saved Treatments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {treatments.slice(0, 2).map((t) => (
                    <Link key={t.id} href={`/treatments/${t.slug}`} className="group bg-white border border-[#E8DCCB] overflow-hidden flex gap-4 p-4 hover:border-[#A9B7A4] transition-colors">
                      <img src={t.image} alt={t.name} className="w-20 h-20 object-cover shrink-0" />
                      <div>
                        <h3 className="font-body font-semibold text-sm text-[#243C32] group-hover:text-[#B69A65] transition-colors">{t.name}</h3>
                        <p className="text-xs font-body text-[#A9B7A4] mt-0.5">{t.duration} min · £{t.price}</p>
                        <p className="text-xs font-body text-[#B69A65] mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">Book <ArrowRight size={11} /></p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeNav === "profile" && (
              <div>
                <h2 className="font-heading text-3xl text-[#243C32] font-light mb-6">Profile Settings</h2>
                <div className="bg-white border border-[#E8DCCB] p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "First Name", value: "Catherine", type: "text" },
                      { label: "Last Name", value: "D.", type: "text" },
                      { label: "Email", value: "catherine@example.com", type: "email" },
                      { label: "Phone", value: "+44 7700 900123", type: "tel" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">{field.label}</label>
                        <input defaultValue={field.value} type={field.type} className="w-full px-4 py-3 text-sm font-body border border-[#E8DCCB] bg-[#F8F5EF] focus:outline-none focus:border-[#243C32]" />
                      </div>
                    ))}
                  </div>
                  <Button size="md">Save Changes</Button>
                </div>
              </div>
            )}

            {activeNav === "notifications" && (
              <div>
                <h2 className="font-heading text-3xl text-[#243C32] font-light mb-6">Notifications</h2>
                <div className="space-y-3">
                  {[
                    { title: "Appointment Reminder", desc: "Your Luxury Glow Facial is in 5 days.", time: "2 hours ago", read: false },
                    { title: "Booking Confirmed", desc: "Your booking on 20 Nov has been confirmed.", time: "1 day ago", read: true },
                    { title: "Exclusive Offer", desc: "Premium members get 20% off all treatments this week.", time: "3 days ago", read: true },
                  ].map((n, i) => (
                    <div key={i} className={`flex gap-4 p-5 border ${n.read ? "bg-white border-[#E8DCCB]" : "bg-[#E8DCCB]/30 border-[#E8DCCB]"}`}>
                      <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${n.read ? "bg-transparent" : "bg-[#B69A65]"}`} />
                      <div>
                        <p className="font-body font-semibold text-sm text-[#243C32]">{n.title}</p>
                        <p className="text-xs font-body text-[#262622]/65 mt-0.5">{n.desc}</p>
                        <p className="text-xs font-body text-[#A9B7A4] mt-1">{n.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
