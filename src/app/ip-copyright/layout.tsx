import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "知识产权 | V'GO";
  const description = "V'GO 知识产权声明。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/ip-copyright/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
