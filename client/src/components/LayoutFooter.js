import React, { Component } from 'react'

// Images
import logo from '../uploads/footer_logo.png'
import point from '../uploads/point.png'
import envelope from '../uploads/envelope.png'
import lock from '../uploads/lock.png'
import privacy from '../uploads/privacy.png'

export default class LayoutFooter extends Component {
    render() {
        return (
            <div className="section_footer desk">
                <a className="blogo_wrapper" href="/"><div className={"bottomLogo slide " + ((this.props.show) ? '' : 'hidden')}><img src={logo} alt='logo'></img></div></a>
                <div className={"bottomInfo slide " + ((this.props.show) ? "" : "hidden")}>
                    <a className="info_bar" href="/privacy"><img src={lock} alt='lock'></img><span>Privacy policy</span></a>
                    <span className="info_bar"><img src={point} alt='point'></img><span>Yigal Alon 94, Tel-Aviv, Israel</span></span>
                    <span className="info_bar"><img src={envelope} alt='envelope'></img><a href='mailto:contact@smart.bid'>contact@smart.bid</a></span>
                    <img width='200vw' className="privacy_img" src={privacy} alt='stamp'></img>
                </div>
            </div>
        )
    }
}
