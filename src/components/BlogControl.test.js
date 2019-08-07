import React from 'react';
import { shallow } from 'enzyme';
import { BlogControl } from './BlogControl';

describe('render', () => {
    it('renders without crashing', () => {
        shallow(<BlogControl />);
    });

    it('renders initial elements', () => {
        const wrapper = shallow(<BlogControl />);
        expect(wrapper).toBeDefined();
        expect(wrapper.find('input')).toBeDefined();
        expect(wrapper.find('textarea')).toBeDefined();
        expect(wrapper.find('button')).toBeDefined();
    });
});

describe('behavior', () => {
    it('add a new post', () => {
        const wrapper = shallow(<BlogControl />);
        wrapper.find('input').simulate('change', {target: {value: 'New post'}});
        wrapper.find('textarea').simulate('change', {target: {value: 'New Description'}});

        expect(wrapper.state('title')).toMatch('New post');
        expect(wrapper.state('description')).toMatch('New Description');

        wrapper.find('button').simulate('click');

        expect(wrapper.state('title')).toMatch('');
        expect(wrapper.state('description')).toMatch('');
    });
});