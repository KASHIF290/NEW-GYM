import type { Metadata } from "next";
import { Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "M.S Fitness Gym — Best Gym in Howrah | Tikiapara",
  description:
    "M.S Fitness Gym in Tikiapara, Howrah. Rated 4.4/5 by 600+ members. Strength training, personal training & group classes. Open Mon–Sat 6 AM–11:30 PM. Book your free trial today.",
  openGraph: {
    title: "M.S Fitness Gym — Best Gym in Howrah",
    description:
      "Rated 4.4/5 by 600+ members. Strength training, personal training & group classes in Tikiapara, Howrah.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} ${mono.variable}`}>
      <body className="bg-iron text-chalk font-body antialiased">
        {children}
      </body>
    </html>
  );
}
