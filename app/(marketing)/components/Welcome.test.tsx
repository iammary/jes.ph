import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('renders the welcome message and introduction', () => {
    render(<Welcome />);

    expect(screen.getByText(/Hey, I'm Jes/i)).toBeInTheDocument();
    expect(screen.getByText(/I build frontend architectures/i)).toBeInTheDocument();
    expect(screen.getByText(/Melbourne, Australia/i)).toBeInTheDocument();
  });
});
