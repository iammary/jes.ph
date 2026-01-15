import { render, screen } from '@testing-library/react';
import { BlogCard } from '@/components/BlogCard';
import { BlogPost, UpcomingPost } from '@/app/(marketing)/blog/blog-data';

describe('BlogCard', () => {
  const mockPost: BlogPost = {
    slug: 'test-post',
    title: 'Test Blog Post',
    description: 'A test description for the blog post.',
    image: '/test-image.png',
    imageAlt: 'Test Image Alt',
  };

  const mockUpcomingPost: UpcomingPost = {
    title: 'Upcoming Post',
    description: 'Coming soon description.',
    image: '/upcoming-image.png',
    imageAlt: 'Upcoming Image Alt',
  };

  it('renders regular blog post correctly', () => {
    render(<BlogCard post={mockPost} isUpcoming={false} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.description)).toBeInTheDocument();
    expect(screen.getByText(/Read Post →/i)).toBeInTheDocument();

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/blog/${mockPost.slug}`);

    const image = screen.getByAltText(mockPost.imageAlt);
    expect(image).toBeInTheDocument();
  });

  it('renders upcoming post correctly', () => {
    render(<BlogCard post={mockUpcomingPost} isUpcoming={true} />);

    expect(screen.getByText(mockUpcomingPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockUpcomingPost.description)).toBeInTheDocument();
    expect(screen.queryByText(/Read Post →/i)).not.toBeInTheDocument();

    expect(screen.queryByRole('link')).not.toBeInTheDocument();

    const image = screen.getByAltText(mockUpcomingPost.imageAlt);
    expect(image).toBeInTheDocument();
  });
});
