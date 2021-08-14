import React from 'react';


import {Blog} from '../Blog/Blog'
import { data } from '../../data/data.js';

import './BlogList.css';

export const BlogList = () => (
    <div className = 'blogList'>
    {data.map((post, index)=> (
        <Blog title = {post.title} text={post.body} key={index}>
        <p>testtt</p>
        <p>testtt</p>
        <p>testtt</p>
        </Blog>
    ))}    
    </div>
);
