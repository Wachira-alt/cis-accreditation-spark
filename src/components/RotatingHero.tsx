import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Shared rotating hero used by the overview page, section landings and
 * subsection pages. Handles:
 *  - cross-fade rotation with skeleton while images load
 *  - pause when the tab is hidden (visibilitychange)
 *  - respect for prefers-reduced-motion (no auto-rotation)
 *  - accessible, comfortably sized dot controls
 */
export function RotatingHero({
  images,
  aspect = "aspect-[21/9]",
  children,
}: {
  images: string[];
  aspect?: string;
  children: ReactNode;
}) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotion.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function goTo(i: number) {
    if (i === current || fading) return;
    setPrev(current);
    setFading(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCurrent(i);
        setFading(true);
        setTimeout(() => {
          setPrev(null);
          setFading(false);
        }, 1000);
      });
    });
  }

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      if (document.hidden || reducedMotion.current) return;
      goTo((current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, fading, images.length]);

  return (
    <div className={`relative w-full ${aspect} overflow-hidden bg-neutral-300 print:hidden`}>
      {!loadedImages.has(current) && (
        <div className="absolute inset-0 bg-neutral-300 animate-pulse" style={{ zIndex: 0 }} />
      )}

      <img
        src={images[current]}
        alt=""
        decoding="async"
        onLoad={() => setLoadedImages((s) => new Set(s).add(current))}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          zIndex: 0,
          opacity: loadedImages.has(current) ? 1 : 0,
          transition: "opacity 400ms ease",
        }}
      />

      {prev !== null && (
        <img
          src={images[prev]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
          style={{ opacity: fading ? 0 : 1, zIndex: 1 }}
        />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"
        style={{ zIndex: 2 }}
      />

      <div className="absolute inset-0" style={{ zIndex: 3 }}>
        {children}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-2 right-4 flex" style={{ zIndex: 4 }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="p-2.5 group/dot"
              aria-label={`Show image ${i + 1} of ${images.length}`}
              aria-current={i === current}
            >
              <span
                className="block w-2 h-2 rounded-full transition-all duration-300 group-hover/dot:bg-white"
                style={{
                  backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)",
                  transform: i === current ? "scale(1.25)" : "scale(1)",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
