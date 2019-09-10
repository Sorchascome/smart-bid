import React, { Component } from 'react'

import MobGetStarted from './MobGetStarted'

export default class BottomTitle extends Component {
    render() {
        return (
            <div className='BottomTitle'>
                <div className="few_words_top_title">
                    let’s begin
                </div>
                <div className="tab_title">
                    <span className="tab_title_main">Request a demo for your business!</span>
                </div>
                <div className="tab_subtitle">
                    We'll show you how Smart.bid can grow your business with our 360° Predictive Hub! 
                </div>
                <MobGetStarted />
            </div>
        )
    }
}
