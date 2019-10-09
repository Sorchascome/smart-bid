import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { sendEmail } from '../store/actions/main'

// Components
import BottomTitle from './BottomTitle'
import ThankYou from './ThankYou'
import LayoutFooter from './LayoutFooter'

// Helpers
import { componentAppears } from '../helpers/componentAppears'
import { validateEmail } from '../helpers/validateEmail'

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.bottom_section'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
        this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    static propTypes = {
        sendEmail: PropTypes.func.isRequired,
    }

    handleGetStarted(e) {
        let emailField = e.target.previousSibling;
        if(validateEmail(emailField.value)) {
            let valueToSend = emailField.value;
            this.props.sendEmail(valueToSend);
            emailField.value = '';
            emailField.classList.remove('email_inc');
            emailField.placeholder = 'Enter Your Email';
            
            let inputs = [...document.querySelectorAll('.GetStarted, .RequestDemo, .RequestDemoAlt, .TabRequestDemo')];
            inputs.forEach((input) => {
                input.classList.add('inactive');
            })

            let thankyouPanel = [...document.querySelectorAll('.ThankYou')];
            thankyouPanel.forEach((target) => {
                let children = [...target.children];
                target.classList.remove('hidden_thankyou', 'hidden_alt');
                setTimeout(() => {
                    children.forEach((child) => {
                        child.classList.remove('hidden_alt');
                    })
                }, 10);
            })
            let buttons = [...document.querySelectorAll('.button_get_started')];
            buttons.forEach((button) => {
                button.removeEventListener("click", this.handleGetStarted);
            })
        } else {
            emailField.value = '';
            emailField.classList.add('email_inc');
            emailField.placeholder = 'Invalid format';
        }
    }

    elementsAppear() {
        let element = document.querySelector('.bottom_section');
        let prevElemH = element.previousSibling.getBoundingClientRect().height;
        let elemStart = Math.abs(element.getBoundingClientRect().y - prevElemH/2 - document.body.getBoundingClientRect().y);
        let elemEnd = Math.abs((element.getBoundingClientRect().y + element.getBoundingClientRect().height/2) - document.body.getBoundingClientRect().y);

        if((window.scrollY < elemEnd && window.scrollY > elemStart)  || this.state.show === true) {
            this.setState({show: true});
            let bottompolys = [...document.body.querySelectorAll('.SectionOne > .bottompoly, .bottompolysmall')];
            bottompolys.forEach((bottompoly) => {
                let random = 500 + Math.random() * 1000;
                setTimeout(() => {bottompoly.classList.remove('hidden')}, random);
            });
            let bottomGetStarted = document.body.querySelector('.bottom_section > .section_one_bottom > .BottomTitle > .GetStarted');
            setTimeout(() => {   
                bottomGetStarted.classList.remove('hidden');
                bottomGetStarted.style.animation = "textslide 0.25s 1";
            }, 1200);
            window.removeEventListener('scroll', this.elementsAppear);
        }
    }
    

    componentDidMount() {
        componentAppears(this, this.elementsAppear);

        // let buttons = [...document.querySelectorAll('.button_get_started')];
        // buttons.forEach((button) => {
        //     button.addEventListener("click", this.handleGetStarted);
        // })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.elementsAppear);
    }


    render() {
        return (
            <div className='SectionOne bottom_section desk'>
                <ThankYou />
                <div className="section_one_bottom">
                    <BottomTitle show={this.state.show}/>
                </div>
                <LayoutFooter show={this.state.show}/>
                <span className="bottompoly first hidden slide"></span>
                <span className="bottompoly second hidden slide"></span>
                <span className="bottompoly third hidden slide"></span>
                <span className="bottompoly fourth hidden slide"></span>
                <span className="bottompoly fifth hidden slide"></span>
                <span className="bottompolysmall first hidden slide"></span>
                <span className="bottompolysmall second hidden slide"></span>
                <span className="bottompolysmall third hidden slide"></span>
                <span className="bottompolysmall fourth hidden slide"></span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})
  
const dispatchToProps = (dispatch) => ({
    sendEmail: (email) => dispatch(sendEmail(email))
})

export default connect(mapStateToProps, dispatchToProps)(Footer);
