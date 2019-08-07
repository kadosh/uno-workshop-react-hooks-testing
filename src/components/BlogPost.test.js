import React from 'react';
import { shallow } from 'enzyme';
import { BlogPost } from './BlogPost';
import { CommentList } from './CommentList';


describe('render', () => {
    it('renders without crashing', () => {
        shallow(<BlogPost />);
    });

    it('renders initial elements', () => {
        const wrapper = shallow(<BlogPost id={1}/>);
        expect(wrapper).toBeDefined();
        wrapper.update();

        expect(wrapper.find('div.post-title')).toBeDefined();
        expect(wrapper.find(CommentList)).toBeDefined();
    });
});

// No behavior for this one