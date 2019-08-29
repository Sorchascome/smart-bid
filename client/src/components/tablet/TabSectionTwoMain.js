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
        let list = [
            'Smart.bid Tracking',
            'Smart.bid Analytics',
            'Smart.bid’s ad server',
            'Smart.bid RTB',
            'Smart.bid Affiliate Program',
        ]

        return (
            <div className="SectionTwoMain">
                <div className="SectionTwoMain_top">
                    <MenuItem  id={0} delay={0} hasIcon={true} icon={ai} title={'Predictive BI Platform'} text={'Our unified BI hub helps you visualize today’s most important business insights and predict tomorrow’s customer behavior.'}/>
                    <MenuItem  id={1} delay={1} hasIcon={true} icon={rob1} title={'Predictive CI Platform'} text={'Predict your customer’s next move. Automate your marketing with personalized dynamic messaging to reach high-value customers in the right way, at the right time, and on the right channel.'}/>
                </div>
                <div className="SectionTwoMain_top">
                    <MenuItem  id={2} delay={0} hasIcon={true} icon={drone} title={'Predictive AI Customer Engagement'} text={'We enable high resolution customer profiling at scale, so that you can deliver the right message to the right lead at the right time.'}/>
                    <MenuListItem list={list} id={3} delay={1} hasIcon={true} icon={rob2} title={'MarTechHub'} text={'Our next-generation marketing technology, combined with Predictive BI, enables brands to plan, buy, analyze, predict and automate the entire marketing cycle with:'}/>
                </div>
                <div className="SectionTwoMain_bottom">
                    <MenuItem  id={4} delay={3} hasIcon={true} icon={tabai} title={'Prediction As A Service'} text={'Online businesses lose 25% annually due to inferior and fraudulent conversions each year.'}/>
                    <TabRequestDemo  />
                </div>
            </div>
        )
    }
}
