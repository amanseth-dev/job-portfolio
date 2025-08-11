import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Education</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            My academic background and qualifications.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="absolute left-0 md:left-1/2 -ml-[1px] h-full w-0.5 bg-border"></div>
          {education.map((edu, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 mt-1.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary ring-8 ring-background">
                    <GraduationCap className="h-4 w-4 text-primary-foreground" />
                  </span>
              </div>
              <div className={`w-full flex md:justify-start ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                <div className="w-full md:w-1/2 px-4 pl-10 md:px-4">
                  <Card className={`text-left`}>
                    <CardHeader>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>
                        {edu.institution} | {edu.duration}
                      </CardDescription>
                    </CardHeader>
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
