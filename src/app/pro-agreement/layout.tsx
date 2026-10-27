import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "师傅协议 | V'GO";
  const description = "V'GO 师傅入驻协议。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/pro-agreement/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
