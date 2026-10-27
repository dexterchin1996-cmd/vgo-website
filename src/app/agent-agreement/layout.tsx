import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "区域代理Terms | V'GO";
  const description = "V'GO 区域代理Terms。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/agent-agreement/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
