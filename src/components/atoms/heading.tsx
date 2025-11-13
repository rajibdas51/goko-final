"use client";

import React from "react";
import { StaticImageData } from "next/image";

type Props = {
  text: string | React.ReactNode;
  scratchSrc: string | StaticImageData;
  as?: React.ElementType; // ✅ allows any valid JSX tag or component
  className?: string;
  width?: string;
  height?: string;
  scratchOpacity?: number;
};

export default function GrungeHeading({
  text,
  scratchSrc,
  width = "516px",
  height = "365px",
  as: TagName = "h2",
  className = "",
  scratchOpacity = 0.9,
}: Props) {
  const src =
    typeof scratchSrc === "string"
      ? scratchSrc
      : (scratchSrc as StaticImageData).src;

  return (
    <TagName
      className={`relative inline-block leading-none uppercase tracking-wide ${className} custom-font-sans !font-bold`}
    >
      <span
        className="block text-transparent leading-[100%]"
        style={{
          background:
            "linear-gradient(180deg, #FCB82A 9.57%, #DC7D00 40.4%, #FCB82A 59.23%, #DC7D00 94.95%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextStroke: "1px #F8BD42",
          textShadow: "0px 3.77px 7.54px rgba(238, 173, 38, 0.5)",
        }}
      >
        {text}
      </span>

      {/* SCRATCH TEXTURE */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 block text-transparent"
        style={{
          width,
          height,
          backgroundImage: `url(${src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          mixBlendMode: "multiply",
          opacity: scratchOpacity,
        }}
      >
        {text}
      </span>
    </TagName>
  );
}
