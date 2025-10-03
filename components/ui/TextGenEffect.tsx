"use client";

import { useEffect, useRef, memo, useCallback } from "react";
import { useInView } from "react-intersection-observer";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = memo(({
  words,
  className = "",
  filter = false,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animateText = useCallback(() => {
    if (!textRef.current || !inView) return;

    const spans = textRef.current.querySelectorAll('span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.style.opacity = '1';
        if (filter) {
          span.style.filter = 'blur(0px)';
        }
      }, index * (duration * 200));
    });
  }, [inView, duration, filter]);

  useEffect(() => {
    animateText();
  }, [animateText]);

  const wordsArray = words.split(" ");

  return (
    <div ref={ref}>
      <div
        ref={textRef}
        className={`font-bold ${className}`}
      >
        {wordsArray.map((word, idx) => (
          <span
            key={word + idx}
            className="opacity-0 transition-all duration-300"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    </div>
  );
});

TextGenerateEffect.displayName = 'TextGenerateEffect';
