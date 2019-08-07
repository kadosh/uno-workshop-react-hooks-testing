import id from './utils';

const store = {
    posts: [
        { id: 1, title: 'Whatever', desc: '' },
        { id: 2, title: 'Whatever 2', desc: '' },
        { id: 3, title: 'Whatever 3', desc: '' },
        { id: 4, title: 'Whatever 4 ', desc: '' },
        { id: 5, title: 'Whatever 5', desc: '' },
    ],

    comments: [
        { id: 6, comment: 'First Comment', postId: 1 },
        { id: 7, comment: 'First Comment', postId: 2 },
        { id: 8, comment: 'First Comment', postId: 3 },
        { id: 9, comment: 'First Comment', postId: 4 },
        { id: 10, comment: 'First Comment', postId: 5 },
    ]
};

function DataSource() {
    this.store = store;
    this.subscribers = [];
}

DataSource.prototype.addPost = function (title, desc) {
    let newState = { ...this.store };
    let newPosts = [...newState.posts];

    newPosts = newPosts.concat({
        id: id(),
        title,
        desc
    });

    newState.posts = newPosts;
    this.store = newState;

    this.inform();
};

DataSource.prototype.addComment = function (postId, comment) {
    let newState = { ...this.store };
    let newComments = [...newState.comments];

    newComments = this.store.comments.concat({
        id: id(),
        comment,
        postId
    });

    newState.comments = newComments;
    this.store = newState;

    this.inform();
};

DataSource.prototype.subscribe = function (subscriber) {
    this.subscribers.push(subscriber);
};

DataSource.prototype.getPost = function (id) {
    return this.store.posts.find(post => post.id === id);
}

DataSource.prototype.getPosts = function () {
    return this.store.posts;
}

DataSource.prototype.getComments = function (postId) {
    return this.store.comments.filter(comment => comment.postId === postId);
}

DataSource.prototype.unsubscribe = function (subscriber) {
    // Do nothing for now
};

DataSource.prototype.inform = function () {
    this.subscribers.forEach(cb => cb());
};

const AppDataSource = new DataSource();

export default AppDataSource;