import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const iBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
 variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "Ben Bank",
  description:
    "Ben Bank is a modern banking platform that offers a range of financial services to help you manage your money effectively.",
  icons: { icon: "/icons/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${iBMPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
