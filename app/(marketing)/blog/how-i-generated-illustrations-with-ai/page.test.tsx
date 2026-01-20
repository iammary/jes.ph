import { render, screen } from '@testing-library/react';
import BlogPost from './page';

describe('AI Illustrations Blog Post', () => {
  it('renders the blog post content', () => {
    render(<BlogPost />);

    expect(screen.getByRole('heading', { level: 1, name: /How I Generated My Site Illustrations with Adobe Illustrator and Firefly AI/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Firefly Vector 4/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Ideogram 3/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/4,000 AI credits/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Autumn Illustration/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Background Illustration/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Jes Illustration/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /back to blog/i }).length).toBeGreaterThan(0);
  });

  it('external links have target="_blank"', () => {
    render(<BlogPost />);

    const chatgptLink = screen.getByRole('link', { name: /ChatGPT/i });
    expect(chatgptLink).toHaveAttribute('target', '_blank');

    const internalLink = screen.getByRole('link', { name: /← Back to Blog/i });
    expect(internalLink).not.toHaveAttribute('target');
  });
});
