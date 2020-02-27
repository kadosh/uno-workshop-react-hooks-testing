import React from 'react';
import { mount } from 'enzyme';
import BlogPost from './BlogPost';
import CommentList from './CommentList';


describe('render', () => {
    it('renders without crashing', () => {
        mount(<BlogPost />);
    });

    it('renders initial elements', () => {
        const wrapper = mount(<BlogPost id={1} />);
        expect(wrapper).toBeDefined();
        wrapper.update();

        expect(wrapper.find('div.post-title')).toBeDefined();
        expect(wrapper.find(CommentList)).toBeDefined();
    });
});

// No behavior for this one