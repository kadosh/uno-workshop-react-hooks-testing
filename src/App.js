import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import BlogControl from './components/BlogControl';
import withSubscription from './hocs/withSubscription';

class App extends React.Component {
  render() {
    const posts = this.props.data;
    if (!posts)
      return null;

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Reactjs workshop
          </h1>
          <BlogControl />
          <div className="Blog-entries">
            {posts.map(post => {
              return <BlogPost id={post.id} key={post.id} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default withSubscription(App, (ds) => ds.getPosts());
