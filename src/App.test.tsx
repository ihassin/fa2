import React from 'react';
import FragileToAgile from './FragileToAgile';
import {shallow} from 'enzyme';

it('renders the heading', () => {
    const wrapper = shallow(<FragileToAgile/>);
    expect(wrapper.find('h1').text()).toBe('Fragile to agile');
});
