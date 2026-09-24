import { useEffect, useRef } from "react";

import bgVideo from "@/assets/bg-scrub.mp4.asset.json";

export function ScrollVideoBg() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let target = 0;
    let current = 0;
    let raf = 0;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = max > 0 ? window.scrollY / max : 0;
    };

    const tick = () => {
      current += (target - current) * 0.12;
      if (video.duration && Math.abs(video.currentTime - current * video.duration) > 0.01) {
        video.currentTime = current * (video.duration - 0.05);
      }
      raf = requestAnimationFrame(tick);
    };

    video.pause();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <video
        ref={ref}
        src={bgVideo.url}
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
}
