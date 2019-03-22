import Link from 'next/link';
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';

const BlogContent = (props) => {
    return (
        <div>
            <h1>Hello {props.message}</h1>
            <div>
                {props.content}
            </div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

BlogContent.getInitialProps = () => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return {content: data}
            })
            .catch(err => {
                return {content: err}
            })
}
            
export default BlogContent;