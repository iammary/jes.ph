import { render, screen } from '@testing-library/react';
import Home from './page';

vi.mock('./components/Welcome', () => ({
  Welcome: () => <div data-testid="welcome" />,
}));

describe('Home Page', () => {
  it('renders Welcome component', () => {
    render(<Home />);
    expect(screen.getByTestId('welcome')).toBeInTheDocument();
  });
});
