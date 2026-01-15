import { ContentContainer } from '@/layouts/ContentContainer';
import { CustomLink as Link } from '@/components/Link';
import { ReactNode } from 'react';

interface BlogPostTemplateProps {
  title: string;
  date: string;
  children: ReactNode;
}

export const Blog = ({ title, date, children }: BlogPostTemplateProps) => {
  return (
    <ContentContainer centered full mode="light">
      <article className="w-full py-12 px-4">
        <header className="mb-12 text-center">
          <Link href="/blog" className="text-sm font-medium mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 italic">{date}</p>
        </header>

        <div className="prose prose-lg max-w-none flex flex-col gap-8">{children}</div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog" asButton>
            Back to Blog List
          </Link>
        </footer>
      </article>
    </ContentContainer>
  );
};
