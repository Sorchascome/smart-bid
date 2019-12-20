import React, { Component } from 'react'
import withFallingLetters from './withFallingLetters'

class TopTitle extends Component {
    componentDidUpdate() {
        if (this.props.isVisible) this.props.triggerLetterfall(this.Title)
    }

    render() {
        return (
            <div className='TopTitle' ref={ref => this.Title = ref}>
                <div className="top_title trigger hidden slide">
                    <span style={{color: '#029ED6'}}>Predict</span> <span>your winning strategy</span> 
                </div>
                <div className="top_subtitle hidden slide">
                    Let us show you how valuable your data is.
                </div>
            </div>
        )
    }
}

export default withFallingLetters(TopTitle)
