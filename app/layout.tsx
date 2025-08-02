import type { Metadata } from "next";
import { Poppins, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${merriweatherSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
