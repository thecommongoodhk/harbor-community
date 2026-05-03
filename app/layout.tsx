import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harbor Community",
  description: "A bilingual community platform for local offers, guides, and trusted partners."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
