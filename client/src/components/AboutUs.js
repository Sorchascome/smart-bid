import React, { Component } from 'react'

import FewWords from './FewWords'

// Helpers
import { componentAppears } from '../helpers/componentAppears'
import { elementHandler } from '../helpers/elementHandler'

export default class AboutUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.AboutUs'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
    }
    
    elementsAppear() {
        elementHandler(this, this.elementsAppear);
    }

    componentDidMount() {
        componentAppears(this, this.elementsAppear);
    }

    render() {
        return (
            <div className='AboutUs desk'>
                <FewWords show={this.state.show} />
                <span className="hexgroup_white hidden_elems hidden_alt slide"></span>
                <span className="hex_white hidden_elems hidden slide"></span>
                <span className="polysmall_nosh hidden_elems hidden slide"></span>
            </div>
        )
    }
}
