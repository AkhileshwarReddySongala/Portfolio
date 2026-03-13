'use client';

import About from '@/common/components/sections/about';
import Badges from '@/common/components/sections/badges';
import Certifications from '@/common/components/sections/certifications';
import Contact from '@/common/components/sections/contact';
import Experience from '@/common/components/sections/experience';
import Hero from '@/common/components/sections/hero';
import Projects from '@/common/components/sections/projects';
import Skills from '@/common/components/sections/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Badges />
      <Certifications />
      <Contact />
    </main>
  );
}
