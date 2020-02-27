import React from 'react';
import App from './App';
import DataSource from './DataSource';
import { render, act } from '@testing-library/react'

describe('render', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders initial elements', () => {
    const sut = render(<App />);
    expect(sut.getByRole('form')).toBeTruthy();
    expect(sut.getAllByRole('list')).toHaveLength(6);
  });
});


describe('behavior', () => {
  it('receives new post', async () => {
    const sut = render(<App />);
    expect(sut.getAllByRole('list')).toHaveLength(6);

    act(() => {
      DataSource.addPost("New post", "New description");
    });

    expect(sut.getAllByRole('list')).toHaveLength(7);
  });
});