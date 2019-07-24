import React, { Component } from 'react'

// Components
import PrivacyPage from '../components/PrivacyPage'

// Images
import logo from '../uploads/footer_logo.png'
import point from '../uploads/point.png'
import envelope from '../uploads/envelope.png'
import lock from '../uploads/lock.png'
import privacy from '../uploads/privacy.png'


export default class Privacy extends Component {
    render() {
        return (
            <div className="Privacy">
                <div className="privacy_header">
                    <a href="/"><div className="privacyLogo"></div></a>       
                </div>
                <PrivacyPage />
                <div className="section_footer desk">
                    <a href="/"><div className="bottomLogo"><img src={logo} alt='logo'></img></div></a>
                    <div className="bottomInfo">
                        <a className="info_bar" href="/privacy"><img src={lock} alt='lock'></img><span>Privacy policy</span></a>
                        <span className="info_bar"><img src={point} alt='point'></img><span>Yigal Alon 94, Tel-Aviv, Israel</span></span>
                        <span className="info_bar"><img src={envelope} alt='envelope'></img><span>contact@smart.bid</span></span>
                        <img width='200vw' className="privacy_img" src={privacy} alt='stamp'></img>
                    </div>
                </div>
            </div>
        )
    }
}
