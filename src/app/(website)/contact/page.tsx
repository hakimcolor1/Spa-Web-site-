'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Check,
} from 'lucide-react';
import { openingHours } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C32] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>Get in Touch</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Contact <span className="italic text-[#B69A65]">Lumière.</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8F5EF] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionLabel>Visit Us</SectionLabel>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-[#243C32]" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#243C32] mb-1">
                        Address
                      </p>
                      <p className="text-sm font-body text-[#262622]/65">
                        Jashore, Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-[#243C32]" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#243C32] mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+8801818777856"
                        className="text-sm font-body text-[#B69A65] hover:underline"
                      >
                        +8801818777856
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-[#243C32]" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#243C32] mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hakimcolor777@gmail.com"
                        className="text-sm font-body text-[#B69A65] hover:underline"
                      >
                        hakimcolor777@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E8DCCB] flex items-center justify-center shrink-0">
                      <MessageCircle size={16} className="text-[#243C32]" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#243C32] mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/8801818777856"
                        className="text-sm font-body text-[#B69A65] hover:underline"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={15} className="text-[#B69A65]" />
                  <SectionLabel className="mb-0">Opening Hours</SectionLabel>
                </div>
                <div className="space-y-2.5">
                  {openingHours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between text-sm font-body"
                    >
                      <span className="text-[#262622]/65">{h.day}</span>
                      <span className="font-medium text-[#243C32]">
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-[#E8DCCB] h-52 flex items-center justify-center border border-[#E8DCCB]">
                <div className="text-center">
                  <MapPin size={24} className="text-[#A9B7A4] mx-auto mb-2" />
                  <p className="text-xs font-body text-[#A9B7A4]">
                    Jashore, Dhaka, Bangladesh
                  </p>
                  <a
                    href="https://maps.google.com/?q=Jashore,Dhaka,Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-body text-[#B69A65] hover:underline mt-1 inline-block"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <SectionLabel>Send a Message</SectionLabel>
              {submitted ? (
                <div className="bg-[#243C32] p-10 text-center">
                  <div className="w-14 h-14 bg-[#B69A65] flex items-center justify-center mx-auto mb-5">
                    <Check size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-2xl text-[#F8F5EF] font-light mb-3">
                    Message received.
                  </h3>
                  <p className="text-sm font-body text-[#A9B7A4] leading-relaxed">
                    Thank you for reaching out. A member of the Lumière team
                    will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.name ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.email ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm font-body border border-[#E8DCCB] bg-white focus:outline-none focus:border-[#243C32]"
                        placeholder="+44 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">
                        Subject
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 text-sm font-body border border-[#E8DCCB] bg-white focus:outline-none focus:border-[#243C32]"
                      >
                        <option value="">Select a subject</option>
                        <option>Booking Enquiry</option>
                        <option>Treatment Information</option>
                        <option>Membership</option>
                        <option>General Question</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-[#243C32] tracking-wide uppercase mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] resize-none ${errors.message ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#243C32] text-[#F8F5EF] px-8 py-4 text-sm font-body font-medium tracking-wide hover:bg-[#1a2d25] transition-colors group"
                  >
                    Send Message
                    <Send
                      size={15}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
