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
                        <p>
                        Hello, welcome to my blog; by me. I've finally finished developing the bones and flesh of this blog, and possibly be working on it in the future. 
                        However, this blog is now open for all.
                        </p>
                        <p>
                        A little about me: I'm a 23 year old self-taught software developer, graduating from Monash University with a Bachelor of Civil Engineering.
                        I've already finished all my subjects, so nothing stands in the way of me learning more about software engineering and development. This blog
                        was meant to be my first big full-stack web developer project I worked on alone (and of course with the help of Google search). The blog consists
                        of using a front-end created with Create-React-App 2.0, a back-end using node.js and express.js, and the MongoDB Atlas Cloud Database (utilised with
                        the mongoose ODM).
                        </p>
                        <p>
                        You can learn more about me on my portfolio, which can be found <a rel="noopener noreferrer" target="_blank" href="https://jasondsouza.dev">here</a>.
                        </p>
                    </p>
                    <span id='articles'>Articles</span>
                    <ul style={{
                        listStyleType: 'none'
                        }}>
                        {
                            props.postContent.map((post, i) => (
                                    <li key={post._id}>
                                        <Card>
                                            <Post title={post.title}>
                                                <div>
                                                    <span>> {post.title}</span>
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