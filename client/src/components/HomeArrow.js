import React, { Component } from 'react'
/* eslint-disable */
import arrow from '../uploads/Vector.svg'

export default class HomeArrow extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.arrowAppears);
    }

    arrowAppears() {
        let homeArrow =  document.querySelector('.HomeArrow');
        if(window.scrollY > 325) {
            homeArrow.classList.remove('hidden_alt');
        } else {
            homeArrow.classList.add('hidden_alt');
        }
    }

    returnHome() {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    render() {
        return (
            <div className="HomeArrow hidden_alt slide" alt ="" onClick={this.returnHome}><img src={arrow} className='home_arrow'></img></div>
        )
    }
}
