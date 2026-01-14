import { ContentContainer } from '@/layout/ContentContainer';
import { CustomLink as Link } from '@/components/Link';
import Image from 'next/image';

const NotFound = () => (
  <ContentContainer centered mode="light">
    <div className="flex flex-col items-center text-center gap-8">
      <h1>404 - Page Not Found</h1>
      <Image src="/jes-sad.png" alt="404" width={200} height={200} priority />
      <p>The page you are looking for doesn&#39;t exist or has been moved.</p>
      <Link href="/" asButton>
        Go Home
      </Link>
    </div>
  </ContentContainer>
);

export default NotFound;
