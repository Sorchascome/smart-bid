import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

const withElementsAppear = (WrappedComponent) => {
    return class WrapperComponent extends Component {

        elementsAppear(Section) {
            if (Section.classList.contains('hidden') || Section.classList.contains('hidden_alt')) setTimeout(() => Section.classList.remove('hidden', 'hidden_alt'), 1250)

            let hiddenChildren = Array.from(Section.children).filter(child => child.classList.contains('hidden') || child.classList.contains('hidden_alt')),
            timeCount = 0
            hiddenChildren.map(hidden => {
                setTimeout(() => hidden.classList.remove('hidden', 'hidden_alt'),timeCount)
                timeCount += Math.random()*200
            })
        }
    
        render() {
            return (
                <TrackVisibility once partialVisibility>
                    <WrappedComponent {...this.props}
                        elementsAppear={this.elementsAppear} />
                </TrackVisibility>
            )
        }
    }
}

export default withElementsAppear

