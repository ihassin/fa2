import React from 'react';
import FragileToAgile from './FragileToAgile';
import {mount, shallow} from 'enzyme';
import {SubjectAttribute} from './SubjectAttribute';

it('renders the heading', () => {
    const wrapper = mount(<FragileToAgile/>);
    expect(wrapper.find('h1').text()).toBe('Fragile to agile');
});

it('renders an agile attribute', () => {
    const wrapper = shallow(<SubjectAttribute label={'MVP'} left={'20px'} top={'380px'}/>);
    expect(wrapper.find('.SubjectAttribute label').text()).toBe('MVP');
});
