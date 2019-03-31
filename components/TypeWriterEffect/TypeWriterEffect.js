import React, {Component} from 'react';

class TypeWriter extends Component {
    constructor() {
        super();
        this.state = {
            letterCount: 0,
            sentencePrinted: '',
            minDelay: 100,
            maxDelay: 300
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
            setTimeout(this.delayedEffect, Math.random()*(this.state.maxDelay-this.state.minDelay) + this.state.minDelay)
        }
    }

    componentDidMount() {
       this.delayedEffect()
    }

    render() {
        const sentence = this.state.sentencePrinted
        return (
            <span>{sentence}</span>
        )
    }
}

export default TypeWriter;