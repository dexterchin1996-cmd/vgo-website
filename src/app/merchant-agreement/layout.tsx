import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "合作伙伴协议 | V'GO";
  const description = "V'GO 商家合作伙伴协议。";
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
