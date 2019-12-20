import React, { Component } from 'react'

import FewWords from './FewWords'

import withElementsAppear from './withElementsAppear'

class AboutUs extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        return (
            <div className='AboutUs desk' ref = {ref => this.Section = ref}>
                <FewWords show={this.props.isVisible} />
                <span className="hexgroup_white hidden_elems hidden_alt slide"></span>
                <span className="hex_white hidden_elems hidden slide"></span>
                <span className="polysmall_nosh hidden_elems hidden slide"></span>
            </div>
        )
    }
}

export default withElementsAppear(AboutUs)