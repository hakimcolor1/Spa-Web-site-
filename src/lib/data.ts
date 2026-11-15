// ============================================================
// MOCK DATA — All frontend data lives here (no backend needed)
// ============================================================

export const treatments = [
  {
    id: '1',
    slug: 'hydrating-facial',
    name: 'Hydrating Facial',
    category: 'Signature Facials',
    shortDescription:
      'Deep hydration therapy that restores moisture balance and leaves skin luminous.',
    description:
      'Our Hydrating Facial is a deeply restorative treatment designed to replenish lost moisture and revive dull, dehydrated skin. Using premium hyaluronic acid serums and botanical extracts, this treatment penetrates multiple layers of the skin to deliver lasting hydration and a luminous, plumped complexion.',
    duration: 60,
    price: 120,
    benefits: [
      'Deep moisture replenishment',
      'Improved skin elasticity',
      'Reduced fine lines from dehydration',
      'Brighter, more luminous complexion',
      'Strengthened skin barrier',
    ],
    suitableFor: [
      'Dry skin',
      'Dehydrated skin',
      'Dull complexion',
      'Mature skin',
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description:
          'A thorough skin analysis to understand your unique hydration needs.',
      },
      {
        step: 2,
        title: 'Cleanse & Tone',
        description: 'Gentle double cleanse followed by a balancing toner.',
      },
      {
        step: 3,
        title: 'Exfoliation',
        description: 'Mild enzyme exfoliation to remove dead skin cells.',
      },
      {
        step: 4,
        title: 'Hydration Mask',
        description:
          'A deeply nourishing sheet mask infused with hyaluronic acid.',
      },
      {
        step: 5,
        title: 'Serum & Moisturiser',
        description:
          'Layering of premium hydrating serums and a protective moisturiser.',
      },
      {
        step: 6,
        title: 'SPF Protection',
        description:
          'Application of broad-spectrum SPF to protect your refreshed skin.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 128,
  },
  {
    id: '2',
    slug: 'deep-cleansing-facial',
    name: 'Deep Cleansing Facial',
    category: 'Deep Cleansing',
    shortDescription:
      'Thorough pore purification treatment that eliminates impurities for clear, healthy skin.',
    description:
      'The Deep Cleansing Facial is an intensive purification treatment that targets congested pores, blackheads, and excess sebum. Perfect for urban skin exposed to daily pollutants, this treatment uses professional-grade exfoliants and extraction techniques to deliver visibly clearer, smoother skin.',
    duration: 75,
    price: 135,
    benefits: [
      'Thorough pore cleansing',
      'Blackhead and congestion removal',
      'Reduced oiliness',
      'Smoother skin texture',
      'Clearer, healthier complexion',
    ],
    suitableFor: [
      'Oily skin',
      'Acne-prone skin',
      'Congested pores',
      'Combination skin',
    ],
    process: [
      {
        step: 1,
        title: 'Skin Analysis',
        description: "Detailed assessment of your skin's congestion levels.",
      },
      {
        step: 2,
        title: 'Steam',
        description: 'Warm steam to open pores and soften impurities.',
      },
      {
        step: 3,
        title: 'Deep Cleanse',
        description: 'Professional-grade cleanse targeting oil and debris.',
      },
      {
        step: 4,
        title: 'Extraction',
        description: 'Careful manual extraction of blackheads and congestion.',
      },
      {
        step: 5,
        title: 'Purifying Mask',
        description: 'Kaolin clay mask to absorb remaining impurities.',
      },
      {
        step: 6,
        title: 'Soothing Finish',
        description: 'Calming serum and light moisturiser to balance skin.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=600&q=80',
    ],
    featured: true,
    rating: 4.8,
    reviewCount: 94,
  },
  {
    id: '3',
    slug: 'anti-aging-facial',
    name: 'Anti-Aging Facial',
    category: 'Anti-Aging Treatments',
    shortDescription:
      'Advanced age-defying treatment that firms, lifts and reduces visible signs of aging.',
    description:
      'Our signature Anti-Aging Facial combines cutting-edge peptide technology with time-honoured massage techniques to visibly reduce fine lines, improve skin firmness, and restore a youthful radiance. This comprehensive treatment addresses multiple signs of aging in a single luxurious session.',
    duration: 90,
    price: 185,
    benefits: [
      'Visible reduction in fine lines and wrinkles',
      'Improved skin firmness and elasticity',
      'Enhanced cellular renewal',
      'Lifted facial contours',
      'Restored youthful radiance',
    ],
    suitableFor: [
      'Mature skin',
      'Skin with fine lines',
      'Loss of firmness',
      'Dull aging skin',
    ],
    process: [
      {
        step: 1,
        title: 'Consultation',
        description: 'In-depth analysis of aging concerns and goals.',
      },
      {
        step: 2,
        title: 'Cleanse',
        description: 'Luxurious double cleanse with anti-aging actives.',
      },
      {
        step: 3,
        title: 'Peel',
        description: 'Gentle glycolic peel to accelerate cell renewal.',
      },
      {
        step: 4,
        title: 'Lifting Massage',
        description:
          'Specialised facial massage to stimulate collagen production.',
      },
      {
        step: 5,
        title: 'Peptide Mask',
        description: 'Advanced peptide sheet mask for intensive firming.',
      },
      {
        step: 6,
        title: 'Finishing Treatment',
        description: 'Retinol serum and rich moisturiser to seal in benefits.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 157,
  },
  {
    id: '4',
    slug: 'brightening-treatment',
    name: 'Brightening Treatment',
    category: 'Brightening Treatments',
    shortDescription:
      'Radiance-boosting treatment that evens skin tone and banishes dullness.',
    description:
      'The Lumière Brightening Treatment is designed to target hyperpigmentation, uneven skin tone, and post-inflammatory marks. Using vitamin C-rich formulations and brightening actives, this treatment reveals a visibly more even, radiant complexion.',
    duration: 60,
    price: 140,
    benefits: [
      'Visible reduction in dark spots',
      'Improved skin tone evenness',
      'Enhanced natural radiance',
      'Antioxidant protection',
      'Brighter overall complexion',
    ],
    suitableFor: [
      'Uneven skin tone',
      'Post-acne marks',
      'Sun damage',
      'Dull complexion',
    ],
    process: [
      {
        step: 1,
        title: 'Skin Mapping',
        description: 'Identify areas of pigmentation and dullness.',
      },
      {
        step: 2,
        title: 'Brightening Cleanse',
        description: 'Vitamin C-infused cleanse to begin brightening.',
      },
      {
        step: 3,
        title: 'Enzyme Peel',
        description: 'Papaya enzyme peel to remove discoloured cells.',
      },
      {
        step: 4,
        title: 'Targeted Serum',
        description: 'High-potency vitamin C and niacinamide serum.',
      },
      {
        step: 5,
        title: 'Illuminating Mask',
        description: 'Pearl and vitamin C mask for instant radiance.',
      },
      {
        step: 6,
        title: 'Protective Finish',
        description: 'Brightening moisturiser with SPF protection.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    gallery: [],
    featured: false,
    rating: 4.7,
    reviewCount: 73,
  },
  {
    id: '5',
    slug: 'sensitive-skin-therapy',
    name: 'Sensitive Skin Therapy',
    category: 'Sensitive Skin Treatments',
    shortDescription:
      'Calming, fragrance-free treatment designed for reactive and sensitive skin types.',
    description:
      'Our Sensitive Skin Therapy is a gentle, calming treatment using only hypoallergenic, fragrance-free formulations. Specifically designed for reactive, rosacea-prone, or easily irritated skin, this treatment reduces redness, strengthens the skin barrier, and restores comfort.',
    duration: 60,
    price: 125,
    benefits: [
      'Reduced redness and irritation',
      'Strengthened skin barrier',
      'Long-lasting comfort',
      'Decreased skin reactivity',
      'Gentle, soothing hydration',
    ],
    suitableFor: [
      'Sensitive skin',
      'Rosacea',
      'Reactive skin',
      'Post-procedure skin',
    ],
    process: [
      {
        step: 1,
        title: 'Patch Check',
        description: 'Brief patch assessment to confirm product suitability.',
      },
      {
        step: 2,
        title: 'Gentle Cleanse',
        description: 'Fragrance-free micellar cleanse.',
      },
      {
        step: 3,
        title: 'Calming Toner',
        description: 'Rosewater and centella asiatica toner.',
      },
      {
        step: 4,
        title: 'Barrier Serum',
        description: 'Ceramide and oat extract serum to fortify the skin.',
      },
      {
        step: 5,
        title: 'Calming Mask',
        description: 'Cool, soothing mask with aloe and green tea.',
      },
      {
        step: 6,
        title: 'Protective Moisturiser',
        description: 'Rich, fragrance-free moisturiser to seal the barrier.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    gallery: [],
    featured: false,
    rating: 4.8,
    reviewCount: 61,
  },
  {
    id: '6',
    slug: 'luxury-glow-facial',
    name: 'Luxury Glow Facial',
    category: 'Signature Facials',
    shortDescription:
      'Our most indulgent signature treatment — a 24k gold-infused glow experience.',
    description:
      'The Lumière Luxury Glow Facial is our most prestigious treatment. Featuring 24k gold leaf, diamond powder micro-exfoliation, and a bespoke cocktail of active serums, this 90-minute experience delivers an unparalleled, photo-ready luminosity. The ultimate indulgence for those seeking the very best.',
    duration: 90,
    price: 220,
    benefits: [
      'Extraordinary luminosity',
      'Deep pore refinement',
      'Firmed and lifted appearance',
      'Intense hydration surge',
      'Photographically radiant skin',
    ],
    suitableFor: [
      'All skin types',
      'Special occasions',
      'Bridal treatments',
      'Luxury experience seekers',
    ],
    process: [
      {
        step: 1,
        title: 'Welcome Ritual',
        description: 'Warm towel ritual and aromatherapy induction.',
      },
      {
        step: 2,
        title: 'Diamond Cleanse',
        description: 'Diamond powder micro-exfoliation cleanse.',
      },
      {
        step: 3,
        title: 'Peel',
        description: 'Custom blend AHA/BHA peel tailored to your skin.',
      },
      {
        step: 4,
        title: 'Gold Infusion',
        description: '24k gold leaf and peptide infusion treatment.',
      },
      {
        step: 5,
        title: 'Sculpting Massage',
        description: 'Professional sculpting and lifting facial massage.',
      },
      {
        step: 6,
        title: 'Glow Finale',
        description: 'Gold-infused moisturiser and illuminating primer finish.',
      },
    ],
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    gallery: [],
    featured: true,
    rating: 5.0,
    reviewCount: 42,
  },
];

export const specialists = [
  {
    id: '1',
    slug: 'aria-chen',
    name: 'Aria Chen',
    designation: 'Lead Skincare Specialist',
    expertise: ['Anti-Aging', 'Sensitive Skin', 'Brightening'],
    experience: 9,
    bio: "Aria is Lumière's founding specialist with over nine years of expertise in advanced skincare science. Trained in Paris and Seoul, she combines Eastern and Western skincare philosophies to deliver transformative results. Her meticulous approach and deep understanding of skin biology have earned her a devoted clientele.",
    image:
      'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&q=85',
    treatments: [
      'Luxury Glow Facial',
      'Anti-Aging Facial',
      'Sensitive Skin Therapy',
    ],
    availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
  },
  {
    id: '2',
    slug: 'maya-patel',
    name: 'Maya Patel',
    designation: 'Senior Facial Therapist',
    expertise: ['Hydration', 'Acne Care', 'Deep Cleansing'],
    experience: 6,
    bio: 'Maya specialises in skin restoration and acne management. Her holistic approach combines clinical-grade treatments with mindfulness techniques, ensuring each client leaves feeling not just better-looking, but genuinely restored. Maya holds certifications from the International Dermal Institute.',
    image:
      'https://images.unsplash.com/photo-1664575602807-e002fc20892b?w=400&q=85',
    treatments: [
      'Hydrating Facial',
      'Deep Cleansing Facial',
      'Brightening Treatment',
    ],
    availability: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
  },
  {
    id: '3',
    slug: 'sophie-laurent',
    name: 'Sophie Laurent',
    designation: 'Wellness & Skincare Therapist',
    expertise: ['Brightening', 'Relaxation', 'Body Treatments'],
    experience: 7,
    bio: "Sophie brings a French approach to beauty — effortless, effective, and deeply luxurious. With training from Paris's renowned Académie de Beauté, she specialises in brightening treatments and wellness rituals that address skin health from the inside out.",
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=85',
    treatments: [
      'Brightening Treatment',
      'Luxury Glow Facial',
      'Hydrating Facial',
    ],
    availability: ['Monday', 'Thursday', 'Friday', 'Saturday'],
  },
  {
    id: '4',
    slug: 'james-okafor',
    name: 'James Okafor',
    designation: 'Advanced Skincare Therapist',
    expertise: ['Anti-Aging', "Men's Skincare", 'Sensitive Skin'],
    experience: 5,
    bio: 'James is our specialist in advanced anti-aging protocols and inclusive skincare. With a background in sports therapy, he brings a unique understanding of how lifestyle factors affect skin health. His treatments are as effective as they are relaxing.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=85',
    treatments: [
      'Anti-Aging Facial',
      'Sensitive Skin Therapy',
      'Deep Cleansing Facial',
    ],
    availability: ['Wednesday', 'Thursday', 'Friday', 'Sunday'],
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Catherine D.',
    treatment: 'Luxury Glow Facial',
    rating: 5,
    review:
      "Absolutely transformative. I walked in feeling tired and left looking like I'd had eight hours of sleep plus a holiday. The 24k gold treatment is worth every penny. Aria is a true artist.",
    avatar: 'C',
  },
  {
    id: '2',
    name: 'Priya S.',
    treatment: 'Anti-Aging Facial',
    rating: 5,
    review:
      "I've tried spas all over London and nothing comes close to Lumière. The attention to detail, the quality of products, and the results — I booked my next appointment before I'd even left.",
    avatar: 'P',
  },
  {
    id: '3',
    name: 'Rebecca M.',
    treatment: 'Hydrating Facial',
    rating: 5,
    review:
      "My skin has never felt this good. Maya took time to understand my skin's specific needs and tailored the treatment perfectly. I'll be back every month without question.",
    avatar: 'R',
  },
  {
    id: '4',
    name: 'Amelia T.',
    treatment: 'Brightening Treatment',
    rating: 5,
    review:
      "My hyperpigmentation has significantly faded after just three sessions. Sophie is incredibly knowledgeable and the studio itself is the most beautiful space I've visited.",
    avatar: 'A',
  },
  {
    id: '5',
    name: 'Emma L.',
    treatment: 'Sensitive Skin Therapy',
    rating: 5,
    review:
      'As someone with rosacea, I was nervous to try new treatments. Lumière made me feel completely safe. No irritation whatsoever, just beautifully calm, comfortable skin.',
    avatar: 'E',
  },
  {
    id: '6',
    name: 'James K.',
    treatment: 'Deep Cleansing Facial',
    rating: 4,
    review:
      'Brilliant experience. My skin felt completely refreshed and clear for weeks. The environment is calming without being pretentious. Genuinely a cut above.',
    avatar: 'J',
  },
];

export const membershipPlans = [
  {
    id: 'essential',
    name: 'Essential',
    price: 89,
    period: 'month',
    color: 'sage',
    description: 'The ideal introduction to regular professional skincare.',
    features: [
      '1 treatment per month (up to £125 value)',
      '10% discount on additional treatments',
      'Priority booking (48 hours advance)',
      'Complimentary skin consultation',
      'Member newsletter & skincare tips',
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 169,
    period: 'month',
    color: 'gold',
    description:
      'For those committed to achieving and maintaining exceptional skin.',
    features: [
      '2 treatments per month (up to £185 value each)',
      '15% discount on additional treatments',
      'Priority booking (72 hours advance)',
      'Quarterly personalised skin plan',
      'Exclusive member events',
      'Birthday treatment upgrade',
      'Free product samples each month',
    ],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 299,
    period: 'month',
    color: 'forest',
    description: 'An unlimited luxury experience with every Lumière privilege.',
    features: [
      'Unlimited treatments (all categories)',
      '20% discount on retail products',
      'Dedicated specialist assignment',
      'Same-day booking available',
      'Quarterly bespoke skin programme',
      'Annual luxury gift',
      'Exclusive Elite-only treatments',
      'Free guest passes (2 per year)',
    ],
    popular: false,
  },
];

export const packages = [
  {
    id: 'essential-glow',
    name: 'Essential Glow',
    treatments: ['Hydrating Facial', 'Brightening Treatment'],
    totalDuration: 120,
    originalPrice: 260,
    packagePrice: 210,
    savings: 50,
    description:
      'A perfect introduction to luxury skincare combining deep hydration with radiance-boosting brightening.',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80',
  },
  {
    id: 'signature-ritual',
    name: 'Signature Skin Ritual',
    treatments: ['Deep Cleansing Facial', 'Anti-Aging Facial'],
    totalDuration: 165,
    originalPrice: 320,
    packagePrice: 260,
    savings: 60,
    description:
      'Begin with thorough purification, then follow with our advanced anti-aging protocol for complete renewal.',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
  {
    id: 'luxury-experience',
    name: 'Luxury Facial Experience',
    treatments: ['Luxury Glow Facial', 'Sensitive Skin Therapy'],
    totalDuration: 150,
    originalPrice: 345,
    packagePrice: 285,
    savings: 60,
    description:
      'The ultimate luxury experience — our prestige Glow Facial paired with a deeply soothing wellness treatment.',
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&q=80',
  },
  {
    id: 'complete-wellness',
    name: 'Complete Wellness Package',
    treatments: [
      'Anti-Aging Facial',
      'Brightening Treatment',
      'Hydrating Facial',
    ],
    totalDuration: 210,
    originalPrice: 445,
    packagePrice: 360,
    savings: 85,
    description:
      'A comprehensive wellness journey across three sessions, addressing aging, radiance, and deep hydration.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  },
];

export const blogPosts = [
  {
    id: '1',
    slug: 'the-science-of-hyaluronic-acid',
    title:
      "The Science of Hyaluronic Acid: Why It's the Gold Standard of Hydration",
    excerpt:
      "Hyaluronic acid can hold up to 1,000 times its weight in water. Here's what that means for your skin and why molecular weight matters more than you think.",
    category: 'Skincare Tips',
    author: 'Aria Chen',
    publishedAt: '2026-10-15',
    readingTime: 6,
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    featured: true,
  },
  {
    id: '2',
    slug: 'building-a-skincare-routine-for-sensitive-skin',
    title:
      "Building a Skincare Routine for Sensitive Skin: A Specialist's Guide",
    excerpt:
      'Sensitive skin requires a methodical, patient approach. Our lead therapist Maya shares the framework she uses with every new sensitive-skin client.',
    category: 'Skin Hydration',
    author: 'Maya Patel',
    publishedAt: '2026-10-02',
    readingTime: 8,
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    featured: false,
  },
  {
    id: '3',
    slug: 'understanding-retinol',
    title:
      'Understanding Retinol: What It Does, Who Should Use It, and How to Start',
    excerpt:
      "Retinol is one of the most evidence-backed skincare ingredients available. But it comes with caveats. Here's everything you need to know before starting.",
    category: 'Anti-Aging',
    author: 'Aria Chen',
    publishedAt: '2026-09-18',
    readingTime: 10,
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    featured: false,
  },
  {
    id: '4',
    slug: 'facial-massage-benefits',
    title: 'Why Facial Massage Is as Important as the Products You Apply',
    excerpt:
      'Technique matters as much as ingredients. Sophie Laurent explains why the right facial massage can boost product absorption, improve circulation, and visibly lift the face.',
    category: 'Facial Treatments',
    author: 'Sophie Laurent',
    publishedAt: '2026-09-05',
    readingTime: 5,
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    featured: false,
  },
  {
    id: '5',
    slug: 'spa-lifestyle-morning-routine',
    title: 'The Lumière Morning Ritual: 10 Minutes to Healthier Skin Every Day',
    excerpt:
      'Professional treatments deliver results, but daily rituals maintain them. Here is the morning routine our specialists actually follow.',
    category: 'Spa Lifestyle',
    author: 'Sophie Laurent',
    publishedAt: '2026-08-22',
    readingTime: 4,
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    featured: false,
  },
  {
    id: '6',
    slug: 'vitamin-c-brightening-guide',
    title: 'The Complete Guide to Vitamin C for Brighter, More Even Skin',
    excerpt:
      'Not all vitamin C is created equal. We break down the different forms, concentrations, and formulations — and which ones genuinely work.',
    category: 'Beauty & Wellness',
    author: 'Maya Patel',
    publishedAt: '2026-08-10',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    featured: false,
  },
];

export const galleryImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    category: 'Spa Interior',
    alt: 'Lumière reception and lounge area',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    category: 'Facial Treatments',
    alt: 'Facial treatment in progress',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    category: 'Skincare Products',
    alt: 'Premium skincare product arrangement',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
    category: 'Treatment Rooms',
    alt: 'Lumière treatment suite',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
    category: 'Skincare Products',
    alt: 'Skincare serum close-up',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    category: 'Facial Treatments',
    alt: 'Anti-aging facial treatment',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80',
    category: 'Wellness Experience',
    alt: 'Wellness and relaxation experience',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80',
    category: 'Spa Atmosphere',
    alt: 'Spa atmosphere and ambience',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1620733723572-11c53f73a416?w=800&q=80',
    category: 'Facial Treatments',
    alt: 'Brightening facial treatment',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
    category: 'Spa Interior',
    alt: 'Specialist consultation area',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    category: 'Wellness Experience',
    alt: 'Client wellness consultation',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    category: 'Spa Atmosphere',
    alt: 'Lumière spa ambience',
  },
];

export const faqs = [
  {
    id: '1',
    category: 'Booking',
    question: 'How do I book an appointment?',
    answer:
      'You can book directly through our website using the Book Appointment button, or call us at +44 20 7946 0958. We recommend booking at least 48–72 hours in advance for your preferred specialist, though same-day appointments may be available for certain treatments.',
  },
  {
    id: '2',
    category: 'Booking',
    question: 'Can I request a specific specialist?',
    answer:
      "Absolutely. During booking, you can select your preferred specialist and see their availability. If your preferred specialist isn't available, our team can suggest a suitable alternative or notify you of an opening.",
  },
  {
    id: '3',
    category: 'Treatments',
    question: 'How do I know which treatment is right for me?',
    answer:
      'Every appointment begins with a thorough skin consultation. Your specialist will assess your skin, discuss your concerns and goals, and recommend the most suitable treatment. You can also book a standalone skin consultation before committing to a treatment.',
  },
  {
    id: '4',
    category: 'Treatments',
    question: 'How often should I get a facial?',
    answer:
      "Most clients benefit from monthly treatments, as this aligns with the skin's natural renewal cycle of approximately 28 days. For specific concerns such as acne or hyperpigmentation, your specialist may recommend a more intensive initial programme.",
  },
  {
    id: '5',
    category: 'Cancellation',
    question: 'What is your cancellation policy?',
    answer:
      "We require a minimum of 24 hours' notice for cancellations or rescheduling. Cancellations with less than 24 hours' notice may incur a 50% treatment charge. We understand emergencies arise — please contact us and we will do our best to accommodate you.",
  },
  {
    id: '6',
    category: 'Payments',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards, contactless payment, and online payment at the time of booking. Members may use their monthly treatment allowance. Gift cards are also accepted.',
  },
  {
    id: '7',
    category: 'Skincare',
    question: 'What should I do before my facial?',
    answer:
      'Arrive with clean skin or allow time for removal at the studio. Avoid exfoliating at home the day before. If you use prescription retinoids, let your specialist know as this may affect treatment choices. Stay hydrated and avoid heavy exercise immediately before your appointment.',
  },
  {
    id: '8',
    category: 'Skincare',
    question: 'What should I do after my facial?',
    answer:
      'Keep skin hydrated and apply SPF diligently for 48–72 hours post-treatment. Avoid heavy makeup immediately after. Do not exfoliate for 3–5 days. Your specialist will provide bespoke aftercare recommendations tailored to your treatment.',
  },
  {
    id: '9',
    category: 'Membership',
    question: 'Can I pause my membership?',
    answer:
      'Yes. Members may pause their membership for up to two months per year. Unused treatment credits roll over for one month. Contact our team to arrange a pause.',
  },
  {
    id: '10',
    category: 'General Information',
    question: 'Is Lumière suitable for men?',
    answer:
      "Absolutely. Lumière welcomes all clients regardless of gender. We offer treatments specifically designed for men's skin concerns, and our specialists are experienced in treating all skin types and tones.",
  },
];

export const openingHours = [
  { day: 'Monday', hours: '9:00 – 19:00' },
  { day: 'Tuesday', hours: '9:00 – 19:00' },
  { day: 'Wednesday', hours: '9:00 – 20:00' },
  { day: 'Thursday', hours: '9:00 – 20:00' },
  { day: 'Friday', hours: '9:00 – 19:00' },
  { day: 'Saturday', hours: '9:00 – 18:00' },
  { day: 'Sunday', hours: '10:00 – 16:00' },
];
