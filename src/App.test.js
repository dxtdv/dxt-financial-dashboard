import { render, screen } from '@testing-library/react';
import App from './App';

test('Mini variant drawer!', () => {
  render(<App />);
  const divElement = screen.getByText(/Mini variant drawer/i);
  expect(divElement).toBeInTheDocument();
});
