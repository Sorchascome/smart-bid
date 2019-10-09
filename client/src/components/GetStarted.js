import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                <Link to='/request'>
                    <button className="button_get_started"><span>Request a Demo</span></button>
                </Link>
            </div>
        )
    }
}
