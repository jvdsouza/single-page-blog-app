import Link from 'next/link'

const Post = props => (
    <li>
        <Link as={`/${props.slug}`} href={`/blogpost?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = () => {
    return(
        <div>
            <h1>Single page blog - by me</h1>
            <Post slug='first' title='first blog post' />
            <Post slug='second' title='second blog post' />
            <Post slug='last' title='final blog post' />
        </div>
    )
}

export default Index