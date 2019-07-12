import React, { Component } from 'react'

export default class TopTitle extends Component {
    render() {
        return (
            <div className='TopTitle'>
                <div className="tab_title">
                    <span className="tab_title_main">Unlock your business potential with AI driven</span> <span className="top_title_lb" style={{color: '#029ED6'}}>Predictions</span>
                </div>
                <div className="tab_subtitle">
                    Let us show you how valuable your data is.
                </div>
            </div>
        )
    }
}
