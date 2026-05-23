"use client";

import { useEffect, useState } from "react";
import { TYPEWRITER_WORDS } from "@/lib/constants";

export function Typewriter() {
  const [text, setText] = useState<string>(TYPEWRITER_WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && charIndex === currentWord.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
          return;
        }

        const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setCharIndex(nextIndex);
        setText(currentWord.substring(0, nextIndex));
      },
      !isDeleting && charIndex === currentWord.length
        ? 2000
        : isDeleting && charIndex === 0
          ? 500
          : typeSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div
      className="flex min-h-10 flex-wrap items-center gap-x-1 md:min-h-12"
      aria-live="polite"
    >
      <span className="text-gradient font-display text-lg font-semibold sm:text-headline-lg">
        {text}
      </span>
      <span
        className="h-6 w-0.5 shrink-0 bg-primary cursor-blink sm:h-8 sm:w-1"
        aria-hidden
      />
    </div>
  );
}
