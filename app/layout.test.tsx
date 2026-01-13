import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
  Cal_Sans: () => ({ variable: 'cal-sans' }),
  Inter: () => ({ variable: 'inter' }),
}));

vi.mock('@/layout/Scene', () => ({
  Scene: () => <div data-testid="scene" />,
}));

vi.mock('@/layout/Details', () => ({
  Details: () => <div data-testid="details" />,
}));

describe('RootLayout', () => {
  it('renders children and layout components', () => {
    render(
      <RootLayout>
        <div data-testid="child">Child Content</div>
      </RootLayout>,
    );

    expect(screen.getByTestId('scene')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
