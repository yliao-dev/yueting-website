import { useEffect, useRef } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export const useScrollIndex = (
  onVisible: (index: number) => void,
  options: Options = {}
) => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const seen = useRef(new Set<number>());

  const { threshold = 0.5, rootMargin = "0px", once = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr === null) continue;

          const index = Number(indexAttr);
          if (isNaN(index)) continue;

          if (entry.isIntersecting) {
            if (once) {
              if (!seen.current.has(index)) {
                seen.current.add(index);
                onVisible(index);
              }
            } else {
              onVisible(index);
            }
          }
        }
      },
      { threshold, rootMargin }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, onVisible]);

  return refs;
};
