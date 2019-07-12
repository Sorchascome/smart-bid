import React, { Component } from 'react'

export default class SBlogo extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            let Component = document.querySelector('.SBlogo');
            setTimeout(() => {Component.classList.remove('hidden')}, 300);}
    }

    render() {
        return (
            <div className='SBlogo slide hidden'>
            </div>
        )
    }
}
