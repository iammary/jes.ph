import { render, screen } from '@testing-library/react';
import BlogPage from './page';

describe('Blog Page', () => {
  it('renders blog content', () => {
    render(<BlogPage />);

    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText(/How I Generated My Website Illustrations/i)).toBeInTheDocument();
    expect(screen.getByAltText('More coming soon')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument();
  });
});
