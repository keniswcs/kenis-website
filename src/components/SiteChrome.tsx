"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/** Marketing chrome is hidden on /card so a scanned QR opens a clean digital business card. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname() ?? "";
  const isCard = path === "/card" || path.startsWith("/card/");

  if (isCard) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
