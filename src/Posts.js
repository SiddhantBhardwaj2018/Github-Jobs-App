import React from 'react'

const Posts = ( { posts , loading } ) => {

    return (
        loading ? <div><h1>Loading ...</h1></div> : 
        posts.length === 0 ? 
        <h1>There are no job postings</h1>  :     
        <ul  className = "list-group mb-4">
            <div className="container">
                
            {
                
                posts.map(post => (
                    <li key={post.id} className='list-group-item'>
                        <a href={post['url']}>{post['title']} - {post['location']} - {post['company']}</a>
                    </li>
                ))
                    
            }
            </div>
        </ul>
        
    )
}

export default Posts
