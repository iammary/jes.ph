'use client';

import Link from 'next/link';

export const Details = () => (
  <>
    <nav className="fixed top-(--spacing-base) right-(--spacing-base) left-(--spacing-base) flex items-center justify-end gap-(--spacing-sm)">
      <Link href="/about">About</Link>
      <Link target="_blank" href="https://www.linkedin.com/in/iammary/">
        Linkedin
      </Link>
      <Link target="_blank" href="https://github.com/iammary">
        Github
      </Link>
    </nav>
    <div className="fixed bottom-(--spacing-base) right-(--spacing-base) left-(--spacing-base) flex flex-wrap items-center justify-between gap-(--spacing-msm)">
      <span>Illustrations × Adobe Firefly AI</span>
      <div className="flex items-center gap-(--spacing-sm)">
        <Link href="https://github.com/iammary/jes.ph">{'<Source />'}</Link>
        <Link href="/blog">{'<Blog />'}</Link>
      </div>
    </div>
    <Link href="/" className="absolute top-(--spacing-base) left-(--spacing-base) text-5xl font-bold uppercase leading-none text-white max-[700px]:text-2xl">
      jes.ph
    </Link>
  </>
);
