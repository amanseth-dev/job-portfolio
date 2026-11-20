"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { certifications, education, trainings } from '@/lib/data';

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="py-24 sm:py-32 bg-muted/50 dark:bg-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="bg-background p-4 rounded-lg shadow-xl border relative group overflow-hidden">
               <div className="absolute inset-0 bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="https://www.dropbox.com/scl/fi/t4w2d132h2eoeer5kebwo/Profile_Pic.png?rlkey=hgxpn3573gnmoj6h2hao0gaml&st=f69i0tvj&raw=1"
                alt="Aman Kumar Seth"
                width={400}
                height={400}
                className="rounded-lg aspect-square object-cover relative z-10 transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="portrait man"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Story So Far</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I am a passionate backend developer with a foundation in Computer Science and hands-on experience from a dynamic tech startup. My journey in tech is driven by a desire to solve complex problems and build systems that work seamlessly behind the scenes.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              My development philosophy is centered around writing clean, maintainable code and following an API-first approach. I believe in building backend systems that are powerful, reliable, and easy to extend.
            </p>
            <details className="mt-6 rounded-lg border bg-background p-4">
              <summary className="cursor-pointer font-semibold text-foreground">
                Background
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  Education, training, and certificates
                </span>
              </summary>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div>
                  <h3 className="font-medium text-foreground">Education</h3>
                  <ul className="mt-1 space-y-1">
                    {education.map((item) => (
                      <li key={item.degree}>
                        {item.degree} — {item.institution} ({item.duration})
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Training</h3>
                  <ul className="mt-1 space-y-1">
                    {trainings.map((training) => (
                      <li key={training.organisation}>
                        {training.area} — {training.organisation}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Certificates</h3>
                  <ul className="mt-1 space-y-1">
                    {certifications.map((certification) => (
                      <li key={certification.title}>
                        {certification.url ? (
                          <a
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-foreground"
                          >
                            {certification.title} — {certification.issuer}
                          </a>
                        ) : (
                          `${certification.title} — ${certification.issuer}`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </motion.section>
  );
}