import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* eslint-disable */
// Components
import SBlogo from './SBlogo'
import TopPanel from './TopPanel'
import TopTitle from './TopTitle'
import GetStarted from './GetStarted'
import HomeArrow from './HomeArrow'

// HOC
import withElementsAppear from './withElementsAppear'

class SectionOne extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        const pollies = ['first', 'second', 'third']

        return (
            <div className='SectionOne top' ref = {ref => this.Section = ref}>
                <div className="section_one_top">
                <Link to="/"><SBlogo show={this.props.isVisible} /></Link>
                    <TopPanel show={true}/>
                </div>
                <div className="section_one_bottom">
                    <TopTitle />
                    <GetStarted />
                </div>
                <HomeArrow />
                {pollies.map(polly => <span key={polly} className={"poly " + polly + " hidden slide"}></span>)}
                {pollies.map(polly => <span key={polly} className={"polysmall " + polly + " hidden slide"}></span>)}
                <span className="hexgroup_top hidden slide"></span>
            </div>
        )
    }
}

export default withElementsAppear(SectionOne)
