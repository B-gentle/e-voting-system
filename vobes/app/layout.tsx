import type { Metadata } from "next";
import { Raleway, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const merriweatherSans = Merriweather_Sans({
  variable: "--font-merriweather-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Voting Platform",
  description:
    "A platform for conducting online voting securely and efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${merriweatherSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
