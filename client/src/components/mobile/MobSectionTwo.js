import React, { Component } from 'react'

// Components
import OurProducts from '../tablet/OurProducts'
import MobSectionTwoMain from './MobSectionTwoMain'



export default class MobSectionTwo extends Component {
    render() {
            return (
                <div className="TabSectionTwo mob">
                    <div className="section_two_top">
                        <OurProducts />
                    </div>
                    <div className="section_two_main">
                        <MobSectionTwoMain />
                    </div>
                </div>
            )
        }
}
