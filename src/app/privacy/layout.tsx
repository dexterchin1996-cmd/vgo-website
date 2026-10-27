import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Privacy政策 | V'GO";
  const description = "V'GO Privacy政策。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/privacy/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
