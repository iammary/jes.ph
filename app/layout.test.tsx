import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
  Cal_Sans: () => ({ variable: 'cal-sans' }),
  Inter: () => ({ variable: 'inter' }),
}));

vi.mock('@vercel/analytics/next', () => ({
  Analytics: () => {},
}));

vi.mock('@/layouts/BodyContainer', () => ({
  BodyContainer: ({ children }: { children: React.ReactNode }) => <div data-testid="body-container">{children}</div>,
}));

// Suppress hydration and structure warnings for RootLayout
const originalConsoleError = console.error;
vi.spyOn(console, 'error').mockImplementation((...args: any[]) => {
  const msg = args.map(String).join(' ');
  if (
    msg.includes('In HTML, <html> cannot be a child of') ||
    msg.includes('cannot be a child of <html>') ||
    msg.includes('cannot be a child of <div>') ||
    msg.includes('hydration error') ||
    msg.includes('DOMException [NotSupportedError]')
  ) {
    return;
  }
  originalConsoleError(...args);
});

describe('RootLayout', () => {
  it('renders html and body with font variables', () => {
    render(
      <RootLayout>
        <div data-testid="child">Child</div>
      </RootLayout>,
    );

    const html = document.documentElement;
    const body = document.body;

    expect(html).toHaveAttribute('lang', 'en');
    expect(body).toHaveClass('cal-sans', 'inter', 'antialiased');
    expect(screen.getByTestId('body-container')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
