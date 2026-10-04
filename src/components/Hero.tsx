"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { home } from "@/content/home";
import { FloorPhoto } from "@/components/FloorPhoto";

const SLIDE_MS = 6000;
const SWIPE_DISTANCE = 60;
const SWIPE_VELOCITY = 400;
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { titleLead, titleAccent, slides } = home.hero;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);

  const paused = userPaused ?? Boolean(reduceMotion);
  const playing = !paused && !hovered && !focused && !dragging;
  const slide = slides[index];

  const goTo = useCallback(
    (next: number) => {
      const target = (next + slides.length) % slides.length;
      setDirection(target > index || (index === slides.length - 1 && target === 0) ? 1 : -1);
      setIndex(target);
    },
    [index, slides.length],
  );

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="What KENIS does"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => {
        if ((e.target as HTMLElement).matches(":focus-visible")) setFocused(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goTo(index + 1);
        if (e.key === "ArrowLeft") goTo(index - 1);
      }}
    >
      <FloorPhoto photo="conveyors" position="70% center" priority />
      <div className="absolute inset-0 bg-ink/70 lg:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/85 to-ink/40 lg:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 lg:pt-28">
        <div className="order-last lg:order-first">
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foam sm:text-5xl md:text-6xl">
            {titleLead} <span className="text-signal">{titleAccent}</span>
          </h1>

          <div
            className="mt-8 min-h-[17rem] border-l-2 border-signal/60 pl-5 sm:min-h-[15rem] sm:pl-6"
            aria-live={playing ? "off" : "polite"}
            aria-atomic="true"
          >
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${slides.length}: ${slide.eyebrow}`}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -32 }}
                transition={{ duration: 0.45, ease }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                dragSnapToOrigin
                onDragStart={() => setDragging(true)}
                onDragEnd={(_, info) => {
                  setDragging(false);
                  if (info.offset.x < -SWIPE_DISTANCE || info.velocity.x < -SWIPE_VELOCITY) {
                    goTo(index + 1);
                  } else if (info.offset.x > SWIPE_DISTANCE || info.velocity.x > SWIPE_VELOCITY) {
                    goTo(index - 1);
                  }
                }}
                style={{ touchAction: "pan-y" }}
                className="cursor-grab select-none active:cursor-grabbing"
              >
                <p className="font-display text-xs font-semibold tracking-[0.22em] text-signal uppercase sm:text-sm">
                  <span className="font-mono text-steel-bright">{String(index + 1).padStart(2, "0")}</span>{" "}
                  {slide.eyebrow}
                </p>
                <h2 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-snug tracking-tight text-foam sm:text-3xl">
                  {slide.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{slide.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {slide.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-sm border border-steel/50 bg-ink/60 px-3 py-1.5 text-xs text-steel-bright backdrop-blur-sm sm:text-sm"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href={slide.cta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-signal px-6 text-sm font-semibold text-ink transition-colors hover:bg-signal-bright"
            >
              {slide.cta.label} →
            </Link>
            <Link
              href={site.contactCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-steel-bright/60 px-6 text-sm font-semibold text-foam transition-colors hover:border-signal hover:text-signal"
            >
              Talk to a KENIS Expert
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-steel-bright/60 bg-ink/60 text-lg text-foam backdrop-blur-sm transition-colors hover:border-signal hover:bg-signal hover:text-ink"
            >
              <span aria-hidden>←</span>
            </button>

            <div className="flex flex-1 gap-1.5" role="tablist" aria-label="Choose slide">
              {slides.map((s, i) => (
                <button
                  key={s.eyebrow}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1}: ${s.eyebrow}`}
                  onClick={() => goTo(i)}
                  className="group relative h-11 flex-1"
                >
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-steel/50 transition-colors group-hover:bg-steel-bright/60">
                    {i < index && <span className="absolute inset-0 bg-signal/60" />}
                    {i === index && (
                      <span
                        key={index}
                        className="absolute inset-0 origin-left bg-signal animate-slide-progress"
                        style={{
                          animationDuration: `${SLIDE_MS}ms`,
                          animationPlayState: playing ? "running" : "paused",
                          transform: paused ? "scaleX(1)" : undefined,
                          animationName: paused ? "none" : undefined,
                        }}
                        onAnimationEnd={() => goTo(index + 1)}
                      />
                    )}
                  </span>
                  <span
                    className={`absolute inset-x-0 top-full -mt-1 hidden text-left text-xs sm:block ${
                      i === index ? "text-foam" : "text-steel-bright"
                    }`}
                    aria-hidden
                  >
                    {s.eyebrow}
                  </span>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-steel-bright/60 bg-ink/60 text-lg text-foam backdrop-blur-sm transition-colors hover:border-signal hover:bg-signal hover:text-ink"
            >
              <span aria-hidden>→</span>
            </button>

            <button
              type="button"
              onClick={() => setUserPaused(!paused)}
              aria-label={paused ? "Start slideshow" : "Pause slideshow"}
              className="flex h-11 w-9 shrink-0 items-center justify-center rounded-sm text-steel-bright transition-colors hover:text-foam"
            >
              <span aria-hidden className="text-xs">
                {paused ? "▶" : "❚❚"}
              </span>
            </button>
          </div>
        </div>

        <div className="order-first flex flex-col items-center lg:order-last">
          <div className="relative aspect-square w-28 sm:w-40 lg:w-full lg:max-w-[23rem]">
            <div
              className="absolute -inset-3 rounded-full border border-dashed border-steel-bright/30 animate-spin-slow"
              aria-hidden
            />
            <div className="absolute -inset-8 rounded-full bg-signal/10 blur-3xl" aria-hidden />
            <Image
              src={site.logo.mark}
              alt={site.logo.alt}
              width={512}
              height={512}
              preload
              loading="eager"
              className="relative h-full w-full rounded-full shadow-[0_0_60px_-10px_rgba(80,160,255,0.45)] ring-1 ring-steel-bright/30"
            />
          </div>

          <div className="mt-8 hidden min-h-10 lg:block" aria-hidden>
            <AnimatePresence mode="wait" initial={false}>
              <motion.ol
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease }}
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {slide.flow.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    {i > 0 && <span className="text-signal">→</span>}
                    <span
                      className={`rounded-sm border px-2.5 py-1 text-xs ${
                        step === "KENIS"
                          ? "border-signal/60 bg-signal/15 text-signal"
                          : "border-steel/50 bg-ink/70 text-foam"
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </motion.ol>
            </AnimatePresence>
          </div>

          <p className="mt-6 hidden max-w-xs text-center text-sm italic text-mist lg:block">{site.vision}</p>
        </div>
      </div>
    </section>
  );
}
