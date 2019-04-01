//A "card" to encapsulate each blog post in
import React, {Component} from 'react';
import Head from 'next/head';

class Card extends Component {
    render() {
        return(
            <div className="blogCards">
                <Head>
                <link rel="stylesheet" href="./static/BlogCard.css"/>
                </Head>
                
                {this.props.children}
            </div>
        )
    }
}

export default Card;