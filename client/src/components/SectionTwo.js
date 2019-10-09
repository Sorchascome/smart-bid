import React, { Component } from 'react'

// Components
import OurProducts from './OurProducts'
import SectionTwoMain from './SectionTwoMain'

// Helpers
import { componentAppears } from '../helpers/componentAppears'
import { elementHandler } from '../helpers/elementHandler'


export default class SectionTwo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.SectionTwo'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
    }
    
    elementsAppear() {
        elementHandler(this, this.elementsAppear)
    }

    componentDidMount() {
        componentAppears(this, this.elementsAppear);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.elementsAppear);
    }

    render() {
        return (
            <div className="SectionTwo">
                <div className="section_two_top">
                    <OurProducts show={this.state.show}/>
                </div>
                <div className="section_two_main">
                    <SectionTwoMain show={this.state.show}/>
                </div>
                <span className="hexgroup hidden_elems first hidden_alt slide"></span>
                <span className="hex first hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}
