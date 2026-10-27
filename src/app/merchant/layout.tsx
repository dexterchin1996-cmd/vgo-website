import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Merchant合作 | V'GO — 马来西亚Merchant入驻平台";
  const description = "免费入驻 VGO 平台，获得本地流量扶持、Orders直推和透明费率。马来西亚Merchant入驻平台。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/merchant/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
