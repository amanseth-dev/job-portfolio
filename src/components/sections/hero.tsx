import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="container py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Aman Kr. Seth
        </h1>
        <p className="mt-4 text-lg text-primary">
          Java Spring Boot Backend Developer
        </p>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          I build robust, scalable, and efficient backend solutions. With a year of experience at a fast-paced tech startup, I specialize in creating high-performance APIs and services using Java and Spring Boot.
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
    </section>
  );
}
