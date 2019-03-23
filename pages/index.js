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
            <Post slug='first' title='my first post' />
            <Post slug='second' title='My second blog post' />
            <Post slug='third' title='My third post' />
            <Post slug='fourth' title='Fourth post' />
            <Post slug='fifth' title='my final post' />
        </div>
    )
}

export default Index