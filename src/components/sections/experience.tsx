import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Work Experience</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            My professional journey and roles I've undertaken.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-1/2 -ml-[1px] h-full w-0.5 bg-border"></div>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute left-1/2 -translate-x-1/2 mt-1.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                    <Briefcase className="h-4 w-4 text-primary-foreground" />
                  </span>
              </div>
              <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className="w-1/2 px-4">
                  <Card className={`text-left ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                    <CardHeader>
                      <CardTitle>{experience.role}</CardTitle>
                      <CardDescription>
                        {experience.company} | {experience.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {experience.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
