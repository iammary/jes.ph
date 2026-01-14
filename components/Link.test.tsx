import { render, screen } from '@testing-library/react';
import { CustomLink } from './Link';

describe('CustomLink', () => {
  it('renders a normal link when asButton is false', () => {
    render(<CustomLink href="/test">Test Link</CustomLink>);
    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).not.toHaveClass('px-6');
    expect(link).not.toHaveClass('rounded-full');
  });

  it('renders as a button when asButton is true (light mode default)', () => {
    render(
      <CustomLink href="/test" asButton>
        Button Link
      </CustomLink>,
    );
    const link = screen.getByRole('link', { name: /button link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('px-6', 'py-2', 'rounded-full', 'transition-colors');
    expect(link).toHaveClass('bg-gray-200', 'text-black', 'hover:bg-white');
  });

  it('renders as a button in dark mode', () => {
    render(
      <CustomLink href="/test" asButton mode="dark">
        Dark Button
      </CustomLink>,
    );
    const link = screen.getByRole('link', { name: /dark button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('bg-gray-800', 'text-white', 'hover:bg-black');
  });

  it('applies custom className', () => {
    render(
      <CustomLink href="/test" className="custom-class">
        Custom Link
      </CustomLink>,
    );
    const link = screen.getByRole('link', { name: /custom link/i });
    expect(link).toHaveClass('custom-class');
  });

  it('applies custom className when asButton is true', () => {
    render(
      <CustomLink href="/test" asButton className="custom-class">
        Custom Button
      </CustomLink>,
    );
    const link = screen.getByRole('link', { name: /custom button/i });
    expect(link).toHaveClass('px-6', 'custom-class');
  });

  it('passes through other props like target', () => {
    render(
      <CustomLink href="/test" target="_blank">
        External Link
      </CustomLink>,
    );
    const link = screen.getByRole('link', { name: /external link/i });
    expect(link).toHaveAttribute('target', '_blank');
  });
});
