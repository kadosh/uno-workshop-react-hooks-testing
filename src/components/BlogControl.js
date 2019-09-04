import React from 'react';
import DataSource from '../DataSource';
import './BlogControl.css';

const BlogControl = (props) => {
    const [data, setData] = React.useState({title:'', description: ''});

    const onAddPost = () => {
        DataSource.addPost(data.title, data.description);
        setData({title:'', description: ''});
    }
    return (
        <div>
            <label>Title</label>
            <input
                type="text"
                name="Title"
                className="title"
                onChange={(event) => setData({...data, title: event.target.value})}
                value={data.title}
            />
            <label>Description</label>
            <input
                type="text"
                name="Description"
                className="desc"
                onChange={(event) => setData({...data, description: event.target.value})}
                value={data.description}
            />
            <button onClick={onAddPost}>Add post</button>
        </div>
    );
}

export default BlogControl;

