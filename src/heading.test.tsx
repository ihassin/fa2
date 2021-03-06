import {shallow} from 'enzyme';
import {Heading} from './heading';
import React from 'react';

it('renders the heading', () => {
    const wrapper = shallow(<Heading title={'Fragile to agile'}/>);
    expect(wrapper.find('h1').text()).toBe('Fragile to agile');
});
