import {shallow} from 'enzyme';
import React from 'react';
import {AgileAttribute} from './agileAttribute';

it('renders an attribute', () => {
    const wrapper = shallow(<AgileAttribute label={'Fragile'}/>);
    expect(wrapper.find('.AgileAttribute label').text()).toBe('Fragile');
});
