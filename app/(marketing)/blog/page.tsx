import { ContentContainer } from '@/layouts/ContentContainer';
import { CustomLink as Link } from '@/components/Link';
import { BLOG_POSTS, UPCOMING_POST } from './blog-data';
import { BlogCard } from '@/components/BlogCard';

const BlogPage = () => (
  <ContentContainer centered mode="light">
    <div className="flex flex-col items-center text-center gap-8 w-full max-w-4xl">
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
