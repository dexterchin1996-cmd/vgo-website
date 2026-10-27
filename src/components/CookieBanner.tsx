"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const KEY = "vgo_cookie_consent_v1";

export default function CookieBanner() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  function choose(v: "accept" | "decline") {
    try { localStorage.setItem(KEY, v); } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[80] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 p-5">
      <p className="text-sm text-gray-600 leading-relaxed">
        {t("cookie_text")}{" "}
        <Link href="/privacy" className="text-[#FF6600] font-semibold underline">
          {t("cookie_privacy")}
        </Link>
        。
      </p>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => choose("accept")}
          className="flex-1 bg-[#FF6600] text-white font-bold py-2.5 rounded-xl text-sm"
        >
          {t("cookie_accept")}
        </button>
        <button
          onClick={() => choose("decline")}
          className="flex-1 bg-gray-100 text-gray-600 font-bold py-2.5 rounded-xl text-sm"
        >
          {t("cookie_decline")}
        </button>
      </div>
    </div>
  );
}
