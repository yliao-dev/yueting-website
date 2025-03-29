import { useEffect, useRef } from "react";

export const useScrollIndex = (
  setIndex: (index: number) => void,
  options: { threshold?: number; rootMargin?: string } = {}
) => {
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const { threshold = 0.5, rootMargin = "0px" } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setIndex(index);
          }
        });
      },
      { threshold, rootMargin }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return stepRefs;
};
