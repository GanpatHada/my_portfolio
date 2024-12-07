import React from 'react'
import './Blogs.css'
import blogs from '../../Blogs.json'
const Blogs = () => {
  return (
    <div id='blogs-page' className='app-pages'>
        <header>
            <h1>My Blogs</h1>
        </header>
        <main className='app-page-content'>
              <p>{blogs.length===0&&'No blogs available'}</p>
        </main>
      
    </div>
  )
}

export default Blogs
