import React, { Component } from 'react'

import rob from '../../uploads/rob.png'
import arrow from '../../uploads/btnarrow.png'

export default class TabRequestDemo extends Component {
    render() {
        return (
            <div className='TabRequestDemo'>
                <div className="demo_title">
                    Request a Demo
                </div>
                <div className="demo_input tab">
                    <input className="inputfield_email" type="email" placeholder="Enter Your Email"></input>
                    <button className="button_get_started"><span>Get Started</span><img alt="" src={arrow}></img></button>
                </div>
            </div>
        )
    }
}
