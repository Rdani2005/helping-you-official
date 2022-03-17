import axios from 'axios';
import React, { useEffect, useState } from 'react';

import ListItem from '../components/ListItem'


const BlogsPage = () => {

    let [blogs, setBlogs] = useState([])

    let getBlogs = async () => {
        const res = await axios.get('http://127.0.0.1:8000/blog/api/blogs/')
        let data = res.data
        console.log(data);
        setBlogs(data)
    }

    useEffect(() => {
        getBlogs()
    }, [])




    return (
        <div>
            <section>BlogsPage</section>
            <section>
                {blogs.map((blog, index) => (
                    <ListItem key={index} object={blog}/>
                ))}
            </section>
        </div>

        

    )
}

export default BlogsPage