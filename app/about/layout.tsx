import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Ama Dziedzom Barnor — Product Designer & Builder in Accra, Ghana.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
