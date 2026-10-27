import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "ProviderTerms | V'GO";
  const description = "V'GO Provider入驻Terms。";
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
