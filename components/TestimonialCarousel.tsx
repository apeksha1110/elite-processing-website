"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";

const pages = testimonials.length;

export default function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Auto-advance every 5 s. Pauses on hover; resets timer on manual nav.
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pages);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, resetKey]);

  const go = (dir: number) => {
    setPage((p) => (p + dir + pages) % pages);
    setResetKey((k) => k + 1);
  };

  return (
    <div
      className="mx-auto mt-12 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {testimonials.map((t) => (
            <figure key={t.name} className="w-full shrink-0 px-2">
              <div className="flex flex-col rounded-2xl border border-rose-tint bg-rose-tint/40 p-8">
                <Quote className="text-rose-soft" size={30} />
                <blockquote className="mt-4 text-base leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface font-display text-base font-bold text-rose-deep">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-ink-soft">{t.role}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-rose-tint text-rose-primary transition hover:bg-rose-primary hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setPage(i); setResetKey((k) => k + 1); }}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === page ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                i === page
                  ? "w-5 bg-rose-primary"
                  : "w-2 bg-rose-soft/50 hover:bg-rose-soft"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-rose-tint text-rose-primary transition hover:bg-rose-primary hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
