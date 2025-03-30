import { useEffect, useRef } from "react";

export const useScrollIndex = (
  setIndex: (index: number) => void,
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) => {
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const { threshold = 0.5, rootMargin = "0px", once = true } = options;
  const seen = useRef<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            if (once) {
              if (!seen.current.has(index)) {
                seen.current.add(index);
                setIndex(index);
              }
            } else {
              setIndex(index);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return stepRefs;
};
