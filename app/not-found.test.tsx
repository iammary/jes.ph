import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

vi.mock('@/layout/ContentContainer', () => ({
  ContentContainer: ({ children, centered }: { children: React.ReactNode; centered?: boolean }) => (
    <div data-testid="content-container" data-centered={centered}>
      {children}
    </div>
  ),
}));

describe('NotFound Page', () => {
  it('renders 404 content in a centered container', () => {
    render(<NotFound />);
    const container = screen.getByTestId('content-container');
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('data-centered', 'true');
    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
    expect(screen.getByText(/The page you are looking for doesn't exist/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go home/i })).toHaveAttribute('href', '/');
  });
});
