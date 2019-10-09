import React, { Component } from 'react'

// Components
import PrivacyPage from '../components/PrivacyPage'
import LayoutFooter from '../components/LayoutFooter'

export default class Privacy extends Component {
    render() {
        return (
            <div className="Privacy">
                <div className="privacy_header">
                    <a href="/"><div className="privacyLogo"></div></a>       
                </div>
                <PrivacyPage />
                <LayoutFooter show={true}/>
            </div>
        )
    }
}
