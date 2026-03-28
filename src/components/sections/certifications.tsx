import {
  Card,
  CardContent,
} from "@/components/ui/card";
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
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="transition-shadow hover:shadow-xl">
            <CardContent className="p-6">
              <ul className="space-y-6">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 p-4 rounded-lg hover:bg-background">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    {cert.url && (
                       <Link 
                         href={cert.url} 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline ml-10 sm:ml-0 shrink-0"
                       >
                          View Certificate <ExternalLink className="h-4 w-4" />
                       </Link>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}