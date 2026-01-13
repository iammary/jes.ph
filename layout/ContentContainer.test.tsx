import { render, screen } from '@testing-library/react';
import { ContentContainer } from './ContentContainer';

describe('ContentContainer', () => {
  it('renders children correctly', () => {
    render(
      <ContentContainer>
        <div data-testid="child">Test Child</div>
      </ContentContainer>,
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('has the correct CSS classes', () => {
    const { container } = render(
      <ContentContainer>
        <div>Content</div>
      </ContentContainer>,
    );

    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass('flex', 'min-h-screen', 'w-full');

    const innerDiv = outerDiv.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass('z-10', 'bg-black/85', 'text-white');
  });
});
