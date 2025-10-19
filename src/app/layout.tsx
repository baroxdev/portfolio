import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NOTE: I chose a placeholder metadataBase. Replace with your real site URL (e.g. https://yourdomain.com).
const metadataBase = new URL("https://portfolio.barox.site");

export const metadata: Metadata = {
  title: {
    default: "Bao Phan — Software Engineer",
    template: "%s | Bao Phan",
  },
  applicationName: "Bao Phan — Portfolio",
  description:
    "Bao Phan — Software engineer based in Ho Chi Minh City. Building high-quality web applications with a focus on frontend engineering and problem solving.",
  keywords: [
    "Bao Phan",
    "Software Engineer",
    "Frontend Developer",
    "Fullstack",
    "React",
    "Next.js",
    "Ho Chi Minh",
    "Portfolio",
  ],
  authors: [{ name: "Bao Phan", url: "https://portfolio.barox.site" }],
  creator: "Bao Phan",
  publisher: "Bao Phan",
  metadataBase,
  openGraph: {
    title: "Bao Phan — Software Engineer",
    description:
      "Portfolio of Bao Phan — frontend & fullstack software engineer based in Ho Chi Minh City. View projects, experiences and contact information.",
    url: metadataBase.href,
    siteName: "portfolio.barox.site",
    images: [
      {
        url: new URL("/file.svg", metadataBase).href,
        width: 1200,
        height: 630,
        alt: "Barox — Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bao Phan — Software Engineer",
    description:
      "Portfolio of Bao Phan — frontend & fullstack software engineer based in Ho Chi Minh City.",
    creator: "@baophan",
    images: [new URL("/file.svg", metadataBase).href],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      { rel: "icon", url: "/favicon.ico" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
