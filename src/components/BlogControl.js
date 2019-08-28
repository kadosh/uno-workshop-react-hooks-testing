import React from 'react';
import DataSource from '../DataSource';
import './BlogControl.css';

export default class BlogControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };

        this.onAddPost = this.onAddPost.bind(this);
    }

    onAddPost() {
        DataSource.addPost(this.state.title, this.state.description);
        this.setState({
            title: '',
            description: ''
        });
    }

    render() {
        return (
            <div>
                <label>Title</label>
                <input
                    type="text"
                    name="Title"
                    className="title"
                    onChange={(event) => this.setState({ title: event.target.value })}
                    value={this.state.title}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="Description"
                    className="desc"
                    onChange={(event) => this.setState({ description: event.target.value })}
                    value={this.state.description}
                />
                <button onClick={this.onAddPost}>Add post</button>
            </div>
        )
    }
}
