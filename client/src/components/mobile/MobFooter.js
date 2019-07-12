import React, { Component } from 'react'

// Components
import BottomTitle from './BottomTitle'
import MobGetStarted from './MobGetStarted'
import ThankYou from '../ThankYou'

// Logo
import logo from '../../uploads/footer_logo.png'
import point from '../../uploads/point.png'
import envelope from '../../uploads/envelope.png'

export default class MobFooter extends Component {
    render() {
        return (
            <div className='MobFooter'>
                <ThankYou />
                <div className="section_one_tab">
                    <BottomTitle />
                    <MobGetStarted />
                </div>
                <div className="section_footer">
                    <div className="bottomLogo"><img src={logo} alt='logo'></img></div>
                    <div className="bottomInfo">
                        <span className="info_bar"><img src={point} alt='point'></img><span>Yigal Alon 94, Tel-Aviv, Israel</span></span>
                        <span className="info_bar"><img src={envelope} alt='envelope'></img><span>contact@smart.bid</span></span>
                    </div>
                </div>
            </div>
        )
    }
}
