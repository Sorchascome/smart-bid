import React, { Component } from 'react'

export default class RequestDemo extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            let Component = document.querySelector(".rqd" + this.props.id);
            setTimeout(() => {
                Component.classList.remove('hidden_alt')
                Component.style.animation = "textslide-backwards 0.25s 1";
            }, 1550);
        }
    }

    render() {
        return (
            <div className={"hidden_alt slide RequestDemo rqd" + this.props.id}>
                <div className="demo_title">
                    {this.props.title}
                </div>
                <div className="demo_input">
                    <input className="inputfield_email" type="email" placeholder="Enter Your Email"></input>
                    <button className="button_get_started"><span>{this.props.button}</span></button>
                </div>
            </div>
        )
    }
}
