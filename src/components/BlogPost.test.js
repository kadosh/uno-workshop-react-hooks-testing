import React from 'react';
import { render, getAllByRole } from '@testing-library/react'
import BlogPost from './BlogPost';

describe('render', () => {
    it('renders without crashing', () => {
        render(<BlogPost />);
    });

    it('renders initial elements', () => {
        const wrapper = render(<BlogPost id={1} />);

        expect(wrapper.getByText(/Getting started with react/)).toBeDefined();
        expect(wrapper.getByRole('list')).toBeDefined();

        const commentsList = wrapper.getByRole('list');
        expect(getAllByRole(commentsList, 'listitem')).toHaveLength(1);
    });
});

// No behavior for this one