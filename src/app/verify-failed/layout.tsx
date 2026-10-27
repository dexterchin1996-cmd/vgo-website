import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "验证失败 | V'GO";
  const description = "邮箱验证失败。";
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: { title, description, url: "/verify-failed/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
