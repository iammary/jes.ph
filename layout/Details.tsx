'use client';

import Link from 'next/link';

export const Details = () => {
  return (
    <>
      <nav className="fixed top-(--spacing-base) right-(--spacing-base) left-(--spacing-base) flex items-center justify-end gap-(--spacing-sm)">
        <Link href="/about" className="font-normal no-underline">
          About
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/iammary/" className="font-normal no-underline">
          Linkedin
        </Link>
        <Link target="_blank" href="https://github.com/iammary" className="no-underline">
          Github
        </Link>
        <Link href="/blog" className="no-underline">
          Blog
        </Link>
      </nav>
      <div className="fixed bottom-(--spacing-base) right-(--spacing-base) left-(--spacing-base) flex flex-wrap items-center justify-between gap-(--spacing-msm)">
        <span>Illustrations × Adobe Firefly AI</span>
        <div className="flex items-center gap-(--spacing-sm)">
          <a href="hhttps://github.com/iammary/jes.ph" className="no-underline">
            {'<Source />'}
          </a>
        </div>
      </div>
      <Link
        href="/"
        className="absolute top-(--spacing-base) left-(--spacing-base) text-5xl font-bold uppercase leading-none text-white max-[700px]:text-2xl no-underline">
        jes.ph
      </Link>
    </>
  );
};
