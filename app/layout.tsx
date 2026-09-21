import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "College of Agriculture E-Form Generator | ADSSU",
  description: "Access and prepare official F-TGN thesis forms of the College of Agriculture, Agusan del Sur State University.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-PH">
      <body className="antialiased">{children}</body>
    </html>
  );
}
