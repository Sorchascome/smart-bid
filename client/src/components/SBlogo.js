import React, { Component } from 'react'
import withElementsAppear from './withElementsAppear'

export default class SBlogo extends Component {
    componentDidUpdate() {
        if (this.props.show === true) {
            setTimeout(() => {this.Section.classList.remove('hidden')}, 300);}
    }

    render() {
        return (
            <div ref = {ref => this.Section = ref} className='SBlogo slide hidden' />
        )
    }
}
