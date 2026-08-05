import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://new-gym-nine.vercel.app"),
  title: "M.S Fitness Gym — Best Gym in Howrah | Tikiapara",
  description:
    "M.S Fitness Gym in Tikiapara, Howrah. Rated 4.4/5 by 600+ members. Strength training, personal training & group classes. Open Mon–Sat 6 AM–11:30 PM. Book your free trial today.",
  openGraph: {
    title: "M.S Fitness Gym — Best Gym in Howrah",
    description:
      "Rated 4.4/5 by 600+ members. Strength training, personal training & group classes in Tikiapara, Howrah.",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.S Fitness Gym — Best Gym in Howrah",
    description: "Rated 4.4/5 by 600+ members. Strength training, personal training & group classes in Tikiapara, Howrah.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// LocalBusiness structured data — helps Google understand this is a real,
// physical gym with hours/location/contact, improving local search & Maps eligibility.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: business.name,
  image: "https://new-gym-nine.vercel.app/logo.png",
  telephone: `+${business.whatsappNumber}`,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "36/22, Harachand Mukherjee Lane, Near Sir Syed Ahmed High School (On East West Bypass)",
    addressLocality: "Howrah",
    postalCode: "711101",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "23:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.googleRating,
    reviewCount: "600",
  },
  sameAs: [business.instagram, business.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink text-paper font-body antialiased">
        {children}
      </body>
    </html>
  );
}
