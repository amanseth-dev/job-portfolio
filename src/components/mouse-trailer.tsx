"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const LERP_FACTOR = 0.1;

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const mousePos = { x: -100, y: -100 };
    const trailerPos = { x: -100, y: -100 };
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;

      const target = e.target as HTMLElement;
      // Check if the cursor is over an interactive element
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select') !== null;
      setIsHoveringInteractive(isInteractive);
    };

    const lerp = (start: number, end: number, t: number) => {
      return start * (1 - t) + end * t;
    };

    const update = () => {
      trailerPos.x = lerp(trailerPos.x, mousePos.x, LERP_FACTOR);
      trailerPos.y = lerp(trailerPos.y, mousePos.y, LERP_FACTOR);

      if (trailerRef.current) {
        // Use translate3d for hardware acceleration
        trailerRef.current.style.transform = `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={trailerRef}
      className={cn(
        'hidden md:block fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        'pointer-events-none z-[9999] bg-primary/20 rounded-full',
        'transition-[width,height,box-shadow] duration-300 ease-in-out backdrop-blur-sm',
        'shadow-[0_0_20px_hsl(var(--primary)/0.5)]',
        isHoveringInteractive
          ? 'w-12 h-12 bg-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.7)]'
          : 'w-6 h-6'
      )}
    />
  );
}
