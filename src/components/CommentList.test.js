import React from 'react';
import { shallow } from 'enzyme';
import { CommentList } from './CommentList';
import DataSource from '../DataSource';

describe('render', () => {
    it('render without crashing', () => {
        shallow(<CommentList postId={1} />);
    });

    it('render initial elements', () => {
        const sut = shallow(<CommentList postId={1} />);
        expect(sut.find('div.comment')).toBeDefined();
    });
});

describe('behavior', () => {
    it('receives new comments', () => {
        const sut = shallow(<CommentList postId={1} />);
        expect(sut.find('div.comment').length).toBe(1);

        DataSource.addComment(1, 'Another one');
        expect(sut.find('div.comment').length).toBe(2);

        DataSource.addComment(1, 'Another one 2');
        expect(sut.find('div.comment').length).toBe(3);
    });
});
