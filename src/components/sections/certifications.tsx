import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/data";
import Link from 'next/link';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-muted/50 dark:bg-card">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Certifications</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Validations of my skills from recognized institutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col text-left transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader className="items-start">
                 <div className="p-3 bg-muted rounded-full mb-2">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter>
                 <Button asChild className="w-full">
                    <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                      View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
