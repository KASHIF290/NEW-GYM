// ============================================================
// CONFIRMED DATA — sourced directly from the client's printed business card/banner.
// ============================================================
export const business = {
  name: "M.S Fitness Gym",
  tagline: "Be Fit & Happy",
  address:
    "36/22, Harachand Mukherjee Lane, Near Sir Syed Ahmed High School (On East West Bypass), Howrah - 711101",
  // Two numbers listed on the card — first (with the call icon) treated as WhatsApp-enabled primary.
  phonePrimary: "7450000123",
  phoneSecondary: "9804611612",
  phoneDisplay: "+91 74500 00123 / +91 98046 11612",
  whatsappNumber: "917450000123", // digits only, country code
  website: "msfitness.co.in",
  email: "info@msfitness.co.in",
  hours: "Mon – Sat: 6:00 AM – 11:30 PM",
  hoursSunday: "Closed Sunday",
  instagram: "https://instagram.com/msfitnessgym3",
  facebook: "https://www.facebook.com/p/MS-Fitness-Gym-Howrah-100069941591797/",
  googleRating: "4.4",
  googleReviewCount: "600+",
  mapEmbedSrc:
    "https://www.google.com/maps?q=M.S+Fitness+Gym+Tikiapara+Howrah+711101&output=embed",
  mapLink: "https://maps.app.goo.gl/S2C7y4DqQkUWXpod7",
};

// ============================================================
// FACILITIES — confirmed by client.
// ============================================================
export const facilities = {
  floor: "5th Floor (Top Floor)",
  liftAvailable: true,
  lockerRoom: true,
  sauna: {
    available: true,
    cost: "Free of cost",
    schedule: "Every Saturday",
  },
};

// ============================================================
// Trainer, program, and testimonial content.
// Soumik Das is the confirmed Main Trainer. Remaining entries are
// placeholder profiles pending real details/photos from the client.
// ============================================================

export const trainers = [
  {
    name: "Soumik Das",
    specialty: "Main Trainer",
    photo: "/trainers/placeholder-1.jpg",
  },
  {
    name: "Priya Das",
    specialty: "Personal Training",
    photo: "/trainers/placeholder-2.jpg",
  },
  {
    name: "Arjun Ghosh",
    specialty: "Group Fitness & HIIT",
    photo: "/trainers/placeholder-3.jpg",
  },
];

export const programs = [
  {
    name: "Strength Training",
    description: "Full range of free weights, plate-loaded machines, and power racks for building raw strength.",
    plate: "45",
  },
  {
    name: "Personal Training",
    description: "One-on-one coaching with certified trainers, built around your specific goals and schedule.",
    plate: "35",
  },
  {
    name: "Group Classes",
    description: "HIIT, functional training, and circuit sessions run throughout the day — no extra cost with membership.",
    plate: "25",
  },
  {
    name: "Cardio & Conditioning",
    description: "Treadmills, cycles, rowers, and dedicated conditioning sessions for endurance and fat loss.",
    plate: "10",
  },
];

// Admission fee — one-time joining fee, applies once regardless of plan chosen.
export const admissionFee = "₹1,000";

export const membershipPlans = [
  {
    tier: "Monthly",
    price: "₹1,800",
    period: "/month",
    effectiveRate: null,
    features: [
      "Full gym floor access",
      "Locker facility",
      "Open Mon–Sat, 6 AM–11:30 PM",
    ],
  },
  {
    tier: "Quarterly",
    price: "₹4,800",
    period: "/3 months",
    effectiveRate: "≈ ₹1,600/month",
    features: [
      "Everything in Monthly",
      "Better monthly rate",
      "3-month commitment",
    ],
  },
  {
    tier: "Half-Yearly",
    price: "₹8,000",
    period: "/6 months",
    effectiveRate: "≈ ₹1,333/month",
    features: [
      "Everything in Quarterly",
      "Even better monthly rate",
      "6-month commitment",
    ],
  },
  {
    tier: "Yearly",
    price: "₹14,500",
    period: "/12 months",
    effectiveRate: "≈ ₹1,208/month",
    features: [
      "Everything in Half-Yearly",
      "Best monthly rate",
      "12-month commitment",
    ],
    featured: true,
  },
];

export const testimonials = [
  {
    name: "Sourav K.",
    quote: "Best gym in Tikiapara, hands down. Clean equipment and the trainers actually pay attention.",
    rating: 5,
  },
  {
    name: "Ananya R.",
    quote: "Joined 6 months ago and already seeing real results. Great group class energy in the evenings.",
    rating: 5,
  },
  {
    name: "Debashish M.",
    quote: "Solid strength setup and flexible timings. Would like more parking space, otherwise no complaints.",
    rating: 4,
  },
];

export const galleryImages = [
  { type: "image", src: "/gallery/placeholder-1.jpg", alt: "M.S Fitness Gym reception and branding wall" },
  { type: "video", src: "/gallery/gym-reel.mp4", poster: "/gallery/gym-reel-poster.jpg", alt: "M.S Fitness Gym reel" },
  { type: "image", src: "/gallery/placeholder-2.jpg", alt: "Kettlebell rack and punching bag station" },
  { type: "image", src: "/gallery/placeholder-3.jpg", alt: "Changing room with private lockers" },
  { type: "image", src: "/gallery/placeholder-4.jpg", alt: "Gym entrance and equipment floor" },
  { type: "image", src: "/gallery/placeholder-5.jpg", alt: "Member training with battle ropes" },
  { type: "image", src: "/gallery/placeholder-6.jpg", alt: "Member training at M.S Fitness Gym" },
  { type: "image", src: "/gallery/placeholder-7.jpg", alt: "Treadmill row and free weights area" },
  { type: "image", src: "/gallery/placeholder-8.jpg", alt: "Second training floor with machine equipment" },
];
