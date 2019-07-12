import React, { Component } from 'react'

// Components
import Technology from './Technology'
import TechMenu from './TechMenu'


export default class TabSectionThree extends Component {
    render() {
        return (
            <div className="TabSectionThree">
                <Technology />
                <TechMenu />
                <span className="graph first hidden_elems hidden_alt slide"></span>
                <span className="graph second hidden_elems hidden_alt slide"></span>
                <span className="hex_large first"></span>
            </div>
        )
    }
}
