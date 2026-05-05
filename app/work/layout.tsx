import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work, case studies, and experimental projects by Ama Dziedzom Barnor.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
