import React from 'react';
import DataSource from '../DataSource';
import CommentList from './CommentList';
import './BlogPost.css';

export default class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.state = {
            post: DataSource.getPost(props.id)
        };
    }

    handleAddComment() {
        DataSource.addComment(this.state.post.id)
    }

    unsubscribe = () => { };

    componentDidMount() {
        this.unsubscribe = DataSource.subscribe(this.handleChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange() {
        this.setState({
            post: DataSource.getPost(this.props.id)
        });
    }

    render() {
        if (!this.state.post)
            return null;

        return (
            <div className="Blog-post">
                <div className="post-title">
                    {this.state.post.title}
                </div>
                {this.state.post.desc !== '' &&
                    <p className="post-desc">
                        {this.state.post.desc}
                    </p>
                }
                Comments:
                <CommentList postId={this.state.post.id} />
                <button className="add-comment-button" onClick={this.handleAddComment}>Add random comment</button>
            </div>
        );
    }
}
