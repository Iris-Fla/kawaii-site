"use client";
import Image from "next/image";
import Squares from "@/components/squares";
import AnimatedSVG from "@/components/animatedsvg";
import { Racing_Sans_One } from "next/font/google";

const racingSans = Racing_Sans_One({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="relative flex justify-center items-center min-h-screen bg-transparent overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 z-0">
          <Squares
            speed={0.3}
            hoverFillColor={"#ec4899"}
          />
        </div>
        {/* グラスモーフィズムの横長枠 */}
        <div
          className="relative z-15 backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl shadow-xl flex justify-center items-end"
          style={{
            width: "1400px",
            height: "500px",
          }}
        >
          <div className="absolute inset-0 flex items-stretch z-15 pointer-events-none">
            <AnimatedSVG />
          </div>
          {/* 画像を最前面に */}
          <div className="relative z-30">
            <Image
              src="/ithiku_fit.png"
              alt="いちく"
              width={600}
              height={240}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <p className={`${racingSans.className} absolute top-0 left-30 text-4xl font-bold`}>
          Aboutea
        </p>
        <p className="flex justify-center items-center text-lg min-h-[60px]">
          いちくの作品や活動を紹介するポートフォリオサイトです。
        </p>
      </div>
    </div>
  );
}
