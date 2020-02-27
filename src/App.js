import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import BlogControl from './components/BlogControl';
import { useSubscription } from './hooks/useSubscription';

const App = () => {
  const posts = useSubscription((ds) => ds.getPosts());

  if (!posts)
    return null;

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Reactjs workshop
          </h1>
        <BlogControl />
        <div className="Blog-entries" role="list">
          {posts.map(post => {
            return <BlogPost id={post.id} key={post.id} />;
          })}
        </div>
      </header>
    </div>
  );
};

export default App;