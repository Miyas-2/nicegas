import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NICEGAS — Bio-CNG Energi Bersih Terbarukan | ITENAS Bandung",
  description:
    "NICEGAS adalah inovasi Bio-CNG hasil pemurnian biogas yang bebas bau, aman, dan siap digunakan sebagai energi bersih terbarukan. Produk hilirisasi riset ITENAS Bandung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
