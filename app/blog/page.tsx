import { ContentContainer } from '@/layout/ContentContainer';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogComingSoon() {
  return (
    <ContentContainer centered mode="light">
      <div className="flex flex-col items-center text-center gap-8">
        <h1>Coming Soon</h1>
        <Image src="/jes-code.png" alt="Jes Code" width={200} height={200} priority />
        <p>I&#39;m currently working on some interesting content. Stay tuned!</p>
        <Link href="/" className="px-6 py-2 rounded-full bg-gray-200 text-black hover:bg-white transition-colors">
          Go Home
        </Link>
      </div>
    </ContentContainer>
  );
}
