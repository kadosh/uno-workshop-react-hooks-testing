import React from 'react';
import { mount } from 'enzyme';
import CommentList from './CommentList';
import DataSource from '../DataSource';

describe('render', () => {
    it('render without crashing', () => {
        mount(<CommentList postId={1} />);
    });

    it('render initial elements', () => {
        const sut = mount(<CommentList postId={1} />);
        expect(sut.find('div.comment')).toBeDefined();
    });
});

describe('behavior', () => {
    it('receives new comments', () => {
        const sut = mount(<CommentList postId={1} />);
        expect(sut.find('div.comment').length).toBe(1);

        DataSource.addComment(1, 'Another one');
        sut.update();
        expect(sut.find('div.comment').length).toBe(2);

        DataSource.addComment(1, 'Another one 2');
        sut.update();
        expect(sut.find('div.comment').length).toBe(3);
    });
});
