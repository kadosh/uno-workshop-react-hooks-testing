import React from 'react';
import './CommentList.css';
import withSubscription from '../hocs/withSubscription';

class CommentList extends React.Component {
    render() {
        const comments = this.props.data;
        if (!comments)
            return null;

        return (
            <div>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        {comment.comment}
                    </div>
                ))}
            </div>
        );
    }
}

export default withSubscription(CommentList, (ds, props) => ds.getComments(props.postId))