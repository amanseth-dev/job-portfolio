"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/particle-background';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <motion.section 
      id="home" 
      className="container py-24 sm:py-32 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ParticleBackground />
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Aman Kumar Seth
        </h1>
        {/* <p className="mt-4 text-lg text-primary">
          Java Spring Boot Backend Developer
        </p> */}
        <div className="mt-4 text-lg text-primary font-medium h-7 flex items-center justify-center">
          <TypeAnimation
            sequence={[
              'Java Backend Developer',
              1500,
              'API Architect',
              1500,
              'Problem Solver',
              1500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </div>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I build robust, scalable, and efficient backend solutions. With ~1.5 years of experience, I specialize in creating high-performance APIs and microservices using Java and Spring Boot.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="#projects">
            <Button size="lg">
              View My Work
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline">
              Hire Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
