import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App title={"안녕하세요. props입니다."} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
