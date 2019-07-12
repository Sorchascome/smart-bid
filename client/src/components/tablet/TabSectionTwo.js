import React, { Component } from 'react'

// Components
import OurProducts from './OurProducts'
import TabSectionTwoMain from './TabSectionTwoMain'



export default class SectionTwo extends Component {
    render() {
            return (
                <div className="TabSectionTwo">
                    <div className="section_two_top">
                        <OurProducts />
                    </div>
                    <div className="section_two_main">
                        <TabSectionTwoMain />
                    </div>
                </div>
            )
        }
}
