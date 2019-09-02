import React, { Component } from 'react'

// Components
import MenuItem from './MenuItem'
import RequestDemo from './RequestDemo'

// Helpers
import { componentAppears } from '../helpers/componentAppears'
import { elementHandler } from '../helpers/elementHandler'


export default class SectionFive extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.sectionfive'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
    }

    elementsAppear() {
        elementHandler(this, this.elementsAppear)
    }

    componentDidMount() {
        componentAppears(this, this.elementsAppear);
    }

    render() {
        return (
        <div className='sectionfive'>
            <div className="our_products_top_title industries hidden_elems hidden_alt slide">
                Industries
            </div>
            <div className="SectionFive">
                <div className="SectionTwoMain">
                    <div className="SectionTwoMain_top">
                        <MenuItem show={this.state.show} id={6} delay={0} icon={''} title={'Retail'} text={"Research shows that improving customer retention by as little as 5% can increase profits up to 95%. Predicting behavior for customers with the most potential to become loyal supporters is essential to grow."}/>
                        <MenuItem show={this.state.show} id={4} delay={1} icon={''} title={'FinTech'} text={'Achieve the best conversion from first engagement to deposit and optimal engagement with existing customers. Build loyalty through high resolution customer profiling at scale, and delivering ongoing customized dynamic content.'}/>
                        <MenuItem show={this.state.show} id={5} delay={2} icon={''} title={'Gaming'} text={'Our platform is able to build a unified profile for each player, predict their customer value, and optimize marketing messaging to turn high-value players into whales.'}/>
                    </div>
                    <div className="SectionTwoMain_bottom">
                        <MenuItem show={this.state.show} id={7} delay={3} icon={''} title={'Services for Brands'} text={'With Smart.bid, you can place AI-powered decision making at the heart of your brand choices, to fuel better conversion rates and improved customer retention.'}/>
                        <RequestDemo show={this.state.show} id={1} title={'Case studies'} button={'Receive further details'}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}