"use client";

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Menu, Code, Download, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

const desktopNavLinkNames = new Set(['Services', 'Projects', 'Experience', 'About', 'Contact']);
const desktopNavLinks = navLinks.filter((link) => desktopNavLinkNames.has(link.name));
const bookCallUrl = 'https://meet.brevo.com/aman-seth';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navLinks.map(link => link.href.substring(1)), []);
  const activeSection = useActiveSection(sectionIds);

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerOffset = 56; // Height of the sticky header
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-14 max-w-screen-2xl items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center space-x-2">
          <Code className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-bold lg:hidden">Aman</span>
          <span className="hidden font-bold lg:inline">Aman Kumar Seth</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex xl:gap-6">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-foreground/80",
                activeSection === link.href.substring(1)
                  ? "text-primary font-semibold"
                  : "text-foreground/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href="https://drive.google.com/file/d/1qiu4iB9ILnaCe3Qj6alL65nYMf0xMxbH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" aria-hidden="true" /> Resume
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
              <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
              Book a Call
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Button asChild size="sm">
            <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu aria-hidden="true" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <Code className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="font-bold">Aman Kumar Seth</span>
                  </Link>
                  <ThemeToggle />
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-foreground/80",
                        activeSection === link.href.substring(1)
                          ? "text-primary font-semibold"
                          : "text-foreground/60"
                      )}
                      onClick={(e) => handleMobileLinkClick(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button asChild variant="outline" className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1qiu4iB9ILnaCe3Qj6alL65nYMf0xMxbH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
