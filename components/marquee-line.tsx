"use client";
import { useRef, useLayoutEffect, useState, ReactNode } from "react";

export default function MarqueeLine({
  children,
  speed = 100,
  direction = "left",
  className = "",
  textClassName = "",
}: {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  textClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [textWidth, setTextWidth] = useState(0);

  useLayoutEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [children]);

  const duration = textWidth > 0 ? textWidth / speed : 1;
  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden whitespace-nowrap min-h-[1em] ${className}`}
    >
      <div
        ref={textRef}
        className={`invisible absolute left-0 top-0 inline-block ${textClassName}`}
        aria-hidden="true"
      >
        {children}
      </div>
      {textWidth > 0 && (
        <div
          className="inline-block will-change-transform"
          style={{
            animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite`,
          }}
        >
          <span className={textClassName}>{children}</span>
          <span className={textClassName}>{children}</span>
        </div>
      )}
    </div>
  );
}
