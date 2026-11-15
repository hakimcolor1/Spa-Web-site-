"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Calendar, Scissors, Users, Settings, BarChart3,
  Clock, TrendingUp, DollarSign, UserCheck, Star, MessageSquare,
  Image, FileText, Bell, LogOut, ChevronRight, Package
} from "lucide-react";
import { treatments, specialists, testimonials } from "@/lib/data";
import { StarRating } from "@/components/ui/StarRating";
import { Badge } from "@/components/ui/Badge";

const mockBookings = [
  { id: "b1", client: "Catherine D.", treatment: "Luxury Glow Facial", date: "2026-11-20", time: "10:00", status: "CONFIRMED", specialist: "Aria Chen", amount: 220 },
  { id: "b2", client: "Priya S.", treatment: "Anti-Aging Facial", date: "2026-11-20", time: "11:30", status: "CONFIRMED", specialist: "Aria Chen", amount: 185 },
  { id: "b3", client: "Rebecca M.", treatment: "Hydrating Facial", date: "2026-11-20", time: "13:00", status: "PENDING", specialist: "Maya Patel", amount: 120 },
  { id: "b4", client: "Emma L.", treatment: "Sensitive Skin Therapy", date: "2026-11-21", time: "09:30", status: "CONFIRMED", specialist: "Sophie Laurent", amount: 125 },
  { id: "b5", client: "James K.", treatment: "Deep Cleansing Facial", date: "2026-11-21", time: "14:00", status: "CANCELLED", specialist: "James Okafor", amount: 135 },
];

const statusColors: Record<string, string> = {
  CONFIRMED: "bg-green-50 text-green-700",
  PENDING: "bg-yellow-50 text-yellow-700",
  CANCELLED: "bg-red-50 text-red-700",
  COMPLETED: "bg-[#E8DCCB] text-[#262622]",
};

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "bookings", label: "Bookings", icon: Calendar },
  { id: "treatments", label: "Treatments", icon: Scissors },
  { id: "specialists", label: "Specialists", icon: UserCheck },
  { id: "customers", label: "Customers", icon: Users },
  { id: "reviews", label: "Reviews", icon: Star },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "blog", label: "Blog", icon: FileText },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function AdminPage() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const stats = [
    { label: "Today's Bookings", value: "8", icon: Calendar, change: "+3 vs yesterday" },
    { label: "Monthly Revenue", value: "£14,280", icon: DollarSign, change: "+12% vs last month" },
    { label: "Total Clients", value: "4,183", icon: Users, change: "+24 this week" },
    { label: "Avg Rating", value: "4.9", icon: Star, change: "From 1,204 reviews" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EF] flex">
      {/* Sidebar */}
      <aside className="w-60 bg-[#243C32] flex flex-col shrink-0 hidden lg:flex">
        <div className="p-6 border-b border-[#A9B7A4]/20">
          <Link href="/">
            <span className="font-heading text-2xl font-light tracking-widest text-[#F8F5EF]">Lumière</span>
            <span className="block text-[9px] font-body tracking-[0.3em] uppercase text-[#A9B7A4] mt-0.5">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 py-6 space-y-0.5 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-body font-medium transition-all rounded-none ${
                  activeNav === item.id
                    ? "bg-[#B69A65] text-white"
                    : "text-[#A9B7A4] hover:bg-[#1a2d25] hover:text-[#E8DCCB]"
                }`}
              >
                <Icon size={15} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#A9B7A4]/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#B69A65] flex items-center justify-center font-heading text-white text-sm">A</div>
            <div>
              <p className="text-xs font-body font-medium text-[#F8F5EF]">Admin User</p>
              <p className="text-[10px] font-body text-[#A9B7A4]">Super Admin</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs font-body text-[#A9B7A4] hover:text-red-400 transition-colors">
            <LogOut size={13} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white border-b border-[#E8DCCB] px-8 py-4 flex items-center justify-between">
          <h1 className="font-body font-semibold text-[#243C32] capitalize">{activeNav}</h1>
          <div className="flex items-center gap-4">
            <Bell size={18} className="text-[#A9B7A4] cursor-pointer hover:text-[#243C32] transition-colors" />
            <Link href="/" className="text-xs font-body text-[#B69A65] hover:underline flex items-center gap-1">
              View Site <ChevronRight size={12} />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-8 overflow-auto">
          {/* DASHBOARD */}
          {activeNav === "dashboard" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="bg-white border border-[#E8DCCB] p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-body text-[#A9B7A4] tracking-wide uppercase">{stat.label}</span>
                        <div className="w-8 h-8 bg-[#E8DCCB] flex items-center justify-center">
                          <Icon size={15} className="text-[#243C32]" />
                        </div>
                      </div>
                      <p className="font-heading text-3xl text-[#243C32] font-light">{stat.value}</p>
                      <p className="text-xs font-body text-[#A9B7A4] mt-1 flex items-center gap-1">
                        <TrendingUp size={10} className="text-green-500" /> {stat.change}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Today's bookings */}
              <div className="bg-white border border-[#E8DCCB]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DCCB]">
                  <h3 className="font-body font-semibold text-sm text-[#243C32]">Today's Schedule</h3>
                  <button onClick={() => setActiveNav("bookings")} className="text-xs font-body text-[#B69A65] hover:underline flex items-center gap-1">
                    View all <ChevronRight size={12} />
                  </button>
                </div>
                <div>
                  {mockBookings.slice(0, 4).map((b, i) => (
                    <div key={b.id} className={`flex items-center gap-4 px-6 py-4 ${i < 3 ? "border-b border-[#E8DCCB]" : ""}`}>
                      <div className="w-16 text-center">
                        <p className="font-body font-semibold text-sm text-[#243C32]">{b.time}</p>
                      </div>
                      <div className="flex-1">
                        <p className="font-body font-medium text-sm text-[#243C32]">{b.client}</p>
                        <p className="text-xs font-body text-[#A9B7A4]">{b.treatment} · {b.specialist}</p>
                      </div>
                      <span className={`text-xs font-body font-medium px-2 py-0.5 ${statusColors[b.status]}`}>{b.status}</span>
                      <span className="text-sm font-body font-medium text-[#243C32]">£{b.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "New Booking", icon: Calendar, action: () => setActiveNav("bookings") },
                  { label: "Add Treatment", icon: Scissors, action: () => setActiveNav("treatments") },
                  { label: "View Reviews", icon: Star, action: () => setActiveNav("reviews") },
                  { label: "Reports", icon: BarChart3, action: () => setActiveNav("reports") },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className="flex flex-col items-center gap-3 p-5 bg-white border border-[#E8DCCB] hover:border-[#A9B7A4] hover:shadow-sm transition-all group"
                    >
                      <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center group-hover:bg-[#243C32] transition-colors">
                        <Icon size={18} className="text-[#243C32] group-hover:text-[#F8F5EF] transition-colors" />
                      </div>
                      <span className="text-xs font-body font-medium text-[#243C32]">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* BOOKINGS */}
          {activeNav === "bookings" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-3xl text-[#243C32] font-light">All Bookings</h2>
                <button className="inline-flex items-center gap-2 bg-[#243C32] text-[#F8F5EF] px-5 py-2.5 text-sm font-body font-medium hover:bg-[#1a2d25] transition-colors">
                  + New Booking
                </button>
              </div>

              {/* Filter bar */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {["All", "CONFIRMED", "PENDING", "CANCELLED", "COMPLETED"].map((s) => (
                  <button key={s} className="px-3 py-1.5 text-xs font-body font-medium border border-[#E8DCCB] text-[#262622] hover:bg-[#E8DCCB] transition-colors">
                    {s}
                  </button>
                ))}
              </div>

              <div className="bg-white border border-[#E8DCCB] overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E8DCCB] bg-[#F8F5EF]">
                      {["Client", "Treatment", "Specialist", "Date & Time", "Amount", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-xs font-body font-semibold text-[#A9B7A4] tracking-widest uppercase">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockBookings.map((b, i) => (
                      <tr key={b.id} className={`border-b border-[#E8DCCB] hover:bg-[#F8F5EF] transition-colors ${i === mockBookings.length - 1 ? "border-b-0" : ""}`}>
                        <td className="px-5 py-4 font-body text-sm font-medium text-[#243C32]">{b.client}</td>
                        <td className="px-5 py-4 font-body text-sm text-[#262622]/70">{b.treatment}</td>
                        <td className="px-5 py-4 font-body text-sm text-[#262622]/70">{b.specialist}</td>
                        <td className="px-5 py-4 font-body text-sm text-[#262622]/70">{b.date} {b.time}</td>
                        <td className="px-5 py-4 font-body text-sm font-medium text-[#243C32]">£{b.amount}</td>
                        <td className="px-5 py-4">
                          <span className={`text-xs font-body font-medium px-2.5 py-1 ${statusColors[b.status]}`}>{b.status}</span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex gap-2">
                            <button className="text-xs font-body text-[#B69A65] hover:underline">Edit</button>
                            <button className="text-xs font-body text-red-500 hover:underline">Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TREATMENTS */}
          {activeNav === "treatments" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-3xl text-[#243C32] font-light">Treatments</h2>
                <button className="inline-flex items-center gap-2 bg-[#243C32] text-[#F8F5EF] px-5 py-2.5 text-sm font-body font-medium hover:bg-[#1a2d25] transition-colors">
                  + Add Treatment
                </button>
              </div>
              <div className="bg-white border border-[#E8DCCB]">
                {treatments.map((t, i) => (
                  <div key={t.id} className={`flex items-center gap-5 px-6 py-4 ${i < treatments.length - 1 ? "border-b border-[#E8DCCB]" : ""} hover:bg-[#F8F5EF] transition-colors`}>
                    <img src={t.image} alt={t.name} className="w-14 h-14 object-cover shrink-0" />
                    <div className="flex-1">
                      <p className="font-body font-semibold text-sm text-[#243C32]">{t.name}</p>
                      <p className="text-xs font-body text-[#A9B7A4] mt-0.5">{t.category} · {t.duration} min</p>
                    </div>
                    <div className="text-right">
                      <p className="font-body font-semibold text-sm text-[#243C32]">£{t.price}</p>
                      <div className="flex items-center gap-1 justify-end mt-0.5">
                        <StarRating rating={t.rating} size={10} />
                        <span className="text-xs font-body text-[#A9B7A4]">({t.reviewCount})</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="text-xs font-body text-[#B69A65] hover:underline">Edit</button>
                      <button className="text-xs font-body text-red-500 hover:underline">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SPECIALISTS */}
          {activeNav === "specialists" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-3xl text-[#243C32] font-light">Specialists</h2>
                <button className="inline-flex items-center gap-2 bg-[#243C32] text-[#F8F5EF] px-5 py-2.5 text-sm font-body font-medium hover:bg-[#1a2d25] transition-colors">
                  + Add Specialist
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {specialists.map((s) => (
                  <div key={s.id} className="bg-white border border-[#E8DCCB] p-5 flex gap-4">
                    <img src={s.image} alt={s.name} className="w-16 h-16 object-cover shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-body font-semibold text-sm text-[#243C32]">{s.name}</p>
                          <p className="text-xs font-body text-[#A9B7A4] mt-0.5">{s.designation}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-xs font-body text-[#B69A65] hover:underline">Edit</button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {s.expertise.map((e) => (
                          <Badge key={e} variant="sage">{e}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REVIEWS */}
          {activeNav === "reviews" && (
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-6">Reviews</h2>
              <div className="space-y-4">
                {testimonials.map((t) => (
                  <div key={t.id} className="bg-white border border-[#E8DCCB] p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center font-heading text-[#243C32] shrink-0">
                      {t.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-body font-semibold text-sm text-[#243C32]">{t.name}</p>
                        <StarRating rating={t.rating} size={12} />
                      </div>
                      <p className="text-xs font-body text-[#B69A65] mb-2">{t.treatment}</p>
                      <p className="text-sm font-body text-[#262622]/65 italic">"{t.review}"</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button className="text-xs font-body bg-green-50 text-green-700 px-3 py-1 hover:bg-green-100 transition-colors">Approve</button>
                      <button className="text-xs font-body bg-red-50 text-red-600 px-3 py-1 hover:bg-red-100 transition-colors">Reject</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* REPORTS */}
          {activeNav === "reports" && (
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-6">Reports & Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#E8DCCB] p-6">
                  <h3 className="font-body font-semibold text-sm text-[#243C32] mb-5">Monthly Revenue</h3>
                  <div className="space-y-3">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"].map((month, i) => {
                      const vals = [8200, 7400, 9100, 10200, 11500, 12800, 11200, 13400, 12900, 14100, 14280];
                      const max = Math.max(...vals);
                      const pct = Math.round((vals[i] / max) * 100);
                      return (
                        <div key={month} className="flex items-center gap-3">
                          <span className="text-xs font-body text-[#A9B7A4] w-6">{month}</span>
                          <div className="flex-1 h-5 bg-[#F8F5EF] relative overflow-hidden">
                            <div className="h-full bg-[#243C32]" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs font-body text-[#262622] font-medium w-14 text-right">£{(vals[i]/1000).toFixed(1)}k</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white border border-[#E8DCCB] p-6">
                  <h3 className="font-body font-semibold text-sm text-[#243C32] mb-5">Popular Treatments</h3>
                  <div className="space-y-4">
                    {treatments.map((t) => (
                      <div key={t.id} className="flex items-center gap-3">
                        <span className="text-xs font-body text-[#262622]/70 flex-1">{t.name}</span>
                        <div className="w-24 h-1.5 bg-[#F8F5EF]">
                          <div className="h-full bg-[#B69A65]" style={{ width: `${(t.reviewCount / 157) * 100}%` }} />
                        </div>
                        <span className="text-xs font-body text-[#A9B7A4] w-8 text-right">{t.reviewCount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* OTHER SECTIONS — placeholder */}
          {!["dashboard","bookings","treatments","specialists","reviews","reports"].includes(activeNav) && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-[#E8DCCB] flex items-center justify-center mx-auto mb-4">
                <Settings size={24} className="text-[#A9B7A4]" />
              </div>
              <h3 className="font-heading text-2xl text-[#243C32] font-light mb-2 capitalize">{activeNav}</h3>
              <p className="text-sm font-body text-[#A9B7A4]">This section is ready for backend integration.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
