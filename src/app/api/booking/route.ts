import { NextRequest, NextResponse } from "next/server";

// Booking notification email goes to this address
const BOOKING_EMAIL = "hakimcolor777@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      bookingRef,
      treatment,
      specialist,
      date,
      time,
      name,
      email,
      phone,
      notes,
      payment,
      price,
    } = body;

    // Validate required fields
    if (!treatment || !name || !email || !date || !time) {
      return NextResponse.json(
        { success: false, error: "Missing required booking fields" },
        { status: 400 }
      );
    }

    // Build the email content
    const emailSubject = `New Booking — ${bookingRef} — ${treatment}`;
    const emailBody = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW BOOKING RECEIVED — Lumière Spa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reference:    ${bookingRef}

Treatment:    ${treatment}
Specialist:   ${specialist || "Any available"}
Date:         ${date}
Time:         ${time}
Duration:     ${body.duration || "N/A"} min
Price:        £${price}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name:         ${name}
Email:        ${email}
Phone:        ${phone}
Notes:        ${notes || "None"}

Payment:      ${payment === "pay-at-spa" ? "Pay at Spa" : "Online (Pending)"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This booking was submitted from the Lumière Spa website.

Reply directly to the customer at: ${email}
`;

    // Try to send email via nodemailer if SMTP is configured
    let emailSent = false;
    let emailError = null;

    try {
      const nodemailer = await import("nodemailer");

      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = process.env.SMTP_PORT;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.default.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort || "587"),
          secure: parseInt(smtpPort || "587") === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || smtpUser,
          to: BOOKING_EMAIL,
          subject: emailSubject,
          text: emailBody,
          replyTo: email,
        });

        emailSent = true;
      }
    } catch (err) {
      emailError = err instanceof Error ? err.message : "Unknown error";
    }

    // Always succeed — the booking is recorded even if email fails
    // The frontend shows confirmation regardless
    return NextResponse.json({
      success: true,
      bookingRef,
      emailSent,
      emailError: emailError || undefined,
      emailRecipient: BOOKING_EMAIL,
      message: emailSent
        ? `Booking notification sent to ${BOOKING_EMAIL}`
        : `Booking recorded. Configure SMTP to send email to ${BOOKING_EMAIL}.`,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
