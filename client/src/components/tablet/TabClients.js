import React, { Component } from 'react'

import OurClients from './OurClients'
import ClientsPanel from '../ClientsPanel'

export default class TabClients extends Component {
    render() {
        return (
            <div className='TabClients'>
                <OurClients />
                <ClientsPanel />
                <span className="hexgroup_large_blue"></span>
            </div>
        )
    }
}
