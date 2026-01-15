import { render, screen } from '@testing-library/react';
import { Blog } from '@/layouts/Blog';

vi.mock('@/layouts/ContentContainer', () => ({
  ContentContainer: ({ children, centered, full }: { children: React.ReactNode; centered?: boolean; full?: boolean }) => (
    <div data-testid="content-container" data-centered={centered} data-full={full}>
      {children}
    </div>
  ),
}));

describe('Blog Layout', () => {
  const defaultProps = {
    title: 'Test Blog Post',
    date: 'January 15, 2026',
    children: <div data-testid="blog-content">Post Content</div>,
  };

  it('renders all blog elements and passes correct props to ContentContainer', () => {
    render(<Blog {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.date)).toBeInTheDocument();
    expect(screen.getByTestId('blog-content')).toBeInTheDocument();

    expect(screen.getByText(/← Back to Blog/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Blog List/i)).toBeInTheDocument();

    const container = screen.getByTestId('content-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('data-centered', 'true');
    expect(container).toHaveAttribute('data-full', 'true');
  });
});
