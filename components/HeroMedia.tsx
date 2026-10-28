"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

const slides = ["banner-1-1.jpg", "banner-1-2.jpg", "banner-1-3.jpg", "banner-1-4.jpg", "banner-1-5.jpg"];

// Drop a file at /public/hero.mp4 to replace the image slideshow with a looping video.
export default function HeroMedia() {
  const [i, setI] = useState(0);
  const [video, setVideo] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {slides.map((s, n) => (
        <img
          key={s}
          src={`/img/${s}`}
          alt=""
          className={`absolute inset-0 h-full w-full animate-kenburns object-cover transition-opacity duration-1000 ${n === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {video && (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline onError={() => setVideo(false)}>
          <source src="/hero.mp4" type="video/mp4" onError={() => setVideo(false)} />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b111c] via-[#0b111c]/85 to-[#0b111c]/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b111c] to-transparent" />
    </div>
  );
}
