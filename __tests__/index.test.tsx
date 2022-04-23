import { render, screen } from '@testing-library/react';
import Testing from '@/pages/testing';

describe('Home', () => {
  it('renders a Testing', () => {
    render(<Testing />);

    const text = screen.getByText(/홈 페이지/);

    expect(text).toBeInTheDocument();
  });
});
