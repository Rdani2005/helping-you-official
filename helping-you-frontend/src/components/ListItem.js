import React from 'react'

import { Link } from 'react-router-dom'

const ListItem = ({ object }) => {
    return (
        <div>
            <Link to={`/blogs/blog/${object.id}`}>
                <h3>
                    {object.title}
                </h3>

            </Link>

        </div>
    )
}

export default ListItem