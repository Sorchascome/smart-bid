import React, { Component } from 'react'

import OurClients from './OurClients'
import ClientsPanel from './ClientsPanel'

import { componentAppears } from '../helpers/componentAppears'
import { elementHandler } from '../helpers/elementHandler'

export default class Clients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.Clients',
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
            <div className='Clients'>
                <OurClients show={this.state.show} />
                <ClientsPanel show={this.state.show} />                
                <span className="hexgroup_large_blue hidden_elems hidden_left slide"></span>
                <span className="hex_part_blue hidden_elems hidden_right slide"></span>
                <span className="polysmall_blue hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}
