import {mount, shallow} from 'enzyme';
import React from 'react';
import {SubjectAttribute} from './SubjectAttribute';

it('renders an attribute', () => {
    const wrapper = shallow(<SubjectAttribute label={'Fragile'} left={'0px'} top={'0px'} active={true}/>);
    expect(wrapper.find('.SubjectAttribute label').text()).toBe('Fragile');
});

it('changes the attribute\'s state', () => {
    const wrapper = shallow(<SubjectAttribute label={'Fragile'} left={'0px'} top={'0px'} active={true}/>);
    wrapper.find('#Fragile').simulate('click');
});
