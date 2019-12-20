import React, { Component } from 'react'

// Components
import Technology from './Technology'
import TechMenu from './TechMenu'

// HOC
import withElementsAppear from './withElementsAppear'

class SectionThree extends Component {

    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        const pollies = ['first', 'second']

        return (
            <div className="SectionThree" ref = {ref => this.Section = ref}>
                <Technology/>
                <TechMenu show={this.props.isVisible}/>
                {pollies.map(polly => <span key={polly} className={"graph " + polly + " hidden_alt slide"}></span>)}
                {pollies.map(polly => <span key={polly} className={"hexgroup_large " + polly + " hidden_alt slide"}></span>)}
            </div>
        )
    }
}

export default withElementsAppear(SectionThree)
