import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "师傅入驻 | V'GO — 马来西亚师傅入驻平台";
  const description = "0门槛接单、阶梯抽成、完工秒结款、接单大厅直接抢单。马来西亚师傅入驻平台。";
  return {
    title,
    description,
    openGraph: { title, description, url: "/technician/", type: "website" },
    twitter: { card: "summary", title, description },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
