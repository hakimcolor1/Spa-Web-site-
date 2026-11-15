'use client';

import { useState, useEffect } from 'react';
import {
  Check,
  ChevronRight,
  Clock,
  Calendar,
  User,
  CreditCard,
  CheckCircle,
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

  const next = () => {
    if (step === 4) {
      const errs = validateStep4();
      if (Object.keys(errs).length) {
        setErrors(errs);
        return;
      }
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, 6));
  };
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const canProceed = () => {
    if (step === 1) return !!booking.treatment;
    if (step === 2) return true; // specialist optional
    if (step === 3) return !!(booking.date && booking.time);
    if (step === 4) return !!(booking.name && booking.email && booking.phone);
    if (step === 5) return true;
    return true;
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#243C32] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel light>Booking</SectionLabel>
          <h1 className="font-heading font-light text-[#F8F5EF] text-5xl">
            Book Your Treatment
          </h1>
        </div>
      </section>

      {/* Steps indicator */}
      <div className="bg-white border-b border-[#E8DCCB] sticky top-[89px] z-30">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 flex items-center justify-center transition-all duration-300 ${
                      step > s.id
                        ? 'bg-[#243C32]'
                        : step === s.id
                          ? 'bg-[#B69A65]'
                          : 'bg-[#E8DCCB]'
                    }`}
                  >
                    {step > s.id ? (
                      <Check size={14} className="text-white" />
                    ) : (
                      <span
                        className={`text-xs font-body font-medium ${step === s.id ? 'text-white' : 'text-[#A9B7A4]'}`}
                      >
                        {s.id}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-[10px] font-body mt-1.5 hidden sm:block ${step === s.id ? 'text-[#243C32] font-medium' : 'text-[#A9B7A4]'}`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-px flex-1 mx-3 mb-4 transition-all duration-300 ${step > s.id ? 'bg-[#243C32]' : 'bg-[#E8DCCB]'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Step content */}
      <section className="bg-[#F8F5EF] py-14 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* STEP 1: Treatment */}
          {step === 1 && (
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-8">
                Select a Treatment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setBooking({ ...booking, treatment: t })}
                    className={`text-left flex gap-5 p-5 border transition-all duration-200 ${
                      booking.treatment?.id === t.id
                        ? 'border-[#243C32] bg-[#243C32]/5'
                        : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-body font-semibold text-sm text-[#243C32]">
                          {t.name}
                        </h3>
                        {booking.treatment?.id === t.id && (
                          <div className="w-5 h-5 bg-[#243C32] flex items-center justify-center shrink-0">
                            <Check size={12} className="text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs font-body text-[#A9B7A4] mt-0.5">
                        {t.category}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-body text-[#262622]/60">
                          {t.duration} min
                        </span>
                        <span className="text-sm font-body font-medium text-[#B69A65]">
                          £{t.price}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Specialist */}
          {step === 2 && (
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-2">
                Select a Specialist
              </h2>
              <p className="text-sm font-body text-[#A9B7A4] mb-8">
                Optional — or select "No preference" to see all availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* No preference option */}
                <button
                  onClick={() => setBooking({ ...booking, specialist: null })}
                  className={`text-left flex items-center gap-4 p-5 border transition-all duration-200 ${
                    booking.specialist === null
                      ? 'border-[#243C32] bg-[#243C32]/5'
                      : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                  }`}
                >
                  <div className="w-14 h-14 bg-[#E8DCCB] flex items-center justify-center shrink-0">
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
                    <div className="w-5 h-5 bg-[#243C32] flex items-center justify-center ml-auto">
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
                        ? 'border-[#243C32] bg-[#243C32]/5'
                        : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                    }`}
                  >
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-14 h-14 object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <p className="font-body font-semibold text-sm text-[#243C32]">
                        {s.name}
                      </p>
                      <p className="text-xs font-body text-[#A9B7A4] mt-0.5">
                        {s.designation}
                      </p>
                      <p className="text-xs font-body text-[#262622]/60 mt-1">
                        {s.experience} years exp.
                      </p>
                    </div>
                    {booking.specialist?.id === s.id && (
                      <div className="w-5 h-5 bg-[#243C32] flex items-center justify-center shrink-0">
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
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-8">
                Choose Date & Time
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Date picker */}
                <div>
                  <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-5">
                    Select Date
                  </h3>
                  <div className="grid grid-cols-7 gap-1.5">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <div
                        key={i}
                        className="text-center text-xs font-body text-[#A9B7A4] py-2"
                      >
                        {d}
                      </div>
                    ))}
                    {dates.slice(0, 28).map((date) => {
                      const dateStr = date.toISOString().split('T')[0];
                      const isSunday = date.getDay() === 0;
                      return (
                        <button
                          key={dateStr}
                          disabled={isSunday}
                          onClick={() =>
                            setBooking({ ...booking, date: dateStr })
                          }
                          className={`aspect-square flex items-center justify-center text-xs font-body font-medium transition-all ${
                            booking.date === dateStr
                              ? 'bg-[#243C32] text-[#F8F5EF]'
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
                <div>
                  <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-5">
                    Select Time
                  </h3>
                  {!booking.date ? (
                    <p className="text-sm font-body text-[#A9B7A4]">
                      Please select a date first.
                    </p>
                  ) : (
                    <>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot) => {
                          const isUnavailable = unavailableSlots.includes(slot);
                          return (
                            <button
                              key={slot}
                              disabled={isUnavailable}
                              onClick={() =>
                                setBooking({ ...booking, time: slot })
                              }
                              className={`py-2.5 text-sm font-body font-medium transition-all ${
                                booking.time === slot
                                  ? 'bg-[#243C32] text-[#F8F5EF]'
                                  : isUnavailable
                                    ? 'bg-[#F8F5EF] text-[#E8DCCB] cursor-not-allowed line-through text-xs'
                                    : 'bg-white border border-[#E8DCCB] text-[#262622] hover:border-[#243C32]'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                      <div className="flex items-center gap-4 mt-4 text-xs font-body text-[#A9B7A4]">
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 bg-white border border-[#E8DCCB] inline-block" />{' '}
                          Available
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 bg-[#243C32] inline-block" />{' '}
                          Selected
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 bg-[#F8F5EF] border border-[#E8DCCB] inline-block opacity-50" />{' '}
                          Unavailable
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Details */}
          {step === 4 && (
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-8">
                Your Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={booking.name}
                    onChange={(e) =>
                      setBooking({ ...booking, name: e.target.value })
                    }
                    className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.name ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={booking.email}
                    onChange={(e) =>
                      setBooking({ ...booking, email: e.target.value })
                    }
                    className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.email ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-body font-medium text-[#243C32] tracking-widest uppercase mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={booking.phone}
                    onChange={(e) =>
                      setBooking({ ...booking, phone: e.target.value })
                    }
                    className={`w-full px-4 py-3 text-sm font-body border bg-white focus:outline-none focus:border-[#243C32] ${errors.phone ? 'border-red-400' : 'border-[#E8DCCB]'}`}
                    placeholder="+44 ..."
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
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
                    className="w-full px-4 py-3 text-sm font-body border border-[#E8DCCB] bg-white focus:outline-none focus:border-[#243C32]"
                    placeholder="Allergies, preferences..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Payment */}
          {step === 5 && (
            <div>
              <h2 className="font-heading text-3xl text-[#243C32] font-light mb-8">
                Payment
              </h2>

              {/* Summary */}
              <div className="bg-white border border-[#E8DCCB] p-6 mb-8">
                <h3 className="font-body font-semibold text-xs text-[#243C32] tracking-widest uppercase mb-5">
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
                      {booking.date}
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
                  <div className="border-t border-[#E8DCCB] pt-3 flex justify-between">
                    <span className="font-semibold text-[#243C32]">Total</span>
                    <span className="font-heading text-xl text-[#B69A65] font-light">
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
                {[
                  {
                    id: 'pay-at-spa',
                    label: 'Pay at Spa',
                    desc: 'Pay in full on the day of your treatment.',
                  },
                  {
                    id: 'online',
                    label: 'Pay Now',
                    desc: 'Secure online payment. Card details collected at checkout.',
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() =>
                      setBooking({
                        ...booking,
                        payment: option.id as typeof booking.payment,
                      })
                    }
                    className={`w-full text-left flex items-center gap-4 p-5 border transition-all ${
                      booking.payment === option.id
                        ? 'border-[#243C32] bg-[#243C32]/5'
                        : 'border-[#E8DCCB] bg-white hover:border-[#A9B7A4]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center shrink-0 ${
                        booking.payment === option.id
                          ? 'border-[#243C32] bg-[#243C32]'
                          : 'border-[#A9B7A4]'
                      }`}
                    >
                      {booking.payment === option.id && (
                        <Check size={12} className="text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-sm text-[#243C32]">
                        {option.label}
                      </p>
                      <p className="text-xs font-body text-[#A9B7A4] mt-0.5">
                        {option.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              {booking.payment === 'online' && (
                <div className="mt-5 p-4 bg-[#E8DCCB]/50 border border-[#E8DCCB]">
                  <p className="text-xs font-body text-[#262622]/65">
                    ⚠️ Online payment integration requires configuration.
                    Currently set to demonstration mode — payment will be
                    recorded as pending.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* STEP 6: Confirmation */}
          {step === 6 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-[#243C32] flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={36} className="text-[#B69A65]" />
              </div>
              <h2 className="font-heading text-4xl text-[#243C32] font-light mb-3">
                Booking Confirmed
              </h2>
              <p className="text-sm font-body text-[#A9B7A4] mb-10">
                A confirmation email will be sent to{' '}
                <strong className="text-[#243C32]">{booking.email}</strong>
              </p>

              <div className="bg-white border border-[#E8DCCB] p-8 max-w-md mx-auto text-left mb-8">
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
                      {booking.date} at {booking.time}
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
                  <div className="border-t border-[#E8DCCB] pt-3 flex justify-between">
                    <span className="font-semibold text-[#243C32]">Amount</span>
                    <span className="font-heading text-xl text-[#B69A65] font-light">
                      £{booking.treatment?.price}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm font-body text-[#262622]/60 max-w-sm mx-auto">
                Please arrive 10 minutes before your appointment. If you need to
                reschedule, please call us at least 24 hours in advance.
              </p>
            </div>
          )}

          {/* Navigation */}
          {step < 6 && (
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#E8DCCB]">
              {step > 1 ? (
                <button
                  onClick={back}
                  className="text-sm font-body font-medium text-[#262622]/60 hover:text-[#243C32] transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}
              <button
                onClick={next}
                disabled={!canProceed()}
                className={`inline-flex items-center gap-2 px-8 py-3.5 text-sm font-body font-medium tracking-wide transition-all ${
                  canProceed()
                    ? 'bg-[#243C32] text-[#F8F5EF] hover:bg-[#1a2d25]'
                    : 'bg-[#E8DCCB] text-[#A9B7A4] cursor-not-allowed'
                }`}
              >
                {step === 5 ? 'Confirm Booking' : 'Continue'}
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
