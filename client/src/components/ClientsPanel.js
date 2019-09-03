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
        let arrows = [...document.querySelectorAll('.client_arrow')];
        arrows.map(arrow => arrow.removeEventListener('click', this.arrowHandler));

        let items = [...document.querySelectorAll('.ClientList')];
        items.forEach((item) => {
            item.classList.add('hidden_alt');
        })

        setTimeout(() => {
            this.setState({position: !this.state.position, items: clientHandler(!this.state.position)});
        }, 500);
    }
    
    componentDidUpdate() {
        let items=[...document.querySelectorAll('.ClientList')];
        let arrows = [...document.querySelectorAll('.client_arrow')];
        let showInterval = 250;

        setTimeout(() => {            
            items.forEach((item) => {
                setTimeout(() => {item.classList.remove('hidden_alt')}, showInterval);
                showInterval += 50;
            })
        }, 250);

        setTimeout(() => {            
            arrows.map(arrow => arrow.addEventListener('click', this.arrowHandler));
        }, 1500);
    }


    render() {
        return (
            <div className='client_panel hidden_elems hidden_alt slide'>
                <div className="client_arrow slide"><img src={arrow} alt='arrow' className='home_arrow'></img></div>
                <div className="ClientsPanel">
                    <ClientList items={this.state.items}/>
                </div>
                <div className="client_arrow slide"><img src={arrow} alt='arrow' className='home_arrow'></img></div>
            </div>
        )
    }
}