import React, { Component } from 'react'

import arrow from '../../uploads/btnarrow.png'

export default class TabRequestDemo extends Component {
    render() {
        return (
            <div className='TabRequestDemo'>
                <div className="demo_title">
                    Request a demo
                </div>
                <div className="demo_input tab">
                    <input className="inputfield_email" type="email" placeholder="Enter Your Email"></input>
                    <button className="button_get_started"><span>Get in touch</span><img alt="" src={arrow}></img></button>
                </div>
            </div>
        )
    }
}
