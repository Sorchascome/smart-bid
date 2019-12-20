import React, { Component } from 'react'

// Components
import MenuItem from './MenuItem'
import RequestDemo from './RequestDemo'
import withElementsAppear from './withElementsAppear'


class SectionFive extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }


    render() {
        return (
        <div className='sectionfive' ref = {ref => this.Section = ref}>
            <div className="our_products_top_title industries hidden_elems hidden_alt slide">
                Industries
            </div>
            <div className="SectionFive">
                <div className="SectionTwoMain">
                    <div className="SectionTwoMain_top">
                        <MenuItem show={this.props.isVisible} id={6} delay={0} icon={''} title={'Retail'} text={"Research shows that improving customer retention by as little as 5% can increase profits up to 95%. Our platform predicts behavior for customers with the most potential to become loyal supporters, giving you an essential tool to grow."}/>
                        <MenuItem show={this.props.isVisible} id={4} delay={1} icon={''} title={'FinTech'} text={'Achieve the best conversion from first engagement to deposit and optimal engagement with existing customers. Build loyalty through high resolution customer profiling at scale, and delivering ongoing customized dynamic content.'}/>
                        <MenuItem show={this.props.isVisible} id={5} delay={2} icon={''} title={'Gaming'} text={'Our platform is able to build a unified profile for each player, predict their customer value, and optimize marketing messaging to turn high-value players into whales.'}/>
                    </div>
                    <div className="SectionTwoMain_bottom">
                        <MenuItem show={this.props.isVisible} id={7} delay={3} icon={''} title={'Services for Brands'} text={'With Smart.bid, you can place AI-powered decision making at the heart of your brand choices, to fuel better conversion rates and improved customer retention.'}/>
                        <RequestDemo show={this.props.isVisible} id={1} title={'Case studies'} button={'Request a Demo'}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withElementsAppear(SectionFive)