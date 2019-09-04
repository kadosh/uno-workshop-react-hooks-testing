import React from 'react';
import DataSource from '../DataSource';
import './CommentList.css';
import useSubscription from './hooks/useSubscription';

const CommentList = (props) => {
    const [comments] = useSubscription(() => DataSource.getComments(props.postId));
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

export default CommentList;
