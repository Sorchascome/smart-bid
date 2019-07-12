import React, { Component } from 'react'

// Components
import Services from '../Services'

export default class TabSectionFour extends Component {

    render() {
        return (
            <div className="SectionFour tab">
                <Services />
                <span className="photo second hidden_elems hidden_alt slide"></span>
                <span className="photo third hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}
