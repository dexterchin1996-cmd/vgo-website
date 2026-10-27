import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "常见问题 | V'GO";
  const description = "V'GO 常见问题解答。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/faq/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
