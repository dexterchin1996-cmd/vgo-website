import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "覆盖区域 | V'GO";
  const description = "V'GO 服务覆盖区域。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/coverage/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function CoverageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
