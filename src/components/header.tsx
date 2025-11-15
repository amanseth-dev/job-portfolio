"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Aman Kumar Seth
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <Button asChild variant="outline">
            <a href="https://drive.google.com/file/d/1Ff_pf0OsQRNxs8Bx4bUHJwyhuizP-5pZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-end md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8 flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <Code className="h-6 w-6 text-primary" />
                  <span className="font-bold">Aman Kumar Seth</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button asChild variant="outline" className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1Ff_pf0OsQRNxs8Bx4bUHJwyhuizP-5pZ/view?usp=sharing"
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
