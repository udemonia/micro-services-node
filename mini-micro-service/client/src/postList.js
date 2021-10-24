import React, { useState, useEffect } from "react";
import axios from 'axios';


const PostList = () => {
    
    const [ posts, setPosts ] = useState({});
    

    const getPosts = async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data);
    }

    //* Life cycle react hook, the second argument []
    //* means we will only call this when the page loads...
    useEffect(() => {
        getPosts()
    }, [])

    //* gives us an array of all the values within an object
    const renderedPost = Object.values(posts).map((post) => {
        return <div 
            className="card" 
            key={post.id}
            style={{width: '30%', marginBottom: '20px'}}>
            <div className="card-body">
                <h3>{post.title}</h3>
            </div>
        </div>
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPost}
    </div>
}

export default PostList;