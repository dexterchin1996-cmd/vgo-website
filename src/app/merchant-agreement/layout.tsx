import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "合作伙伴Terms | V'GO";
  const description = "V'GO Merchant合作伙伴Terms。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/merchant-agreement/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
