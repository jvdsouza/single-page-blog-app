import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import Card from '../components/BlogCard/BlogCard';
import TypeWriter from '../components/TypeWriterEffect/TypeWriterEffect';

const Post = (props) => (
        <Link prefetch href={`/blogpost?title=${props.title}`}>
            <a>{props.children}</a>
        </Link>
)

const Index = (props) => {
    return !props.postContent ?
    (<h1>Loading...</h1>)
    :
    (
        <div className="main" style={{height: "100vh"}}>
            <Head>
                <title>My Blog</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Sriracha" rel="stylesheet"/>
                <link rel="stylesheet" href="./static/blog.css"/>
                <script type="text/javascript" src="./static/zenscroll-min.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div id="header-border">
                <div id="header-wrapper">
                    <h1 id="header"><TypeWriter sentence={"My Blog - By Me."} /></h1>
                    <p>Occasional dissections of life events</p>
                    <br/>
                    <a className="f6 link dim ba bw1 ph3 pv2 mb2 dib white" href="#blog">Begin Reading</a>
                </div>
            </div>
            <br/>
            <div id="blog">
                <div className='border-wrapper'>
                    <p id="introduction">
                        Hello, welcome to my blog; by me. Currently this blog is under construction,
                        so the posts are bare and merely there to test the blog. 
                    </p>
                    <ul style={{
                        listStyleType: 'none'
                        }}>
                        {
                            props.postContent.map((post, i) => (
                                    <li key={post._id}>
                                        <Card>
                                            <Post title={post.title}>
                                                <div>
                                                    <span>{post.title}</span>
                                                    <span>
                                                        {post.created_at.slice(0, 10)}
                                                    </span>
                                                </div>
                                            </Post>
                                        </Card>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
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