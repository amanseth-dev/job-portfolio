import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
