import React from 'react';
import {mount, shallow} from 'enzyme';
import FragileToAgile from './FragileToAgile';
import {SubjectAttribute} from './SubjectAttribute';

it('renders the main component', () => {
    const wrapper = mount(<FragileToAgile/>);
    expect(wrapper.find('h1').text()).toBe('Fragile to agile');

    expect(wrapper.find('#MVP')).toHaveLength(1);
    expect(wrapper.find('#agile')).toHaveLength(1);
});

function handleSelect(event: React.MouseEvent<HTMLElement>) {
}

it('renders the MVP node', () => {
    // @ts-ignore
    const wrapper = shallow(<SubjectAttribute label={'MVP'} left={'20px'} top={'380px'} active={true}
                                              onSelect={handleSelect}/>);
    expect(wrapper.find('#MVP').text()).toBe('MVP');
});
