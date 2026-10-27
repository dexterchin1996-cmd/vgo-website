import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "验证成功 | V'GO";
  const description = "邮箱验证成功。";
  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: { title, description, url: "/verify-success/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
