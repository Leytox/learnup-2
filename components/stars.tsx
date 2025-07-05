"use client";
import React, { useRef, useEffect, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

export default function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starCount = 200;
  const starsRef = useRef<Star[]>([]);

  const initStars = useCallback(
    (canvasWidth: number, canvasHeight: number) => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
        });
      }
    },
    [starCount],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number | null = null;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      for (const star of starsRef.current) {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [initStars]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
