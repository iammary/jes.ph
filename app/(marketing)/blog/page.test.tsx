import { render, screen } from '@testing-library/react';
import BlogComingSoon from './page';

describe('Blog Page', () => {
  it('renders coming soon content', () => {
    render(<BlogComingSoon />);

    expect(screen.getByText('Coming Soon')).toBeInTheDocument();
    expect(screen.getByAltText('Jes Code')).toBeInTheDocument();
    expect(screen.getByText(/I'm currently working on some interesting content/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument();
  });
});
