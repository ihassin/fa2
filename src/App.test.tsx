import React from 'react';
import { render } from '@testing-library/react';
import FragileToAgile from './FragileToAgile';
import {shallow} from 'enzyme';

test('renders learn react link', () => {
  const { getByText } = render(<FragileToAgile />);
  const linkElement = getByText(/Fragile to agile/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders the heading', () => {
  const wrapper = shallow(<FragileToAgile/>);
   expect(wrapper.find('h1').text()).toBe('Fragile to agile');
});
