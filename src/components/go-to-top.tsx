"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight * 0.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        if (footerRect.top < window.innerHeight) {
          setIsFooterVisible(true);
        } else {
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        "fixed right-8 z-50 transition-all duration-300",
        isFooterVisible ? "bottom-32" : "bottom-8"
      )}
    >
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'rounded-full transition-opacity duration-300 bg-background/80 backdrop-blur-[2px] hover:bg-background/90',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        variant="outline"
        aria-label="Go to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
