import React, { Component } from 'react'

// Components
import OurProducts from './OurProducts'
import SectionTwoMain from './SectionTwoMain'
import withElementsAppear from './withElementsAppear'

class SectionTwo extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        return (
            <div className="SectionTwo" ref = {ref => this.Section = ref}>
                <div className="section_two_top">
                    <OurProducts />
                </div>
                <div className="section_two_main">
                    <SectionTwoMain />
                </div>
                <span className="hexgroup hidden_elems first hidden_alt slide"></span>
                <span className="hex first hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}

export default withElementsAppear(SectionTwo)
