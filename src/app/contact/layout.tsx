import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "联系我们 | V'GO — 马来西亚上门服务平台";
  const description = "联系 V'GO 平台。客服支持，合作咨询，投资合作。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/contact/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
