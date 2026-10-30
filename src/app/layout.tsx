import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Unbounded, Syne } from "next/font/google";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Ranjeet Kumar | AI & Software Engineering Universe",
  description:
    "Production-quality, cinematic 3D personal developer portfolio of Ranjeet Kumar. Demonstrating AI/ML engineering, GenAI pipelines, robust backend architectures, and high-performance full-stack applications.",
  keywords: [
    "Ranjeet Kumar",
    "ranjeetyadavnitt",
    "CODEVERSE",
    "AI Engineer",
    "GenAI",
    "LLM Architecture",
    "Full Stack Developer",
    "Software Engineer",
    "Three.js Portfolio",
    "WebGL",
    "React 19",
    "Next.js",
    "FastAPI",
    "PyTorch",
  ],
  authors: [{ name: "Ranjeet Kumar" }],
  creator: "Ranjeet Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codeverse.dev",
    title: "Ranjeet Kumar | AI & Software Engineering Universe",
    description:
      "Explore the interactive 3D universe of Ranjeet Kumar: AI & GenAI systems, computer vision, full-stack platforms, and engineering achievements.",
    siteName: "CODEVERSE // Ranjeet Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjeet Kumar",
    description:
      "AI / GenAI Engineer | Full Stack Developer | Software Engineer. Explore projects in a 3D universe.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:,",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c0d12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${unbounded.variable} ${syne.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0d12] text-[#edece8] overflow-x-hidden w-full max-w-full selection:bg-[#38bdf8]/30 selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
