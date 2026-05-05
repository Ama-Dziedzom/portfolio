import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PortfolioShell from "@/components/PortfolioShell";

export const metadata: Metadata = {
  title: {
    default: "Ama Dziedzom Barnor — Product Designer & Builder",
    template: "%s | Ama Dziedzom Barnor",
  },
  description:
    "Product Designer & Builder based in Accra, Ghana. Designing things I then have to build.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
