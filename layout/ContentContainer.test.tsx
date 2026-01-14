import { render, screen } from '@testing-library/react';
import { ContentContainer } from '@/layout/ContentContainer';

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
    expect(outerDiv).toHaveAttribute('data-theme', 'dark');

    const innerDiv = outerDiv.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass('z-10', 'bg-black/85', 'text-white');
  });

  it('applies light mode classes when mode is light', () => {
    const { container } = render(
      <ContentContainer mode="light">
        <div>Content</div>
      </ContentContainer>,
    );

    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveAttribute('data-theme', 'light');

    const innerDiv = outerDiv.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass('bg-white/95', 'text-black');
  });

  it('applies md:justify-center when centered prop is true', () => {
    const { container } = render(
      <ContentContainer centered>
        <div>Content</div>
      </ContentContainer>,
    );

    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass('md:justify-center');
    expect(outerDiv).not.toHaveClass('md:justify-start');
  });

  it('applies md:justify-start by default (when centered is false)', () => {
    const { container } = render(
      <ContentContainer>
        <div>Content</div>
      </ContentContainer>,
    );

    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv).toHaveClass('md:justify-start');
    expect(outerDiv).not.toHaveClass('md:justify-center');
  });
});
