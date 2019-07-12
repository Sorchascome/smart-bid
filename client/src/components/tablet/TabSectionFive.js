import React, { Component } from 'react'

// Components
import MenuItem from '../MenuItem'
import RequestDemo from '../RequestDemo'


export default class TabSectionFive extends Component {

    render() {
        return (
        <div className='sectionfive'>
            <div className="our_products_top_title industries hidden_elems hidden_alt slide">
                Industries
            </div>
            <div className="SectionFive">
                <div className="SectionTwoMain">
                    <div className="SectionTwoMain_top">
                        <MenuItem id={4} delay={0} icon={''} title={'Customers Financial Services'} text={'As fresh data constantly flows in, our models adapt yielding instant and continuous actionable insights.'}/>
                        <MenuItem id={6} delay={2} icon={''} title={'Retail'} text={"Smart.bid's Predictive hub is constantly gathering data from both loyalty and non-loyalty customers activity, creating rich and ever-evolving customer profiles to yield a unique predictive customer status."}/>
                    </div>
                    <div className="SectionTwoMain_bottom">
                        <MenuItem id={5} delay={1} icon={''} title={'Gaming'} text={'With Smart.bid, you can place AI-powered decision making at the heart of your brand choices, to fuel better conversion rates and improved customer retention.'}/>  
                        <MenuItem id={7} delay={3} icon={''} title={'Services for Brands'} text={'With Smart.bid, you can place AI-powered decision making at the heart of your brand choices, to fuel better conversion rates and improved customer retention.'}/>                    </div>
                    </div>
                </div>
            <RequestDemo id={1} title={'Case studies'} button={'Receive further details'}/>
        </div>
        )
    }
}