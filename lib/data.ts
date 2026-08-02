// ============================================================
// CONFIRMED DATA — sourced from public listings (Justdial, Google Maps, Instagram).
// Verify with client before going live, especially the phone number.
// ============================================================
export const business = {
  name: "M.S Fitness Gym",
  tagline: "Best Gym in Howrah",
  address: "36/22, Srinath Porel Ln, Near Sir Syed Ahmed High School, Tikiapara, Howrah, West Bengal 711101",
  // TWO different numbers found in public listings — confirm which is correct with client
  phonePrimary: "PLACEHOLDER_CONFIRM_PHONE", // e.g. "09804611612" or "7450000123"
  phoneDisplay: "[Confirm phone with client]",
  whatsappNumber: "PLACEHOLDER_CONFIRM_WHATSAPP", // digits only, country code, e.g. "917450000123"
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
// PLACEHOLDER DATA — client has not provided this yet.
// Every entry below is clearly marked. Replace before launch.
// ============================================================

export const trainers = [
  {
    name: "[Trainer name — client to provide]",
    specialty: "[Specialty — e.g. Strength & Conditioning]",
    photo: "/trainers/placeholder-1.jpg",
  },
  {
    name: "[Trainer name — client to provide]",
    specialty: "[Specialty — e.g. Personal Training]",
    photo: "/trainers/placeholder-2.jpg",
  },
  {
    name: "[Trainer name — client to provide]",
    specialty: "[Specialty — e.g. Group Fitness]",
    photo: "/trainers/placeholder-3.jpg",
  },
];

export const programs = [
  {
    name: "Strength Training [confirm]",
    description: "[Client to confirm exact program details and equipment available]",
    plate: "45",
  },
  {
    name: "Personal Training [confirm]",
    description: "[Client to confirm 1-on-1 training availability and pricing]",
    plate: "35",
  },
  {
    name: "Group Classes [confirm]",
    description: "[Client to confirm which group classes are offered — e.g. HIIT, functional]",
    plate: "25",
  },
  {
    name: "Cardio & Conditioning [confirm]",
    description: "[Client to confirm cardio equipment and conditioning sessions offered]",
    plate: "10",
  },
];

export const membershipPlans = [
  {
    tier: "Basic",
    price: "[₹ / month — client to confirm]",
    features: [
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
    ],
  },
  {
    tier: "Standard",
    price: "[₹ / month — client to confirm]",
    features: [
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
    ],
    featured: true,
  },
  {
    tier: "Premium",
    price: "[₹ / month — client to confirm]",
    features: [
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
      "[Feature — client to confirm]",
    ],
  },
];

export const testimonials = [
  {
    name: "[Member name — client to provide or leave as Google review pull]",
    quote: "[Real testimonial quote — client to provide, do not fabricate]",
    rating: 5,
  },
  {
    name: "[Member name — client to provide or leave as Google review pull]",
    quote: "[Real testimonial quote — client to provide, do not fabricate]",
    rating: 5,
  },
  {
    name: "[Member name — client to provide or leave as Google review pull]",
    quote: "[Real testimonial quote — client to provide, do not fabricate]",
    rating: 4,
  },
];

export const galleryImages = Array.from({ length: 9 }).map((_, i) => ({
  src: `/gallery/placeholder-${(i % 3) + 1}.jpg`,
  alt: "[Gym photo — client to provide actual equipment/interior photos]",
}));
