import React, { Component } from 'react'

// Components
import TabTopPanel from './TabTopPanel'
import TopTitle from './TopTitle'
import GetStarted from './GetStarted'

export default class TabSectionOne extends Component {
    render() {
        return (
            <div className='TabSectionOne'>
                <TabTopPanel />
                <div className="section_one_tab">
                    <TopTitle />
                    <GetStarted />
                </div>
                <span className="tab_hexgroup"></span>
            </div>
        )
    }
}
