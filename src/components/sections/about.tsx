import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/50 dark:bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="bg-background p-4 rounded-lg shadow-xl border">
              <Image
                src="https://amankrseth.netlify.app/profile_img.png"
                alt="Aman Kumar Seth"
                width={400}
                height={400}
                className="rounded-lg aspect-square object-cover"
                data-ai-hint="portrait man"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I am a passionate backend developer with a foundation in Computer Science and hands-on experience from a dynamic tech startup. My journey in tech is driven by a desire to solve complex problems and build things that work seamlessly behind the scenes.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              My development philosophy is centered around writing clean, maintainable code and following an API-first approach. I believe in building systems that are not only powerful but also easy to understand and extend.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              As I transition into freelancing, I am excited to collaborate with clients to bring their ideas to life, contributing my backend expertise to create impactful digital products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
