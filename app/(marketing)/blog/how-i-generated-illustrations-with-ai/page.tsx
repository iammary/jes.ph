import { CustomLink as Link } from '@/components/Link';
import Image from 'next/image';
import { Blog } from '@/layouts/Blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How I Generated My Website Illustrations with Adobe Illustrator and Firefly AI | Jes Anub',
  openGraph: {
    images: [
      {
        url: '/fallback.jpg',
        width: 1200,
        height: 630,
        alt: 'How I Generated My Website Illustrations with Adobe Illustrator and Firefly AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/fallback.jpg'],
  },
};

export default function BlogPost() {
  return (
    <Blog title="How I Generated My Website Illustrations with Adobe Illustrator and Firefly AI" date="January 15, 2026">
      <section>
        <p>
          In this post, I’ll walk through how I created the illustrations for this site. By combining Adobe Illustrator and Photoshop with Adobe Firefly AI, I
          was able to craft custom visuals that help define the look and feel of the project.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">The Tools of the Trade</h2>
        <p>
          With an{' '}
          <Link href="https://www.adobe.com/au/creativecloud.html" target="_blank">
            Adobe Creative Cloud Pro
          </Link>{' '}
          account, I have access to Adobe Illustrator and Adobe Photoshop along with 4,000 AI credits. This setup allows for a lot of experimentation without
          worrying too much about hitting limits.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Backgrounds with Firefly Vector 4</h2>
        <p>
          For most of the atmospheric elements like <code>autumn.png</code>, <code>autumn-1.png</code>, and <code>bg.jpg</code>, I used{' '}
          <strong>Firefly Vector 4</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div className="flex flex-col items-center">
            <Image src="/autumn.png" alt="Autumn Illustration" width={300} height={200} className="rounded-lg shadow-md object-cover h-48 w-full" />
            <p className="text-sm text-gray-500 mt-2">autumn.png</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/autumn-1.png" alt="Autumn Variation" width={300} height={200} className="rounded-lg shadow-md object-cover h-48 w-full" />
            <p className="text-sm text-gray-500 mt-2">autumn-1.png</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/bg.jpg" alt="Background Illustration" width={300} height={200} className="rounded-lg shadow-md object-cover h-48 w-full" />
            <p className="text-sm text-gray-500 mt-2">bg.jpg</p>
          </div>
        </div>
        <p>
          One of the best parts? Using Firefly Vector 4 only costs <strong>1 credit for 3 variations</strong>. I noticed that Adobe Firefly works exceptionally
          well for background elements where you want a consistent style and clean vector output.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Detailed Illustrations with Ideogram</h2>
        <p>
          When I needed more intricate details, like for <code>jes.png</code>, I turned to premium partner models. Specifically, <code>jes.png</code> was
          generated using{' '}
          <Link href="https://ideogram.ai" target="_blank">
            Illustrator Ideogram 3
          </Link>
          .
        </p>
        <div className="flex flex-col items-center my-8">
          <Image src="/jes.png" alt="Jes Illustration" width={250} height={250} className="rounded-lg shadow-md" />
          <p className="text-sm text-gray-500 mt-2">jes.png - generated with Ideogram 3</p>
        </div>
        <p>
          While Firefly is great for backgrounds, partner models like Ideogram really shine when you need that extra level of detail in the subject matter. I
          also used{' '}
          <Link href="https://chatgpt.com" target="_blank">
            ChatGPT
          </Link>{' '}
          to help me polish the prompts for these detailed illustrations to ensure I got exactly the look I was after.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Choosing the Right Model</h2>
        <p>
          In my experience, Adobe Firefly works best with backgrounds. However, if you want more details on the image, Premium partner models such as Ideogram{' '}
          are the way to go. Other notable premium models available include{' '}
          <Link href="https://openai.com/index/gpt-4o/" target="_blank">
            GPT-4o
          </Link>{' '}
          and{' '}
          <Link href="https://gemini.google.com/" target="_blank">
            Gemini 2.5 Nano Banana
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Other Illustrations</h2>
        <p>
          In addition to the primary illustrations, I created a set of supporting visuals to enhance different areas of the site. The jes-code.png asset was
          generated in Adobe Illustrator using GPT-4o Vector Generation, then refined with manual edits in Photoshop. This illustration became the base asset
          for multiple derived variations, representing me across the site.
        </p>

        <div className="flex flex-col items-center my-8">
          <Image src="/jes-code.png" alt="Jes Coding" width={300} height={300} className="rounded-lg shadow-md" />
          <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
            <code>jes-code.png</code>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8">Variations</h3>
        <p className="mb-8">The variations are created using ChatGPT web app then manually edited on Adobe Photoshop.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="flex flex-col items-center">
            <Image src="/jes-sad.png" alt="Jes Sad" width={250} height={250} className="rounded-lg shadow-md" />
            <p className="text-sm text-gray-500 mt-4 text-center">
              <code>jes-sad.png</code> - used for the 404 page template
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/jes-wait.png" alt="Jes Waiting" width={250} height={250} className="rounded-lg shadow-md" />
            <p className="text-sm text-gray-500 mt-4 text-center">
              <code>jes-wait.png</code> - used for the coming soon page
            </p>
          </div>
        </div>
      </section>
    </Blog>
  );
}
