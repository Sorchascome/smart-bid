import React, { Component } from 'react'

export default class GetStarted extends Component {
    render() {
        return (
            <div className="GetStarted">
                <input className="inputfield_email" type="email" placeholder="Enter Your Email"></input>
                <button className="button_get_started"><span>Get started</span></button>
            </div>
        )
    }
}
