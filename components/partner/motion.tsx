"use client";

import { useEffect, useRef, useState, type CSSProperties, type HTMLAttributes } from "react";

// Minimal stand-in for framer-motion's `motion.div`, covering only what the /partner page uses:
// a one-time fade/slide from `initial` to `animate` (on mount) or `whileInView` (on first scroll into view).
// Kept local so the landing page doesn't add a dependency to the main site.

type Target = { opacity?: number; x?: number; y?: number };

type MotionDivProps = HTMLAttributes<HTMLDivElement> & {
  initial?: Target;
  animate?: Target;
  whileInView?: Target;
  viewport?: { once?: boolean };
  transition?: { duration?: number; delay?: number; ease?: "easeOut" };
};

type Phase = "initial" | "animating" | "done";

const EASE_OUT = "cubic-bezier(0, 0, 0.58, 1)";

function toStyle({ opacity, x = 0, y = 0 }: Target): CSSProperties {
  return {
    opacity,
    transform: x || y ? `translate3d(${x}px, ${y}px, 0)` : "none",
  };
}

function MotionDiv({ initial, animate, whileInView, viewport, transition, style, ...rest }: MotionDivProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("initial");
  const duration = transition?.duration ?? 0.6;
  const delay = transition?.delay ?? 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    let frame = 0;
    const start = () => {
      // Wait two frames so the initial state is painted before transitioning away from it.
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => setPhase("animating"));
      });
    };

    if (animate) {
      start();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        start();
        observer.disconnect();
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [animate]);

  useEffect(() => {
    if (phase !== "animating") return;
    // Hand transform/transition back to the element's own classes (e.g. hover lift) once finished.
    const timer = window.setTimeout(() => setPhase("done"), (duration + delay) * 1000 + 50);
    return () => window.clearTimeout(timer);
  }, [phase, duration, delay]);

  const target = animate ?? whileInView ?? {};
  let motionStyle: CSSProperties = {};
  if (phase === "initial" && initial) {
    motionStyle = toStyle(initial);
  } else if (phase === "animating") {
    motionStyle = {
      ...toStyle(target),
      transition: `opacity ${duration}s ${EASE_OUT} ${delay}s, transform ${duration}s ${EASE_OUT} ${delay}s`,
    };
  }

  return <div ref={ref} style={{ ...style, ...motionStyle }} {...rest} />;
}

export const motion = { div: MotionDiv };
