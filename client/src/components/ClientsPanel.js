import React, { Component } from 'react'

// Components
import ClientList from './ClientList'

import arrow from '../uploads/Vector.svg'

// Helpers
import { clientHandler } from '../helpers/clientHandler'

export default class ClientsPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: clientHandler(true),
            position: true
        }

        this.arrowHandler = this.arrowHandler.bind(this);
    }

    arrowHandler() {
        this.setState({position: !this.state.position, items: clientHandler(!this.state.position)});
    }
    
    componentDidUpdate() {
        let items=[...document.querySelectorAll('.ClientList')];
        let showInterval = 250;

        setTimeout(() => {            
            items.forEach((item) => {
                setTimeout(() => {item.classList.remove('hidden_alt')}, showInterval);
                showInterval += 50;
            })
        }, 250);
    }


    render() {
        return (
            <div className='client_panel hidden_elems hidden_alt slide'>
                <div className="client_arrow slide" onClick={this.arrowHandler}><img src={arrow} alt='arrow' className='home_arrow'></img></div>
                <div className="ClientsPanel">
                    <ClientList items={this.state.items}/>
                </div>
                <div className="client_arrow slide" onClick={this.arrowHandler}><img src={arrow} alt='arrow' className='home_arrow'></img></div>
            </div>
        )
    }
}