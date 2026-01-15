import type { Metadata } from 'next';
import { ContentContainer } from '@/layouts/ContentContainer';
import { CustomLink as Link } from '@/components/Link';
import { BLOG_POSTS, UPCOMING_POST } from './blog-data';
import { BlogCard } from '@/components/BlogCard';

export const metadata: Metadata = {
  title: 'Blog | Jes Anub',
  description: 'Thoughts on software engineering, frontend architecture, and building scalable systems with the use of AI.',
  openGraph: {
    images: [
      {
        url: '/jes-code.png',
        width: 1200,
        height: 630,
        alt: 'Blog | Jes Anub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/jes-code.png'],
  },
};

const BlogPage = () => (
  <ContentContainer centered full mode="light">
    <div className="flex flex-col items-center text-center gap-8 w-full">
      <h1 className="text-4xl font-bold">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
        {BLOG_POSTS.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}

        <BlogCard post={UPCOMING_POST} isUpcoming />
      </div>

      <Link href="/" asButton className="mt-8">
        Go Home
      </Link>
    </div>
  </ContentContainer>
);

export default BlogPage;
