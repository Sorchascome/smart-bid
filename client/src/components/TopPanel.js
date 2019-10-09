import React, { Component } from 'react'
/* eslint-disable */
export default class TopPanel extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        let panel = document.querySelector('.TopPanel');
        let panelLinks = [...panel.children]
        let panelY = Math.abs(panel.getBoundingClientRect().y - document.querySelector('.SectionOne.top').getBoundingClientRect().y);
        let sectionOneEnding = document.querySelector('.SectionOne.top').getBoundingClientRect().height;
        let footerStart = Math.abs(document.querySelector('.bottom_section.desk').getBoundingClientRect().y - document.querySelector('.SectionOne.top').getBoundingClientRect().y);
    }

    handleClick(e) {
        e.preventDefault();
        let activatedLink = e.target;
        let gotoClass = e.target.getAttribute('value');
        let gotoElemY = Math.abs(document.querySelector('.SectionOne').getBoundingClientRect().y - document.querySelector(gotoClass).getBoundingClientRect().y + (gotoClass === '.Technology.desk' ? 50 : 0));
        window.scroll({
            top: gotoElemY, 
            left: 0, 
            behavior: 'smooth'
          });
        
        let links = [...document.body.querySelectorAll('.TopPanel > a')];
        links.forEach(link => {link.classList.remove('active')});
        activatedLink.classList.add('active');
    }

    componentDidMount() {
        if (this.props.show === true) {
            let Component = document.querySelector('.TopPanel');
            setTimeout(() => {Component.classList.remove('hidden')}, 500);
            let links = [...document.body.querySelectorAll('.TopPanel > a')];
            setTimeout(() => {links[2].classList.add('active')}, 1000); } 

        document.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className='TopPanel slide hidden'>
                <a className='top_panel_link' href="#" value=".AboutUs.desk" onClick={this.handleClick}>About us</a>
                <a className='top_panel_link' href="#" value=".Technology.desk" onClick={this.handleClick}>Technology</a>
                <a className='top_panel_link' href="#" value=".OurProducts.desk" onClick={this.handleClick}>Products</a>
                <a className='top_panel_link' href="#" value=".SectionFour.desk" onClick={this.handleClick}>Services</a>
                <a className='top_panel_link' href="#" value=".section_footer.desk" onClick={this.handleClick}>Contact us</a>
                <a className='top_panel_link' href="#" value=".section_footer.desk" onClick={this.handleClick}>Careers</a>
            </div>
        )
    }
}
