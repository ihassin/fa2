import React from 'react';
import FragileToAgile from './FragileToAgile';
import {mount, shallow} from 'enzyme';
import {AgileAttribute} from './agileAttribute';

it('renders the heading', () => {
    const wrapper = mount(<FragileToAgile/>);
    expect(wrapper.find('h1').text()).toBe('Fragile to agile');
});

it('renders an agile attribute', () => {
    const wrapper = shallow(<AgileAttribute label={'MVP'} left={'20px'} top={'380px'}/>);
    expect(wrapper.find('.AgileAttribute label').text()).toBe('MVP');
});
