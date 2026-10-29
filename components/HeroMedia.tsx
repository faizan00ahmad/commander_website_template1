"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

// Plays /hero.mp4 (cinematic loop of the group's imagery). The poster shows instantly; replace the file to change the footage.
export default function HeroMedia() {
  const [ok, setOk] = useState(true);
  const v = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.current?.pause();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <img src="/img/banner-1-1.jpg" alt="" className="absolute inset-0 h-full w-full animate-kenburns object-cover" />
      {ok && (
        <video
          ref={v}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay muted loop playsInline preload="auto"
          poster="/img/banner-1-1.jpg"
          onError={() => setOk(false)}
        >
          <source src="/hero.mp4" type="video/mp4" onError={() => setOk(false)} />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b111c] via-[#0b111c]/70 to-[#0b111c]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b111c]/50 via-transparent to-transparent" />
    </div>
  );
}
