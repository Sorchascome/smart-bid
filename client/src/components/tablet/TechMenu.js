import React, { Component } from 'react'

// Components
import MenuItemTech from '../MenuItemTech'
// Icons
import mol1 from '../../uploads/mol1.png'
import mol2 from '../../uploads/mol2.png'
import cube from '../../uploads/cube.png'

export default class TechMenu extends Component {
    render() {
        const firstList = ['Analytics', 'Realtime Tracking & Adserver', 'Predictive BI', 'Predictive PPC Facebook & Google management', 'Predictive Affiliate program'];
        return (
            <div className="TechMenu">
                <MenuItemTech show={this.props.show} delay={0} icon={mol1} title={'Unified MarTech Hub'} text={'Beat the vendor bloat by using Smart.bid unified marktech hub designed by online marketers for online marketers, keeping all your media channel management in one place.'} list={firstList}/>
                <MenuItemTech show={this.props.show} delay={1} icon={mol2} title={'Predictive Data Analytics'} text={'We extract information from your raw data, on-site or in-app user activity and visitor response to create rich customer profiles which constantly updates and reveals hidden potential  with our AI-driven targeting.'} list={[]}/>
                <MenuItemTech show={this.props.show} delay={2} icon={cube} title={'Speed and Ease'} text={'Easily explore new angles and new ideas to create scalable personalized content across multiple channels. Fulfill your business KPIs and metrics with maximum performance.'}  list={[]}/>
            </div>
        )
    }
}
