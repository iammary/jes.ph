import { ContentContainer } from '@/layout/ContentContainer';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <ContentContainer centered>
      <div className="flex flex-col items-center text-center gap-8">
        <h1>404 - Page Not Found</h1>
        <Image src="/jes-code.png" alt="Jes Code" width={200} height={200} priority />
        <p>The page you are looking for doesn&#39;t exist or has been moved.</p>
        <Link href="/" className="px-6 py-2 rounded-full bg-gray-800 hover:bg-black transition-colors">
          Go Home
        </Link>
      </div>
    </ContentContainer>
  );
}
