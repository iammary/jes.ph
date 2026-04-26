import type { Metadata } from 'next';
import { ContentContainer } from '@/layouts/ContentContainer';

export const metadata: Metadata = {
  title: 'About | Jes Anub',
  description: 'Senior product engineer in Melbourne building product software, stabilising platforms, and using AI-supported engineering workflows.',
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
      <p>I&#39;m Jes, a senior product engineer based in Melbourne. I&#39;ve been building software for more than 15 years.</p>
      <p>
        I&#39;ve worked in the Philippines, Singapore, and Australia, across EdTech, FinTech, stockbroking, cryptocurrency, and geospatial products. Most of my
        work sits somewhere between product delivery and platform work. I like building the feature, but I also like making the system easier for the next
        person to change.
      </p>
      <p>
        These days I stay close to customers and to the signals coming from production. I like finding the product decisions that make the experience smoother,
        the platform stronger, and the next release easier to trust. Sometimes that means improving reliability. Sometimes it means shaping a feature. Sometimes
        it means writing a clear enough plan that engineers and agents can implement it with confidence.
      </p>
      <p>
        I use AI to make good engineering work faster and more thorough. Multi-agent workflows help with investigation, planning, code changes, review, tests,
        and documentation, while I keep the work anchored in product fit, architecture, edge cases, monitoring signals, and release confidence.
      </p>
      <p>
        My frontend background is central to how I build products, and it shows up most in my technical design work. I care about shaping the customer
        experience, drawing clear system boundaries, and turning product ideas into plans that engineers and agents can build from. Good UX and good DX both
        come from clear decisions, steady standards, and enough care in the details.
      </p>
      <p>
        I like teams that stay close to customers, make decisions clear, and raise the quality bar in practical ways. The best engineering work I have done has
        often been quiet but important. Clearer interfaces. Fewer repeated review comments. Faster tests. Better observability. Releases people can trust.
      </p>
      <blockquote>
        <p>Build the product people need, and the system the team can keep carrying.</p>
      </blockquote>
      <p>
        That is the thread through my work. I build products, strengthen platforms, improve how teams see and ship changes, and help engineers use AI with
        clearer standards and more confidence.
      </p>
    </div>
  </ContentContainer>
);

export default About;
