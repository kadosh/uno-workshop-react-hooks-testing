import React from 'react';
import DataSource from '../DataSource';
import './CommentList.css';

export class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            // "DataSource" is some global data source
            comments: DataSource.getComments(props.postId)
        };
    }

    componentDidMount() {
        // Subscribe to changes
        DataSource.subscribe(this.handleChange);
    }

    componentWillUnmount() {
        // Clean up listener
        // DataSource.subscribe(this.handleChange);
    }

    handleChange() {
        // Update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments(this.props.postId)
        });
    }

    render() {
        if (!this.state.comments)
            return null;

        return (
            <div>
                {this.state.comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        {comment.comment}
                    </div>
                ))}
            </div>
        );
    }
}
