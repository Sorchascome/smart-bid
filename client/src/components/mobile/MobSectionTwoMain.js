import React, { Component } from 'react'

// Components
import MenuItem from '../MenuItem'
import MenuListItem from '../MenuListItem'
import TabRequestDemo from '../tablet/TabRequestDemo'

// Icons
import ai from '../../uploads/bi.svg'
import rob1 from '../../uploads/ci.svg'
import cloud from '../../uploads/mth.svg'
import tabai from '../../uploads/serv.svg'

export default class TabSectionTwoMain extends Component {
    render() {
        let list = [
            'Smart.bid Tracking',
            'Smart.bid Analytics',
            'Smart.bid’s Ad Server',
            'Smart.bid RTB',
            'Smart.bid Affiliate Program',
            'Smart.bid Landing Page Builder'
        ]

        return (
            <div className="SectionTwoMain">
                <MenuItem  id={0} delay={0} hasIcon={true} icon={ai} title={'Predictive BI Platform'} text={'Our unified BI hub helps you visualize today’s most important business insights and predict tomorrow’s customer behavior.'}/>
                <MenuItem  id={1} delay={1} hasIcon={true} icon={rob1} title={'Predictive CI Platform'} text={'Predict your customer’s next move. Automate your marketing with personalized dynamic messaging to reach high-value customers in the right way, at the right time, and on the right channel.'}/>
                <MenuListItem list={list} show={this.props.show} id={2} delay={1} hasIcon={true} icon={cloud} title={'Unified MarTech Hub'} text={'Our next-generation marketing technology, combined with Predictive BI, enables brands to plan, buy, analyze, predict and automate the entire marketing cycle with:'}/>
                <MenuItem  id={4} delay={3} hasIcon={true} icon={tabai} title={'Prediction As A Service'} text={'Connect your existing data stream to our best-in-class predictive technology. Optimize your business with prediction-driven decisions.'}/>
                <TabRequestDemo  />
            </div>
        )
    }
}
