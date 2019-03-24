import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const BlogPost = (props) => {
    const title = props.url.query.title;
    
    return !props.content[0].title ? 
        <h1>Loading...</h1>
        :
        (
        <div>
            <h1>Hello welcome to {title}</h1>
            <h1>blog post: {title}</h1>
            <div>
                {props.content[0].title} 
                <br/>
                {props.content[0].body} 
            </div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

BlogPost.getInitialProps = (context) => {
    const {title} = context.query
    return fetch(`http://localhost:3001/${title}`)
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

export default BlogPost