import {mount, shallow} from 'enzyme';
import React from 'react';
import {SubjectAttribute} from './SubjectAttribute';

it('renders an attribute', () => {
    const wrapper = shallow(<SubjectAttribute label={'Fragile'} color={'red'}/>);
    expect(wrapper.find('.SubjectAttribute label').text()).toBe('Fragile');
});

it('changes the attribute\'s state', () => {
    const wrapper = mount(<SubjectAttribute label={'Fragile'} color={'red'}/>);
    wrapper.find('.SubjectAttribute label').simulate('click');
    // @ts-ignore
    const activeState = wrapper.instance()['state']['active'];
    expect(activeState).toBe(true);
});
