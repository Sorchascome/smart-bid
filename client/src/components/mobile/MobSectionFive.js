import React, { Component } from 'react'

// Components
import MenuItem from '../MenuItem'
import RequestDemo from '../RequestDemo'


export default class MobSectionFive extends Component {

    render() {
        return (
        <div className='sectionfive'>
            <div className="our_products_top_title industries hidden_elems hidden_alt slide">
                Industries
            </div>
            <div className="SectionFive">
                <div className="SectionTwoMain">
                    <MenuItem id={4} delay={0} icon={''} title={'FinTech'} text={'Achieve the best conversion from first engagement to deposit and optimal engagement with existing customers. Build loyalty through high resolution customer profiling at scale, and delivering ongoing customized dynamic content.'}/>
                    <MenuItem id={6} delay={2} icon={''} title={'Retail'} text={"Research shows that improving customer retention by as little as 5% can increase profits up to 95%. Our platform predicts behavior for customers with the most potential to become loyal supporters, giving you an essential tool to grow."}/>
                    <MenuItem id={5} delay={1} icon={''} title={'Gaming'} text={'Our platform is able to build a unified profile for each player, predict their customer value, and optimize marketing messaging to turn high-value players into whales.'}/> 
                </div>
            </div>
            <MenuItem id={5} delay={1} icon={''} title={'Gaming'} text={'Our platform is able to build a unified profile for each player, predict their customer value, and optimize marketing messaging to turn high-value players into whales.'}/>  
            <RequestDemo id={1} title={'Case studies'} button={'Receive further details'}/>
        </div>
        )
    }
}