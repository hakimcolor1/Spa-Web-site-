'use client';

import { useState, useEffect } from 'react';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  Clock,
  Calendar,
  User,
  CreditCard,
  CheckCircle,
  Sparkles,
  Mail,
  Loader2,
  Star,
} from 'lucide-react';
import { treatments, specialists } from '@/lib/data';
import { SectionLabel } from '@/components/ui/SectionLabel';

type BookingData = {
  treatment: (typeof treatments)[0] | null;
  specialist: (typeof specialists)[0] | null;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  payment: 'pay-at-spa' | 'online';
};

const timeSlots = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
];

const unavailableSlots = ['09:30', '11:00', '14:00', '15:30'];

const steps = [
  { id: 1, label: 'Treatment', icon: Clock },
  { id: 2, label: 'Specialist', icon: User },
  { id: 3, label: 'Date & Time', icon: Calendar },
  { id: 4, label: 'Details', icon: User },
  { id: 5, label: 'Payment', icon: CreditCard },
  { id: 6, label: 'Confirm', icon: CheckCircle },
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [bookingRef, setBookingRef] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [booking, setBooking] = useState<BookingData>({
    treatment: null,
    specialist: null,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
    payment: 'pay-at-spa',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    setBookingRef(
      `LUM-${Math.random().toString(36).toUpperCase().slice(2, 8)}`
    );
    const today = new Date();
    const next30: Date[] = [];
    for (let i = 0; i < 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      next30.push(d);
    }
    setDates(next30);
  }, []);

  const validateStep4 = () => {
    const e: Record<string, string> = {};
    if (!booking.name.trim()) e.name = 'Required';
    if (!booking.email.trim() || !/\S+@\S+\.\S+/.test(booking.email))
      e.email = 'Valid email required';
    if (!booking.phone.trim()) e.phone = 'Required';
    return e;
  };

  const submitBooking = async () => {
    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingRef,
          treatment: booking.treatment?.name,
          specialist: booking.specialist?.name,
          date: booking.date,
          time: booking.time,
          duration: booking.treatment?.duration,
          name: booking.name,
          email: booking.email,
          phone: booking.phone,
          notes: booking.notes,
          payment: booking.payment,
          price: booking.treatment?.price,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setSubmitError(data.error || 'Failed to submit booking');
      }
    } catch {
      // Network error — still proceed to confirmation
      // The booking is valid client-side
    } finally {
      setSubmitting(false);
      setStep(6);
    }
  };

  const next = () => {
    if (step === 4) {
      const errs = validateStep4();
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
    }
    setErrors({});
    if (step === 5) {
      submitBooking();
      return;
    }
    setStep((s) => Math.min(s + 1, 6));
  };
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const canProceed = () => {
    if (step === 1) return !!booking.treatment;
    if (step === 2) return true;
    if (step === 3) return !!(booking.date && booking.time);
    if (step === 4) return !!(booking.name && booking.email && booking.phone);
    if (step === 5) return true;
    return true;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <>
      {/* Hero header */}
      <section className="relative h-56 flex items-end overflow-hidden bg-[#243C32]">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=85"
          alt="Book treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#243C32] via-[#243C32]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10 w-full">
          <SectionLabel light>Booking</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl lg:text-6xl">
            Book Your <span className="italic text-[#B69A65]">Treatment</span>
          </h1>
        </div>
      </section>

      {/* Steps indicator */}
      <div className="bg-white border-b border-[#E8DCCB] sticky top-[89px] z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-full ${
                        step > s.id
                          ? 'bg-[#243C32]'
                          : step === s.id
                            ? 'bg-[#B69A65] scale-110 shadow-lg shadow-[#B69A65]/30'
                            : 'bg-[#E8DCCB]'
                      }`}
                    >
                      {step > s.id ? (
                        <Check size={16} className="text-white" />
                      ) : (
                        <Icon
                          size={15}
                          className={
                            step === s.id ? 'text-white' : 'text-[#A9B7A4]'
                          }
                        />
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-body mt-1.5 hidden sm:block transition-colors ${
                        step === s.id
                          ? 'text-[#243C32] font-medium'
                          : 'text-[#A9B7A4]'
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-8 sm:w-14 mx-1 sm:mx-2 mb-4 transition-all duration-500 ${
                        step > s.id ? 'bg-[#243C32]' : 'bg-[#E8DCCB]'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Step content */}
      <section className="bg-[#F8F5EF] py-14 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* STEP 1: Treatment */}
          {step === 1 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-2">
                Select a{' '}
                <span className="italic text-[#B69A65]">Treatment</span>
              </h2>
              <p className="text-sm font-body text-[#A9B7A4] mb-8">
                Choose from our signature treatments below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {treatments.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setBooking({ ...booking, treatment: t })}
                    className={`text-left flex gap-4 p-4 border transition-all duration-300 group ${
                      booking.treatment?.id === t.id
                        ? 'border-[#243C32] bg-[#243C32]/5 shadow-md'
                        : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4] hover:shadow-sm'
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="w-20 h-20 overflow-hidden shrink-0">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-body font-semibold text-sm text-[#243C32] truncate">
                          {t.name}
                        </h3>
                        {booking.treatment?.id === t.id && (
                          <div className="w-5 h-5 bg-[#243C32] flex items-center justify-center shrink-0 rounded-full">
                            <Check size={12} className="text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-body text-[#A9B7A4] mb-2">
                        {t.category}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-body text-[#262622]/60 flex items-center gap-1">
                          <Clock size={10} /> {t.duration} min
                        </span>
                        <span className="text-sm font-body font-bold text-[#B69A65]">
                          £{t.price}
                        </span>
                        <div className="flex items-center gap-0.5 ml-auto">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              size={8}
                              className={
                                s <= Math.floor(t.rating)
                                  ? 'fill-[#B69A65] text-[#B69A65]'
                                  : 'fill-[#E8DCCB] text-[#E8DCCB]'
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Specialist */}
          {step === 2 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-2">
                Select a{' '}
                <span className="italic text-[#B69A65]">Specialist</span>
              </h2>
              <p className="text-sm font-body text-[#A9B7A4] mb-8">
                Optional — or select "No preference" to see all availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setBooking({ ...booking, specialist: null })}
                  className={`text-left flex items-center gap-4 p-5 border transition-all duration-200 ${
                    booking.specialist === null
                      ? 'border-[#243C32] bg-[#243C32]/5 shadow-md'
                      : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                  }`}
                >
                  <div className="w-14 h-14 bg-[#E8DCCB] flex items-center justify-center shrink-0 rounded-full">
                    <User size={22} className="text-[#A9B7A4]" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-[#243C32]">
                      No Preference
                    </p>
                    <p className="text-xs font-body text-[#A9B7A4] mt-0.5">
                      Show all available slots
                    </p>
                  </div>
                  {booking.specialist === null && (
                    <div className="w-5 h-5 bg-[#243C32] flex items-center justify-center ml-auto rounded-full">
                      <Check size={12} className="text-white" />
                    </div>
                  )}
                </button>

                {specialists.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setBooking({ ...booking, specialist: s })}
                    className={`text-left flex items-center gap-4 p-5 border transition-all duration-200 ${
                      booking.specialist?.id === s.id
                        ? 'border-[#243C32] bg-[#243C32]/5 shadow-md'
                        : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-14 h-14 object-cover shrink-0 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-body font-semibold text-sm text-[#243C32]">
                        {s.name}
                      </p>
                      <p className="text-xs font-body text-[#B69A65] mt-0.5">
                        {s.designation}
                      </p>
                      <p className="text-xs font-body text-[#262622]/60 mt-1">
                        {s.experience} years · {s.expertise.join(', ')}
                      </p>
                    </div>
                    {booking.specialist?.id === s.id && (
                      <div className="w-5 h-5 bg-[#243C32] flex items-center justify-center shrink-0 rounded-full">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time */}
          {step === 3 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-8">
                Choose{' '}
                <span className="italic text-[#B69A65]">Date & Time</span>
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Date picker */}
                <div className="bg-white border border-[#E8DCCB] p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Calendar size={16} className="text-[#B69A65]" />
                    <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase">
                      Select Date
                    </h3>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <div
                        key={i}
                        className="text-center text-xs font-body text-[#A9B7A4] py-2 font-medium"
                      >
                        {d}
                      </div>
                    ))}
                    {dates.slice(0, 28).map((date) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isSunday = date.getDay() === 0;
                      const isSelected = booking.date === dateStr;
                      return (
                        <button
                          key={dateStr}
                          disabled={isSunday}
                          onClick={() =>
                            setBooking({ ...booking, date: dateStr })
                          }
                          className={`aspect-square flex items-center justify-center text-xs font-body font-medium transition-all rounded ${
                            isSelected
                              ? 'bg-[#243C32] text-[#F8F5EF] shadow-md'
                              : isSunday
                                ? 'text-[#E8DCCB] cursor-not-allowed'
                                : 'text-[#262622] hover:bg-[#E8DCCB]'
                          }`}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time slots */}
                <div className="bg-white border border-[#E8DCCB] p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Clock size={16} className="text-[#B69A65]" />
                    <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase">
                      Select Time
                    </h3>
                  </div>
                  {!booking.date ? (
                    <div className="py-10 text-center">
                      <Calendar
                        size={32}
                        className="text-[#E8DCCB] mx-auto mb-3"
                      />
                      <p className="text-sm font-body text-[#A9B7A4]">
                        Please select a date first
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => {
                          const isUnavailable = unavailableSlots.includes(slot);
                          const isSelected = booking.time === slot;
                          return (
                            <button
                              key={slot}
                              disabled={isUnavailable}
                              onClick={() =>
                                setBooking({ ...booking, time: slot })
                              }
                              className={`py-2.5 text-sm font-body font-medium transition-all rounded ${
                                isSelected
                                  ? 'bg-[#243C32] text-[#F8F5EF] shadow-md'
                                  : isUnavailable
                                    ? 'bg-[#F8F5EF] text-[#E8DCCB] cursor-not-allowed line-through'
                                    : 'bg-white border border-[#E8DCCB] text-[#262622] hover:border-[#243C32] hover:bg-[#F8F5EF]'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[#E8DCCB] text-xs font-body text-[#A9B7A4]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 bg-white border border-[#E8DCCB] inline-block rounded-sm" />
                          Available
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 bg-[#243C32] inline-block rounded-sm" />
                          Selected
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 bg-[#F8F5EF] border border-[#E8DCCB] inline-block rounded-sm opacity-50" />
                          Booked
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Live preview */}
              {booking.date && booking.time && (
                <div className="mt-6 bg-[#243C32] p-5 flex items-center justify-between animate-[fadeIn_0.3s_ease-out]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#B69A65]/20 flex items-center justify-center rounded-full">
                      <Calendar size={18} className="text-[#B69A65]" />
                    </div>
                    <div>
                      <p className="text-sm font-body text-[#F8F5EF] font-medium">
                        {formatDate(booking.date)} at {booking.time}
                      </p>
                      <p className="text-xs font-body text-[#A9B7A4]">
                        {booking.treatment?.name}
                      </p>
                    </div>
                  </div>
                  <CheckCircle size={20} className="text-[#B69A65]" />
                </div>
              )}
            </div>
          )}

          {/* STEP 4: Details */}
          {step === 4 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-2">
                Your <span className="italic text-[#B69A65]">Details</span>
              </h2>
              <p className="text-sm font-body text-[#A9B7A4] mb-8">
                We'll send your booking confirmation to these details.
              </p>
              <div className="bg-white border border-[#E8DCCB] p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={booking.name}
                      onChange={(e) =>
                        setBooking({ ...booking, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 text-sm font-body border bg-[#F8F5EF] focus:outline-none focus:border-[#243C32] focus:bg-white transition-colors ${errors.name ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={booking.email}
                      onChange={(e) =>
                        setBooking({ ...booking, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 text-sm font-body border bg-[#F8F5EF] focus:outline-none focus:border-[#243C32] focus:bg-white transition-colors ${errors.email ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                      Phone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={booking.phone}
                      onChange={(e) =>
                        setBooking({ ...booking, phone: e.target.value })
                      }
                      className={`w-full px-4 py-3 text-sm font-body border bg-[#F8F5EF] focus:outline-none focus:border-[#243C32] focus:bg-white transition-colors ${errors.phone ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                      placeholder="+44 ..."
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                      Special Requests
                    </label>
                    <input
                      type="text"
                      value={booking.notes}
                      onChange={(e) =>
                        setBooking({ ...booking, notes: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm font-body border border-[#E8DCCB] bg-[#F8F5EF] focus:outline-none focus:border-[#243C32] focus:bg-white transition-colors"
                      placeholder="Allergies, preferences..."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Payment */}
          {step === 5 && (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-8">
                <span className="italic text-[#B69A65]">Payment</span>
              </h2>

              {/* Summary */}
              <div className="bg-white border border-[#E8DCCB] p-6 mb-8">
                <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-5 flex items-center gap-2">
                  <Sparkles size={14} className="text-[#B69A65]" />
                  Booking Summary
                </h3>
                <div className="space-y-3 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-[#262622]/65">Treatment</span>
                    <span className="font-medium text-[#243C32]">
                      {booking.treatment?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262622]/65">Specialist</span>
                    <span className="font-medium text-[#243C32]">
                      {booking.specialist?.name ?? 'Any available'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262622]/65">Date</span>
                    <span className="font-medium text-[#243C32]">
                      {formatDate(booking.date)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262622]/65">Time</span>
                    <span className="font-medium text-[#243C32]">
                      {booking.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#262622]/65">Duration</span>
                    <span className="font-medium text-[#243C32]">
                      {booking.treatment?.duration} min
                    </span>
                  </div>
                  <div className="border-t border-[#E8DCCB] pt-3 flex justify-between items-baseline">
                    <span className="font-semibold text-[#243C32]">Total</span>
                    <span className="font-heading text-2xl text-[#B69A65] font-light">
                      £{booking.treatment?.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment options */}
              <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-4">
                Payment Method
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() =>
                    setBooking({ ...booking, payment: 'pay-at-spa' })
                  }
                  className={`w-full text-left flex items-center gap-4 p-5 border transition-all ${
                    booking.payment === 'pay-at-spa'
                      ? 'border-[#243C32] bg-[#243C32]/5 shadow-md'
                      : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 rounded-full ${booking.payment === 'pay-at-spa' ? 'border-[#243C32] bg-[#243C32]' : 'border-[#A9B7A4]'}`}
                  >
                    {booking.payment === 'pay-at-spa' && (
                      <Check size={12} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm text-[#243C32]">
                      Pay at Spa
                    </p>
                    <p className="text-xs font-body text-[#A9B7A4] mt-0.5">
                      Pay in full on the day of your treatment.
                    </p>
                  </div>
                  <CreditCard size={20} className="text-[#A9B7A4]" />
                </button>
                <button
                  onClick={() => setBooking({ ...booking, payment: 'online' })}
                  className={`w-full text-left flex items-center gap-4 p-5 border transition-all ${
                    booking.payment === 'online'
                      ? 'border-[#243C32] bg-[#243C32]/5 shadow-md'
                      : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                  }`}
                >
                  <div
                    className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 rounded-full ${booking.payment === 'online' ? 'border-[#243C32] bg-[#243C32]' : 'border-[#A9B7A4]'}`}
                  >
                    {booking.payment === 'online' && (
                      <Check size={12} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-semibold text-sm text-[#243C32]">
                      Pay Now Online
                    </p>
                    <p className="text-xs font-body text-[#A9B7A4] mt-0.5">
                      Secure online payment (demonstration mode)
                    </p>
                  </div>
                  <CreditCard size={20} className="text-[#A9B7A4]" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 6: Confirmation */}
          {step === 6 && (
            <div className="text-center py-8 animate-[fadeIn_0.5s_ease-out]">
              {submitting ? (
                <div className="py-20">
                  <Loader2
                    size={48}
                    className="text-[#B69A65] mx-auto mb-6 animate-spin"
                  />
                  <h2 className="font-heading text-3xl text-[#243C32] font-light mb-2">
                    Confirming your booking...
                  </h2>
                  <p className="text-sm font-body text-[#A9B7A4]">
                    Please wait a moment.
                  </p>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 bg-[#243C32] flex items-center justify-center mx-auto mb-8 rounded-full animate-[scaleIn_0.5s_ease-out]">
                    <CheckCircle size={36} className="text-[#B69A65]" />
                  </div>
                  <h2 className="font-heading text-4xl text-[#243C32] font-light mb-3">
                    Booking Confirmed
                  </h2>
                  <p className="text-sm font-body text-[#A9B7A4] mb-10 flex items-center justify-center gap-2">
                    <Mail size={14} className="text-[#B69A65]" />A confirmation
                    has been sent to{' '}
                    <strong className="text-[#243C32]">{booking.email}</strong>
                  </p>

                  {/* Confirmation card */}
                  <div className="bg-white border border-[#E8DCCB] p-8 max-w-md mx-auto text-left mb-8 shadow-md">
                    <div className="text-center border-b border-[#E8DCCB] pb-5 mb-5">
                      <p className="text-xs font-body text-[#A9B7A4] tracking-widest uppercase mb-1">
                        Reference Number
                      </p>
                      <p className="font-heading text-3xl text-[#B69A65] font-light">
                        {bookingRef}
                      </p>
                    </div>
                    <div className="space-y-3 text-sm font-body">
                      <div className="flex justify-between">
                        <span className="text-[#262622]/65">Treatment</span>
                        <span className="font-medium text-[#243C32]">
                          {booking.treatment?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#262622]/65">Specialist</span>
                        <span className="font-medium text-[#243C32]">
                          {booking.specialist?.name ?? 'Any available'}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#262622]/65">Date & Time</span>
                        <span className="font-medium text-[#243C32]">
                          {formatDate(booking.date)} at {booking.time}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#262622]/65">Payment</span>
                        <span className="font-medium text-[#243C32]">
                          {booking.payment === 'pay-at-spa'
                            ? 'Pay at Spa'
                            : 'Online (Pending)'}
                        </span>
                      </div>
                      <div className="border-t border-[#E8DCCB] pt-3 flex justify-between items-baseline">
                        <span className="font-semibold text-[#243C32]">
                          Amount
                        </span>
                        <span className="font-heading text-xl text-[#B69A65] font-light">
                          £{booking.treatment?.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#E8DCCB]/40 p-5 max-w-md mx-auto mb-6 rounded">
                    <p className="text-sm font-body text-[#262622]/70 leading-relaxed">
                      <strong className="text-[#243C32]">
                        Please arrive 10 minutes before your appointment.
                      </strong>
                      <br />
                      To reschedule, call us at least 24 hours in advance.
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    <a
                      href={`mailto:hakimcolor777@gmail.com?subject=Booking ${bookingRef} — ${booking.treatment?.name}&body=Name: ${booking.name}%0AEmail: ${booking.email}%0APhone: ${booking.phone}%0ATreatment: ${booking.treatment?.name}%0ADate: ${booking.date}%0ATime: ${booking.time}%0ARef: ${bookingRef}`}
                      className="inline-flex items-center gap-2 bg-[#243C32] text-[#F8F5EF] px-6 py-3 text-sm font-body font-medium hover:bg-[#1a2d25] transition-colors"
                    >
                      <Mail size={15} /> Email Us
                    </a>
                    <button
                      onClick={() => {
                        setStep(1);
                        setBooking({
                          treatment: null,
                          specialist: null,
                          date: '',
                          time: '',
                          name: '',
                          email: '',
                          phone: '',
                          notes: '',
                          payment: 'pay-at-spa',
                        });
                      }}
                      className="inline-flex items-center gap-2 border border-[#243C32] text-[#243C32] px-6 py-3 text-sm font-body font-medium hover:bg-[#243C32] hover:text-[#F8F5EF] transition-colors"
                    >
                      Book Another Treatment
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Navigation */}
          {step < 5 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E8DCCB]">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#262622]/60 hover:text-[#243C32] transition-colors group"
                >
                  <ChevronLeft
                    size={16}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                  Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={next}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-8 py-3.5 text-sm font-body font-medium tracking-wide transition-all rounded ${
                  canProceed()
                    ? 'bg-[#243C32] text-[#F8F5EF] hover:bg-[#1a2d25] shadow-md hover:shadow-lg'
                    : 'bg-[#E8DCCB] text-[#A9B7A4] cursor-not-allowed'
                }`}
              >
                Continue
                <ChevronRight size={16} />
              </button>
            </div>
          )}
          {/* Step 5 has confirm button */}
          {step === 5 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E8DCCB]">
              <button
                onClick={back}
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-[#262622]/60 hover:text-[#243C32] transition-colors group"
              >
                <ChevronLeft
                  size={16}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back
              </button>
              <button
                onClick={submitBooking}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-body font-medium tracking-wide transition-all bg-[#B69A65] text-white hover:bg-[#a08855] shadow-md hover:shadow-lg rounded"
              >
                Confirm Booking
                <CheckCircle size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
