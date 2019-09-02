import React, { Component } from 'react'

// Components
import MenuItemTech from './MenuItemTech'
// Icons
import mol1 from '../uploads/mol1.png'
import mol2 from '../uploads/mol2.png'
import cube from '../uploads/cube.png'

export default class TechMenu extends Component {
    render() {
        const firstList = ['Analytics', 'Realtime Tracking & Adserver', 'Predictive BI', 'Predictive PPC Facebook & Google management', 'Predictive Affiliate program'];
        return (
            <div className="TechMenu">
                <MenuItemTech show={this.props.show} delay={0} icon={mol1} title={'Leveraging every data point'} text={'Our unique infrastructure allows us to collect, analyze, and process vast amounts of data in real time. Tens of thousands of micro-events per user allow us to reach high prediction accuracy.'} list={[]}/>
                <MenuItemTech show={this.props.show} delay={1} icon={mol2} title={'Modeling behavior for each customer'} text={'We connect behavioral patterns and traits between customers from different verticals. Our modeling framework gives us the ability to quickly infer a user’s profile and reach predictions much faster.'} list={[]}/>
            </div>
        )
    }
}
