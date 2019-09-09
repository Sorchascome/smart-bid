import React, { Component } from 'react'
/* eslint-disable */
// Components
import SBlogo from './SBlogo'
import TopPanel from './TopPanel'
import TopTitle from './TopTitle'
import GetStarted from './GetStarted'
import HomeArrow from './HomeArrow'

export default class SectionOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.SectionOne'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
    }
    
    elementsAppear() {
        let element = document.querySelector('.SectionOne');
        let elemEnd = Math.abs((element.getBoundingClientRect().y + element.getBoundingClientRect().height/2) - document.body.getBoundingClientRect().y);

        if(window.scrollY < elemEnd  || this.state.show === true) {
            this.setState({show: true});
            let polys = [...document.body.querySelectorAll('.SectionOne > .poly, .polysmall, .hexgroup_top')];
            polys.forEach((poly) => {
                let random = Math.random() * 300;
                setTimeout(() => {poly.classList.remove('hidden')}, random);
            });
            window.removeEventListener('scroll', this.elementsAppear);
        }
    }
    

    componentDidMount() {
        let element = document.querySelector('.SectionOne');
        let elemStart = Math.abs(element.getBoundingClientRect().y - document.body.getBoundingClientRect().y);

        if (window.scrollY > elemStart) {
            window.addEventListener('scroll', this.elementsAppear);
        } else {
            this.setState({show: true});
            this.elementsAppear();
        }
    }


    render() {
        return (
            <div className='SectionOne top'>
                <div className="section_one_top">
                <a href="/"><SBlogo show={this.state.show} /></a>
                    <TopPanel show={true}/>
                </div>
                <div className="section_one_bottom">
                    <TopTitle show={this.state.show}/>
                    <GetStarted show={this.state.show}/>
                </div>
                <HomeArrow />
                <span className="poly first hidden slide"></span>
                <span className="poly second hidden slide"></span>
                <span className="poly third hidden slide"></span>
                <span className="poly fourth hidden slide"></span>
                <span className="polysmall first hidden slide"></span>
                <span className="polysmall second hidden slide"></span>
                <span className="polysmall third hidden slide"></span>
                <span className="polysmall fourth hidden slide"></span>
                <span className="polytrans slide"></span>
                <span className="hexgroup_top hidden slide"></span>
            </div>
        )
    }
}
