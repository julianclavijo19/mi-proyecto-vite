import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};
