import type { Metadata } from 'next';
import { ContentContainer } from '@/layout/ContentContainer';

export const metadata: Metadata = {
  title: 'About | Jes',
  description: 'Frontend-focused software engineer based in Melbourne.',
};

const About = () => (
  <ContentContainer mode="light">
    <h1>About Me</h1>
    <div className="flex flex-col gap-4">
      <p>I’m Jes — a software engineer in Melbourne, turning ideas into web apps for 15+ years.</p>
      <p>
        I’ve worked in the Philippines, Singapore, and Australia, collaborating with teams to build products in EdTech, FinTech (like cryptocurrency and
        stockbroking), and geospatial technologies. As my career has evolved, I’ve found myself increasingly interested in frontend architecture. I enjoy
        creating systems that are scalable, easy to maintain, and support teams as products grow.
      </p>
      <p>
        I care deeply about the foundations: design systems, shared UI platforms, micro-frontend patterns, and and the JavaScript that ties everything together.
        I enjoy working at the intersection of engineering and design, shaping frontend systems that are intuitive for users and pleasant for developers to work
        with.
      </p>
      <p>
        Alongside the technical work, I’ve spent much of my career mentoring and supporting other engineers. I value strong engineering practices, clear
        communication, and creating environments where teams can do their best work.
      </p>
      <p>At the core of my approach is a simple idea:</p>
      <blockquote>
        <p>
          Great software not only enhances the user experience, <br /> but also empowers the teams who build it.
        </p>
      </blockquote>
      <p>Whether I’m thinking about architecture, performance, testing, or developer workflows, my goal is always the same — to build systems that age well.</p>
    </div>
  </ContentContainer>
);

export default About;
