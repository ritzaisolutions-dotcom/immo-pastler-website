"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK_IMAGE = "/hero_vid_fallbackpic.jpg";

export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const showFallback = () => setUseFallback(true);

    video.addEventListener("error", showFallback);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(showFallback);
    }

    return () => {
      video.removeEventListener("error", showFallback);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className={cn(
          "hero-video absolute inset-0 h-full w-full object-cover",
          useFallback && "hidden",
        )}
        autoPlay
        muted
        loop
        playsInline
        poster={FALLBACK_IMAGE}
        aria-hidden
      >
        <source src="/Hero_Vid.mp4" type="video/mp4" />
      </video>

      <div
        className={cn(
          "absolute inset-0 bg-cover bg-center",
          !useFallback && "hidden",
        )}
        style={{ backgroundImage: `url(${FALLBACK_IMAGE})` }}
        aria-hidden
      />
    </>
  );
}
