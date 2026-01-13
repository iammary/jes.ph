import { render, screen } from '@testing-library/react';
import About from './page';

vi.mock('@/layout/ContentContainer', () => ({
  ContentContainer: ({ children }: { children: React.ReactNode }) => <div data-testid="content-container">{children}</div>,
}));

describe('About Page', () => {
  it('renders about content', () => {
    render(<About />);
    expect(screen.getByTestId('content-container')).toBeInTheDocument();
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(/frontend-focused software engineer/i)).toBeInTheDocument();
  });
});
