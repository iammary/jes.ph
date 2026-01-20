import { render, screen } from '@testing-library/react';
import BlogPage from './page';

vi.mock('@/layouts/ContentContainer', () => ({
  ContentContainer: ({ children, centered, full }: { children: React.ReactNode; centered?: boolean; full?: boolean }) => (
    <div data-testid="content-container" data-centered={centered} data-full={full}>
      {children}
    </div>
  ),
}));

describe('Blog Page', () => {
  it('renders blog content and passes correct props to ContentContainer', () => {
    render(<BlogPage />);

    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText(/How I Generated My Site Illustrations/i)).toBeInTheDocument();
    expect(screen.getByAltText('More coming soon')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument();

    const container = screen.getByTestId('content-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('data-centered', 'true');
  });
});
