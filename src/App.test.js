import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import BlogControl from './components/BlogControl';
import BlogPost from './components/BlogPost';
import DataSource from './DataSource';
import { act } from 'react-dom/test-utils';

describe('render', () => {
  it('renders without crashing', () => {
    mount(<App />);
  });

  it('renders initial elements', () => {
    const sut = mount(<App />);
    expect(sut.find(BlogControl)).toBeDefined();
    expect(sut.find('div.Blog-entries')).toBeDefined();
    expect(sut.find(BlogPost).length).toBe(5);
  });
});


describe('behavior', () => {
  it('receives new post', () => {
    const sut = mount(<App />);
    expect(sut.find(BlogPost).length).toBe(5);

    act(() => {
      DataSource.addPost("New post", "New description");
    });

    sut.update();
    expect(sut.find(BlogPost).length).toBe(6);
  });
});