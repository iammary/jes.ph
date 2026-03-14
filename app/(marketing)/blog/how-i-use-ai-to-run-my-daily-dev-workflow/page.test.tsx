import { render, screen } from '@testing-library/react';
import BlogPost from './page';

describe('Daily Dev Workflow Blog Post', () => {
  it('renders the blog post content', () => {
    render(<BlogPost />);

    expect(screen.getByRole('heading', { level: 1, name: /How I Use AI to Run My Daily Dev Workflow/i })).toBeInTheDocument();
    expect(screen.getByText(/I do not use AI as a replacement for thinking/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /I Use Two Different AI Roles/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /Skills Beat Repeated Prompts/i })).toBeInTheDocument();
    expect(screen.getByText(/\/start-workspace/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /back to blog/i }).length).toBeGreaterThan(0);
  });
});
