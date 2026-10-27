import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "用户Terms | V'GO";
  const description = "V'GO 用户Terms。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/user-agreement/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
