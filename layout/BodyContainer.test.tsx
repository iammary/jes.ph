import { render, screen } from '@testing-library/react';
import { BodyContainer } from '@/layout/BodyContainer';

vi.mock('./Scene', () => ({
  Scene: () => <div data-testid="scene" />,
}));

vi.mock('@/layout/Details', () => ({
  Details: () => <div data-testid="details" />,
}));

describe('BodyContainer', () => {
  it('renders children and layout components', () => {
    render(
      <BodyContainer>
        <div data-testid="child">Child Content</div>
      </BodyContainer>,
    );

    expect(screen.getByTestId('scene')).toBeInTheDocument();
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('has correct structure and classes', () => {
    const { container } = render(
      <BodyContainer>
        <div>Content</div>
      </BodyContainer>,
    );

    const root = container.querySelector('#root');
    expect(root).toBeInTheDocument();

    const overlay = root?.querySelector('.absolute.top-0.left-0');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('h-full', 'w-full', 'pointer-events-none', 'overflow-y-auto');
    expect(overlay).not.toHaveClass('text-white');
  });
});
