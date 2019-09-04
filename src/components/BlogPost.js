import React from 'react';
import DataSource from '../DataSource';
import CommentList from './CommentList';
import './BlogPost.css';
import useSubscription from './hooks/useSubscription';

const BlogPost = (props) => {
    const [post] = useSubscription(() => DataSource.getPost(props.id));
    const handleAddComment = () => {
        DataSource.addComment(post.id);
    }

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
            <button className="add-comment-button" onClick={handleAddComment}>Add random comment</button>
        </div>
    );
}

export default BlogPost;
