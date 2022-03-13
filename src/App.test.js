import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Comming soon!', () => {
  render(<App />);
  const h1Element = screen.getByText(/This is a financial dashbord/i);
  expect(h1Element).toBeInTheDocument();
});
