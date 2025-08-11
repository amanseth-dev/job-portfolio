import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { trainings } from "@/lib/data";
import { Building, BookOpenCheck } from "lucide-react";

export default function Training() {
  return (
    <section id="training" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Training</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            My professional training and skill development.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          {trainings.map((training, index) => (
             <Card key={index} className="transition-transform transform hover:-translate-y-1 hover:shadow-xl">
               <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-muted rounded-full">
                            <Building className="h-6 w-6 text-primary" />
                        </div>
                    </div>
                    <div>
                        <CardTitle>{training.organisation}</CardTitle>
                        <CardDescription className="mt-1">{training.area}</CardDescription>
                    </div>
                </div>
               </CardHeader>
             </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
