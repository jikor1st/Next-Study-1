import { render } from '@testing-library/react';
import Testing from '@/pages/testing';

it('renders Testing unchanged', () => {
  const { container } = render(<Testing />);
  expect(container).toMatchSnapshot();
});
