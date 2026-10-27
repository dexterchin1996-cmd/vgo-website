import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "关于 VGO | V'GO — 马来西亚上门服务平台";
  const description = "了解 VGO 平台的故事、愿景与团队。马来西亚上门服务平台，认证师傅随叫随到。";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "/about/",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
