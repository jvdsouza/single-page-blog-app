import Link from 'next/link'

const BlogPost = (props) => {
    return (
        <div>
            <h1>Hello welcome to {props.slug}</h1>
            <h1>blog post: {props.url.query.title}</h1>
            <div>
                {props.content.title}
            </div>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

BlogPost.getInitialProps = () => {
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

export default BlogPost