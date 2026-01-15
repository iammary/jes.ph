import { CustomLink as Link } from '@/components/Link';
import Image from 'next/image';
import type { BlogPost, UpcomingPost } from '@/app/(marketing)/blog/blog-data';

type BlogCardProps = { post: BlogPost; isUpcoming?: false } | { post: UpcomingPost; isUpcoming: true };

export const BlogCard = (props: BlogCardProps) => {
  const { post, isUpcoming } = props;

  const content = (
    <>
      <div className={`relative w-full aspect-video mb-4 overflow-hidden rounded-xl ${isUpcoming ? 'bg-gray-200 flex items-center justify-center p-4' : ''}`}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className={isUpcoming ? 'object-contain' : 'object-cover group-hover:scale-105 transition-transform duration-300'}
        />
      </div>
      <h2 className={`text-xl font-bold mb-2 ${isUpcoming ? 'text-gray-700' : 'text-black'}`}>{post.title}</h2>
      <p className="text-gray-600 text-sm font-normal">{post.description}</p>
      {!isUpcoming && <span className="mt-4 font-medium text-red-600">Read Post →</span>}
    </>
  );

  if (isUpcoming) {
    return <div className="flex flex-col items-center p-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50 opacity-80">{content}</div>;
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-red-600 transition-colors bg-white group">
      {content}
    </Link>
  );
};
