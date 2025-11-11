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
import { Github, ExternalLink } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Project = (typeof projects)[0];

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
          <Button variant="outline">View Details</Button>
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
        <div className="grid gap-4 py-4 text-left">
          <div>
            <h3 className="font-semibold mb-2">Problem</h3>
            <p className="text-muted-foreground">{project.details.problem}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">My Role & Contribution</h3>
            <p className="text-muted-foreground">{project.details.role}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Outcomes & Results</h3>
            <p className="text-muted-foreground">{project.details.outcomes}</p>
          </div>
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
    <section id="projects" className="py-24 sm:py-32 bg-muted/50 dark:bg-card">
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
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {professionalProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="personal">
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {personalProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}
