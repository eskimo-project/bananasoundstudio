import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const protocol = headerStore.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "https://www.bananasoundstudio.com";
  const title = "Banana Sound Studio | Bangkok Sound Studio & Music Label";
  const description =
    "Bangkok-based sound studio and music label for film scores, TV soundtracks, commercials, sound design, voice recording, Foley, mixing, mastering and immersive audio.";
  const imageUrl = `${origin}/og.png`;

  return {
    title,
    description,
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Banana Sound Studio",
      description:
        "Music composition, sound design, mixing and audio post-production for film, TV, commercials and brands.",
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Banana Sound Studio social preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Banana Sound Studio",
      description,
      images: [imageUrl],
    },
  };
}

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
