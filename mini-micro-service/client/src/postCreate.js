import React, { useState } from 'react'
import axios from 'axios'




const PostCreate = () => {
    const [title, setTitle] = useState('')
    const onSubmit = async (event) => {
        event.preventDefault();
    
        await axios.post(`http://localhost:4000/posts`, {
            title: title
        })
        setTitle('')
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Title</label>
                {/* two way data binding */}
                <input value={title} onChange={(event) => setTitle(event.target.value)} className="form-control" />
            </div>
            <button className="btn-primary">Submit</button>
        </form>
    </div>
}

export default PostCreate;