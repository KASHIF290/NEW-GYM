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
// SAMPLE / DEMO CONTENT — written for client preview purposes only.
// None of this is real. Swap every field below with actual gym info,
// real trainer details, real pricing, and real customer reviews
// before this site goes live.
// ============================================================

export const trainers = [
  {
    name: "[Sample] Rohan Sharma",
    specialty: "Strength & Conditioning",
    photo: "/trainers/placeholder-1.jpg",
  },
  {
    name: "[Sample] Priya Das",
    specialty: "Personal Training",
    photo: "/trainers/placeholder-2.jpg",
  },
  {
    name: "[Sample] Arjun Ghosh",
    specialty: "Group Fitness & HIIT",
    photo: "/trainers/placeholder-3.jpg",
  },
];

export const programs = [
  {
    name: "Strength Training",
    description: "[Sample] Full range of free weights, plate-loaded machines, and power racks for building raw strength.",
    plate: "45",
  },
  {
    name: "Personal Training",
    description: "[Sample] One-on-one coaching with certified trainers, built around your specific goals and schedule.",
    plate: "35",
  },
  {
    name: "Group Classes",
    description: "[Sample] HIIT, functional training, and circuit sessions run throughout the day — no extra cost with membership.",
    plate: "25",
  },
  {
    name: "Cardio & Conditioning",
    description: "[Sample] Treadmills, cycles, rowers, and dedicated conditioning sessions for endurance and fat loss.",
    plate: "10",
  },
];

export const membershipPlans = [
  {
    tier: "Basic",
    price: "[Sample] ₹1,200/month",
    features: [
      "Full gym floor access",
      "Locker facility",
      "Open Mon–Sat, 6 AM–11:30 PM",
    ],
  },
  {
    tier: "Standard",
    price: "[Sample] ₹1,800/month",
    features: [
      "Everything in Basic",
      "All group classes included",
      "1 free trainer consultation/month",
      "Diet guidance sheet",
    ],
    featured: true,
  },
  {
    tier: "Premium",
    price: "[Sample] ₹2,800/month",
    features: [
      "Everything in Standard",
      "4 personal training sessions/month",
      "Priority equipment access",
      "Monthly progress tracking",
      "Guest passes (2/month)",
    ],
  },
];

export const testimonials = [
  {
    name: "[Sample] Sourav K.",
    quote: "Best gym in Tikiapara, hands down. Clean equipment and the trainers actually pay attention.",
    rating: 5,
  },
  {
    name: "[Sample] Ananya R.",
    quote: "Joined 6 months ago and already seeing real results. Great group class energy in the evenings.",
    rating: 5,
  },
  {
    name: "[Sample] Debashish M.",
    quote: "Solid strength setup and flexible timings. Would like more parking space, otherwise no complaints.",
    rating: 4,
  },
];

export const galleryImages = Array.from({ length: 9 }).map((_, i) => ({
  src: `/gallery/placeholder-${(i % 3) + 1}.jpg`,
  alt: "[Sample] Gym interior/equipment photo",
}));
