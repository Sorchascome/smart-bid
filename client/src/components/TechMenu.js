import React, { Component } from 'react'

// Components
import MenuItemTech from './MenuItemTech'

export default class TechMenu extends Component {
    render() {
        return (
            <div className="TechMenu">
                <MenuItemTech show={this.props.show} delay={0} title={'Leveraging every data point'} text={'Our unique infrastructure allows us to collect, analyze, and process vast amounts of data in real time. Tens of thousands of micro-events per user allow us to reach high prediction accuracy.'} list={[]}/>
                <MenuItemTech show={this.props.show} delay={1} title={'Modeling behavior for each customer'} text={'We connect behavioral patterns and traits between customers from different verticals. Our modeling framework gives us the ability to quickly infer a user’s profile and reach predictions much faster.'} list={[]}/>
            </div>
        )
    }
}
