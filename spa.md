
echo "# Spa-Web-site-" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/hakimcolor1/Spa-Web-site-.git
git push -u origin main











# PROJECT: LUXURY SPA & SKINCARE WEBSITE

Act as a world-class Senior Full-Stack Developer, UI/UX Designer, Creative Director, Three.js Developer, and Software Architect.

Your task is to design and develop a premium, modern, visually stunning, fully functional Spa & Skincare Website using Next.js.

This must look and feel like a premium international luxury spa brand website, not a generic spa template.

The website should communicate luxury, relaxation, beauty, wellness, trust, professionalism, and elegance.

Do not create an ordinary website. Create a memorable digital experience.

---

# 1. TECHNOLOGY STACK

Use the following technologies:

Frontend:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP for advanced animations where appropriate
- Three.js
- React Three Fiber
- Drei
- Lucide React for icons

Forms & Data:
- React Hook Form
- Zod validation
- TanStack Query
- Zustand where global state is necessary

Backend:
- Next.js API routes or a properly structured backend architecture
- PostgreSQL
- Prisma ORM
- Secure authentication
- HTTP-only cookie-based sessions
- Role-based access control

Additional:
- Cloudinary or equivalent image management
- Email notifications
- Booking confirmation emails
- Google Maps integration
- Payment gateway integration with a configurable provider
- SEO metadata
- Structured data
- Loading skeletons
- Error handling
- Toast notifications

Use the latest stable compatible package versions.

Do not use localStorage to store authentication tokens.

---

# 2. BRAND IDENTITY & DESIGN DIRECTION

Create an original luxury spa brand identity.

Brand concept:
Luxury Facial, Skincare & Wellness Studio.

Visual direction:
- Modern luxury
- Editorial beauty photography
- Minimalist layouts
- Elegant typography
- Soft organic shapes
- Premium editorial compositions
- Sophisticated spacing
- Natural textures
- Subtle gradients
- Refined micro-interactions

Suggested color palette:

Primary:
- Deep Forest Green: #243C32
- Warm Ivory: #F8F5EF
- Champagne Beige: #E8DCCB
- Muted Sage: #A9B7A4
- Soft Gold: #B69A65
- Dark Charcoal: #262622

Typography:
- Elegant serif font for headings
- Modern sans-serif font for body text
- Premium editorial typography

Use fonts such as:
- Cormorant Garamond
- DM Sans
- Manrope

Do not use too many colors.

The design must be consistent across all pages.

IMPORTANT DESIGN RULES:

1. Avoid generic spa website templates.
2. Avoid overused spa stock photos.
3. Do not repeatedly use the same facial model or image.
4. Do not use random AI-looking beauty images.
5. Use carefully selected, high-quality, realistic editorial photography.
6. Prioritize authentic skincare textures, professional treatment photography, luxury interiors, premium skincare products, and natural beauty details.
7. Use asymmetrical image layouts and editorial compositions.
8. Use premium image cropping and proper aspect ratios.
9. Every section must have a clear visual purpose.
10. Avoid excessive rounded cards.
11. Avoid unnecessary gradients and glassmorphism.
12. Do not overload the website with animations.

The result should resemble a high-end international beauty and wellness brand.

---

# 3. THREE.JS & ADVANCED ANIMATIONS

Three.js must be meaningfully integrated into the website.

Do not add 3D just for decoration.

Create an immersive, elegant experience.

HERO SECTION:
- A premium 3D skincare-inspired visual.
- Floating translucent glass spheres.
- Subtle liquid-like movements.
- Soft lighting.
- Organic abstract shapes.
- Slow camera movement.
- Gentle depth and parallax.
- Smooth mouse interaction.
- Premium cinematic atmosphere.

Additional animation ideas:

1. Floating 3D organic shapes.
2. Subtle liquid surface animation.
3. Animated botanical elements.
4. Smooth scroll-triggered reveals.
5. Image masking transitions.
6. Text reveal animations.
7. Parallax image movement.
8. Elegant page transitions.
9. Animated navigation indicators.
10. Interactive service image hover effects.

Animation libraries:
- Three.js / React Three Fiber
- Framer Motion
- GSAP ScrollTrigger

PERFORMANCE RULES:

- Lazy-load 3D components.
- Use optimized 3D models.
- Respect prefers-reduced-motion.
- Provide a static fallback for mobile and low-performance devices.
- Avoid unnecessary GPU-intensive effects.
- Ensure the website remains fast.
- Never allow animations to block navigation or booking.

---

# 4. COMPLETE WEBSITE PAGES

Create every page with a consistent design system.

## PAGE 01: HOME PAGE (/)

Create a premium homepage with the following sections.

A. Announcement Bar
- Special offers
- Seasonal treatment promotions
- Small elegant announcement text

B. Navigation
- Brand logo
- Home
- About
- Treatments
- Facial & Skincare
- Membership
- Contact
- Book Appointment button

Navigation should be sticky with a refined scroll effect.

Include a responsive mobile navigation menu.

C. Hero Section

Create an impressive cinematic hero.

Content:
- Premium headline: "Your Skin Deserves a Moment of Stillness."
- Supporting description
- Book Your Treatment button
- Explore Treatments button

Visual:
- Large editorial skincare photography
- Three.js abstract 3D visual
- Elegant typography
- Floating decorative elements

D. Brand Introduction
- Short introduction to the spa
- Brand philosophy
- Premium imagery
- Discover Our Story CTA

E. Signature Treatments

Showcase 4–6 premium treatments:
- Hydrating Facial
- Deep Cleansing Facial
- Anti-Aging Facial
- Brightening Treatment
- Sensitive Skin Therapy
- Luxury Glow Facial

Each treatment should show:
- Image
- Name
- Short description
- Duration
- Starting price
- Learn More link

F. Why Choose Us?
- Professional skincare specialists
- Personalized treatments
- Premium skincare products
- Hygienic treatment rooms
- Relaxing environment
- Individual skin consultations

G. Interactive Skin Experience
Create a visually engaging section where visitors can explore different skincare concerns.

H. Our Philosophy
A full-width editorial section with photography and elegant text.

I. Featured Experience
Highlight the spa's most luxurious treatment experience.

J. Testimonials
Customer reviews with:
- Customer name
- Review
- Rating
- Treatment name

K. Membership Preview
Show available membership benefits.

L. Instagram Gallery
Display curated beauty and spa photographs.

M. Newsletter
Allow visitors to subscribe to updates and exclusive offers.

N. Footer
- Logo
- Navigation
- Contact information
- Opening hours
- Social media
- Privacy Policy
- Terms and Conditions

---

## PAGE 02: ABOUT US (/about)

Sections:
- Brand introduction
- Our story
- Mission and vision
- Our skincare philosophy
- Our approach to wellness
- Meet our specialists
- Our spa environment
- Premium product philosophy
- Why clients trust us
- CTA to book an appointment

Include a beautiful editorial image layout.

---

## PAGE 03: TREATMENTS (/treatments)

Create a complete treatment listing page.

Categories:
1. Signature Facials
2. Deep Cleansing
3. Hydration Treatments
4. Anti-Aging Treatments
5. Brightening Treatments
6. Sensitive Skin Treatments
7. Acne Care
8. Body Treatments
9. Relaxation & Wellness

Features:
- Category filtering
- Search treatments
- Sort by price
- Sort by duration
- Treatment cards
- Featured treatments
- Price and duration
- Book Now button

Use real database-driven treatment data.

---

## PAGE 04: FACIAL & SKINCARE (/facial-skincare)

This is one of the most important pages.

Create an educational and premium skincare experience.

Sections:

- Introduction to facial skincare
- Why professional facials matter
- Different facial treatments
- Skin concerns
- Skincare ingredients
- Treatment benefits
- Before and after care
- Frequently asked questions
- Recommended treatments
- Book a consultation

Skin concerns:
- Acne-prone skin
- Dry skin
- Oily skin
- Sensitive skin
- Uneven skin tone
- Dehydrated skin
- Signs of aging

Include an interactive skin concern selector.

Do not make medical claims or promise guaranteed results.

---

## PAGE 05: TREATMENT DETAILS (/treatments/[slug])

Each treatment needs an individual detail page.

Include:
- Large hero photography
- Treatment name
- Description
- Benefits
- Duration
- Price
- Who the treatment is suitable for
- Treatment process
- What to expect
- Before and after care
- Available specialists
- Customer reviews
- Related treatments
- Frequently asked questions
- Book This Treatment CTA

All content should be database-driven.

---

## PAGE 06: BOOKING SYSTEM (/book)

Build a complete multi-step appointment booking system.

STEP 1: Select Treatment
- Treatment categories
- Treatment list
- Price
- Duration

STEP 2: Select Specialist
- Available specialists
- Profile photo
- Name
- Expertise
- Experience
- Availability

Allow customers to choose any available specialist or select no preference.

STEP 3: Select Date
- Interactive calendar
- Available dates
- Unavailable dates
- Closed days

STEP 4: Select Time
- Dynamically generated available time slots
- Prevent double bookings
- Display booked or unavailable slots
- Respect treatment duration and buffer time

STEP 5: Customer Information
- Full name
- Email
- Phone
- Special requests
- Optional skincare concerns

STEP 6: Payment
- Pay at spa option
- Online payment option
- Configurable deposit requirement
- Payment status

STEP 7: Confirmation
- Unique booking reference
- Treatment details
- Date and time
- Specialist
- Payment information
- Confirmation message

Send booking confirmation emails.

IMPORTANT BOOKING RULES:

- Check availability on the server.
- Prevent double booking using database transactions and appropriate constraints.
- Revalidate availability during booking submission.
- Use server-side validation.
- Support booking cancellation and rescheduling according to configurable policies.
- Store booking status.
- Handle payment failures.
- Never display fake availability.

Booking statuses:
- PENDING
- CONFIRMED
- CANCELLED
- COMPLETED
- NO_SHOW

Payment statuses:
- UNPAID
- PENDING
- PAID
- REFUNDED
- FAILED

---

## PAGE 07: OUR SPECIALISTS (/specialists)

Display all spa professionals.

Each profile includes:
- Professional photograph
- Full name
- Designation
- Expertise
- Experience
- Short biography
- Available treatments
- Booking CTA

Individual profile page:
 /specialists/[slug]

---

## PAGE 08: PRICING & PACKAGES (/pricing)

Create premium treatment packages.

Examples:
- Essential Glow
- Signature Skin Ritual
- Luxury Facial Experience
- Complete Wellness Package

Display:
- Included treatments
- Total duration
- Package price
- Savings
- Book Package CTA

Allow administrators to manage package pricing.

---

## PAGE 09: MEMBERSHIP (/membership)

Create a membership system.

Membership tiers:
- Essential
- Premium
- Elite

Each tier includes:
- Monthly or annual price
- Treatment benefits
- Exclusive discounts
- Priority booking
- Member-only offers

Include membership registration and renewal workflows.

---

## PAGE 10: GALLERY (/gallery)

Create a visually beautiful image gallery.

Categories:
- Spa Interior
- Facial Treatments
- Skincare Products
- Treatment Rooms
- Wellness Experience
- Spa Atmosphere

Features:
- Masonry layout
- Category filters
- Image lightbox
- Smooth transitions
- Optimized images

Use high-quality photography, not generic repeated images.

---

## PAGE 11: REVIEWS (/reviews)

Include:
- Customer reviews
- Average rating
- Treatment-specific reviews
- Verified booking indicator
- Review submission form

Only customers with eligible completed bookings can submit verified reviews.

Admin approval should be configurable.

---

## PAGE 12: BLOG (/blog)

Create an SEO-friendly skincare blog.

Categories:
- Skincare Tips
- Facial Treatments
- Beauty & Wellness
- Skin Hydration
- Anti-Aging
- Spa Lifestyle

Blog listing:
- Featured article
- Categories
- Search
- Latest articles
- Related posts

Individual blog:
 /blog/[slug]

Include:
- Article title
- Featured image
- Author
- Publication date
- Reading time
- Table of contents
- Article content
- Related articles
- Social sharing

Build a proper blog management system for admins.

---

## PAGE 13: CONTACT (/contact)

Include:
- Contact form
- Phone number
- Email
- Physical address
- Google Maps
- Opening hours
- Social media links
- WhatsApp contact
- Frequently asked questions

Contact form must have proper validation and spam protection.

---

## PAGE 14: FAQ (/faq)

Create categorized FAQs.

Categories:
- Booking
- Treatments
- Payments
- Cancellation
- Skincare
- Membership
- General Information

Use accessible accordion interactions.

---

# 5. CUSTOMER AUTHENTICATION

Pages:

- /login
- /register
- /forgot-password
- /reset-password
- /verify-email

Features:
- Secure registration
- Email verification
- Secure login
- Password reset
- Session management
- Logout

Support customer accounts.

---

# 6. CUSTOMER DASHBOARD (/account)

Create a beautiful customer dashboard.

Sidebar:
- Overview
- My Bookings
- Upcoming Appointments
- Booking History
- Saved Treatments
- Membership
- Profile Settings
- Notifications
- Logout

Overview:
- Welcome message
- Upcoming appointment
- Recent bookings
- Membership information
- Quick booking CTA

My Bookings:
- Upcoming bookings
- Completed bookings
- Cancelled bookings
- Booking details
- Reschedule
- Cancel appointment

Profile:
- Name
- Email
- Phone
- Profile picture
- Preferences

---

# 7. ADMIN DASHBOARD (/admin)

Build a complete management dashboard.

Admin roles:
- SUPER_ADMIN
- ADMIN
- STAFF
- SPECIALIST

Dashboard overview:
- Total bookings
- Today's appointments
- Upcoming appointments
- Revenue
- Total customers
- Popular treatments
- Booking statistics
- Recent activities

ADMIN MODULES:

1. Booking Management
   - View bookings
   - Create booking
   - Edit booking
   - Confirm bookings
   - Cancel bookings
   - Reschedule bookings
   - Change booking status
   - Filter by date, service, specialist and status

2. Treatment Management
   - Create treatment
   - Edit treatment
   - Delete treatment
   - Upload images
   - Manage price
   - Manage duration
   - Manage categories
   - Publish/unpublish

3. Specialist Management
   - Add specialist
   - Edit profile
   - Upload profile image
   - Manage expertise
   - Manage schedules
   - Assign treatments

4. Customer Management
   - Customer list
   - Customer details
   - Booking history
   - Membership information
   - Customer notes

5. Availability Management
   - Weekly schedules
   - Break times
   - Holidays
   - Special working days
   - Block specific time slots
   - Specialist-specific availability

6. Pricing & Packages
   - Manage packages
   - Update prices
   - Manage discounts
   - Manage promotions

7. Membership Management
   - Membership plans
   - Active members
   - Renewals
   - Membership history

8. Reviews Management
   - Approve reviews
   - Reject reviews
   - Moderate content

9. Blog Management
   - Create posts
   - Edit posts
   - Delete posts
   - Manage categories
   - Upload featured images
   - SEO settings

10. Gallery Management
    - Upload images
    - Manage categories
    - Update gallery

11. Payment Management
    - Payment records
    - Payment status
    - Refund tracking
    - Revenue reports

12. Email & Notifications
    - Booking confirmation
    - Appointment reminders
    - Cancellation emails
    - Promotional emails

13. Website Settings
    - Brand information
    - Logo
    - Contact details
    - Opening hours
    - Social links
    - Currency
    - Timezone
    - Booking policies

14. Reports & Analytics
    - Daily revenue
    - Monthly revenue
    - Booking trends
    - Popular services
    - Specialist performance
    - Customer retention

15. Audit Logs
    - Admin actions
    - Booking changes
    - Payment updates
    - User activity

---

# 8. BOOKING NOTIFICATIONS

Implement a proper notification system.

Email notifications:
- Booking received
- Booking confirmed
- Booking rescheduled
- Booking cancelled
- Appointment reminder
- Payment confirmation
- Membership renewal

Allow configurable reminder schedules.

Use professional HTML email templates that match the brand identity.

---

# 9. DATABASE ARCHITECTURE

Create properly normalized database models.

Required entities:

- User
- CustomerProfile
- AdminProfile
- Specialist
- Treatment
- TreatmentCategory
- TreatmentImage
- SpecialistTreatment
- SpecialistSchedule
- ScheduleException
- Booking
- BookingService
- BookingPayment
- PaymentTransaction
- Package
- PackageTreatment
- MembershipPlan
- CustomerMembership
- Review
- GalleryImage
- BlogPost
- BlogCategory
- NewsletterSubscriber
- ContactMessage
- Notification
- WebsiteSettings
- AuditLog

Use:
- Proper relationships
- Foreign keys
- Unique constraints
- Database indexes
- Created and updated timestamps
- Soft deletion where appropriate

Design the schema carefully before implementing.

Do not put unrelated data into one table.

---

# 10. UI/UX INTERACTION REQUIREMENTS

The website must have:

- Smooth page transitions
- Elegant hover interactions
- Premium buttons
- Animated navigation
- Custom loading states
- Skeleton loaders
- Toast notifications
- Responsive mobile navigation
- Accessible modals
- Interactive calendars
- Booking progress indicator
- Form validation
- Empty states
- Error states
- Success states
- Custom 404 page

Every button must perform a real action.

Every form must have proper validation.

Never create fake functionality.

---

# 11. RESPONSIVE DESIGN

The entire website must work perfectly on:

- Large desktop
- Standard desktop
- Laptop
- Tablet
- Mobile
- Small mobile screens

Pay special attention to:
- Hero section
- Navigation
- Treatment cards
- Booking calendar
- Booking forms
- Customer dashboard
- Admin dashboard
- Three.js visualizations

Mobile must not feel like a compressed desktop design.

Create a separate thoughtful mobile experience.

---

# 12. SEO & PERFORMANCE

Implement:

- Unique page titles
- Meta descriptions
- Open Graph metadata
- Canonical URLs
- Sitemap.xml
- Robots.txt
- Structured data
- LocalBusiness schema
- BeautySalon or appropriate business schema
- Service schema where applicable
- Article schema for blogs
- Optimized images
- Next.js Image component
- Lazy loading
- Server components by default
- Dynamic imports for heavy components
- Proper caching strategies

Aim for excellent Core Web Vitals and Lighthouse scores.

---

# 13. SECURITY

Implement:

- Server-side authorization
- Role-based access control
- Secure password hashing
- HTTP-only cookies
- CSRF protection where applicable
- Input validation
- Rate limiting
- Secure API endpoints
- Payment webhook verification
- File upload validation
- Booking ownership verification
- Audit logging

Never trust client-side role checks.

Never expose private customer information.

---

# 14. PROJECT STRUCTURE

Maintain a clean and modular architecture.

Suggested structure:

src/
  app/
    (website)/
      page.tsx
      about/
      treatments/
      facial-skincare/
      booking/
      specialists/
      pricing/
      membership/
      gallery/
      reviews/
      blog/
      contact/
      faq/
    (auth)/
      login/
      register/
      forgot-password/
    account/
    admin/
    api/
  components/
    ui/
    layout/
    home/
    treatments/
    booking/
    specialists/
    dashboard/
    animations/
    three/
  features/
    auth/
    bookings/
    treatments/
    payments/
    customers/
    memberships/
  hooks/
  lib/
  services/
  schemas/
  types/
  config/

prisma/
  schema.prisma
  migrations/

public/
  images/
  fonts/
  models/

Keep components reusable and maintainable.

---

# 15. DEVELOPMENT EXECUTION PLAN

Do not attempt to build everything carelessly in one giant component.

Follow this development sequence:

PHASE 1: PLANNING
- Inspect the project directory.
- Create the technical architecture.
- Create the page structure.
- Define design tokens.
- Plan database models.
- Define API contracts.
- Document implementation decisions.

PHASE 2: DESIGN SYSTEM
- Typography
- Color palette
- Spacing
- Buttons
- Navigation
- Cards
- Forms
- Responsive layouts

PHASE 3: FRONTEND
- Homepage
- About
- Treatments
- Treatment details
- Facial skincare
- Specialists
- Pricing
- Membership
- Gallery
- Reviews
- Blog
- Contact
- FAQ

PHASE 4: THREE.JS
- Create the hero 3D experience.
- Implement animation components.
- Optimize rendering.
- Add mobile fallbacks.

PHASE 5: AUTHENTICATION & CUSTOMER DASHBOARD
- Registration
- Login
- Email verification
- Customer profile
- Booking history

PHASE 6: BOOKING ENGINE
- Treatment selection
- Specialist selection
- Availability
- Calendar
- Time slots
- Booking creation
- Cancellation
- Rescheduling
- Notifications

PHASE 7: ADMIN DASHBOARD
- All management modules
- Reports
- Settings
- Audit logs

PHASE 8: BACKEND & DATABASE
- Implement database
- API endpoints
- Authentication
- Authorization
- Business logic
- Payment integration

PHASE 9: TESTING
- TypeScript checks
- ESLint
- Build checks
- Booking conflict tests
- Authentication tests
- Authorization tests
- Responsive testing
- Form validation
- Payment workflow testing

PHASE 10: FINAL POLISH
- Optimize images
- Refine animations
- Fix UI inconsistencies
- Improve loading states
- Check all links
- Check all buttons
- Verify mobile layouts
- Improve SEO

---

# 16. IMPORTANT DEVELOPMENT RULES

1. First inspect the existing project before making changes.
2. Do not delete existing project files without understanding them.
3. Do not generate the entire website in a single page.
4. Do not use generic templates.
5. Do not use placeholder images in the final implementation.
6. Do not use emoji as substitutes for professional icons.
7. Use genuine Lucide React icons.
8. Do not use fake booking availability.
9. Do not create fake payment success.
10. Do not leave buttons without functionality.
11. Keep TypeScript types strict.
12. Avoid unnecessary dependencies.
13. Avoid duplicated components.
14. Follow accessibility best practices.
15. Keep the code modular and production-oriented.
16. Do not compromise visual quality for development speed.

If external credentials are unavailable, implement a properly documented integration interface and clearly mark what requires configuration. Never pretend an external service is connected.

---

# 17. FINAL QUALITY EXPECTATION

The final result should feel like a $10,000+ professionally designed luxury spa website.

The design must be:
- Beautiful
- Premium
- Unique
- Elegant
- Modern
- Interactive
- Fast
- Accessible
- Responsive
- SEO-friendly
- Production-oriented

The homepage must immediately impress visitors.

The booking process must be simple and trustworthy.

The treatment pages must communicate value and professionalism.

The admin dashboard must be genuinely useful for running a spa business.

Most importantly, the entire website must feel like one cohesive luxury brand.

START BY INSPECTING THE PROJECT AND CREATING A DETAILED IMPLEMENTATION PLAN.

Then implement the project phase by phase.

Do not stop after creating a design mockup. Build the actual working application, verify it, and document any remaining configuration requirements.