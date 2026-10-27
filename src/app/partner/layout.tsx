import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "合作与投资 | V'GO — 马来西亚上门服务平台";
  const description = "与 V'GO 一起成长。商家、师傅、区域代理、投资合作。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/partner/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
