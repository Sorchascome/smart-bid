import React, { Component } from 'react'

// Components
import BottomTitle from './BottomTitle'
import LayoutFooter from './LayoutFooter'

import withElementsAppear from './withElementsAppear'

class Footer extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        const elems = ['first', 'second', 'third', 'fourth', 'fifth']

        return (
            <div className='SectionOne bottom_section desk' ref = {ref => this.Section = ref}>
                <div className="section_one_bottom">
                    <BottomTitle />
                </div>

                <LayoutFooter show={this.props.isVisible}/>

                {elems.map(elem => <span key={elem} className={"bottompoly " + elem + " hidden slide"}></span>)}
                {elems.filter(elem => elem === 'fifth').map(elem => <span key={elem} className={"bottompolysmal " + elem + " hidden slide"}></span>)}

            </div>
        )
    }
}

export default withElementsAppear(Footer)