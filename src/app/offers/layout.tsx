import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "福利专区 | V'GO";
  const description = "V'GO 福利专区。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/offers/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
