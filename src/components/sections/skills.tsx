"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/data';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 overflow-hidden">
      <div className="container">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Tech Stack</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Technologies and tools I'm proficient in.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="text-center transition-all duration-300 hover:shadow-lg hover:border-primary/50 group h-full cursor-pointer">
                  <CardHeader className="items-center p-4">
                    <div className="p-3 bg-muted rounded-full transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_hsl(var(--primary)/20%)]">
                      <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardTitle className="text-sm font-medium">{skill.name}</CardTitle>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
