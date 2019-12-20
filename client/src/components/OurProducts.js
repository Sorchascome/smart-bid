import React, { Component } from 'react'
import withFallingLetters from './withFallingLetters'
import withElementsAppear from './withElementsAppear'

class OurProducts extends Component {
    
    componentDidUpdate() {
        if (this.props.isVisible) this.props.triggerLetterfall(this.falling)
    }

    render() {
        return (
            <div className={'OurProducts desk slide' + ((this.props.isVisible) ? '' : ' hidden_alt')} ref={ref => this.falling = ref}>
                <div className={"our_products_top_title slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    PRODUCT
                </div>
                <div className="our_products_main_title trigger hidden">
                    <div>
                        Data-driven Predictive Solutions
                    </div>
                </div>
                <div className={"our_products_subtitle slide" + ((this.props.isVisible) ? '' : ' hidden_alt')}>
                    Whether you’re a marketer, sales manager or data analyst, Smart.bid’s predictive technology gives you insights on customers’ lifetime value and behavior.
                </div>
            </div>
        )
    }
}

export default withElementsAppear(withFallingLetters(OurProducts))
