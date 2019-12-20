import React, { Component } from 'react'
import withFallingLetters from './withFallingLetters'

class Technology extends Component {
    
    componentDidUpdate() {
        if (this.props.isVisible) this.props.triggerLetterfall(this.falling)
    }

    render() {
        return (
            <div className={'Technology desk slide' + ((this.props.isVisible) ? '' : ' hidden_alt')} ref={ref => this.falling = ref}>
                <div className={"technology_top_title slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    Technology
                </div>
                <div className="technology_main_title hidden_alt trigger">
                    <div>
                        The Smart.bid Way
                    </div>
                </div>
                <div className={"technology_subtitle slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    The first end-to-end solution that solves the challenges of performance marketing with customer journey prediction technology.
                </div>
            </div>
        )
    }
}

export default withFallingLetters(Technology)
