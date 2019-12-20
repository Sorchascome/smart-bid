import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import withElementsAppear from './withElementsAppear'

class GetStarted extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        return (
            <div ref = {ref => this.Section = ref} className="GetStarted hidden slide">
                <Link to='/contact'>
                    <button className="button_get_started"><span>Request a Demo</span></button>
                </Link>
            </div>
        )
    }
}

export default withElementsAppear(GetStarted)
