import React from 'react';
import { render, getAllByRole } from '@testing-library/react'
import CommentList from './CommentList';
import DataSource from '../DataSource';
import { act } from 'react-dom/test-utils';

describe('render', () => {
    it('render without crashing', () => {
        render(<CommentList postId={1} />);
    });

    it('render initial elements', () => {
        const sut = render(<CommentList postId={1} />);
        expect(sut.getByRole('list')).toBeDefined();
        expect(sut.getAllByRole('listitem')).toHaveLength(1);
    });
});

describe('behavior', () => {
    it('receives new comments', () => {
        const sut = render(<CommentList postId={1} />);
        expect(sut.getAllByRole('listitem')).toHaveLength(1);

        act(() => {
            DataSource.addComment(1, 'Another one');
        });

        expect(sut.getAllByRole('listitem')).toHaveLength(2);

        act(() => {
            DataSource.addComment(1, 'Another one 2');
        });

        expect(sut.getAllByRole('listitem')).toHaveLength(3);
    });
});
