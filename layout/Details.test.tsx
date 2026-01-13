import { render, screen } from '@testing-library/react';
import { Details } from './Details';

describe('Details', () => {
  it('renders navigation links', () => {
    render(<Details />);

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Linkedin')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
    expect(screen.getByText('<Blog />')).toBeInTheDocument();
  });

  it('renders the branding link', () => {
    render(<Details />);
    const brandLink = screen.getByText('jes.ph');
    expect(brandLink).toBeInTheDocument();
    expect(brandLink.getAttribute('href')).toBe('/');
  });

  it('renders the source code link', () => {
    render(<Details />);
    expect(screen.getByText('<Source />')).toBeInTheDocument();
  });

  it('renders credit information', () => {
    render(<Details />);
    expect(screen.getByText(/Illustrations × Adobe Firefly AI/i)).toBeInTheDocument();
  });
});
