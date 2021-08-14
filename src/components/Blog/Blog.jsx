import React from 'react';
import './Blog.css'

export const Blog = ({title, text, children}) => {


    return (
    <div className='blogItem'>
         <h3>{title}</h3>
        <p>{text}</p>
        {children}
    </div>


    )
}