import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('renders the welcome message and introduction', () => {
    render(<Welcome />);

    expect(screen.getByText(/Hey, I'm Jes/i)).toBeInTheDocument();
    expect(screen.getByText(/I build product software, stabilise platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/practical multi-agent systems/i)).toBeInTheDocument();
    expect(screen.getByText(/Melbourne, Australia/i)).toBeInTheDocument();
  });
});
