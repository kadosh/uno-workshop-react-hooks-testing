import React from 'react';
import DataSource from '../DataSource';

export class BlogControl extends React.Component {
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
                <input type="text" name="Title" onChange={(event) => this.setState({ title: event.target.value })} value={this.state.title} />
                <label>Description</label>
                <textarea type="text" name="Description" onChange={(event) => this.setState({ description: event.target.value })} value={this.state.description} />
                <button onClick={this.onAddPost}>Add post</button>
            </div>
        )
    }
}