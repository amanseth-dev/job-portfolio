import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Experience from '@/components/sections/experience';
import About from '@/components/sections/about';
import Achievements from '@/components/sections/achievements';
import Certifications from '@/components/sections/certifications';
import Training from '@/components/sections/training';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';
import GoToTop from '@/components/go-to-top';
import Education from '@/components/sections/education';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background px-[20px]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Education />
        <Skills />
        <Achievements />
        <Certifications />
        <Training />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  );
}
