import React, { Component } from 'react'

import OurClients from './OurClients'
import ClientsPanel from './ClientsPanel'
import withElementsAppear from './withElementsAppear'

class Clients extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        return (
            <div className='Clients' ref = {ref => this.Section = ref}>
                <OurClients show={this.props.isVisible} />
                <ClientsPanel show={this.props.isVisible} />                
                <span className="hexgroup_large_blue hidden_elems hidden_left slide"></span>
                <span className="hex_part_blue hidden_elems hidden_right slide"></span>
                <span className="polysmall_blue hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}

export default withElementsAppear(Clients)
