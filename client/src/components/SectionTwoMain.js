import React, { Component } from 'react'

// Components
import MenuItem from './MenuItem'
import RequestDemo from './RequestDemo'

// Icons
import ai from '../uploads/cloud.png'
import diamond from '../uploads/diamond.png'
import cloud from '../uploads/ai.png'
import glass from '../uploads/glass.png'

export default class SectionTwoMain extends Component {
    render() {
        return (
            <div className="SectionTwoMain">
                <div className="SectionTwoMain_top">
                    <MenuItem show={this.props.show} id={0} delay={0} hasIcon={true} icon={ai} title={'Predictive AI Marketing'} text={'Replace traditional data analysis with our AI Predictive Marketing platform to unlock your highest potential in ROI.'}/>
                    <MenuItem show={this.props.show} id={1} delay={1} hasIcon={true} icon={diamond} title={'Predictive AI Sales'} text={'In most online business fewer than 10% of customers are responsible for over 80% of sales. Smart.bid spots these leads in Real time!'}/>
                    <MenuItem show={this.props.show} id={2} delay={2} hasIcon={true} icon={cloud} title={'Customer Engagement'} text={'We enable high resolution customer profiling at scale, so that you can deliver the right message to the right lead at the right time.'}/>
                </div>
                <div className="SectionTwoMain_bottom">
                    <MenuItem show={this.props.show} id={3} delay={3} hasIcon={true} icon={glass} title={'AI Driven Risk Detection'} text={'The average online business losses over 25% of its income due to inferior and fraudulent conversions each year.'}/>
                    <RequestDemo show={this.props.show} id={0} title={'Request a Demo'} button={'Get started'}/>
                </div>
            </div>
        )
    }
}
