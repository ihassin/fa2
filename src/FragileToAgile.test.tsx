import React from 'react';
import FragileToAgile from './FragileToAgile';
import {mount} from 'enzyme';

it('renders the heading', () => {
    const wrapper = mount(<FragileToAgile/>);
    expect(wrapper.find('h1').text()).toBe('Fragile to agile');
});

it('renders an agile attribute', () => {
    const wrapper = mount(<FragileToAgile/>);
    expect(wrapper.find('.AgileAttribute label').text()).toBe('MVP');
});
