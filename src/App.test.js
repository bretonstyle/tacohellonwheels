import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test ('page loads', () => {
  render(<App />);
  const linkElement = screen.getByText(/Taco Hell On Wheels Placeholder/i);
  expect(linkElement).toBeInTheDocument();
});
