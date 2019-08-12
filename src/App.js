import React from 'react';
import './App.css';
import BlogPost from './components/BlogPost';
import DataSource from './DataSource';
import BlogControl from './components/BlogControl';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: DataSource.getPosts()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    DataSource.subscribe(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      posts: DataSource.getPosts()
    });
  }

  render() {
    if (!this.state.posts)
      return null;

    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Reactjs workshop
          </h1>
          <BlogControl />
          <div className="Blog-entries">
            {this.state.posts.map(post => {
              return <BlogPost id={post.id} key={post.id} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
