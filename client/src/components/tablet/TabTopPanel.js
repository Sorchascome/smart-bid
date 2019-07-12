import React, { Component } from 'react'

import logo from '../../uploads/sbtablogo.png'

export default class TabTopPanel extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(e) {
        e.preventDefault();
        let activatedLink = e.target;
        let gotoClass = e.target.getAttribute('value');
        let gotoElemY = Math.abs(document.querySelector('.SectionOne').getBoundingClientRect().y - document.querySelector(gotoClass).getBoundingClientRect().y);
        window.scroll({
            top: gotoElemY, 
            left: 0,    
            behavior: 'smooth'
          });
        
        let links = [...document.body.querySelectorAll('.panel_right > a')];
        links.forEach(link => {link.classList.remove('active')});
        activatedLink.classList.add('active');
    }

    render() {
        return (
            <div className='TabTopPanel'>
                <img className='sb_top_logo' src={logo} alt='Smart bid'></img>
                <div className='panel_right'>
                    <a className='tab_panel_link' href="#" value=".TabAboutUs" onClick={this.handleClick}>About Us</a>
                    <a className='tab_panel_link' href="#" value=".Technology.tab" onClick={this.handleClick}>Technology</a>
                    <a className='tab_panel_link' href="#" value=".OurProducts.tab" onClick={this.handleClick}>Products</a>
                    <a className='tab_panel_link' href="#" value=".SectionFour.tab" onClick={this.handleClick}>Services</a>
                    <a className='tab_panel_link' href="#" value=".bottom_section.tab" onClick={this.handleClick}>Contacts</a>
                </div>
            </div>
        )
    }
}
