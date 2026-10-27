"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hero 動態背景：HTML5 <video> 真實服務場景
 *
 * 使用方式：
 * 1. 到 Pexels / Coverr / Mixkit 找免費服務場景短片（維修、清潔、居家）
 * 2. 把下面 source 的 src 替換成實際的 MP4 直鏈
 * 3. 移動端 source 加上 media="(max-width: 768px)" 自動切小檔
 */
export default function HeroBackgroundMotion() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pausedByReduce, setPausedByReduce] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 降級保護：用戶開啟「減少動態效果」，暫停影片、回退靜態 poster
    if (reduce) {
      video.pause();
      setPausedByReduce(true);
    } else {
      video.play().catch(() => {
        // 自動播放被瀏覽器攔截（靜音後通常可播），靜默忽略
      });
    }
  }, [reduce]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 1. 真實視頻背景 —— HTML5 <video> */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        // poster：影片加載前顯示的靜態封面（用 Unsplash 真實服務場景圖）
        poster="https://images.unsplash.com/photo-1558759547-dc0b367676a7?w=1920&q=80"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* 移動端：小檔案 (<5MB)，節省流量 */}
        <source
          src="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        {/* 桌面端：高畫質 */}
        <source
          src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        您的瀏覽器不支援視頻播放。
      </video>

      {/* 2. 深色遮罩：確保文字絕對清晰可視 */}
      <div className="absolute inset-0 bg-[#06111d]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/85 via-[#06111d]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06111d]/75 via-transparent to-transparent" />

      {/* 3. 降級提示（僅在減動模式下顯示） */}
      {pausedByReduce && (
        <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs">
          為了節省效能，背景視頻已暫停
        </div>
      )}
    </div>
  );
}
