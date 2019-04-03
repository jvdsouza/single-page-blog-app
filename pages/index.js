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
        <div className="main" style={{height: "100vh"}}>
            <Head>
                <title>My Blog</title>
                <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum tincidunt orci nulla, quis venenatis diam facilisis 
                        vel. Nullam posuere tortor vel mauris vestibulum dictum. Vestibulum 
                        ut libero pulvinar, aliquam sapien vitae, hendrerit ligula. In ac 
                        auctor eros. Vestibulum ante ipsum primis in faucibus orci luctus et 
                        ultrices posuere cubilia Curae; Nullam ac efficitur dolor, et luctus ipsum. 
                        Ut rutrum dignissim ligula, id sagittis ex feugiat sit amet. Aliquam varius, 
                        justo ac scelerisque volutpat, purus nulla aliquet enim, et cursus augue 
                        nulla vitae turpis. Duis eu odio mattis, finibus leo in, ultricies 
                        risus. Suspendisse non dictum sapien. Duis sit amet auctor ligula, feugiat 
                        dapibus urna. Integer id augue nec mauris pellentesque accumsan eget eu 
                        ex. Integer ac lacinia erat, at aliquet purus.
                    </p>
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