import id from './utils';

const store = {
    posts: [
        { id: 1, title: 'Getting started with react', desc: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.' },
        { id: 2, title: 'Hooks at glance', desc: 'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.' },
        { id: 3, title: 'React context', desc: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.' },
        { id: 4, title: 'Profiler API', desc: 'The Profiler measures how often a React application renders and what the “cost” of rendering is. Its purpose is to help identify parts of an application that are slow and may benefit from optimizations such as memoization.' },
        { id: 5, title: 'React testing library', desc: 'React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.' },
    ],

    comments: [
        { id: 6, comment: 'It was cool', postId: 1 },
        { id: 7, comment: 'There\'s a typo on second paragraph', postId: 2 },
        { id: 8, comment: 'Great article', postId: 3 },
        { id: 9, comment: 'YAY!', postId: 4 },
        { id: 10, comment: 'So, should we get rid of enzyme?', postId: 5 },
    ]
};

const getRandomComment = () => {
    const position = Math.floor(Math.random() * store.comments.length);
    return store.comments[position].comment;
};

const sortByPostIdFn = (a, b) => {
    if (a.id > b.id) {
        return -1;
    }

    if (b.id > a.id) {
        return 1;
    }

    return 0;
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

    if (!comment) {
        comment = getRandomComment();
    }

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

    return () => {
        const index = this.subscribers.indexOf(subscriber);
        this.subscribers.splice(index, 1);
    };
};

DataSource.prototype.getPost = function (id) {
    return this.store.posts.find(post => post.id === id);
}

DataSource.prototype.getPosts = function () {
    return [...this.store.posts].sort(sortByPostIdFn);
}

DataSource.prototype.getComments = function (postId) {
    return this.store.comments.filter(comment => comment.postId === postId);
}

DataSource.prototype.unsubscribe = function (subscriber) {
    const index = this.subscribers.indexOf(subscriber);
    this.subscribers.splice(index, 1);
};

DataSource.prototype.inform = function () {
    this.subscribers.forEach(cb => cb());
};

const AppDataSource = new DataSource();

export default AppDataSource;