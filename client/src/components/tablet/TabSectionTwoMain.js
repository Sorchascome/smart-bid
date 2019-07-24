import React, { Component } from 'react'

// Components
import MenuItem from '../MenuItem'
import MenuListItem from './MenuListItem'
import TabRequestDemo from './TabRequestDemo'

// Icons
import ai from '../../uploads/cloud.png'
import rob1 from '../../uploads/diamond.png'
import drone from '../../uploads/ai.png'
import rob2 from '../../uploads/robot2.png'
import tabai from '../../uploads/tabai.png'

export default class TabSectionTwoMain extends Component {
    render() {
        let list = ['Analytics',
            'Real time tracking and Adserver',
            'Predictive BI',
            'Predictive PPC Facebook & Google management',
            'Predictive Affiliate program'
            ]

        return (
            <div className="SectionTwoMain">
                <div className="SectionTwoMain_top">
                    <MenuItem  id={0} delay={0} hasIcon={true} icon={ai} title={'Predictive AI Marketing'} text={'Replace traditional data analysis with our AI Predictive Marketing platform to unlock your highest potential in ROI.'}/>
                    <MenuItem  id={1} delay={1} hasIcon={true} icon={rob1} title={'Predictive AI Sales'} text={'In most online business fewer than 10% of customers are responsible for over 80% of business. Smart.bid spots these leads in real time!'}/>
                </div>
                <div className="SectionTwoMain_top">
                    <MenuItem  id={2} delay={0} hasIcon={true} icon={drone} title={'Predictive AI Customer Engagement'} text={'We enable high resolution customer profiling at scale, so that you can deliver the right message to the right lead at the right time.'}/>
                    <MenuListItem list={list} id={3} delay={1} hasIcon={true} icon={rob2} title={'MarTechHub'} text={'One stop shop for all marketing technology.'}/>
                </div>
                <div className="SectionTwoMain_bottom">
                    <MenuItem  id={4} delay={3} hasIcon={true} icon={tabai} title={'AI Driven Risk Detection'} text={'Online businesses lose 25% annually due to inferior and fraudulent conversions each year.'}/>
                    <TabRequestDemo  />
                </div>
            </div>
        )
    }
}
