import React from 'react';
import { render } from '@testing-library/react';
import FragileToAgile from './FragileToAgile';

test('renders learn react link', () => {
  const { getByText } = render(<FragileToAgile />);
  const linkElement = getByText(/Fragile to agile/i);
  expect(linkElement).toBeInTheDocument();
});

