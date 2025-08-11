import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { achievements } from "@/lib/data";
import { Star, ExternalLink, Trophy } from "lucide-react";
import Link from 'next/link';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Achievements</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            My proudest accomplishments and recognitions.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {achievement.description.toLowerCase().includes('geek') ? (
                         <Trophy className="h-6 w-6 text-primary mt-1" />
                      ) : (
                         <Star className="h-6 w-6 text-primary mt-1" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                        <Link href={achievement.url} target="_blank" rel="noopener noreferrer" className="inline-block ml-2 text-primary hover:underline">
                           <ExternalLink className="inline-block h-4 w-4" />
                        </Link>
                      </p>
                    </div>
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
