import React, { Component } from 'react'

// Components
import MobTopPanel from './MobTopPanel'
import TopTitle from './TopTitle'
import MobGetStarted from './MobGetStarted'

export default class MobSectionOne extends Component {
    render() {
        return (
            <div className='MobSectionOne'>
                <MobTopPanel />
                <div className="section_one_tab">
                    <TopTitle />
                    <MobGetStarted />
                </div>
                <span className="hexgroup_mob"></span>
            </div>
        )
    }
}
