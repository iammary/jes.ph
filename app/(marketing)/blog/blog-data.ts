export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface UpcomingPost {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-i-generated-illustrations-with-ai',
    title: 'How I Generated My Site Illustrations with Adobe Illustrator and Firefly AI',
    description: 'Learn how I used Adobe Creative Cloud and Firefly AI to create the visuals for this site.',
    image: '/jes.png',
    imageAlt: 'How I Generated Illustrations',
  },
];

export const UPCOMING_POST: UpcomingPost = {
  title: 'Upcoming Post',
  description: "I'm currently working on some interesting content. Stay tuned!",
  image: '/jes-wait.png',
  imageAlt: 'More coming soon',
};
