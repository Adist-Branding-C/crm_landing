import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { DemoModalProvider } from "@/context/DemoModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leadist CRM | Every Lead. Every Deal. One CRM.",
  description:
    "Leadist CRM is an all-in-one customer relationship management platform that helps sales teams capture leads, manage follow-ups, track deals, and grow their business from one powerful dashboard.",
  keywords: [
    "Leadist CRM",
    "CRM",
    "Customer Relationship Management",
    "Lead Management",
    "Sales CRM",
    "Deal Management",
    "Sales Management",
  ],

icons: {
  icon: "/seo/logo.png",
  shortcut: "/seo/logo.png",
  apple: "/seo/logo.png",
},

openGraph: {
  title: "Leadist CRM | Every Lead. Every Deal. One CRM.",
  description:
    "Leadist CRM helps sales teams capture leads, manage follow-ups, track deals, and close more deals from one powerful platform.",
  images: [
    {
      url: "/seo/logo.png",
      alt: "Leadist CRM",
    },
  ],
  type: "website",
},
twitter: {
  card: "summary",
  title: "Leadist CRM | Every Lead. Every Deal. One CRM.",
  description:
    "Leadist CRM helps sales teams capture leads, manage follow-ups, track deals, and close more deals from one powerful platform.",
  images: ["/seo/logo.png"],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DemoModalProvider>{children}</DemoModalProvider>
      </body>
    </html>
  );
}