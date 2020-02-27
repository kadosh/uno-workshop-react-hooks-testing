import React from 'react';
import DataSource from '../DataSource';
import CommentList from './CommentList';
import './BlogPost.css';
import withSubscription from '../hocs/withSubscription';

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddComment = this.handleAddComment.bind(this);
    }

    handleAddComment() {
        DataSource.addComment(this.props.data.id)
    }

    render() {
        const post = this.props.data;
        if (!post)
            return null;

        return (
            <div className="Blog-post">
                <div className="post-title">
                    {post.title}
                </div>
                {post.desc !== '' &&
                    <p className="post-desc">
                        {post.desc}
                    </p>
                }
                Comments:
                <CommentList postId={post.id} />
                <button className="add-comment-button" onClick={this.handleAddComment}>Add random comment</button>
            </div>
        );
    }
}

export default withSubscription(BlogPost, (ds, props) => ds.getPost(props.id));