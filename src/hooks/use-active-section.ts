"use client";

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerOffset = 150; // Offset for the sticky header

      // Default to the first section if at the top
      let newActiveSection = sectionIds[0] || '';

      // Find the last section that is above the scroll position
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop - headerOffset <= scrollPosition) {
          newActiveSection = id;
        }
      }
      
      // Handle the case where the user is at the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        newActiveSection = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
