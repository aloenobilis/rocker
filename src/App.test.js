import { render, screen } from '@testing-library/react';
import Presentation from './index.js';

test('renders learn react link', () => {
  render(<Presentation />);
  const presTitle = screen.getByText(/From the kernel to the cloud in ~26 minutes/i);
  expect(presTitle).toBeInTheDocument();
});

