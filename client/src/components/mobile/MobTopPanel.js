import React, { Component } from 'react'
/* eslint-disable */
import logo from '../../uploads/sbtablogo.png'
import menu from '../../uploads/mobmenu.png'

export default class MobTopPanel extends Component {
    constructor() {
        super();

        this.toggleMenu = false;
        this.handleClick = this.handleClick.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu() {
        this.toggleMenu = !this.toggleMenu;
        let menu = document.querySelector('.mob_panel_right');
        this.toggleMenu ? menu.classList.remove('hidden_menu') : menu.classList.add('hidden_menu')

    }

    handleClick(e) {
        e.preventDefault();
        let activatedLink = e.target;
        let gotoClass = e.target.getAttribute('value');
        let gotoElemY = Math.abs(document.querySelector('.MobSectionOne').getBoundingClientRect().y - document.querySelector(gotoClass).getBoundingClientRect().y);
        window.scroll({
            top: gotoElemY,
            left: 0, 
            behavior: 'smooth'
          });
        
        let links = [...document.body.querySelectorAll('.panel_right > a')];
        links.forEach(link => {link.classList.remove('active')});
        activatedLink.classList.add('active');
        this.toggleMenu = !this.toggleMenu;
        e.target.parentElement.classList.add('hidden_menu');
    }

    render() {
        return (
            <div className='MobTopPanel'>
                <img className='sb_top_logo' src={logo} alt='Smart bid'></img>
                <a href='#' onClick={this.handleMenu}><img className='mob_menu' src={menu} alt='Menu'></img></a>
                <div className='mob_panel_right hidden_menu'>
                    <a className='mob_panel_link' href="#" value=".TabAboutUs.mob" onClick={this.handleClick}>About Us</a>
                    <a className='mob_panel_link' href="#" value=".MobTechnology" onClick={this.handleClick}>Technology</a>
                    <a className='mob_panel_link' href="#" value=".TabSectionTwo.mob" onClick={this.handleClick}>Products</a>
                    <a className='mob_panel_link' href="#" value=".SectionFour.mob" onClick={this.handleClick}>Services</a>
                    <a className='mob_panel_link' href="#" value=".MobFooter" onClick={this.handleClick}>Contacts</a>
                </div>
            </div>
        )
    }
}
