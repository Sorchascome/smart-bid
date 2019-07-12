import React, { Component } from 'react'

// Components
import Services from '../Services'

export default class MobSectionFour extends Component {

    render() {
        return (
            <div className="SectionFour mob">
                <Services />
                <span className="photo second"></span>
                <span className="photo third"></span>
            </div>
        )
    }
}
