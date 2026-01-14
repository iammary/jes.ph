import { ContentContainer } from '@/layout/ContentContainer';
import { CustomLink as Link } from '@/components/Link';
import Image from 'next/image';

const BlogComingSoon = () => (
  <ContentContainer centered mode="light">
    <div className="flex flex-col items-center text-center gap-8">
      <h1>Coming Soon</h1>
      <Image src="/jes-wait.png" alt="Jes Code" width={200} height={200} priority />
      <p>I&#39;m currently working on some interesting content. Stay tuned!</p>
      <Link href="/" asButton>
        Go Home
      </Link>
    </div>
  </ContentContainer>
);

export default BlogComingSoon;
