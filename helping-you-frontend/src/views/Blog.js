import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Blog = () => {

    const { id } = useParams()

    let [blog, setBlog] = useState([])

    let getBlogs = async () => {
        console.log(id);
        const res = await axios.get(`http://127.0.0.1:8000/blog/api/blogs/blog/${id}/`)
        let data = res.data
        console.log(data);
        setBlog(data)
    }

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <p>autor: {blog.author}</p>
        </div>
    )
}

export default Blog