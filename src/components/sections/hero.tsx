"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/particle-background';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <motion.section 
      id="home" 
      className="container relative py-12 md:py-24 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ParticleBackground />
      <div className="max-w-3xl mx-auto text-center">
        <div className="md:hidden">
          <h1 className="text-3xl font-bold tracking-tight text-foreground font-headline">
            Hi, I&apos;m Aman. I build Spring Boot backends for startups.
          </h1>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <Button asChild size="lg" className="w-full max-w-xs">
              <a href="https://meet.brevo.com/aman-seth" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full max-w-xs">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>

        <div className="hidden md:block">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
            Aman Kumar Seth
          </h1>
          <div className="mt-4 text-lg text-primary font-medium h-7 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                'Java Backend Developer',
                1500,
                'API Architect',
                1500,
                'Problem Solver',
                1500,
                'Clean Code Advocate',
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I build robust, scalable, and efficient backend solutions. With 2+ years of experience, I specialize in high-performance APIs and Spring Boot microservices.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://meet.brevo.com/aman-seth" target="_blank" rel="noopener noreferrer">
                Book a Call <CalendarDays className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
