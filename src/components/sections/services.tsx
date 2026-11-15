"use client";

import { ArrowRight, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/data';

const availableServices = [
  'API security and JWT auth',
  'Redis caching',
  'Dockerizing your app',
  'Bug fixes and code review of existing Spring Boot projects',
];

export default function Services() {
  return (
    <motion.section
      id="services"
      className="py-24 sm:py-32 bg-muted/50 dark:bg-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I can build for you
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            I&apos;m a Spring Boot backend developer taking on part-time projects. Here&apos;s where I can help most.
          </p>
        </div>

        <div className="mt-8 rounded-lg border bg-background/80 px-5 py-4 text-center">
          <span className="font-semibold">Also available: </span>
          <span className="text-muted-foreground">
            {availableServices.join(' · ')}
          </span>
        </div>

        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.slug} className="flex h-full flex-col">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <p className="text-sm font-medium text-foreground">{service.promise}</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-5">
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((technology) => (
                      <Badge key={technology} variant="secondary">{technology}</Badge>
                    ))}
                  </div>
                  <p className="border-t pt-4 text-sm text-muted-foreground">
                    {service.proof}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full">
                    <a href={service.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Discuss this <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 rounded-lg border bg-background/80 p-6">
          <div className="grid gap-5 text-center sm:grid-cols-3 sm:text-left">
            <div>
              <h3 className="font-semibold">Availability</h3>
              <p className="mt-1 text-sm text-muted-foreground">Part-time and remote · 10–15 hrs/week</p>
            </div>
            <div>
              <h3 className="font-semibold">Pricing</h3>
              <p className="mt-1 text-sm text-muted-foreground">Hourly</p>
            </div>
            <div>
              <h3 className="font-semibold">Response time</h3>
              <p className="mt-1 text-sm text-muted-foreground">Reply within 24 hours</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="outline">
              <a href="https://meet.brevo.com/aman-seth" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="mr-2 h-4 w-4" aria-hidden="true" />
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
