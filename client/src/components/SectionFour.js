import React, { Component } from 'react'

// Components
import Services from './Services'

// HOC
import withElementsAppear from './withElementsAppear'

class SectionFour extends Component {
    
    componentDidUpdate() {
        if (this.props.isVisible) this.props.elementsAppear(this.Section)
    }

    render() {
        return (
            <div className="SectionFour desk" ref = {ref => this.Section = ref}>
                <Services isVisible={this.props.isVisible}/>
                <span className="hexgroup_serv hidden_elems hidden_alt slide"></span>
                <span className="photo first hidden_elems hidden_alt slide"></span>
                <span className="photo second hidden_elems hidden_alt slide"></span>
                <span className="photo third hidden_elems hidden_alt slide"></span>
            </div>
        )
    }
}

export default withElementsAppear(SectionFour)
