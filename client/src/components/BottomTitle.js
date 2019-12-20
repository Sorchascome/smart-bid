import React, { Component } from 'react'
import GetStarted from './GetStarted'
import withFallingLetters from './withFallingLetters'

class BottomTitle extends Component {
    
    componentDidUpdate() {
        if (this.props.isVisible) this.props.triggerLetterfall(this.falling)
    }

    render() {
        return (
            <div className='BottomTitle hidden slide' ref={ref => this.falling = ref}>
                <div className={"bottom_title_top_title slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    let’s begin
                </div>
                <div className="bottom_title_main_title trigger">
                    <div>
                        Request a Demo for your business!
                    </div>
                </div>
                <div className={"bottom_title_subtitle slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    We'll show you how Smart.bid can grow your business with our 360° Predictive Hub! 
                </div>
                <GetStarted/>
            </div>
        )
    }
}

export default withFallingLetters(BottomTitle)
