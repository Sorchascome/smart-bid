import React, { Component } from 'react'

// Components
import Technology from './Technology'
import TechMenu from './TechMenu'

// Helpers
import { componentAppears } from '../helpers/componentAppears'

export default class SectionThree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.SectionThree'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
    }
    
    elementsAppear() {
        let element = document.querySelector('.SectionThree');
        let prevElemH = element.previousSibling.getBoundingClientRect().height;
        let elemStart = Math.abs(element.getBoundingClientRect().y - prevElemH/2 - document.body.getBoundingClientRect().y);
        let elemEnd = Math.abs((element.getBoundingClientRect().y + element.getBoundingClientRect().height) - document.body.getBoundingClientRect().y);

        if((window.scrollY < elemEnd && window.scrollY > elemStart)  || this.state.show === true) {
            this.setState({show: true});
            let hexes = [...document.body.querySelectorAll('.SectionThree > .hexgroup_large, .hex_large')];
            let graphs = [...document.body.querySelectorAll('.SectionThree > .graph')];
            let graphcount = 1200;
            hexes.forEach((hex) => {
                setTimeout(() => {hex.classList.remove('hidden_alt')}, 300);
            });
            graphs.forEach((graph) => {
                setTimeout(() => {graph.classList.remove('hidden_alt')}, graphcount);
                graphcount += 300;
            });
            window.removeEventListener('scroll', this.elementsAppear);
        }
    }

    componentDidMount() {
        componentAppears(this, this.elementsAppear);
    }

    render() {
        return (
            <div className="SectionThree">
                <Technology show={this.state.show}/>
                <TechMenu show={this.state.show}/>
                <span className="graph first hidden_elems hidden_alt slide"></span>
                <span className="graph second hidden_elems hidden_alt slide"></span>
                <span className="hexgroup_large first hidden_elems hidden_alt slide"></span>
                <span className="hexgroup_large second hidden_elems hidden_alt slide"></span>
                <span className="hex_large first hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}
