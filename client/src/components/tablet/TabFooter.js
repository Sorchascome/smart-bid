import React, { Component } from 'react'

// Components
import BottomTitle from '../BottomTitle'
import GetStarted from './GetStarted'
import ThankYou from '../ThankYou'

// Images
import logo from '../../uploads/footer_logo.png'
import point from '../../uploads/point.png'
import envelope from '../../uploads/envelope.png'
import lock from '../../uploads/lock.png'
import privacy from '../../uploads/privacy.png'


export default class SectionOne extends Component {
    render() {
        return (
            <div className='SectionOne bottom_section tab'>
                <ThankYou />
                <div className="section_one_bottom">
                    <BottomTitle/>
                    <GetStarted />
                </div>
                <div className="section_footer">
                    <div className="bottomLogo hidden_alt slide"><img src={logo} alt='logo'></img></div>
                    <div className="bottomInfo hidden_alt slide">
                        <div>
                            <span className="info_bar"><img src={point} alt='point'></img><span>Yigal Alon 94, Tel-Aviv, Israel</span></span>                          
                            <img className="privacy_img" src={privacy} alt='stamp'></img>
                        </div>
                        <div>
                            <span className="info_bar"><img src={envelope} alt='envelope'></img><span>contact@smart.bid</span></span>
                            <a className="info_bar" href="/privacy"><img src={lock} alt='lock'></img><span>Privacy policy</span></a>
                        </div>
                    </div>
                </div>
                <span className="bottompoly first"></span>
                <span className="bottompoly second"></span>
                <span className="bottompoly third"></span>
                <span className="bottompoly fifth"></span>
                <span className="bottompolysmall first"></span>
                <span className="bottompolysmall third"></span>
                <span className="bottompolysmall fourth"></span>
            </div>
        )
    }
}
