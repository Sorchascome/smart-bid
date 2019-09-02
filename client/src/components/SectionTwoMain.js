import React, { Component } from 'react'

// Components
import MenuItem from './MenuItem'
import MenuListItem from './MenuListItem'
import RequestDemo from './RequestDemoAlt'

// Icons
import ai from '../uploads/cloud.png'
import diamond from '../uploads/diamond.png'
import cloud from '../uploads/ai.png'
import glass from '../uploads/glass.png'

export default class SectionTwoMain extends Component {
    render() {
        let list = [
            'Smart.bid Tracking',
            'Smart.bid Analytics',
            'Smart.bid’s ad server',
            'Smart.bid RTB',
            'Smart.bid Affiliate Program',
        ]

        return (
            <div className="SectionTwoMain alt">
                <div className="SectionTwoMain_column">
                    <MenuItem show={this.props.show} id={0} delay={0} hasIcon={true} icon={ai} title={'Predictive BI Platform'} text={'Our unified BI hub helps you visualize today’s most important business insights and predict tomorrow’s customer behavior.'}/>
                    <MenuItem show={this.props.show} id={1} delay={3} hasIcon={true} icon={glass} title={'Prediction As A Service'} text={'Connect your existing data stream to our best-in-class predictive technology. Optimize your business with prediction-driven decisions. '}/>
                </div>
                <div className="SectionTwoMain_column">
                    <MenuListItem list={list} show={this.props.show} id={2} delay={1} hasIcon={true} icon={cloud} title={'MarTechHub'} text={'Our next-generation marketing technology, combined with Predictive BI, enables brands to plan, buy, analyze, predict and automate the entire marketing cycle with:'}/>
                </div>
                <div className="SectionTwoMain_column">
                    <MenuItem show={this.props.show} id={3} delay={2} hasIcon={true} icon={diamond} title={'Predictive CI Platform'} text={'Predict your customer’s next move. Automate your marketing with personalized dynamic messaging to reach high-value customers in the right way, at the right time, and on the right channel.'}/>
                    <RequestDemo show={this.props.show} id={0} title={'Request a demo'} button={'Get started'}/>
                </div>
            </div>
        )
    }
}
