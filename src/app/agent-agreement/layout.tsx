import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "区域代理协议 | V'GO";
  const description = "V'GO 区域代理协议。";
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
