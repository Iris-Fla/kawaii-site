"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const MainVisual = () => {
  const [svgKey, setSvgKey] = useState(0);

  useEffect(() => {
    setSvgKey((prev) => prev + 1); // マウント時にkeyを変えてSVGを再描画
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#222] flex items-center justify-center overflow-hidden">
      {/* メインコンテンツ */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full mx-auto px-8 gap-12">
        {/* 左側: ithikuテキストと下線 */}
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <div className="relative mx-auto">
            <div className="flex justify-center w-3/4 mx-auto">
              {/* keyを付与してSVGを再描画 */}
              <Image
                key={svgKey}
                src="/animated_title.svg"
                width={380}
                height={180}
                alt="Ithiku"
              />
            </div>
            {/* 二本の下線 */}
            <div className="mt-3 flex flex-col items-center">
              <div className="h-0.5 bg-white opacity-70 mb-2 w-full"></div>
              <div className="h-0.5 bg-white w-full"></div>
            </div>
          </div>
        </div>

        {/* 右側: 配信予定テキストと動画 */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative bg-gray-200 rounded-lg shadow-lg overflow-hidden w-full max-w-6xl h-[680px]">
            {/* 動画背景 */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/sample_video.mp4" type="video/mp4" />
              お使いのブラウザは動画をサポートしていません。
            </video>

            {/* オーバーレイとテキスト */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl lg:text-3xl font-bold text-center px-4">
                配信の様子(切り抜き)予定
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
