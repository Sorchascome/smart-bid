import React, { Component } from 'react'
import withFallingLetters from './withFallingLetters'

class Services extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.triggerLetterfall(this.falling)
    }

    render() {
        return (
            <div className='Services slide' ref={ref => this.falling = ref}>
                <div className={"Services_top_title slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    Our Services
                </div>
                <div className="Services_main_title trigger hidden_alt slide">
                    <div>
                        The Only Unified MarTech Hub That Knows Your Business
                    </div>
                </div>
                <div className={"Services_subtitle slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    Learn about how Smart.bid is being utilized in the following channels.
                </div>
            </div>
        )
    }
}

export default withFallingLetters(Services)
