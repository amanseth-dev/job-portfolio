"use client"

import React, { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { projects } from '@/lib/data';
import Link from 'next/link';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type Project = (typeof projects)[0];

const ProjectCollection = ({ projects: projectList }: { projects: Project[] }) => {
  const featuredProjects = projectList.filter((project) => project.featured);
  const moreProjects = projectList.filter((project) => !project.featured);

  return (
    <div className="mt-8">
      {featuredProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
      {moreProjects.length > 0 && (
        <Collapsible className={featuredProjects.length > 0 ? 'mt-8' : undefined}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="group w-full justify-between"
              aria-label={`More projects (${moreProjects.length})`}
            >
              <span>More projects <span className="text-muted-foreground">({moreProjects.length})</span></span>
              <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" aria-hidden="true" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Dialog>
    <Card className="flex flex-col text-left transition-transform transform hover:-translate-y-1 hover:shadow-xl h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogTrigger asChild>
          <Button variant="outline">View Details / Demo</Button>
        </DialogTrigger>
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <Button asChild variant="outline" size="icon">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {project.githubUrl && project.category !== 'Professional' && (
            <Button asChild variant="ghost" size="icon">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
    <DialogContent className="sm:max-w-[625px] my-8">
      <ScrollArea className="max-h-[80vh] p-6">
        <DialogHeader className="text-left">
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 my-4">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        {project.videoUrl && (
          <div className="my-4">
            <h3 className="font-semibold mb-2">Project Demo</h3>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={project.videoUrl}
                title={`Project Demo for ${project.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        <div className="grid gap-4 py-4 text-left">
          <div>
            <h3 className="font-semibold mb-2">Summary</h3>
            <p className="text-muted-foreground">{project.details.summary}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Role</h3>
            <p className="text-muted-foreground">{project.details.role}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {project.details.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          {project.details.note && (
            <div>
              <h3 className="font-semibold mb-2">Note</h3>
              <p className="text-muted-foreground">{project.details.note}</p>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-end gap-2">
            {project.liveUrl && (
                <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}
            {project.githubUrl && project.category !== 'Professional' && (
                <Button asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    View on GitHub <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}
        </div>
      </ScrollArea>
    </DialogContent>
  </Dialog>
);

export default function Projects() {
  const professionalProjects = useMemo(() => projects.filter(p => p.category === 'Professional'), []);
  const personalProjects = useMemo(() => projects.filter(p => p.category === 'Personal'), []);

  return (
    <motion.section 
      id="projects" 
      className="py-24 sm:py-32 bg-muted/50 dark:bg-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">My Work</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            A selection of projects that demonstrate my skills in backend development.
          </p>
        </div>
        
        <Tabs defaultValue="professional" className="mt-12">
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="professional">Professional</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
          </TabsList>
          <TabsContent value="professional">
            <ProjectCollection projects={professionalProjects} />
          </TabsContent>
          <TabsContent value="personal">
            <ProjectCollection projects={personalProjects} />
          </TabsContent>
        </Tabs>

      </div>
    </motion.section>
  );
}
