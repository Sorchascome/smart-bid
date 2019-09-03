import React, { Component } from 'react'

// Components
import Services from './Services'

// Helpers
import { componentAppears } from '../helpers/componentAppears'

export default class SectionFour extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.SectionFour'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
    }
    
    elementsAppear() {
        let element = document.querySelector('.SectionFour');
        let prevElemH = element.previousSibling.getBoundingClientRect().height;
        let elemStart = Math.abs(element.getBoundingClientRect().y - prevElemH - document.body.getBoundingClientRect().y);
        let elemEnd = Math.abs((element.getBoundingClientRect().y + element.getBoundingClientRect().height) - document.body.getBoundingClientRect().y);

        if((window.scrollY < elemEnd && window.scrollY > elemStart)  || this.state.show === true) {
            this.setState({show: true});
            let hexes = [...document.body.querySelectorAll('.SectionFour > .hexgroup_serv')];
            let graphs = [...document.body.querySelectorAll('.SectionFour > .photo')];
            let graphcount = 1200;
            hexes.forEach((hex) => {
                setTimeout(() => {hex.classList.remove( 'hidden_alt')}, 300);
            });
            graphs.forEach((graph) => {
                setTimeout(() => {graph.classList.remove( 'hidden_alt')}, graphcount);
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
            <div className="SectionFour desk">
                 <Services show={this.state.show}/>
                <span className="hexgroup_serv hidden_elems hidden_alt slide"></span>
                <span className="photo first hidden_elems hidden_alt slide"></span>
                <span className="photo second hidden_elems hidden_alt slide"></span>
                <span className="photo third hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}
