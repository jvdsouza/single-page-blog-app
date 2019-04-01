import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Card from '../components/BlogCard/BlogCard';
import TypeWriter from '../components/TypeWriterEffect/TypeWriterEffect';

const Post = (props) => (
        <Link prefetch href={`/blogpost?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
)

const Index = (props) => {
    return !props.postContent ?
    (<h1>Loading...</h1>)
    :
    (
        <div style={{height: "100vh"}}>
            <Head>
                <title>My Blog</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
                <link rel="stylesheet" href="./static/blog.css"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div id="header-wrapper">
                <h1 id="header"><TypeWriter sentence={"My Blog - By Me"} /></h1>
            </div>
            <ul style={{
                listStyleType: 'none'
                }}>
                {
                    props.postContent.map((post, i) => (
                            <li key={post._id}>
                                <Card>
                                    <Post title={post.title}/>
                                    <span>
                                        {post.created_at.slice(0, 10)}
                                    </span>
                                    {/* <div dangerouslySetInnerHTML={{__html: post.body}}>
                                    </div> */}
                                </Card>
                            </li>
                        
                    ))
                }
            </ul>
            <div id="footer">
                <footer>Made by Jason, with NextJS for React</footer>
            </div>
        </div>
    )
}

Index.getInitialProps = () => {
    return fetch(`${process.env.REACT_APP_APISITE}/home`)
        .then(response => {
            return response.json()
        })
        .then(posts => {
            return {postContent: posts.reverse()}
        })
        .catch(err => console.log(err))
} 


export default Index