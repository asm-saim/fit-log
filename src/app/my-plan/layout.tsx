import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitLog - My Plan",
};

export default function MyPlanLayout({ children }: { children: React.ReactNode }) {
  return children;
}
