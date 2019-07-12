import React, { Component } from 'react'

// Components
import BottomTitle from './BottomTitle'
import GetStarted from './GetStarted'
import ThankYou from './ThankYou'

// Logo
import logo from '../uploads/footer_logo.png'
import point from '../uploads/point.png'
import envelope from '../uploads/envelope.png'

// Helpers
import { componentAppears } from '../helpers/componentAppears'
import { validateEmail } from '../helpers/validateEmail'

export default class SectionOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            class: '.bottom_section'
        }

        this.elementsAppear = this.elementsAppear.bind(this);
        this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    handleGetStarted(e) {
        let emailField = e.target.previousSibling;
        if(validateEmail(emailField.value)) {
            emailField.value = '';
            emailField.classList.remove('email_inc');
            emailField.placeholder = 'Enter Your Email';
            
            let inputs = [...document.querySelectorAll('.GetStarted, .RequestDemo')];
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
            let bottomGetStarted = document.body.querySelector('.bottom_section > .section_one_bottom > .GetStarted');
            setTimeout(() => {   
                bottomGetStarted.classList.remove('hidden');
                bottomGetStarted.style.animation = "textslide 0.25s 1";
            }, 1200);
            let bottomFooter = [...document.body.querySelectorAll('.bottomLogo, .bottomInfo')];
            bottomFooter.forEach((elem) => {
                setTimeout(() => {   
                    elem.classList.remove('hidden_alt');
                }, 1500)});
            window.removeEventListener('scroll', this.elementsAppear);
        }
    }
    

    componentDidMount() {
        componentAppears(this, this.elementsAppear);

        let buttons = [...document.querySelectorAll('.button_get_started')];
        buttons.forEach((button) => {
            button.addEventListener("click", this.handleGetStarted);
        })
    }


    render() {
        return (
            <div className='SectionOne bottom_section'>
                <ThankYou />
                <div className="section_one_bottom">
                    <BottomTitle show={this.state.show}/>
                    <GetStarted />
                </div>
                <div className="section_footer desk">
                    <div className="bottomLogo hidden_alt slide"><img src={logo} alt='logo'></img></div>
                    <div className="bottomInfo hidden_alt slide">
                        <span className="info_bar"><img src={point} alt='point'></img><span>Yigal Alon 94, Tel-Aviv, Israel</span></span>
                        <span className="info_bar"><img src={envelope} alt='envelope'></img><span>contact@smart.bid</span></span>
                    </div>
                </div>
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
