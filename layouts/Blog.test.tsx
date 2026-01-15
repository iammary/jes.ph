import { render, screen } from '@testing-library/react';
import { Blog } from '@/layouts/Blog';

vi.mock('@/layouts/ContentContainer', () => ({
  ContentContainer: ({ children }: { children: React.ReactNode }) => <div data-testid="content-container">{children}</div>,
}));

describe('Blog Layout', () => {
  const defaultProps = {
    title: 'Test Blog Post',
    date: 'January 15, 2026',
    children: <div data-testid="blog-content">Post Content</div>,
  };

  it('renders all blog elements', () => {
    render(<Blog {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByTestId('blog-content')).toBeInTheDocument();

    expect(screen.getByText(/← Back to Blog/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Blog List/i)).toBeInTheDocument();
    expect(screen.getByTestId('content-container')).toBeInTheDocument();
  });
});
