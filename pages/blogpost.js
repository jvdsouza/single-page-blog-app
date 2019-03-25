import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

const BlogPost = (props) => {
    const title = props.url.query.title;
    
    return !props.content[0].title ? 
        <h1>Loading...</h1>
        :
        (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
                <link rel="stylesheet" href="./static/blog.css"/>
            </Head>
            <h1>blog post: {title}</h1>
            <div style={{marginBottom: "10px"}}>
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
    return fetch(`${process.env.REACT_APP_APISITE}/${title}`)
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