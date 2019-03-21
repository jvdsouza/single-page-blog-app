import Link from 'next/link';
import React, {Component} from 'react';

class BlogContent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <h1>Hello {this.props.message}</h1>
        )
    }
}

export default BlogContent