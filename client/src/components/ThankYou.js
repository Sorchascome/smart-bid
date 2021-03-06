/* eslint-disable */

import React, { Component } from 'react'

import cross from'../uploads/Close.png'
import smile from'../uploads/smile.png'

export default class ThankYou extends Component {
    handleClose(e) {
        e.preventDefault();
        let thankyouPanel = [...document.querySelectorAll('.ThankYou')];
        thankyouPanel.forEach((target) => {
            target.classList.add('hidden_thankyou', 'hidden_alt');
        })
    }

    render() {
        return (
            <div className="ThankYou hidden_thankyou hidden_alt slide">
                <div className="thanks_panel hidden_alt slide">
                    <a className='thanks_close' onClick={this.handleClose} href='#'><img src={cross} alt='Close'></img></a>
                    <div className="thanks_panel_inner" >
                        <img className="thanks_logo" src={smile} alt='Close'></img>
                        <div className="thanks_main">Thank you!</div>
                        <div className="thanks_sub">An email will be sent to you shortly</div>
                    </div>
                    <button className="button_continue" onClick={this.handleClose}><span>Continue</span></button>
                </div>
            </div>
        )
    }
}
