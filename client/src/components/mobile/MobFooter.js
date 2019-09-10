import React, { Component } from 'react'

// Components
import BottomTitle from './BottomTitle'

import ThankYou from '../ThankYou'

// Images
import logo from '../../uploads/footer_logo.png'
import point from '../../uploads/point.png'
import envelope from '../../uploads/envelope.png'
import lock from '../../uploads/lock.png'
import privacy from '../../uploads/privacy.png'

export default class MobFooter extends Component {
    render() {
        return (
            <div className='MobFooter'>
                <ThankYou />
                <div className="section_one_tab">
                    <BottomTitle />
                </div>
                <div className="section_footer">
                    <div className="bottomLogo"><img src={logo} alt='logo'></img></div>
                    <div className="bottomInfo">
                        <span className="info_bar"><img src={point} alt='point'></img><span>Yigal Alon 94, Tel-Aviv, Israel</span></span>
                        <span className="info_bar"><img src={envelope} alt='envelope'></img><a href='mailto:contact@smart.bid'>contact@smart.bid</a></span>
                        <a className="info_bar" href="/privacy"><img src={lock} alt='lock'></img><span>Privacy policy</span></a>
                        <img className="privacy_img" src={privacy} alt='stamp'></img>
                    </div>
                </div>
            </div>
        )
    }
}
