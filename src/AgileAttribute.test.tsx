import {mount, shallow} from 'enzyme';
import React from 'react';
import {AgileAttribute} from './agileAttribute';

it('renders an attribute', () => {
    const wrapper = shallow(<AgileAttribute label={'Fragile'} color={'red'}/>);
    expect(wrapper.find('.AgileAttribute label').text()).toBe('Fragile');
});

it('changes the attribute\'s state', () => {
    const wrapper = mount(<AgileAttribute label={'Fragile'} color={'red'}/>);
    wrapper.find('.AgileAttribute label').simulate('click');
    // @ts-ignore
    const activeState = wrapper.instance()['state']['active'];
    expect(activeState).toBe(true);
});
