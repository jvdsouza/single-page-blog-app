import Link from 'next/link'
import BlogContent from '../components/blog-content'

const BlogPost = (props) => {
    return (
        <div>
            <h1>blog post: {props.url.query.title}</h1>
            <BlogContent message={"there, user"}/>
        </div>
    )
}

export default BlogPost