import React, { Component } from 'react'

export default class GetStarted extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            let Component = document.querySelector('.GetStarted');
            setTimeout(() => {
                Component.classList.remove('hidden')
                Component.style.animation = "textslide 0.25s 1";
            }, 1200);
        }
    }

    render() {
        return (
            <div className="GetStarted hidden slide">
                <input className="inputfield_email" type="email" placeholder="Enter Your Email"></input>
                <button className="button_get_started"><span>Get started</span></button>
            </div>
        )
    }
}
