import React, { Component } from 'react'

// Components
import MenuItem from './MenuItem'
import MenuListItem from './MenuListItem'
import RequestDemo from './RequestDemoAlt'

// Icons
import ai from '../uploads/bi.gif'
import diamond from '../uploads/ci.gif'
import cloud from '../uploads/hub.gif'
import glass from '../uploads/serv.gif'
import aist from '../uploads/bi_st.jpg'
import diamondst from '../uploads/ci_st.jpg'
import cloudst from '../uploads/hub_st.jpg'
import glassst from '../uploads/serv_st.jpg'

import withElementsAppear from './withElementsAppear'

class SectionTwoMain extends Component {

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
            <div className={"SectionTwoMain alt" + ((this.props.isVisible) ? '' : ' hidden')} ref={ref => this.Section = ref}>
                <div className="SectionTwoMain_column">
                    <MenuItem show={this.props.isVisible} id={0} delay={0} hasIcon={true} icon={ai} static={aist} title={'Predictive BI Platform'} text={'Our unified BI hub helps you visualize today’s most important business insights and predict tomorrow’s customer behavior.'}/>
                    <MenuItem show={this.props.isVisible} id={1} delay={3} hasIcon={true} icon={glass} static={glassst} title={'Prediction As A Service'} text={'Connect your existing data stream to our best-in-class predictive technology. Optimize your business with prediction-driven decisions. '}/>
                </div>
                <div className="SectionTwoMain_column">
                    <MenuListItem list={list} show={this.props.isVisible} id={2} delay={1} hasIcon={true} icon={cloud} static={cloudst} title={'MarTechHub'} text={'Our next-generation marketing technology, combined with Predictive BI, enables brands to plan, buy, analyze, predict and automate the entire marketing cycle with:'}/>
                </div>
                <div className="SectionTwoMain_column">
                    <MenuItem show={this.props.isVisible} id={3} delay={2} hasIcon={true} icon={diamond} static={diamondst} title={'Predictive CI Platform'} text={'Predict your customer’s next move. Automate your marketing with personalized dynamic messaging to reach high-value customers in the right way, at the right time, and on the right channel.'}/>
                    <RequestDemo show={this.props.isVisible} id={0} title={'Request a demo'} button={'Request a Demo'}/>
                </div>
            </div>
        )
    }
}

export default withElementsAppear(SectionTwoMain)
