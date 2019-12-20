import React, { Component } from 'react'

import withFallingLetters from './withFallingLetters'

class OurClients extends Component {
    
    componentDidUpdate() {
        if (this.props.show) this.props.triggerLetterfall(this.falling)
    }

    render() {
        return (
            <div className='OurClients slide' ref = {ref => this.falling = ref}>
                <div className={"our_clients_top_title slide" + ((this.props.show) ? '' : ' hidden_alt')}>
                    Our clients
                </div>
                <div className="our_clients_main_title trigger hidden_alt">
                    <div>
                        Some of Smart.bid’s clients
                    </div>
                </div>
                <div className={"our_clients_subtitle slide" + ((this.props.show) ? '' : ' hidden_alt')}>
                    From performance focused customer acquisition campaigns to brand led content promotions, our ability to plan, launch and deliver at scale and across multiple markets is unrivalled.
                </div>
            </div>
        )
    }
}

export default withFallingLetters(OurClients)
