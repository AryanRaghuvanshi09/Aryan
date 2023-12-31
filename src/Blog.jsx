import React from 'react'
import './blog.css';
import Article from './Article'
import blog01 from './assets/blog01.png';
import blog02 from './assets/blog02.png';
import blog03 from './assets/blog03.png';
import blog04 from './assets/blog04.png';
import blog05 from './assets/blog05.png';
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
     <div className='gpt3__blog-heading'>
      <h1 className='gradient-text'></h1>
     </div>
     <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article imgUrl={blog01} date="Oct 2, 2023" title= " Open AI is the future. Let us explore how it is?"  />
      </div>
      <div className='gpt3__blog-container_groupB'>
      <Article imgUrl={blog02} date="Oct 2, 2023" title= " Open AI is the future. Let us explore how it is?"  />
      <Article imgUrl={blog03} date="Oct 2, 2023" title= " Open AI is the future. Let us explore how it is?"  />
      <Article imgUrl={blog04} date="Oct 2, 2023" title= " Open AI is the future. Let us explore how it is?"  />
      <Article imgUrl={blog05} date="Oct 2, 2023" title= " Open AI is the future. Let us explore how it is?"  />
      </div>
     </div>
    </div>
  )
}

export default Blog
