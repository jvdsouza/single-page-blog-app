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
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <h1>blog post: {title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.content[0].body}} style={{marginBottom: "10px"}}>
                {/* {props.content[0].body}  */}
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