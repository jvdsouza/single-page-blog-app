import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const Post = (props) => (
        <Link as={`/${props.slug}`} href={`/blogpost?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
)

const Index = (props) => {
    return !props.postContent[0] ?
    (<h1>Loading...</h1>)
    :
    (
        <div>
            <h1>My blog - by me</h1>
            <div>
                {
                    props.postContent.map((post, i) => (
                        <li key={post._id}>
                            <Post 
                                slug={i}
                                title={post.title}
                            />
                            <br/>
                            <span>{post.body.slice(0, 20)}...</span>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

Index.getInitialProps = () => {
    return fetch(`http://localhost:3001/home`)
        .then(response => {
            return response.json()
        })
        .then(posts => {
            return {postContent: posts.reverse()}
        })
        .catch(err => console.log(err))
} 

export default Index