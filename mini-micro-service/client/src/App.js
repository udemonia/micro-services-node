import React from 'react';
import PostCreate from './postCreate';
import PostList from './postList';


const App = () => {
    return <div className="container">
        <h1>Create Post</h1>
        <PostCreate></PostCreate>
        <hr />
        <h1>Posts</h1>
        <PostList></PostList>
    </div>
}

export default App;