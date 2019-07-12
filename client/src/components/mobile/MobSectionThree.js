import React, { Component } from 'react'

// Components
import MobTechnology from './MobTechnology'
import TechMenu from '../tablet/TechMenu'



export default class MobSectionThree extends Component {
    render() {
            return (
                <div className="MobSectionThree">
                    <div className="section_three_mob">
                        <MobTechnology />
                        <span className="graph first"></span>
                        <span className="graph second"></span>
                    </div>
                    <div className="section_two_main">
                        <TechMenu />
                    </div>
                </div>
            )
        }
}
