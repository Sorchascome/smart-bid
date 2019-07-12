import React, { Component } from 'react'

import OurClients from '../tablet/OurClients'
import MobClientsPanel from './MobClientsPanel'

export default class TabClients extends Component {
    render() {
        return (
            <div className='TabClients'>
                <OurClients />
                <MobClientsPanel />
            </div>
        )
    }
}
