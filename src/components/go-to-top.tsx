"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show button when scrolled down more than 10% of the viewport height
    if (window.scrollY > window.innerHeight * 0.1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="icon"
        onClick={scrollToTop}
        className={cn(
          'rounded-full transition-opacity duration-300 bg-background/60 backdrop-blur-sm hover:bg-background/80',
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
