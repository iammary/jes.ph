import type { Metadata } from 'next';
import { ContentContainer } from '@/layouts/ContentContainer';

export const metadata: Metadata = {
  title: 'About | Jes Anub',
  description: 'AI-first engineer building practical products, systems, and workflows from Melbourne.',
  openGraph: {
    images: [
      {
        url: '/jes-code.png',
        width: 1200,
        height: 630,
        alt: 'About | Jes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/jes-code.png'],
  },
};

const About = () => (
  <ContentContainer mode="light">
    <h1>About Me</h1>
    <div className="flex flex-col gap-4">
      <p>I’m Jes — a software engineer in Melbourne, turning ideas into web apps for 15+ years.</p>
      <p>
        I’ve worked in the Philippines, Singapore, and Australia, collaborating with teams to build products in EdTech, FinTech (like cryptocurrency and
        stockbroking), and geospatial technologies. Over time, my work has shifted from frontend leadership into AI-first engineering, where I use AI heavily
        and intentionally to design, build, and ship products faster.
      </p>
      <p>
        I care about applying AI in ways that are practical, efficient, and grounded in real engineering discipline. That means building solid systems,
        improving developer workflows, and using AI to reduce friction across prototyping, implementation, and iteration.
      </p>
      <p>
        My frontend background still shapes how I work. I care deeply about clear interfaces, scalable architecture, and developer experience, and I bring that
        same systems thinking into AI-assisted product development.
      </p>
      <p>
        Alongside the technical work, I’ve spent much of my career mentoring and supporting other engineers. I value strong engineering practices, clear
        communication, and helping teams adopt AI in ways that make them more effective, not more chaotic.
      </p>
      <p>At the core of my approach is a simple idea:</p>
      <blockquote>
        <p>
          Great software not only enhances the user experience, <br /> but also empowers the teams who build it.
        </p>
      </blockquote>
      <p>Whether I’m working on AI workflows, product architecture, performance, or developer tooling, my goal is the same: build systems that age well.</p>
    </div>
  </ContentContainer>
);

export default About;
