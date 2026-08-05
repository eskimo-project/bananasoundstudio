import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banana Music For Brand",
  description:
    "สร้าง Music Brief สำหรับเพลงประจำแบรนด์ พร้อมราคาประเมินอัตโนมัติ",
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
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
