import React, {Component} from 'react';
import Head from 'next/head';

class TypeWriter extends Component {
    constructor() {
        super();
        this.state = {
            letterCount: 0,
            sentencePrinted: '',
            delay: 150
        }
    }

    TypeWriterPrint = () => {
        this.setState({
            sentencePrinted: this.state.sentencePrinted + this.props.sentence[this.state.letterCount],
            letterCount: this.state.letterCount + 1
        })
    }

    delayedEffect = () => {
        if(this.state.letterCount < this.props.sentence.length){
            this.TypeWriterPrint()
            setTimeout(this.delayedEffect, this.state.delay)
        }
    }

    componentDidMount() {
       this.delayedEffect()
    }

    render() {
        const sentence = this.state.sentencePrinted
        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="../../static/typewriter.css"/>
                </Head>
                <span id="heading">{sentence}</span>
            </div>
        )
    }
}

export default TypeWriter;