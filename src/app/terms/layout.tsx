import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Services条款 | V'GO";
  const description = "V'GO Services条款。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/terms/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
